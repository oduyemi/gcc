"use client";
import { CommunityForm } from "@/components/steps/forms/Community";
import { NextStepPage } from "@/components/steps/Pageprops";
import { Users2 } from "lucide-react";

export default function CommunityPage() {
  return (
    <NextStepPage
      title="Get To Know People"
      subtitle="Faith grows best in community."
      badge="Community"
      icon={Users2}
      description="
      God never intended us to walk alone.
      Build meaningful friendships, find encouragement,
      and grow spiritually alongside others.
      "
      highlights={[
        {
          title: "Join A Group",
          description:
            "Become part of a community where people know and support you.",
        },
        {
          title: "Build Friendships",
          description:
            "Meet people who share your faith journey.",
        },
        {
          title: "Grow Spiritually",
          description:
            "Study God's Word and pray together.",
        },
        {
          title: "Belong Before You Believe",
          description:
            "Everyone is welcome regardless of where they are in life.",
        },
      ]}
      scripture={{
        verse:
          "And let us consider how we may spur one another on toward love and good deeds.",
        reference: "Hebrews 10:24",
      }}
      form={<CommunityForm />}
    />
  );
}