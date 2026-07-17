"use client";
import { useEffect, useMemo, useState } from "react";
import { RecommitEntry } from "@/types/recommit";
import { RecommitStats } from "@/components/admin/recommit/Stats";
import { RecommitFilters } from "@/components/admin/recommit/Filters";
import { RecommitTable } from "@/components/admin/recommit/Table";
import { RecommitViewDialog } from "@/components/admin/recommit/ViewDialog";
import { RecommitTreatDialog } from "@/components/admin/recommit/TreatDialog";
import { RecommitDeleteDialog } from "@/components/admin/recommit/DeleteDialog";


export default function RecommitPage() {
  const [entries, setEntries] = useState<RecommitEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [selectedEntry, setSelectedEntry] = useState<RecommitEntry | null>(null);
  const [viewOpen, setViewOpen] = useState(false);
  const [treatOpen, setTreatOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (status) {
        params.append(
          "status",
          status
        );
      }

      const response =
        await fetch(
          `/api/recommit?${params.toString()}`
        );

      const data = await response.json();
      if (data.success) {
        setEntries(
          data.data ?? []
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, [status]);

  const filteredEntries =
    useMemo(() => {
      if (!search.trim()) {
        return entries;
      }

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
            .includes(keyword) ||
          entry.support
            ?.toLowerCase()
            .includes(keyword)
      );
    }, [
      entries,
      search,
    ]);

  return (

    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Recommitment Requests
        </h1>
        <p className="mt-2 text-slate-400">
          Manage requests from people
          seeking restoration, encouragement,
          and renewed commitment to Christ.
        </p>
      </div>

      <RecommitStats
        entries={filteredEntries}
        loading={loading}
      />

      <RecommitFilters
        status={status}
        search={search}
        onStatusChange={
          setStatus
        }
        onSearchChange={
          setSearch
        }
      />

      <RecommitTable
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

      <RecommitViewDialog
        open={viewOpen}
        onOpenChange={(open) => {
          setViewOpen(open);
          if (!open) {
            setSelectedEntry(null);
          }
        }}
        entry={selectedEntry}
      />

      <RecommitTreatDialog
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
          fetchRequests();
        }}
      />

      <RecommitDeleteDialog
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
          fetchRequests();
        }}
      />
    </div>
  );
}