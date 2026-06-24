"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Globe2,
  HandHeart,
  School,
  HeartPulse,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    value: "1,000+",
    label: "Lives Reached",
    description:
      "Children, women and families supported through outreach and intervention projects.",
    icon: Users,
  },
  {
    value: "5",
    label: "Communities Served",
    description:
      "Mission activity across Ghana, Sierra Leone and Togo.",
    icon: Globe2,
  },
  {
    value: "100+",
    label: "Support Packages",
    description:
      "Essential items including clothing, toiletries and baby supplies distributed.",
    icon: HandHeart,
  },
  {
    value: "Local",
    label: "Partnerships",
    description:
      "Working alongside schools, hospitals, welfare services and community leaders.",
    icon: School,
  },
];

export const MissionImpact = () => {
  return (
    <section className="relative overflow-hidden bg-muted/20 px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[30rem] w-[30rem] rounded-full bg-primary/[0.04] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-[#AF3800]/[0.05] blur-3xl" />
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
              bg-primary/10
              px-4 py-2
              text-[11px]
              font-black
              uppercase
              tracking-[0.28em]
              text-primary
            "
          >
            <HeartPulse className="h-3.5 w-3.5" />
            Mission Impact
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
            Making A Difference
            <span className="block text-primary">
              One Community At A Time
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Through generosity, partnership and practical compassion,
            lives are being strengthened and communities are being
            transformed.
          </p>
        </motion.div>

        {/* Main Impact Grid */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
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

                <div className="mt-8 text-5xl font-black tracking-[-0.05em] text-primary">
                  {stat.value}
                </div>

                <h3 className="mt-3 text-xl font-black">
                  {stat.label}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Banner */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div
            className="
              overflow-hidden
              rounded-[2.5rem]
              border border-primary/10
              bg-gradient-to-r
              from-primary
              to-[#3b139e]
              p-8 md:p-12
              text-white
            "
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-white/70">
                  Beyond Statistics
                </p>

                <h3 className="mt-4 text-3xl font-black md:text-4xl">
                  Every Number Represents A Life
                </h3>

                <p className="mt-5 text-lg leading-8 text-white/80">
                  Behind every food parcel, school supply, outreach visit
                  and support programme is a person, a family and a story
                  being impacted through practical love and Christian
                  compassion.
                </p>
              </div>

              <div
                className="
                  flex h-24 w-24 items-center justify-center
                  rounded-[2rem]
                  bg-white/10
                  backdrop-blur-sm
                "
              >
                <Link href="/donation"><ArrowUpRight className="h-10 w-10" /></Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini Impact Strip */}

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            "Food & Meal Distribution",
            "Educational Support",
            "Women & Family Empowerment",
          ].map((item) => (
            <div
              key={item}
              className="
                rounded-[1.5rem]
                border border-primary/10
                bg-white
                px-6 py-5
                text-center
                font-semibold
                shadow-sm
              "
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};