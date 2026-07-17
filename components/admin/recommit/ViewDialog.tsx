"use client";
import dayjs from "dayjs";
import { HeartHandshake, Mail, Phone, CalendarDays, UserCheck } from "lucide-react";
import { RecommitEntry } from "@/types/recommit";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";


interface RecommitViewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  entry: RecommitEntry | null;
}

export const RecommitViewDialog = ({open, onOpenChange, entry}: RecommitViewDialogProps) => {
  if (!entry) return null;
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <HeartHandshake
              className="text-primary"
              size={22}
            />
            Recommitment Request
          </DialogTitle>

          <DialogDescription>
            View details of this recommitment
            and pastoral support request.
          </DialogDescription>
        </DialogHeader>


        <div className="mt-4 space-y-6">

          {/* Personal Information */}

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">

            <h3 className="mb-4 flex items-center gap-2 font-semibold text-white">
              <UserCheck size={18} />
              Personal Information
            </h3>


            <div className="space-y-3">

              <div>
                <p className="text-sm text-slate-400">
                  Full Name
                </p>

                <p className="font-medium text-white">
                  {entry.fullname}
                </p>
              </div>


              <div className="flex items-center gap-3">
                <Mail
                  size={16}
                  className="text-slate-400"
                />

                <p className="text-slate-300">
                  {entry.email}
                </p>
              </div>


              <div className="flex items-center gap-3">
                <Phone
                  size={16}
                  className="text-slate-400"
                />

                <p className="text-slate-300">
                  {entry.phone}
                </p>
              </div>

            </div>

          </div>


          {/* Support Request */}

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">

            <h3 className="mb-3 font-semibold text-white">
              Support Request
            </h3>


            <p className="leading-relaxed text-slate-300">
              {entry.support}
            </p>

          </div>


          {/* Status */}

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">

            <h3 className="mb-4 flex items-center gap-2 font-semibold text-white">
              <HeartHandshake size={18} />
              Follow-up Information
            </h3>


            <div className="space-y-3">

              <div>
                <p className="text-sm text-slate-400">
                  Status
                </p>

                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                    entry.status === "treated"
                      ? "bg-green-500/15 text-green-400"
                      : "bg-yellow-500/15 text-yellow-400"
                  }`}
                >
                  {entry.status === "treated"
                    ? "Followed Up"
                    : "Pending"}
                </span>
              </div>


              {entry.treatedBy && (
                <div>
                  <p className="text-sm text-slate-400">
                    Followed Up By
                  </p>

                  <p className="font-medium text-white">
                    {entry.treatedBy.fname}{" "}
                    {entry.treatedBy.lname}
                  </p>

                  <p className="text-sm text-slate-400">
                    {entry.treatedBy.role}
                  </p>
                </div>
              )}


              {entry.treatedAt && (
                <div className="flex items-center gap-2 text-slate-300">
                  <CalendarDays size={16} />

                  <span>
                    {dayjs(entry.treatedAt).format(
                      "DD MMM YYYY • h:mm A"
                    )}
                  </span>
                </div>
              )}

            </div>

          </div>


          {/* Submitted */}

          <div className="flex items-center gap-2 text-sm text-slate-500">

            <CalendarDays size={15} />

            Submitted{" "}
            {dayjs(entry.createdAt).format(
              "DD MMM YYYY • h:mm A"
            )}

          </div>

        </div>

      </DialogContent>
    </Dialog>
  );
}