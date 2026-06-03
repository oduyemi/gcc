import { JoinMenMinistryCTA } from "@/components/ministries/men/CTA";
import { MenMinistryHero } from "@/components/ministries/men/Hero";
import { MenInAction } from "@/components/ministries/men/MenInAction";
import { MenMinistryOverview } from "@/components/ministries/men/Overview";


export default function Men() {
  return (
    <main>
        <MenMinistryHero />
        <MenMinistryOverview />
        <MenInAction />
        <JoinMenMinistryCTA />
        {/* <div id="ministries">
            <MinistriesGrid />
        </div>
        <GetInvolvedCTA />
        <MinistryFAQ /> */}
    </main>
  );
}
