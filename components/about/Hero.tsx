"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  Globe2,
  Flame,
  ArrowDown,
} from "lucide-react";

export const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[35rem] w-[35rem] rounded-full bg-primary/[0.04] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-accent/[0.05] blur-3xl" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)]
            [background-size:120px_120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-primary/10
                bg-primary/5
                px-4 py-2
                text-[11px]
                font-black
                uppercase
                tracking-[0.25em]
                text-primary
              "
            >
              <Heart className="h-3.5 w-3.5" />
              About Global Crossfire Church
            </div>

            <h1
              className="
                mt-7
                text-5xl
                font-black
                leading-[0.95]
                tracking-[-0.06em]
                text-foreground
                sm:text-6xl
                lg:text-7xl
              "
            >
              A Church Raising
              <span className="block text-primary">
                People Of Fire,
              </span>
              Faith & Purpose
            </h1>

            <p
              className="
                mt-7
                max-w-2xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              Global Crossfire Church exists to help people encounter
              Jesus, grow in faith, discover purpose, and impact their
              world through the power of the Holy Spirit.
            </p>

            {/* Stats */}

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div
                className="
                  rounded-[1.75rem]
                  border border-primary/10
                  bg-white
                  p-5
                  shadow-sm
                "
              >
                <Flame className="h-5 w-5 text-primary" />

                <h3 className="mt-4 text-2xl font-black">
                  Spirit-Filled
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Worship, prayer and revival culture.
                </p>
              </div>

              <div
                className="
                  rounded-[1.75rem]
                  border border-primary/10
                  bg-white
                  p-5
                  shadow-sm
                "
              >
                <Heart className="h-5 w-5 text-primary" />

                <h3 className="mt-4 text-2xl font-black">
                  Family
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  A welcoming community for everyone.
                </p>
              </div>

              <div
                className="
                  rounded-[1.75rem]
                  border border-primary/10
                  bg-white
                  p-5
                  shadow-sm
                "
              >
                <Globe2 className="h-5 w-5 text-primary" />

                <h3 className="mt-4 text-2xl font-black">
                  Nations
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Reaching communities locally and globally.
                </p>
              </div>
            </div>

            {/* Scroll Indicator */}

            <div className="mt-10 hidden items-center gap-3 lg:flex">
              <div className="h-px w-16 bg-primary/20" />

              <ArrowDown className="h-4 w-4 text-primary" />

              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                Discover Our Story
              </span>
            </div>
          </motion.div>

          {/* Right Images */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-5">
              {/* Large */}

              <div className="relative col-span-2 h-[420px] overflow-hidden rounded-[2.5rem]">
                <Image
                  src="/images/about/about-1.jpg"
                  alt="Church worship"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <div
                    className="
                      rounded-2xl
                      bg-white/95
                      px-5 py-4
                      shadow-lg
                      backdrop-blur-xl
                    "
                  >
                    <p className="text-xs font-black tracking-[0.22em] uppercase text-primary">
                      Our Mission
                    </p>

                    <p className="mt-1 font-semibold">
                      Encounter God. Build People.
                    </p>
                  </div>
                </div>
              </div>

              {/* Small Image */}

              <div className="relative h-60 overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/about/about-2.jpg"
                  alt="Church family"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Small Image */}

              <div className="relative h-60 overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/about/about-3.jpg"
                  alt="Church community"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Card */}

            <div
              className="
                absolute
                -bottom-6
                left-8
                hidden
                rounded-[2rem]
                border border-primary/10
                bg-white
                p-5
                shadow-xl
                lg:block
              "
            >
              <p className="text-xs font-black tracking-[0.22em] uppercase text-primary">
                Since
              </p>

              <h4 className="mt-2 text-3xl font-black">
                2004
              </h4>

              <p className="text-sm text-muted-foreground">
                Serving people and nations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};