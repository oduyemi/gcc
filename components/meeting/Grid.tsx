"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
  ArrowRight,
  Flame,
  Users,
  Video,
} from "lucide-react";

const events = [
  {
    title: "Sunday Celebration Gathering",
    category: "Worship Service",
    image: "/images/events/sunday-service.jpg",
    date: "31",
    month: "MAY",
    fullDate: "31 May 2026",
    time: "10:30 AM – 12:30 PM",
    location: "Global Crossfire Church UK",
    featured: true,
    icon: Flame,
  },
  {
    title: "Hour of Encounter",
    category: "Prayer Meeting",
    image: "/images/events/prayer.jpg",
    date: "05",
    month: "JUN",
    fullDate: "5 June 2026",
    time: "6:00 PM – 7:00 PM",
    location: "Online via Zoom",
    featured: false,
    icon: Video,
  },
  {
    title: "Home Cell Meeting",
    category: "Fellowship",
    image: "/images/events/home-cell.jpg",
    date: "02",
    month: "JUN",
    fullDate: "2 June 2026",
    time: "6:00 PM – 7:00 PM",
    location: "Various Locations",
    featured: false,
    icon: Users,
  },
  {
    title: "Jabez Moment",
    category: "Interchurch Prayer",
    image: "/images/events/jabez.jpg",
    date: "30",
    month: "MAY",
    fullDate: "30 May 2026",
    time: "6:00 PM – 7:30 PM",
    location: "Church Auditorium",
    featured: false,
    icon: Flame,
  },
];

export const UpcomingEventsGrid = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
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
            <CalendarDays className="h-3.5 w-3.5" />
            Upcoming Gatherings
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-[-0.05em]
              md:text-5xl
            "
          >
            Join Us At An Event
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Worship services, prayer gatherings, fellowship meetings and
            special church events designed to help you grow in faith and
            community.
          </p>
        </motion.div>

        {/* Events Grid */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {events.map((event, index) => {
            const Icon = event.icon;

            return (
              <motion.div
                key={event.title}
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
                  delay: index * 0.08,
                }}
              >
                <div
                  className={`
                    group
                    glass
                    overflow-hidden
                    rounded-[2.5rem]
                    transition-all duration-500
                    hover:-translate-y-2

                    ${
                      event.featured
                        ? "glow-gold"
                        : ""
                    }
                  `}
                >
                  {/* Image */}

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

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Date */}

                    <div
                      className="
                        absolute left-5 top-5
                        flex h-20 w-20
                        flex-col items-center justify-center
                        rounded-3xl
                        bg-white/95
                        shadow-xl
                        backdrop-blur-xl
                      "
                    >
                      <span className="text-3xl font-black text-primary">
                        {event.date}
                      </span>

                      <span
                        className="
                          text-[11px]
                          font-black
                          tracking-[0.2em]
                          text-primary
                        "
                      >
                        {event.month}
                      </span>
                    </div>

                    {/* Category */}

                    <div
                      className="
                        absolute right-5 top-5
                        rounded-full
                        bg-primary
                        px-4 py-2
                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.2em]
                        text-white
                      "
                    >
                      {event.category}
                    </div>

                    {/* Title */}

                    <div className="absolute bottom-6 left-6 right-6">
                      <h3
                        className="
                          text-3xl
                          font-black
                          leading-tight
                          text-white
                        "
                      >
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}

                  <div className="p-7">
                    <div className="flex flex-wrap gap-4">
                      <div
                        className="
                          flex items-center gap-2
                          rounded-full
                          bg-primary/5
                          px-4 py-2
                          text-sm
                        "
                      >
                        <Clock3 className="h-4 w-4 text-primary" />

                        {event.time}
                      </div>

                      <div
                        className="
                          flex items-center gap-2
                          rounded-full
                          bg-primary/5
                          px-4 py-2
                          text-sm
                        "
                      >
                        <MapPin className="h-4 w-4 text-primary" />

                        {event.location}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <div
                        className="
                          flex items-center gap-2
                          text-sm
                          font-semibold
                          text-muted-foreground
                        "
                      >
                        <Icon className="h-4 w-4 text-primary" />
                        {event.fullDate}
                      </div>

                      <Link
                        href="/contact"
                        className="
                          inline-flex items-center gap-2
                          font-bold text-primary
                        "
                      >
                        Learn More

                        <ArrowRight
                          className="
                            h-4 w-4
                            transition-transform
                            group-hover:translate-x-1
                          "
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};