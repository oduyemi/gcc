"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const MinistriesHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Atmosphere */}

      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[42rem] w-[42rem] rounded-full bg-primary/[0.05] blur-[140px]" />

        <div className="absolute right-[-10%] bottom-[-10%] h-[40rem] w-[40rem] rounded-full bg-[#AF3800]/[0.05] blur-[140px]" />

        <div className="absolute left-1/3 top-1/3 h-[25rem] w-[25rem] rounded-full bg-purple-300/[0.05] blur-[120px]" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)]
            [background-size:120px_120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_1fr]">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}

            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-primary/15
                bg-white/70
                px-5 py-2.5
                shadow-lg
                backdrop-blur-xl
              "
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />

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

            {/* Heading */}

            <h1
              className="
                mt-8
                text-5xl
                font-black
                leading-[0.92]
                tracking-[-0.07em]
                text-slate-900
                sm:text-6xl
                lg:text-7xl
              "
            >
              Find Your
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-primary
                  to-[#d6a05a]
                  bg-clip-text
                  text-transparent
                "
              >
                Place To Belong
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              Whether you're a man, woman, young adult, teenager,
              child, musician, worship leader or prayer warrior,
              there's a ministry designed to help you connect,
              grow spiritually and serve with purpose.
            </p>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="
                  group
                  h-14
                  rounded-2xl
                  bg-primary
                  px-8
                  text-base
                  shadow-[0_15px_50px_rgba(216,164,91,0.35)]
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:bg-[#d6a05a]
                "
              >
                <Link href="#ministries">
                  Explore Ministries

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="
                  h-14
                  rounded-2xl
                  border-primary/15
                  bg-white/70
                  px-8
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:bg-white
                  hover:-translate-y-1
                "
              >
                <Link href="/visit">
                  Plan Your Visit
                </Link>
              </Button>
            </div>

            {/* Feature Points */}

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                "Build Relationships",
                "Grow Spiritually",
                "Serve Purposefully",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex items-center gap-3
                    rounded-2xl
                    border border-primary/10
                    bg-white/70
                    px-4 py-4
                    shadow-sm
                    backdrop-blur-xl
                  "
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />

                  <span className="text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}

            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-black text-primary">10+</p>
                <p className="text-sm text-slate-500">
                  Active Ministries
                </p>
              </div>

              <div>
                <p className="text-3xl font-black text-primary">500+</p>
                <p className="text-sm text-slate-500">
                  Members Connected
                </p>
              </div>

              <div>
                <p className="text-3xl font-black text-primary">Every Week</p>
                <p className="text-sm text-slate-500">
                  Opportunities To Serve
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGES */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-5">
              {/* Main Image */}

              <div className="relative col-span-2 overflow-hidden rounded-[3rem]">
                <div className="relative h-[450px]">
                  <Image
                    src="/images/ministriesHeroMain.jpg"
                    alt="Church ministries"
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-[2000ms]
                      hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  <div className="absolute bottom-8 left-8">
                    <div
                      className="
                        rounded-[1.8rem]
                        border border-white/20
                        bg-white/90
                        px-6 py-5
                        shadow-2xl
                        backdrop-blur-xl
                      "
                    >
                      <p className="text-xs font-black uppercase tracking-[0.25em] text-primary">
                        Community
                      </p>

                      <p className="mt-2 text-lg font-bold text-slate-900">
                        Growing Together In Christ
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image 2 */}

              <div className="relative h-64 overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/ministriesHero1.jpg"
                  alt="Youth ministry"
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-1000
                    hover:scale-110
                  "
                />
              </div>

              {/* Image 3 */}

              <div className="relative h-64 overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/ministriesHero2.jpg"
                  alt="Church fellowship"
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-1000
                    hover:scale-110
                  "
                />
              </div>
            </div>

            {/* Floating Ministry Card */}

            <div
              className="
                absolute
                -bottom-8
                left-8
                hidden
                lg:block
              "
            >
              <div
                className="
                  rounded-[2rem]
                  border border-white/30
                  bg-white/90
                  px-6 py-5
                  shadow-[0_25px_80px_rgba(0,0,0,0.12)]
                  backdrop-blur-2xl
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex h-14 w-14 items-center justify-center
                      rounded-[1.2rem]
                      bg-primary/10
                    "
                  >
                    <HeartHandshake className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">
                      Ministry Life
                    </p>

                    <p className="mt-1 font-bold text-slate-900">
                      Connect • Grow • Serve
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stat */}

            <div
              className="
                absolute
                -right-4
                top-12
                hidden
                xl:block
              "
            >
              <div
                className="
                  rounded-[2rem]
                  border border-white/30
                  bg-white/90
                  px-6 py-5
                  shadow-xl
                  backdrop-blur-xl
                "
              >
                <p className="text-4xl font-black text-primary">
                  10+
                </p>

                <p className="text-sm font-semibold text-slate-600">
                  Ministries
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};