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

      <div className="mt-6 overflow-x-auto rounded-xs">
          <table className="min-w-[900px] w-full">
          <thead>
            <tr className="border-b border-white/10 hover:bg-white/[0.05] transition-colors">
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
            Array.from({ length: 5 }).map((_, index) => (
              <tr
                key={index}
                className="border-b border-white/5 hover:bg-white/[0.05] transition-colors"
              >
                <td className="py-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 animate-pulse rounded-xl bg-white/5" />

                    <div className="space-y-2">
                      <div className="h-4 w-40 animate-pulse rounded bg-white/5" />
                      <div className="h-3 w-24 animate-pulse rounded bg-white/5" />
                    </div>
                  </div>
                </td>

                <td className="py-4">
                  <div className="h-4 w-56 animate-pulse rounded bg-white/5" />
                </td>

                <td className="py-4">
                  <div className="h-6 w-28 animate-pulse rounded-full bg-white/5" />
                </td>

                <td className="py-4">
                  <div className="space-y-2">
                    <div className="h-4 w-24 animate-pulse rounded bg-white/5" />
                    <div className="h-3 w-16 animate-pulse rounded bg-white/5" />
                  </div>
                </td>

                <td className="py-4 text-right">
                  <div className="ml-auto h-9 w-9 animate-pulse rounded-xl bg-white/5" />
                </td>
              </tr>
            ))
          ) : admins.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="py-12 text-center"
              >
                <div className="flex flex-col items-center gap-3">
                  <ShieldCheck
                    size={40}
                    className="text-slate-600"
                  />

                  <div >
                    <p className="font-medium text-slate-300">
                      No administrators found
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Administrators will appear here once they are added.
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          ) : (
            admins.map((admin) => (
              <tr
                key={admin._id}
                className="border-b border-white/5 hover:bg-white/[0.05] transition-colors"
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
                    <Mail size={15} className="text-slate-500" />
                    <span className="truncate">
                      {admin.email}
                    </span>
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
                        {dayjs(admin.createdAt).format("DD MMM YYYY")}
                      </p>

                      <p className="text-xs">
                        {dayjs(admin.createdAt).format("h:mm A")}
                      </p>
                    </div>
                  ) : (
                    <span className="text-slate-500">—</span>
                  )}
                </td>

                <td className="py-4 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/10
                          bg-white/5
                          transition-colors
                          hover:bg-white/10
                        "
                      >
                        <MoreVertical size={16} />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => onRemove(admin)}
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