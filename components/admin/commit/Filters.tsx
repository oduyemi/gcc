"use client";
import { Filters } from "@/components/admin/Filters";


interface CommitFiltersProps {
  status: string;
  search: string;
  onStatusChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}

export const CommitFilters = ({
  status,
  search,
  onStatusChange,
  onSearchChange,
}: CommitFiltersProps) => {
  return (
    <Filters
      filters={[
        {
          type: "select",
          value: status,
          placeholder: "Filter by follow-up status",
          options: [
            {
              label: "Pending",
              value: "pending",
            },
            {
              label: "Followed Up",
              value: "treated",
            },
          ],
          onChange: onStatusChange,
        },
        {
          type: "input",
          value: search,
          placeholder:
            "Search by name, email or phone...",
          width: "md:w-80",
          onChange: onSearchChange,
        },
      ]}
    />
  );
}