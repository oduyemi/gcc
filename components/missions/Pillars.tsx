"use client";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  GraduationCap,
  Network,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const pillars = [
  {
    title: "Compassion",
    description:
      "Providing practical support through food distribution, clothing, toiletries, baby supplies and essential resources for vulnerable individuals and families.",
    icon: HeartHandshake,
  },
  {
    title: "Empowerment",
    description:
      "Creating opportunities for children, young people and women to thrive through education, mentorship, wellbeing initiatives and community support.",
    icon: GraduationCap,
  },
  {
    title: "Partnership",
    description:
      "Working alongside schools, healthcare providers, welfare services, local authorities and charitable organisations to maximise impact.",
    icon: Network,
  },
  {
    title: "Hope",
    description:
      "Sharing Christ's love through outreach and community transformation that brings dignity, encouragement and lasting change.",
    icon: Sparkles,
  },
];

export const MissionPillars = () => {
  return (
    <section className="relative overflow-hidden bg-muted/20 px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-primary/[0.04] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[#AF3800]/[0.05] blur-3xl" />
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
              bg-primary/10
              px-4 py-2
              text-[11px]
              font-black
              uppercase
              tracking-[0.28em]
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
            The Pillars That Guide
            <span className="block text-primary">
              Our Mission
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Everything we do is built on practical compassion,
            meaningful partnerships and a commitment to creating
            lasting impact in communities.
          </p>
        </motion.div>

        {/* Pillars Grid */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border border-primary/10
                  bg-white
                  p-8
                  shadow-sm
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                {/* Hover Glow */}

                <div
                  className="
                    absolute right-0 top-0
                    h-32 w-32
                    rounded-full
                    bg-primary/10
                    blur-3xl
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    flex h-16 w-16 items-center justify-center
                    rounded-2xl
                    bg-primary/10
                    transition-all duration-300
                    group-hover:bg-primary
                  "
                >
                  <Icon
                    className="
                      h-8 w-8
                      text-primary
                      transition-colors duration-300
                      group-hover:text-white
                    "
                  />
                </div>

                <h3
                  className="
                    mt-6
                    text-2xl
                    font-black
                    tracking-[-0.03em]
                  "
                >
                  {pillar.title}
                </h3>

                <p className="mt-4 leading-8 text-muted-foreground">
                  {pillar.description}
                </p>

                <div
                  className="
                    mt-6
                    inline-flex items-center gap-2
                    font-bold text-primary
                  "
                >
                  Our Commitment

                  <ArrowUpRight
                    className="
                      h-4 w-4
                      transition-transform
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div
            className="
              rounded-[2.5rem]
              border border-primary/10
              bg-gradient-to-r
              from-primary/[0.04]
              via-white
              to-[#AF3800]/[0.04]
              p-8 md:p-10
              text-center
            "
          >
            <h3
              className="
                text-2xl
                font-black
                tracking-[-0.03em]
                md:text-3xl
              "
            >
              Small Acts. Lasting Impact.
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              Through faith, generosity and partnership, we are helping
              communities experience practical support, restored dignity
              and renewed hope for the future.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};