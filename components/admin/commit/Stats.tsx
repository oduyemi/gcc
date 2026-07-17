"use client";
import { useMemo } from "react";
import dayjs from "dayjs";
import { HeartHandshake, Clock3, CheckCircle2, CalendarDays } from "lucide-react";
import { StatsGrid, StatItem } from "@/components/admin/StatsGrid";
import { CommitEntry } from "@/types/commit";


interface CommitStatsProps {
  entries?: CommitEntry[];
  loading?: boolean;
}


export const CommitStats = ({
  entries = [],
  loading = false,
}: CommitStatsProps) => {
  const stats = useMemo<StatItem[]>(() => {
    const today = dayjs();

    const total = entries.length;

    const pending = entries.filter(
      (entry) => entry.status === "pending"
    ).length;

    const followedUp = entries.filter(
      (entry) => entry.status === "treated"
    ).length;

    const todayEntries = entries.filter((entry) =>
      dayjs(entry.createdAt).isSame(today, "day")
    ).length;

    return [
      {
        label: "Commitments",
        value: total,
        icon: HeartHandshake,
      },
      {
        label: "Pending",
        value: pending,
        icon: Clock3,
      },
      {
        label: "Followed Up",
        value: followedUp,
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