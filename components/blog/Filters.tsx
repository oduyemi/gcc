"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";


interface Props {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function BlogFilters({
  searchTerm,
  onSearchChange,
}: Props) {
  return (
    <div className="glass rounded-3xl p-5">
      <div className="relative">
        <Search
          size={16}
          className="absolute left-3 top-3 text-muted-foreground"
        />

        <Input
          value={searchTerm}
          onChange={(e) =>
            onSearchChange(e.target.value)
          }
          placeholder="Search articles..."
          className="pl-10"
        />
      </div>
    </div>
  );
}