"use client";
import { ServeForm } from "@/components/steps/forms/Serve";
import { NextStepPage } from "@/components/steps/Pageprops";
import { HandHelping } from "lucide-react";


export default function ServePage() {
  return (
    <NextStepPage
      title="Start Serving"
      subtitle="Your gifts can make a difference."
      badge="Serve"
      icon={HandHelping}
      description="
      God has uniquely gifted every believer.
      Discover opportunities to serve, impact lives,
      and help advance the mission of Global Crossfire Church UK.
      "
      highlights={[
        {
          title: "Discover Your Gifts",
          description:
            "Find areas where your talents can be used effectively.",
        },
        {
          title: "Join A Team",
          description:
            "Become part of a ministry team that serves others.",
        },
        {
          title: "Receive Training",
          description:
            "We'll equip you with the tools and support needed to thrive.",
        },
        {
          title: "Make An Impact",
          description:
            "Use your gifts to help people encounter Christ.",
        },
      ]}
      scripture={{
        verse:
          "Each of you should use whatever gift you have received to serve others.",
        reference: "1 Peter 4:10",
      }}
      form={<ServeForm />}
    />
  );
}