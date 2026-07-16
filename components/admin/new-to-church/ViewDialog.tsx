"use client";

import dayjs from "dayjs";
import {
  BadgeCheck,
  CalendarDays,
  Mail,
  Phone,
 User,
  Heart,
} from "lucide-react";

import { NewToChurchEntry } from "@/types/newToChurch";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface NewToChurchViewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  entry: NewToChurchEntry | null;
}

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

export const NewToChurchViewDialog = ({
  open,
  onOpenChange,
  entry,
}: NewToChurchViewDialogProps) => {
  if (!entry) return null;

  const contacted = entry.status === "treated";

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            New To GCC Submission
          </DialogTitle>

          <DialogDescription>
            View visitor information and follow-up
            details.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Visitor Information */}

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Visitor
              </p>

              <div className="flex items-center gap-2">
                <User
                  size={16}
                  className="text-primary"
                />

                <span className="font-medium">
                  {entry.fullname}
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Email
              </p>

              <div className="flex items-center gap-2">
                <Mail
                  size={16}
                  className="text-primary"
                />

                <span>{entry.email}</span>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Phone
              </p>

              <div className="flex items-center gap-2">
                <Phone
                  size={16}
                  className="text-primary"
                />

                <span>{entry.phone}</span>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Submitted
              </p>

              <div className="flex items-center gap-2">
                <CalendarDays
                  size={16}
                  className="text-primary"
                />

                <span>
                  {dayjs(
                    entry.createdAt
                  ).format(
                    "DD MMM YYYY • h:mm A"
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Interest */}

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="mb-2 text-xs uppercase tracking-wide text-slate-500">
              Area of Interest
            </p>

            <span
              className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${interestColor(
                entry.interest
              )}`}
            >
              <Heart
                size={14}
                className="mr-2"
              />

              {formatInterest(entry.interest)}
            </span>
          </div>

          {/* Status */}

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Follow-up Status
                </p>

                <span
                  className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    contacted
                      ? "bg-green-500/15 text-green-400"
                      : "bg-yellow-500/15 text-yellow-400"
                  }`}
                >
                  {contacted
                    ? "Contacted"
                    : "Pending"}
                </span>
              </div>

              {contacted && (
                <BadgeCheck
                  className="text-green-500"
                  size={24}
                />
              )}
            </div>

            {contacted && (
              <div className="mt-4 border-t border-white/10 pt-4 space-y-2">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Contacted By
                  </p>

                  <p className="font-medium">
                    {entry.treatedBy
                      ? `${entry.treatedBy.fname} ${entry.treatedBy.lname}`
                      : "—"}
                  </p>

                  {entry.treatedBy && (
                    <p className="text-sm text-slate-400">
                      {entry.treatedBy.role}
                    </p>
                  )}
                </div>

                {entry.treatedAt && (
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      Contacted At
                    </p>

                    <p>
                      {dayjs(
                        entry.treatedAt
                      ).format(
                        "DD MMM YYYY • h:mm A"
                      )}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* About */}

          <div>
            <p className="mb-3 text-xs uppercase tracking-wide text-slate-500">
              About
            </p>

            <div className="max-h-80 overflow-y-auto rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="whitespace-pre-wrap leading-7 text-slate-200">
                {entry.about}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}