import { CommunityPrograms } from "@/components/home/CommunityPrograms";
import { FeaturedMeetings } from "@/components/home/FeaturedEvents";
import { HomeLiveStreamCTA } from "@/components/home/GoLive";
import { Hero } from "@/components/home/hero/Hero";
import { Intro } from "@/components/home/Intro";
import { LatestSermon } from "@/components/home/LatestSermon";
import { Steps } from "@/components/home/Steps";
import { JoinUsCTA } from "@/components/JoinUsCTA";
import { useLiveStream } from "@/hook/useLivestream";



export default function Home() {

  return (
    <>
      <Hero />
      <Intro />
      <HomeLiveStreamCTA />
      <Steps />
      <CommunityPrograms />
      <LatestSermon />
      <FeaturedMeetings />
      <JoinUsCTA />
    </>
  );
}
