"use client";
import { Filters } from "@/components/admin/Filters";


interface BaptismFiltersProps {
  status: string;
  search: string;
  onStatusChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}

export const BaptismFilters = ({
  status,
  search,
  onStatusChange,
  onSearchChange,
}: BaptismFiltersProps) => {
  return (
    <Filters
      filters={[
        {
          type: "select",
          value: status,
          placeholder: "Filter by status",
          options: [
            {
              label: "Pending",
              value: "pending",
            },
            {
              label: "Scheduled",
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