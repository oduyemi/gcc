"use client";
import { CounsellingForm } from "@/components/steps/forms/Counselling";
import { NextStepPage } from "@/components/steps/Pageprops";
import { MessageCircleHeart } from "lucide-react";


export default function CounsellingPage() {
  return (
    <NextStepPage
      title="Connect With Counselling"
      subtitle="You don't have to carry it alone."
      badge="Care Team"
      icon={MessageCircleHeart}
      description="
      Life can be challenging, and sometimes we all need
      someone to talk to. Our counselling and care team is
      available to listen, encourage, pray, and provide
      biblical guidance in a safe and supportive environment.
      "
      highlights={[
        {
          title: "Confidential Support",
          description:
            "Share your concerns in a caring and respectful environment.",
        },
        {
          title: "Biblical Guidance",
          description:
            "Receive faith-centered wisdom and encouragement.",
        },
        {
          title: "Prayer & Care",
          description:
            "Allow our team to stand with you in prayer.",
        },
        {
          title: "Take The Next Step",
          description:
            "Find hope, healing, and practical support for your journey.",
        },
      ]}
      scripture={{
        verse:
          "Cast all your anxiety on Him because He cares for you.",
        reference: "1 Peter 5:7",
      }}
      form={<CounsellingForm />}
    />
  );
}