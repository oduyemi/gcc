"use client";
import { ShieldCheck, UserCheck, Clock3 } from "lucide-react";
import { StatCard } from "@/components/admin/StatsCard";
import { AdminUser } from "@/types/admin";


interface Props {
  admins: AdminUser[];
}

export const AdminStats = ({
  admins,
}: Props) => {
  const pending = admins.filter(
    (admin) => admin.firstLogin
  ).length;

  const active = admins.length - pending;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <StatCard
        title="Administrators"
        value={admins.length}
        icon={ShieldCheck}
      />

      <StatCard
        title="Pending Login"
        value={pending}
        icon={Clock3}
      />

      <StatCard
        title="Active"
        value={active}
        icon={UserCheck}
      />
    </div>
  );
};