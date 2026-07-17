"use client";
import dayjs from "dayjs";
import {
  CheckCircle2,
//   Droplets,
  Eye,
  Trash2,
} from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";
import { BaptismEntry } from "@/types/baptism";


interface BaptismTableProps {
  entries?: BaptismEntry[];
  loading?: boolean;
  onView: (entry: BaptismEntry) => void;
  onTreat: (entry: BaptismEntry) => void;
  onDelete: (entry: BaptismEntry) => void;
}


export const BaptismTable = ({
  entries = [],
  loading = false,
  onView,
  onTreat,
  onDelete,
}: BaptismTableProps) => {
  return (
    <DataTable
      title="Baptism Requests"
      data={entries}
      loading={loading}
      emptyMessage="No baptism requests found."
      columns={[
        {
          key: "fullname",
          header: "Candidate",
          render: (entry) => (
            <div>
              <p className="font-semibold text-white">
                {entry.fullname}
              </p>

              <p className="text-sm text-slate-400">
                {entry.email}
              </p>

              <p className="text-xs text-slate-500">
                {entry.phone}
              </p>
            </div>
          ),
        },

        {
          key: "accepted",
          header: "Accepted Jesus",
          render: (entry) => (
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                entry.hasAcceptedJesus
                  ? "bg-emerald-500/15 text-emerald-400"
                  : "bg-red-500/15 text-red-400"
              }`}
            >
              {entry.hasAcceptedJesus
                ? "Yes"
                : "No"}
            </span>
          ),
        },

        {
          key: "reason",
          header: "Reason",
          className: "max-w-sm",
          render: (entry) => (
            <p className="line-clamp-2 text-slate-300">
              {entry.reason}
            </p>
          ),
        },

        {
          key: "status",
          header: "Status",
          render: (entry) => (
            <div className="space-y-1">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  entry.status === "treated"
                    ? "bg-green-500/15 text-green-400"
                    : "bg-yellow-500/15 text-yellow-400"
                }`}
              >
                {entry.status === "treated"
                  ? "Scheduled"
                  : "Pending"}
              </span>

              {entry.treatedAt && (
                <p className="text-xs text-slate-500">
                  {dayjs(entry.treatedAt).format(
                    "DD MMM • h:mm A"
                  )}
                </p>
              )}
            </div>
          ),
        },

        {
          key: "treatedBy",
          header: "Scheduled By",
          render: (entry) =>
            entry.treatedBy ? (
              <div>
                <p className="font-medium text-white">
                  {entry.treatedBy.fname}{" "}
                  {entry.treatedBy.lname}
                </p>

                <p className="text-xs text-slate-400">
                  {entry.treatedBy.role}
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
          render: (entry) => (
            <div className="text-slate-400">
              <p>
                {dayjs(entry.createdAt).format(
                  "DD MMM YYYY"
                )}
              </p>

              <p className="text-xs">
                {dayjs(entry.createdAt).format(
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
          label: "Mark Scheduled",
          icon: <CheckCircle2 size={16} />,
          hidden: (entry) =>
            entry.status === "treated",
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