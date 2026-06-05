"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Music4,
  Mic2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";



export const JoinMusicTechnicalCTA = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[3rem]
            shadow-2xl
          "
        >
          <div className="absolute inset-0">
            <Image
              src="/images/join-tea.jpg"
              alt="Music and Technical Ministry"
              fill
              className="object-cover"
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-r
                from-[#22007C]/95
                via-[#22007C]/85
                to-black/70
              "
            />
          </div>

          {/* Decorative Glow */}

          <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#AF3800]/20 blur-3xl" />

          {/* Content */}

          <div className="relative z-10 px-8 py-20 md:px-12 lg:px-20 lg:py-24">
            <div className="max-w-4xl">
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-white/20
                  bg-white/10
                  px-4 py-2
                  text-[11px]
                  font-black
                  uppercase
                  tracking-[0.25em]
                  text-white
                  backdrop-blur
                "
              >
                <Sparkles className="h-3.5 w-3.5" />
                Join The Team
              </div>

              <h2
                className="
                  mt-8
                  text-5xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-white
                  md:text-6xl
                "
              >
                Use Your Gifts
                <span className="block text-white/80">
                  To Serve God's House
                </span>
              </h2>

              <p
                className="
                  mt-8
                  max-w-3xl
                  text-lg
                  leading-8
                  text-white/80
                "
              >
                Whether you sing, play an instrument, operate cameras,
                manage sound, support livestreams or simply have a heart
                to serve, there is a place for you in the Music &
                Technical Ministry.
              </p>

              {/* Feature Pills */}

              <div className="mt-10 flex flex-wrap gap-3">
                <div
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    bg-white/10
                    px-4 py-2
                    text-sm
                    text-white
                    backdrop-blur
                  "
                >
                  <Mic2 className="h-4 w-4" />
                  Worship
                </div>

                <div
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    bg-white/10
                    px-4 py-2
                    text-sm
                    text-white
                    backdrop-blur
                  "
                >
                  <Music4 className="h-4 w-4" />
                  Production
                </div>

                <div
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    bg-white/10
                    px-4 py-2
                    text-sm
                    text-white
                    backdrop-blur
                  "
                >
                  <Sparkles className="h-4 w-4" />
                  Creativity
                </div>
              </div>

              {/* Buttons */}

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="
                    h-14
                    rounded-2xl
                    bg-white
                    px-8
                    text-base
                    font-bold
                    text-primary
                    hover:bg-white/90
                  "
                >
                  <Link href="/contact">
                    Join The Team

                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="
                    h-14
                    rounded-2xl
                    border-white/30
                    bg-white/10
                    px-8
                    text-base
                    font-bold
                    text-white
                    backdrop-blur
                    hover:bg-white/20
                  "
                >
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>

              {/* Scripture */}

              <div
                className="
                  mt-14
                  max-w-3xl
                  rounded-[2rem]
                  border border-white/10
                  bg-white/10
                  p-6
                  backdrop-blur-xl
                "
              >
                <p className="text-lg italic leading-8 text-white/90">
                  “Let everything that has breath praise the Lord.
                  Praise the Lord.”
                </p>

                <p className="mt-3 font-bold text-white">
                  Psalm 150:6
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};