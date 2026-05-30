"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Sunday Worship Experience",
    date: "Every Sunday",
    time: "10:30AM",
    image: "/images/event-worship.jpg",
    href: "/events",
    description:
      "Experience passionate worship, prayer, biblical teaching and God's presence.",
  },
  {
    title: "Friday Prayer Meeting",
    date: "Every Friday",
    time: "6:00PM",
    image: "/images/event-prayer.jpg",
    href: "/events",
    description:
      "Join believers in an atmosphere of prayer, intercession and spiritual renewal.",
  },
];

export const FeaturedEvents = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[#AF3800]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* header */}

        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
            inline-flex items-center gap-2
            rounded-full
            bg-primary/10
            px-4 py-2
            text-[11px]
            font-black
            tracking-[0.28em]
            uppercase
            text-primary
          "
          >
            <Sparkles className="h-3.5 w-3.5" />

            Upcoming Gatherings
          </div>

          <h2
            className="
            mt-6
            text-4xl
            font-black
            tracking-[-0.05em]
            sm:text-5xl
            lg:text-6xl
          "
          >
            Featured Events
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Join us as we worship, pray, grow and experience God together.
          </p>
        </div>

        {/* cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
            >
              <Link
                href={event.href}
                className="
                group
                block
                overflow-hidden
                rounded-[2rem]
                border
                bg-white
                shadow-sm
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              "
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div
                    className="
                    absolute left-5 top-5
                    rounded-2xl
                    bg-white
                    px-4 py-3
                    shadow-lg
                  "
                  >
                    <CalendarDays className="h-5 w-5 text-primary" />
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-3xl font-black text-white">
                      {event.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <span>{event.date}</span>

                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                    <span className="flex items-center gap-2">
                      <Clock3 className="h-4 w-4 text-primary" />

                      {event.time}
                    </span>
                  </div>

                  <p className="mt-4 text-muted-foreground">
                    {event.description}
                  </p>

                  <div
                    className="
                    mt-6
                    flex items-center gap-2
                    font-bold
                    text-primary
                  "
                  >
                    Learn More

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* view all */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.24,
            }}
            viewport={{ once: true }}
          >
            <div
              className="
              flex h-full flex-col justify-center
              rounded-[2rem]
              border border-primary/10
              bg-gradient-to-br
              from-primary/[0.04]
              via-white
              to-[#AF3800]/[0.04]
              p-8
            "
            >
              <h3 className="text-3xl font-black">
                Explore All Events
              </h3>

              <p className="mt-4 text-muted-foreground">
                Discover conferences, worship nights, outreach programs,
                prayer gatherings and special church events.
              </p>

              <Button
                asChild
                className="mt-8 h-14 rounded-2xl bg-primary"
              >
                <Link href="/events">
                  View Events

                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};