"use client";
import dayjs from "dayjs";
import { BadgeCheck, CalendarDays, Mail, Phone, User } from "lucide-react";
import { PrayerRequest } from "@/types/prayer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";


interface PrayerViewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  request: PrayerRequest | null;
}


export const PrayerViewDialog = ({
  open,
  onOpenChange,
  request,
}: PrayerViewDialogProps) => {
  if (!request) return null;

  const treated = request.status === "treated";

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Prayer Request
          </DialogTitle>

          <DialogDescription>
            View the full prayer request and its
            treatment history.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">

          {/* Requester */}

          <div className="grid gap-4 md:grid-cols-2">

            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Requester
              </p>

              <div className="flex items-center gap-2">
                <User
                  size={16}
                  className="text-primary"
                />

                <span className="font-medium">
                  {request.fullname}
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

                <span>{request.email}</span>
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

                <span>
                  {request.phone || "—"}
                </span>
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
                    request.createdAt
                  ).format(
                    "DD MMM YYYY • h:mm A"
                  )}
                </span>
              </div>
            </div>

          </div>

          {/* Status */}

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Status
                </p>

                <span
                  className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                    treated
                      ? "bg-green-500/15 text-green-400"
                      : "bg-yellow-500/15 text-yellow-400"
                  }`}
                >
                  {request.status}
                </span>
              </div>

              {treated && (
                <BadgeCheck
                  className="text-green-500"
                  size={24}
                />
              )}

            </div>

            {treated && (
              <div className="mt-4 border-t border-white/10 pt-4 space-y-2">

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Treated By
                  </p>

                  <p className="font-medium">
                    {request.treatedBy
                      ? `${request.treatedBy.fname} ${request.treatedBy.lname}`
                      : "—"}
                  </p>

                  {request.treatedBy && (
                    <p className="text-sm text-slate-400">
                      {request.treatedBy.role}
                    </p>
                  )}
                </div>

                {request.treatedAt && (
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      Treated At
                    </p>

                    <p>
                      {dayjs(
                        request.treatedAt
                      ).format(
                        "DD MMM YYYY • h:mm A"
                      )}
                    </p>
                  </div>
                )}

              </div>
            )}

          </div>

          {/* Prayer Request */}

          <div>
            <p className="mb-3 text-xs uppercase tracking-wide text-slate-500">
              Prayer Request
            </p>

            <div className="max-h-80 overflow-y-auto rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="whitespace-pre-wrap leading-7 text-slate-200">
                {request.request}
              </p>
            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}