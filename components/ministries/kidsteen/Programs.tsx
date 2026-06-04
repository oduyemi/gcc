"use client";
import { motion } from "framer-motion";
import {
  BookOpen,
  Music4,
  Gamepad2,
  Users,
  Trophy,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";


const programs = [
  {
    title: "Bible Discovery",
    icon: BookOpen,
    description:
      "Interactive Bible lessons that help children understand and apply God's Word.",
  },
  {
    title: "Kids Worship",
    icon: Music4,
    description:
      "Age-appropriate praise and worship that helps children connect with God.",
  },
  {
    title: "Games & Activities",
    icon: Gamepad2,
    description:
      "Fun, engaging activities designed to build friendships and confidence.",
  },
  {
    title: "Small Groups",
    icon: Users,
    description:
      "Safe spaces where children and teens can ask questions, learn and grow together.",
  },
  {
    title: "Events & Competitions",
    icon: Trophy,
    description:
      "Special events, challenges and celebrations throughout the year.",
  },
  {
    title: "Mentoring & Care",
    icon: HeartHandshake,
    description:
      "Guidance and encouragement from trusted leaders who genuinely care.",
  },
];

export const KidsTeensPrograms = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 md:px-8 lg:px-12">
      {/* Background Effects */}

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
              uppercase
              tracking-[0.25em]
              text-primary
            "
          >
            What We Do
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
            Programs That Help
            <span className="block text-primary">
              Young People Thrive
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Every gathering is designed to help children and teenagers
            grow spiritually, build friendships and discover their God-given
            purpose.
          </p>
        </motion.div>

        {/* Program Grid */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
              >
                <div
                  className="
                    group
                    h-full
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
                  <div
                    className="
                      flex h-16 w-16 items-center justify-center
                      rounded-2xl
                      bg-primary/10
                      transition-all duration-300
                      group-hover:scale-110
                    "
                  >
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  <h3 className="mt-6 text-2xl font-black">
                    {program.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {program.description}
                  </p>

                  <div
                    className="
                      mt-6
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
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Banner */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div
            className="
              overflow-hidden
              rounded-[2.5rem]
              border border-primary/10
              bg-gradient-to-br
              from-primary/[0.04]
              via-white
              to-[#AF3800]/[0.04]
              p-10 md:p-14
            "
          >
            <div className="max-w-4xl">
              <div
                className="
                  inline-flex
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
                Safe • Fun • Christ-Centred
              </div>

              <h3 className="mt-6 text-3xl font-black md:text-5xl">
                More Than A Program.
                <span className="block text-primary">
                  A Place To Belong.
                </span>
              </h3>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                We want every child and teenager to know they are loved,
                valued and created with purpose. Through worship, teaching,
                friendship and mentorship, we help young people develop a
                lasting faith that impacts every area of life.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};