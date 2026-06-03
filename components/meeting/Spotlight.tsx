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
} from "lucide-react";
import { Button } from "@/components/ui/button";



export const NextEventSpotlight = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* Background Effects */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[35rem] w-[35rem] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}

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
            <Flame className="h-3.5 w-3.5" />
            Featured Gathering
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
            Don't Miss What's
            <span className="block text-primary">
              Happening Next
            </span>
          </h2>
        </motion.div>

        {/* Main Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14"
        >
          <div
            className="
              glass
              glow-gold
              relative
              overflow-hidden
              rounded-[3rem]
            "
          >
            {/* Decorative Glow */}

            <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              {/* Image Side */}

              <div className="relative min-h-[500px]">
                <Image
                  src="/images/celebration.jpg"
                  alt="Sunday Celebration Gathering"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Floating Badge */}

                <div
                  className="
                    absolute
                    left-6
                    top-6
                    rounded-full
                    bg-primary
                    px-4
                    py-2
                    text-[11px]
                    font-black
                    uppercase
                    tracking-[0.22em]
                    text-white
                    shadow-xl
                  "
                >
                  Most Attended Gathering
                </div>

                {/* Bottom Overlay */}

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-4xl font-black leading-tight">
                    Sunday Celebration
                    <span className="block">
                      Gathering
                    </span>
                  </h3>
                </div>
              </div>

              {/* Content */}

              <div className="flex flex-col justify-center p-8 md:p-12">
                <div
                  className="
                    inline-flex w-fit items-center gap-2
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
                  <Users className="h-4 w-4" />
                  Everyone Welcome
                </div>

                <h3
                  className="
                    mt-6
                    text-4xl
                    font-black
                    leading-tight
                    tracking-[-0.04em]
                  "
                >
                  A Powerful Time Of Worship,
                  Prayer & Biblical Teaching
                </h3>

                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  Experience vibrant worship, practical biblical teaching,
                  heartfelt fellowship and an atmosphere where lives are
                  transformed by God's presence.
                </p>

                {/* Countdown */}

                <div className="mt-8 grid grid-cols-4 gap-3">
                  {[
                    { value: "03", label: "Days" },
                    { value: "12", label: "Hours" },
                    { value: "45", label: "Min" },
                    { value: "18", label: "Sec" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="
                        glass
                        rounded-2xl
                        p-4
                        text-center
                      "
                    >
                      <div className="text-3xl font-black text-primary">
                        {item.value}
                      </div>

                      <div
                        className="
                          mt-1
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.22em]
                          text-muted-foreground
                        "
                      >
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Details */}

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <span className="font-semibold">
                      Sunday, 31 May 2026
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-primary" />
                    <span className="font-semibold">
                      10:30 AM – 12:30 PM
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-semibold">
                      Global Crossfire Church UK
                    </span>
                  </div>
                </div>

                {/* CTA */}

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    asChild
                    className="rounded-full px-8"
                  >
                    <Link href="/visit">
                      Plan Your Visit

                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="rounded-full px-8"
                  >
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
                absolute
                right-16
                top-20
                hidden
                h-6
                w-6
                rounded-full
                bg-primary
                opacity-20
                lg:block
              "
            />

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
                absolute
                left-16
                bottom-20
                hidden
                h-4
                w-4
                rounded-full
                bg-accent
                opacity-40
                lg:block
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};