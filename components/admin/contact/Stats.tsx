"use client";
import { useEffect, useState } from "react";
import {
  Mail,
  Clock3,
  CheckCircle2,
  Heart,
} from "lucide-react";
import { StatsGrid, StatItem } from "@/components/admin/StatsGrid";

interface Contact {
  _id: string;
  status: "pending" | "treated";
  topic: string;
}

export function ContactStats() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch("/api/contact");
        const json = await res.json();

        if (json.success) {
          setContacts(json.data ?? []);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const stats: StatItem[] = [
    {
      label: "Total Entries",
      value: contacts.length,
      icon: Mail,
    },
    {
      label: "Pending",
      value: contacts.filter(c => c.status === "pending").length,
      icon: Clock3,
    },
    {
      label: "Treated",
      value: contacts.filter(c => c.status === "treated").length,
      icon: CheckCircle2,
    },
    {
      label: "Prayer Related",
      value: contacts.filter(
        c => c.topic.toLowerCase() === "prayer"
      ).length,
      icon: Heart,
    },
  ];

  return (
    <StatsGrid
      stats={stats}
      loading={loading}
    />
  );
}