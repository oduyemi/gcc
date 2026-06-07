"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


export const CommunityForm = () => {
  return (
    <form className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-semibold">
          Full Name
        </label>
        <Input />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Email Address
        </label>
        <Input type="email" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Interested In
        </label>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="small-groups">
              Small Groups
            </SelectItem>

            <SelectItem value="young-adults">
              Young Adults
            </SelectItem>

            <SelectItem value="families">
              Families
            </SelectItem>

            <SelectItem value="mens">
              Men's Fellowship
            </SelectItem>

            <SelectItem value="womens">
              Women's Fellowship
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="w-full">
        Find Community
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}