"use client";
import { useEffect, useMemo, useState } from "react";
import { CommitEntry } from "@/types/commit";
import { CommitStats } from "@/components/admin/commit/Stats";
import { CommitFilters } from "@/components/admin/commit/Filters";
import { CommitTable } from "@/components/admin/commit/Table";
import { CommitViewDialog } from "@/components/admin/commit/ViewDialog";
import { CommitTreatDialog } from "@/components/admin/commit/TreatDialog";
import { CommitDeleteDialog } from "@/components/admin/commit/DeleteDialog";


export default function Commitment() {
  const [entries, setEntries] = useState<CommitEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [selectedEntry, setSelectedEntry] = useState<CommitEntry | null>(null);
  const [viewOpen, setViewOpen] = useState(false);
  const [treatOpen, setTreatOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const fetchCommitments = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (status) {
        params.append(
          "status",
          status
        );
      }
      const res = await fetch(
        `/api/commit?${params.toString()}`
      );
      const json = await res.json();
      if (json.success) {
        setEntries(
          json.data ?? []
        );
      }
    } catch (error) {
      console.error(
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCommitments();
  }, [status]);

  const filteredEntries =
    useMemo(() => {
      if (!search.trim()) {
        return entries;
      }

      const keyword =
        search.toLowerCase();

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
    }, [
      entries,
      search,
    ]);

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-white">
          Commitment To Christ
        </h1>

        <p className="mt-2 text-slate-400">
          Manage salvation decisions and
          follow up with those who have
          committed their lives to Christ.
        </p>
      </div>

      <CommitStats
        entries={filteredEntries}
        loading={loading}
      />

      <CommitFilters
        status={status}
        search={search}
        onStatusChange={
          setStatus
        }
        onSearchChange={
          setSearch
        }
      />

      <CommitTable
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

      <CommitViewDialog
        open={viewOpen}
        onOpenChange={(open) => {
          setViewOpen(open);

          if (!open) {
            setSelectedEntry(null);
          }
        }}
        entry={selectedEntry}
      />

      <CommitTreatDialog
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
          fetchCommitments();
        }}
      />

      <CommitDeleteDialog
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
          fetchCommitments();
        }}
      />

    </div>
  );
}