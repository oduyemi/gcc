"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Sparkles, Cross, ArrowUpRight } from "lucide-react";
import type { HeroSlide } from "./types";
import Link from "next/link";


interface HeroImageProps {
  slide: HeroSlide;
  current: number;
}

export const HeroImage = ({
  slide,
  current,
}: HeroImageProps) => {
  return (
    <div className="relative flex justify-center lg:justify-end lg:pt-6">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          right-6
          top-20
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#22007C]/10
          blur-[120px]
        "
      />
  
      {/* Accent Ring */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          right-10
          top-12
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-[#AF3800]/15
        "
      />
  
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{
            opacity: 0,
            x: 60,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: -40,
            scale: 0.96,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full max-w-[740px]"
        >
          {/* Watermark */}
          <div
            className="
              pointer-events-none
              absolute
              -left-16
              top-10
              -z-10
              select-none
              text-[8rem]
              font-black
              leading-none
              tracking-[-0.08em]
              text-[#22007C]/5
            "
          >
            Crossfire 
          </div>
  
          {/* Offset Frame */}
          <div className="relative">
            <div
              className="
                absolute
                inset-0
                translate-x-5
                translate-y-5
                rounded-[3rem]
                border
                border-[#22007C]/8
              "
            />
  
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              className="
                relative
                overflow-hidden
                rounded-[3rem]
                bg-white/80
                backdrop-blur-sm
                border border-white/50
                p-4
                shadow-[0_70px_140px_rgba(34,0,124,.18),0_20px_40px_rgba(0,0,0,.08)]
              "
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.4rem]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={current === 0}
                  className="
                    object-cover object-center scale-[1.03]
                    transition-transform duration-[6000ms]
                    group-hover:scale-[1.07]"
                />
  
                {/* Editorial Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#22007C]/18
                    via-transparent
                    to-transparent
                  "
                />
  
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/5
                    via-transparent
                    to-transparent
                  "
                />
  
                {/* Spotlight */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_center,transparent_35%,rgba(34,0,124,.12))]
                  "
                />
              </div>
            </motion.div>
          </div>
              {/* Premium Floating Scripture Card */}
              {slide.scripture && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                  rotate: -2,
                }}
                animate={{
                  opacity: 1,
                  y: [0, -3, 0],
                  rotate: [-1, 0.5, -1],
                }}
                transition={{
                  opacity: {
                    duration: 0.6,
                  },
                  y: {
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="
                  absolute
                  -bottom-10
                  right-8
                  z-20
                  w-[340px]
                "
              >
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-white/60
                    bg-white/70
                    p-7
                    shadow-[0_30px_80px_rgba(34,0,124,.16),0_10px_30px_rgba(0,0,0,.08)]
                    backdrop-blur-2xl
                    hidden
                    md:block
                  "
                >
                  {/* Accent Bar */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-1.5
                      w-full
                      bg-gradient-to-r
                      from-[#22007C]
                      via-[#AF3800]
                      to-[#22007C]
                    "
                  />

                  {/* Decorative Dot */}
                  <div
                    className="
                      absolute
                      right-6
                      top-6
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-[#AF3800]
                    "
                  />

                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#22007C]/5
                      "
                    >
                      <Quote className="h-5 w-5 text-[#AF3800]" />
                    </div>

                    <div>
                      <p
                        className="
                          text-[10px]
                          font-black
                          uppercase
                          tracking-[0.35em]
                          text-[#AF3800]
                        "
                      >
                        Featured Scripture
                      </p>

                      <p className="mt-1 font-bold text-[#22007C]">
                        {slide.service}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-[#22007C]/10" />

                    <Sparkles className="h-4 w-4 text-[#AF3800]" />

                    <div className="h-px w-10 bg-[#AF3800]" />
                  </div>

                  {/* Scripture */}
                  <blockquote
                    className="
                      mt-6
                      text-[16px]
                      italic
                      leading-8
                      text-slate-600
                    "
                  >
                    “{slide.scripture.verse}”
                  </blockquote>

                  <p
                    className="
                      mt-6
                      text-xs
                      font-black
                      uppercase
                      tracking-[0.28em]
                      text-[#22007C]
                    "
                  >
                    {slide.scripture.reference}
                  </p>

                  {/* Footer */}
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
                        Join Us
                      </p>

                      <p className="mt-1 font-semibold text-[#22007C]">
                        Sunday • 10:30 AM
                      </p>
                    </div>

                    <Link
                      href="/visit"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[#22007C]/5
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-[#22007C]
                        transition-all
                        hover:bg-[#AF3800]
                        hover:text-white
                      "
                    >
                      Plan Your Visit

                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>            
            )}
          </motion.div>
        </AnimatePresence>
    </div>
  );
};