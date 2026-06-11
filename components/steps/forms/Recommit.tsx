"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


export const RecommitForm = () => {
  return (
    <form className="space-y-5">
      <div>
        <h3 className="mb-2 text-2xl font-black">
          I'm Returning To God
        </h3>

        <p className="text-muted-foreground">
          We'd be honored to pray with you and support your journey.
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Full Name
        </label>

        <Input placeholder="Your full name" />
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
          How Can We Support You?
        </label>

        <Textarea
          rows={5}
          placeholder="Share as much or as little as you're comfortable with..."
        />
      </div>

      <Button className="w-full">
        Recommit My Life

        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}