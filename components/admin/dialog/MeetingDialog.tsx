"use client";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Meeting } from "@/types/meeting";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    meeting?: Meeting | null;
    onSaved: () => void;
}

interface FormData {
    title: string;
    description: string;
    category:
      | "service"
      | "prayer"
      | "fellowship"
      | "special";
    type:
      | "recurring"
      | "special";
    frequency?:
      | "weekly"
      | "monthly";
    dayOfWeek?: number;
    weekOfMonth?:
      | "first"
      | "second"
      | "third"
      | "fourth"
      | "last";
    startDate: string;
    endDate: string;
    time: string;
    location: string;
    meetingLink: string;
    image: string;
    imagePublicId: string;
    isOnline: boolean;
    isActive: boolean;
    sortOrder: number;
}

const defaultForm: FormData = {
    title: "",
    description: "",
    category: "service",
    type: "recurring",
    frequency: "weekly", 
    dayOfWeek: 0,
    weekOfMonth: "first",
    startDate: "",
    endDate: "",
    time: "",
    location: "",
    meetingLink: "",
    image: "",
    imagePublicId: "",
    isOnline: false,
    isActive: true,
    sortOrder: 0,
};

export const MeetingDialog = ({open, onOpenChange, meeting, onSaved}: Props) => {
    const [loading, setLoading] = useState(false);
    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [form, setForm] = useState<FormData>(defaultForm);

    useEffect(() => {
        if (meeting) return;
    
        setForm(defaultForm);
    
        setSelectedFile(null);
      }, [meeting]);

      useEffect(() => {
        if (!meeting) return;
    
        setForm({
          title: meeting.title,
    
          description:
            meeting.description || "",
    
          category: meeting.category,
    
          type: meeting.type,
    
          frequency:
            meeting.frequency,
    
          dayOfWeek:
            meeting.dayOfWeek,
    
          weekOfMonth:
            meeting.weekOfMonth,
    
          startDate:
            meeting.startDate
              ? dayjs(
                  meeting.startDate
                ).format("YYYY-MM-DD")
              : "",
    
          endDate:
            meeting.endDate
              ? dayjs(
                  meeting.endDate
                ).format("YYYY-MM-DD")
              : "",
    
          time:
            meeting.time || "",
    
          location:
            meeting.location || "",
    
          meetingLink:
            meeting.meetingLink || "",
    
          image:
            meeting.image || "",
    
          imagePublicId:
            meeting.imagePublicId || "",
    
          isOnline:
            meeting.isOnline,
    
          isActive:
            meeting.isActive,
    
          sortOrder:
            meeting.sortOrder,
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
    
            imagePublicId:
              form.imagePublicId,
          };
        }
    
        try {
          setUploadingImage(true);
    
          const data =
            new FormData();
    
          data.append(
            "file",
            selectedFile
          );
    
          if (form.imagePublicId) {
            data.append(
              "publicId",
              form.imagePublicId
            );
          }
    
          const res =
            await fetch(
              "/api/meetings/image",
              {
                method: "POST",
    
                body: data,
              }
            );
    
          const json =
            await res.json();
    
          if (!json.success) {
            throw new Error(
              json.message
            );
          }
    
          return {
            image:
              json.data.url,
    
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
      
          const uploaded = await uploadImage();
      
          const payload = {
            ...form,
            image: uploaded.image,
            imagePublicId: uploaded.imagePublicId,
          };
      
          const url = meeting
            ? `/api/meetings/${meeting._id}`
            : "/api/meetings";
      
          const method = meeting ? "PATCH" : "POST";
      
          const res = await fetch(url, {
            method,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
      
          const json = await res.json();
      
          if (!json.success) {
            alert(json.message ?? "Unable to save meeting.");
            return;
          }
      
          onSaved();
      
          onOpenChange(false);
      
          setForm(defaultForm);
      
          setSelectedFile(null);
        } catch (error) {
          console.error(error);
      
          alert("Unable to save meeting.");
        } finally {
          setLoading(false);
        }
    };
    return (
        <Dialog
          open={open}
          onOpenChange={onOpenChange}
        >
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {meeting ? "Edit Meeting" : "Create Meeting"}
              </DialogTitle>
            </DialogHeader>
      
            <div className="space-y-5">
      
              {/* Title */}
      
              <Input
                placeholder="Meeting title"
                value={form.title}
                onChange={(e) =>
                  update("title", e.target.value)
                }
              />
      
              {/* Description */}
      
              <Textarea
                rows={4}
                placeholder="Description"
                value={form.description}
                onChange={(e) =>
                  update(
                    "description",
                    e.target.value
                  )
                }
              />
      
              {/* Category */}
      
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
      
              {/* Meeting Type */}
      
              <Select
                value={form.type}
                onValueChange={(v) =>
                  update("type", v)
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
      
                <SelectContent>
                  <SelectItem value="recurring">
                    Recurring
                  </SelectItem>
      
                  <SelectItem value="special">
                    Special
                  </SelectItem>
                </SelectContent>
              </Select>
      
              {/* Frequency */}
      
              {form.type === "recurring" && (
                <>
                  <Select
                    value={form.frequency}
                    onValueChange={(v) =>
                      update(
                        "frequency",
                        v
                      )
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
      
                    <SelectContent>
                      <SelectItem value="weekly">
                        Weekly
                      </SelectItem>
      
                      <SelectItem value="monthly">
                        Monthly
                      </SelectItem>
                    </SelectContent>
                  </Select>
      
                  {/* Weekly */}
      
                  {form.frequency === "weekly" && (
                    <Select
                      value={String(
                        form.dayOfWeek
                      )}
                      onValueChange={(v) =>
                        update(
                          "dayOfWeek",
                          Number(v)
                        )
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
      
                      <SelectContent>
                        <SelectItem value="0">
                          Sunday
                        </SelectItem>
                        <SelectItem value="1">
                          Monday
                        </SelectItem>
                        <SelectItem value="2">
                          Tuesday
                        </SelectItem>
                        <SelectItem value="3">
                          Wednesday
                        </SelectItem>
                        <SelectItem value="4">
                          Thursday
                        </SelectItem>
                        <SelectItem value="5">
                          Friday
                        </SelectItem>
                        <SelectItem value="6">
                          Saturday
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
      
                  {/* Monthly */}
      
                  {form.frequency === "monthly" && (
                    <Select
                      value={form.weekOfMonth}
                      onValueChange={(v) =>
                        update(
                          "weekOfMonth",
                          v
                        )
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
      
                      <SelectContent>
                        <SelectItem value="first">
                          First Week
                        </SelectItem>
      
                        <SelectItem value="second">
                          Second Week
                        </SelectItem>
      
                        <SelectItem value="third">
                          Third Week
                        </SelectItem>
      
                        <SelectItem value="fourth">
                          Fourth Week
                        </SelectItem>
      
                        <SelectItem value="last">
                          Last Week
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </>
              )}
      
              {/* Dates */}
      
              <div className="grid grid-cols-2 gap-4">
                <Input
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
      
              {/* Time & Location */}
      
              <div className="grid grid-cols-2 gap-4">
                <Input
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
      
              {/* Meeting Link */}
      
              <Input
                placeholder="Meeting Link"
                value={form.meetingLink}
                onChange={(e) =>
                  update(
                    "meetingLink",
                    e.target.value
                  )
                }
              />
      
              {/* Image */}
      
              <div className="space-y-3">
                <Label>
                  Meeting Image
                </Label>
      
                {form.image && (
                  <img
                    src={form.image}
                    alt={form.title}
                    className="h-48 w-full rounded-xl object-cover border"
                  />
                )}
      
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setSelectedFile(
                      e.target.files?.[0] ??
                        null
                    )
                  }
                />
      
                {uploadingImage && (
                  <p className="text-sm text-muted-foreground">
                    Uploading image...
                  </p>
                )}
              </div>
      
              {/* Sort Order */}
      
              <Input
                type="number"
                placeholder="Sort Order"
                value={form.sortOrder}
                onChange={(e) =>
                  update(
                    "sortOrder",
                    Number(e.target.value)
                  )
                }
              />
      
              {/* Online */}
      
              <div className="flex items-center justify-between rounded-xl border p-4">
                <Label>
                  Online Meeting
                </Label>
      
                <Switch
                  checked={form.isOnline}
                  onCheckedChange={(v) =>
                    update(
                      "isOnline",
                      v
                    )
                  }
                />
              </div>
      
              {/* Active */}
      
              <div className="flex items-center justify-between rounded-xl border p-4">
                <Label>
                  Active
                </Label>
      
                <Switch
                  checked={form.isActive}
                  onCheckedChange={(v) =>
                    update(
                      "isActive",
                      v
                    )
                  }
                />
              </div>
      
              {/* Footer */}
      
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
                  disabled={
                    loading ||
                    uploadingImage
                  }
                  onClick={save}
                >
                  {loading
                    ? "Saving..."
                    : meeting
                    ? "Update Meeting"
                    : "Create Meeting"}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
    );
}