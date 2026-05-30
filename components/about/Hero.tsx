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
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[40rem] w-[40rem] rounded-full bg-primary/[0.05] blur-3xl" />

        <div className="absolute right-[-10%] bottom-[-10%] h-[35rem] w-[35rem] rounded-full bg-[#AF3800]/[0.05] blur-3xl" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)]
            [background-size:120px_120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:px-8 lg:px-12 lg:py-36">
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_1.05fr]">
          {/* LEFT */}

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
                border border-primary/10
                bg-white
                px-5 py-3
                shadow-sm
              "
            >
              <Heart className="h-4 w-4 text-primary" />

              <span
                className="
                  text-[11px]
                  font-black
                  uppercase
                  tracking-[0.28em]
                  text-primary
                "
              >
                About Global Crossfire Church
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                mt-4
                text-5xl
                font-black
                leading-[0.9]
                tracking-[-0.07em]
                text-foreground
                sm:text-6xl
                lg:text-[5.5rem]
              "
            >
              Raising
              <span className="relative mx-2 inline-block text-primary">
                Fire-Filled
              </span>

              People For
              <br />

              <span className="relative inline-block">
                God's Purpose
              </span>

              <span className="text-[#AF3800]">.</span>
            </h1>

            {/* Description */}

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              Global Crossfire Church exists to help people encounter
              Jesus, grow in faith, discover purpose, and impact their
              generation through the power of the Holy Spirit.
            </p>

            {/* Mission Highlights */}

            <div className="mt-10 flex flex-wrap gap-4">
              <div
                className="
                  inline-flex items-center gap-3
                  rounded-2xl
                  border border-primary/10
                  bg-white
                  px-5 py-4
                  shadow-sm
                "
              >
                <Flame className="h-5 w-5 text-primary" />

                <span className="font-semibold">
                  Spirit-Filled Worship
                </span>
              </div>

              <div
                className="
                  inline-flex items-center gap-3
                  rounded-2xl
                  border border-primary/10
                  bg-white
                  px-5 py-4
                  shadow-sm
                "
              >
                <Heart className="h-5 w-5 text-primary" />

                <span className="font-semibold">
                  Authentic Community
                </span>
              </div>

              <div
                className="
                  inline-flex items-center gap-3
                  rounded-2xl
                  border border-primary/10
                  bg-white
                  px-5 py-4
                  shadow-sm
                "
              >
                <Globe2 className="h-5 w-5 text-primary" />

                <span className="font-semibold">
                  Reaching Nations
                </span>
              </div>
            </div>

            {/* Scroll Indicator */}

            <div className="mt-12 hidden items-center gap-4 lg:flex">
              <div className="h-px w-16 bg-primary/20" />

              <ArrowDown className="h-4 w-4 text-primary" />

              <span
                className="
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.25em]
                  text-muted-foreground
                "
              >
                Discover Our Story
              </span>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Main Image */}

            <div
              className="
                relative
                h-[620px]
                overflow-hidden
                rounded-[3rem]
                shadow-[0_35px_80px_rgba(0,0,0,0.12)]
              "
            >
              <Image
                src="/images/abthero.jpg"
                alt="Global Crossfire Church"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Floating Mission Card */}

            <div
              className="
                absolute
                bottom-8
                left-8
                max-w-sm
                rounded-[2rem]
                border border-white/20
                bg-white/95
                p-6
                shadow-2xl
                backdrop-blur-xl
              "
            >
              <p
                className="
                  text-[11px]
                  font-black
                  uppercase
                  tracking-[0.25em]
                  text-primary
                "
              >
                Our Mission
              </p>

              <h3
                className="
                  mt-3
                  text-2xl
                  font-black
                  leading-tight
                "
              >
                Encounter God.
                <br />
                Build People.
                <br />
                Transform Communities.
              </h3>
            </div>

            {/* Floating Image 1 */}

            <div
              className="
                absolute
                -left-12
                top-12
                hidden
                h-56
                w-44
                overflow-hidden
                rounded-[2rem]
                border-8 border-white
                shadow-2xl
                lg:block
              "
            >
              <Image
                src="/images/fam.jpg"
                alt="Church Family"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Image 2 */}

            <div
              className="
                absolute
                -right-12
                bottom-24
                hidden
                h-52
                w-40
                overflow-hidden
                rounded-[2rem]
                border-8 border-white
                shadow-2xl
                lg:block
              "
            >
              <Image
                src="/images/church-community.jpg"
                alt="Church Community"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Ring */}

            <div
              className="
                absolute
                -right-20
                top-20
                hidden
                h-64
                w-64
                rounded-full
                border
                border-primary/10
                lg:block
              "
            />

            <div
              className="
                absolute
                -left-20
                bottom-10
                hidden
                h-40
                w-40
                rounded-full
                border
                border-[#AF3800]/10
                lg:block
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};