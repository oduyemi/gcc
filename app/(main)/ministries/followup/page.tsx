
import { MinistryCommitment } from "@/components/ministries/followup/Commitment";
import { FollowUpCTA } from "@/components/ministries/followup/CTA";
import { FindingYourPlace } from "@/components/ministries/followup/FindingPlace";
import { FollowUpHero } from "@/components/ministries/followup/Hero";
import { Intro } from "@/components/ministries/followup/Intro";
import { FollowUpJourney } from "@/components/ministries/followup/Journey";
import { VisionImpartation } from "@/components/ministries/followup/Vision";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Follow-Up Ministry | Global Crossfire Church UK",
  description:
    "Discover how Global Crossfire Church UK welcomes guests, builds meaningful relationships and helps people grow, belong and become established in the church family.",
};

export default function Page() {
  return (
    <>
        <FollowUpHero />
        <Intro />
        <FollowUpJourney />
        <VisionImpartation />
        <FindingYourPlace />
        <MinistryCommitment />
        <FollowUpCTA />
    </>
  )
}
