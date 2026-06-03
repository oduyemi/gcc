"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HelpCircle,
  Phone,
  Mail,
  ArrowRight,
  Clock3,
  MapPin,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What should I wear?",
    answer:
      "Come as you are. Whether you prefer formal or casual attire, you are welcome here. We simply encourage everyone to dress in a way that is respectful and appropriate for a place of worship. Our focus is on encountering God, growing in faith, and building community—not on appearances.",
  },
  {
    question: "How long does the service last?",
    answer:
      "Our Sunday worship experience usually lasts around two hours and includes worship, prayer, teaching, ministry, and fellowship.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "We recommend arriving 10–15 minutes before the service begins so you have time to park, meet our welcome team, and get settled.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes. Parking is available near the church venue and our team will gladly help direct you when you arrive.",
  },
  {
    question: "Do you have children's ministry?",
    answer:
      "Yes. We provide a safe and welcoming environment where children can learn about Jesus in an engaging and age-appropriate setting.",
  },
  {
    question: "Will I be asked to do anything?",
    answer:
      "No. As our guest, you're free to participate as much or as little as you're comfortable with. We simply want you to feel welcome.",
  },
];

export const VisitFAQs = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-[28rem] w-[28rem] rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-5%] h-[30rem] w-[30rem] rounded-full bg-accent/5 blur-3xl" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(30,41,59,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.02)_1px,transparent_1px)]
            [background-size:120px_120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-primary/10
              bg-primary/5
              px-5 py-2
            "
          >
            <HelpCircle className="h-4 w-4 text-primary" />

            <span
              className="
                text-[11px]
                font-black
                uppercase
                tracking-[0.25em]
                text-primary
              "
            >
              Frequently Asked Questions
            </span>
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.06em]
              text-foreground
              md:text-6xl
            "
          >
            Everything You Need
            <br />
            To Know Before
            <br />
            Your First Visit
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            We want your first experience at Global Crossfire Church UK to be
            simple, comfortable, and life-giving.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="
                    overflow-hidden
                    rounded-[1.75rem]
                    border
                    border-primary/10
                    bg-white
                    px-6
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-primary/20
                    hover:shadow-lg
                  "
                >
                  <AccordionTrigger
                    className="
                      py-6
                      text-left
                      text-lg
                      font-black
                      hover:no-underline
                    "
                  >
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent
                    className="
                      pb-6
                      pr-6
                      text-[15px]
                      leading-8
                      text-muted-foreground
                    "
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="
                sticky top-28
                overflow-hidden
                rounded-[2.5rem]
                border border-primary/10
                bg-gradient-to-br
                from-white
                via-white
                to-primary/[0.04]
                p-8
                shadow-xl
              "
            >
              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative">
                {/* Badge */}
                <div
                  className="
                    inline-flex items-center
                    rounded-full
                    bg-primary/10
                    px-4 py-2
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.22em]
                    text-primary
                  "
                >
                  Visitor Support
                </div>

                {/* Heading */}
                <h3
                  className="
                    mt-6
                    text-4xl
                    font-black
                    leading-tight
                    tracking-[-0.05em]
                  "
                >
                  Still Have
                  <br />
                  Questions?
                </h3>

                <p className="mt-5 leading-8 text-muted-foreground">
                  We'd love to help you feel comfortable before your first
                  visit. Reach out to our welcome team anytime.
                </p>

                {/* Welcome Team */}
                <div
                  className="
                    mt-8
                    flex items-center justify-between
                    rounded-[1.75rem]
                    border border-primary/10
                    bg-white/80
                    p-5
                    backdrop-blur-xl
                  "
                >
                  <div>
                    <p className="font-black text-foreground">
                      Welcome Team
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Ready to assist you
                    </p>
                  </div>

                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="
                          h-10 w-10
                          rounded-full
                          border-2 border-white
                          bg-primary/15
                        "
                      />
                    ))}
                  </div>
                </div>

                {/* Phone */}
                <div
                  className="
                    mt-6
                    rounded-[1.75rem]
                    border border-primary/10
                    bg-primary/[0.03]
                    p-5
                  "
                >
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary" />

                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                        Call Us
                      </p>

                      <p className="mt-1 font-semibold">
                        01843 265001
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div
                  className="
                    mt-4
                    rounded-[1.75rem]
                    border border-primary/10
                    bg-primary/[0.03]
                    p-5
                  "
                >
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-primary" />

                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                        Email Us
                      </p>

                      <p className="mt-1 break-all font-semibold">
                        info@globalcrossfirechurch.org
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Card */}
                <div
                  className="
                    mt-4
                    rounded-[1.75rem]
                    border border-primary/10
                    bg-gradient-to-r
                    from-primary/5
                    to-accent/5
                    p-5
                  "
                >
                  <div className="flex items-start gap-4">
                    <Clock3 className="mt-1 h-5 w-5 text-primary" />

                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                        Sunday Worship
                      </p>

                      <p className="mt-2 text-2xl font-black">
                        10:30 AM
                      </p>

                      <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        Randolph House, Zion Place
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                {/* <Button
                  asChild
                  className="
                    mt-8
                    h-14
                    w-full
                    rounded-2xl
                    bg-primary
                    font-bold
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  <Link href="/visit">
                    Plan Your Visit

                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};