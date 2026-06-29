"use client";
import {
  Calendar,
  Edit,
  MoreVertical,
  Trash2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { AdminCard } from "@/components/admin/Cards";
import { Meeting } from "@/types/meetings";
import dayjs from "dayjs";

interface Props {
    meetings?: Meeting[];
    onEdit: (meeting: Meeting) => void;
    onDelete: (meeting: Meeting) => void;
  }
  
  

export const MeetingTable = ({meetings = [], onEdit, onDelete}: Props) => {
    return (
        <AdminCard>
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
            Meetings & Events
            </h2>
        </div>

        <div className="mt-6 overflow-x-auto">
            <table className="w-full">
            <thead>
                <tr className="border-b border-white/10 text-left">
                <th className="pb-4 text-slate-400">
                    Meeting
                </th>

                <th className="pb-4 text-slate-400">
                    Frequency
                </th>

                <th className="pb-4 text-slate-400">
                    Next Date
                </th>

                <th className="pb-4 text-slate-400">
                    Actions
                </th>
                </tr>
            </thead>

            <tbody>
                {(Array.isArray(meetings) ? meetings : []).map(
                    (meeting) => (
                <tr key={meeting._id}>

                    <td className="py-4">
                    <div>
                        <p className="font-medium text-white">
                        {meeting.title}
                        </p>

                        <p className="text-sm text-slate-400">
                        {meeting.location}
                        </p>
                    </div>
                    </td>

                    <td className="py-4 capitalize text-slate-300">
                    {meeting.frequency}
                    </td>

                    <td className="py-4 text-slate-300">
                    {meeting.nextOccurrence
                        ? dayjs(
                            meeting.nextOccurrence
                        ).format("DD MMM YYYY")
                        : "-"}
                    </td>

                    <td className="py-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                        <MoreVertical size={18} />
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                        <DropdownMenuItem
                            onClick={() =>
                            onEdit(meeting)
                            }
                        >
                            <Edit size={16} />
                            Edit
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            onClick={() =>
                            onDelete(meeting)
                            }
                            className="text-red-500"
                        >
                            <Trash2 size={16} />
                            Delete
                        </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </AdminCard>
    );
};