"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, MoveUpRight } from "lucide-react";


const YOUTH_VIDEO = "https://res.cloudinary.com/dymd1jkbl/video/upload/v1786698834/gcc/video/youth_d0f3ev.mp4";



export const YouthFeature = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
              Youth Ministry
            </span>
          </div>

          <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2
              className="
                max-w-3xl
                text-4xl
                font-black
                leading-[0.92]
                tracking-[-0.06em]
                md:text-5xl
                lg:text-6xl
              "
            >
              A generation
              <br />
              <span className="text-muted-foreground">
                becoming.
              </span>
            </h2>

            <div className="max-w-xs md:text-right">
              <p className="text-xs font-semibold leading-6 text-muted-foreground">
                Faith, friendship, purpose and a
                place to discover who God has called
                you to become.
              </p>
            </div>
          </div>
        </motion.div>

            {/* MAIN FEATURE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            relative
            overflow-hidden
            rounded-[2.75rem]
            bg-neutral-950
            md:rounded-[3rem]
            lg:rounded-[3.5rem]
          "
        >
              {/* ATMOSPHERIC BACKGROUND */}
          <video
            src={YOUTH_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="
              absolute
              inset-0
              h-full
              w-full
              scale-[1.18]
              object-cover
              opacity-35
              blur-[45px]
            "
          />

          <div className="absolute inset-0 bg-foreground" />

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.65)_100%)]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-black/60
              via-transparent
              to-black/80
            "
          />

              {/* DECORATIVE NUMBER */}
          <div
            className="
              pointer-events-none
              absolute
              -right-5
              top-[-2.5rem]
              select-none
              text-[12rem]
              font-black
              leading-none
              tracking-[-0.1em]
              text-white/[0.045]
              md:text-[18rem]
              lg:text-[22rem]
            "
          >
            01
          </div>

              {/* FEATURE CONTENT */}
          <div
            className="
              relative
              z-10
              px-5
              pb-8
              pt-6
              md:px-10
              md:pb-12
              md:pt-9
              lg:px-14
              lg:pb-14
              lg:pt-12
            "
          >

            {/* Top metadata */}
            <div className="mb-7 flex items-center justify-between md:mb-9">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.08]
                  px-3.5
                  py-2
                  backdrop-blur-xl
                "
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
                  <Sparkles className="h-3 w-3" />
                </span>

                <span className="text-[9px] font-black uppercase tracking-[0.24em] text-white/75">
                  The Next Generation
                </span>
              </div>

              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">
                GCC / 01
              </span>
            </div>

                {/* VIDEO STAGE */}
            <div className="relative flex justify-center">

              {/* Ambient glow */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[80%]
                  w-[55%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-white/[0.07]
                  blur-[80px]
                "
              />

              {/* Video frame */}
              <div
                className="
                  group/video
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/15
                  bg-black/30
                  shadow-[0_35px_100px_rgba(0,0,0,0.55)]
                  backdrop-blur-sm
                  md:rounded-[2.5rem]
                "
              >
                <video
                  src={YOUTH_VIDEO}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="
                    block
                    max-h-[31rem]
                    max-w-full
                    object-contain
                    transition-transform
                    duration-[1400ms]
                    group-hover/video:scale-[1.015]
                    md:max-h-[37rem]
                    lg:max-h-[41rem]
                  "
                />

                {/* Inner highlight */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[2rem]
                    ring-1
                    ring-inset
                    ring-white/10
                    md:rounded-[2.5rem]
                  "
                />

                {/* Playing status */}
                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/15
                    bg-black/55
                    px-3
                    py-2
                    backdrop-blur-xl
                  "
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60" />
                    <span className="relative h-2 w-2 rounded-full bg-white" />
                  </span>

                  <span className="text-[8px] font-black uppercase tracking-[0.22em] text-white/75">
                    Playing
                  </span>
                </div>
              </div>

              {/* Floating side badge */}
              <div
                className="
                  absolute
                  -right-1
                  top-1/2
                  hidden
                  -translate-y-1/2
                  translate-x-1/2
                  rotate-90
                  items-center
                  gap-3
                  lg:flex
                "
              >
                <span className="h-px w-10 bg-white/20" />

                <span className="text-[8px] font-black uppercase tracking-[0.35em] text-white/35">
                  Global Crossfire Youth
                </span>
              </div>
            </div>

                {/* COPY + CTA */}
            <div
              className="
                mt-10
                flex
                flex-col
                gap-7
                md:mt-14
                md:flex-row
                md:items-end
                md:justify-between
                lg:mt-16
              "
            >
              <div className="max-w-2xl">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/35">
                  Growing · Believing · Becoming
                </p>

                <h3
                  className="
                    mt-3
                    text-4xl
                    font-black
                    leading-[0.94]
                    tracking-[-0.06em]
                    text-white
                    md:text-5xl
                    lg:text-[3.5rem]
                  "
                >
                  Faith that meets
                  <br />
                  <span className="text-white/40">
                    the next generation.
                  </span>
                </h3>
              </div>

              <div className="flex shrink-0 flex-col items-start gap-4 md:items-end">
                <p className="max-w-sm text-left text-xs leading-6 text-white/45 md:text-right">
                  A place to encounter Christ,
                  build meaningful friendships,
                  discover purpose and grow.
                </p>

                <Link
                  href="/ministries/youth"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-primary
                    px-6
                    py-3.5
                    text-sm
                    font-white
                    text-white
                    transition-all
                    duration-300
                    hover:gap-4
                    hover:bg-primary/90
                  "
                >
                  Explore Youth Ministry

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:rotate-45
                    "
                  />
                </Link>
              </div>
            </div>
          </div>

              {/* BOTTOM EDITORIAL LINE */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="h-px bg-white/10" />

            <div className="flex items-center justify-between px-6 py-4 md:px-10">
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/25">
                Global Crossfire Church UK
              </span>

              <span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.3em] text-white/25">
                <Link href="/about" className="inline">
                    Discover more
                    <MoveUpRight className="h-3 w-3 inline" />
                </Link>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};