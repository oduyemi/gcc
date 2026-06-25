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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    interest: "",
    about: "",
    reason: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
  
    setLoading(true);
    setError("");
    setSuccess("");
  
    try {
      const response = await fetch("/api/serve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(
          result.message ||
            "Failed to submit serve request"
        );
      }
  
      setSuccess(
        "Thank you for your willingness to serve. Our ministry team will contact you soon."
      );
  
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        interest: "",
        about: "",
        reason: "",
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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

          <Input name="fullname" value={formData.fullname} onChange={handleChange} placeholder="Your full name" required />
        </div>

        <div className="mt-5">
          <label className="mb-3 pb-2 block text-sm font-semibold">
            Email Address
          </label>

          <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="johndoe@example.com" required />
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-3 pb-2 block text-sm font-semibold">
          Phone Number
        </label>

        <Input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your phone number"
          required
        />
      </div>

      {/* Keep select sharp and interactive */}
      <div className="relative z-50">
        <label className="mb-2 block text-sm font-semibold">
          Area Of Interest
        </label>

        <Select 
          open={selectOpen} 
          onOpenChange={setSelectOpen}
          value={formData.interest}
          onValueChange={value =>
            setFormData(prev => ({
              ...prev,
              interest: value,
            }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Choose a ministry" />
          </SelectTrigger>

          <SelectContent className="px-10">
          <SelectItem value="welcometeam">
            Welcome Team
          </SelectItem>

          <SelectItem value="children">
            Children's Ministry
          </SelectItem>

          <SelectItem value="gatekeepers">
            Gate Keepers
          </SelectItem>

          <SelectItem value="hospitality">
            Hospitality Team
          </SelectItem>

          <SelectItem value="media">
            Media Team
          </SelectItem>

          <SelectItem value="outreach">
            Outreach Ministry
          </SelectItem>

          <SelectItem value="protocol">
            Protocol Team
          </SelectItem>

          <SelectItem value="sanctuary">
            Sanctuary Keepers
          </SelectItem>

          <SelectItem value="socialmedia">
            Social Media Team
          </SelectItem>

          <SelectItem value="technical">
            Technical Team
          </SelectItem>

          <SelectItem value="ushers">
            Ushers
          </SelectItem>

          <SelectItem value="worship">
            Worship Team
          </SelectItem>
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
            name="about"
            value={formData.about}
            onChange={handleChange}
            rows={5}
            placeholder="Share your interests, experience, or what interests you about serving in this ministry..."
            required
          />
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-sm font-semibold">
            Why Would You Like To Serve?
          </label>

          <Textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us what motivates you to serve."
            required
          />
        </div>

        {success && (
          <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-700">
            {success}
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        <Button type="submit" disabled={loading} className="w-full mt-5">
          {loading
            ? "Submitting..."
            : "Start Serving"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};