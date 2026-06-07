"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const MinistryForm = () => {
  return (
    <form className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-semibold">
          Full Name
        </label>

        <Input placeholder="John Doe" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Email Address
        </label>

        <Input type="email" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Phone Number
        </label>

        <Input />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Ministry Interest
        </label>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a ministry" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="mens">
              Men's Ministry
            </SelectItem>

            <SelectItem value="womens">
              Women's Ministry
            </SelectItem>

            <SelectItem value="youth">
              Youth Ministry
            </SelectItem>

            <SelectItem value="kids">
              Kids & Teens Church
            </SelectItem>

            <SelectItem value="prayer">
              Prayer & Caring Ministry
            </SelectItem>

            <SelectItem value="music">
              Music & Technical Ministry
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Tell Us About Yourself
        </label>

        <Textarea
          rows={5}
          placeholder="Share your interests, experience, or what draws you to this ministry..."
        />
      </div>

      <Button className="w-full">
        Join A Ministry

        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}