"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Shield } from "lucide-react";

export const JoinMenMinistryCTA = () => {
  return (
    <section className="px-4 py-24 md:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
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
          {/* Background Image */}

          <div
            className="
              absolute inset-0
              bg-[url('/images/men/mencta.jpg')]
              bg-cover bg-center
            "
          />

          <div className="absolute inset-0 bg-[#22007C]/85" />

          {/* Decorative */}

          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#AF3800]/20 blur-3xl" />

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
                <Shield className="h-4 w-4" />
                Men Of Purpose
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
                You Were Never Meant
                <br />
                To Walk Alone
              </h2>

              <p
                className="
                  mx-auto mt-6 max-w-2xl
                  text-lg
                  leading-8
                  text-white/80
                "
              >
                Connect with a community of men committed to growing
                spiritually, strengthening their families, building
                meaningful friendships, and fulfilling God's purpose.
              </p>

              {/* Benefits */}

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <div
                  className="
                    rounded-2xl
                    border border-white/10
                    bg-white/10
                    px-5 py-3
                    text-sm font-semibold
                  "
                >
                  Brotherhood
                </div>

                <div
                  className="
                    rounded-2xl
                    border border-white/10
                    bg-white/10
                    px-5 py-3
                    text-sm font-semibold
                  "
                >
                  Leadership Growth
                </div>

                <div
                  className="
                    rounded-2xl
                    border border-white/10
                    bg-white/10
                    px-5 py-3
                    text-sm font-semibold
                  "
                >
                  Prayer & Accountability
                </div>
              </div>

              {/* CTA Buttons */}

              <div
                className="
                  mt-10
                  flex flex-col justify-center gap-4
                  sm:flex-row
                "
              >
                <Link
                  href="/contact"
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
                  <Users className="h-5 w-5" />
                  Join The Men's Ministry
                </Link>

                <Link
                  href="/visit"
                  className="
                    inline-flex items-center justify-center gap-2
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
                  Visit This Sunday
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};