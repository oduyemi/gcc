"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, HeartHandshake, UsersRound, Sparkles } from "lucide-react";

export const FollowUpHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[#160B10] sm:min-h-[740px] lg:min-h-[800px]">
      {/* Hero background image */}
      <Image
        src="/images/followuphero.jpg"
        alt="A welcoming church community coming together in fellowship"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Layered overlays for contrast and depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#160B10]/95 via-[#160B10]/80 to-[#160B10]/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#160B10]/80 via-transparent to-[#160B10]/20" />

      {/* Subtle decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-500/10 blur-[100px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-12 lg:py-32">
        {/* Main copy */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Follow-Up
            <span className="mt-2 block text-primary">
              Ministry
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-xl font-semibold leading-relaxed text-white sm:text-2xl lg:text-3xl">
            Helping you feel at home, grow in faith, and become established.
          </p>

          <p className="mt-5 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
            Your first visit is the beginning of something beautiful.
            We are here to welcome you, walk alongside you, build
            genuine relationships, and help you discover your place
            in the Global Crossfire Church family.
          </p>

          {/* Calls to action */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="text-white group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold text-[#24140E] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#160B10]"
            >
              Connect With Us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="#your-journey"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/35 bg-white/[0.07] px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:border-white/60 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#160B10]"
            >
              Explore Your Journey
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </div>

          {/* Ministry values */}
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6">
            <div className="flex items-center gap-2.5">
              <HeartHandshake className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-white/85">
                Genuine Care
              </span>
            </div>

            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />

            <div className="flex items-center gap-2.5">
              <UsersRound className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-white/85">
                Meaningful Community
              </span>
            </div>
          </div>
        </motion.div>

        {/* Supporting message */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-5 rounded-[2rem] border border-white/15" />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-[#211419]/65 p-9 shadow-2xl shadow-black/20 backdrop-blur-xl xl:p-11">
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-primary">
              More than a visit
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white xl:text-4xl">
              From your first visit to a place you can call home.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/70">
              Faith grows stronger in community. We are committed to
              helping every guest feel seen, every new member feel
              supported, and every person find opportunities to grow
              and serve.
            </p>

            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="text-sm font-semibold tracking-wide text-white">
                Welcome.
                <span className="mx-2 text-primary">Belong.</span>
                Grow.
                <span className="mx-2 text-primary">Serve.</span>
              </p>
            </div>
          </div>

          {/* Floating accent */}
          <div className="absolute -bottom-8 -left-7 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#FAF7F0] px-5 py-4 shadow-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6F1D2A]/10">
              <HeartHandshake className="h-5 w-5 text-[#6F1D2A]" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">
                Our heart for every guest
              </p>
              <p className="mt-0.5 text-sm font-extrabold text-[#6F1D2A]">
                No one forgotten.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom transition */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />
    </section>
  );
};