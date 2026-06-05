"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HeartHandshake,
  Heart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const JoinPrayerCaringCTA = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[35rem] w-[35rem] rounded-full bg-primary/[0.06] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[35rem] w-[35rem] rounded-full bg-[#AF3800]/[0.06] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="
              relative overflow-hidden
              rounded-[3rem]
              border border-primary/10
              bg-gradient-to-br
              from-primary/[0.05]
              via-white
              to-[#AF3800]/[0.05]
              p-8 md:p-12 lg:p-16
              shadow-xl
            "
          >
            {/* Decorative Glow */}

            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#AF3800]/10 blur-3xl" />

            {/* Floating Icons */}

            <HeartHandshake className="absolute right-12 top-12 hidden h-24 w-24 text-primary/5 lg:block" />

            <Heart className="absolute bottom-12 left-12 hidden h-20 w-20 text-primary/5 lg:block" />

            <div className="relative z-10 text-center">
              {/* Badge */}

              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  bg-primary/10
                  px-4 py-2
                  text-[11px]
                  font-black
                  uppercase
                  tracking-[0.25em]
                  text-primary
                "
              >
                <Sparkles className="h-3.5 w-3.5" />
                Join The Ministry
              </div>

              {/* Heading */}

              <h2
                className="
                  mt-6
                  text-4xl
                  font-black
                  tracking-[-0.05em]
                  md:text-6xl
                "
              >
                Help Us Care For
                <span className="block text-primary">
                  People In Jesus' Name
                </span>
              </h2>

              {/* Description */}

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-3xl
                  text-lg
                  leading-8
                  text-muted-foreground
                "
              >
                If you have a heart for prayer, encouragement and serving
                others, we'd love for you to become part of the Prayer &
                Caring Ministry. Together, we can bring hope, comfort and
                Christ's love to those who need it most.
              </p>

              {/* Features */}

              <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
                <div
                  className="
                    rounded-2xl
                    border border-primary/10
                    bg-white/80
                    p-6
                    backdrop-blur-sm
                  "
                >
                  <HeartHandshake className="mx-auto h-8 w-8 text-primary" />

                  <h3 className="mt-4 font-bold">
                    Care For Others
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Support individuals and families through prayer,
                    encouragement and practical care.
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border border-primary/10
                    bg-white/80
                    p-6
                    backdrop-blur-sm
                  "
                >
                  <Heart className="mx-auto h-8 w-8 text-primary" />

                  <h3 className="mt-4 font-bold">
                    Serve With Compassion
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Reflect the love of Christ through meaningful ministry
                    and genuine relationships.
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border border-primary/10
                    bg-white/80
                    p-6
                    backdrop-blur-sm
                  "
                >
                  <ShieldCheck className="mx-auto h-8 w-8 text-primary" />

                  <h3 className="mt-4 font-bold">
                    Make An Impact
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Help create a caring church culture where no one walks
                    through life alone.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}

              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="
                    h-14
                    rounded-2xl
                    px-8
                    text-base
                    font-bold
                  "
                >
                  <Link href="/next-steps/prayer-caring">
                    Join The Ministry

                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="
                    h-14
                    rounded-2xl
                    px-8
                    text-base
                    font-bold
                  "
                >
                  <Link href="/ministries">
                    Explore Ministries
                  </Link>
                </Button>
              </div>

              {/* Scripture */}

              <div
                className="
                  mx-auto
                  mt-10
                  max-w-2xl
                  rounded-2xl
                  border border-primary/10
                  bg-white/70
                  p-5
                  backdrop-blur-sm
                "
              >
                <p className="italic text-muted-foreground">
                  “Carry each other's burdens, and in this way you will
                  fulfil the law of Christ.”
                </p>

                <p className="mt-2 font-semibold text-foreground">
                  Galatians 6:2
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};