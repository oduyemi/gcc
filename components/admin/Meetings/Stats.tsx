"use client";

import { CalendarDays, Clock3, CalendarRange, Activity } from "lucide-react";
import { AdminCard } from "@/components/admin/Cards";

interface Props {
  total: number;
  weekly: number;
  upcoming: number;
  quarterly: number;
}

export const MeetingStats = ({
  total,
  weekly,
  upcoming,
  quarterly,
}: Props) => {
  const stats = [
    {
      title: "Total Meetings",
      value: total,
      icon: CalendarDays,
    },
    {
      title: "This Week",
      value: weekly,
      icon: Clock3,
    },
    {
      title: "Upcoming",
      value: upcoming,
      icon: Activity,
    },
    {
      title: "Quarter Schedule",
      value: quarterly,
      icon: CalendarRange,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <AdminCard key={stat.title}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">
                {stat.title}
              </p>

              <h3 className="mt-2 text-3xl font-bold text-white">
                {stat.value}
              </h3>
            </div>

            <div className="rounded-2xl bg-primary/20 p-3">
              <stat.icon
                size={22}
                className="text-primary"
              />
            </div>
          </div>
        </AdminCard>
      ))}
    </div>
  );
};