"use client";
import { useMemo } from "react";
import { Heart, Clock3, CheckCircle2, CalendarDays } from "lucide-react";
import { StatsGrid, StatItem } from "@/components/admin/StatsGrid";
import { RecommitEntry } from "@/types/recommit";


interface RecommitStatsProps {
  entries?: RecommitEntry[];
  loading?: boolean;
}


export const RecommitStats = ({entries = [], loading = false}: RecommitStatsProps) => {
  const stats = useMemo<StatItem[]>(() => {
    const today =
      new Date()
        .toISOString()
        .split("T")[0];
    const total =  entries.length;

    const pending =
      entries.filter(
        (entry) =>
          entry.status === "pending"
      ).length;

    const followedUp =
      entries.filter(
        (entry) =>
          entry.status === "treated"
      ).length;

    const todayRequests =
      entries.filter(
        (entry) =>
          entry.createdAt.startsWith(
            today
          )
      ).length;

    return [
      {
        label: "Recommitments",
        value: total,
        icon: Heart,
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
        value: todayRequests,
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