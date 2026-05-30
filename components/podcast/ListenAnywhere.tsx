"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Laptop,
  Headphones,
} from "lucide-react";

const options = [
  {
    title: "Listen On Mobile",
    description:
      "Take powerful teachings with you wherever you go and stay encouraged throughout your day.",
    icon: Smartphone,
    featured: true,
  },
  {
    title: "Listen On Desktop",
    description:
      "Enjoy messages from the comfort of your home or office.",
    icon: Laptop,
  },
  {
    title: "Listen On The Go",
    description:
      "Perfect for commuting, exercising, travelling, or quiet reflection.",
    icon: Headphones,
  },
];

export const ListenAnywhere = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute right-[-10%] bottom-0 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className="
              inline-flex
              rounded-full
              bg-primary/5
              px-4 py-2
              text-[11px]
              font-black
              tracking-[0.22em]
              uppercase
              text-primary
            "
          >
            Listen Anywhere
          </div>

          <h2
            className="
              mt-5
              text-4xl
              font-black
              tracking-[-0.05em]
              md:text-6xl
            "
          >
            Wherever Life
            <span className="block text-primary">
              Takes You
            </span>
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Access faith-building messages and teachings
            anytime, anywhere.
          </p>
        </motion.div>

        {/* Featured Card */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div
            className="
              glass
              glow-gold
              glass-hover
              group
              relative
              overflow-hidden
              rounded-[3rem]
              p-10
            "
          >
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
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
                  <Smartphone className="h-10 w-10" />
                </div>

                <h3 className="mt-8 text-4xl font-black">
                  Listen On Mobile
                </h3>

                <p
                  className="
                    mt-5
                    max-w-2xl
                    leading-8
                    text-muted-foreground
                  "
                >
                  Take powerful teachings with you wherever
                  you go and stay encouraged throughout your
                  day.
                </p>
              </div>

              <div
                className="
                  rounded-[2rem]
                  border border-primary/10
                  bg-white/40
                  px-8 py-6
                  text-center
                "
              >
                <p className="text-sm text-muted-foreground">
                  Available Anywhere
                </p>

                <p className="mt-2 text-3xl font-black">
                  24/7
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Cards */}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {options.slice(1).map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="
                  glass
                  glass-hover
                  group
                  relative
                  overflow-hidden
                  rounded-[2.5rem]
                  p-8
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary/10
                    text-primary
                  "
                >
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-2xl font-black">
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-8
                    text-muted-foreground
                  "
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};