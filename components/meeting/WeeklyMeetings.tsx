"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Home,
  Flame,
  Video,
  Church,
  Book,
} from "lucide-react";
import { useEffect, useState } from "react";

type Meeting = {
  _id: string;
  title: string;
  description?: string;
  category: string;
  type: string;
  frequency?: string;
  dayOfWeek?: number;
  weekOfMonth?: string;
  startDate?: string;
  endDate?: string;
  time?: string;
  image?: string;
  isOnline?: boolean;
  location?: string;
  sortOrder?: number;
  nextOccurrence?: string;
};

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WEEK_LABELS: Record<string, string> = {
  first: "First",
  second: "Second",
  third: "Third",
  fourth: "Fourth",
  last: "Last",
};

export const WeeklyMeetings = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        setLoading(true);

        const response = await fetch("/api/meetings/weekly");

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message || "Failed to fetch meetings"
          );
        }

        setMeetings(result.data);
      } catch (err) {
        console.error(err);

        setError(
          err instanceof Error
            ? err.message
            : "Failed to fetch meetings"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  const getIcon = (meeting: Meeting) => {
    if (meeting.category === "prayer") {
      return Flame;
    }

    if (meeting.category === "service") {
      return Church;
    }

    if (
      meeting.title
        .toLowerCase()
        .includes("school")
    ) {
      return Book;
    }

    if (
      meeting.title
        .toLowerCase()
        .includes("cell")
    ) {
      return Home;
    }

    if (meeting.isOnline) {
      return Video;
    }

    return Church;
  };

  const getScheduleLabel = (
    meeting: Meeting
  ) => {
    if (meeting.type === "special") {
      return "Special Event";
    }

    if (
      meeting.frequency === "monthly" &&
      meeting.dayOfWeek !== undefined &&
      meeting.weekOfMonth
    ) {
      return `${WEEK_LABELS[
        meeting.weekOfMonth
      ]} ${DAYS[meeting.dayOfWeek]}`;
    }

    if (
      meeting.frequency === "weekly" &&
      meeting.dayOfWeek !== undefined
    ) {
      return DAYS[meeting.dayOfWeek];
    }

    return "TBA";
  };

  const formatNextDate = (
    date?: string
  ) => {
    if (!date) return "TBA";

    return new Date(date).toLocaleDateString(
      "en-GB",
      {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
  };

  if (loading) {
    return (
      <section className="px-4 py-24 text-center">
        <p className="text-muted-foreground">
          Loading meetings...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-4 py-24 text-center">
        <p className="text-red-500">
          {error}
        </p>
      </section>
    );
  }

  return (
    <section
      id="weekly-meetings"
      className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-primary">
            <CalendarDays className="h-3.5 w-3.5" />
            Weekly Schedule
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] md:text-5xl">
            Gather With Us
            <span className="block text-primary">
              Throughout The Week
            </span>
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Every gathering is an opportunity
            to worship, grow in faith, build
            relationships and encounter God's
            presence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          <div className="absolute left-[28px] top-0 hidden h-full w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent lg:block" />

          <div className="space-y-8">
            {meetings.map(
              (meeting, index) => {
                const Icon =
                  getIcon(meeting);

                const featured =
                  index < 2;

                return (
                  <motion.div
                    key={meeting._id}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay:
                        index * 0.08,
                    }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-xl lg:flex">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="lg:pl-24">
                      <div
                        className={`group glass glass-hover overflow-hidden rounded-[2.5rem] border ${
                          featured
                            ? "border-primary/20 glow-gold"
                            : "border-white/20"
                        }`}
                      >
                        <div className="grid lg:grid-cols-[340px_1fr]">
                          {/* Image */}
                          <div className="relative h-[260px] lg:h-full">
                            <Image
                              src={
                                meeting.image ||
                                "/images/events/default.jpeg"
                              }
                              alt={
                                meeting.title
                              }
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {featured && (
                              <div className="absolute left-5 top-5 rounded-full bg-primary px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                                Featured
                              </div>
                            )}
                          </div>

                          {/* Content */}
                          <div className="flex flex-col justify-center p-8 md:p-10">
                            <div className="inline-flex w-fit rounded-full bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-primary">
                              {getScheduleLabel(
                                meeting
                              )}
                            </div>

                            <h3 className="mt-5 text-3xl font-black tracking-[-0.04em]">
                              {meeting.title}
                            </h3>

                            <p className="mt-3 text-muted-foreground">
                              {
                                meeting.description
                              }
                            </p>

                            <div className="mt-6 flex flex-wrap gap-4">
                              <div className="glass rounded-2xl px-5 py-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                  Schedule
                                </p>

                                <p className="mt-1 font-bold">
                                  {getScheduleLabel(
                                    meeting
                                  )}
                                </p>
                              </div>

                              <div className="glass rounded-2xl px-5 py-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                  Time
                                </p>

                                <p className="mt-1 flex items-center gap-2 font-bold">
                                  <Clock3 className="h-4 w-4 text-primary" />
                                  {meeting.time ||
                                    "TBA"}
                                </p>
                              </div>

                              <div className="glass rounded-2xl px-5 py-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                  Next Date
                                </p>

                                <p className="mt-1 font-bold">
                                  {formatNextDate(
                                    meeting.nextOccurrence
                                  )}
                                </p>
                              </div>

                              {meeting.isOnline && (
                                <div className="glass rounded-2xl px-5 py-4">
                                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                    Venue
                                  </p>

                                  <p className="mt-1 font-bold">
                                    {meeting.location ||
                                      "Online"}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};