"use client";
import { useMemo } from "react";
import dayjs from "dayjs";
import { Droplets, Clock3, CheckCircle2, CalendarDays } from "lucide-react";
import { StatsGrid, StatItem } from "@/components/admin/StatsGrid";
import { BaptismEntry } from "@/types/baptism";


interface BaptismStatsProps {
  entries?: BaptismEntry[];
  loading?: boolean;
}




export const BaptismStats = ({
  entries = [],
  loading = false,
}: BaptismStatsProps) => {
  const stats = useMemo<StatItem[]>(() => {
    const today = dayjs();

    const total = entries.length;

    const pending = entries.filter(
      (entry) => entry.status === "pending"
    ).length;

    const treated = entries.filter(
      (entry) => entry.status === "treated"
    ).length;

    const todayEntries = entries.filter((entry) =>
      dayjs(entry.createdAt).isSame(today, "day")
    ).length;

    return [
      {
        label: "Baptism Requests",
        value: total,
        icon: Droplets,
      },
      {
        label: "Pending",
        value: pending,
        icon: Clock3,
      },
      {
        label: "Scheduled",
        value: treated,
        icon: CheckCircle2,
      },
      {
        label: "Today",
        value: todayEntries,
        icon: CalendarDays,
      },
    ];
  }, [entries]);

  return (
    <StatsGrid
      stats={stats}
      loading={loading}
    />
  );
}