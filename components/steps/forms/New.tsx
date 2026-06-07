"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";



export const NewHereForm = () => {
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
          Tell Us About Yourself
        </label>

        <Textarea
          rows={5}
          placeholder="How did you hear about GCC?"
        />
      </div>

      <Button className="w-full">
        Connect With GCC
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}