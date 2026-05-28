"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  HeartHandshake,
  Users2,
  HandHelping,
  Church,
  Heart,
  Waves,
  Flame,
  MessageCircleHeart,
  UserPlus,
} from "lucide-react";

const nextSteps = [
  {
    title: "New to GCC?",
    href: "/new",
    description:
      "We would love to help you feel at home, meet people, and discover life at Global Crossfire Church.",
    image: "/images/new.jpg",
    icon: Sparkles,
    badge: "Start Here",
  },
  {
    title: "Ask for Prayer",
    href: "/ask-for-prayer",
    description:
      "Our prayer team is ready to stand with you in faith through every season of life.",
    image: "/images/praying.jpg",
    icon: HeartHandshake,
    badge: "Prayer",
  },
  {
    title: "Get to Know People",
    href: "/community",
    description:
      "Build meaningful relationships and grow together in a Christ-centered community.",
    image: "/images/community.jpg",
    icon: Users2,
    badge: "Community",
  },
  {
    title: "Start Serving",
    href: "/serve",
    description:
      "Use your gifts and make a difference by serving in one of our church teams.",
    image: "/images/serving.jpg",
    icon: HandHelping,
    badge: "Serve",
  },
  {
    title: "Join a Ministry",
    href: "/ministry",
    description:
      "Find a ministry where you can belong, grow spiritually, and impact others.",
    image: "/images/fellowship.jpg",
    icon: Church,
    badge: "Ministries",
  },
  {
    title: "Start Giving",
    href: "/donation",
    description:
      "Partner with us in spreading the Gospel and impacting lives through generosity.",
    image: "/images/giving.jpg",
    icon: Heart,
    badge: "Giving",
  },
  {
    title: "Get Baptized",
    href: "/baptism",
    description:
      "Take the next public step in your faith journey through water baptism.",
    image: "/images/baptism.jpg",
    icon: Waves,
    badge: "Faith Step",
  },
  {
    title: "Commit to Christ",
    href: "/commit-to-christ",
    description:
      "Begin a new life in Christ and discover the hope, grace, and salvation found in Him.",
    image: "/images/commit.jpg",
    icon: Flame,
    badge: "Salvation",
  },
  {
    title: "Recommit to Christ",
    href: "/recommit",
    description:
      "No matter how far you've wandered, God's grace is still calling you home.",
    image: "/images/recommit.jpg",
    icon: Flame,
    badge: "Grace",
  },
  {
    title: "Connect with Counselling",
    href: "/counselling",
    description:
      "Receive biblical guidance, encouragement, and support from our counselling team.",
    image: "/images/counselling.jpg",
    icon: MessageCircleHeart,
    badge: "Care Team",
  },
];

export const NextSteps = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-[-15%] right-[-10%] h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-3xl" />

        <div
          className="
          absolute inset-0
          bg-[linear-gradient(rgba(30,41,59,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.025)_1px,transparent_1px)]
          [background-size:120px_120px]
        "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
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
              <UserPlus className="h-3.5 w-3.5 text-primary" />
            </div>

            <span className="text-[11px] font-black tracking-[0.32em] uppercase text-foreground">
              Grow In Faith
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
            lg:text-7xl
          "
          >
            Your Journey
            <br />

            <span className="text-primary">Starts Here</span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-muted-foreground">
            Whether you are exploring faith, looking for community,
            seeking prayer, or ready to serve — there is a next step for
            you at Global Crossfire Church.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-18 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {nextSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                }}
                viewport={{ once: true }}
              >
                <Link
                  href={step.href}
                  className="
                  group
                  relative
                  block
                  overflow-hidden
                  rounded-[2.5rem]
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />

                    {/* BADGE */}
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

                    {/* CONTENT */}
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
                        Explore Step

                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};