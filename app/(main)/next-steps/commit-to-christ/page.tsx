"use client";
import { CommitToChristForm } from "@/components/steps/forms/Commit";
import { NextStepPage } from "@/components/steps/Pageprops";
import { Flame } from "lucide-react";



export default function CommitToChristPage() {
  return (
    <NextStepPage
      title="Commit To Christ"
      subtitle="Begin a new life with Jesus."
      badge="Salvation"
      icon={Flame}
      description="
      Choosing to follow Jesus is the most important decision you will
      ever make. Through Christ, you can experience forgiveness,
      purpose, peace, and the promise of eternal life.
      Our team would love to help you begin this journey and take your
      next steps in faith.
      "
      highlights={[
        {
          title: "Start A New Life",
          description:
            "Receive God's gift of grace and begin your walk with Christ.",
        },
        {
          title: "Connect With A Pastor",
          description:
            "Speak with someone who can guide and encourage you.",
        },
        {
          title: "Learn The Foundations Of Faith",
          description:
            "Discover what it means to follow Jesus daily.",
        },
        {
          title: "Take Your Next Steps",
          description:
            "Get connected through prayer, baptism, and community.",
        },
      ]}
      scripture={{
        verse:
          "If anyone is in Christ, the new creation has come: The old has gone, the new is here!",
        reference: "2 Corinthians 5:17",
      }}
      form={<CommitToChristForm />}
    />
  );
}