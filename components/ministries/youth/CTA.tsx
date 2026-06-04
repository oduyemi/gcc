"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Flame } from "lucide-react";

import { Button } from "@/components/ui/button";

export const JoinYouthMinistryCTA = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-24 md:px-8 lg:px-12">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#AF3800]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[3rem]
              border border-primary/10
              bg-gradient-to-br
              from-[#22007C]
              via-[#2B0B8F]
              to-[#22007C]
              p-10
              text-white
              shadow-2xl
              md:p-16
            "
          >
            {/* Decorative Elements */}
            <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-white/5 blur-3xl" />

            <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#AF3800]/20 blur-3xl" />

            <div className="absolute right-10 top-10 hidden lg:block">
              <Sparkles className="h-10 w-10 text-white/20" />
            </div>

            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
              {/* Left Content */}
              <div>
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
                  <Flame className="h-3.5 w-3.5" />
                  Join The Movement
                </div>

                <h2
                  className="
                    mt-6
                    text-4xl
                    font-black
                    leading-[0.95]
                    tracking-[-0.05em]
                    md:text-5xl
                    lg:text-6xl
                  "
                >
                  Your Journey
                  <span className="block text-white/80">
                    Starts Here
                  </span>
                </h2>

                <p
                  className="
                    mt-6
                    max-w-2xl
                    text-lg
                    leading-8
                    text-white/80
                  "
                >
                  Whether you're exploring faith, looking for community,
                  or ready to grow deeper in your walk with God,
                  there's a place for you in our Youth Ministry.
                </p>

                {/* Highlights */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Friendship",
                    "Purpose",
                    "Leadership",
                    "Faith",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-full
                        border border-white/15
                        bg-white/10
                        px-4 py-2
                        text-sm
                        font-semibold
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right CTA */}
              <div className="flex flex-col items-start lg:items-end">
                <div
                  className="
                    rounded-[2rem]
                    border border-white/10
                    bg-white/10
                    p-6
                    backdrop-blur-xl
                  "
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex h-12 w-12 items-center justify-center
                        rounded-2xl
                        bg-white
                        text-primary
                      "
                    >
                      <Users className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="text-sm text-white/70">
                        Ready To Join?
                      </p>

                      <p className="font-bold">
                        We'd Love To Meet You
                      </p>
                    </div>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="
                      mt-6
                      h-14
                      rounded-2xl
                      bg-white
                      text-primary
                      hover:bg-white/90
                    "
                  >
                    <Link href="/next-steps/youth">
                      Get Connected

                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};