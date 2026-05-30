"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const impactAreas = [
  {
    title: "Worship & Ministry",
    image: "/images/givingchurch.jpg",
  },
  {
    title: "Community Outreach",
    image: "/images/outreach.jpg",
  },
  {
    title: "Educational Projects",
    image: "/images/edu-outreach.jpg",
  },
];


export const GivingImpact = () => {
  return (
    <section className="relative px-4 py-24 md:px-8 lg:px-12">
      {/* Decorative Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}

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
              text-primary
              uppercase
            "
          >
            Your Giving In Action
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
            Every Gift Helps
            <span className="block text-primary">
              Change Lives
            </span>
          </h2>
        </motion.div>

        {/* Main Feature */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[3rem]
            "
          >
            <div className="relative h-[500px]">
              <Image
                src={impactAreas[0].image}
                alt={impactAreas[0].title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-10 left-10 max-w-xl">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
                  Ministry Impact
                </p>

                <h3 className="mt-3 text-5xl font-black text-white">
                  Worship &
                  Discipleship
                </h3>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Cards */}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {impactAreas.slice(1).map((area) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2.5rem]
              "
            >
              <div className="relative h-[340px]">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-black text-white">
                    {area.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};