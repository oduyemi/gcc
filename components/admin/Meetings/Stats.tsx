"use client";
import {
  Activity,
  CalendarDays,
  CalendarRange,
  Clock3,
} from "lucide-react";
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
      description: "All scheduled meetings",
      icon: CalendarDays,
      color: "text-blue-400",
      bg: "bg-blue-500/15",
    },
    {
      title: "This Week",
      value: weekly,
      description: "Meetings this week",
      icon: Clock3,
      color: "text-emerald-400",
      bg: "bg-emerald-500/15",
    },
    {
      title: "Upcoming",
      value: upcoming,
      description: "Next 30 days",
      icon: Activity,
      color: "text-amber-400",
      bg: "bg-amber-500/15",
    },
    {
      title: "Quarterly",
      value: quarterly,
      description: "Quarterly meetings",
      icon: CalendarRange,
      color: "text-violet-400",
      bg: "bg-violet-500/15",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <AdminCard
            key={stat.title}
            className="group transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">
                  {stat.title}
                </p>

                <h3 className="mt-3 text-4xl font-bold text-white">
                  {stat.value}
                </h3>

                <p className="mt-2 text-xs text-slate-500">
                  {stat.description}
                </p>
              </div>

              <div
                className={`rounded-2xl p-3 transition-transform duration-300 group-hover:scale-110 ${stat.bg}`}
              >
                <Icon
                  size={24}
                  className={stat.color}
                />
              </div>
            </div>
          </AdminCard>
        );
      })}
    </div>
  );
};