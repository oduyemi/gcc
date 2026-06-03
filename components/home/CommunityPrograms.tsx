"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HeartHandshake,
  Users,
  HandHelping,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Users,
    title: "Youth Development",
  },
  {
    icon: HeartHandshake,
    title: "Family Support",
  },
  {
    icon: HandHelping,
    title: "Community Outreach",
  },
];

export const CommunityPrograms = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-28 md:px-8 lg:px-12">
      {/* Atmosphere */}

      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-0 h-[34rem] w-[34rem] rounded-full bg-primary/10 blur-[140px]" />

        <div className="absolute bottom-[-10%] right-[-5%] h-[38rem] w-[38rem] rounded-full bg-[#AF3800]/10 blur-[160px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4),transparent_65%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-20 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-primary/15
                bg-white/80
                px-5 py-2
                shadow-lg
                backdrop-blur-xl
              "
            >
              <Sparkles className="h-4 w-4 text-primary" />

              <span
                className="
                  text-[11px]
                  font-black
                  uppercase
                  tracking-[0.28em]
                  text-primary
                "
              >
                Community Impact
              </span>
            </div>

            <h2
              className="
                mt-7
                text-5xl
                font-black
                leading-[0.95]
                tracking-[-0.06em]
                text-foreground
                md:text-6xl
              "
            >
              Serving People

              <span className="block text-primary">
                Beyond Sunday
              </span>
            </h2>

            <p
              className="
                mt-7
                max-w-xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              Church is more than a gathering—it is a movement of love,
              compassion and service. Through outreach initiatives, family
              support and youth empowerment, we bring hope to our communities
              and demonstrate Christ’s love in practical ways.
            </p>

            {/* PROGRAMS */}

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {programs.map((program) => {
                const Icon = program.icon;

                return (
                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    key={program.title}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[1.75rem]
                      border border-white/50
                      bg-white/70
                      p-5
                      shadow-xl
                      backdrop-blur-xl
                    "
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div
                        className="
                          flex h-12 w-12 items-center justify-center
                          rounded-2xl
                          bg-primary/10
                        "
                      >
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <p className="mt-4 text-sm font-bold">
                        {program.title}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}

            <Button
              asChild
              size="lg"
              className="
                group
                mt-10
                h-14
                rounded-2xl
                px-8
                text-base
                font-bold
                shadow-[0_20px_50px_rgba(175,56,0,0.25)]
              "
            >
              <Link href="/community">
                Explore Community Programs

                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-primary/10 blur-[120px]" />

            {/* Main Image */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[3rem]
                shadow-[0_35px_90px_rgba(0,0,0,0.18)]
              "
            >
              <Image
                src="/images/community1.jpg"
                alt="Community outreach"
                width={900}
                height={1100}
                className="
                  h-[620px]
                  w-full
                  object-cover
                  transition-transform duration-1000
                  hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            </div>

            {/* Floating Image */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="
                absolute
                -left-8
                top-12
                hidden
                overflow-hidden
                rounded-[2rem]
                border-4 border-white
                shadow-2xl
                lg:block
              "
            >
              <Image
                src="/images/community2.jpg"
                alt="Community support"
                width={250}
                height={300}
                className="h-[240px] w-[220px] object-cover"
              />
            </motion.div>

            {/* Impact Card */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="
                absolute
                bottom-10
                right-8
                rounded-[2rem]
                border border-white/30
                bg-white/90
                px-7
                py-6
                shadow-[0_25px_70px_rgba(0,0,0,0.15)]
                backdrop-blur-xl
              "
            >
              <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">
                Lives Impacted
              </p>

              <h3 className="mt-2 text-4xl font-black">
                5,000+
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Through outreach, support and community care.
              </p>
            </motion.div>

            {/* Mission Card */}

            <div
              className="
                absolute
                left-10
                bottom-10
                rounded-[1.8rem]
                border border-primary/10
                bg-primary
                px-6
                py-5
                text-white
                shadow-[0_20px_60px_rgba(175,56,0,0.35)]
              "
            >
              <p className="text-xs font-black uppercase tracking-[0.25em]">
                Our Mission
              </p>

              <p className="mt-2 text-sm font-semibold">
                Transforming Lives Through Faith & Service
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};