"use client";
import dayjs from "dayjs";
import {
//   CheckCircle2,
  Eye,
  HeartHandshake,
  Trash2,
} from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";
import { CommitEntry } from "@/types/commit";


interface CommitTableProps {
  entries?: CommitEntry[];
  loading?: boolean;
  onView: (entry: CommitEntry) => void;
  onTreat: (entry: CommitEntry) => void;
  onDelete: (entry: CommitEntry) => void;
}


export const CommitTable = ({
  entries = [],
  loading = false,
  onView,
  onTreat,
  onDelete,
}: CommitTableProps) => {
  return (
    <DataTable
      title="Commitment to Christ"
      data={entries}
      loading={loading}
      emptyMessage="No commitment entries found."
      columns={[
        {
          key: "fullname",
          header: "Person",
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
          key: "reason",
          header: "Decision / Notes",
          className: "max-w-md",
          render: (entry) => (
            <p className="line-clamp-2 text-slate-300">
              {entry.reason}
            </p>
          ),
        },

        {
          key: "status",
          header: "Follow-up",
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
                  ? "Followed Up"
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
          header: "Followed Up By",
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
          label: "Mark Followed Up",
          icon: (
            <HeartHandshake size={16} />
          ),
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