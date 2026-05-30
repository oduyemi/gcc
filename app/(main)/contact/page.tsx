// import { ContactHero } from "@/components/contact/Hero";
import { OurPastors } from "@/components/about/ourPastors";
import { ContactFAQ } from "@/components/contact/FAQs";
import { ContactForm } from "@/components/contact/Form";
import { ContactMethods } from "@/components/contact/Methods";
import { PrayerRequest } from "@/components/contact/PrayerRequest";
import { JoinUsCTA } from "@/components/JoinUsCTA";



export default function Contact() {
  return (
    <main>
      {/* <ContactHero /> */}
      <ContactMethods />
      <ContactForm />
      <OurPastors />
      <PrayerRequest />
      <ContactFAQ />
      <JoinUsCTA />
    </main>
  );
}
