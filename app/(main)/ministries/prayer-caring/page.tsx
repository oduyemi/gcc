import { PrayerCaringFAQs } from "@/components/ministries/prayer/CaringFAQ";
import { JoinPrayerCaringCTA } from "@/components/ministries/prayer/CTA";
import { PrayerCaringHero } from "@/components/ministries/prayer/Hero";
import { HowWeCare } from "@/components/ministries/prayer/HowWeCare";
import { PrayerCaringOverview } from "@/components/ministries/prayer/Overview";
import { PrayerRequestCTA } from "@/components/ministries/prayer/PrayerCTA";
import { PrayerServices } from "@/components/ministries/prayer/Services";


export default function PrayerCareTeam () {
  return (
    <main>
        <PrayerCaringHero />
        <PrayerCaringOverview />
        <PrayerServices />
        <PrayerRequestCTA />
        <HowWeCare />
        <PrayerCaringFAQs />
        <JoinPrayerCaringCTA />
        
            
    </main>
  );
}
