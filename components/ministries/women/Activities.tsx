"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Heart,
  Sparkles,
  Users,
  Flower2,
  ArrowUpRight,
} from "lucide-react";

const activities = [
  {
    title: "Bible Study & Discipleship",
    description:
      "Grow deeper in God's Word through teaching, discussion and practical application.",
    icon: BookOpen,
  },
  {
    title: "Prayer Gatherings",
    description:
      "Dedicated times of worship, intercession and spiritual encouragement.",
    icon: Heart,
  },
  {
    title: "Fellowship Events",
    description:
      "Build lasting friendships through meaningful connections and shared experiences.",
    icon: Users,
  },
  {
    title: "Conferences & Retreats",
    description:
      "Moments of spiritual refreshment, empowerment and growth.",
    icon: Sparkles,
  },
  {
    title: "Mentorship & Support",
    description:
      "Women encouraging and strengthening one another through every season of life.",
    icon: Flower2,
  },
];

export const WomenMinistryActivities = () => {
  const featured = activities[0];
  const others = activities.slice(1);

  const FeaturedIcon = featured.icon;

  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-primary/[0.04] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[#AF3800]/[0.05] blur-3xl" />

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
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-primary/10
              bg-primary/5
              px-4 py-2
              text-[11px]
              font-black
              uppercase
              tracking-[0.25em]
              text-primary
            "
          >
            What We Do
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-[-0.05em]
              text-foreground
              md:text-5xl
              lg:text-6xl
            "
          >
            Growing Together In
            <span
              className="
                block
                bg-gradient-to-r
                from-primary
                to-[#AF3800]
                bg-clip-text
                text-transparent
              "
            >
              Faith & Fellowship
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Opportunities for women to connect, grow spiritually,
            serve others and flourish in God's purpose.
          </p>
        </motion.div>

        {/* Activities Layout */}

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          {/* Featured Card */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              group
              relative
              overflow-hidden
              rounded-[3rem]
              border border-white/10
              bg-gradient-to-br
              from-primary
              via-[#3b139e]
              to-[#22007C]
              p-8
              text-white
              shadow-[0_35px_80px_-15px_rgba(34,0,124,0.35)]
              md:p-10
            "
          >
            {/* Decorative Elements */}

            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-white/5 blur-3xl" />

            <div className="absolute -bottom-10 -right-10 opacity-10">
              <FeaturedIcon className="h-56 w-56" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    bg-white/15
                    backdrop-blur-xl
                  "
                >
                  <FeaturedIcon className="h-7 w-7" />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      font-black
                      uppercase
                      tracking-[0.25em]
                      text-white/70
                    "
                  >
                    Activity 01
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    Featured Ministry Experience
                  </p>
                </div>
              </div>

              <h3
                className="
                  mt-10
                  text-4xl
                  font-black
                  leading-tight
                  tracking-[-0.04em]
                  md:text-5xl
                "
              >
                {featured.title}
              </h3>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
                {featured.description}
              </p>

              <div
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border border-white/15
                  bg-white/10
                  px-5 py-3
                  font-semibold
                  backdrop-blur-xl
                "
              >
                Growing Stronger Together

                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
          </motion.div>

          {/* Supporting Cards */}

          <div className="grid gap-6 sm:grid-cols-2">
            {others.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 25 }}
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
                    bg-white/80
                    p-7
                    shadow-sm
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >
                  {/* Hover Glow */}

                  <div
                    className="
                      absolute top-0 right-0
                      h-28 w-28
                      rounded-full
                      bg-primary/10
                      blur-2xl
                      opacity-0
                      transition-opacity duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative z-10">
                    <p
                      className="
                        text-xs
                        font-black
                        uppercase
                        tracking-[0.22em]
                        text-primary
                      "
                    >
                      Activity 0{index + 2}
                    </p>

                    <div
                      className="
                        mt-5
                        flex h-14 w-14 items-center justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-primary/15
                        to-primary/5
                        text-primary
                        transition-all duration-300
                        group-hover:scale-110
                        group-hover:bg-primary
                        group-hover:text-white
                      "
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3
                      className="
                        mt-5
                        text-xl
                        font-black
                        leading-tight
                      "
                    >
                      {activity.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {activity.description}
                    </p>

                    <ArrowUpRight
                      className="
                        mt-6
                        h-5 w-5
                        text-primary
                        transition-transform duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Vision Statement */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div
            className="
              relative overflow-hidden
              rounded-[2.5rem]
              border border-primary/10
              bg-gradient-to-r
              from-primary/[0.04]
              via-white
              to-[#AF3800]/[0.04]
              p-8
              text-center
              md:p-10
            "
          >
            <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-primary/5 blur-3xl" />

            <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-[#AF3800]/5 blur-3xl" />

            <div className="relative z-10">
              <p
                className="
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.25em]
                  text-primary
                "
              >
                Women's Ministry Vision
              </p>

              <h3
                className="
                  mt-4
                  text-3xl
                  font-black
                  tracking-[-0.04em]
                  text-foreground
                  md:text-4xl
                "
              >
                Growing Women Who Flourish In Every Season
              </h3>

              <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
                Through discipleship, prayer, fellowship and mentorship,
                we help women discover their identity in Christ,
                strengthen their faith, build meaningful relationships
                and confidently walk in God's purpose.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};