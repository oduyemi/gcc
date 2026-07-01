"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { UserPlus, Loader2 } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const CreateAdminDialog = ({
  open,
  onOpenChange,
  onSuccess,
}: Props) => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error ||
            "Failed to create admin"
        );
      }

      setForm({
        fname: "",
        lname: "",
        email: "",
        password: "",
      });

      onSuccess?.();
      onOpenChange(false);
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
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent
        className="
          border-white/10
          bg-slate-950
          text-white
          sm:max-w-lg
        "
      >
        <DialogHeader>
          <DialogTitle>
            Create Administrator
          </DialogTitle>

          <DialogDescription>
            Create a new admin account.
            Login credentials will be
            emailed automatically.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-4">
          <input
            value={form.fname}
            onChange={(e) =>
              setForm({
                ...form,
                fname: e.target.value,
              })
            }
            placeholder="First Name"
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
            "
          />

          <input
            value={form.lname}
            onChange={(e) =>
              setForm({
                ...form,
                lname: e.target.value,
              })
            }
            placeholder="Last Name"
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
            "
          />

          <input
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            placeholder="Email Address"
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
            "
          />

          <input
            type="password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
            placeholder="Temporary Password"
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
            "
          />
        </div>

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
            onClick={handleSubmit}
            disabled={loading}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-primary
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
              <UserPlus size={16} />
            )}

            Create Admin
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};