"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

export const ContactHero = () => {
  return (
    <section className="relative overflow-hidden px-4 py-28 md:px-8 lg:px-12">
      {/* Background Orbs */}

      <div className="absolute inset-0">
        <div className="absolute left-[-5%] top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute right-[-5%] top-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Content */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-primary/10
                bg-primary/5
                px-4
                py-2
                text-[11px]
                font-black
                tracking-[0.25em]
                text-primary
                uppercase
              "
            >
              Contact Global Crossfire Church UK
            </div>

            <h1
              className="
                mt-6
                text-5xl
                font-black
                leading-none
                tracking-[-0.06em]
                md:text-7xl
              "
            >
              We'd Love
              <span className="block text-primary">
                To Hear From You
              </span>
            </h1>

            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              Whether you're planning your first visit, looking for
              prayer, seeking guidance, or simply have a question,
              our church family is ready to connect with you.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contact-form"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-primary
                  px-6
                  py-4
                  font-bold
                  text-primary-foreground
                  transition-all
                  hover:scale-[1.02]
                "
              >
                Send A Message
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#visit-us"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-primary/15
                  bg-white/60
                  px-6
                  py-4
                  font-bold
                  backdrop-blur-md
                "
              >
                Plan Your Visit
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-primary" />

                <span className="text-sm text-muted-foreground">
                  Sundays • 10:30 AM
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />

                <span className="text-sm text-muted-foreground">
                  Ramsgate, Kent
                </span>
              </div>
            </div>
          </motion.div>

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="
                glass
                overflow-hidden
                rounded-[3rem]
                p-3
              "
            >
              <div className="relative h-[600px] overflow-hidden rounded-[2.4rem]">
                <Image
                  src="/images/church/contact-hero.jpg"
                  alt="Global Crossfire Church UK"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div
                    className="
                      glass
                      rounded-[2rem]
                      p-6
                    "
                  >
                    <p className="text-sm font-semibold text-primary">
                      You're Always Welcome
                    </p>

                    <h3 className="mt-2 text-2xl font-black">
                      Join Us This Sunday
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};