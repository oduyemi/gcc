"use client";
import { useEffect, useMemo, useState } from "react";
import { NewToChurchEntry } from "@/types/newToChurch";
import { NewToChurchStats } from "@/components/admin/new-to-church/Stats";
import { NewToChurchFilters } from "@/components/admin/new-to-church/Filters";
import { NewToChurchTable } from "@/components/admin/new-to-church/Table";
import { NewToChurchViewDialog } from "@/components/admin/new-to-church/ViewDialog";
import { NewToChurchTreatDialog } from "@/components/admin/new-to-church/TreatDialog";
import { NewToChurchDeleteDialog } from "@/components/admin/new-to-church/DeleteDialog";


export default function NewGCCMembers() {
  const [entries, setEntries] = useState<NewToChurchEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [interest, setInterest] = useState("");
  const [search, setSearch] = useState("");
  const [selectedEntry, setSelectedEntry] = useState<NewToChurchEntry | null>(null);
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

      if (interest) {
        params.append("interest", interest);
      }

      const res = await fetch(
        `/api/new-to-church?${params.toString()}`
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
  }, [status, interest]);

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
            New To GCC
          </h1>

          <p className="mt-1 text-slate-400">
            Manage visitor connection forms and
            follow-up records.
          </p>
        </div>
      </div>

      <NewToChurchStats
        entries={filteredEntries}
        loading={loading}
      />

      <NewToChurchFilters
        status={status}
        interest={interest}
        search={search}
        onStatusChange={setStatus}
        onInterestChange={setInterest}
        onSearchChange={setSearch}
      />

      <NewToChurchTable
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

      <NewToChurchViewDialog
        open={viewOpen}
        onOpenChange={(open) => {
          setViewOpen(open);

          if (!open) {
            setSelectedEntry(null);
          }
        }}
        entry={selectedEntry}
      />

      <NewToChurchTreatDialog
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

      <NewToChurchDeleteDialog
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