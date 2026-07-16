"use client";
import { useMemo } from "react";
import dayjs from "dayjs";
import { Users, Clock3, CheckCircle2, CalendarDays } from "lucide-react";
import { StatsGrid, StatItem } from "@/components/admin/StatsGrid";
import { NewToChurchEntry } from "@/types/newToChurch";


interface NewToChurchStatsProps {
  entries?: NewToChurchEntry[];
  loading?: boolean;
}


export const NewToChurchStats = ({
  entries = [],
  loading = false,
}: NewToChurchStatsProps) => {
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
        label: "New Visitors",
        value: total,
        icon: Users,
      },
      {
        label: "Pending",
        value: pending,
        icon: Clock3,
      },
      {
        label: "Contacted",
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