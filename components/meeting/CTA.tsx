"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  PlayCircle,
  Heart,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const EventsCTA = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[35rem] w-[35rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            glass
            glow-gold
            relative
            overflow-hidden
            rounded-[3rem]
          "
        >
          {/* Decorative Layers */}

          <div className="absolute inset-0">
            <div
              className="
                absolute
                left-0
                top-0
                h-full
                w-full
                bg-gradient-to-br
                from-primary/[0.04]
                via-transparent
                to-accent/[0.12]
              "
            />
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Content */}

            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  bg-primary
                  px-4 py-2
                  text-[11px]
                  font-black
                  uppercase
                  tracking-[0.25em]
                  text-white
                "
              >
                <Sparkles className="h-3.5 w-3.5" />
                We'd Love To Meet You
              </div>

              <h2
                className="
                  mt-6
                  text-4xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.06em]
                  md:text-6xl
                "
              >
                Your Seat Is
                <span className="block text-primary">
                  Waiting For You
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-lg
                  leading-8
                  text-muted-foreground
                "
              >
                Whether you're exploring faith, looking for a church
                family, or simply visiting for the first time, we'd be
                honored to welcome you to one of our gatherings.
              </p>

              {/* Stats */}

              <div className="mt-10 flex flex-wrap gap-4">
                <div
                  className="
                    glass
                    rounded-2xl
                    px-5 py-4
                  "
                >
                  <p className="text-3xl font-black text-primary">
                    100%
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Welcome Here
                  </p>
                </div>

                <div
                  className="
                    glass
                    rounded-2xl
                    px-5 py-4
                  "
                >
                  <p className="text-3xl font-black text-primary">
                    Weekly
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Worship & Prayer
                  </p>
                </div>

                <div
                  className="
                    glass
                    rounded-2xl
                    px-5 py-4
                  "
                >
                  <p className="text-3xl font-black text-primary">
                    Family
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Community Focused
                  </p>
                </div>
              </div>

              {/* Buttons */}

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="
                    rounded-full
                    px-8
                    font-bold
                  "
                >
                  <Link href="/visit">
                    Plan Your Visit

                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="
                    rounded-full
                    px-8
                  "
                >
                  <Link href="/contact">
                    <MapPin className="mr-2 h-4 w-4" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image Side */}

            <div className="relative h-[420px] lg:h-full">
              <Image
                src="/images/famfam.jpg"
                alt="Church Family"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Floating Card */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  bottom-8
                  left-8
                  right-8
                  rounded-[2rem]
                  border border-white/20
                  bg-white/90
                  p-6
                  shadow-2xl
                  backdrop-blur-xl
                "
              >
                <div className="flex items-start gap-4">
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
                      First Time Visiting?
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Come as you are. Our team will gladly help you
                      feel right at home from the moment you arrive.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Watch Online */}

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  right-6
                  top-6
                  rounded-2xl
                  border border-white/20
                  bg-white/90
                  px-5 py-4
                  shadow-xl
                  backdrop-blur-xl
                "
              >
                <div className="flex items-center gap-3">
                  <PlayCircle className="h-5 w-5 text-primary" />

                  <span className="font-semibold">
                    Watch Online
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};