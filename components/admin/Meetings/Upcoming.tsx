"use client";
import { AdminCard } from "@/components/admin/Cards";
import { Meeting } from "@/types/meeting";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import dayjs from "dayjs";

interface Props {
  meetings?: Meeting[];
  loading?: boolean;
}

export const UpcomingMeetingsCard = ({
  meetings = [],
  loading = false,
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
        {loading ? (
          <>
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="mb-4 h-5 w-48 animate-pulse rounded bg-white/5" />

                <div className="space-y-3">
                  <div className="h-4 w-40 animate-pulse rounded bg-white/5" />
                  <div className="h-4 w-52 animate-pulse rounded bg-white/5" />
                  <div className="h-5 w-20 animate-pulse rounded-full bg-white/5" />
                </div>
              </div>
            ))}
          </>
        ) : meetings.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5">
              <CalendarDays className="h-7 w-7 text-slate-500" />
            </div>

            <h3 className="font-medium text-white">
              No upcoming meetings
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Create your first meeting or event to see it here.
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
                duration-200
                hover:border-primary/30
                hover:bg-white/10
                hover:shadow-lg
                hover:shadow-primary/5
              "
            >
              <h3 className="truncate font-semibold text-white">
                {meeting.title}
              </h3>

              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Clock3
                    size={14}
                    className="shrink-0"
                  />

                  <span>
                    {meeting.nextOccurrence
                      ? dayjs(meeting.nextOccurrence).format(
                          "ddd, DD MMM YYYY"
                        )
                      : "No upcoming date"}
                  </span>
                </div>

                {meeting.location && (
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <MapPin
                      size={14}
                      className="shrink-0"
                    />

                    <span className="truncate">
                      {meeting.location}
                    </span>
                  </div>
                )}

                {meeting.frequency && (
                  <div>
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary">
                      {meeting.frequency}
                    </span>
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