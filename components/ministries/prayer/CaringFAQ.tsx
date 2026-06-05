"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I submit a prayer request?",
    answer:
      "You can submit a prayer request through our website, contact the church office, or speak directly with a member of the Prayer & Caring Ministry.",
  },
  {
    question: "Will my prayer request remain confidential?",
    answer:
      "Yes. We treat prayer requests with care, discretion and respect. Sensitive information is only shared when necessary and with appropriate consent.",
  },
  {
    question: "Can someone pray with me personally?",
    answer:
      "Absolutely. Members of our ministry team are available to pray with individuals and families and provide spiritual encouragement.",
  },
  {
    question: "Do you provide hospital or home visits?",
    answer:
      "Yes. Subject to availability and arrangements, our ministry team can provide hospital visits, home visits and pastoral support.",
  },
  {
    question: "How can I join the Prayer & Caring Ministry?",
    answer:
      "If you have a heart for prayer, encouragement and caring for others, we'd love to hear from you. Speak with a ministry leader or contact the church office.",
  },
];

export const PrayerCaringFAQs = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="relative overflow-hidden bg-muted/20 px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/[0.04] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#AF3800]/[0.04] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
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
              bg-primary/5
              px-4 py-2
              text-[11px]
              font-black
              tracking-[0.25em]
              uppercase
              text-primary
            "
          >
            <HelpCircle className="h-3.5 w-3.5" />
            Frequently Asked Questions
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-[-0.05em]
              text-foreground
              md:text-5xl
            "
          >
            Questions & Answers
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Everything you need to know about our Prayer & Caring Ministry.
          </p>
        </motion.div>

        {/* FAQ List */}

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="
                  overflow-hidden
                  rounded-[1.75rem]
                  border border-primary/10
                  bg-white
                  shadow-sm
                "
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    px-6
                    py-6
                    text-left
                  "
                >
                  <h3 className="font-bold text-foreground md:text-lg">
                    {faq.question}
                  </h3>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-primary/10
                      text-primary
                      shrink-0
                    "
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <div className="px-6 pb-6">
                        <div className="h-px bg-primary/10 mb-5" />

                        <p className="leading-7 text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-10
            rounded-[2rem]
            border border-primary/10
            bg-white
            p-6
            text-center
            shadow-sm
          "
        >
          <p className="text-muted-foreground">
            Can't find the answer you're looking for?
            <span className="font-semibold text-foreground">
              {" "}
              Contact our team and we'll be happy to help.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};