
import { OurPastors } from "@/components/about/ourPastors";
import { BeforeYouVisit } from "@/components/visit/BeforeYouVisit";
import { VisitFAQs } from "@/components/visit/FAQs";
import { VisitHero } from "@/components/visit/Hero";
import { VisitServiceDetails } from "@/components/visit/ServiceDetails";

export default function Visting() {
  return (
    <main>
      <VisitHero />
      <div id="service-details">
        <VisitServiceDetails />
      </div>
      <BeforeYouVisit />
      <OurPastors />
      <VisitFAQs />
    </main>
  );
}
