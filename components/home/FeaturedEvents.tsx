"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  ArrowRight,
  Sparkles,
  Flame,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const meetings = [
  {
    title: "Jabez Moment",
    subtitle: "Interchurch Prayer Meeting",
    date: "30 May 2026",
    time: "6:00 PM – 7:30 PM",
    featured: false,
  },
  {
    title: "Sunday Celebration Gathering",
    subtitle: "Weekly Worship Service",
    date: "31 May 2026",
    time: "10:30 AM – 12:30 PM",
    featured: true,
  },
  {
    title: "Home Cell Meeting",
    subtitle: "Connect • Grow • Fellowship",
    date: "2 June 2026",
    time: "6:00 PM – 7:00 PM",
    featured: false,
  },
  {
    title: "Hour of Encounter",
    subtitle: "Prayer Meeting Via Zoom",
    date: "5 June 2026",
    time: "6:00 PM – 7:00 PM",
    featured: false,
  },
];

export const FeaturedMeetings = () => {
  return (
    <section className="relative overflow-hidden bg-muted/[0.25] px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-[#AF3800]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              bg-primary/10
              px-4 py-2
              text-[11px]
              font-black
              uppercase
              tracking-[0.28em]
              text-primary
            "
          >
            <Sparkles className="h-3.5 w-3.5" />
            Join Us This Week
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-[-0.05em]
              sm:text-5xl
            "
          >
            Upcoming Meetings
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Gather with us in worship, prayer, fellowship and spiritual growth.
          </p>
        </motion.div>

        {/* Meeting List */}

        <div className="mt-16 overflow-hidden rounded-[2.5rem] border border-primary/10 bg-white shadow-xl">
          {meetings.map((meeting, index) => (
            <motion.div
              key={meeting.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className={`
                group
                flex flex-col gap-5
                border-b border-primary/10
                p-6
                transition-all duration-300
                hover:bg-primary/[0.02]
                md:flex-row
                md:items-center
                md:justify-between

                ${
                  meeting.featured
                    ? "bg-primary/[0.03]"
                    : ""
                }
              `}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl

                    ${
                      meeting.featured
                        ? "bg-primary text-white"
                        : "bg-primary/10 text-primary"
                    }
                  `}
                >
                  {meeting.featured ? (
                    <Flame className="h-6 w-6" />
                  ) : (
                    <CalendarDays className="h-6 w-6" />
                  )}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-black">
                      {meeting.title}
                    </h3>

                    {meeting.featured && (
                      <span
                        className="
                          rounded-full
                          bg-primary
                          px-3 py-1
                          text-[10px]
                          font-black
                          uppercase
                          tracking-[0.2em]
                          text-white
                        "
                      >
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-muted-foreground">
                    {meeting.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Date
                  </p>

                  <p className="font-semibold">
                    {meeting.date}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Time
                  </p>

                  <p className="flex items-center gap-2 font-semibold">
                    <Clock3 className="h-4 w-4 text-primary" />
                    {meeting.time}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};