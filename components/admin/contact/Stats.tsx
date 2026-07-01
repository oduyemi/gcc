"use client";
import { useEffect, useState } from "react";
import {
  Mail,
  Clock3,
  CheckCircle2,
  Heart,
} from "lucide-react";
import { AdminCard } from "@/components/admin/Cards";

interface Contact {
  _id: string;
  status: "pending" | "treated";
  topic: string;
}

export function ContactStats() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/contact");

      const json = await res.json();

      if (json.success) {
        setContacts(json.data ?? []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const total = contacts.length;

  const pending = contacts.filter(
    (contact) => contact.status === "pending"
  ).length;

  const treated = contacts.filter(
    (contact) => contact.status === "treated"
  ).length;

  const prayer = contacts.filter(
    (contact) =>
      contact.topic.toLowerCase() === "prayer"
  ).length;

  const stats = [
    {
      label: "Total Entries",
      value: total,
      icon: Mail,
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
      label: "Prayer Related",
      value: prayer,
      icon: Heart,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
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

            <stat.icon
              className="text-primary"
              size={24}
            />
          </div>
        </AdminCard>
      ))}
    </div>
  );
}