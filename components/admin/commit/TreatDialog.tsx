"use client";
import { useState } from "react";
import { HeartHandshake, CheckCircle2, Loader2 } from "lucide-react";
import { CommitEntry } from "@/types/commit";
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


interface CommitTreatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  entry: CommitEntry | null;
  onSuccess?: () => void;
}


export const CommitTreatDialog = ({
  open,
  onOpenChange,
  entry,
  onSuccess,
}: CommitTreatDialogProps) => {
  const [loading, setLoading] = useState(false);

  const handleFollowUp = async () => {
    if (!entry) return;

    try {
      setLoading(true);

      const res = await fetch(
        `/api/commit/${entry._id}`,
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
            "Failed to update commitment."
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
            <HeartHandshake
              size={22}
              className="text-primary"
            />
            Mark as Followed Up
          </AlertDialogTitle>

          <AlertDialogDescription className="space-y-3">
            <span className="block">
              Confirm that this person has
              been contacted and appropriate
              follow-up has been completed.
            </span>

            {entry && (
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">
                  {entry.fullname}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  {entry.email}
                </p>

                <p className="mt-3 line-clamp-3 text-sm text-slate-300">
                  {entry.reason}
                </p>
              </div>
            )}

            <span className="block text-sm">
              This action will update the
              request status to{" "}
              <strong>Followed Up</strong>.
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
              handleFollowUp();
            }}
            className="bg-primary text-white hover:opacity-90"
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
                Mark Followed Up
              </>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}