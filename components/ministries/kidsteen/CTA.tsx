"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const JoinKidsTeensCTA = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[30rem] w-[30rem] rounded-full bg-primary/[0.06] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[#AF3800]/[0.06] blur-3xl" />
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

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#AF3800]/10 blur-3xl" />

            <div className="relative z-10">
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
                Your Family Is Welcome
              </div>

              {/* Heading */}

              <h2
                className="
                  mt-6
                  max-w-4xl
                  text-4xl
                  font-black
                  tracking-[-0.05em]
                  md:text-6xl
                "
              >
                Help Your Child Build
                <span className="block text-primary">
                  A Lifelong Faith
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-3xl
                  text-lg
                  leading-8
                  text-muted-foreground
                "
              >
                We'd love to welcome your child or teenager into a
                Christ-centred community where they can learn, grow,
                build friendships and discover God's purpose for their
                life.
              </p>

              {/* Trust Features */}

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div
                  className="
                    rounded-2xl
                    border border-primary/10
                    bg-white/80
                    p-5
                    backdrop-blur-sm
                  "
                >
                  <ShieldCheck className="h-6 w-6 text-primary" />

                  <h3 className="mt-3 font-bold">
                    Safe Environment
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Trusted leaders creating a welcoming space for
                    every child.
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
                  <Heart className="h-6 w-6 text-primary" />

                  <h3 className="mt-3 font-bold">
                    Caring Community
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Genuine friendships and supportive relationships.
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
                  <Users className="h-6 w-6 text-primary" />

                  <h3 className="mt-3 font-bold">
                    Spiritual Growth
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Helping children and teens grow in faith and
                    confidence.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
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
                  <Link href="/visit">
                    Plan A Visit

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

              {/* Bottom Note */}

              <p
                className="
                  mt-8
                  text-sm
                  font-medium
                  text-muted-foreground
                "
              >
                Join us this Sunday and discover a place where your
                child can belong, grow and flourish.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};