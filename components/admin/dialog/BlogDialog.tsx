"use client";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface Blog {
  _id?: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  content: string;
  createdAt?: string;
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  blog?: Blog | null;
  onSaved: () => void;
}

interface FormData {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  content: string;
}

const defaultForm: FormData = {
  title: "",
  excerpt: "",
  category: "General",
  image: "",
  content: "",
};

export const BlogDialog = ({
  open,
  onOpenChange,
  blog,
  onSaved,
}: Props) => {
  const [form, setForm] =
    useState<FormData>(defaultForm);

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [uploadingImage, setUploadingImage] =
    useState(false);

  /**
   * Create
   */
  useEffect(() => {
    if (blog) return;

    setForm(defaultForm);

    setSelectedFile(null);
  }, [blog]);

  /**
   * Edit
   */
  useEffect(() => {
    if (!blog) return;

    setForm({
      title: blog.title,
      excerpt: blog.excerpt,
      category: blog.category,
      image: blog.image,
      content: blog.content,
    });

    setSelectedFile(null);
  }, [blog]);

  const update = (
    key: keyof FormData,
    value: any
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  /**
   * Upload Image
   */
  const uploadImage = async () => {
    if (!selectedFile) {
      return form.image;
    }

    try {
      setUploadingImage(true);

      const data = new FormData();

      data.append(
        "file",
        selectedFile
      );

      /**
       * Existing blog?
       * Replace current Cloudinary image.
       */
      data.append(
        "blogId",
        blog?._id ??
          crypto.randomUUID()
      );

      const res = await fetch(
        "/api/blog/uploads",
        {
          method: "POST",
          body: data,
        }
      );

      const json =
        await res.json();

      if (json.error) {
        throw new Error(json.error);
      }

      return json.secure_url;
    } finally {
      setUploadingImage(false);
    }
  };

  /**
   * Save
   */
  const save = async () => {
    try {
      setLoading(true);

      const image =
        await uploadImage();

      const payload = {
        ...form,
        image,
      };

      const url = blog
        ? `/api/blog/${blog._id}`
        : "/api/blog";

      const method = blog
        ? "PUT"
        : "POST";

      const res = await fetch(
        url,
        {
          method,
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            payload
          ),
        }
      );

      if (!res.ok) {
        throw new Error(
          "Unable to save blog."
        );
      }

      onSaved();

      onOpenChange(false);

      setForm(defaultForm);

      setSelectedFile(null);
    } catch (err) {
      console.error(err);

      alert(
        "Unable to save blog."
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
      <DialogContent className="max-w-5xl max-h-[92vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {blog ? "Edit Blog Post" : "Create Blog Post"}
          </DialogTitle>
        </DialogHeader>
  
        <div className="space-y-6">
  
          {/* Title */}
  
          <div className="space-y-2">
            <Label>Title</Label>
  
            <Input
              placeholder="Enter blog title"
              value={form.title}
              onChange={(e) =>
                update("title", e.target.value)
              }
            />
          </div>
  
          {/* Excerpt */}
  
          <div className="space-y-2">
            <Label>Excerpt</Label>
  
            <Textarea
              rows={3}
              placeholder="Short summary..."
              value={form.excerpt}
              onChange={(e) =>
                update("excerpt", e.target.value)
              }
            />
          </div>
  
          {/* Category */}
  
          <div className="space-y-2">
            <Label>Category</Label>
  
            <Select
              value={form.category}
              onValueChange={(value) =>
                update("category", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
  
              <SelectContent>
                <SelectItem value="News">
                  News
                </SelectItem>
  
                <SelectItem value="Events">
                  Events
                </SelectItem>
  
                <SelectItem value="Devotional">
                  Devotional
                </SelectItem>
  
                <SelectItem value="Announcements">
                  Announcements
                </SelectItem>
  
                <SelectItem value="Testimony">
                  Testimony
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
  
          {/* Image */}
  
          <div className="space-y-3">
            <Label>Featured Image</Label>
  
            {form.image && (
              <img
                src={form.image}
                alt={form.title}
                className="h-64 w-full rounded-xl border object-cover"
              />
            )}
  
            <Input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setSelectedFile(
                  e.target.files?.[0] || null
                )
              }
            />
  
                {uploadingImage && (
                    <p className="text-sm text-muted-foreground">
                        Uploading image...
                    </p>
                )}
            </div>
  
          {/* Content */}
  
          <div className="space-y-2">
            <Label>Content</Label>
  
            <Textarea
              rows={18}
              placeholder="Write your article..."
              value={form.content}
              onChange={(e) =>
                update("content", e.target.value)
              }
            />
          </div>
  
          {/* Footer */}
  
          <div className="flex justify-end gap-3 pt-4">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
  
            <Button
              disabled={loading || uploadingImage}
              onClick={save}
            >
              {loading
                ? "Saving..."
                : blog
                ? "Update Blog"
                : "Publish Blog"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );}