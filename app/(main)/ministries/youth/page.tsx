import { YouthMinistryActivities } from "@/components/ministries/youth/Activities";
import { JoinYouthMinistryCTA } from "@/components/ministries/youth/CTA";
import { YouthMinistryGallery } from "@/components/ministries/youth/Gallery";
import { YouthMinistryHero } from "@/components/ministries/youth/Hero";
import { YouthMinistryOverview } from "@/components/ministries/youth/Overview";
import { YouthMinistryPrograms } from "@/components/ministries/youth/Programs";


export default function Youths() {
  return (
    <main>
        <YouthMinistryHero />
        <YouthMinistryOverview />
        <YouthMinistryPrograms />
        <YouthMinistryActivities />
        <YouthMinistryGallery />
        <JoinYouthMinistryCTA />
    </main>
  );
}
