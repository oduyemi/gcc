import { FeaturedEvents } from "@/components/home/FeaturedEvents";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { LatestSermon } from "@/components/home/LatestSermon";
import { Steps } from "@/components/home/Steps";
import { JoinUsCTA } from "@/components/JoinUsCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Steps />
      <LatestSermon />
      <FeaturedEvents />
      <JoinUsCTA />
    </main>
  );
}
