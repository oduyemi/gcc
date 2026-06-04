"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  ShieldCheck,
  Sparkles,
  ArrowDown,
} from "lucide-react";

export const KidsTeensHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[35rem] w-[35rem] rounded-full bg-primary/[0.04] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[#AF3800]/[0.05] blur-3xl" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)]
            [background-size:120px_120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
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
                border border-primary/10
                bg-primary/5
                px-4 py-2
                text-[11px]
                font-black
                uppercase
                tracking-[0.25em]
                text-primary
              "
            >
              <Sparkles className="h-3.5 w-3.5" />
              Kids & Teens Ministry
            </div>

            <h1
              className="
                mt-7
                text-5xl
                font-black
                leading-[0.95]
                tracking-[-0.06em]
                text-foreground
                sm:text-6xl
                lg:text-7xl
              "
            >
              Raising The Next
              <span className="block text-primary">
                Generation Of Faith
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
              A fun, safe and faith-filled environment where children
              and teenagers can learn about Jesus, build friendships,
              discover purpose and grow into confident followers of Christ.
            </p>

            {/* Highlights */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div
                className="
                  flex items-start gap-4
                  rounded-[1.75rem]
                  border border-primary/10
                  bg-white
                  p-5
                  shadow-sm
                "
              >
                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-2xl
                    bg-primary/10
                  "
                >
                  <Heart className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="font-black">
                    Faith & Character
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Helping children build a strong biblical foundation.
                  </p>
                </div>
              </div>

              <div
                className="
                  flex items-start gap-4
                  rounded-[1.75rem]
                  border border-primary/10
                  bg-white
                  p-5
                  shadow-sm
                "
              >
                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-2xl
                    bg-primary/10
                  "
                >
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="font-black">
                    Safe Environment
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Caring leaders creating a welcoming space for every child.
                  </p>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-10 hidden items-center gap-3 lg:flex">
              <div className="h-px w-16 bg-primary/20" />

              <ArrowDown className="h-4 w-4 text-primary" />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-muted-foreground
                "
              >
                Explore The Ministry
              </span>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-5">
              {/* Main */}
              <div className="relative col-span-2 h-[420px] overflow-hidden rounded-[2.75rem]">
                <Image
                  src="/images/teenshero.jpg"
                  alt="Kids Ministry"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div
                    className="
                      rounded-2xl
                      bg-white/95
                      px-5 py-4
                      shadow-lg
                      backdrop-blur-xl
                    "
                  >
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">
                      Every Sunday
                    </p>

                    <p className="mt-1 font-semibold">
                      Learning, Worship & Fun
                    </p>
                  </div>
                </div>
              </div>

              {/* Image 2 */}
              <div className="relative h-60 overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/teenactivities.jpg"
                  alt="Kids Activities"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 3 */}
              <div className="relative h-60 overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/teenministry.jpg"
                  alt="Teen Ministry"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Card */}
            <div
              className="
                absolute
                -bottom-6
                left-8
                hidden
                rounded-[2rem]
                border border-primary/10
                bg-white
                p-5
                shadow-xl
                lg:block
              "
            >
              <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">
                Our Focus
              </p>

              <h4 className="mt-2 text-2xl font-black">
                Faith • Fun • Family
              </h4>

              <p className="text-sm text-muted-foreground">
                Helping children thrive spiritually and socially.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};