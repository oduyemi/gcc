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


export const NewHereForm = () => {
  
  return (
    <form className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-semibold">
          Full Name
        </label>
        <Input required placeholder="John Doe" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Email Address
        </label>
        <Input type="email" required placeholder="johndoe@example.com" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Phone Number
        </label>
        <Input placeholder="Your phone number" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Tell Us About Yourself
        </label>

        <Textarea
          required
          rows={5}
          placeholder="How did you hear about GCC?"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Interested In
        </label>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>

          <SelectContent className="px-5">
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

      <Button className="w-full mt-32">
        Connect With GCC
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}