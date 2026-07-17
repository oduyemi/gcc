"use client";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { ServeRequest } from "@/types/serve";
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


interface ServeTreatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  request: ServeRequest | null;
  onSuccess?: () => void;
}


export const ServeTreatDialog = ({
  open,
  onOpenChange,
  request,
  onSuccess,
}: ServeTreatDialogProps) => {
  const [loading, setLoading] = useState(false);

  const handleContacted = async () => {
    if (!request) return;

    try {
      setLoading(true);

      const res = await fetch(
        `/api/serve/${request._id}`,
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
          json.message ??
            "Failed to update serve request."
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
              size={22}
              className="text-green-500"
            />
            Mark Volunteer as Contacted
          </AlertDialogTitle>

          <AlertDialogDescription className="space-y-3">
            <span className="block">
              This will mark the volunteer as having
              been contacted regarding their desire
              to serve.
            </span>

            {request && (
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">
                  {request.fullname}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  {request.email}
                </p>

                <p className="mt-2 text-sm text-primary">
                  Ministry Interest:{" "}
                  <span className="text-white">
                    {request.interest}
                  </span>
                </p>

                <p className="mt-3 line-clamp-3 text-sm text-slate-300">
                  {request.reason}
                </p>
              </div>
            )}

            <span className="block text-sm">
              You can continue managing this request
              after it has been marked as contacted.
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              handleContacted();
            }}
            className="bg-green-600 text-white hover:bg-green-700"
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
                Mark Contacted
              </>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}