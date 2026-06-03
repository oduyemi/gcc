"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Heart,
  Sparkles,
  Baby,
  HandHeart,
  Music4,
} from "lucide-react";

const ministries = [
  {
    title: "Men's Ministry",
    description:
      "Raising godly men who lead with faith, integrity and purpose.",
    image: "/images/mens.jpg",
    href: "/ministries/men",
    icon: Users,
  },
  {
    title: "Women's Ministry",
    description:
      "Encouraging women to flourish spiritually and walk confidently in Christ.",
    image: "/images/women.jpg",
    href: "/ministries/women",
    icon: Heart,
  },
  {
    title: "Youth Ministry",
    description:
      "Helping young people discover purpose and build a vibrant faith.",
    image: "/images/youth.jpeg",
    href: "/ministries/youth",
    icon: Sparkles,
  },
  {
    title: "Kids & Teens",
    description:
      "Creating a safe, fun and faith-filled environment for the next generation.",
    image: "/images/teens.jpg",
    href: "/ministries/kids",
    icon: Baby,
  },
  {
    title: "Prayer & Caring",
    description:
      "Providing prayer, encouragement and practical support for people.",
    image: "/images/prayerz.jpg",
    href: "/ministries/prayer",
    icon: HandHeart,
  },
  {
    title: "Music & Technical",
    description:
      "Serving through worship, media, production and creative excellence.",
    image: "/images/musicians.jpg",
    href: "/ministries/music",
    icon: Music4,
  },
];

export const MinistriesGrid = () => {
  return (
    <section
      id="ministries"
      className="
        relative overflow-hidden
        bg-[#faf7f2]
        px-4 py-28
        md:px-8
        lg:px-12
      "
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-primary/[0.05] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[34rem] w-[34rem] rounded-full bg-[#AF3800]/[0.06] blur-3xl" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)]
            [background-size:120px_120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-primary/15
              bg-white/70
              px-5 py-2.5
              backdrop-blur-xl
            "
          >
            <span
              className="
                text-[11px]
                font-black
                uppercase
                tracking-[0.28em]
                text-primary
              "
            >
              Ministries
            </span>
          </div>

          <h2
            className="
              mt-7
              text-4xl
              font-black
              tracking-[-0.06em]
              text-slate-900
              md:text-6xl
            "
          >
            Find Your
            <span className="block text-primary">
              Community & Calling
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-600
            "
          >
            Wherever you are in your faith journey, there is a place
            for you to connect, grow spiritually, build meaningful
            relationships, and serve with purpose.
          </p>
        </motion.div>

        {/* GRID */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon;

            return (
              <motion.div
                key={ministry.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
              >
                <Link
                  href={ministry.href}
                  className="
                    group relative block
                    overflow-hidden
                    rounded-[2.3rem]
                    border border-white/50
                    bg-white/65
                    backdrop-blur-2xl
                    shadow-[0_15px_60px_rgba(0,0,0,0.06)]
                    transition-all duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    hover:-translate-y-3
                    hover:shadow-[0_30px_90px_rgba(216,164,91,0.18)]
                  "
                >
                  {/* Glow */}

                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-br
                      from-white/60
                      via-transparent
                      to-primary/[0.05]
                      opacity-0
                      transition-opacity duration-700
                      group-hover:opacity-100
                    "
                  />

                  {/* IMAGE */}

                  <div className="relative h-[340px] overflow-hidden">
                    <Image
                      src={ministry.image}
                      alt={ministry.title}
                      fill
                      className="
                        object-cover
                        transition-transform duration-1000
                        group-hover:scale-110
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                    <div className="absolute left-5 top-5">
                      <div
                        className="
                          flex h-14 w-14
                          items-center justify-center
                          rounded-[1.3rem]
                          border border-white/20
                          bg-white/90
                          backdrop-blur-xl
                          shadow-xl
                          transition-all duration-700
                          group-hover:scale-110
                          group-hover:rotate-6
                        "
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <div
                        className="
                          inline-flex
                          rounded-full
                          bg-white/15
                          px-3 py-1.5
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.24em]
                          text-white
                          backdrop-blur-md
                        "
                      >
                        Ministry
                      </div>

                      <h3
                        className="
                          mt-3
                          text-3xl
                          font-black
                          tracking-[-0.04em]
                          text-white
                        "
                      >
                        {ministry.title}
                      </h3>
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="relative z-10 p-7">
                    <p
                      className="
                        leading-7
                        text-slate-600
                      "
                    >
                      {ministry.description}
                    </p>

                    <div
                      className="
                        mt-7
                        flex items-center gap-2
                        font-bold
                        text-primary
                      "
                    >
                      Learn More

                      <ArrowRight
                        className="
                          h-4 w-4
                          transition-all duration-500
                          group-hover:translate-x-1.5
                        "
                      />
                    </div>
                  </div>

                  {/* Bottom Accent */}

                  <div
                    className="
                      absolute bottom-0 left-0
                      h-[3px] w-0
                      bg-primary
                      transition-all duration-700
                      group-hover:w-full
                    "
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};