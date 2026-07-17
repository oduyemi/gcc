"use client";
import { useEffect, useMemo, useState } from "react";
import { BaptismEntry } from "@/types/baptism";
import { BaptismStats } from "@/components/admin/baptism/Stats";
import { BaptismFilters } from "@/components/admin/baptism/Filters";
import { BaptismTable } from "@/components/admin/baptism/Table";
import { BaptismViewDialog } from "@/components/admin/baptism/ViewDialog";
import { BaptismTreatDialog } from "@/components/admin/baptism/TreatDialog";
import { BaptismDeleteDialog } from "@/components/admin/baptism/DeleteDialog";


export default function BaptismPage() {
  const [entries, setEntries] = useState<BaptismEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [selectedEntry, setSelectedEntry] = useState<BaptismEntry | null>(null);
  const [viewOpen, setViewOpen] = useState(false);
  const [treatOpen, setTreatOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const fetchEntries = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (status) {
        params.append("status", status);
      }
      const res = await fetch(
        `/api/baptism?${params.toString()}`
      );
      const json = await res.json();
      if (json.success) {
        setEntries(json.data ?? []);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, [status]);

  const filteredEntries = useMemo(() => {
    if (!search.trim()) return entries;

    const keyword = search.toLowerCase();

    return entries.filter(
      (entry) =>
        entry.fullname
          .toLowerCase()
          .includes(keyword) ||
        entry.email
          .toLowerCase()
          .includes(keyword) ||
        entry.phone
          ?.toLowerCase()
          .includes(keyword)
    );
  }, [entries, search]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Baptism Requests
          </h1>

          <p className="mt-1 text-slate-400">
            Review baptism registrations,
            schedule candidates and manage
            follow-ups.
          </p>
        </div>
      </div>

      <BaptismStats
        entries={filteredEntries}
        loading={loading}
      />

      <BaptismFilters
        status={status}
        search={search}
        onStatusChange={setStatus}
        onSearchChange={setSearch}
      />

      <BaptismTable
        entries={filteredEntries}
        loading={loading}
        onView={(entry) => {
          setSelectedEntry(entry);
          setViewOpen(true);
        }}
        onTreat={(entry) => {
          setSelectedEntry(entry);
          setTreatOpen(true);
        }}
        onDelete={(entry) => {
          setSelectedEntry(entry);
          setDeleteOpen(true);
        }}
      />

      <BaptismViewDialog
        open={viewOpen}
        onOpenChange={(open) => {
          setViewOpen(open);

          if (!open) {
            setSelectedEntry(null);
          }
        }}
        entry={selectedEntry}
      />

      <BaptismTreatDialog
        open={treatOpen}
        onOpenChange={(open) => {
          setTreatOpen(open);

          if (!open) {
            setSelectedEntry(null);
          }
        }}
        entry={selectedEntry}
        onSuccess={() => {
          setSelectedEntry(null);
          fetchEntries();
        }}
      />

      <BaptismDeleteDialog
        open={deleteOpen}
        onOpenChange={(open) => {
          setDeleteOpen(open);

          if (!open) {
            setSelectedEntry(null);
          }
        }}
        entry={selectedEntry}
        onSuccess={() => {
          setSelectedEntry(null);
          fetchEntries();
        }}
      />
    </div>
  );
}