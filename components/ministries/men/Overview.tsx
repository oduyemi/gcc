"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Crown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const pillars = [
  {
    icon: Shield,
    number: "01",
    title: "Faith",
    description:
      "Growing stronger in our relationship with God through prayer, discipleship and the study of His Word.",
  },
  {
    icon: Users,
    number: "02",
    title: "Brotherhood",
    description:
      "Building authentic relationships where men encourage, support and strengthen one another.",
  },
  {
    icon: Crown,
    number: "03",
    title: "Leadership",
    description:
      "Equipping men to lead with integrity at home, in church, in business and throughout their communities.",
  },
];

export const MenMinistryOverview = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-[#AF3800]/5 blur-3xl" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)]
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
              text-[11px]
              font-black
              uppercase
              tracking-[0.28em]
              text-primary
            "
          >
            Our Mission
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-[-0.06em]
              text-foreground
              md:text-6xl
            "
          >
            Building Men Who
            <span className="block text-primary">
              Influence Generations
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            The Men's Ministry exists to help men become strong followers
            of Christ, faithful leaders in their families, and positive
            influences in their communities.
          </p>

          {/* Stats */}

          <div className="mt-10 flex flex-wrap justify-center gap-8">
            <div>
              <p className="text-3xl font-black text-primary">Faith</p>
              <p className="text-sm text-muted-foreground">
                Spiritual Growth
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-primary">
                Brotherhood
              </p>
              <p className="text-sm text-muted-foreground">
                Genuine Connection
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-primary">
                Leadership
              </p>
              <p className="text-sm text-muted-foreground">
                Kingdom Influence
              </p>
            </div>
          </div>
        </motion.div>

        {/* Pillars */}

        <div className="mt-20 grid gap-7 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[2.5rem]
                  border border-primary/10
                  bg-white/90
                  backdrop-blur
                  p-8
                  shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                  transition-all duration-500
                  hover:-translate-y-3
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  ${
                    index === 1
                      ? "lg:translate-y-10"
                      : ""
                  }
                `}
              >
                {/* Glow */}

                <div
                  className="
                    absolute -right-10 -top-10
                    h-40 w-40
                    rounded-full
                    bg-primary/5
                    blur-3xl
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Number */}

                <div
                  className="
                    absolute right-8 top-8
                    text-6xl
                    font-black
                    leading-none
                    text-primary/10
                  "
                >
                  {pillar.number}
                </div>

                <div
                  className="
                    relative
                    flex h-16 w-16 items-center justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-primary/15
                    to-primary/5
                    transition-all duration-300
                    group-hover:scale-110
                    group-hover:bg-primary
                  "
                >
                  <Icon
                    className="
                      h-8 w-8
                      text-primary
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  />
                </div>

                <h3
                  className="
                    mt-7
                    text-3xl
                    font-black
                    tracking-[-0.04em]
                  "
                >
                  {pillar.title}
                </h3>

                <p className="mt-5 leading-8 text-muted-foreground">
                  {pillar.description}
                </p>

                <div
                  className="
                    mt-8
                    flex items-center gap-2
                    font-bold
                    text-primary
                  "
                >
                  Discover More

                  <ArrowRight
                    className="
                      h-4 w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Statement */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div
            className="
              relative overflow-hidden
              rounded-[3rem]
              border border-primary/10
              bg-gradient-to-br
              from-primary/[0.05]
              via-white
              to-[#AF3800]/[0.05]
              p-10 md:p-14
            "
          >
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative z-10">
              <div
                className="
                  inline-flex items-center gap-2
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
                Kingdom Impact
              </div>

              <h3
                className="
                  mt-6
                  text-3xl
                  font-black
                  tracking-[-0.04em]
                  md:text-5xl
                "
              >
                Strong Men Build
                <span className="block text-primary">
                  Strong Families
                </span>
              </h3>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                Through fellowship, prayer, mentorship and service, we are
                committed to raising men who honour God and positively impact
                every sphere of life.
              </p>

              <div className="mt-8 flex flex-wrap gap-6">
                {[
                  "Prayer",
                  "Mentorship",
                  "Discipleship",
                  "Leadership",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary" />

                    <span className="font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};