"use client";
import dayjs from "dayjs";
import { BadgeCheck, CalendarDays, Droplets, Mail, Phone, User } from "lucide-react";
import { BaptismEntry } from "@/types/baptism";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";


interface BaptismViewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  entry: BaptismEntry | null;
}

export const BaptismViewDialog = ({
  open,
  onOpenChange,
  entry,
}: BaptismViewDialogProps) => {
  if (!entry) return null;

  const scheduled = entry.status === "treated";

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            Baptism Request
          </DialogTitle>

          <DialogDescription>
            View baptism registration details.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Candidate */}

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Candidate
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
                  {dayjs(entry.createdAt).format(
                    "DD MMM YYYY • h:mm A"
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Salvation */}

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="mb-2 text-xs uppercase tracking-wide text-slate-500">
              Salvation Decision
            </p>

            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                entry.hasAcceptedJesus
                  ? "bg-emerald-500/15 text-emerald-400"
                  : "bg-red-500/15 text-red-400"
              }`}
            >
              <Droplets
                size={14}
                className="mr-2"
              />

              {entry.hasAcceptedJesus
                ? "Has Accepted Jesus"
                : "Has Not Accepted Jesus"}
            </span>
          </div>

          {/* Status */}

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Baptism Status
                </p>

                <span
                  className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    scheduled
                      ? "bg-green-500/15 text-green-400"
                      : "bg-yellow-500/15 text-yellow-400"
                  }`}
                >
                  {scheduled
                    ? "Scheduled"
                    : "Pending"}
                </span>
              </div>

              {scheduled && (
                <BadgeCheck
                  size={24}
                  className="text-green-500"
                />
              )}
            </div>

            {scheduled && (
              <div className="mt-4 border-t border-white/10 pt-4 space-y-2">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Scheduled By
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
                      Scheduled At
                    </p>

                    <p>
                      {dayjs(entry.treatedAt).format(
                        "DD MMM YYYY • h:mm A"
                      )}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Testimony */}

          <div>
            <p className="mb-3 text-xs uppercase tracking-wide text-slate-500">
              Testimony
            </p>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="whitespace-pre-wrap leading-7 text-slate-200">
                {entry.testimony?.trim()
                  ? entry.testimony
                  : "No testimony was provided."}
              </p>
            </div>
          </div>

          {/* Reason */}

          <div>
            <p className="mb-3 text-xs uppercase tracking-wide text-slate-500">
              Reason For Baptism
            </p>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
              <p className="whitespace-pre-wrap leading-7 text-slate-100">
                {entry.reason}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}