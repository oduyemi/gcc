"use client";
import { useEffect, useMemo, useState } from "react";
import { ServeRequest } from "@/types/serve";
import { ServeStats } from "@/components/admin/serve/Stats";
import { ServeFilters } from "@/components/admin/serve/Filters";
import { ServeTable } from "@/components/admin/serve/Table";
import { ServeViewDialog } from "@/components/admin/serve/ViewDialog";
import { ServeTreatDialog } from "@/components/admin/serve/TreatDialog";
import { ServeDeleteDialog } from "@/components/admin/serve/DeleteDialog";

export default function ServePage() {
  const [requests, setRequests] = useState<ServeRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [interest, setInterest] = useState("");
  const [search, setSearch] = useState("");
  const [selectedRequest, setSelectedRequest] = useState<ServeRequest | null>(null);
  const [viewOpen, setViewOpen] = useState(false);
  const [treatOpen, setTreatOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const fetchRequests = async () => {
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
        `/api/serve?${params.toString()}`
      );

      const json = await res.json();

      if (json.success) {
        setRequests(json.data ?? []);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, [status, interest]);

  const filteredRequests = useMemo(() => {
    if (!search.trim()) return requests;

    const keyword = search.toLowerCase();

    return requests.filter(
      (request) =>
        request.fullname
          .toLowerCase()
          .includes(keyword) ||
        request.email
          .toLowerCase()
          .includes(keyword) ||
        request.phone
          ?.toLowerCase()
          .includes(keyword)
    );
  }, [requests, search]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Start Serving
          </h1>

          <p className="mt-1 text-slate-400">
            Manage volunteer applications and
            ministry follow-ups.
          </p>
        </div>
      </div>

      <ServeStats
        requests={filteredRequests}
        loading={loading}
      />

      <ServeFilters
        status={status}
        interest={interest}
        search={search}
        onStatusChange={setStatus}
        onInterestChange={setInterest}
        onSearchChange={setSearch}
      />

      <ServeTable
        requests={filteredRequests}
        loading={loading}
        onView={(request) => {
          setSelectedRequest(request);
          setViewOpen(true);
        }}
        onTreat={(request) => {
          setSelectedRequest(request);
          setTreatOpen(true);
        }}
        onDelete={(request) => {
          setSelectedRequest(request);
          setDeleteOpen(true);
        }}
      />

      <ServeViewDialog
        open={viewOpen}
        onOpenChange={(open) => {
          setViewOpen(open);

          if (!open) {
            setSelectedRequest(null);
          }
        }}
        request={selectedRequest}
      />

      <ServeTreatDialog
        open={treatOpen}
        onOpenChange={(open) => {
          setTreatOpen(open);

          if (!open) {
            setSelectedRequest(null);
          }
        }}
        request={selectedRequest}
        onSuccess={() => {
          setSelectedRequest(null);
          fetchRequests();
        }}
      />

      <ServeDeleteDialog
        open={deleteOpen}
        onOpenChange={(open) => {
          setDeleteOpen(open);

          if (!open) {
            setSelectedRequest(null);
          }
        }}
        request={selectedRequest}
        onSuccess={() => {
          setSelectedRequest(null);
          fetchRequests();
        }}
      />
    </div>
  );
}