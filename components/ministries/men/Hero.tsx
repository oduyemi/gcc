"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  ArrowRight,
  Users,
  Sword,
  HeartHandshake,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Shield,
    title: "Strong Faith",
  },
  {
    icon: Users,
    title: "Brotherhood",
  },
  {
    icon: Sword,
    title: "Leadership",
  },
];

export const MenMinistryHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[40rem] w-[40rem] rounded-full bg-primary/[0.05] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[35rem] w-[35rem] rounded-full bg-[#AF3800]/[0.05] blur-3xl" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)]
            [background-size:120px_120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr]">
          {/* Content */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-primary/15
                bg-white/70
                px-5 py-2.5
                backdrop-blur-xl
                text-[11px]
                font-black
                uppercase
                tracking-[0.28em]
                text-primary
              "
            >
              <Shield className="h-3.5 w-3.5" />
              Men's Ministry
            </div>

            <h1
              className="
                mt-8
                text-5xl
                font-black
                leading-[0.95]
                tracking-[-0.07em]
                text-foreground
                sm:text-6xl
                lg:text-7xl
              "
            >
              Raising Men Of
              <span className="block text-primary">
                Faith & Purpose
              </span>
            </h1>

            <p
              className="
                mt-7
                max-w-2xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              A community of men committed to growing in Christ,
              strengthening families, developing leadership,
              building authentic brotherhood and impacting the
              world for God's Kingdom.
            </p>

            {/* Values */}

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      group
                      rounded-[1.6rem]
                      border border-primary/10
                      bg-white/80
                      p-5
                      backdrop-blur-xl
                      shadow-sm
                      transition-all duration-500
                      hover:-translate-y-1
                      hover:shadow-xl
                    "
                  >
                    <div
                      className="
                        flex h-12 w-12 items-center justify-center
                        rounded-2xl
                        bg-primary/10
                        text-primary
                        transition-all duration-500
                        group-hover:bg-primary
                        group-hover:text-white
                      "
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <p className="mt-4 font-bold">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="
                  group
                  h-14
                  rounded-2xl
                  px-8
                  bg-primary
                  shadow-[0_12px_40px_rgba(216,164,91,0.30)]
                  hover:-translate-y-1
                  transition-all duration-500
                "
              >
                <Link href="/next-steps/men">
                  Join The Ministry

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="
                  h-14
                  rounded-2xl
                  border-primary/20
                  bg-white/60
                  backdrop-blur-xl
                  px-8
                "
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>

            {/* Highlights */}

            <div className="mt-12 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-primary" />

                <span className="font-medium">
                  Biblical Leadership
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-[#AF3800]" />

                <span className="font-medium">
                  Spiritual Growth
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-primary" />

                <span className="font-medium">
                  Brotherhood
                </span>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[3rem]">
              <div className="relative h-[650px]">
                <Image
                  src="/images/menhero.jpg"
                  alt="Men's Ministry"
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-[3000ms]
                    hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              </div>

              {/* Main Card */}

              <div
                className="
                  absolute left-6 bottom-6
                  rounded-[1.8rem]
                  border border-white/20
                  bg-white/90
                  px-6 py-5
                  backdrop-blur-xl
                  shadow-xl
                "
              >
                <p className="text-xs font-black uppercase tracking-[0.25em] text-primary">
                  Brotherhood
                </p>

                <p className="mt-2 font-semibold text-slate-800">
                  Strong Men Building Strong Families
                </p>
              </div>
            </div>

            {/* Floating Stat */}

            <div
              className="
                absolute
                -left-8
                top-14
                hidden lg:block
                rounded-[2rem]
                border border-white/30
                bg-white/90
                p-5
                backdrop-blur-xl
                shadow-xl
              "
            >
              <p className="text-4xl font-black text-primary">
                100%
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-600">
                Committed To Growth
              </p>
            </div>

            {/* Floating Ministry Card */}

            <div
              className="
                absolute
                -right-6
                bottom-24
                hidden lg:block
                rounded-[2rem]
                border border-primary/10
                bg-white
                p-5
                shadow-xl
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-2xl
                    bg-primary/10
                  "
                >
                  <HeartHandshake className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">
                    Men Of Faith
                  </p>

                  <p className="font-semibold">
                    Connect • Grow • Lead
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};