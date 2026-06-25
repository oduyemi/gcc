"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SermonFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function SermonFilters({
  searchTerm,
  onSearchChange,
}: SermonFiltersProps) {
  return (
    <div className="glass rounded-3xl p-5">
      <div className="grid gap-4 lg:grid-cols-4">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />

          <Input
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search sermons..."
            className="pl-10"
          />
        </div>
      </div>
    </div>
  );
}