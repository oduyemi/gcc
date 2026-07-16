"use client";
import dayjs from "dayjs";
import { CheckCircle2, Eye, Trash2 } from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";
import { NewToChurchEntry } from "@/types/newToChurch";


interface NewToChurchTableProps {
  entries?: NewToChurchEntry[];
  loading?: boolean;
  onView: (entry: NewToChurchEntry) => void;
  onTreat: (entry: NewToChurchEntry) => void;
  onDelete: (entry: NewToChurchEntry) => void;
}


const interestColor = (interest: string) => {
  switch (interest.toLowerCase()) {
    case "membership":
      return "bg-indigo-500/15 text-indigo-400";

    case "serving":
      return "bg-emerald-500/15 text-emerald-400";

    case "smallgroups":
      return "bg-orange-500/15 text-orange-400";

    case "youngadults":
      return "bg-violet-500/15 text-violet-400";

    case "youth":
      return "bg-sky-500/15 text-sky-400";

    case "children":
      return "bg-pink-500/15 text-pink-400";

    case "prayer":
      return "bg-cyan-500/15 text-cyan-400";

    case "baptism":
      return "bg-blue-500/15 text-blue-400";

    default:
      return "bg-slate-500/15 text-slate-300";
  }
};

const formatInterest = (interest: string) => {
  switch (interest.toLowerCase()) {
    case "youngadults":
      return "Young Adults";

    case "smallgroups":
      return "Small Groups";

    default:
      return interest
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
  }
};

export const NewToChurchTable = ({
  entries = [],
  loading = false,
  onView,
  onTreat,
  onDelete,
}: NewToChurchTableProps) => {
  return (
    <DataTable
      title="New To GCC Entries"
      data={entries}
      loading={loading}
      emptyMessage="No visitor entries found."
      columns={[
        {
          key: "fullname",
          header: "Visitor",
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
          key: "interest",
          header: "Interest",
          render: (entry) => (
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${interestColor(
                entry.interest
              )}`}
            >
              {formatInterest(entry.interest)}
            </span>
          ),
        },

        {
          key: "about",
          header: "About",
          className: "max-w-sm",
          render: (entry) => (
            <p className="line-clamp-2 text-slate-300">
              {entry.about}
            </p>
          ),
        },

        {
          key: "status",
          header: "Status",
          render: (entry) => (
            <div className="space-y-1">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                  entry.status === "treated"
                    ? "bg-green-500/15 text-green-400"
                    : "bg-yellow-500/15 text-yellow-400"
                }`}
              >
                {entry.status === "treated"
                  ? "Contacted"
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
          header: "Contacted By",
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
          label: "Mark Contacted",
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