"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Flame,
  HeartHandshake,
  Globe2,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    title: "Revival",
    description:
      "Passionate worship, prayer and the power of the Holy Spirit.",
    image: "/images/revival.jpg",
    icon: Flame,
  },
  {
    title: "Discipleship",
    description:
      "Helping believers grow into mature followers of Christ.",
    image: "/images/people.jpg",
    icon: HeartHandshake,
  },
  {
    title: "Global Impact",
    description:
      "Reaching communities and nations with the Gospel.",
    image: "/images/community6.jpeg",
    icon: Globe2,
  },
];

export const OurStory = () => {
  return (
    <section className="relative overflow-hidden px-4 py-28 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_1fr]">
          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}

            <div className="relative h-[620px] overflow-hidden rounded-[3rem]">
              <Image
                src="/images/amin.jpg"
                alt="Church Worship"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}

            <div
              className="
                absolute
                bottom-8
                left-8
                rounded-[2rem]
                border border-white/20
                bg-white/95
                p-6
                shadow-2xl
                backdrop-blur-xl
              "
            >
              <p className="text-xs font-black uppercase tracking-[0.25em] text-primary">
                Since Our Beginning
              </p>

              <h3 className="mt-2 text-3xl font-black">
                Building Lives
                <br />
                Through Christ
              </h3>
            </div>

            {/* Floating Image */}

            <div
              className="
                absolute
                -right-10
                top-12
                hidden
                h-52
                w-40
                overflow-hidden
                rounded-[2rem]
                border-8 border-white
                shadow-2xl
                lg:block
              "
            >
              <Image
                src="/images/pray.jpg"
                alt="Prayer"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                bg-primary/10
                px-4 py-2
                text-[11px]
                font-black
                uppercase
                tracking-[0.25em]
                text-primary
              "
            >
              <Sparkles className="h-4 w-4" />
              Our Story
            </div>

            <h2
              className="
                mt-6
                text-5xl
                font-black
                tracking-[-0.06em]
                leading-none
              "
            >
              More Than A Church.
              <span className="block text-primary">
                A Growing Family.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Global Crossfire Church UK was founded with a passion to see
              people encounter Jesus, grow in faith and become agents
              of transformation in their communities and beyond.
              The mission of Crossfire is to equip the saints to do the 
              work of their ministry as they become mature in the use of 
              their God given abilities, to help them to know their place of 
              ministry and support them to grow into the full stature of Jesus 
              Christ through the power of the Holy Spirit to the glory of 
              God the Father, (Ephesians 4:11-16).
            </p>

            {/* Stats */}

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-[2rem] bg-white p-6 text-center shadow-lg">
                <h3 className="text-3xl font-black text-primary">
                  20+
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Years
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-6 text-center shadow-lg">
                <h3 className="text-3xl font-black text-primary">
                  1000+
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Lives Impacted
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-6 text-center shadow-lg">
                <h3 className="text-3xl font-black text-primary">
                  Global
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Mission Reach
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* VISUAL VALUES */}

        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  group
                  overflow-hidden
                  rounded-[2.5rem]
                  bg-white
                  shadow-xl
                "
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 backdrop-blur-xl">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};