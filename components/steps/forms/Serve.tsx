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


export const ServeForm = () => {
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
          Area Of Interest
        </label>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Choose a ministry" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="welcome">
              Welcome Team
            </SelectItem>

            <SelectItem value="media">
              Media Team
            </SelectItem>

            <SelectItem value="worship">
              Worship Team
            </SelectItem>

            <SelectItem value="children">
              Children's Ministry
            </SelectItem>

            <SelectItem value="outreach">
              Outreach Ministry
            </SelectItem>

            <SelectItem value="prayer">
              Prayer Team
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="w-full">
        Start Serving
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}