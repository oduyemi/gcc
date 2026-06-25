import { ConnectCTA } from "@/components/connect/CTA";
import { InstagramFeed } from "@/components/connect/Feed";
import { SocialHero } from "@/components/connect/Hero";


export default function SocialConnectPage() {
  return (
    <>
      <SocialHero />
      <InstagramFeed />
      <ConnectCTA />
    </>
  );
}