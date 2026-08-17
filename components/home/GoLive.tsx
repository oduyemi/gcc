"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Radio,
  Clock3,
} from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { useLiveStream } from "@/hook/useLivestream";

export function HomeLiveStreamCTA() {
    const { stream, loading } = useLiveStream();
    const {isLive, title} = stream;

    if (loading) {
        return (
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="glass h-[500px] animate-pulse rounded-[2.5rem]" />
            </div>
          </section>
        );
      }

  return (
    <section className="relative overflow-hidden py-24">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute -right-24 bottom-0 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="glass overflow-hidden rounded-[2.5rem]"
        >
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            {/* LEFT */}
            <div className="flex flex-col justify-center p-8 lg:p-16">
              {isLive ? (
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                  LIVE NOW
                </div>
              ) : (
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-white/60 px-4 py-2 text-sm font-medium backdrop-blur-xl">
                  <Radio
                    size={14}
                    className="text-primary"
                  />
                  Worship Online
                </div>
              )}

              <h2 className="mt-8 text-5xl font-black leading-[0.9] tracking-tight lg:text-7xl">
                {isLive ? (
                  <>
                    Join Worship
                    <span className="block text-primary">
                      Live Right Now
                    </span>
                  </>
                ) : (
                  <>
                    Join Our Next
                    <span className="block text-primary">
                      Live Service
                    </span>
                  </>
                )}
              </h2>

              <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent" />

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {isLive
                  ? title ||
                    "We are currently broadcasting live. Join believers around the world for worship, prayer and a life-giving message."
                  : "Our livestream is currently offline. Join us during service times or watch previous messages while you wait for the next broadcast."}
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/sermons"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  {isLive
                    ? "Join Live Broadcast"
                    : "Watch Previous Services"}

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="https://www.youtube.com/@globalcrossfirechurchuk7257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/40 px-8 py-4 font-medium backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/60"
                >
                  <FaYoutube className="text-red-500" />
                  Visit YouTube
                </a>
              </div>

              {/* Service Times */}
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                <div className="glass rounded-3xl p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Sunday Worship
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    10:30 AM
                  </p>
                </div>

                {/* <div className="glass rounded-3xl p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Midweek Service
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    6:00 PM
                  </p>
                </div> */}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative min-h-[600px]">
              <div className="absolute inset-6">
                <div className="glass relative h-full overflow-hidden rounded-[2.5rem]">
                  {/* Image */}
                  <Image
                    src="/images/streamin.jpg"
                    alt="Live Worship Experience"
                    fill
                    priority
                    className="object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  {/* Live Indicator */}
                  <div className="absolute left-6 top-6 z-20">
                    {isLive ? (
                      <div className="flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                        LIVE BROADCAST
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                        <Clock3 size={14} />
                        OFFLINE
                      </div>
                    )}
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                      Global Crossfire Church UK
                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-white lg:text-4xl">
                      {isLive
                        ? "Join the Service Happening Now"
                        : "Experience Worship Anytime"}
                    </h3>

                    <p className="mt-3 max-w-lg text-white/80">
                      Worship • Prayer • Teaching • Community
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="glass absolute -left-3 top-12 rounded-3xl p-5 sm:hidden"
              >
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Worship
                </p>

                <p className="mt-1 text-lg font-bold">
                  Prayer & The Word
                </p>
              </motion.div>

              {/* Floating Card */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="glass absolute -right-3 bottom-24 rounded-3xl p-5 sm:hidden "
              >
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Available
                </p>

                <p className="mt-1 text-lg font-bold">
                  Live & On Demand
                </p>
              </motion.div>

              {/* YouTube Card */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="glass absolute right-8 top-24 flex items-center gap-3 rounded-3xl p-4"
              >
                <FaYoutube className="text-xl text-red-500" />

                <div>
                  <p className="font-semibold">
                    Live Broadcast
                  </p>

                  <p className="text-xs text-muted-foreground">
                    Streaming via YouTube
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}