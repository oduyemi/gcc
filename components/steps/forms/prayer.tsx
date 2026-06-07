"use client";
import { Button } from "@/components/ui/button";
import {
  Input,
} from "@/components/ui/input";
import { ArrowRight } from "lucide-react";


import { Textarea } from "@/components/ui/textarea";

export function PrayerForm() {
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

        <Input type="email" placeholder="johndoe@example.com" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Phone Number
        </label>

        <Input placeholder="Your WhatsApp number" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Prayer Request
        </label>

        <Textarea
          rows={6}
          placeholder="How can we pray for you?"
        />
      </div>

      <Button
        className="
        w-full
        rounded-xl
        bg-primary
        text-white
        hover:bg-primary/90
      "
      >
        Submit Request

        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}