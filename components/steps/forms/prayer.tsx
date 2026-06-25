"use client";
import { Button } from "@/components/ui/button";
import {
  Input,
} from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";



export const PrayerForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    request: "",
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
    setSuccess("");
    setError("");
  
    try {
      const response = await fetch(
        "/api/prayer-request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(
          result.message ||
            "Failed to submit prayer request"
        );
      }
  
      setSuccess(
        "Your prayer request has been received. Our prayer team will be praying with you."
      );
  
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        request: "",
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
      <div>
        <label className="mb-2 block text-sm font-semibold">
          Full Name
        </label>

        <Input name="fullname" value={formData.fullname} onChange={handleChange} placeholder="John Doe" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Email Address
        </label>

        <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="johndoe@example.com" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Phone Number
        </label>

        <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone/WhatsApp number" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Prayer Request
        </label>

        <Textarea
          name="request"
          value={formData.request}
          onChange={handleChange}
          rows={6}
          placeholder="How can we pray for you?"
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
      <Button
        type="submit"
        disabled={loading}
        className="
        w-full
        rounded-xl
        bg-primary
        text-white
        hover:bg-primary/90
      "
      >
        {loading
          ? "Submitting..."
          : "Submit Request"}

        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}