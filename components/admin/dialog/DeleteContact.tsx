"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { ContactEntry } from "@/types/contact";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  contact: ContactEntry | null;

  onConfirm: () => void;

  loading?: boolean;
}

export function DeleteContactDialog({
  open,
  onOpenChange,
  contact,
  onConfirm,
  loading = false,
}: Props) {
  if (!contact) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>
            Delete Contact Entry
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">

          <p>
            Are you sure you want to
            permanently delete the
            contact request from
            <strong>
              {" "}
              {contact.fullname}
            </strong>
            ?
          </p>

          <div className="rounded-xl border bg-muted/30 p-4">

            <p className="font-medium">
              {contact.subject}
            </p>

            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
              {contact.message}
            </p>

          </div>

          <div className="flex justify-end gap-3">

            <Button
              variant="outline"
              onClick={() =>
                onOpenChange(false)
              }
            >
              Cancel
            </Button>

            <Button
              variant="destructive"
              disabled={loading}
              onClick={onConfirm}
            >
              {loading
                ? "Deleting..."
                : "Delete"}
            </Button>

          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}