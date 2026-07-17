"use client";
import { useState } from "react";
import { Loader2, Trash2 } from "lucide-react";
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

interface RecommitDeleteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  entry: RecommitEntry | null;
  onSuccess?: () => void;
}


export const RecommitDeleteDialog = ({open, onOpenChange, entry, onSuccess}: RecommitDeleteDialogProps) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!entry) return;
    try {
      setLoading(true);
      const response =
        await fetch(
          `/api/recommit/${entry._id}`,
          {
            method: "DELETE",
          }
        );

      const data = await response.json();
      if (!data.success) {
        throw new Error(
          data.message ??
            "Failed to delete request"
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
            <Trash2
              size={22}
              className="text-red-500"
            />
            Delete Recommitment Request
          </AlertDialogTitle>

          <AlertDialogDescription className="space-y-4">
            <p>
              This action cannot be undone.
              This recommitment request will
              be permanently removed from the
              system.
            </p>

            {entry && (
              <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                <p className="font-semibold text-white">
                  {entry.fullname}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  {entry.email}
                </p>

                <p className="mt-3 line-clamp-3 text-sm text-slate-300">
                  {entry.support}
                </p>

                <div className="mt-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
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

              </div>
            )}

            <p className="text-sm">
              Are you sure you want to
              permanently delete this record?
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
              handleDelete();
            }}
            className="bg-red-600 text-white hover:bg-red-700"
          >
            {loading ? (
              <>
                <Loader2
                  size={16}
                  className="mr-2 animate-spin"
                />
                Deleting...
              </>
            ) : (
              <>
                <Trash2
                  size={16}
                  className="mr-2"
                />
                Delete Request
              </>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}