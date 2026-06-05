"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  MessageCircleHeart,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const PrayerRequestCTA = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[32rem] w-[32rem] rounded-full bg-primary/[0.06] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-[#AF3800]/[0.06] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            className="
              relative overflow-hidden
              rounded-[3rem]
              border border-primary/10
              bg-gradient-to-br
              from-primary/[0.04]
              via-white
              to-[#AF3800]/[0.04]
              p-8 md:p-12 lg:p-16
              shadow-xl
            "
          >
            {/* Decorative Glow */}

            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#AF3800]/10 blur-3xl" />

            {/* Content */}

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
                Prayer Support
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
                How Can We
                <span className="block text-primary">
                  Pray For You?
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
                Whatever you're facing, you don't have to carry it alone.
                Our Prayer & Caring Ministry would be honoured to stand
                with you in prayer and believe God with you.
              </p>

              {/* Trust Features */}

              <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
                <div
                  className="
                    rounded-2xl
                    border border-primary/10
                    bg-white/80
                    p-5
                    backdrop-blur-sm
                  "
                >
                  <ShieldCheck className="mx-auto h-7 w-7 text-primary" />

                  <h3 className="mt-4 font-bold">
                    Confidential
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Requests are treated with care, discretion and respect.
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border border-primary/10
                    bg-white/80
                    p-5
                    backdrop-blur-sm
                  "
                >
                  <HeartHandshake className="mx-auto h-7 w-7 text-primary" />

                  <h3 className="mt-4 font-bold">
                    Compassionate
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    A caring team committed to encouraging and supporting you.
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border border-primary/10
                    bg-white/80
                    p-5
                    backdrop-blur-sm
                  "
                >
                  <MessageCircleHeart className="mx-auto h-7 w-7 text-primary" />

                  <h3 className="mt-4 font-bold">
                    Faith-Filled
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Standing with you in prayer and believing God for breakthrough.
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
                  <Link href="/prayer-request">
                    Submit Prayer Request

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
                  <Link href="/contact">
                    Contact Our Team
                  </Link>
                </Button>
              </div>

              {/* Encouragement Text */}

              <p
                className="
                  mx-auto
                  mt-8
                  max-w-2xl
                  text-sm
                  font-medium
                  text-muted-foreground
                "
              >
                “Cast all your anxiety on Him because He cares for you.”
                <span className="ml-2 font-bold text-foreground">
                  — 1 Peter 5:7
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};