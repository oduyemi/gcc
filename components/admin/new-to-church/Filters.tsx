"use client";
import { Filters } from "@/components/admin/Filters";


interface NewToChurchFiltersProps {
  status: string;
  interest: string;
  search: string;
  onStatusChange: (value: string) => void;
  onInterestChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}




export const NewToChurchFilters = ({
  status,
  interest,
  search,
  onStatusChange,
  onInterestChange,
  onSearchChange,
}: NewToChurchFiltersProps) => {
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
          placeholder: "Filter by interest",
          options: [
            {
              label: "Membership",
              value: "membership",
            },
            {
              label: "Serving",
              value: "serving",
            },
            {
              label: "Small Groups",
              value: "smallgroups",
            },
            {
              label: "Young Adults",
              value: "youngadults",
            },
            {
              label: "Youth",
              value: "youth",
            },
            {
              label: "Children",
              value: "children",
            },
            {
              label: "Prayer",
              value: "prayer",
            },
            {
              label: "Baptism",
              value: "baptism",
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