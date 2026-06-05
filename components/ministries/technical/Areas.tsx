"use client";
import { motion } from "framer-motion";
import {
  Mic2,
  Music4,
  Users,
  Headphones,
  MonitorPlay,
  Camera,
  ArrowRight,
} from "lucide-react";

const areas = [
  {
    icon: Mic2,
    title: "Worship Leaders",
    description:
      "Leading the congregation into authentic worship and helping create an atmosphere where people encounter God.",
  },
  {
    icon: Music4,
    title: "Musicians",
    description:
      "Serving through instruments and musical excellence to support worship experiences and special services.",
  },
  {
    icon: Users,
    title: "Choir",
    description:
      "Using collective voices to inspire worship, strengthen services and support special ministry events.",
  },
  {
    icon: Headphones,
    title: "Audio Team",
    description:
      "Managing sound systems and audio production to ensure clear and excellent worship experiences.",
  },
  {
    icon: MonitorPlay,
    title: "Livestream & Media",
    description:
      "Helping people engage with services online through streaming, presentation and digital ministry.",
  },
  {
    icon: Camera,
    title: "Photography & Creative",
    description:
      "Capturing moments, telling stories and supporting church communication through visual creativity.",
  },
];

export const MinistryAreas = () => {
  return (
    <section
      id="areas"
      className="relative overflow-hidden bg-white px-4 py-24 md:px-8 lg:px-12"
    >
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
              inline-flex items-center
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
            Ministry Opportunities
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
            Find Your Place
            <span className="block text-primary">
              To Serve
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Whether you're gifted in worship, music, technology,
            creativity or media, there is a place for you to serve
            and make an impact.
          </p>
        </motion.div>

        {/* Areas Grid */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {areas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.title}
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
                {/* Decorative Glow */}

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-32
                    w-32
                    rounded-full
                    bg-primary/[0.04]
                    blur-3xl
                    transition-all duration-500
                    group-hover:bg-primary/[0.08]
                  "
                />

                {/* Icon */}

                <div
                  className="
                    relative
                    flex h-16 w-16 items-center justify-center
                    rounded-2xl
                    bg-primary/10
                    text-primary
                  "
                >
                  <Icon className="h-8 w-8" />
                </div>

                {/* Content */}

                <h3 className="mt-6 text-2xl font-black">
                  {area.title}
                </h3>

                <p className="mt-4 leading-8 text-muted-foreground">
                  {area.description}
                </p>

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

        {/* Bottom Callout */}

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
          <h3 className="text-2xl font-black md:text-3xl">
            Every Gift Matters
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground leading-8">
            Some lead worship from the stage. Others operate cameras,
            mix sound, prepare presentations or support livestreams.
            Together, every role helps create an environment where
            people can encounter God.
          </p>
        </motion.div>
      </div>
    </section>
  );
};