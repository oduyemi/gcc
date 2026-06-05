"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HeartHandshake,
  HandCoins,
  Globe2,
} from "lucide-react";

export const JoinMissionCTA = () => {
  return (
    <section className="px-4 py-24 md:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl"
      >
        <div
          className="
            relative overflow-hidden
            rounded-[3rem]
            bg-[#22007C]
            text-white
          "
        >
          {/* Background */}

          <div
            className="
              absolute inset-0
              bg-[url('/images/mission/mission-cta.jpg')]
              bg-cover bg-center
            "
          />

          <div className="absolute inset-0 bg-[#22007C]/88" />

          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#AF3800]/20 blur-3xl" />

          <div className="relative z-10 px-8 py-16 md:px-14 md:py-20">
            <div className="mx-auto max-w-4xl text-center">
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
                "
              >
                <HeartHandshake className="h-4 w-4" />
                Join The Mission
              </div>

              <h2
                className="
                  mt-6
                  text-4xl
                  font-black
                  leading-tight
                  tracking-[-0.05em]
                  md:text-6xl
                "
              >
                Together We Can Bring
                <br />
                Hope To More Communities
              </h2>

              <p
                className="
                  mx-auto mt-6 max-w-3xl
                  text-lg leading-8
                  text-white/80
                "
              >
                Your support helps provide essential resources,
                strengthen families, empower communities and share the
                love of Christ with those who need it most.
              </p>

              {/* Support Options */}

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                  <HeartHandshake className="h-7 w-7" />
                  <h3 className="mt-3 font-black">Pray</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Stand with us in prayer for lives and communities.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                  <HandCoins className="h-7 w-7" />
                  <h3 className="mt-3 font-black">Give</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Support outreach projects and mission initiatives.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                  <Globe2 className="h-7 w-7" />
                  <h3 className="mt-3 font-black">Partner</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Help expand our impact through collaboration.
                  </p>
                </div>
              </div>

              {/* CTA */}

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/give"
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-2xl
                    bg-white
                    px-8 py-4
                    font-bold
                    text-[#22007C]
                    transition-all
                    hover:-translate-y-1
                  "
                >
                  Support The Mission

                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="
                    inline-flex items-center justify-center
                    rounded-2xl
                    border border-white/20
                    bg-white/10
                    px-8 py-4
                    font-bold
                    backdrop-blur-sm
                    transition-all
                    hover:bg-white/15
                  "
                >
                  Become A Partner
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};