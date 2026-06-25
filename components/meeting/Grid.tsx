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
import { useEffect, useState } from "react";

type Meeting = {
  _id: string;
  title: string;
  description?: string;
  category: string;
  type: string;
  image?: string;
  time?: string;
  location?: string;
  isOnline?: boolean;
  nextOccurrence?: string;
  featured?: string;
};

const getIcon = (event: Meeting) => {
  if (event.category === "prayer")
    return Flame;

  if (event.isOnline)
    return Video;

  return Users;
};

const getCategory = (
  event: Meeting
) => {
  switch (event.category) {
    case "prayer":
      return "Prayer Meeting";

    case "service":
      return "Worship Service";

    case "fellowship":
      return "Fellowship";

    default:
      return event.category;
  }
};

const getDateParts = (
  date?: string
) => {
  if (!date)
    return {
      day: "--",
      month: "---",
    };

  const d = new Date(date);

  return {
    day: d
      .getDate()
      .toString()
      .padStart(2, "0"),
    month: d
      .toLocaleDateString(
        "en-GB",
        {
          month: "short",
        }
      )
      .toUpperCase(),
  };
};

const formatDate = (
  date?: string
) => {
  if (!date) return "TBA";

  return new Date(date).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
};


export const UpcomingEventsGrid = () => {
  const [events, setEvents] = useState<Meeting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "/api/meetings/upcoming"
        );
  
        const result = await response.json();
  
        if (!result.success) {
          throw new Error(
            result.message ||
              "Failed to fetch events"
          );
        }
  
        setEvents(result.data);
      } catch (err) {
        console.error(err);
  
        setError(
          err instanceof Error
            ? err.message
            : "Failed to fetch events"
        );
      } finally {
        setLoading(false);
      }
    };
  
    fetchEvents();
  }, []);

  if (loading) {
    return (
      <section className="py-24 text-center">
        Loading upcoming events...
      </section>
    );
  }
  
  if (error) {
    return (
      <section className="py-24 text-center text-red-500">
        {error}
      </section>
    );
  }
  
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
            const Icon = getIcon(event);
            const { day, month } =
              getDateParts(
                event.nextOccurrence
              );
            const featured = index === 0;

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
                      src={
                        event.image ||
                        "/images/events/default.jpeg"
                      }
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
                        {day}
                      </span>

                      <span
                        className="
                          text-[11px]
                          font-black
                          tracking-[0.2em]
                          text-primary
                        "
                      >
                        {month}
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
                      {getCategory(event)}
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

                        {event.location ||
                          (event.isOnline
                            ? "Online"
                            : "Church Auditorium")}
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
                        {formatDate(
                          event.nextOccurrence
                        )}
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