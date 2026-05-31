import { EventsCTA } from "@/components/meeting/CTA";
import { UpcomingEventsGrid } from "@/components/meeting/Grid";
import { EventsHero } from "@/components/meeting/Hero";
import { NextEventSpotlight } from "@/components/meeting/Spotlight";
import { WeeklyMeetings } from "@/components/meeting/WeeklyMeetings";






export default function ALlEvents() {
  return (
    <main>
      <EventsHero />
      <NextEventSpotlight />
      <WeeklyMeetings />
      <UpcomingEventsGrid />
      <EventsCTA />
    </main>
  );
}
