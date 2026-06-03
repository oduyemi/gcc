"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Shield,
  CheckCircle2,
  Crown,
  HeartHandshake,
} from "lucide-react";

export const JoinMenMinistryCTA = () => {
  const benefits = [
    "Brotherhood",
    "Leadership Growth",
    "Prayer & Accountability",
    "Faith Building",
  ];

  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl"
      >
        <div
          className="
            relative overflow-hidden
            rounded-[3rem]
            border border-white/10
            shadow-[0_35px_120px_rgba(34,0,124,0.25)]
          "
        >
          {/* Background Image */}

          <div
            className="
              absolute inset-0
              bg-[url('/images/men/mencta.jpg')]
              bg-cover bg-center
              scale-105
            "
          />

          {/* Layered Overlays */}

          <div className="absolute inset-0 bg-[#22007C]/23" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#22007C]/95 via-[#22007C]/85 to-[#22007C]/70" />

          {/* Decorative Glows */}

          <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

          <div className="absolute -right-20 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#AF3800]/25 blur-3xl" />

          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 px-8 py-16 md:px-14 md:py-20 lg:px-20">
            <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
              {/* Left Side */}

              <div>
                <div
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-white/15
                    bg-white/10
                    px-5 py-2.5
                    backdrop-blur-md
                  "
                >
                  <Shield className="h-4 w-4" />

                  <span className="text-[11px] font-black uppercase tracking-[0.28em]">
                    Men Of Purpose
                  </span>
                </div>

                <h2
                  className="
                    mt-8
                    text-4xl
                    font-black
                    leading-[0.95]
                    tracking-[-0.05em]
                    text-white
                    md:text-6xl
                  "
                >
                  You Were Never
                  <span className="block text-white/80">
                    Meant To Walk Alone
                  </span>
                </h2>

                <p
                  className="
                    mt-7
                    max-w-2xl
                    text-lg
                    leading-8
                    text-white/75
                  "
                >
                  Connect with a community of men committed to growing
                  spiritually, strengthening their families, building
                  meaningful friendships, and fulfilling God's purpose
                  together.
                </p>

                {/* Benefit Pills */}

                <div className="mt-8 flex flex-wrap gap-3">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="
                        inline-flex items-center gap-2
                        rounded-full
                        border border-white/10
                        bg-white/10
                        px-4 py-2
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:bg-white/15
                      "
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary" />

                      <span className="text-sm font-semibold">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/next-steps/men"
                    className="
                      inline-flex items-center justify-center gap-2
                      rounded-2xl
                      bg-white
                      px-8 py-4
                      font-bold
                      text-[#22007C]
                      shadow-xl
                      transition-all
                      duration-300
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
                      border border-white/15
                      bg-white/10
                      px-8 py-4
                      font-bold
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:bg-white/15
                    "
                  >
                    Visit This Sunday

                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Stats */}

                <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
                  <div>
                    <div className="text-3xl font-black">50+</div>
                    <div className="text-sm text-white/70">
                      Active Men
                    </div>
                  </div>

                  <div>
                    <div className="text-3xl font-black">12+</div>
                    <div className="text-sm text-white/70">
                      Events Yearly
                    </div>
                  </div>

                  <div>
                    <div className="text-3xl font-black">100%</div>
                    <div className="text-sm text-white/70">
                      Brotherhood
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Card */}

              <div className="lg:flex lg:justify-end">
                <div
                  className="
                    rounded-[2.5rem]
                    border border-white/10
                    bg-white/10
                    p-8
                    backdrop-blur-xl
                    shadow-2xl
                  "
                >
                  <div
                    className="
                      flex h-16 w-16 items-center justify-center
                      rounded-2xl
                      bg-white/15
                    "
                  >
                    <Crown className="h-8 w-8 text-primary" />
                  </div>

                  <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-white/60">
                    Men's Ministry Vision
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    Strong Men.
                    <br />
                    Strong Families.
                  </h3>

                  <p className="mt-5 leading-8 text-white/75">
                    We are committed to raising men who honour God,
                    serve faithfully, lead courageously, and influence
                    generations for Christ.
                  </p>

                  <div
                    className="
                      mt-8
                      flex items-center gap-3
                      rounded-2xl
                      bg-white/10
                      p-4
                    "
                  >
                    <HeartHandshake className="h-5 w-5 text-primary" />

                    <span className="font-semibold">
                      Every man has a place here.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};