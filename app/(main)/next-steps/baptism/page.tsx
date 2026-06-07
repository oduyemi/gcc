"use client";
import { BaptismForm } from "@/components/steps/forms/Baptism";
import { NextStepPage } from "@/components/steps/Pageprops";
import { Waves } from "lucide-react";


export default function BaptismPage() {
  return (
    <NextStepPage
      title="Get Baptized"
      subtitle="Take the next public step in your faith."
      badge="Faith Step"
      icon={Waves}
      description="
      Baptism is a powerful declaration of your faith in Jesus Christ.
      It symbolizes leaving your old life behind and embracing the new
      life God has given you through Christ. We'd be honored to walk
      with you through this important milestone.
      "
      highlights={[
        {
          title: "Express Your Faith Publicly",
          description:
            "Share your commitment to Jesus with family, friends, and church community.",
        },
        {
          title: "Understand The Meaning",
          description:
            "Learn the biblical significance and purpose of water baptism.",
        },
        {
          title: "Prepare For Baptism Day",
          description:
            "Receive guidance on what to expect and how to prepare.",
        },
        {
          title: "Celebrate Your New Life",
          description:
            "Mark a significant moment in your spiritual journey.",
        },
      ]}
      scripture={{
        verse:
          "Repent and be baptized, every one of you, in the name of Jesus Christ.",
        reference: "Acts 2:38",
      }}
      form={<BaptismForm />}
    />
  );
}
