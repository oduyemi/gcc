"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What should I wear?",
    answer:
      "Come exactly as you are. Whether you prefer formal attire or casual clothing, you'll be warmly welcomed. We care more about people than dress codes.",
  },
  {
    question: "Do I need to register before attending?",
    answer:
      "No registration is required. Simply join us at any of our services and our welcome team will be happy to assist you.",
  },
  {
    question: "How long does a service usually last?",
    answer:
      "Most Sunday services last approximately two hours and include worship, prayer, ministry, and biblical teaching.",
  },
  {
    question: "Is there a children's ministry?",
    answer:
      "Yes. We provide a safe, engaging, and faith-filled environment where children can learn about God and build friendships.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes. Parking is available near the church venue. If you need assistance finding parking, our welcome team will gladly help.",
  },
  {
    question: "Can I speak with a pastor?",
    answer:
      "Absolutely. If you would like pastoral guidance, prayer, counselling, or simply someone to talk with, we would be honoured to connect you with a pastor.",
  },
];

export const ContactFAQ = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* Decorative Background */}

      <div className="absolute inset-0">
        <div className="absolute left-[-5%] top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute right-[-5%] bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-primary/10
                bg-primary/5
                px-4
                py-2
                text-[11px]
                font-black
                tracking-[0.22em]
                text-primary
                uppercase
              "
            >
              <HelpCircle className="h-4 w-4" />
              Frequently Asked Questions
            </div>

            <h2
              className="
                mt-6
                text-4xl
                font-black
                tracking-[-0.05em]
                md:text-6xl
              "
            >
              Questions?
              <span className="block text-primary">
                We've Got Answers.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              We know visiting a church for the first time can
              come with questions. Here are answers to some of
              the things people ask us most often.
            </p>

            {/* Hospitality Card */}

            <div
              className="
                glass
                glow-gold
                mt-10
                rounded-[2rem]
                p-8
              "
            >
              <p
                className="
                  text-lg
                  font-semibold
                  leading-8
                "
              >
                Our goal is simple:
              </p>

              <p
                className="
                  mt-3
                  text-muted-foreground
                  leading-8
                "
              >
                To help every person feel welcomed, valued,
                and at home from the moment they arrive.
              </p>
            </div>
          </motion.div>

          {/* FAQ Accordion */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="
                glass
                rounded-[3rem]
                p-4
                md:p-6
              "
            >
              <Accordion
                type="single"
                collapsible
                className="space-y-4"
              >
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="
                      overflow-hidden
                      rounded-[1.75rem]
                      border
                      border-primary/10
                      bg-white/50
                      px-6
                      backdrop-blur-md
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
                        text-base
                        leading-8
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
      </div>
    </section>
  );
};