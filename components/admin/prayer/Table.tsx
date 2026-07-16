"use client";
import dayjs from "dayjs";
import { Eye, Trash2, CheckCircle2 } from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";
import { PrayerRequest } from "@/types/prayer";


interface PrayerTableProps {
  requests?: PrayerRequest[];
  loading?: boolean;
  onView: (request: PrayerRequest) => void;
  onTreat: (request: PrayerRequest) => void;
  onDelete: (request: PrayerRequest) => void;
}


export const PrayerTable = ({
  requests = [],
  loading = false,
  onView,
  onTreat,
  onDelete,
}: PrayerTableProps) => {
  return (
    <DataTable
      title="Prayer Requests"
      data={requests}
      loading={loading}
      emptyMessage="No prayer requests found."
      columns={[
        {
          key: "fullname",
          header: "Requester",
          render: (request) => (
            <div>
              <p className="font-semibold text-white">
                {request.fullname}
              </p>

              <p className="text-sm text-slate-400">
                {request.email}
              </p>

              {request.phone && (
                <p className="text-xs text-slate-500">
                  {request.phone}
                </p>
              )}
            </div>
          ),
        },

        {
          key: "request",
          header: "Prayer Request",
          className: "max-w-sm",
          render: (request) => (
            <p className="line-clamp-2 text-slate-300">
              {request.request}
            </p>
          ),
        },

        {
          key: "status",
          header: "Status",
          render: (request) => (
            <div className="space-y-1">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                  request.status === "treated"
                    ? "bg-green-500/15 text-green-400"
                    : "bg-yellow-500/15 text-yellow-400"
                }`}
              >
                {request.status}
              </span>

              {request.treatedAt && (
                <p className="text-xs text-slate-500">
                  {dayjs(request.treatedAt).format(
                    "DD MMM • h:mm A"
                  )}
                </p>
              )}
            </div>
          ),
        },

        {
          key: "treatedBy",
          header: "Treated By",
          render: (request) =>
            request.treatedBy ? (
              <div>
                <p className="font-medium text-white">
                  {request.treatedBy.fname}{" "}
                  {request.treatedBy.lname}
                </p>

                <p className="text-xs text-slate-400">
                  {request.treatedBy.role}
                </p>
              </div>
            ) : (
              <span className="text-sm text-slate-500">
                —
              </span>
            ),
        },

        {
          key: "createdAt",
          header: "Submitted",
          render: (request) => (
            <div className="text-slate-400">
              <p>
                {dayjs(request.createdAt).format(
                  "DD MMM YYYY"
                )}
              </p>

              <p className="text-xs">
                {dayjs(request.createdAt).format(
                  "h:mm A"
                )}
              </p>
            </div>
          ),
        },
      ]}
      actions={[
        {
          label: "View",
          icon: <Eye size={16} />,
          onClick: onView,
        },

        {
          label: "Mark Treated",
          icon: <CheckCircle2 size={16} />,
          hidden: (request) =>
            request.status === "treated",
          onClick: onTreat,
        },

        {
          label: "Delete",
          icon: <Trash2 size={16} />,
          destructive: true,
          onClick: onDelete,
        },
      ]}
    />
  );
}