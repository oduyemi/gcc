"use client";
import { motion } from "framer-motion";
import {
  BookOpen,
  Flame,
  Users,
  Megaphone,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Youth Gatherings",
    description:
      "Weekly gatherings filled with worship, biblical teaching, discussion and authentic community.",
    highlight: "Weekly",
  },
  {
    icon: Flame,
    title: "Prayer & Encounter Nights",
    description:
      "Dedicated times of worship, prayer and seeking God's presence together.",
    highlight: "Monthly",
  },
  {
    icon: Users,
    title: "Leadership Development",
    description:
      "Equipping young people with practical leadership skills and spiritual maturity.",
    highlight: "Growth",
  },
  {
    icon: Megaphone,
    title: "Outreach & Evangelism",
    description:
      "Serving communities, sharing faith and making a positive impact beyond church walls.",
    highlight: "Impact",
  },
];

export const YouthMinistryPrograms = () => {
  return (
    <section className="relative overflow-hidden bg-muted/20 px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/[0.05] blur-3xl" />

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
            What We Do
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
            Opportunities To
            <span className="block text-primary">
              Grow & Get Connected
            </span>
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Wherever you are in your faith journey, there are opportunities
            to connect, grow, serve and discover your purpose.
          </p>
        </motion.div>

        {/* Programs */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
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
                    overflow-hidden
                    rounded-[2rem]
                    border border-primary/10
                    bg-white
                    p-8
                    shadow-sm
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >
                  {/* Background Glow */}
                  <div
                    className="
                      absolute inset-0
                      opacity-0
                      transition-opacity duration-500
                      group-hover:opacity-100
                      bg-gradient-to-br
                      from-primary/[0.04]
                      to-[#AF3800]/[0.04]
                    "
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div
                        className="
                          flex h-16 w-16 items-center justify-center
                          rounded-2xl
                          bg-primary/10
                        "
                      >
                        <Icon className="h-8 w-8 text-primary" />
                      </div>

                      <div
                        className="
                          rounded-full
                          border border-primary/10
                          bg-primary/5
                          px-4 py-2
                          text-xs
                          font-black
                          uppercase
                          tracking-[0.18em]
                          text-primary
                        "
                      >
                        {program.highlight}
                      </div>
                    </div>

                    <h3 className="mt-6 text-2xl font-black">
                      {program.title}
                    </h3>

                    <p className="mt-4 leading-7 text-muted-foreground">
                      {program.description}
                    </p>

                    <div
                      className="
                        mt-6
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
                          group-hover:translate-x-1
                        "
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div
            className="
              overflow-hidden
              rounded-[2.5rem]
              border border-primary/10
              bg-gradient-to-r
              from-primary
              via-[#22007C]
              to-[#AF3800]
              p-10
              text-white
            "
          >
            <div className="mx-auto max-w-4xl text-center">
              <h3 className="text-3xl font-black md:text-4xl">
                You Were Created For More
              </h3>

              <p className="mt-5 text-white/80">
                Our heart is to see young people encounter Jesus,
                develop strong biblical foundations, build lasting
                friendships and confidently step into God's purpose
                for their lives.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};