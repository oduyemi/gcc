"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


export const CounsellingForm = () => {
  return (
    <form className="space-y-5">
      <div>
        <h3 className="mb-2 text-2xl font-black">
          Request Counselling
        </h3>

        <p className="text-muted-foreground">
          Everything you share will be handled with care and discretion.
        </p>
      </div>

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
          Phone Number
        </label>

        <Input />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          How Can We Help?
        </label>

        <Textarea
          rows={6}
          placeholder="Share as much or as little as you're comfortable sharing."
        />
      </div>

      <Button className="w-full">
        Request Support

        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}