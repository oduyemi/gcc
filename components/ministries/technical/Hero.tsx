"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Music4,
  Mic2,
  Radio,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const MusicTechnicalHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Effects */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[35rem] w-[35rem] rounded-full bg-primary/[0.05] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[#AF3800]/[0.05] blur-3xl" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)]
            [background-size:120px_120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr]">
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
              <Sparkles className="h-3.5 w-3.5" />
              Music & Technical Ministry
            </div>

            <h1
              className="
                mt-7
                text-5xl
                font-black
                leading-[0.92]
                tracking-[-0.06em]
                text-foreground
                sm:text-6xl
                lg:text-7xl
              "
            >
              Worship With
              <span className="block text-primary">
                Excellence.
              </span>
              Serve With Purpose.
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
              The Music & Technical Ministry exists to create an
              atmosphere where people can encounter God through worship,
              creativity and excellence. Whether on stage or behind the
              scenes, every gift helps make ministry happen.
            </p>

            {/* CTA Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="
                  h-14
                  rounded-2xl
                  px-8
                  text-base
                  font-bold
                "
              >
                <Link href="/contact">
                  Join The Team

                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="
                  h-14
                  rounded-2xl
                  px-8
                  text-base
                  font-bold
                "
              >
                <Link href="#areas">
                  Explore Ministry Areas
                </Link>
              </Button>
            </div>

            {/* Quick Highlights */}

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div
                className="
                  rounded-2xl
                  border border-primary/10
                  bg-white
                  p-5
                  shadow-sm
                "
              >
                <Mic2 className="h-5 w-5 text-primary" />

                <h3 className="mt-3 font-bold">
                  Worship
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Vocals, musicians and worship leaders.
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border border-primary/10
                  bg-white
                  p-5
                  shadow-sm
                "
              >
                <Music4 className="h-5 w-5 text-primary" />

                <h3 className="mt-3 font-bold">
                  Creativity
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Choir, music and special presentations.
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border border-primary/10
                  bg-white
                  p-5
                  shadow-sm
                "
              >
                <Radio className="h-5 w-5 text-primary" />

                <h3 className="mt-3 font-bold">
                  Production
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Audio, media, livestream and technology.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Images */}

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-5">
              {/* Main Hero Image */}

              <div className="relative col-span-2 h-[420px] overflow-hidden rounded-[2.5rem]">
                <Image
                  src="/images/musichero.jpg"
                  alt="Worship Team"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <div
                    className="
                      rounded-2xl
                      bg-white/95
                      px-5 py-4
                      shadow-xl
                      backdrop-blur-xl
                    "
                  >
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">
                      Our Mission
                    </p>

                    <p className="mt-1 font-semibold">
                      Leading People Into God's Presence
                    </p>
                  </div>
                </div>
              </div>

              {/* Smaller Images */}

              <div className="relative h-56 overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/worshipping.jpg"
                  alt="Choir"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-56 overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/musicianss.jpg"
                  alt="Production Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Scripture Card */}

            <div
              className="
                absolute
                -bottom-6
                left-8
                hidden
                max-w-sm
                rounded-[2rem]
                border border-primary/10
                bg-white
                p-5
                shadow-xl
                lg:block
              "
            >
              <p className="text-sm italic text-muted-foreground">
                “Sing to the Lord a new song; sing to the Lord, all the earth.”
              </p>

              <p className="mt-2 font-bold">
                Psalm 96:1
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};