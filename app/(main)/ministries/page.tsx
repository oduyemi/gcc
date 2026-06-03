
import { MinistryFAQ } from "@/components/ministries/FAQs";
import { GetInvolvedCTA } from "@/components/ministries/GetInvolved";
import { MinistriesGrid } from "@/components/ministries/Grid";
import { MinistriesHero } from "@/components/ministries/Hero";


export default function Ministry() {
  return (
    <main>
        <MinistriesHero />
        <div id="ministries">
            <MinistriesGrid />
        </div>
        <GetInvolvedCTA />
        <MinistryFAQ />
    </main>
  );
}
