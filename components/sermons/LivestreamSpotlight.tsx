"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  PlayCircle,
  Radio,
  Clock3,
} from "lucide-react";
import { FaYoutube } from "react-icons/fa";

interface LiveStreamSpotlightProps {
  isLive: boolean;
  videoId?: string;
  title?: string;
}

export function LiveStreamSpotlight({
  isLive,
  videoId,
  title,
}: LiveStreamSpotlightProps) {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        {/* Section Label */}
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Live Stream
          </span>

          <div className="h-px flex-1 bg-gradient-to-l from-primary/40 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass relative overflow-hidden rounded-4xl"
        >
          {/* Ambient Orbs */}
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2">
            {/* Content */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              {isLive ? (
                <>
                  <Badge className="w-fit gap-2 bg-red-500 px-3 py-1 text-white shadow-lg">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                    LIVE NOW
                  </Badge>

                  <h2 className="mt-6 max-w-2xl text-4xl font-black tracking-tight lg:text-6xl">
                    {title || "Live Worship Experience"}
                  </h2>

                  <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent" />

                  <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                    Join the congregation live as we worship,
                    pray, and receive God's Word together.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={`https://youtube.com/watch?v=${videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                      <PlayCircle size={18} />
                      Watch Live
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <Badge
                    variant="secondary"
                    className="w-fit gap-2 border border-white/20 bg-white/40 px-3 py-1 backdrop-blur-md"
                  >
                    <Clock3 size={14} />
                    OFFLINE
                  </Badge>

                  <h2 className="mt-6 max-w-2xl text-4xl font-black tracking-tight lg:text-6xl">
                    No Livestream Right Now
                  </h2>

                  <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent" />

                  <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                    Our livestream is currently offline.
                    Join us during service times or explore
                    recent messages and teachings below.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="#sermons"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                      <PlayCircle size={18} />
                      Watch Sermons
                    </a>

                    <a
                      href="https://www.youtube.com/@globalcrossfirechurchuk7257"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/30 px-6 py-3 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/40"
                    >
                      <FaYoutube className="h-[18px] w-[18px]" />
                      Visit YouTube
                    </a>
                  </div>

                  {/* Service Times */}
                  <div className="mt-8 grid max-w-md grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/20 bg-white/30 p-4 backdrop-blur-xl">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        Sunday Service
                      </p>

                      <p className="mt-1 font-semibold">
                        9:00 AM
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/20 bg-white/30 p-4 backdrop-blur-xl">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        Midweek Service
                      </p>

                      <p className="mt-1 font-semibold">
                        6:00 PM
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Media Panel */}
            <div className="relative">
              {isLive && videoId ? (
                <div className="relative aspect-video overflow-hidden lg:h-full">
                  <div className="pointer-events-none absolute left-4 top-4 z-10">
                    <Badge className="bg-red-500 text-white shadow-lg">
                      <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-white" />
                      LIVE
                    </Badge>
                  </div>

                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 lg:h-full">
                  {/* Animated Rings */}
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="absolute h-40 w-40 rounded-full border border-primary/20"
                  />

                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.15, 0.4, 0.15],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                    className="absolute h-64 w-64 rounded-full border border-primary/10"
                  />

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(175,56,0,0.08),transparent_60%)]" />

                  <div className="relative z-10 text-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/60 backdrop-blur-xl"
                    >
                      <Radio
                        size={42}
                        className="text-primary"
                      />
                    </motion.div>

                    <h3 className="mt-6 text-2xl font-bold">
                      Waiting for the Next Broadcast
                    </h3>

                    <p className="mx-auto mt-3 max-w-sm text-muted-foreground">
                      The livestream will automatically
                      appear here when the church begins
                      streaming.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}