"use client";
import { AdminCard } from "@/components/admin/Cards";
import { Meeting } from "@/types/meeting";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import dayjs from "dayjs";

interface Props {
  meetings?: Meeting[];
}

export const UpcomingMeetingsCard = ({
  meetings = [],
}: Props) => {
  return (
    <AdminCard>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">
          Upcoming Meetings
        </h2>

        <CalendarDays className="text-primary" />
      </div>

      <div className="mt-6 space-y-4">
        {meetings.length === 0 ? (
          <div
            className="
              rounded-2xl
              border
              border-dashed
              border-white/10
              p-6
              text-center
            "
          >
            <p className="text-sm text-slate-400">
              No upcoming meetings found.
            </p>
          </div>
        ) : (
          meetings.map((meeting) => (
            <div
              key={meeting._id}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-4
                transition-all
                hover:bg-white/10
              "
            >
              <h3 className="font-semibold text-white">
                {meeting.title}
              </h3>

              <div className="mt-2 space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Clock3 size={14} />
                  <span>
                    {meeting.nextOccurrence
                      ? dayjs(
                          meeting.nextOccurrence
                        ).format(
                          "ddd, MMM D YYYY"
                        )
                      : "No upcoming date"}
                  </span>
                </div>

                {meeting.location && (
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <MapPin size={14} />
                    <span>
                      {meeting.location}
                    </span>
                  </div>
                )}

                {meeting.frequency && (
                  <div className="text-xs uppercase tracking-wide text-primary">
                    {meeting.frequency}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </AdminCard>
  );
};