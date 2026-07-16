"use client";
import { LucideIcon } from "lucide-react";
import { AdminCard } from "@/components/admin/Cards";


export interface StatItem {
  label: string;
  value: string | number;
  icon: LucideIcon;
}

interface StatsGridProps {
  stats: StatItem[];
  loading?: boolean;
  columns?: 2 | 3 | 4;
}

export const StatsGrid = ({
  stats,
  loading = false,
  columns = 4,
}: StatsGridProps) => {
  const gridClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 xl:grid-cols-3",
    4: "md:grid-cols-2 xl:grid-cols-4",
  }[columns];

  return (
    <div className={`grid gap-6 ${gridClass}`}>
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <AdminCard key={stat.label}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {stat.label}
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                  {loading ? "..." : stat.value}
                </h3>
              </div>

              <Icon className="text-primary" size={24} />
            </div>
          </AdminCard>
        );
      })}
    </div>
  );
}