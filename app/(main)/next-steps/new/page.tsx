"use client";
import { NewHereForm } from "@/components/steps/forms/New";
import { NextStepPage } from "@/components/steps/Pageprops";
import { Sparkles } from "lucide-react";

export default function NewPage() {
  return (
    <NextStepPage
      title="New To GCC?"
      subtitle="We're excited to meet you."
      badge="Start Here"
      icon={Sparkles}
      description="
      Whether you're exploring faith, searching for a church home,
      or visiting for the very first time, we'd love to help you
      feel welcomed and connected at Global Crossfire Church UK.
      "
      highlights={[
        {
          title: "Introduce Yourself",
          description:
            "Tell us a little about yourself and your journey.",
        },
        {
          title: "Meet Our Team",
          description:
            "A member of our welcome team will personally reach out.",
        },
        {
          title: "Discover GCC",
          description:
            "Learn about our vision, ministries, and community life.",
        },
        {
          title: "Find Your Place",
          description:
            "Take your next step toward connection and spiritual growth.",
        },
      ]}
      scripture={{
        verse:
          "Therefore welcome one another as Christ has welcomed you.",
        reference: "Romans 15:7",
      }}
      form={<NewHereForm />}
    />
  );
}