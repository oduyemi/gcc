"use client";
import { motion } from "framer-motion";
import {
  Mic2,
  Piano,
  Headphones,
  Camera,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const opportunities = [
  {
    icon: Mic2,
    title: "Sing",
    subtitle: "Vocals & Choir",
    description:
      "Use your voice to lead worship, support the choir and help create meaningful worship experiences.",
  },
  {
    icon: Piano,
    title: "Play",
    subtitle: "Musicians",
    description:
      "Whether keyboard, drums, guitar or another instrument, your musical gifts can serve the church.",
  },
  {
    icon: Headphones,
    title: "Produce",
    subtitle: "Audio & Livestream",
    description:
      "Support worship through sound engineering, streaming and technical excellence behind the scenes.",
  },
  {
    icon: Camera,
    title: "Create",
    subtitle: "Media & Creative",
    description:
      "Capture stories, create content and help communicate the life and mission of the church.",
  },
];

export const ServingOpportunities = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/[0.04] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#AF3800]/[0.04] blur-3xl" />
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
              bg-primary/5
              px-4 py-2
              text-[11px]
              font-black
              tracking-[0.25em]
              uppercase
              text-primary
            "
          >
            <Sparkles className="h-3.5 w-3.5" />
            Join The Team
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
            Use Your Gifts
            <span className="block text-primary">
              For God's Glory
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            You don't have to be a professional. If you have a willing
            heart, a teachable spirit and a desire to serve, there may
            be a place for you on the team.
          </p>
        </motion.div>

        {/* Opportunities */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {opportunities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border border-primary/10
                  bg-white
                  p-8
                  shadow-sm
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                {/* Glow */}

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-28
                    w-28
                    rounded-full
                    bg-primary/[0.05]
                    blur-3xl
                  "
                />

                {/* Icon */}

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

                <div className="mt-6">
                  <p className="text-sm font-semibold text-primary">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-2 text-3xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {/* <div
                  className="
                    mt-8
                    flex items-center gap-2
                    font-semibold
                    text-primary
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
                </div> */}
              </motion.div>
            );
          })}
        </div>

        {/* Scripture Callout */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-16
            max-w-5xl
            rounded-[2.5rem]
            border border-primary/10
            bg-gradient-to-br
            from-primary/[0.04]
            via-white
            to-[#AF3800]/[0.04]
            p-8 md:p-10
            text-center
          "
        >
          <p className="text-2xl font-semibold leading-relaxed">
            “Each of you should use whatever gift you have received
            to serve others, as faithful stewards of God's grace.”
          </p>

          <p className="mt-4 font-bold text-primary">
            1 Peter 4:10
          </p>
        </motion.div>
      </div>
    </section>
  );
};