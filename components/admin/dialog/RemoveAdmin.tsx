"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Loader2, Trash2 } from "lucide-react";

interface AdminUser {
  _id: string;
  fname: string;
  lname: string;
  email: string;
}

interface Props {
  admin?: AdminUser | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const RemoveAdminDialog = ({
  admin,
  open,
  onOpenChange,
  onSuccess,
}: Props) => {
  const [loading, setLoading] =
    useState(false);

  const handleRemove = async () => {
    if (!admin) return;

    try {
      setLoading(true);

      const res = await fetch(
        `/api/admin/remove/${admin._id}`,
        {
          method: "PATCH",
        }
      );

      if (!res.ok) {
        throw new Error(
          "Failed to remove admin"
        );
      }

      onSuccess?.();
      onOpenChange(false);
    } catch (error) {
      console.error(error);
      alert(
        "Unable to remove administrator."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent
        className="
          border-white/10
          bg-slate-950
          text-white
          sm:max-w-md
        "
      >
        <DialogHeader>
          <DialogTitle>
            Remove Administrator
          </DialogTitle>

          <DialogDescription>
            This administrator will lose
            access to the admin portal.
          </DialogDescription>
        </DialogHeader>

        {admin && (
          <div
            className="
              mt-4
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-4
            "
          >
            <p className="font-medium">
              {admin.fname} {admin.lname}
            </p>

            <p className="text-sm text-slate-400">
              {admin.email}
            </p>
          </div>
        )}

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={() =>
              onOpenChange(false)
            }
            className="
              rounded-xl
              bg-white/5
              px-4
              py-2
            "
          >
            Cancel
          </button>

          <button
            onClick={handleRemove}
            disabled={loading}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-red-600
              px-5
              py-2
              text-white
            "
          >
            {loading ? (
              <Loader2
                size={16}
                className="animate-spin"
              />
            ) : (
              <Trash2 size={16} />
            )}

            Remove Admin
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};