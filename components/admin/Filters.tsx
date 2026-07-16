"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface SelectFilterOption {
  label: string;
  value: string;
}

export interface SelectFilter {
  type: "select";
  value: string;
  placeholder: string;
  options: SelectFilterOption[];
  onChange: (value: string) => void;
  width?: string;
}

export interface InputFilter {
  type: "input";
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  width?: string;
}

export type FilterItem = SelectFilter | InputFilter;

interface FiltersProps {
  filters: FilterItem[];
}

export const Filters = ({
  filters,
}: FiltersProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      {filters.map((filter, index) => {
        if (filter.type === "select") {
          return (
            <Select
              key={index}
              value={filter.value || "all"}
              onValueChange={(value) =>
                filter.onChange(
                  value === "all" ? "" : value
                )
              }
            >
              <SelectTrigger
                className={filter.width ?? "w-full md:w-56"}
              >
                <SelectValue
                  placeholder={filter.placeholder}
                />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">
                  All
                </SelectItem>

                {filter.options.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          );
        }

        return (
          <Input
            key={index}
            value={filter.value}
            placeholder={filter.placeholder}
            onChange={(e) =>
              filter.onChange(e.target.value)
            }
            className={filter.width ?? "md:w-72"}
          />
        );
      })}
    </div>
  );
}