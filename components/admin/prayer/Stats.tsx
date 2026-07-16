"use client";
import { useMemo } from "react";
import dayjs from "dayjs";
import { HeartHandshake, Clock3, CheckCircle2, CalendarDays } from "lucide-react";
import { StatsGrid, StatItem } from "@/components/admin/StatsGrid";
import { PrayerRequest } from "@/types/prayer";

interface PrayerStatsProps {
  requests?: PrayerRequest[];
  loading?: boolean;
}

export const PrayerStats = ({
  requests = [],
  loading = false,
}: PrayerStatsProps) => {
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
        label: "Total Requests",
        value: total,
        icon: HeartHandshake,
      },
      {
        label: "Pending",
        value: pending,
        icon: Clock3,
      },
      {
        label: "Treated",
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