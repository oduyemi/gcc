"use client";
import dayjs from "dayjs";
import {
  MoreVertical,
  Trash2,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { AdminCard } from "@/components/admin/Cards";
import { AdminUser } from "@/types/admin";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";


interface Props {
  admins?: AdminUser[];
  loading?: boolean;
  onRemove: (admin: AdminUser) => void;
}

export const AdminList = ({
  admins = [],
  loading = false,
  onRemove,
}: Props) => {
  return (
    <AdminCard>
      <h2 className="text-xl font-bold text-white">
        Administrators
      </h2>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="pb-4 text-left">
                Administrator
              </th>

              <th className="pb-4 text-left">
                Email
              </th>

              <th className="pb-4 text-left">
                Status
              </th>

              <th className="pb-4 text-left">
                Created
              </th>

              <th className="pb-4 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={5}
                  className="py-10 text-center text-slate-400"
                >
                  Loading administrators...
                </td>
              </tr>
            ) : admins.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="py-10 text-center text-slate-400"
                >
                  No administrators found.
                </td>
              </tr>
            ) : (
              admins.map((admin) => (
                <tr
                  key={admin._id}
                  className="border-b border-white/5"
                >
                  <td className="py-4">
                    <div className="flex items-center gap-4">
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-xl
                          bg-primary
                          font-bold
                          text-white
                        "
                      >
                        {admin.fname[0]}
                        {admin.lname[0]}
                      </div>

                      <div>
                        <p className="font-semibold text-white">
                          {admin.fname} {admin.lname}
                        </p>

                        <div className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                          <ShieldCheck size={13} />
                          Administrator
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="py-4">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Mail size={15} />
                      {admin.email}
                    </div>
                  </td>

                  <td className="py-4">
                    {admin.firstLogin ? (
                      <span className="rounded-full bg-yellow-500/15 px-3 py-1 text-xs font-semibold text-yellow-400">
                        Pending Login
                      </span>
                    ) : (
                      <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-400">
                        Active
                      </span>
                    )}
                  </td>

                  <td className="py-4">
                    {admin.createdAt ? (
                      <div className="text-sm text-slate-400">
                        <p>
                          {dayjs(admin.createdAt).format(
                            "DD MMM YYYY"
                          )}
                        </p>

                        <p className="text-xs">
                          {dayjs(admin.createdAt).format(
                            "h:mm A"
                          )}
                        </p>
                      </div>
                    ) : (
                      <span className="text-slate-500">
                        —
                      </span>
                    )}
                  </td>

                  <td className="py-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="rounded-lg p-2 hover:bg-white/5">
                          <MoreVertical size={18} />
                        </button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() =>
                            onRemove(admin)
                          }
                          className="text-red-500"
                        >
                          <Trash2 size={16} />
                          Remove Admin
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </AdminCard>
  );
};