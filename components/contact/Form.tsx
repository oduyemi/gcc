"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { HeartHandshake, Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    topic: "general",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(
          result.message || "Failed to submit form"
        );
      }
  
      setSuccess(
        "Your message has been sent successfully. We will get back to you soon."
      );
  
      setFormData({
        fullname: "",
        email: "",
        topic: "general",
        subject: "",
        message: "",
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
    <section
      id="contact-form"
      className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12"
    >
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute right-[-10%] bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className="
            glass
            overflow-hidden
            rounded-[3rem]
          "
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left Side */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="
                relative
                overflow-hidden
                bg-primary
                p-10
                text-white
                md:p-14
              "
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white blur-3xl" />
              </div>

              <div className="relative z-10">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white/10
                    px-4
                    py-2
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.2em]
                  "
                >
                  <MessageSquare className="h-4 w-4" />
                  Send A Message
                </div>

                <h2
                  className="
                    mt-6
                    text-4xl
                    font-black
                    tracking-[-0.05em]
                    md:text-5xl
                  "
                >
                  We'd Love To
                  Hear From You
                </h2>

                <p className="mt-6 max-w-md leading-8 text-white/85">
                  Whether you have a question, need prayer,
                  want to learn more about our ministries,
                  or are planning your first visit,
                  our team is ready to help.
                </p>

                <div className="mt-12 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                      <Mail className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-bold">
                        Email Us
                      </p>

                      <p className="text-sm text-white/80">
                        info@globalcrossfirechurch.org
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                      <HeartHandshake className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-bold">
                        Prayer Requests
                      </p>

                      <p className="text-sm text-white/80">
                        Every request is handled with care and
                        confidentiality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Full Name
                  </label>

                  <Input
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="
                      h-14
                      rounded-2xl
                      border-primary/10
                      bg-white/60
                      backdrop-blur-md
                      focus-visible:ring-primary
                    "
                    required
                  />
                </div>

                {/* Email */}

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Email Address
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
                      backdrop-blur-md
                      focus-visible:ring-primary
                    "
                    required
                  />
                </div>

                {/* Subject Type */}

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    How Can We Help?
                  </label>

                  <select
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-primary/10
                      bg-white/60
                      px-4
                      backdrop-blur-md
                      outline-none
                      focus:ring-2
                      focus:ring-primary
                    "
                  >
                    <option value="general">General Enquiry</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="first time">First Time Visitor</option>
                    <option value="counselling">Counselling</option>
                    <option value="information">Ministry Information</option>
                  </select>
                </div>

                {/* Subject */}

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Subject
                  </label>

                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your message about?"
                    className="
                      h-14
                      rounded-2xl
                      border-primary/10
                      bg-white/60
                    "
                    required
                  />
                </div>

                {/* Message */}

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Message
                  </label>

                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={7}
                    placeholder="Write your message here..."
                    className="
                      rounded-2xl
                      border-primary/10
                      bg-white/60
                      backdrop-blur-md
                      resize-none
                    "
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
                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    bg-primary
                    text-white
                    font-bold
                    hover:opacity-90
                  "
                >
                  <Send className="mr-2 h-4 w-4" />
                    {loading ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  We typically respond within 24–48 hours.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};