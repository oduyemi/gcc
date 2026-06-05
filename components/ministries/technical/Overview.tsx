"use client";
import { motion } from "framer-motion";
import {
  Mic2,
  Music4,
  Radio,
  Headphones,
  Camera,
  MonitorPlay,
} from "lucide-react";

const pillars = [
  {
    icon: Mic2,
    title: "Worship Leaders",
    description:
      "Leading the congregation into authentic worship and praise.",
  },
  {
    icon: Music4,
    title: "Musicians & Choir",
    description:
      "Using musical gifts to glorify God and support worship experiences.",
  },
  {
    icon: Headphones,
    title: "Audio Team",
    description:
      "Creating clear, excellent sound for every service and event.",
  },
  {
    icon: MonitorPlay,
    title: "Livestream & Media",
    description:
      "Helping people engage with services both in person and online.",
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "Capturing moments that tell the story of God's work in our church.",
  },
  {
    icon: Radio,
    title: "Production",
    description:
      "Supporting worship through technology, lighting and presentation.",
  },
];

export const MusicTechnicalOverview = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/[0.04] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#AF3800]/[0.04] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              Ministry Overview
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
              One Ministry.
              <span className="block text-primary">
                Many Gifts.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Every worship experience is the result of people serving
              faithfully with different gifts but a shared purpose.
            </p>

            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              From worship leaders and musicians to sound engineers,
              camera operators and livestream teams, we work together
              to create an atmosphere where people can encounter God.
            </p>

            {/* Quote Card */}

            <div
              className="
                mt-8
                rounded-[2rem]
                border border-primary/10
                bg-gradient-to-br
                from-primary/[0.04]
                via-white
                to-[#AF3800]/[0.04]
                p-6
              "
            >
              <p className="text-lg font-semibold leading-relaxed">
                Excellence in worship is not about performance —
                it is about serving God and people with the gifts
                He has entrusted to us.
              </p>
            </div>
          </motion.div>

          {/* Right */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                    rounded-[2rem]
                    border border-primary/10
                    bg-white
                    p-6
                    shadow-sm
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:shadow-xl
                  "
                >
                  <div
                    className="
                      flex h-14 w-14 items-center justify-center
                      rounded-2xl
                      bg-primary/10
                      text-primary
                    "
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 font-black text-lg">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};