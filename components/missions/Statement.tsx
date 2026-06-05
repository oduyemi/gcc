"use client";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Globe,
  Baby,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: Baby,
    title: "Supporting Children",
    description:
      "Providing practical support, educational resources and opportunities for vulnerable children.",
  },
  {
    icon: Users,
    title: "Strengthening Families",
    description:
      "Empowering families, women and young people through compassionate intervention.",
  },
  {
    icon: HeartHandshake,
    title: "Serving Communities",
    description:
      "Meeting practical needs through outreach, partnerships and community care projects.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "Extending support across Ghana and other African nations through mission initiatives.",
  },
];

export const MissionStatement = () => {
  return (
    <section className="relative overflow-hidden bg-muted/20 px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-primary/[0.05] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-[#AF3800]/[0.05] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div
            className="
              inline-flex items-center
              rounded-full
              bg-primary/10
              px-4 py-2
              text-[11px]
              font-black
              uppercase
              tracking-[0.28em]
              text-primary
            "
          >
            Our Mission
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-[-0.05em]
              text-foreground
              md:text-5xl
              lg:text-6xl
            "
          >
            Bringing Hope.
            <span className="block text-primary">
              Creating Lasting Change.
            </span>
          </h2>
        </motion.div>

        {/* Mission Statement Card */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <div
            className="
              relative overflow-hidden
              rounded-[3rem]
              border border-primary/10
              bg-white
              p-8 md:p-12 lg:p-16
              shadow-xl
            "
          >
            {/* Decorative Quote */}

            <div
              className="
                absolute right-8 top-8
                text-[8rem]
                font-black
                leading-none
                text-primary/[0.05]
              "
            >
              "
            </div>

            <div className="mx-auto max-w-4xl text-center">
              <p
                className="
                  text-2xl
                  font-bold
                  leading-relaxed
                  tracking-[-0.03em]
                  text-foreground
                  md:text-3xl
                "
              >
                We are committed to sharing the love of Christ through
                practical action, serving vulnerable families,
                empowering communities and creating opportunities for
                lasting transformation across Africa and beyond.
              </p>

              <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-primary" />

              <p
                className="
                  mx-auto mt-8
                  max-w-3xl
                  text-lg
                  leading-8
                  text-muted-foreground
                "
              >
                Through our Overseas Mission & Social Intervention
                Projects in Juapong, Kpoteme and Assin Fosu, we provide
                practical support for children, young people, women and
                families facing hardship. Working alongside schools,
                hospitals, welfare services and local authorities, we
                deliver both immediate assistance and long-term
                empowerment to communities in need.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="
                  group
                  rounded-[2rem]
                  border border-primary/10
                  bg-white
                  p-6
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    bg-primary/10
                    transition-colors
                    group-hover:bg-primary
                  "
                >
                  <Icon
                    className="
                      h-7 w-7 text-primary
                      transition-colors
                      group-hover:text-white
                    "
                  />
                </div>

                <h3 className="mt-5 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div
            className="
              rounded-[2.5rem]
              border border-primary/10
              bg-gradient-to-r
              from-primary/[0.04]
              via-white
              to-[#AF3800]/[0.04]
              p-8 md:p-10
              text-center
            "
          >
            <h3 className="text-2xl font-black md:text-3xl">
              Every Donation Creates Impact
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              Through the generosity of supporters and partners, we
              provide clothing, toiletries, educational supplies, baby
              essentials, meals and practical care that bring hope to
              individuals and families across underserved communities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};