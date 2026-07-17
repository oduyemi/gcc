"use client";
import { Edit, MoreVertical, Trash2, CalendarDays } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { AdminCard } from "@/components/admin/Cards";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import { Meeting } from "@/types/meeting";

interface Props {
    meetings?: Meeting[];
    loading?: boolean;
    onAdd:() => void;
    onEdit: (meeting: Meeting) => void;
    onDelete: (meeting: Meeting) => void;
}
  
  

export const MeetingTable = ({meetings = [], loading = false, onAdd, onEdit, onDelete}: Props) => {
    
    return (
        <AdminCard>
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
                Meetings & Events
            </h2>

            <Button onClick={onAdd}>
                Add Meeting
            </Button>
        </div>
        <div className="mt-6 overflow-x-auto rounded-xs">
            <table className="min-w-[900px] w-full">
            <thead>
                <tr className="border-b border-white/10 text-left hover:bg-white/[0.05] transition-colors">
                <th className="w-[45%] pb-4 text-left">
                    Meeting
                </th>

                <th className="w-[15%] pb-4 text-left">
                    Frequency
                </th>

                <th className="w-[20%] pb-4 text-left">
                    Next Date
                </th>

                <th className="w-[20%] pb-4 text-right">
                    Actions
                </th>
                </tr>
            </thead>

            <tbody>
            {loading ? (
                Array.from({ length: 5 }).map((_, index) => (
                <tr
                    key={index}
                    className="border-b border-white/5 transition-colors hover:bg-white/[0.05]"
                >
                    <td className="py-4">
                    <div className="space-y-2">
                        <div className="h-4 w-48 animate-pulse rounded bg-white/5" />
                        <div className="h-3 w-32 animate-pulse rounded bg-white/5" />
                    </div>
                    </td>

                    <td>
                    <div className="h-6 w-20 animate-pulse rounded-full bg-white/5" />
                    </td>

                    <td>
                    <div className="h-4 w-24 animate-pulse rounded bg-white/5" />
                    </td>

                    <td>
                    <div className="flex justify-center">
                        <div className="h-9 w-9 animate-pulse rounded-xl bg-white/5" />
                    </div>
                    </td>
                </tr>
                ))
            ) : meetings.length === 0 ? (
                <tr>
                <td
                    colSpan={4}
                    className="py-16 text-center"
                >
                    <div className="flex flex-col items-center gap-3">
                    <div className="rounded-2xl bg-white/5 p-4">
                        <CalendarDays className="h-8 w-8 text-slate-500" />
                    </div>

                    <div>
                        <p className="font-medium text-white">
                        No meetings scheduled
                        </p>

                        <p className="mt-1 text-sm text-slate-400">
                        Click <span className="font-medium text-primary">"Add Meeting"</span> to create your first event.
                        </p>
                    </div>
                    </div>
                </td>
                </tr>
            ) : (
                meetings.map((meeting) => (
                <tr
                    key={meeting._id}
                    className="border-b border-white/5 transition-colors hover:bg-white/[0.05]"
                >
                    <td className="py-4">
                    <div className="min-w-0">
                        <p className="max-w-md truncate font-medium text-white">
                        {meeting.title}
                        </p>

                        <p className="mt-1 text-sm text-slate-400">
                        {meeting.location || "No location specified"}
                        </p>
                    </div>
                    </td>

                    <td className="py-4">
                    <span className="rounded-full bg-primary/20 px-3 py-1 text-xs capitalize text-primary">
                        {meeting.frequency}
                    </span>
                    </td>

                    <td className="py-4">
                    <span className="text-sm text-slate-300">
                        {meeting.nextOccurrence
                        ? dayjs(meeting.nextOccurrence).format("DD MMM YYYY")
                        : "-"}
                    </span>
                    </td>

                    <td className="py-4">
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
                        <DropdownMenuItem onClick={() => onEdit(meeting)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            onClick={() => onDelete(meeting)}
                            className="text-red-500 focus:text-red-500"
                        >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
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