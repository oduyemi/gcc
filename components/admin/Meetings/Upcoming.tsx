"use client";

import { AdminCard } from "@/components/admin/Cards";
import { Meeting } from "@/types/meeting";
import { CalendarDays } from "lucide-react";
import dayjs from "dayjs";

interface Props {
    meetings?: Meeting[];
}
  
export const UpcomingMeetingsCard = ({meetings = []}: Props) => {
    return (
        <AdminCard>
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
            Upcoming Meetings
            </h2>

            <CalendarDays className="text-primary" />
        </div>

        <div className="mt-6 space-y-4">
            {meetings.map((meeting) => (
            <div
                key={meeting._id}
                className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-4
                "
            >
                <h3 className="font-semibold text-white">
                {meeting.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                {meeting.nextOccurrence
                    ? dayjs(meeting.nextOccurrence).format(
                        "ddd, MMM D YYYY"
                    )
                    : "No upcoming date"}
                </p>
            </div>
            ))}
        </div>
        </AdminCard>
    );
};