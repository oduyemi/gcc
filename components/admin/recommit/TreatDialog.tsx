"use client";
import { useState } from "react";
import { HeartHandshake, CheckCircle2, Loader2 } from "lucide-react";
import { RecommitEntry } from "@/types/recommit";
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


interface RecommitTreatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  entry: RecommitEntry | null;
  onSuccess?: () => void;
}


export const RecommitTreatDialog = ({open, onOpenChange, entry, onSuccess}: RecommitTreatDialogProps) => {
  const [loading, setLoading] = useState(false);

  const handleFollowUp = async () => {
    if (!entry) return;
    try {
      setLoading(true);
      const response = await fetch(
        `/api/recommit/${entry._id}`,
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

      const data = await response.json();
      if (!data.success) {
        throw new Error(
          data.message ??
            "Failed to update request"
        );
      }

      onOpenChange(false);
      onSuccess?.();
    } catch (error) {
      console.error(error);
      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong"
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

            <HeartHandshake
              size={22}
              className="text-primary"
            />
            Mark as Followed Up
          </AlertDialogTitle>

          <AlertDialogDescription className="space-y-4">
            <p>
              Confirm that this recommitment
              request has been reviewed and
              the person has received the
              necessary pastoral support.
            </p>

            {entry && (
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">
                  {entry.fullname}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  {entry.email}
                </p>

                <p className="mt-3 line-clamp-3 text-sm text-slate-300">
                  {entry.support}
                </p>
              </div>
            )}

            <p className="text-sm">
              The status will be changed to{" "}
              <strong>
                Followed Up
              </strong>.
            </p>
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
              handleFollowUp();
            }}
            className="bg-primary text-white hover:opacity-90"
          >
            {loading ? (
              <>
                <Loader2
                  size={16}
                  className="mr-2 animate-spin"
                />

                Updating...
              </>
            ) : (
              <>
                <CheckCircle2
                  size={16}
                  className="mr-2"
                />

                Mark Followed Up
              </>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}