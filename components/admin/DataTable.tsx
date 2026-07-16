"use client";
import { ReactNode } from "react";
import { MoreVertical } from "lucide-react";
import { AdminCard } from "@/components/admin/Cards";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";


export interface TableColumn<T> {
  key: keyof T | string;
  header: string;
  className?: string;
  render: (row: T) => ReactNode;
}

export interface TableAction<T> {
  label: string;
  icon: ReactNode;
  onClick: (row: T) => void;
  hidden?: (row: T) => boolean;
  destructive?: boolean;
}

interface DataTableProps<T> {
  title: string;

  data: T[];

  columns: TableColumn<T>[];

  actions?: TableAction<T>[];

  loading?: boolean;

  emptyMessage?: string;
}

export function DataTable<T extends { _id: string }>({
  title,
  data,
  columns,
  actions = [],
  loading = false,
  emptyMessage = "No records found.",
}: DataTableProps<T>) {
  return (
    <AdminCard className="overflow-hidden p-4 sm:p-6">
      <h2 className="text-lg font-semibold text-white sm:text-xl">
        {title}
      </h2>

      <div className="mt-6 w-full overflow-x-auto rounded-xl">
        <div className="mt-6 w-full overflow-x-auto">
          <div className="min-w-[720px]">
                <table className="min-w-full border-separate border-spacing-0">
                  <thead className="sticky top-0 z-10 bg-slate-950">
                    <tr className="border-b border-white/10">
                      {columns.map((column) => (
                        <th
                          key={String(column.key)}
                          className={`px-3 pb-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400 sm:px-4 ${column.className ?? ""}`}
                        >
                          {column.header}
                        </th>
                      ))}

                      {actions.length > 0 && (
                        <th className="pb-4 text-right">
                          Actions
                        </th>
                      )}
                    </tr>
                  </thead>

                  <tbody>
                    {loading ? (
                      <tr>
                        <td
                          colSpan={
                            columns.length +
                            (actions.length ? 1 : 0)
                          }
                          className="py-10 text-center text-slate-400"
                        >
                          Loading records...
                        </td>
                      </tr>
                    ) : data.length === 0 ? (
                      <tr>
                        <td
                          colSpan={
                            columns.length +
                            (actions.length ? 1 : 0)
                          }
                          className="py-10 text-center text-slate-400"
                        >
                          {emptyMessage}
                        </td>
                      </tr>
                    ) : (
                      data.map((row) => (
                        <tr
                          key={row._id}
                          className="border-b border-white/5 transition-colors hover:bg-white/5"
                        >
                          {columns.map((column) => (
                            <td
                              key={String(column.key)}
                              className={`px-3 py-4 align-middle whitespace-nowrap sm:px-4 ${column.className ?? ""}`}
                            >
                              {column.render(row)}
                            </td>
                          ))}

                          {actions.length > 0 && (
                            <td className="py-4 text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <button 
                                    type="button"
                                    aria-label="Row actions"
                                    className="
                                      rounded-lg
                                      p-2
                                      transition-colors
                                      hover:bg-white/10
                                      focus:outline-none
                                      focus:ring-2
                                      focus:ring-primary"
                                  >
                                    <MoreVertical size={18} />
                                  </button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent align="end">
                                  {actions
                                    .filter(
                                      (action) =>
                                        !action.hidden?.(row)
                                    )
                                    .map((action) => (
                                      <DropdownMenuItem
                                        key={action.label}
                                        onClick={() =>
                                          action.onClick(row)
                                        }
                                        className={
                                          action.destructive
                                            ? "text-red-500"
                                            : ""
                                        }
                                      >
                                        {action.icon}
                                        {action.label}
                                      </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </td>
                          )}
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
      </div>
    </AdminCard>
  );
}