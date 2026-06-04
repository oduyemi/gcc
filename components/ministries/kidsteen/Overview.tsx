"use client";
import { motion } from "framer-motion";
import {
  BookOpen,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Biblical Teaching",
    description:
      "Age-appropriate lessons that help children understand God's Word and apply it to everyday life.",
  },
  {
    icon: HeartHandshake,
    title: "Meaningful Friendships",
    description:
      "A welcoming environment where children and teens can build healthy friendships and community.",
  },
  {
    icon: Sparkles,
    title: "Faith In Action",
    description:
      "Encouraging young people to worship, serve, pray and grow in their relationship with Jesus.",
  },
];

export const KidsTeensOverview = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#AF3800]/[0.03] blur-3xl" />
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
            Our Vision
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
            Helping Young People
            <span className="block text-primary">
              Know, Love & Follow Jesus
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Our Kids & Teens Ministry exists to partner with families in
            raising confident young people who know God, love others and
            live out their faith every day.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <div
                  className="
                    h-full
                    rounded-[2rem]
                    border border-primary/10
                    bg-white
                    p-8
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
                    "
                  >
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="mt-6 text-2xl font-black">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
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
              p-8 md:p-10
            "
          >
            <div className="mx-auto max-w-4xl text-center">
              <h3 className="text-3xl font-black md:text-4xl">
                Building Foundations That Last
              </h3>

              <p className="mt-5 text-lg text-muted-foreground">
                Through worship, Bible teaching, prayer, friendships and
                fun activities, we help children and teens develop a faith
                that grows with them throughout every stage of life.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};