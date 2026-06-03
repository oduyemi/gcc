import { WomenMinistryActivities } from "@/components/ministries/women/Activities";
import { JoinWomenMinistryCTA } from "@/components/ministries/women/CTA";
import { WomenGallery } from "@/components/ministries/women/Gallery";
import { WomenMinistryHero } from "@/components/ministries/women/Hero";
import { WomenMinistryOverview } from "@/components/ministries/women/Overview";


export default function Men() {
  return (
    <main>
        <WomenMinistryHero />
        <WomenMinistryOverview />
        <WomenMinistryActivities />
        <WomenGallery />
        <JoinWomenMinistryCTA />
    </main>
  );
}
