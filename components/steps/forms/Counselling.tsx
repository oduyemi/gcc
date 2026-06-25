"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";


export const CounsellingForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    support: "",
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
        "/api/counselling",
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
            "Failed to submit counselling request"
        );
      }
  
      setSuccess(
        "Your counselling request has been received. A member of our team will contact you soon."
      );
  
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        support: "",
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

        <Input name="fullname" value={formData.fullname} onChange={handleChange} placeholder="John Doe" required />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Email Address
        </label>

        <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="johndoe@example.com" required />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Phone Number
        </label>

        <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" required />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          How Can We Help?
        </label>

        <Textarea
          name="support"
          value={formData.support}
          onChange={handleChange}
          rows={6}
          placeholder="Share as much or as little as you're comfortable sharing."
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
      <Button type="submit" disabled={loading} className="w-full">
        {loading
          ? "Submitting..."
          : "Request Support"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}