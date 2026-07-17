"use client";
import { useState } from "react";
import { Loader2, Trash2 } from "lucide-react";
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


interface BaptismDeleteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  entry: BaptismEntry | null;
  onSuccess?: () => void;
}


export const BaptismDeleteDialog = ({
  open,
  onOpenChange,
  entry,
  onSuccess,
}: BaptismDeleteDialogProps) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!entry) return;

    try {
      setLoading(true);

      const res = await fetch(
        `/api/baptism/${entry._id}`,
        {
          method: "DELETE",
        }
      );

      const json = await res.json();

      if (!json.success) {
        throw new Error(
          json.message ??
            "Failed to delete baptism request."
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
            <Trash2
              size={22}
              className="text-red-500"
            />
            Delete Baptism Request
          </AlertDialogTitle>

          <AlertDialogDescription className="space-y-3">
            <span className="block">
              This action cannot be undone.
              The baptism request will be
              permanently deleted.
            </span>

            {entry && (
              <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                <p className="font-semibold text-white">
                  {entry.fullname}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  {entry.email}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      entry.hasAcceptedJesus
                        ? "bg-green-500/15 text-green-400"
                        : "bg-red-500/15 text-red-400"
                    }`}
                  >
                    {entry.hasAcceptedJesus
                      ? "Accepted Jesus"
                      : "Not Yet Accepted Jesus"}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      entry.status ===
                      "treated"
                        ? "bg-green-500/15 text-green-400"
                        : "bg-yellow-500/15 text-yellow-400"
                    }`}
                  >
                    {entry.status ===
                    "treated"
                      ? "Scheduled"
                      : "Pending"}
                  </span>
                </div>

                <p className="mt-4 line-clamp-3 text-sm text-slate-300">
                  {entry.reason}
                </p>
              </div>
            )}

            <span className="block text-sm">
              Are you sure you want to
              permanently delete this
              baptism request?
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
              handleDelete();
            }}
            className="bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
          >
            {loading ? (
              <>
                <Loader2
                  className="mr-2 animate-spin"
                  size={16}
                />
                Deleting...
              </>
            ) : (
              <>
                <Trash2
                  className="mr-2"
                  size={16}
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