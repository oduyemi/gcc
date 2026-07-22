"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroSlide } from "./types";

interface HeroContentProps {
  slide: HeroSlide;
  current: number;
}

export const HeroContent = ({slide, current}: HeroContentProps) => {
  return (
    <div className="relative max-w-2xl">
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-24
          top-20
          h-48
          w-48
          rounded-full
          bg-[#22007C]
          blur-3xl
        "
      />
  
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
  
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#22007C]/10
              bg-white/80
              px-5
              py-3
              shadow-lg
              backdrop-blur-sm
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-[#22007C]/5
              "
            >
              <Sparkles className="h-4 w-4 text-[#AF3800]" />
            </div>
  
            <span
              className="
                text-[11px]
                font-black
                uppercase
                tracking-[.28em]
                text-[#22007C]
              "
            >
              {slide.eyebrow}
            </span>
          </motion.div>
  
          {/* ---------- FIRST SLIDE ---------- */}

{current === 0 ? (
  <>
    {/* Floating Badge */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.12 }}
      className="mt-8"
    >
      <div className="inline-flex items-center gap-2 rounded-full bg-[#AF3800] px-5 py-2 shadow-xl">
        <Clock3 className="h-4 w-4 text-white" />

        <span className="text-[11px] font-black uppercase tracking-[.35em] text-white">
          Every Sunday
        </span>
      </div>
    </motion.div>

    {/* Main Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18 }}
      className="
        relative
        mt-8
        text-[3.6rem]
        font-black
        leading-[0.88]
        tracking-[-.08em]
        text-[#22007C]
        sm:text-7xl
      "
    >
      {/* Watermark */}
      <span
        className="
          pointer-events-none
          absolute
          -left-3
          -top-10
          -z-10
          text-[6rem]
          font-black
          tracking-[-.08em]
          text-[#22007C]/5
          sm:text-[8rem]
        "
      >
        SUNDAY
      </span>

      Sunday
      <br />
      Worship Experience
    </motion.h1>

    {/* Premium Divider */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mt-8 flex items-center gap-4"
    >
      <div className="h-px flex-1 bg-[#22007C]/15" />

      <Sparkles className="h-4 w-4 text-[#AF3800]" />

      <div className="h-px w-24 bg-[#AF3800]" />
    </motion.div>

    {/* Time */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="mt-8"
    >
      <div className="flex items-end gap-3">
        <span
          className="
            text-7xl
            font-black
            leading-none
            tracking-[-.08em]
            text-[#22007C]
            sm:text-8xl
          "
        >
          10:30
        </span>

        <span
          className="
            mb-2
            text-2xl
            font-black
            tracking-[.28em]
            text-[#AF3800]
          "
        >
          AM
        </span>
      </div>
    </motion.div>

    {/* Venue + Theme */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.42 }}
      className="mt-8 space-y-5"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#22007C]/5">
          <MapPin className="h-5 w-5 text-[#AF3800]" />
        </div>

        <div>
          <p className="font-bold text-[#22007C]">
            Randolph House
          </p>

          <p className="text-slate-600">
            Zion Place • Margate CT9 1RP
          </p>

          <p className="text-slate-600">
            United Kingdom
          </p>
        </div>
      </div>

      <div className="inline-flex rounded-full border border-[#AF3800]/20 bg-[#AF3800]/5 px-5 py-2">
        <span className="text-xs font-bold uppercase tracking-[.28em] text-[#AF3800]">
          Worship • Word • Prayer • Fellowship
        </span>
      </div>
    </motion.div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-10"
    >
      <Button
        asChild
        className="
          h-14
          rounded-2xl
          bg-[#AF3800]
          px-8
          font-semibold
          shadow-xl
          hover:bg-[#AF3800]/90
        "
      >
        <Link href="/visit">
          Plan Your Visit

          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </motion.div>
  </>
) : (
            <>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="
                  mt-10
                  text-[3.4rem]
                  font-black
                  leading-[0.9]
                  tracking-[-.07em]
                  text-[#22007C]
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                {slide.title}
              </motion.h1>
  
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 90 }}
                transition={{
                  delay: 0.25,
                  duration: 0.6,
                }}
                className="
                  mt-8
                  h-1.5
                  rounded-full
                  bg-[#AF3800]
                "
              />
  
              {slide.subtitle && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="
                    mt-8
                    text-2xl
                    font-semibold
                    leading-snug
                    text-slate-700
                    sm:text-3xl
                  "
                >
                  {slide.subtitle}
                </motion.h2>
              )}
  
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="
                  mt-8
                  max-w-xl
                  text-lg
                  leading-9
                  text-slate-600
                "
              >
                {slide.description}
              </motion.p>
  
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="
                  mt-12
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                "
              >
                <Button
                  asChild
                  className="
                    h-14
                    rounded-2xl
                    bg-[#AF3800]
                    px-8
                    font-semibold
                    shadow-lg
                    hover:bg-[#AF3800]/90
                  "
                >
                  <Link href={slide.primaryButton.href}>
                    {slide.primaryButton.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
  
                <Button
                  variant="outline"
                  asChild
                  className="
                    h-14
                    rounded-2xl
                    border-[#22007C]/15
                    px-8
                    font-semibold
                    text-[#22007C]
                  "
                >
                  <Link href={slide.secondaryButton.href}>
                    {slide.secondaryButton.label}
                  </Link>
                </Button>
              </motion.div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};