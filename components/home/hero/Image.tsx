"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Sparkles, Cross, ArrowUpRight } from "lucide-react";
import type { HeroSlide } from "./types";


interface HeroImageProps {
  slide: HeroSlide;
  current: number;
}

export const HeroImage = ({
  slide,
  current,
}: HeroImageProps) => {
  return (
    <div className="relative flex justify-center lg:justify-end lg:pt-10">
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [.18, .28, .18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          right-0
          top-20
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#22007C]/10
          blur-[120px]
        "
      />
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [.15,.25,.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-10
          right-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#AF3800]/10
          blur-[120px]
        "
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{
            opacity:0,
            x:60,
            scale:.96,
          }}
          animate={{
            opacity:1,
            x:0,
            scale:1,
          }}
          exit={{
            opacity:0,
            x:-40,
            scale:.96,
          }}
          transition={{
            duration:.7,
            ease:[0.22,1,0.36,1],
          }}
          className="relative w-full max-w-[620px]"
        >
          <div className="
            absolute
            -inset-5
            rounded-[3rem]
            border
            border-[#22007C]/8
          "/>

          <motion.div
            animate={{
              y:[0,-8,0],
            }}
            transition={{
              duration:8,
              repeat:Infinity,
            }}
            className="
              relative
              overflow-hidden
              rounded-[3rem]
              bg-white
              shadow-[0_45px_120px_rgba(34,0,124,.15)]
            "
          >

            {/* Shine */}
            <motion.div
              animate={{
                x:["-120%","220%"],
              }}
              transition={{
                duration:7,
                repeat:Infinity,
                ease:"linear",
              }}
              className="
                absolute
                inset-y-0
                z-20
                w-[18%]
                bg-gradient-to-r
                from-transparent
                via-white/40
                to-transparent
                blur-xl
              "
            />

            <div className="relative aspect-[4/5]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={current===0}
                className="object-cover object-top"
              />

              {/* subtle overlay */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#22007C]/10
                via-transparent
                to-transparent
              "/>
            </div>
          </motion.div>

          {/* GCC Badge */}
          <motion.div
            animate={{
              y:[0,-10,0],
            }}
            transition={{
              duration:4,
              repeat:Infinity,
            }}
            className="
              absolute
              left-[-20px]
              top-10
              rounded-2xl
              bg-white
              px-5
              py-4
              shadow-xl
            "
          >
            <div className="flex items-center gap-3">
                <div className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#22007C]/5"
                >
                    <Sparkles className="h-5 w-5 text-[#AF3800]" />
                </div>
            <div>
                <p className="text-[10px] font-black tracking-[.3em] uppercase text-[#AF3800]">
                  {slide.badge}
                </p>

                <p className="mt-1 font-bold text-[#22007C]">
                  {slide.service}
                </p>
            </div>
        </div>
        </motion.div>
            {slide.scripture && (
                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                className="
                    absolute
                    -left-8
                    bottom-24
                    max-w-xs
                    rounded-3xl
                    bg-white
                    p-6
                    shadow-2xl
                "
                >
                <Quote className="h-6 w-6 text-[#AF3800]" />
                <p className="
                    mt-4
                    text-sm
                    italic
                    leading-7
                    text-slate-600
                ">
                    "{slide.scripture.verse}"
                </p>
                <p className="
                    mt-4
                    text-xs
                    font-black
                    uppercase
                    tracking-[.25em]
                    text-[#22007C]
                ">
                    {slide.scripture.reference}
                </p>
            </motion.div>
          )}

          {/* Floating Vision Card */}
          <motion.div
            animate={{
              y:[0,10,0],
            }}
            transition={{
              duration:5,
              repeat:Infinity,
            }}
            className="
              absolute
              -bottom-10
              right-4
              rounded-[2rem]
              bg-white
              px-7
              py-6
              shadow-[0_25px_60px_rgba(0,0,0,.12)]
              max-w-sm
            "
          >
            <div className="flex items-center gap-3">
                <div className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#AF3800]/10"
                >
                    <Cross className="h-5 w-5 text-[#AF3800]" />
                </div>
            <div>
                <p className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[.3em]
                  text-[#AF3800]"
                >
                  OUR VISION
                </p>
                <h3 className="
                  mt-1
                  text-lg
                  font-bold
                  text-[#22007C]
                ">
                  {slide.floatingTitle}
                </h3>

            </div>

        </div>
        <p className="
            mt-5
            text-sm
            leading-7
            text-slate-600"
        >
            {slide.floatingDescription}
                </p>
                    <button className="
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-[#22007C]
                    ">
                    Learn More
                    <ArrowUpRight className="h-4 w-4"/>
                    </button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    </div>
  );
};