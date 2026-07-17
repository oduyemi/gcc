"use client";
import { useState } from "react";
import { CheckCircle2, Droplets, Loader2 } from "lucide-react";
import { BaptismEntry } from "@/types/baptism";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";


interface BaptismTreatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  entry: BaptismEntry | null;
  onSuccess?: () => void;
}

export const BaptismTreatDialog = ({
  open,
  onOpenChange,
  entry,
  onSuccess,
}: BaptismTreatDialogProps) => {
  const [loading, setLoading] = useState(false);

  const handleSchedule = async () => {
    if (!entry) return;

    try {
      setLoading(true);

      const res = await fetch(
        `/api/baptism/${entry._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            status: "treated",
            treatedAt: new Date(),
          }),
        }
      );

      const json = await res.json();

      if (!json.success) {
        throw new Error(
          json.message ??
            "Failed to update baptism request."
        );
      }

      onOpenChange(false);
      onSuccess?.();
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <Droplets
              size={22}
              className="text-primary"
            />
            Schedule Baptism
          </AlertDialogTitle>

          <AlertDialogDescription className="space-y-3">
            <span className="block">
              This will mark the baptism
              request as scheduled and ready
              for follow-up.
            </span>

            {entry && (
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">
                  {entry.fullname}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  {entry.email}
                </p>

                <p className="mt-3 text-sm">
                  Salvation Status:{" "}
                  <span
                    className={
                      entry.hasAcceptedJesus
                        ? "text-green-400"
                        : "text-red-400"
                    }
                  >
                    {entry.hasAcceptedJesus
                      ? "Accepted Jesus"
                      : "Not Yet Accepted Jesus"}
                  </span>
                </p>

                <p className="mt-3 line-clamp-3 text-sm text-slate-300">
                  {entry.reason}
                </p>
              </div>
            )}

            <span className="block text-sm">
              You can continue managing this
              baptism request after it has
              been scheduled.
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel
            disabled={loading}
          >
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              handleSchedule();
            }}
            className="bg-primary text-white hover:opacity-90"
          >
            {loading ? (
              <>
                <Loader2
                  className="mr-2 animate-spin"
                  size={16}
                />
                Scheduling...
              </>
            ) : (
              <>
                <CheckCircle2
                  className="mr-2"
                  size={16}
                />
                Schedule Baptism
              </>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}