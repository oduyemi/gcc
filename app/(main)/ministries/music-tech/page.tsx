import { MinistryAreas } from "@/components/ministries/technical/Areas";
import { MusicTechnicalGallery } from "@/components/ministries/technical/Gallery";
import { MusicTechnicalHero } from "@/components/ministries/technical/Hero";
import { MusicTechnicalOverview } from "@/components/ministries/technical/Overview";
import { WorshipAndProduction } from "@/components/ministries/technical/Production";
import { ServingOpportunities } from "@/components/ministries/technical/Serving";



export default function Tech() {
  return (
    <>
        <MusicTechnicalHero />
        <MusicTechnicalOverview />
        <WorshipAndProduction />
        <MinistryAreas />
        <MusicTechnicalGallery />
        <ServingOpportunities />
    </>
  );
}
