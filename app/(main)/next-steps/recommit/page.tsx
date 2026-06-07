"use client";
import { RecommitForm } from "@/components/steps/forms/Recommit";
import { NextStepPage } from "@/components/steps/Pageprops";
import { Flame } from "lucide-react";


export default function RecommitPage() {
  return (
    <NextStepPage
      title="Recommit To Christ"
      subtitle="God's grace is still calling you home."
      badge="Grace"
      icon={Flame}
      description="
      No matter how far you've wandered, God's love remains constant.
      Recommitting your life to Christ is an opportunity to renew your
      relationship with Him and embrace His grace once again.
      "
      highlights={[
        {
          title: "Renew Your Faith",
          description:
            "Take a fresh step toward a deeper relationship with God.",
        },
        {
          title: "Receive Encouragement",
          description:
            "Our pastors and leaders are here to walk alongside you.",
        },
        {
          title: "Reconnect With Community",
          description:
            "Find support through church family and discipleship.",
        },
        {
          title: "Move Forward With Hope",
          description:
            "Experience God's forgiveness, restoration, and peace.",
        },
      ]}
      scripture={{
        verse:
          "Return to me, and I will return to you, says the Lord Almighty.",
        reference: "Malachi 3:7",
      }}
      form={<RecommitForm />}
    />
  );
}