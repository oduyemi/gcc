"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";


export const BaptismForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    hasAcceptedJesus: true,
    testimony: "",
    reason: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
  
    setFormData(prev => ({
      ...prev,
      [name]: value,
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
      const response = await fetch("/api/baptism", {
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
            "Failed to submit baptism request"
        );
      }
  
      setSuccess(
        "Your baptism registration has been received. Our team will contact you shortly."
      );
  
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        hasAcceptedJesus: true,
        testimony: "",
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
          Have You Accepted Jesus Christ As Your Lord & Savior?
        </label>

        <select
          name="hasAcceptedJesus"
          value={
            formData.hasAcceptedJesus
              ? "yes"
              : "no"
          }
          onChange={e =>
            setFormData(prev => ({
              ...prev,
              hasAcceptedJesus:
                e.target.value === "yes",
            }))
          }
          className="
            flex h-11 w-full rounded-xl
            border border-border
            bg-background px-3 text-sm
          "
        >
          <option value="yes">
            Yes
          </option>

          <option value="no">
            No
          </option>

          <option value="no">
            I Would Like To Learn More
          </option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Share Your Testimony (Optional)
        </label>

        <Textarea
          name="testimony"
          value={formData.testimony}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us a little about your faith journey..."
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Tell Us About Your Decision
        </label>

        <Textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us why you want to get baptized"
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
          : "Register For Baptism"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}