"use client";
import { useMemo } from "react";
import dayjs from "dayjs";
import { Clock3, CalendarPlus, Pencil, MapPin, Trash2, CalendarDays } from "lucide-react";
import { AdminCard } from "@/components/admin/Cards";
import { Button } from "@/components/ui/button";
import { Meeting } from "@/types/meeting";

interface Props {
  meetings: Meeting[];
  loading?: boolean;
  onAdd: (month: string) => void;
  onEdit: (meeting: Meeting) => void;
  onDelete: (meeting: Meeting) => void;
}

export const QuarterPlanner = ({
  meetings,
  loading = false,
  onAdd,
  onEdit,
  onDelete,
}: Props) => {
  const months = useMemo(() => {
    const currentMonth = dayjs().month();
    const quarterStart = Math.floor(currentMonth / 3) * 3;
  
    return Array.from({ length: 3 }, (_, i) =>
      dayjs()
        .month(quarterStart + i)
        .format("MMMM")
    );
  }, []);

  return (
    <AdminCard>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Quarterly Planner
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Plan and manage special events for this quarter.
          </p>
        </div>

        <CalendarDays className="text-primary" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {months.map((month) => {
          const monthEvents = meetings
            .filter((meeting) => {
              if (!meeting.startDate) return false;

              return (
                dayjs(meeting.startDate).format("MMMM") === month
              );
            })
            .sort((a, b) =>
              dayjs(a.startDate).unix() -
              dayjs(b.startDate).unix()
            );

          return (
            <div
              key={month}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-5
                transition-all
                duration-200
                hover:border-primary/20
                hover:bg-white/[0.06]
                "
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-white">
                    {month}
                  </h3>

                  <p className="text-xs text-slate-500">
                    {monthEvents.length} scheduled
                  </p>
                </div>

                <Button
                  size="icon"
                  variant="secondary"
                  onClick={() => onAdd(month)}
                >
                  <CalendarPlus size={16} />
                </Button>
              </div>

              <div className="mt-5 space-y-3">
              {loading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="space-y-2">
                    <div className="h-4 w-40 animate-pulse rounded bg-white/5" />
                    <div className="h-3 w-28 animate-pulse rounded bg-white/5" />
                    <div className="h-3 w-20 animate-pulse rounded bg-white/5" />
                  </div>
                </div>
              ))
            ) : monthEvents.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-white/10 py-8 text-center">
                <CalendarDays className="mx-auto mb-3 h-6 w-6 text-slate-500" />
            
                <p className="font-medium text-white">
                    No events
                </p>
            
                <p className="mt-1 text-xs text-slate-400">
                    Add an event for {month}.
                </p>
            </div>
                ) : (
                  monthEvents.map((meeting) => (
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
                      <div className="flex items-start justify-between gap-3">
                        <div className="mt-3 space-y-2">
                          <p className="flex items-center gap-2 text-xs text-slate-400">
                            <CalendarDays className="h-3.5 w-3.5" />
                            {dayjs(meeting.startDate).format("ddd, DD MMM YYYY")}
                          </p>

                          {meeting.time && (
                            <p className="flex items-center gap-2 text-xs text-slate-500">
                              <Clock3 className="h-3.5 w-3.5" />
                              {meeting.time}
                            </p>
                          )}

                          {meeting.location && (
                            <p className="flex items-center gap-2 text-xs text-slate-500">
                              <MapPin className="h-3.5 w-3.5" />
                              <span className="truncate">
                                {meeting.location}
                              </span>
                            </p>
                          )}
                        </div>

                        <div className="flex gap-2">
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() =>
                              onEdit(meeting)
                            }
                          >
                            <Pencil size={15} />
                          </Button>

                          <Button
                            size="icon"
                            variant="ghost"
                            className="text-red-500 hover:text-red-600"
                            onClick={() =>
                              onDelete(meeting)
                            }
                          >
                            <Trash2 size={15} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </AdminCard>
  );
};