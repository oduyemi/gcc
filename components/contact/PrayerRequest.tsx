"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Send,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const PrayerRequest = () => {
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
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* Decorative Background */}

      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-20 h-[30rem] w-[30rem] rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute right-[-10%] bottom-0 h-[32rem] w-[32rem] rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border border-primary/10
                bg-primary/5
                px-4 py-2
                text-[11px]
                font-black
                tracking-[0.22em]
                text-primary
                uppercase
              "
            >
              <Heart className="h-4 w-4" />
              Prayer Support
            </div>

            <h2
              className="
                mt-6
                text-4xl
                font-black
                tracking-[-0.05em]
                md:text-6xl
              "
            >
              You're Not
              <span className="block text-primary">
                Praying Alone
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              Whatever you're facing, we would be honoured
              to stand with you in prayer. Our prayer team
              regularly prays over every request submitted.
            </p>

            {/* Scripture Card */}

            <div
              className="
                glass
                glow-lavender
                mt-10
                rounded-[2rem]
                p-8
              "
            >
              <p
                className="
                  text-lg
                  leading-8
                  italic
                  text-foreground
                "
              >
                "Do not be anxious about anything, but in
                every situation, by prayer and petition,
                with thanksgiving, present your requests
                to God."
              </p>

              <p className="mt-4 font-bold text-primary">
                Philippians 4:6
              </p>
            </div>

            {/* Trust Points */}

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-5 w-5 text-primary" />

                <div>
                  <p className="font-semibold">
                    Confidential & Respectful
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Requests are handled with care and
                    discretion.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-5 w-5 text-primary" />

                <div>
                  <p className="font-semibold">
                    Dedicated Prayer Team
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Faith-filled believers committed to
                    interceding for others.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="
                glass
                overflow-hidden
                rounded-[3rem]
                p-8
                md:p-10
              "
            >
              <div className="mb-8">
                <h3 className="text-3xl font-black">
                  Submit A Prayer Request
                </h3>

                <p className="mt-3 text-muted-foreground">
                  Share as much or as little as you're
                  comfortable sharing.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Name
                  </label>

                  <Input
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="
                      h-14
                      rounded-2xl
                      border-primary/10
                      bg-white/60
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Email
                  </label>

                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="
                      h-14
                      rounded-2xl
                      border-primary/10
                      bg-white/60
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Phone Number
                  </label>

                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone/WhatsApp number"
                    className="
                      h-14
                      rounded-2xl
                      border-primary/10
                      bg-white/60
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Prayer Request
                  </label>

                  <Textarea
                    name="request"
                    value={formData.request}
                    onChange={handleChange}
                    rows={8}
                    placeholder="How can we pray for you?"
                    className="
                      resize-none
                      rounded-2xl
                      border-primary/10
                      bg-white/60
                    "
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
                  size="lg"
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    bg-primary
                    font-bold
                    text-white
                  "
                >
                  <Send className="mr-2 h-4 w-4" />
                    {loading
                      ? "Submitting..."
                      : "Submit Prayer Request"}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Your request will be prayed over by our
                  prayer ministry team.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};