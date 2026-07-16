"use client";
import { useState } from "react";
import { Loader2, Trash2 } from "lucide-react";
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


interface PrayerDeleteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  request: PrayerRequest | null;
  onSuccess?: () => void;
}


export const PrayerDeleteDialog = ({
  open,
  onOpenChange,
  request,
  onSuccess,
}: PrayerDeleteDialogProps) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!request) return;

    try {
      setLoading(true);

      const res = await fetch(
        `/api/prayer-request/${request._id}`,
        {
          method: "DELETE",
        }
      );

      const json = await res.json();

      if (!json.success) {
        throw new Error(
          json.message ??
            "Failed to delete prayer request."
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
            Delete Prayer Request
          </AlertDialogTitle>

          <AlertDialogDescription className="space-y-3">
            <span className="block">
              This action cannot be undone.
            </span>

            {request && (
              <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                <p className="font-semibold text-white">
                  {request.fullname}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  {request.email}
                </p>

                <p className="mt-3 line-clamp-3 text-sm text-slate-300">
                  {request.request}
                </p>
              </div>
            )}

            <span className="block text-sm">
              Are you sure you want to permanently
              delete this prayer request?
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
              handleDelete();
            }}
            disabled={loading}
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