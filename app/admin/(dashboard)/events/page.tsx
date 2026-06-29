"use client";
import { useEffect, useState } from "react";
import { QuarterPlanner } from "@/components/admin/Meetings/QuarterPlanner";
import { MeetingStats } from "@/components/admin/Meetings/Stats";
import { MeetingTable } from "@/components/admin/Meetings/Tables";
import { UpcomingMeetingsCard } from "@/components/admin/Meetings/Upcoming";
import { Meeting } from "@/types/meeting";
import { QuarterMeetingDialog } from "@/components/admin/dialog/QuarterEventDialog";
import { MeetingDialog } from "@/components/admin/dialog/MeetingDialog";

export default function DashboardEvents() {
  const [loading, setLoading] = useState(true);
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [weeklyMeetings, setWeeklyMeetings] = useState<Meeting[]>([]);
  const [upcomingMeetings, setUpcomingMeetings] = useState<Meeting[]>([]);
  const [quarterMeetings, setQuarterMeetings] = useState<Meeting[]>([]);
  const [meetingDialogOpen, setMeetingDialogOpen] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  /**
   * Fetch all meeting data
   */
  const fetchMeetings = async () => {
    try {
      setLoading(true);

      const [
        meetingsRes,
        weeklyRes,
        upcomingRes,
        quarterRes,
      ] = await Promise.all([
        fetch("/api/meetings"),
        fetch("/api/meetings/weekly"),
        fetch("/api/meetings/upcoming"),
        fetch("/api/meetings/quarter"),
      ]);

      const [
        meetingsJson,
        weeklyJson,
        upcomingJson,
        quarterJson,
      ] = await Promise.all([
        meetingsRes.json(),
        weeklyRes.json(),
        upcomingRes.json(),
        quarterRes.json(),
      ]);

      setMeetings(meetingsJson.data || []);
      setWeeklyMeetings(weeklyJson.data || []);
      setUpcomingMeetings(upcomingJson.data || []);
      setQuarterMeetings(quarterJson.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeetings();
  }, []);

  /**
   * Delete recurring meeting
   */
  const handleMeetingDelete = async (
    meeting: Meeting
  ) => {
    if (!confirm(`Delete "${meeting.title}"?`))
      return;

    try {
      const res = await fetch(
        `/api/meetings/${meeting._id}`,
        {
          method: "DELETE",
        }
      );

      const json = await res.json();

      if (json.success) {
        fetchMeetings();
      }
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * Delete quarter planner event
   */
  const handleQuarterDelete = async (
    meeting: Meeting
  ) => {
    if (!confirm(`Delete "${meeting.title}"?`))
      return;

    try {
      const res = await fetch(
        `/api/meetings/quarter/${meeting._id}`,
        {
          method: "DELETE",
        }
      );

      const json = await res.json();

      if (json.success) {
        fetchMeetings();
      }
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * Create
   */
  const handleQuarterAdd = (
    month: string
  ) => {
    setSelectedMeeting(null);
    setSelectedMonth(month);
    setDialogOpen(true);
  };

  /**
   * Edit
   */
  const handleQuarterEdit = (
    meeting: Meeting
  ) => {
    setSelectedMeeting(meeting);
    setSelectedMonth(null);
    setDialogOpen(true);
  };

  return (
    <>
      <MeetingStats
        total={meetings.length}
        weekly={weeklyMeetings.length}
        upcoming={upcomingMeetings.length}
        quarterly={quarterMeetings.length}
      />

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
        <MeetingTable
          meetings={meetings}
          loading={loading}
          onAdd={() => {
              setSelectedMeeting(null);
              setMeetingDialogOpen(true);
          }}
          onEdit={(meeting) => {
              setSelectedMeeting(meeting);
              setMeetingDialogOpen(true);
          }}
          onDelete={handleMeetingDelete}
      />

      <MeetingDialog
          open={meetingDialogOpen}
          onOpenChange={setMeetingDialogOpen}
          meeting={selectedMeeting}
          onSaved={() => {
              fetchMeetings();
              setSelectedMeeting(null);
          }}
      />
        </div>

        <UpcomingMeetingsCard
          meetings={upcomingMeetings}
        />
      </div>

      <div className="mt-6">
        <QuarterPlanner
          meetings={quarterMeetings}
          onAdd={handleQuarterAdd}
          onEdit={handleQuarterEdit}
          onDelete={handleQuarterDelete}
        />
      </div>

      <QuarterMeetingDialog
        open={dialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open);

          if (!open) {
            setSelectedMeeting(null);
            setSelectedMonth(null);
          }
        }}
        meeting={selectedMeeting}
        selectedMonth={selectedMonth}
        onSaved={async () => {
          setDialogOpen(false);

          setSelectedMeeting(null);
          setSelectedMonth(null);

          await fetchMeetings();
        }}
      />
    </>
  );
}