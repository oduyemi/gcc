"use client";
import { MinistryForm } from "@/components/steps/forms/Ministry";
import { NextStepPage } from "@/components/steps/Pageprops";
import { Church } from "lucide-react";


export default function MinistryPage() {
  return (
    <NextStepPage
      title="Join A Ministry"
      subtitle="Find your place. Discover your purpose."
      badge="Ministries"
      icon={Church}
      description="
      Ministry is where community, growth, and purpose come together.
      Whether you're passionate about prayer, worship, mentoring, or
      serving others, there is a place for you to belong and make a
      difference at Global Crossfire Church UK.
      "
      highlights={[
        {
          title: "Find Your Ministry",
          description:
            "Discover ministries that align with your passions and gifts.",
        },
        {
          title: "Build Meaningful Relationships",
          description:
            "Connect with people who share similar interests and faith goals.",
        },
        {
          title: "Grow Spiritually",
          description:
            "Develop your walk with Christ through discipleship and service.",
        },
        {
          title: "Impact Lives",
          description:
            "Use your gifts to encourage, support, and reach others.",
        },
      ]}
      scripture={{
        verse:
          "There are different kinds of gifts, but the same Spirit distributes them.",
        reference: "1 Corinthians 12:4",
      }}
      form={<MinistryForm />}
    />
  );
}