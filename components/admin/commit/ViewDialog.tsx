"use client";
import dayjs from "dayjs";
import { BadgeCheck, CalendarDays, HeartHandshake, Mail, Phone, User } from "lucide-react";
import { CommitEntry } from "@/types/commit";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";


interface CommitViewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  entry: CommitEntry | null;
}




export const CommitViewDialog = ({
  open,
  onOpenChange,
  entry,
}: CommitViewDialogProps) => {
  if (!entry) return null;

  const followedUp = entry.status === "treated";

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            Commitment to Christ
          </DialogTitle>

          <DialogDescription>
            View commitment details and follow-up information.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Contact Information */}

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Full Name
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
                Email Address
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
                Phone Number
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

          {/* Follow-up Status */}

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Follow-up Status
                </p>

                <span
                  className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    followedUp
                      ? "bg-green-500/15 text-green-400"
                      : "bg-yellow-500/15 text-yellow-400"
                  }`}
                >
                  {followedUp
                    ? "Followed Up"
                    : "Pending"}
                </span>
              </div>

              {followedUp && (
                <BadgeCheck
                  size={24}
                  className="text-green-500"
                />
              )}
            </div>

            {followedUp && (
              <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Followed Up By
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
                      Follow-up Date
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

          {/* Commitment */}

          <div>
            <p className="mb-3 text-xs uppercase tracking-wide text-slate-500">
              Commitment / Decision
            </p>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
              <div className="mb-3 flex items-center gap-2">
                <HeartHandshake
                  size={18}
                  className="text-primary"
                />

                <span className="font-medium">
                  Personal Response
                </span>
              </div>

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