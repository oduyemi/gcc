"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Flame,
  Globe2,
  HeartHandshake,
  PlayCircle,
  Calendar,
  Sparkles,
  Users2,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const highlights = [
  {
    title: "Authentic Community",
    icon: Users2,
    image: "/images/comm.jpg",
  },
  {
    title: "Global Vision",
    icon: Globe2,
    image: "/images/missions.jpg",
  },
  {
    title: "Spirit-Filled Worship",
    icon: Flame,
    image: "/images/worship.jpg",
  },
];

export const Intro = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-5%] h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl" />

        <div
          className="
          absolute inset-0
          bg-[linear-gradient(rgba(30,41,59,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.03)_1px,transparent_1px)]
          [background-size:120px_120px]
        "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT SIDE */}
          <div>
            {/* LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="
              mb-7 inline-flex items-center gap-3
              rounded-full
              border border-white/30
              bg-white/60
              px-5 py-2.5
              backdrop-blur-2xl
              shadow-[0_10px_50px_rgba(255,255,255,0.18)]
            "
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
              </div>

              <span className="text-[11px] font-black tracking-[0.32em] uppercase">
                Welcome Home
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
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
              A Global Church
              <br />
              Raising People
              <br />
              Of <span className="text-primary">Purpose & Fire</span>
            </motion.h2>

            {/* SHORT DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="
              mt-7
              max-w-2xl
              text-lg
              leading-9
              text-muted-foreground
            "
            >
              Global Crossfire Church UK is a vibrant Spirit-filled church in
              the United Kingdom where people encounter God, grow in faith,
              and build meaningful community.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              viewport={{ once: true }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                asChild
                className="
                group
                h-14
                rounded-2xl
                bg-primary
                px-8
                text-sm font-bold
                text-white
                shadow-[0_15px_60px_rgba(216,164,91,0.28)]
                transition-all duration-500
                hover:-translate-y-1
                hover:bg-primary/90
              "
              >
                <Link href="/about">
                  Discover GCC

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>

              <Link href="/events">
                <Button
                  variant="outline"
                  className="
                  h-14
                  rounded-2xl
                  border-white/30
                  bg-white/60
                  px-8
                  text-sm font-semibold
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:bg-white/80
                "
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  View Church Calendar
                </Button>
              </Link>
            </motion.div>

            {/* LOCATION */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="
              mt-10
              inline-flex
              items-start
              gap-4
              rounded-[1.8rem]
              border border-white/30
              bg-white/60
              p-5
              backdrop-blur-2xl
            "
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>

              <div>
                <p className="text-xs font-black tracking-[0.25em] uppercase text-primary">
                  Join Us In Margate
                </p>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Randolph House, Zion Place,
                  <br />
                  Margate, CT9 1RP • United Kingdom
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {/* LARGE CARD */}
            <Link
              href="/about"
              className="
              group
              relative
              overflow-hidden
              rounded-[2.5rem]
              border border-white/30
              sm:col-span-2
            "
            >
              <div className="relative h-[340px]">
                <Image
                  src="/images/family.jpg"
                  alt="Global Crossfire Church"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
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
                    <HeartHandshake className="h-4 w-4 text-white" />

                    <span className="text-[11px] font-black tracking-[0.22em] uppercase text-white">
                      Global Crossfire Church UK
                    </span>
                  </div>

                  <h3
                    className="
                    mt-5
                    text-3xl
                    font-black
                    leading-tight
                    tracking-[-0.05em]
                    text-white
                  "
                  >
                    More Than A Church.
                    <br />
                    A Family.
                  </h3>
                </div>
              </div>
            </Link>

            {/* SMALL CARDS */}
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
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
                    border border-white/30
                    bg-white/50
                    backdrop-blur-2xl
                  "
                  >
                    <div className="relative h-[230px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-xl">
                          <Icon className="h-5 w-5 text-white" />
                        </div>

                        <h4 className="mt-4 text-xl font-black text-white">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};