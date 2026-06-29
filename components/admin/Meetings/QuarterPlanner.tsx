"use client";

import { AdminCard } from "@/components/admin/Cards";

export const QuarterPlanner = () => {
  const months = [
    "July",
    "August",
    "September",
  ];

  return (
    <AdminCard>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">
          Quarterly Planner
        </h2>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {months.map((month) => (
          <div
            key={month}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-4
            "
          >
            <h3 className="font-semibold text-white">
              {month}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Scheduled recurring meetings
              will appear here.
            </p>
          </div>
        ))}
      </div>
    </AdminCard>
  );
};