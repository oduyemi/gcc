"use client";
import { motion } from "framer-motion";
import {
  Baby,
  BookOpen,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const groups = [
  {
    title: "Little Stars",
    ages: "Ages 3–5",
    icon: Baby,
    description:
      "Introducing young children to God's love through stories, songs, prayer and fun activities.",
    highlights: [
      "Bible Stories",
      "Songs & Worship",
      "Creative Play",
      "Prayer Time",
    ],
  },
  {
    title: "Kingdom Kids",
    ages: "Ages 6–11",
    icon: BookOpen,
    description:
      "Helping children grow in faith, build friendships and understand God's Word in practical ways.",
    highlights: [
      "Bible Lessons",
      "Memory Verses",
      "Games & Activities",
      "Team Building",
    ],
  },
  {
    title: "Teen Ignite",
    ages: "Ages 12–17",
    icon: Rocket,
    description:
      "Equipping teenagers to develop their faith, discover purpose and become leaders in their generation.",
    highlights: [
      "Discipleship",
      "Leadership",
      "Youth Discussions",
      "Mentoring",
    ],
  },
];

export const AgeGroups = () => {
  return (
    <section className="relative overflow-hidden bg-muted/20 px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#AF3800]/[0.04] blur-3xl" />
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
              uppercase
              tracking-[0.25em]
              text-primary
            "
          >
            Age Groups
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
            A Place For Every
            <span className="block text-primary">
              Child & Teen
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Our ministry is designed to meet children and teenagers
            at their stage of development with engaging teaching,
            meaningful relationships and age-appropriate activities.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {groups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <div
                  className="
                    group
                    relative
                    h-full
                    overflow-hidden
                    rounded-[2.5rem]
                    border border-primary/10
                    bg-white
                    p-8
                    shadow-sm
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >
                  {/* Decorative Glow */}
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/[0.04] blur-3xl" />

                  {/* Icon */}
                  <div
                    className="
                      relative
                      flex h-16 w-16 items-center justify-center
                      rounded-2xl
                      bg-primary/10
                    "
                  >
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Age Badge */}
                  <div
                    className="
                      mt-6
                      inline-flex
                      rounded-full
                      bg-primary/5
                      px-4 py-2
                      text-sm
                      font-bold
                      text-primary
                    "
                  >
                    {group.ages}
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-3xl font-black">
                    {group.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 leading-7 text-muted-foreground">
                    {group.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-8 space-y-3">
                    {group.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary" />

                        <span className="font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div
            className="
              rounded-[2.5rem]
              border border-primary/10
              bg-gradient-to-br
              from-primary/[0.04]
              via-white
              to-[#AF3800]/[0.04]
              p-10
              text-center
            "
          >
            <h3 className="text-3xl font-black md:text-4xl">
              Growing Together Every Step Of The Way
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
              From a child's first Bible story to a teenager discovering
              their calling, our goal is to help every young person
              build a lifelong relationship with Jesus.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};