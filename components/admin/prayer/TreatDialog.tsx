"use client";
import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { PrayerRequest } from "@/types/prayer";
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


interface PrayerTreatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  request: PrayerRequest | null;
  onSuccess?: () => void;
}


export const PrayerTreatDialog = ({
  open,
  onOpenChange,
  request,
  onSuccess,
}: PrayerTreatDialogProps) => {
  const [loading, setLoading] = useState(false);

  const handleTreat = async () => {
    if (!request) return;

    try {
      setLoading(true);

      const res = await fetch(
        `/api/prayer-request/${request._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
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
          json.message ||
            "Failed to update prayer request."
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
            <CheckCircle2
              className="text-green-500"
              size={22}
            />
            Mark Prayer Request as Treated
          </AlertDialogTitle>

          <AlertDialogDescription className="space-y-2">
            <span className="block">
              Are you sure you want to mark this
              prayer request as <b>treated</b>?
            </span>

            {request && (
              <span className="block rounded-lg border border-white/10 bg-white/5 p-3">
                <span className="font-semibold text-white">
                  {request.fullname}
                </span>

                <span className="mt-1 block text-sm">
                  {request.request.length > 120
                    ? `${request.request.slice(
                        0,
                        120
                      )}...`
                    : request.request}
                </span>
              </span>
            )}

            <span className="block text-sm">
              This action records that the prayer
              request has been attended to.
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={(e) => {
              e.preventDefault();
              handleTreat();
            }}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700"
          >
            {loading ? (
              <>
                <Loader2
                  className="mr-2 animate-spin"
                  size={16}
                />
                Updating...
              </>
            ) : (
              <>
                <CheckCircle2
                  className="mr-2"
                  size={16}
                />
                Mark Treated
              </>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}