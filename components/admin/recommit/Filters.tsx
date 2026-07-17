"use client";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


interface RecommitFiltersProps {
  status: string;
  search: string;
  onStatusChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}


export const RecommitFilters = ({
  status,
  search,
  onStatusChange,
  onSearchChange,
}: RecommitFiltersProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Select
        value={status || "all"}
        onValueChange={(value) =>
          onStatusChange(
            value === "all"
              ? ""
              : value
          )
        }
      >
        <SelectTrigger className="w-full md:w-64">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">
            All Requests
          </SelectItem>

          <SelectItem value="pending">
            Pending
          </SelectItem>

          <SelectItem value="treated">
            Followed Up
          </SelectItem>
        </SelectContent>
      </Select>

      <Input
        value={search}
        onChange={(e) =>
          onSearchChange(
            e.target.value
          )
        }
        placeholder="Search by name, email or phone..."
        className="md:w-80"
      />
    </div>
  );
}