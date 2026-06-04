"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ShieldCheck,
  Heart,
  Users,
  Baby,
} from "lucide-react";

const faqs = [
  {
    question: "What ages are welcome in Kids & Teens Church?",
    answer:
      "Our ministry serves children and teenagers from ages 3 to 17 through age-appropriate groups designed to help them grow in faith, friendships and confidence.",
  },
  {
    question: "Can my child attend if they are visiting for the first time?",
    answer:
      "Absolutely. We love welcoming new families. Our team will help your child feel comfortable, included and engaged from the moment they arrive.",
  },
  {
    question: "Are children supervised during services?",
    answer:
      "Yes. All activities are overseen by trusted ministry leaders and volunteers who are committed to creating a safe, caring and encouraging environment.",
  },
  {
    question: "What happens during a typical session?",
    answer:
      "Children and teenagers participate in worship, Bible teaching, interactive discussions, games, prayer and activities designed specifically for their age group.",
  },
  {
    question: "Can parents stay with younger children?",
    answer:
      "Parents are welcome to help younger children settle in if needed. Our team will gladly answer questions and help make the transition comfortable.",
  },
  {
    question: "How often do Kids & Teens gatherings take place?",
    answer:
      "Children and teenagers meet during our regular church gatherings and also participate in special events, holiday activities and ministry programs throughout the year.",
  },
];

export const ParentFAQs = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/[0.04] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#AF3800]/[0.04] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="
                inline-flex items-center
                rounded-full
                bg-primary/5
                px-4 py-2
                text-[11px]
                font-black
                uppercase
                tracking-[0.25em]
                text-primary
              "
            >
              Parent Information
            </div>

            <h2
              className="
                mt-6
                text-4xl
                font-black
                tracking-[-0.05em]
                md:text-5xl
              "
            >
              Questions
              <span className="block text-primary">
                Parents Often Ask
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We understand that parents want to know their children
              are learning, growing and being cared for in a safe
              environment. Here are answers to some of our most
              frequently asked questions.
            </p>

            {/* Trust Cards */}

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-white p-4 shadow-sm">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <span className="font-semibold">
                  Safe & Supportive Environment
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-white p-4 shadow-sm">
                <Heart className="h-6 w-6 text-primary" />
                <span className="font-semibold">
                  Caring Leaders & Volunteers
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-white p-4 shadow-sm">
                <Users className="h-6 w-6 text-primary" />
                <span className="font-semibold">
                  Age-Appropriate Groups
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-white p-4 shadow-sm">
                <Baby className="h-6 w-6 text-primary" />
                <span className="font-semibold">
                  Welcoming New Families
                </span>
              </div>
            </div>
          </motion.div>

          {/* FAQ */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="
                rounded-[2.5rem]
                border border-primary/10
                bg-white
                p-4 md:p-6
                shadow-xl
              "
            >
              <Accordion
                type="single"
                collapsible
                defaultValue="item-1"
                className="space-y-4"
              >
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.question}
                    value={`item-${index + 1}`}
                    className="
                      rounded-2xl
                      border border-primary/10
                      bg-muted/20
                      px-6
                    "
                  >
                    <AccordionTrigger
                      className="
                        py-5
                        text-left
                        text-base
                        font-bold
                        hover:no-underline
                      "
                    >
                      {faq.question}
                    </AccordionTrigger>

                    <AccordionContent
                      className="
                        pb-5
                        text-base
                        leading-7
                        text-muted-foreground
                      "
                    >
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </div>

        {/* Bottom Reassurance Banner */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div
            className="
              rounded-[2.5rem]
              border border-primary/10
              bg-gradient-to-br
              from-primary/[0.04]
              via-white
              to-[#AF3800]/[0.04]
              p-10 text-center
            "
          >
            <h3 className="text-3xl font-black md:text-4xl">
              We Partner With Parents
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
              Our goal is not simply to run children's programs, but to
              support families as they help the next generation know,
              love and follow Jesus.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};