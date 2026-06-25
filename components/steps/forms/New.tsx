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
import { useState } from "react";


export const NewHereForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    about: "",
    interest: "",
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
        "/api/new-to-church",
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
            "Failed to submit information"
        );
      }
  
      setSuccess(
        "Thank you for connecting with GCC. We will be in touch soon."
      );
  
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        about: "",
        interest: "",
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
        <Input name="fullname" value={formData.fullname} onChange={handleChange} required placeholder="John Doe" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Email Address
        </label>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="johndoe@example.com" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Phone Number
        </label>
        <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone number" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Tell Us About Yourself
        </label>

        <Textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          required
          rows={5}
          placeholder="How did you hear about GCC?"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Interested In
        </label>

        <Select
          value={formData.interest}
          onValueChange={value =>
            setFormData(prev => ({
              ...prev,
              interest: value,
            }))
          }        
        >
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>

          <SelectContent className="px-5">
            <SelectItem value="smallgroups">
              Small Groups
            </SelectItem>

            <SelectItem value="youngadults">
              Young Adults
            </SelectItem>

            <SelectItem value="families">
              Families
            </SelectItem>

            <SelectItem value="men">
              Men's Fellowship
            </SelectItem>

            <SelectItem value="women">
              Women's Fellowship
            </SelectItem>
          </SelectContent>
        </Select>
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
        className="w-full mt-32"
      >
        {loading
          ? "Submitting..."
          : "Connect With GCC"}
          <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}