"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  ArrowRight,
  Sparkles,
  MapPin,
  Clock3,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const EventsHero = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12 lg:py-32">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute right-[-10%] bottom-[-10%] h-[35rem] w-[35rem] rounded-full bg-accent/20 blur-3xl" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)]
            [background-size:120px_120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr]">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-primary/10
                bg-white/80
                px-5 py-3
                backdrop-blur-xl
              "
            >
              <Sparkles className="h-4 w-4 text-primary" />

              <span
                className="
                  text-[11px]
                  font-black
                  uppercase
                  tracking-[0.28em]
                  text-primary
                "
              >
                Upcoming Meetings & Events
              </span>
            </div>

            <h1
              className="
                mt-6
                text-5xl
                font-black
                leading-[0.9]
                tracking-[-0.07em]
                sm:text-6xl
                lg:text-[5.5rem]
              "
            >
              Gather.
              <br />

              Grow.
              <br />

              <span className="text-primary">
                Encounter God.
              </span>
            </h1>

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              Join us throughout the week for worship,
              prayer, discipleship, fellowship and special
              events designed to strengthen your faith and
              connect you with God's family.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8"
              >
                <Link href="#upcoming-events">
                  View Events

                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8"
              >
                <Link href="/visit">
                  Plan A Visit
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}

            <div
              className="
                relative
                h-[620px]
                overflow-hidden
                rounded-[3rem]
                shadow-[0_40px_100px_rgba(0,0,0,0.12)]
              "
            >
              <Image
                src="/images/eventshero.jpg"
                alt="Church Events"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            {/* Floating Event Card */}

            <div
              className="
                absolute
                bottom-8
                left-8
                max-w-sm
                rounded-[2rem]
                border border-white/20
                bg-white/95
                p-6
                shadow-2xl
                backdrop-blur-xl
              "
            >
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  bg-primary
                  px-3 py-2
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-white
                "
              >
                Featured Event
              </div>

              <h3 className="mt-4 text-2xl font-black">
                Sunday Celebration Gathering
              </h3>

              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <CalendarDays className="h-4 w-4 text-primary" />

                  31 May 2026
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Clock3 className="h-4 w-4 text-primary" />

                  10:30 AM – 12:30 PM
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />

                  Global Crossfire Church UK
                </div>
              </div>
            </div>

            {/* Floating Date */}

            <div
              className="
                absolute
                -left-10
                top-12
                hidden
                rounded-[2rem]
                bg-primary
                px-8
                py-6
                text-center
                text-white
                shadow-2xl
                lg:block
              "
            >
              <div className="text-5xl font-black">
                31
              </div>

              <div className="mt-1 text-sm font-bold tracking-[0.25em]">
                MAY
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};