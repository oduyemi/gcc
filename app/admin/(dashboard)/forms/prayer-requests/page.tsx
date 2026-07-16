"use client";
import { useEffect, useMemo, useState } from "react";
import { PrayerRequest } from "@/types/prayer";
import { PrayerStats } from "@/components/admin/prayer/Stats";
import { PrayerFilters } from "@/components/admin/prayer/Filters";
import { PrayerTable } from "@/components/admin/prayer/Table";
import { PrayerViewDialog } from "@/components/admin/prayer/ViewDialog";
import { PrayerTreatDialog } from "@/components/admin/prayer/TreatDialog";
import { PrayerDeleteDialog } from "@/components/admin/prayer/DeleteDialog";




export default function Prayer() {
  const [requests, setRequests] = useState<PrayerRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [selectedRequest, setSelectedRequest] = useState<PrayerRequest | null>(null);
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

      const res = await fetch(
        `/api/prayer-request?${params.toString()}`
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
  }, [status]);

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
      <PrayerStats
        requests={filteredRequests}
        loading={loading}
      />

      <PrayerFilters
        status={status}
        search={search}
        onStatusChange={setStatus}
        onSearchChange={setSearch}
      />

      <PrayerTable
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

      <PrayerViewDialog
        open={viewOpen}
        onOpenChange={(open) => {
          setViewOpen(open);

          if (!open) {
            setSelectedRequest(null);
          }
        }}
        request={selectedRequest}
      />

      <PrayerTreatDialog
        open={treatOpen}
        onOpenChange={(open) => {
          setTreatOpen(open);

          if (!open) {
            setSelectedRequest(null);
          }
        }}
        request={selectedRequest}
        onSuccess={fetchRequests}
      />

      <PrayerDeleteDialog
        open={deleteOpen}
        onOpenChange={(open) => {
          setDeleteOpen(open);

          if (!open) {
            setSelectedRequest(null);
          }
        }}
        request={selectedRequest}
        onSuccess={fetchRequests}
      />
    </div>
  );
}