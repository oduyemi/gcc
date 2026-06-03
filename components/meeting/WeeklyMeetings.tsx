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
  Book
} from "lucide-react";

const meetings = [
  {
    title: "Sunday School Meeting",
    subtitle: "Weekly Bible Study",
    day: "Sunday",
    time: "10:00 AM – 10:30 AM",
    icon: Book,
    image: "/images/events/sundayschool.jpg",
    featured: true,
  },
  {
    title: "Sunday Celebration Gathering",
    subtitle: "Weekly Worship Service",
    day: "Sunday",
    time: "10:30 AM – 12:30 PM",
    icon: Church,
    image: "/images/events/sunday-service.jpg",
    featured: true,
  },
  {
    title: "Home Cell Meeting",
    subtitle: "Connect • Grow • Fellowship",
    day: "Tuesday",
    time: "6:00 PM – 7:00 PM",
    icon: Home,
    image: "/images/events/homecell.jpeg",
  },
  {
    title: "Hour of Encounter",
    subtitle: "Prayer Meeting Via Zoom",
    day: "Friday",
    time: "6:00 PM – 7:00 PM",
    icon: Video,
    image: "/images/events/prayer-meeting.jpg",
  },
  {
    title: "Jabez Moment",
    subtitle: "Interchurch Prayer Gathering",
    day: "Monthly",
    time: "6:00 PM – 7:30 PM",
    icon: Flame,
    image: "/images/events/jabez.jpeg",
  },
];

export const WeeklyMeetings = () => {
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
          initial={{ opacity: 0, y: 25 }}
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
              tracking-[0.25em]
              text-primary
            "
          >
            <CalendarDays className="h-3.5 w-3.5" />
            Weekly Schedule
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
            Gather With Us
            <span className="block text-primary">
              Throughout The Week
            </span>
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Every gathering is an opportunity to worship,
            grow in faith, build relationships and encounter
            God's presence.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-20">
          {/* Vertical Line */}

          <div
            className="
              absolute
              left-[28px]
              top-0
              hidden
              h-full
              w-px
              bg-gradient-to-b
              from-primary/30
              via-primary/10
              to-transparent
              lg:block
            "
          />

          <div className="space-y-8">
            {meetings.map((meeting, index) => {
              const Icon = meeting.icon;

              return (
                <motion.div
                  key={meeting.title}
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
                  className="relative"
                >
                  {/* Timeline Dot */}

                  <div
                    className="
                      absolute
                      left-0
                      top-8
                      hidden
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-primary
                      text-white
                      shadow-xl
                      lg:flex
                    "
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="lg:pl-24">
                    <div
                      className={`
                        group
                        glass
                        glass-hover
                        overflow-hidden
                        rounded-[2.5rem]
                        border

                        ${
                          meeting.featured
                            ? "border-primary/20 glow-gold"
                            : "border-white/20"
                        }
                      `}
                    >
                      <div className="grid lg:grid-cols-[340px_1fr]">
                        {/* Image */}

                        <div className="relative h-[260px] lg:h-full">
                          <Image
                            src={meeting.image}
                            alt={meeting.title}
                            fill
                            className="
                              object-cover
                              transition-transform
                              duration-700
                              group-hover:scale-105
                            "
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                          {meeting.featured && (
                            <div
                              className="
                                absolute
                                left-5
                                top-5
                                rounded-full
                                bg-primary
                                px-4
                                py-2
                                text-[10px]
                                font-black
                                uppercase
                                tracking-[0.2em]
                                text-white
                              "
                            >
                              Most Popular
                            </div>
                          )}
                        </div>

                        {/* Content */}

                        <div className="flex flex-col justify-center p-8 md:p-10">
                          <div
                            className="
                              inline-flex w-fit
                              rounded-full
                              bg-primary/10
                              px-4 py-2
                              text-xs
                              font-black
                              uppercase
                              tracking-[0.22em]
                              text-primary
                            "
                          >
                            {meeting.day}
                          </div>

                          <h3
                            className="
                              mt-5
                              text-3xl
                              font-black
                              tracking-[-0.04em]
                            "
                          >
                            {meeting.title}
                          </h3>

                          <p className="mt-3 text-muted-foreground">
                            {meeting.subtitle}
                          </p>

                          <div className="mt-6 flex flex-wrap gap-4">
                            <div
                              className="
                                glass
                                rounded-2xl
                                px-5 py-4
                              "
                            >
                              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                Day
                              </p>

                              <p className="mt-1 font-bold">
                                {meeting.day}
                              </p>
                            </div>

                            <div
                              className="
                                glass
                                rounded-2xl
                                px-5 py-4
                              "
                            >
                              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                Time
                              </p>

                              <p className="mt-1 flex items-center gap-2 font-bold">
                                <Clock3 className="h-4 w-4 text-primary" />
                                {meeting.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};