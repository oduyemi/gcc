"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  Users,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const faqs = [
  {
    question: "How do I join a ministry?",
    answer:
      "Simply choose a ministry that interests you and contact the church team. We will guide you through the next steps and help you get connected.",
  },
  {
    question: "Do I need to be a church member first?",
    answer:
      "Some ministry roles may require membership, while others are open to anyone looking to serve and get involved.",
  },
  {
    question: "Can I serve in more than one ministry?",
    answer:
      "Yes. Many people serve in multiple areas, provided they can commit faithfully and maintain a healthy balance.",
  },
  {
    question: "Will I receive training?",
    answer:
      "Absolutely. Every ministry provides guidance, support and practical training to help you serve effectively.",
  },
  {
    question: "What if I'm new to church?",
    answer:
      "That's perfectly okay. Ministries are a great way to build relationships, grow spiritually and become part of the church family.",
  },
  {
    question: "How much time is required?",
    answer:
      "The commitment varies by ministry, but leaders will clearly explain expectations before you join.",
  },
];

export const MinistryFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden px-4 py-28 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[30rem] w-[30rem] rounded-full bg-primary/[0.05] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-[#AF3800]/[0.05] blur-3xl" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)]
            [background-size:120px_120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-primary/15
              bg-white/70
              px-5 py-2.5
              backdrop-blur-xl
              text-[11px]
              font-black
              uppercase
              tracking-[0.28em]
              text-primary
            "
          >
            <HelpCircle className="h-3.5 w-3.5" />
            Frequently Asked Questions
          </div>

          <h2
            className="
              mt-7
              text-4xl
              font-black
              tracking-[-0.06em]
              text-foreground
              md:text-6xl
            "
          >
            Questions About
            <span className="block text-primary">
              Joining A Ministry?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Everything you need to know about serving, growing,
            connecting and becoming part of a thriving ministry team.
          </p>
        </motion.div>

        {/* FAQ Container */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div
            className="
              relative overflow-hidden
              rounded-[2.75rem]
              border border-white/40
              bg-white/[0.75]
              shadow-[0_20px_80px_rgba(216,164,91,0.12)]
              backdrop-blur-3xl
            "
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.8),transparent_35%)]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(216,164,91,0.08),transparent_35%)]" />

            <div className="relative z-10">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className={`
                      relative
                      transition-all duration-500
                      ${
                        index !== faqs.length - 1
                          ? "border-b border-primary/10"
                          : ""
                      }
                    `}
                  >
                    {/* Active Accent */}

                    {isOpen && (
                      <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
                    )}

                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? -1 : index)
                      }
                      className="
                        group
                        flex w-full items-center justify-between
                        gap-6
                        px-6 py-7
                        text-left
                        transition-all duration-500
                        hover:bg-primary/[0.025]
                        md:px-8
                      "
                    >
                      <div className="flex items-center gap-5">
                        {/* Number */}

                        <div
                          className="
                            hidden text-lg font-black
                            text-primary/40
                            md:block
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        {/* Icon */}

                        <div
                          className={`
                            flex h-14 w-14 items-center justify-center
                            rounded-[1.2rem]
                            transition-all duration-500
                            ${
                              isOpen
                                ? "bg-primary text-white shadow-lg"
                                : "bg-primary/10 text-primary"
                            }
                          `}
                        >
                          {index % 2 === 0 ? (
                            <Users className="h-5 w-5" />
                          ) : (
                            <HeartHandshake className="h-5 w-5" />
                          )}
                        </div>

                        <div>
                          <h3
                            className={`
                              text-lg font-black
                              transition-colors duration-300
                              md:text-xl
                              ${
                                isOpen
                                  ? "text-primary"
                                  : "text-foreground"
                              }
                            `}
                          >
                            {faq.question}
                          </h3>
                        </div>
                      </div>

                      <ChevronDown
                        className={`
                          h-5 w-5 shrink-0
                          transition-all duration-500
                          ${
                            isOpen
                              ? "rotate-180 text-primary"
                              : "text-muted-foreground"
                          }
                        `}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.35,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-7 md:px-8">
                            <div
                              className="
                                ml-0 md:ml-[6.25rem]
                                rounded-[1.75rem]
                                border border-primary/10
                                bg-gradient-to-br
                                from-primary/[0.03]
                                to-white
                                p-6
                              "
                            >
                              <p className="leading-8 text-muted-foreground">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <div
            className="
              relative overflow-hidden
              rounded-[2rem]
              border border-primary/10
              bg-gradient-to-r
              from-primary/[0.04]
              via-white
              to-[#AF3800]/[0.04]
              p-8
              text-center
            "
          >
            <h3 className="text-2xl font-black">
              Still Have Questions?
            </h3>

            <p className="mt-3 text-muted-foreground">
              We'd love to help you discover where you belong and how
              you can get involved.
            </p>

            <Link
              href="/contact"
              className="
                mt-6 inline-flex items-center gap-2
                rounded-2xl
                bg-primary
                px-6 py-3
                font-bold
                text-white
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              Contact Our Team

              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};