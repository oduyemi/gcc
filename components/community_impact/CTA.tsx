"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, Sparkles, HandHelping } from "lucide-react";


export const SupportCommunityCTA = () => {
  return (
    <section className="px-4 py-24 md:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
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
              bg-[url('/images/missions.jpg')]
              bg-cover bg-center
            "
          />

          <div className="absolute inset-0 bg-[#22007C]/85" />

          {/* Decorative Glow */}

          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#AF3800]/20 blur-3xl" />

          <div className="relative z-10 px-8 py-16 md:px-14 md:py-20">
            <div className="mx-auto max-w-4xl text-center">
              {/* Badge */}

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
                <Sparkles className="h-4 w-4" />
                Help Us Make A Difference
              </div>

              {/* Heading */}

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
                Together We Can
                <br />
                Transform Lives
              </h2>

              {/* Description */}

              <p
                className="
                  mx-auto mt-6 max-w-3xl
                  text-lg leading-8
                  text-white/80
                "
              >
                Your generosity helps us continue delivering educational
                support, youth development initiatives, family assistance,
                food support and community outreach programmes that bring
                hope and opportunity to children, young people and families.
              </p>

              {/* Impact Areas */}

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                {[
                  "Youth Development",
                  "Learning Support",
                  "Family Assistance",
                  "Food Support",
                  "Community Outreach",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      rounded-2xl
                      border border-white/10
                      bg-white/10
                      px-5 py-3
                      text-sm
                      font-semibold
                    "
                  >
                    {item}
                  </div>
                ))}
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
                  href="/donation"
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-2xl
                    bg-white
                    px-8 py-4
                    font-bold
                    text-[#22007C]
                    transition-all duration-300
                    hover:-translate-y-1
                  "
                >
                  <HeartHandshake className="h-5 w-5" />
                  Support Our Programmes
                </Link>

                <Link
                  href="/contact"
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-2xl
                    border border-white/20
                    bg-white/10
                    px-8 py-4
                    font-bold
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:bg-white/15
                  "
                >
                  Contact Us

                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Bottom Statement */}

              <div
                className="
                  mt-10
                  inline-flex items-center gap-2
                  text-sm text-white/70
                "
              >
                <HandHelping className="h-4 w-4" />

                Every contribution helps create meaningful community impact.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};