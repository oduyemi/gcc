"use client";
import { useMemo } from "react";
import dayjs from "dayjs";
import { HandHeart, Clock3, CheckCircle2, CalendarDays } from "lucide-react";
import { StatsGrid, StatItem } from "@/components/admin/StatsGrid";
import { ServeRequest } from "@/types/serve";


interface ServeStatsProps {
  requests?: ServeRequest[];
  loading?: boolean;
}

export const ServeStats = ({
  requests = [],
  loading = false,
}: ServeStatsProps) => {
  const stats = useMemo<StatItem[]>(() => {
    const today = dayjs();

    const total = requests.length;

    const pending = requests.filter(
      (request) => request.status === "pending"
    ).length;

    const treated = requests.filter(
      (request) => request.status === "treated"
    ).length;

    const todayRequests = requests.filter((request) =>
      dayjs(request.createdAt).isSame(today, "day")
    ).length;

    return [
      {
        label: "Serve Requests",
        value: total,
        icon: HandHeart,
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
        value: todayRequests,
        icon: CalendarDays,
      },
    ];
  }, [requests]);

  return (
    <StatsGrid
      stats={stats}
      loading={loading}
    />
  );
}