"use client";
import { Filters } from "@/components/admin/Filters";

interface PrayerFiltersProps {
  status: string;
  search: string;
  onStatusChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}

export const PrayerFilters =({
  status,
  search,
  onStatusChange,
  onSearchChange,
}: PrayerFiltersProps) => {
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
              label: "Treated",
              value: "treated",
            },
          ],
          onChange: onStatusChange,
        },
        {
          type: "input",
          value: search,
          placeholder: "Search by name, email or phone...",
          onChange: onSearchChange,
          width: "md:w-80",
        },
      ]}
    />
  );
}