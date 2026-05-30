
import { OurPastors } from "@/components/about/ourPastors";
import { BeforeYouVisit } from "@/components/visit/BeforeYouVisit";
import { VisitHero } from "@/components/visit/Hero";
import { VisitServiceDetails } from "@/components/visit/ServiceDetails";

export default function Home() {
  return (
    <main>
      <VisitHero />
      <div id="service-details">
        <VisitServiceDetails />
      </div>
      <BeforeYouVisit />
      <OurPastors />
    </main>
  );
}
