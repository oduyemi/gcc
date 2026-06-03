"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  PlayCircle,
  Users2,
} from "lucide-react";

export const BeforeYouVisit = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
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
            inline-flex items-center
            rounded-full
            bg-primary/5
            px-4 py-2
            text-[11px]
            font-black
            tracking-[0.25em]
            text-primary
            uppercase
          "
          >
            Before You Visit
          </div>

          <h2
            className="
            mt-5
            text-4xl
            font-black
            tracking-[-0.05em]
            text-foreground
            md:text-5xl
          "
          >
            Explore Before You Arrive
          </h2>

          <p className="mt-4 text-muted-foreground">
            A few things to help you feel right at home.
          </p>
        </motion.div>

        {/* Featured Sermon */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <Link
            href="/sermons"
            className="
            group
            relative
            block
            overflow-hidden
            rounded-[2.8rem]
          "
          >
            <div className="relative h-[420px]">
              <Image
                src="/images/sermon-preview.png"
                alt="Watch a sermon"
                fill
                className="
                object-cover
                transition-transform duration-700
                group-hover:scale-105
              "
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              {/* Play Button */}

              <div
                className="
                absolute right-8 top-8
                flex h-20 w-20 items-center justify-center
                rounded-full
                bg-white/15
                backdrop-blur-xl
              "
              >
                <PlayCircle className="h-10 w-10 text-white" />
              </div>

              {/* Content */}

              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                <div
                  className="
                  inline-flex items-center gap-2
                  rounded-full
                  bg-white/15
                  px-4 py-2
                  text-xs
                  font-black
                  tracking-[0.22em]
                  text-white
                  uppercase
                  backdrop-blur-xl
                "
                >
                  Watch Online
                </div>

                <h3
                  className="
                  mt-5
                  text-4xl
                  font-black
                  tracking-[-0.05em]
                  text-white
                  md:text-5xl
                "
                >
                  Watch A Sermon
                </h3>

                <p className="mt-4 max-w-lg text-white/80">
                  Experience our worship, teaching, and atmosphere before
                  stepping through the doors.
                </p>

                <div
                  className="
                  mt-6
                  inline-flex items-center gap-2
                  font-bold
                  text-primary
                "
                >
                  Watch Now

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Secondary Cards */}

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* About */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/about"
              className="
              group
              flex h-full items-center gap-5
              rounded-[2rem]
              border border-primary/10
              bg-white
              p-6
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
            >
              <div
                className="
                flex h-16 w-16 shrink-0 items-center justify-center
                rounded-2xl
                bg-primary/10
              "
              >
                <BookOpen className="h-7 w-7 text-primary" />
              </div>

              <div>
                <h3 className="text-xl font-black">
                  Learn About Us
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Our vision, beliefs, values, and mission.
                </p>
              </div>

              <ArrowRight className="ml-auto h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Expect */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            <Link
              href="#service-details"
              className="
              group
              flex h-full items-center gap-5
              rounded-[2rem]
              border border-primary/10
              bg-white
              p-6
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
            >
              <div
                className="
                flex h-16 w-16 shrink-0 items-center justify-center
                rounded-2xl
                bg-primary/10
              "
              >
                <Users2 className="h-7 w-7 text-primary" />
              </div>

              <div>
                <h3 className="text-xl font-black">
                  What To Expect
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Know exactly what your first Sunday looks like.
                </p>
              </div>

              <ArrowRight className="ml-auto h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};