"use client";
import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";

export const ServeForm = () => {
  const [selectOpen, setSelectOpen] = useState(false);

  return (
    <form className="space-y-5">
      {/* Blur everything except the select when open */}
      <div
        className={`transition-all duration-200 ${
          selectOpen ? "blur-[2px] opacity-40 pointer-events-none" : ""
        }`}
      >
        <div>
          <label className="mt-4 mb-3 pb-2 block text-sm font-semibold">
            Full Name
          </label>

          <Input placeholder="Your full name" />
        </div>

        <div className="mt-5">
          <label className="mb-3 pb-2 block text-sm font-semibold">
            Email Address
          </label>

          <Input type="email" placeholder="johndoe@example.com" />
        </div>
      </div>

      {/* Keep select sharp and interactive */}
      <div className="relative z-50">
        <label className="mb-2 block text-sm font-semibold">
          Area Of Interest
        </label>

        <Select open={selectOpen} onOpenChange={setSelectOpen}>
          <SelectTrigger>
            <SelectValue placeholder="Choose a ministry" />
          </SelectTrigger>

          <SelectContent className="px-10">
            <SelectItem value="welcome">Welcome Team</SelectItem>
            <SelectItem value="children">Children's Ministry</SelectItem>
            <SelectItem value="prayer">Gate Keepers</SelectItem>
            <SelectItem value="hospitality">Hospitality Team</SelectItem>
            <SelectItem value="media">Media Team</SelectItem>
            <SelectItem value="outreach">Outreach Ministry</SelectItem>
            <SelectItem value="protocol">Protocol Team</SelectItem>
            <SelectItem value="sanctuary">Sanctuary Keepers</SelectItem>
            <SelectItem value="social">Social Media Team</SelectItem>
            <SelectItem value="technical">Technical Team</SelectItem>
            <SelectItem value="ushers">Ushers</SelectItem>
            <SelectItem value="worship">Worship Team</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div
        className={`transition-all duration-200 ${
          selectOpen ? "blur-[2px] opacity-40 pointer-events-none" : ""
        }`}
      >
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Tell Us About Yourself
          </label>

          <Textarea
            rows={5}
            placeholder="Share your interests, experience, or what interests you about serving in this ministry..."
          />
        </div>

        <Button className="w-full mt-5">
          Start Serving
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};