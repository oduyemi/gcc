"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HeartHandshake,
  Sparkles,
  Users2,
  Church,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const featuredSteps = [
  {
    title: "Ask for Prayer",
    href: "/next-steps/ask-for-prayer",
    description:
      "Whatever you're facing, you don't have to carry it alone. Our prayer team is here to stand with you in faith and love.",
    icon: HeartHandshake,
    image: "/images/prayerz.jpg",
    badge: "Prayer Team",
    glow: "from-primary/30 via-primary/10 to-transparent",
  },
  {
    title: "Join a Ministry",
    href: "/next-steps/ministry",
    description:
      "Find your people, discover your purpose, and serve in a ministry where your gifts can truly flourish.",
    icon: Users2,
    image: "/images/fellowship.jpg",
    badge: "Find Community",
    glow: "from-accent/30 via-accent/10 to-transparent",
  },
];

export const Steps = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* =========================
          BACKGROUND
      ========================== */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-5%] top-0 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-[-15%] right-[-5%] h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl" />

        <div
          className="
          absolute inset-0
          bg-[linear-gradient(rgba(30,41,59,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.025)_1px,transparent_1px)]
          [background-size:120px_120px]
        "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =========================
            HEADER
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className="
            mb-6 inline-flex items-center gap-3
            rounded-full
            border border-white/30
            bg-white/60
            px-5 py-2.5
            backdrop-blur-2xl
            shadow-[0_10px_40px_rgba(255,255,255,0.18)]
          "
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
            </div>

            <span className="text-[11px] font-black tracking-[0.32em] uppercase text-foreground">
              Your Journey Starts Here
            </span>
          </div>

          <h2
            className="
            text-4xl
            font-black
            leading-[0.92]
            tracking-[-0.07em]
            text-foreground
            sm:text-5xl
            lg:text-6xl
          "
          >
            Take Your{" "}
            <span className="text-primary">Next Step</span>
          </h2>

          <p className="mt-7 text-lg leading-9 text-muted-foreground">
            Whether you are new to faith, searching for community, or
            ready to grow deeper spiritually, there is a place for you at
            Global Crossfire Church UK.
          </p>
        </motion.div>

        {/* =========================
            CARDS
        ========================== */}

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1fr_0.72fr]">
          {/* FEATURED */}
          {featuredSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
              >
                <Link
                  href={step.href}
                  className="
                  group
                  relative
                  block
                  h-full
                  overflow-hidden
                  rounded-[2.6rem]
                  border border-white/30
                  bg-white/55
                  backdrop-blur-3xl
                  transition-all duration-700
                  hover:-translate-y-2
                  hover:bg-white/70
                  hover:shadow-[0_30px_90px_rgba(216,164,91,0.16)]
                "
                >
                  {/* IMAGE */}
                  <div className="relative h-[320px] overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-110
                    "
                    />

                    {/* overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    <div
                      className={`
                      absolute inset-0
                      bg-gradient-to-br ${step.glow}
                    `}
                    />

                    {/* top badge */}
                    <div className="absolute left-5 top-5 z-20">
                      <div
                        className="
                        inline-flex items-center gap-2
                        rounded-full
                        border border-white/20
                        bg-white/15
                        px-4 py-2
                        backdrop-blur-xl
                      "
                      >
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20">
                          <Icon className="h-3.5 w-3.5 text-white" />
                        </div>

                        <span className="text-[11px] font-black tracking-[0.22em] uppercase text-white">
                          {step.badge}
                        </span>
                      </div>
                    </div>

                    {/* content overlay */}
                    <div className="absolute inset-x-0 bottom-0 z-20 p-7">
                      <h3
                        className="
                        text-3xl
                        font-black
                        leading-tight
                        tracking-[-0.05em]
                        text-white
                      "
                      >
                        {step.title}
                      </h3>

                      <p className="mt-4 text-[15px] leading-8 text-white/80">
                        {step.description}
                      </p>

                      <div
                        className="
                        mt-6 inline-flex items-center gap-2
                        text-sm font-bold text-primary
                      "
                      >
                        Explore More

                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* MORE STEPS */}
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.24,
            }}
            viewport={{ once: true }}
            >
            <Link
                href="/next-steps"
                className="
                group
                relative
                block
                h-full
                overflow-hidden
                rounded-[2.6rem]
                border border-white/30
                bg-white/55
                backdrop-blur-3xl
                transition-all duration-700
                hover:-translate-y-2
                hover:bg-white/70
                hover:shadow-[0_30px_90px_rgba(216,164,91,0.16)]
            "
            >
                {/* IMAGE */}
                <div className="relative h-[320px] overflow-hidden">
                <Image
                    src="/images/men.jpg"
                    alt="More next steps"
                    fill
                    className="
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                "
                />

                {/* overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div
                    className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-primary/25
                    via-primary/5
                    to-accent/10
                "
                />

                {/* top badge */}
                <div className="absolute left-5 top-5 z-20">
                    <div
                    className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-white/20
                    bg-white/15
                    px-4 py-2
                    backdrop-blur-xl
                    "
                    >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20">
                        <Church className="h-3.5 w-3.5 text-white" />
                    </div>

                    <span className="text-[11px] font-black tracking-[0.22em] uppercase text-white">
                        Grow With GCC
                    </span>
                    </div>
                </div>

                {/* floating glass card */}
                <div
                    className="
                    absolute bottom-5 left-5 right-5 z-20
                    rounded-[2rem]
                    border border-white/20
                    bg-white/10
                    p-6
                    backdrop-blur-2xl
                "
                >
                    <h3
                    className="
                    text-3xl
                    font-black
                    leading-tight
                    tracking-[-0.05em]
                    text-white
                    "
                    >
                    Explore More
                    <br />
                    Next Steps
                    </h3>

                    <p className="mt-3 text-[15px] leading-7 text-white/80">
                    Baptism, salvation, counselling, serving teams, discipleship,
                    and more ways to grow in Christ.
                    </p>

                    <div
                    className="
                    mt-5 inline-flex items-center gap-2
                    text-sm font-bold text-primary
                    "
                    >
                    See More Steps

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                </div>
                </div>
            </Link>
            </motion.div>
        </div>
      </div>
    </section>
  );
};