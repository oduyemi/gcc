"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";


export const FollowUpCTA = () => {
  const reduceMotion = useReducedMotion();
  return (
    <section className="bg-white px-5 pb-20 pt-4 sm:px-8 sm:pb-24 lg:px-12">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-primary text-white shadow-xl shadow-primary/15 sm:rounded-[2rem] lg:rounded-[2.5rem]"
      >
        {/* Subtle decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/[0.10]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border border-white/[0.08]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-36 -left-24 h-96 w-96 rounded-full bg-amber-400/[0.08] blur-3xl"
        />

        {/* Fine top accent */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#D9B779] to-transparent"
        />

        <div className="relative mx-auto max-w-4xl px-6 py-14 text-center sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#E8D2A5] sm:text-sm">
            There Is a Place for You
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            We'd love to welcome you home.
          </h2>

          <div
            aria-hidden="true"
            className="mx-auto mt-7 h-1 w-16 rounded-full bg-[#D9B779]"
          />

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            Whether you are visiting for the first time, returning
            after some time away, or searching for a church family,
            you are welcome here. At Global Crossfire Church UK,
            we want you to feel valued, find meaningful connections
            and discover a place where your faith can grow.
          </p>

          {/* Call-to-action buttons */}
          <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              href="/visit"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#F7F1E5] px-8 py-4 text-sm font-bold text-primary shadow-lg shadow-black/[0.08] transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Plan Your Visit
              <span
                aria-hidden="true"
                className="text-lg transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/35 bg-white/[0.06] px-8 py-4 text-sm font-bold text-white transition duration-300 hover:border-white/60 hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Contact Our Church
            </Link>
          </div>

          {/* Closing message */}
          <div className="mx-auto mt-10 max-w-xl border-t border-white/15 pt-6">
            <p className="text-sm font-medium leading-7 text-white/70 sm:text-base">
              From guest to family.
              <span className="mx-2 text-[#D9B779]">·</span>
              From growth to service.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};