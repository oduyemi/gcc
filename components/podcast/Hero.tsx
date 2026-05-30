"use client";

import { motion } from "framer-motion";
import { Mic2, Headphones } from "lucide-react";

export const PodcastHero = () => {
  return (
    <section className="relative overflow-hidden px-4 py-28 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-0 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute right-[-10%] bottom-0 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-primary/10
              bg-primary/5
              px-4 py-2
              text-[11px]
              font-black
              tracking-[0.22em]
              uppercase
              text-primary
            "
          >
            <Mic2 className="h-4 w-4" />
            Audio Messages
          </div>

          <h1
            className="
              mt-6
              text-5xl
              font-black
              tracking-[-0.06em]
              md:text-7xl
            "
          >
            Listen.
            <span className="block text-primary">
              Grow. Be Inspired.
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-muted-foreground
            "
          >
            Access powerful teachings, messages, and
            faith-building content designed to encourage
            spiritual growth wherever you are.
          </p>

          <div className="mt-10 flex justify-center">
            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-[2rem]
                bg-primary/10
                text-primary
              "
            >
              <Headphones className="h-10 w-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};