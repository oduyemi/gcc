"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


export const CommitToChristForm = () => {
  return (
    <form className="space-y-5">
      <div>
        <h3 className="mb-2 text-2xl font-black">
          I'm Ready To Follow Jesus
        </h3>

        <p className="text-muted-foreground">
          Let us know about your decision so we can support you.
        </p>
      </div>

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

        <Input type="email" placeholder="Your email address" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Phone Number
        </label>

        <Input placeholder="Your phone number" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Tell Us About Your Decision
        </label>

        <Textarea
          rows={5}
          placeholder="Share anything you'd like us to know..."
        />
      </div>

      <Button className="w-full">
        Begin My Journey

        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}