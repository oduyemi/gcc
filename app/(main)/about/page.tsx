
import { AboutHero } from "@/components/about/Hero";
import { OurPastors } from "@/components/about/ourPastors";
import { OurStory } from "@/components/about/OurStory";
import { ScriptureCenterpiece } from "@/components/about/ScripturePiece";
import { JoinUsCTA } from "@/components/JoinUsCTA";


export default function About() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <ScriptureCenterpiece />
      <OurPastors />
      <JoinUsCTA />
    </main>
  );
}
