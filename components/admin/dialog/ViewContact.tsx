"use client";

import dayjs from "dayjs";
import {
  Mail,
  CalendarDays,
  Clock,
  User,
  Tag,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { ContactEntry } from "@/types/contact";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  contact: ContactEntry | null;

  onTreat: () => void;
  onDelete: () => void;
}

export function ViewContactDialog({
  open,
  onOpenChange,
  contact,
  onTreat,
  onDelete,
}: Props) {
  if (!contact) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            Contact Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">

          {/* Name */}

          <div className="flex items-center gap-3">
            <User className="text-primary" />

            <div>
              <h3 className="text-xl font-bold">
                {contact.fullname}
              </h3>

              <a
                href={`mailto:${contact.email}`}
                className="text-primary hover:underline"
              >
                {contact.email}
              </a>
            </div>
          </div>

          {/* Meta */}

          <div className="grid gap-4 md:grid-cols-2">

            <div className="rounded-xl border p-4">
              <div className="flex items-center gap-2">
                <Tag size={16} />
                Topic
              </div>

              <Badge className="mt-3 capitalize">
                {contact.topic}
              </Badge>
            </div>

            <div className="rounded-xl border p-4">
              <div className="flex items-center gap-2">
                {contact.status === "treated" ? (
                  <CheckCircle2
                    size={16}
                    className="text-green-500"
                  />
                ) : (
                  <AlertCircle
                    size={16}
                    className="text-yellow-500"
                  />
                )}

                Status
              </div>

              <Badge
                className={`mt-3 capitalize ${
                  contact.status ===
                  "treated"
                    ? "bg-green-500"
                    : "bg-yellow-500"
                }`}
              >
                {contact.status}
              </Badge>
            </div>

            <div className="rounded-xl border p-4">
              <div className="flex items-center gap-2">
                <CalendarDays size={16} />
                Received
              </div>

              <p className="mt-3">
                {dayjs(
                  contact.createdAt
                ).format(
                  "DD MMM YYYY"
                )}
              </p>

              <p className="text-sm text-muted-foreground">
                {dayjs(
                  contact.createdAt
                ).format(
                  "h:mm A"
                )}
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                Treated
              </div>

              {contact.treatedAt ? (
                <>
                  <p className="mt-3">
                    {dayjs(
                      contact.treatedAt
                    ).format(
                      "DD MMM YYYY"
                    )}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {dayjs(
                      contact.treatedAt
                    ).format(
                      "h:mm A"
                    )}
                  </p>
                </>
              ) : (
                <p className="mt-3 text-muted-foreground">
                  Not yet treated
                </p>
              )}
            </div>

          </div>

          {/* Treated By */}

          {contact.treatedBy && (
            <div className="rounded-xl border p-4">
              <h4 className="font-semibold">
                Treated By
              </h4>

              <p className="mt-2">
                {contact.treatedBy.fname}{" "}
                {contact.treatedBy.lname}
              </p>

              <p className="text-sm text-muted-foreground">
                {contact.treatedBy.email}
              </p>
            </div>
          )}

          {/* Subject */}

          <div>
            <h4 className="font-semibold">
              Subject
            </h4>

            <p className="mt-2">
              {contact.subject}
            </p>
          </div>

          {/* Message */}

          <div>
            <h4 className="font-semibold">
              Message
            </h4>

            <div className="mt-3 max-h-72 overflow-y-auto rounded-xl border bg-muted/30 p-5 whitespace-pre-wrap leading-7">
              {contact.message}
            </div>
          </div>

          {/* Footer */}

          <div className="flex justify-between">

            <Button
              variant="outline"
              asChild
            >
              <a
                href={`mailto:${contact.email}?subject=Re: ${contact.subject}`}
              >
                <Mail className="mr-2 h-4 w-4" />
                Reply
              </a>
            </Button>

            <div className="flex gap-3">

              {contact.status !==
                "treated" && (
                <Button
                  onClick={onTreat}
                >
                  Mark Treated
                </Button>
              )}

              <Button
                variant="destructive"
                onClick={onDelete}
              >
                Delete
              </Button>

            </div>

          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}