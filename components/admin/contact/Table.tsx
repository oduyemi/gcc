"use client";
import dayjs from "dayjs";
import {
  Eye,
  MoreVertical,
  Trash2,
  CheckCircle2,
} from "lucide-react";

import { ContactEntry } from "@/types/contact";
import { AdminCard } from "@/components/admin/Cards";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface Props {
  contacts?: ContactEntry[];
  loading?: boolean;

  onView: (contact: ContactEntry) => void;
  onTreat: (contact: ContactEntry) => void;
  onDelete: (contact: ContactEntry) => void;
}

const topicColor = (topic: string) => {
  switch (topic) {
    case "prayer":
      return "bg-violet-500/15 text-violet-400";

    case "first time":
      return "bg-blue-500/15 text-blue-400";

    case "counselling":
      return "bg-amber-500/15 text-amber-400";

    case "ministry information":
      return "bg-emerald-500/15 text-emerald-400";

    default:
      return "bg-slate-500/15 text-slate-300";
  }
};

export function ContactTable({
  contacts = [],
  loading = false,
  onView,
  onTreat,
  onDelete,
}: Props) {
  return (
    <AdminCard>
      <h2 className="text-xl font-bold text-white">
        Contact Entries
      </h2>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="pb-4 text-left">Name</th>
              <th className="pb-4 text-left">Topic</th>
              <th className="pb-4 text-left">Subject</th>
              <th className="pb-4 text-left">Status</th>
              <th className="pb-4 text-left">
                Treated By
              </th>
              <th className="pb-4 text-left">
                Received
              </th>
              <th className="pb-4 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={7}
                  className="py-10 text-center text-slate-400"
                >
                  Loading contact entries...
                </td>
              </tr>
            ) : contacts.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="py-10 text-center text-slate-400"
                >
                  No contact entries found.
                </td>
              </tr>
            ) : (
              contacts.map((contact) => (
                <tr
                  key={contact._id}
                  className="border-b border-white/5 transition hover:bg-white/[0.02]"
                >
                  <td className="py-4">
                    <div>
                      <p className="font-semibold text-white">
                        {contact.fullname}
                      </p>

                      <p className="text-sm text-slate-400">
                        {contact.email}
                      </p>
                    </div>
                  </td>

                  <td className="py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${topicColor(
                        contact.topic
                      )}`}
                    >
                      {contact.topic}
                    </span>
                  </td>

                  <td className="max-w-[240px] py-4">
                    <p className="truncate text-slate-300">
                      {contact.subject}
                    </p>
                  </td>

                  <td className="py-4">
                    <div className="space-y-1">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          contact.status ===
                          "treated"
                            ? "bg-green-500/15 text-green-400"
                            : "bg-yellow-500/15 text-yellow-400"
                        }`}
                      >
                        {contact.status}
                      </span>

                      {contact.treatedAt && (
                        <p className="text-xs text-slate-500">
                          {dayjs(
                            contact.treatedAt
                          ).format(
                            "DD MMM • h:mm A"
                          )}
                        </p>
                      )}
                    </div>
                  </td>

                  <td className="py-4">
                    {contact.treatedBy ? (
                      <div>
                        <p className="font-medium text-white">
                          {contact.treatedBy.fname}{" "}
                          {contact.treatedBy.lname}
                        </p>

                        <p className="text-xs text-slate-400">
                          {contact.treatedBy.role}
                        </p>
                      </div>
                    ) : (
                      <span className="text-sm text-slate-500">
                        —
                      </span>
                    )}
                  </td>

                  <td className="py-4 text-slate-400">
                    <p>
                      {dayjs(
                        contact.createdAt
                      ).format("DD MMM YYYY")}
                    </p>

                    <p className="text-xs">
                      {dayjs(
                        contact.createdAt
                      ).format("h:mm A")}
                    </p>
                  </td>

                  <td className="py-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="rounded-lg p-2 hover:bg-white/5">
                          <MoreVertical size={18} />
                        </button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() =>
                            onView(contact)
                          }
                        >
                          <Eye size={16} />
                          View
                        </DropdownMenuItem>

                        {contact.status !==
                          "treated" && (
                          <DropdownMenuItem
                            onClick={() =>
                              onTreat(contact)
                            }
                          >
                            <CheckCircle2
                              size={16}
                            />
                            Mark Treated
                          </DropdownMenuItem>
                        )}

                        <DropdownMenuItem
                          onClick={() =>
                            onDelete(contact)
                          }
                          className="text-red-500"
                        >
                          <Trash2 size={16} />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </AdminCard>
  );
}