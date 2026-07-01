"use client";
import { useEffect, useState } from "react";
import { AdminList } from "@/components/admin/administrators/List";
import { AdminQuickActions } from "@/components/admin/administrators/QuickActions";
import { AdminStats } from "@/components/admin/administrators/Stats";
import { CreateAdminDialog } from "@/components/admin/dialog/CreateAdmin";
import { RemoveAdminDialog } from "@/components/admin/dialog/RemoveAdmin";
import { AdminUser } from "@/types/admin";


export default function Users() {
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [createAdminOpen, setCreateAdminOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [createOpen, setCreateOpen] = useState(false);
  const [removeOpen, setRemoveOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] =
    useState<AdminUser | null>(null);

  /**
   * Fetch administrators
   */
  const fetchAdmins = async () => {
    try {
      setLoading(true);

      const token =
        localStorage.getItem("token");

      const res = await fetch(
        "/api/admin",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(
          "Failed to fetch administrators"
        );
      }

      const data = await res.json();

      setAdmins(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Initial load
   */
  useEffect(() => {
    fetchAdmins();
  }, []);

  return (
    <>
      {/* Stats */}

      <AdminStats admins={admins} />

      {/* Main Content */}

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <AdminList
            admins={admins}
            loading={loading}
            onRemove={(admin) => {
              setSelectedAdmin(admin);
              setRemoveOpen(true);
            }}
          />
        </div>

        <AdminQuickActions />
      </div>

      {/* Create Admin */}

      <CreateAdminDialog
        open={createOpen}
        onOpenChange={setCreateOpen}
        onSuccess={fetchAdmins}
      />

      {/* Remove Admin */}

      <RemoveAdminDialog
        admin={selectedAdmin}
        open={removeOpen}
        onOpenChange={setRemoveOpen}
        onSuccess={() => {
          fetchAdmins();
          setSelectedAdmin(null);
        }}
      />
    </>
  );
}