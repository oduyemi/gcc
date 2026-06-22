"use client";
import Link from "next/link";
import {
  ArrowRight,
  Church,
  Compass,
  Home,
  Laugh,
  Search,
  Sparkles,
  Stars,
  WandSparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const floating = {
  duration: 8,
  repeat: Infinity,
  repeatType: "mirror" as const,
  ease: "easeInOut",
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 sm:px-6">
      {/* =========================
          ULTRA PREMIUM BACKGROUND
      ========================== */}

      {/* mesh atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),transparent_30%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(216,164,91,0.16),transparent_25%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(233,199,255,0.18),transparent_32%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.92),transparent_40%)]" />

      {/* ambient orbs */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[5%] top-[10%] h-[450px] w-[450px] rounded-full bg-primary/15 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[5%] right-[5%] h-[400px] w-[400px] rounded-full bg-accent/20 blur-3xl"
      />

      {/* grid glow */}
      <div
        className="
        absolute inset-0 opacity-[0.04]
        [background-image:linear-gradient(rgba(30,41,59,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.5)_1px,transparent_1px)]
        [background-size:90px_90px]
      "
      />

      {/* floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.4,
          }}
          className={`
            absolute rounded-full bg-primary/50 blur-[1px]
            ${i % 2 === 0 ? "h-2 w-2" : "h-3 w-3"}
          `}
          style={{
            left: `${10 + i * 8}%`,
            top: `${10 + ((i * 7) % 70)}%`,
          }}
        />
      ))}

      {/* =========================
          MAIN GLASS CONTAINER
      ========================== */}

      <motion.section
        initial={{ opacity: 0, scale: 0.96, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
        relative z-10
        mx-auto w-full max-w-7xl
        overflow-hidden
        rounded-[2.8rem]
        border border-white/30
        bg-white/[0.45]
        shadow-[0_30px_120px_rgba(216,164,91,0.10)]
        backdrop-blur-[28px]
      "
      >
        {/* overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_30%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(233,199,255,0.18),transparent_35%)]" />

        <div className="absolute inset-0 rounded-[2.8rem] ring-1 ring-inset ring-white/25" />

        {/* animated shine */}
        <motion.div
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
          absolute inset-y-0 w-[30%]
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          blur-2xl
        "
        />

        <div className="relative z-10 grid gap-16 px-6 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-16 lg:py-16">
          {/* =========================
              LEFT SIDE
          ========================== */}

          <div className="flex flex-col justify-center">
            {/* badge */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.15 }}
              className="
              mb-8 inline-flex w-fit items-center gap-2
              rounded-full
              border border-white/40
              bg-white/70
              px-5 py-2.5
              text-[11px]
              font-black uppercase tracking-[0.3em]
              text-primary
              shadow-[0_10px_30px_rgba(216,164,91,0.10)]
              backdrop-blur-xl
            "
            >
              <Sparkles className="h-3.5 w-3.5" />
              Divine Navigation Failure
            </motion.div>

            {/* 404 */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.25 }}
              className="relative"
            >
              <motion.h1
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                relative z-10
                text-[5.5rem]
                font-black
                leading-none
                tracking-[-0.09em]
                text-slate-800
                sm:text-[7rem]
                lg:text-[9rem]
              "
              >
                404
              </motion.h1>

              {/* layered glow */}
              <div className="absolute left-10 top-10 h-44 w-44 rounded-full bg-primary/20 blur-3xl" />

              <div className="absolute left-20 top-20 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />

              {/* floating icon */}
              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="
                absolute right-0 top-4
                rounded-[1.6rem]
                border border-white/30
                bg-white/70
                p-4
                shadow-[0_10px_40px_rgba(216,164,91,0.14)]
                backdrop-blur-xl
              "
              >
                <Laugh className="h-7 w-7 text-primary" />
              </motion.div>
            </motion.div>

            {/* title */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.35 }}
            >
              <h2
                className="
                max-w-3xl
                text-4xl
                font-black
                leading-[1.05]
                tracking-[-0.05em]
                text-slate-800
                sm:text-5xl
                lg:text-6xl
              "
              >
                This page has apparently
                <span className="relative ml-3 inline-block text-primary">
                  gone missing.

                  <motion.span
                    animate={{
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-primary/20"
                  />
                </span>
              </h2>
            </motion.div>

            {/* description */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.45 }}
              className="
              mt-8 max-w-2xl
              space-y-5
              text-[15px]
              leading-8
              text-slate-600
            "
            >
              <p>
                We checked the church office, searched the media department,
                refreshed the livestream, consulted the ushers,
                and even asked the intercessory team...
              </p>

              <div
                className="
                rounded-[1.8rem]
                border border-white/30
                bg-white/[0.55]
                p-5
                backdrop-blur-xl
              "
              >
                <p className="font-semibold text-slate-700">
                  Unfortunately, this page is still unavailable.
                  It may currently be on a 40-day wilderness experience.
                </p>
              </div>

              <p>
                Please remain calm.
                No need to bind and cast out your browser.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.55 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                asChild
                className="
                group relative h-13 overflow-hidden
                rounded-2xl
                border border-primary/20
                bg-primary
                px-8
                font-semibold
                text-white
                shadow-[0_15px_60px_rgba(216,164,91,0.35)]
                transition-all duration-700
                hover:-translate-y-1
                hover:shadow-[0_25px_100px_rgba(216,164,91,0.45)]
              "
              >
                <Link href="/">
                  {/* animated glow */}
                  <div
                    className="
                    absolute inset-0
                    bg-gradient-to-r
                    from-white/0
                    via-white/20
                    to-white/0
                    opacity-0
                    transition-opacity duration-700
                    group-hover:opacity-100
                  "
                  />

                  <span className="relative z-10 flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Return Home
                  </span>
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="
                group h-13 rounded-2xl
                border-white/40
                bg-white/[0.6]
                px-8
                font-semibold
                text-slate-700
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-1
                hover:bg-white/90
                hover:text-primary
              "
              >
                <Link href="/contact">
                  <span className="flex items-center gap-2">
                    <Compass className="h-4 w-4" />
                    Contact Support
                  </span>
                </Link>
              </Button>
            </motion.div>

            {/* humor strip */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.7 }}
              className="
              mt-10 flex items-start gap-4
              rounded-[2rem]
              border border-white/30
              bg-white/[0.5]
              px-5 py-5
              backdrop-blur-xl
            "
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <Church className="h-5 w-5 text-primary" />
              </div>

              <div>
                <p className="font-black tracking-[-0.02em] text-slate-800">
                  Pastor’s Official Advice
                </p>

                <p className="mt-1 text-sm leading-7 text-slate-600">
                  “If the page refuses to appear,
                  kindly do not organize a prayer conference against the IT department.”
                </p>
              </div>
            </motion.div>
          </div>

          {/* =========================
              RIGHT SIDE VISUAL
          ========================== */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.35,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex items-center justify-center"
          >
            {/* outer glow */}
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />

            {/* floating card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
              relative w-full max-w-md
              overflow-hidden
              rounded-[2.5rem]
              border border-white/30
              bg-white/[0.58]
              p-8
              shadow-[0_25px_100px_rgba(216,164,91,0.12)]
              backdrop-blur-[28px]
            "
            >
              {/* overlays */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.85),transparent_30%)]" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(233,199,255,0.18),transparent_35%)]" />

              <div className="relative z-10">
                {/* icon */}
                <motion.div
                  animate={{
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                  }}
                  className="
                  mx-auto flex h-28 w-28 items-center justify-center
                  rounded-[2.5rem]
                  border border-white/30
                  bg-primary/10
                  shadow-[0_15px_50px_rgba(216,164,91,0.14)]
                "
                >
                  <Search className="h-12 w-12 text-primary" />
                </motion.div>

                {/* title */}
                <h3
                  className="
                  mt-8 text-center
                  text-3xl
                  font-black
                  tracking-[-0.04em]
                  text-slate-800
                "
                >
                  Missing Page Report
                </h3>

                <p className="mt-3 text-center text-sm leading-7 text-slate-500">
                  Heaven is still in control.
                  The URL is not.
                </p>

                {/* list */}
                <div className="mt-8 space-y-4">
                  {[
                    "Last seen after Wednesday Bible study",
                    "Possibly hiding behind outdated links",
                    "Ignored several prayer requests",
                    "Could not be reached with holy Wi-Fi",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.9 + i * 0.1,
                      }}
                      whileHover={{
                        y: -4,
                        scale: 1.02,
                      }}
                      className="
                      group flex items-center gap-4
                      rounded-[1.5rem]
                      border border-white/20
                      bg-white/[0.55]
                      px-5 py-4
                      transition-all duration-500
                    "
                    >
                      <div className="h-2.5 w-2.5 rounded-full bg-primary" />

                      <p className="text-sm leading-7 text-slate-600">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* scripture joke */}
                <motion.div
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="
                  mt-8 rounded-[2rem]
                  bg-primary/10
                  px-6 py-6
                  text-center
                "
                >
                  <WandSparkles className="mx-auto mb-3 h-5 w-5 text-primary" />

                  <p className="text-sm italic leading-8 text-slate-700">
                    “Seek and ye shall find...
                    <br />
                    ...except apparently this page.”
                  </p>
                </motion.div>

                {/* bottom link */}
                <Link
                  href="/"
                  className="
                  mt-6 flex items-center justify-center gap-2
                  text-sm font-bold text-primary
                  transition-all duration-300
                  hover:gap-3
                "
                >
                  Navigate safely to heaven's gate to start over
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}