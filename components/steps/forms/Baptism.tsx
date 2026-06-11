"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


export const BaptismForm = () => {
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
          Have You Accepted Jesus Christ As Your Lord & Savior?
        </label>

        <select
          className="
          flex h-11 w-full rounded-xl border border-border
          bg-background px-3 text-sm
        "
        >
          <option>Yes</option>
          <option>No</option>
          <option>I Would Like To Learn More</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Share Your Testimony (Optional)
        </label>

        <Textarea
          rows={5}
          placeholder="Tell us a little about your faith journey..."
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Tell Us About Your Decision
        </label>

        <Textarea
          rows={5}
          placeholder="Tell us why you want to get baptized"
        />
      </div>

      <Button className="w-full">
        Register For Baptism

        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}