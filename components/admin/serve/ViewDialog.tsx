"use client";
import dayjs from "dayjs";
import { BadgeCheck, CalendarDays, HandHeart, Mail, Phone, User } from "lucide-react";
import { ServeRequest } from "@/types/serve";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";


interface ServeViewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  request: ServeRequest | null;
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

const formatInterest = (interest: string) =>
  interest
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());


export const ServeViewDialog = ({
  open,
  onOpenChange,
  request,
}: ServeViewDialogProps) => {
  if (!request) return null;

  const contacted = request.status === "treated";

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            Serve Request
          </DialogTitle>

          <DialogDescription>
            View volunteer information and
            follow-up details.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Volunteer Information */}

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Volunteer
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

                <span>{request.phone}</span>
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

          {/* Serving Area */}

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="mb-2 text-xs uppercase tracking-wide text-slate-500">
              Ministry Interest
            </p>

            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${interestColor(
                request.interest
              )}`}
            >
              <HandHeart
                size={14}
                className="mr-2"
              />

              {formatInterest(
                request.interest
              )}
            </span>
          </div>

          {/* Follow-up */}

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
                      Contacted At
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

          {/* About */}

          <div>
            <p className="mb-3 text-xs uppercase tracking-wide text-slate-500">
              About the Volunteer
            </p>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="whitespace-pre-wrap leading-7 text-slate-200">
                {request.about}
              </p>
            </div>
          </div>

          {/* Reason */}

          <div>
            <p className="mb-3 text-xs uppercase tracking-wide text-slate-500">
              Reason For Serving
            </p>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
              <p className="whitespace-pre-wrap leading-7 text-slate-100">
                {request.reason}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}