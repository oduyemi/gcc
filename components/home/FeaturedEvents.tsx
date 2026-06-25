"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  ArrowRight,
  Sparkles,
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getNextMeetingDate } from "@/utils/getNextMeetingDate";

type Meeting = {
  _id: string;
  title: string;
  description?: string;
  category: "service" | "prayer" | "fellowship" | "special";
  type: "recurring" | "special";
  frequency?: "weekly" | "monthly";
  dayOfWeek?: number;
  weekOfMonth?: string;
  startDate?: string;
  endDate?: string;
  image?: string;
  time?: string;
  isOnline: boolean;
  location?: string;
  meetingLink?: string;
  isActive: boolean;
  sortOrder: number;
};

export const FeaturedMeetings = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await fetch("/api/meetings");

        const result = await response.json();

        if (result.success) {
          const activeMeetings = result.data.filter(
            (meeting: Meeting) => {
              if (!meeting.isActive) return false;
          
              // Remove past special meetings
              if (
                meeting.type === "special" &&
                meeting.startDate
              ) {
                return (
                  new Date(meeting.startDate) >=
                  new Date()
                );
              }
          
              return true;
            }
          );

          setMeetings(activeMeetings);
        }
      } catch (error) {
        console.error("Failed to fetch meetings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  const sortedMeetings = [...meetings].sort((a, b) => {
    const dateA = getNextMeetingDate(a)?.getTime() ?? 0;
    const dateB = getNextMeetingDate(b)?.getTime() ?? 0;
  
    return dateA - dateB;
  });
  
  const featuredMeeting = sortedMeetings[0];
  const otherMeetings = sortedMeetings.slice(1, 4);

  const getDateParts = (
    dateValue?: Date | string | null
  ) => {
    if (!dateValue) {
      return {
        date: "--",
        month: "---",
        fullDate: "Date TBA",
        day: "",
      };
    }
  
    const date = new Date(dateValue);
  
    return {
      day: date.toLocaleDateString("en-US", {
        weekday: "long",
      }),
  
      date: date
        .getDate()
        .toString()
        .padStart(2, "0"),
  
      month: date
        .toLocaleDateString("en-US", {
          month: "short",
        })
        .toUpperCase(),
  
      fullDate: date.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };
  };

  if (loading) {
    return (
      <section className="px-4 py-24 text-center">
        <p>Loading meetings...</p>
      </section>
    );
  }

  if (!featuredMeeting) {
    return null;
  }

  const featuredDate = getDateParts(
    getNextMeetingDate(featuredMeeting)
  );

  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-[-5%] top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 right-[-5%] h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-3xl" />
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
            Join Us This Week
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-[-0.05em]
              md:text-5xl
              lg:text-6xl
            "
          >
            Upcoming Meetings
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Gather with us in worship, prayer,
            fellowship and spiritual growth.
          </p>
        </motion.div>

        {/* Featured Meeting */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="glass glow-gold relative overflow-hidden rounded-[3rem] p-8 md:p-12">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_180px]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-white">
                  <Flame className="h-4 w-4" />
                  Featured Meeting
                </div>

                <h3 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.05em] md:text-6xl">
                  {featuredMeeting.title}
                </h3>

                <p className="mt-5 text-lg text-muted-foreground">
                  {featuredMeeting.description ||
                    "Join us for worship, prayer, fellowship and biblical teaching."}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="glass rounded-2xl px-5 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Date
                    </p>

                    <p className="mt-1 font-bold">
                      {featuredDate.fullDate}
                    </p>
                  </div>

                  <div className="glass rounded-2xl px-5 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Time
                    </p>

                    <p className="mt-1 flex items-center gap-2 font-bold">
                      <Clock3 className="h-4 w-4 text-primary" />
                      {featuredMeeting.time || "TBA"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center rounded-[2rem] bg-primary p-8 text-white">
                <span className="text-6xl font-black leading-none">
                  {featuredDate.date}
                </span>

                <span className="mt-2 text-lg font-bold tracking-[0.25em]">
                  {featuredDate.month}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Meetings */}

        {otherMeetings.length > 0 && (
          <div className="mt-14">
            <div className="mb-8 flex items-center gap-3">
              <CalendarDays className="h-5 w-5 text-primary" />

              <h3 className="text-2xl font-black">
                More Meetings
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {otherMeetings.map(
                (meeting, index) => {
                  const dateParts = getDateParts(
                    getNextMeetingDate(meeting)
                  );

                  return (
                    <motion.div
                      key={meeting._id}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay:
                          index * 0.08,
                      }}
                      className="glass glass-hover rounded-[2rem] p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-primary/10">
                          <span className="text-xl font-black text-primary">
                            {dateParts.date}
                          </span>

                          <span className="text-[10px] font-bold tracking-[0.2em] text-primary">
                            {dateParts.month}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-xl font-black">
                            {meeting.title}
                          </h4>

                          <p className="mt-1 text-muted-foreground">
                            {meeting.description}
                          </p>

                          <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                            <Clock3 className="h-4 w-4 text-primary" />
                            {meeting.time ||
                              "TBA"}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                }
              )}
            </div>
          </div>
        )}

        {/* CTA */}

        <div className="mt-14 flex justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 font-bold"
          >
            <Link href="/events">
              View Full Church Calendar

              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};