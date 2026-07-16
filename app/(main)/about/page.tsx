
import { AboutHero } from "@/components/about/Hero";
import { OurPastors } from "@/components/about/ourPastors";
import { OurStory } from "@/components/about/OurStory";
import { SafeguardingPolicy } from "@/components/about/SafeGuardingPolicy";
import { ScriptureCenterpiece } from "@/components/about/ScripturePiece";
import { WhatWeBelieve } from "@/components/about/WhatWeBelieve";
import { JoinUsCTA } from "@/components/JoinUsCTA";


export default function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <ScriptureCenterpiece />
      <WhatWeBelieve/>
      <OurPastors />
      <SafeguardingPolicy />
      <JoinUsCTA />
    </>
  );
}
