"use client";
import { PrayerForm } from "@/components/steps/forms/prayer";
import { NextStepPage } from "@/components/steps/Pageprops";
import { HeartHandshake } from "lucide-react";


export default function PrayerPage() {
  return (
    <NextStepPage
      title="Ask For Prayer"
      subtitle="You don't have to walk through life alone."
      badge="Prayer"
      icon={HeartHandshake}
      description="
      Whatever season you're in, our prayer team is ready
      to stand with you in faith and believe God with you.
      "
      highlights={[
        {
          title: "Submit Your Request",
          description:
            "Share your prayer need with confidence.",
        },
        {
          title: "Our Team Prays",
          description:
            "Dedicated prayer partners will pray over your request.",
        },
        {
          title: "Receive Encouragement",
          description:
            "We'll support and encourage you on your journey.",
        },
      ]}
      scripture={{
        verse:
          "The prayer of a righteous person is powerful and effective.",
        reference: "James 5:16",
      }}
      form={<PrayerForm />}
    />
  );
}