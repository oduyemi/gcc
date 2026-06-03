"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  HeartHandshake,
  Sparkles,
  Church,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Users,
    title: "Community",
    description:
      "Build meaningful friendships and grow alongside people who share your faith journey.",
  },
  {
    icon: HeartHandshake,
    title: "Serve",
    description:
      "Use your gifts and talents to impact lives and strengthen the church family.",
  },
  {
    icon: Church,
    title: "Grow",
    description:
      "Deepen your relationship with God through discipleship, prayer, and ministry involvement.",
  },
];

export const GetInvolvedCTA = () => {
  return (
    <section className="relative overflow-hidden px-4 py-28 md:px-8 lg:px-12">
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-primary/[0.05] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[34rem] w-[34rem] rounded-full bg-[#AF3800]/[0.05] blur-3xl" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)]
            [background-size:120px_120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            className="
              relative overflow-hidden
              rounded-[3rem]
              border border-white/40
              bg-white/[0.65]
              p-8 md:p-12 lg:p-16
              shadow-[0_25px_100px_rgba(0,0,0,0.08)]
              backdrop-blur-2xl
            "
          >
            {/* Lighting */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_35%)]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(216,164,91,0.10),transparent_30%)]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(233,199,255,0.08),transparent_35%)]" />

            <div className="absolute inset-0 rounded-[3rem] ring-1 ring-inset ring-white/30" />

            <div className="relative z-10 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              {/* LEFT CONTENT */}

              <div>
                <div
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-primary/15
                    bg-primary/10
                    px-5 py-2.5
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
                    Get Connected
                  </span>
                </div>

                <h2
                  className="
                    mt-7
                    text-5xl
                    font-black
                    leading-[0.95]
                    tracking-[-0.06em]
                    text-slate-900
                    lg:text-7xl
                  "
                >
                  Find Your Place.
                  <span className="block text-primary">
                    Make A Difference.
                  </span>
                </h2>

                <p
                  className="
                    mt-7
                    max-w-2xl
                    text-lg
                    leading-8
                    text-slate-600
                  "
                >
                  Every ministry is an opportunity to grow spiritually,
                  build meaningful relationships, and serve others using
                  the gifts God has given you.
                </p>

                {/* BUTTONS */}

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="
                      group relative h-14 overflow-hidden
                      rounded-2xl
                      bg-primary
                      px-8
                      text-white
                      shadow-[0_12px_50px_rgba(216,164,91,0.35)]
                      transition-all duration-700
                      hover:-translate-y-1
                      hover:bg-[#d6a05a]
                    "
                  >
                    <Link href="/next-steps">
                      <span className="relative z-10 flex items-center">
                        Join A Ministry

                        <ArrowRight
                          className="
                            ml-2 h-4 w-4
                            transition-transform duration-500
                            group-hover:translate-x-1
                          "
                        />
                      </span>
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="
                      h-14 rounded-2xl
                      border-primary/20
                      bg-white/60
                      px-8
                      backdrop-blur-xl
                      transition-all duration-500
                      hover:bg-white
                    "
                  >
                    <Link href="/visit">
                      Plan Your Visit
                    </Link>
                  </Button>
                </div>

                {/* FLOATING STAT */}

                <div
                  className="
                    mt-10 inline-flex items-center gap-4
                    rounded-[1.6rem]
                    border border-primary/10
                    bg-white/70
                    px-5 py-4
                    backdrop-blur-xl
                  "
                >
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center
                      rounded-2xl
                      bg-primary/10
                    "
                  >
                    <Star className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Everyone Has A Place
                    </p>

                    <p className="text-sm text-slate-500">
                      Discover where God can use your gifts.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}

              <div className="grid gap-5 sm:grid-cols-2">
                {features.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={`
                        group relative overflow-hidden
                        rounded-[2rem]
                        border border-white/40
                        bg-white/[0.7]
                        p-6
                        backdrop-blur-xl
                        shadow-[0_12px_40px_rgba(0,0,0,0.05)]
                        transition-all duration-700
                        hover:-translate-y-2
                        hover:shadow-[0_20px_70px_rgba(216,164,91,0.15)]
                        ${
                          index === 1
                            ? "sm:translate-y-8"
                            : ""
                        }
                      `}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-primary/[0.05] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                      <div className="relative z-10">
                        <div
                          className="
                            flex h-14 w-14 items-center justify-center
                            rounded-2xl
                            bg-primary/10
                            transition-all duration-700
                            group-hover:scale-110
                            group-hover:bg-primary
                          "
                        >
                          <Icon className="h-6 w-6 text-primary group-hover:text-white" />
                        </div>

                        <h3 className="mt-5 text-xl font-black text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-3 leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* FEATURED CARD */}

                <div
                  className="
                    relative overflow-hidden
                    rounded-[2rem]
                    bg-primary
                    p-7
                    text-white
                    shadow-[0_20px_80px_rgba(216,164,91,0.30)]
                    sm:translate-y-8
                  "
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />

                  <p className="text-xs font-black uppercase tracking-[0.28em] text-white/70">
                    Ministry Vision
                  </p>

                  <h3 className="mt-4 text-3xl font-black leading-tight">
                    Everyone Has A Place
                  </h3>

                  <p className="mt-5 leading-7 text-white/85">
                    We believe every person has unique gifts, purpose,
                    and a role to play in advancing God's Kingdom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};