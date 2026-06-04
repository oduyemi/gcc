"use client";
import { motion } from "framer-motion";
import {
  Flame,
  Users,
  Compass,
  Megaphone,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    icon: Flame,
    title: "Faith",
    description:
      "Growing deeper in God's Word, prayer and a personal relationship with Jesus.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building authentic friendships and doing life together in a supportive environment.",
  },
  {
    icon: Compass,
    title: "Purpose",
    description:
      "Helping young people discover their gifts, calling and God-given potential.",
  },
  {
    icon: Megaphone,
    title: "Impact",
    description:
      "Empowering youth to influence schools, campuses, workplaces and communities.",
  },
];

export const YouthMinistryOverview = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/[0.04] blur-3xl" />

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
            Why We Exist
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
            More Than A Youth Group
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            We are committed to helping young people grow spiritually,
            build meaningful relationships and become leaders who make
            a difference.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border border-primary/10
                  bg-white
                  p-7
                  shadow-sm
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    bg-gradient-to-br
                    from-primary/[0.03]
                    to-[#AF3800]/[0.03]
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      flex h-14 w-14 items-center justify-center
                      rounded-2xl
                      bg-primary/10
                    "
                  >
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="mt-6 text-2xl font-black">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {pillar.description}
                  </p>

                  <div
                    className="
                      mt-6
                      flex items-center gap-2
                      text-sm
                      font-bold
                      text-primary
                    "
                  >
                    Learn More

                    <ArrowRight
                      className="
                        h-4 w-4
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
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
            "
          >
            <div className="mx-auto max-w-4xl text-center">
              <h3 className="text-2xl font-black md:text-3xl">
                Raising Young People Who Know God,
                <span className="text-primary">
                  {" "}Love People & Change Their World
                </span>
              </h3>

              <p className="mt-5 text-muted-foreground">
                Through worship, discipleship, mentorship and community,
                we believe every young person can become who God has
                called them to be.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};