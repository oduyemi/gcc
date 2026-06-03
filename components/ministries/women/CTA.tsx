"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Sparkles,
  CheckCircle2,
  Users,
} from "lucide-react";

export const JoinWomenMinistryCTA = () => {
  return (
    <section className="relative overflow-hidden px-4 py-28 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[32rem] w-[32rem] rounded-full bg-primary/[0.05] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-[#AF3800]/[0.06] blur-3xl" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)]
            [background-size:120px_120px]
          "
        />

        {/* Watermark */}

        <div
          className="
            absolute inset-0
            flex items-center justify-center
            text-[12rem]
            font-black
            tracking-[-0.08em]
            text-primary/[0.03]
            select-none
            hidden lg:flex
          "
        >
          PROVERBS 31
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        <div
          className="
            overflow-hidden
            rounded-[3rem]
            border border-primary/10
            bg-gradient-to-br
            from-white
            via-white
            to-primary/[0.05]
            shadow-[0_40px_120px_-30px_rgba(0,0,0,0.15)]
          "
        >
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_450px]">
            {/* Left */}

            <div className="relative p-8 md:p-12 lg:p-16">
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
                <Sparkles className="h-3.5 w-3.5" />
                Women Of Purpose
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
                There’s A Place For
                <span className="block text-primary">
                  Every Woman
                </span>
              </h2>

              <div className="mt-5 h-1 w-24 rounded-full bg-primary" />

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-lg
                  leading-8
                  text-muted-foreground
                "
              >
                Whether you're a student, professional, wife, mother,
                entrepreneur, or simply seeking meaningful Christian
                community, you'll find encouragement, discipleship,
                friendship and opportunities to flourish in Christ.
              </p>

              {/* Social Proof */}

              <div
                className="
                  mt-8
                  inline-flex items-center gap-3
                  rounded-2xl
                  border border-primary/10
                  bg-white
                  px-5 py-4
                  shadow-sm
                "
              >
                <div
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-xl
                    bg-primary/10
                  "
                >
                  <Users className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="font-bold">
                    Growing Together In Faith
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Women of all ages and life stages
                  </p>
                </div>
              </div>

              {/* Tags */}

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Prayer & Fellowship",
                  "Women's Conferences",
                  "Mentorship",
                  "Community Outreach",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      rounded-full
                      border border-primary/10
                      bg-primary/[0.04]
                      px-4 py-2
                      text-sm
                      font-semibold
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA */}

              <div className="relative mt-10 inline-block">
                <div
                  className="
                    absolute inset-0
                    rounded-2xl
                    bg-primary/20
                    blur-xl
                  "
                />

                <Link
                  href="/next-step/women"
                  className="
                    relative
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-primary
                    px-8
                    py-4
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-2xl
                  "
                >
                  Join Women's Ministry

                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right Feature Card */}

            <div className="p-8 lg:p-10">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="
                  relative
                  overflow-hidden
                  rounded-[2.5rem]
                  border border-primary/10
                  bg-white
                  p-8
                  shadow-2xl
                "
              >
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />

                <div
                  className="
                    flex h-16 w-16 items-center justify-center
                    rounded-2xl
                    bg-primary/10
                  "
                >
                  <Heart className="h-8 w-8 text-primary" />
                </div>

                <h3 className="mt-6 text-3xl font-black">
                  You Belong Here
                </h3>

                <p className="mt-5 leading-8 text-muted-foreground">
                  Our desire is to see women strengthened in Christ,
                  connected in authentic community and equipped to thrive
                  in every season of life.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Build meaningful friendships",
                    "Grow deeper in God's Word",
                    "Serve alongside other women",
                    "Discover and use your gifts",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        group
                        flex items-center gap-3
                        rounded-xl
                        p-2
                        transition-colors
                        hover:bg-primary/[0.04]
                      "
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary" />

                      <span className="font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className="
                    mt-8
                    rounded-2xl
                    bg-primary/[0.04]
                    p-5
                  "
                >
                  <p className="text-sm font-semibold text-primary">
                    Proverbs 31:25
                  </p>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    "She is clothed with strength and dignity; she can
                    laugh at the days to come."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};