"use client";
import { motion } from "framer-motion";
import {
  Heart,
  MessageCircleHeart,
  HandHeart,
  RefreshCcw,
} from "lucide-react";

const steps = [
  {
    icon: Heart,
    title: "Pray",
    description:
      "We stand with individuals and families in prayer, believing God moves powerfully through faith-filled intercession.",
  },
  {
    icon: MessageCircleHeart,
    title: "Connect",
    description:
      "We listen, encourage and provide spiritual support through caring conversations and pastoral guidance.",
  },
  {
    icon: HandHeart,
    title: "Care",
    description:
      "Practical support, hospital visits, family care and encouragement during life's significant moments.",
  },
  {
    icon: RefreshCcw,
    title: "Follow Up",
    description:
      "Our care doesn't stop after one conversation. We continue walking alongside people with prayer and encouragement.",
  },
];

export const HowWeCare = () => {
  return (
    <section className="relative overflow-hidden bg-muted/20 px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/[0.04] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#AF3800]/[0.04] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className="
              inline-flex items-center
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
            Our Approach
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
            How We Care For People
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Every journey begins with prayer and continues with genuine care,
            encouragement and support.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-20">
          {/* Desktop Line */}

          <div
            className="
              absolute
              left-0
              right-0
              top-16
              hidden
              h-px
              bg-gradient-to-r
              from-transparent
              via-primary/20
              to-transparent
              lg:block
            "
          />

          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="relative"
                >
                  {/* Step Number */}

                  <div
                    className="
                      absolute
                      right-6
                      top-6
                      text-6xl
                      font-black
                      text-primary/10
                    "
                  >
                    0{index + 1}
                  </div>

                  <div
                    className="
                      relative
                      h-full
                      rounded-[2rem]
                      border border-primary/10
                      bg-white
                      p-8
                      shadow-sm
                      transition-all duration-300
                      hover:-translate-y-2
                      hover:shadow-xl
                    "
                  >
                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-primary/10
                      "
                    >
                      <Icon className="h-8 w-8 text-primary" />
                    </div>

                    <h3 className="mt-6 text-2xl font-black">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Highlight */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-16
            max-w-4xl
            rounded-[2rem]
            border border-primary/10
            bg-white
            p-8
            text-center
            shadow-sm
          "
        >
          <h3 className="text-2xl font-black">
            Compassion In Action
          </h3>

          <p className="mt-4 text-muted-foreground leading-8">
            Our desire is simple: to reflect the love of Christ through prayer,
            encouragement and practical care so that every person knows they are
            valued, supported and never alone.
          </p>
        </motion.div>
      </div>
    </section>
  );
};