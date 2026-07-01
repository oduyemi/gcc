"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  status: string;
  topic: string;
  onStatusChange: (value: string) => void;
  onTopicChange: (value: string) => void;
}

export function ContactFilters({
  status,
  topic,
  onStatusChange,
  onTopicChange,
}: Props) {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      {/* Status Filter */}
      <Select
        value={status || "all"}
        onValueChange={(value) =>
          onStatusChange(value === "all" ? "" : value)
        }
      >
        <SelectTrigger className="w-full md:w-56">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">
            All Statuses
          </SelectItem>

          <SelectItem value="pending">
            Pending
          </SelectItem>

          <SelectItem value="treated">
            Treated
          </SelectItem>
        </SelectContent>
      </Select>

      {/* Topic Filter */}
      <Input
        value={topic}
        placeholder="Filter by topic..."
        onChange={(e) =>
          onTopicChange(e.target.value)
        }
        className="md:w-72"
      />
    </div>
  );
}