"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  HandHelping,
  ArrowUpRight,
} from "lucide-react";

const impactAreas = [
  {
    icon: GraduationCap,
    title: "Education & Learning",
    description:
      "Supporting children and young people through learning programmes, homework clubs and skills development opportunities that build confidence and academic success.",
  },
  {
    icon: Users,
    title: "Youth Development",
    description:
      "Helping young people discover their potential through mentoring, personal development, employability support and positive community engagement.",
  },
  {
    icon: HeartHandshake,
    title: "Family Support",
    description:
      "Providing practical assistance and encouragement to families facing financial pressure, social challenges or limited access to support.",
  },
  {
    icon: ShieldCheck,
    title: "Wellbeing & Inclusion",
    description:
      "Creating safe and welcoming spaces where people of all backgrounds feel valued, supported and connected within their community.",
  },
  {
    icon: Sparkles,
    title: "Community Cohesion",
    description:
      "Bringing people together through events, activities and shared experiences that strengthen relationships and foster belonging.",
  },
  {
    icon: HandHelping,
    title: "Emergency Assistance",
    description:
      "Responding to immediate needs through food support, essential supplies and targeted community interventions during difficult times.",
  },
];

export const CommunityImpactAreas = () => {
  return (
    <section className="relative overflow-hidden bg-muted/20 px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[32rem] w-[32rem] rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-[#AF3800]/5 blur-3xl" />
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
              tracking-[0.25em]
              text-primary
            "
          >
            Impact Areas
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
            Creating Change That
            <span className="block text-primary">
              Lasts Beyond Today
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Every programme we deliver is designed to strengthen lives,
            create opportunities and build healthier, more connected
            communities.
          </p>
        </motion.div>

        {/* Impact Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {impactAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
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
                {/* Glow */}

                <div
                  className="
                    absolute
                    right-0 top-0
                    h-40 w-40
                    rounded-full
                    bg-primary/5
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      flex h-16 w-16
                      items-center justify-center
                      rounded-2xl
                      bg-primary/10
                      transition-all
                      duration-300
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
                      mt-6
                      text-2xl
                      font-black
                      tracking-[-0.03em]
                    "
                  >
                    {area.title}
                  </h3>

                  <p className="mt-4 leading-8 text-muted-foreground">
                    {area.description}
                  </p>
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
              bg-white
              p-8 text-center
              md:p-10
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
              People First. Community Always.
            </h3>

            <p
              className="
                mx-auto mt-4 max-w-4xl
                text-muted-foreground
                leading-8
              "
            >
              From education and youth development to family support and
              emergency assistance, our commitment is to help individuals
              and families overcome barriers, access opportunities and
              thrive within a stronger, more connected community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};