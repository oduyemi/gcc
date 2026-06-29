"use client";

import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";
import { Meeting } from "@/types/meeting";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  meeting?: Meeting | null;
  selectedMonth?: string | null;

  onSaved: () => void;
}

interface FormData {
  title: string;
  description: string;

  category: "service" | "prayer" | "fellowship" | "special";

  startDate: string;
  endDate: string;

  time: string;
  location: string;

  image: string;
  imagePublicId: string;

  meetingLink: string;

  isOnline: boolean;
  isActive: boolean;
}

const defaultForm: FormData = {
  title: "",
  description: "",

  category: "special",

  startDate: "",
  endDate: "",

  time: "",
  location: "",

  image: "",
  imagePublicId: "",

  meetingLink: "",

  isOnline: false,
  isActive: true,
};

export const QuarterMeetingDialog = ({
  open,
  onOpenChange,
  meeting,
  selectedMonth,
  onSaved,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [form, setForm] =
    useState<FormData>(defaultForm);

  const previewImage = useMemo(() => {
    if (selectedFile) {
      return URL.createObjectURL(selectedFile);
    }

    return form.image;
  }, [selectedFile, form.image]);

  useEffect(() => {
    return () => {
      if (previewImage?.startsWith("blob:")) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  /**
   * CREATE
   */
  useEffect(() => {
    if (meeting) return;

    const year = dayjs().year();

    setForm({
      ...defaultForm,

      startDate: selectedMonth
        ? dayjs(`${selectedMonth} 1 ${year}`).format(
            "YYYY-MM-DD"
          )
        : "",
    });

    setSelectedFile(null);
  }, [meeting, selectedMonth]);

  /**
   * EDIT
   */
  useEffect(() => {
    if (!meeting) return;

    setForm({
      title: meeting.title,
      description: meeting.description || "",

      category: meeting.category,

      startDate: meeting.startDate
        ? dayjs(meeting.startDate).format(
            "YYYY-MM-DD"
          )
        : "",

      endDate: meeting.endDate
        ? dayjs(meeting.endDate).format(
            "YYYY-MM-DD"
          )
        : "",

      time: meeting.time || "",

      location: meeting.location || "",

      image: meeting.image || "",

      imagePublicId:
        meeting.imagePublicId || "",

      meetingLink:
        meeting.meetingLink || "",

      isOnline: meeting.isOnline,

      isActive: meeting.isActive,
    });

    setSelectedFile(null);
  }, [meeting]);

  const update = (
    key: keyof FormData,
    value: any
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const uploadImage = async () => {
    if (!selectedFile) {
      return {
        image: form.image,
        imagePublicId: form.imagePublicId,
      };
    }

    try {
      setUploadingImage(true);

      const fd = new FormData();

      fd.append("file", selectedFile);

      if (form.imagePublicId) {
        fd.append(
          "publicId",
          form.imagePublicId
        );
      }

      const res = await fetch(
        "/api/meetings/image",
        {
          method: "POST",
          body: fd,
        }
      );

      const json = await res.json();

      if (!json.success) {
        throw new Error(json.message);
      }

      return {
        image: json.data.url,
        imagePublicId:
          json.data.public_id,
      };
    } finally {
      setUploadingImage(false);
    }
  };

  const save = async () => {
    try {
      setLoading(true);

      const uploaded =
        await uploadImage();

      const payload = {
        ...form,

        image: uploaded.image,

        imagePublicId:
          uploaded.imagePublicId,
      };

      const url = meeting
        ? `/api/meetings/quarter/${meeting._id}`
        : "/api/meetings/quarter";

      const method = meeting
        ? "PATCH"
        : "POST";

      const res = await fetch(url, {
        method,

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (!json.success) {
        throw new Error(json.message);
      }

      setSelectedFile(null);

      onSaved();

      onOpenChange(false);
    } catch (err) {
      console.error(err);

      alert("Unable to save event.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!value) {
          setSelectedFile(null);
        }

        onOpenChange(value);
      }}
    >
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {meeting
              ? "Edit Quarter Event"
              : "Create Quarter Event"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5">
          <Input
            disabled={loading}
            placeholder="Event title"
            value={form.title}
            onChange={(e) =>
              update(
                "title",
                e.target.value
              )
            }
          />

          <Textarea
            rows={4}
            disabled={loading}
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              update(
                "description",
                e.target.value
              )
            }
          />

          <Select
            value={form.category}
            onValueChange={(v) =>
              update("category", v)
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="service">
                Service
              </SelectItem>

              <SelectItem value="prayer">
                Prayer
              </SelectItem>

              <SelectItem value="fellowship">
                Fellowship
              </SelectItem>

              <SelectItem value="special">
                Special Event
              </SelectItem>
            </SelectContent>
          </Select>

          <div className="grid grid-cols-2 gap-4">
            <Input
              disabled={loading}
              type="date"
              value={form.startDate}
              onChange={(e) =>
                update(
                  "startDate",
                  e.target.value
                )
              }
            />

            <Input
              disabled={loading}
              type="date"
              value={form.endDate}
              onChange={(e) =>
                update(
                  "endDate",
                  e.target.value
                )
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              disabled={loading}
              placeholder="Time"
              value={form.time}
              onChange={(e) =>
                update(
                  "time",
                  e.target.value
                )
              }
            />

            <Input
              disabled={loading}
              placeholder="Location"
              value={form.location}
              onChange={(e) =>
                update(
                  "location",
                  e.target.value
                )
              }
            />
          </div>

          <Input
            disabled={loading}
            placeholder="Meeting Link"
            value={form.meetingLink}
            onChange={(e) =>
              update(
                "meetingLink",
                e.target.value
              )
            }
          />

          <div className="space-y-3">
            <Label>Event Image</Label>

            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="h-52 w-full rounded-xl border object-cover"
              />
            )}

            <Input
              type="file"
              accept="image/*"
              disabled={
                loading || uploadingImage
              }
              onChange={(e) =>
                setSelectedFile(
                  e.target.files?.[0] ?? null
                )
              }
            />

            {uploadingImage && (
              <p className="text-sm text-muted-foreground">
                Uploading image...
              </p>
            )}
          </div>

          <div className="flex items-center justify-between rounded-xl border p-4">
            <Label>Online Meeting</Label>

            <Switch
              checked={form.isOnline}
              onCheckedChange={(v) =>
                update("isOnline", v)
              }
            />
          </div>

          <div className="flex items-center justify-between rounded-xl border p-4">
            <Label>Active</Label>

            <Switch
              checked={form.isActive}
              onCheckedChange={(v) =>
                update("isActive", v)
              }
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              disabled={loading}
              onClick={() =>
                onOpenChange(false)
              }
            >
              Cancel
            </Button>

            <Button
              disabled={
                loading || uploadingImage
              }
              onClick={save}
            >
              {loading
                ? "Saving..."
                : meeting
                ? "Update Event"
                : "Create Event"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};