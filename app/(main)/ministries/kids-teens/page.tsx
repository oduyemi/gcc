import { AgeGroups } from "@/components/ministries/kidsteen/AgeGroups";
import { JoinKidsTeensCTA } from "@/components/ministries/kidsteen/CTA";
import { KidsTeensHero } from "@/components/ministries/kidsteen/Hero";
import { KidsTeensOverview } from "@/components/ministries/kidsteen/Overview";
import { ParentFAQs } from "@/components/ministries/kidsteen/ParentsFAQs";
import { KidsTeensPrograms } from "@/components/ministries/kidsteen/Programs";


export default function Teens() {
  return (
    <main>
        <KidsTeensHero />
        <KidsTeensOverview />
        <AgeGroups />
        <KidsTeensPrograms />
        <ParentFAQs />
        <JoinKidsTeensCTA />        
    </main>
  );
}
