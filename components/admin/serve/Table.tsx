"use client";
import dayjs from "dayjs";
import { CheckCircle2, Eye, Trash2 } from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";
import { ServeRequest } from "@/types/serve";


interface ServeTableProps {
  requests?: ServeRequest[];
  loading?: boolean;
  onView: (request: ServeRequest) => void;
  onTreat: (request: ServeRequest) => void;
  onDelete: (request: ServeRequest) => void;
}


const interestColor = (interest: string) => {
  switch (interest.toLowerCase()) {
    case "ushering":
      return "bg-indigo-500/15 text-indigo-400";

    case "choir":
      return "bg-pink-500/15 text-pink-400";

    case "media":
      return "bg-sky-500/15 text-sky-400";

    case "children":
      return "bg-orange-500/15 text-orange-400";

    case "youth":
      return "bg-violet-500/15 text-violet-400";

    case "prayer":
      return "bg-cyan-500/15 text-cyan-400";

    case "hospitality":
      return "bg-emerald-500/15 text-emerald-400";

    case "protocol":
      return "bg-amber-500/15 text-amber-400";

    case "evangelism":
      return "bg-red-500/15 text-red-400";

    case "technical":
      return "bg-blue-500/15 text-blue-400";

    case "security":
      return "bg-slate-500/15 text-slate-300";

    default:
      return "bg-slate-500/15 text-slate-300";
  }
};

const formatInterest = (interest: string) => {
  return interest
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export const ServeTable = ({
  requests = [],
  loading = false,
  onView,
  onTreat,
  onDelete,
}: ServeTableProps) => {
  return (
    <DataTable
      title="Serve Requests"
      data={requests}
      loading={loading}
      emptyMessage="No serve requests found."
      columns={[
        {
          key: "fullname",
          header: "Volunteer",
          render: (request) => (
            <div>
              <p className="font-semibold text-white">
                {request.fullname}
              </p>

              <p className="text-sm text-slate-400">
                {request.email}
              </p>

              <p className="text-xs text-slate-500">
                {request.phone}
              </p>
            </div>
          ),
        },

        {
          key: "interest",
          header: "Serving Area",
          render: (request) => (
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${interestColor(
                request.interest
              )}`}
            >
              {formatInterest(request.interest)}
            </span>
          ),
        },

        {
          key: "reason",
          header: "Reason",
          className: "max-w-sm",
          render: (request) => (
            <p className="line-clamp-2 text-slate-300">
              {request.reason}
            </p>
          ),
        },

        {
          key: "status",
          header: "Status",
          render: (request) => (
            <div className="space-y-1">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  request.status === "treated"
                    ? "bg-green-500/15 text-green-400"
                    : "bg-yellow-500/15 text-yellow-400"
                }`}
              >
                {request.status === "treated"
                  ? "Contacted"
                  : "Pending"}
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
          header: "Contacted By",
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
          label: "Mark Contacted",
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