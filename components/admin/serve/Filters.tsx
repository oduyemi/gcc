"use client";
import { Filters } from "@/components/admin/Filters";



interface ServeFiltersProps {
  status: string;
  interest: string;
  search: string;
  onStatusChange: (value: string) => void;
  onInterestChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}



export function ServeFilters({
  status,
  interest,
  search,
  onStatusChange,
  onInterestChange,
  onSearchChange,
}: ServeFiltersProps) {
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
              label: "Contacted",
              value: "treated",
            },
          ],
          onChange: onStatusChange,
        },
        {
          type: "select",
          value: interest,
          placeholder: "Serving area",
          options: [
            {
              label: "Ushering",
              value: "ushering",
            },
            {
              label: "Choir",
              value: "choir",
            },
            {
              label: "Media",
              value: "media",
            },
            {
              label: "Children",
              value: "children",
            },
            {
              label: "Youth",
              value: "youth",
            },
            {
              label: "Prayer",
              value: "prayer",
            },
            {
              label: "Hospitality",
              value: "hospitality",
            },
            {
              label: "Protocol",
              value: "protocol",
            },
            {
              label: "Evangelism",
              value: "evangelism",
            },
            {
              label: "Technical",
              value: "technical",
            },
            {
              label: "Security",
              value: "security",
            },
            {
              label: "Other",
              value: "other",
            },
          ],
          onChange: onInterestChange,
        },
        {
          type: "input",
          value: search,
          placeholder:
            "Search by name, email or phone...",
          onChange: onSearchChange,
          width: "md:w-80",
        },
      ]}
    />
  );
}