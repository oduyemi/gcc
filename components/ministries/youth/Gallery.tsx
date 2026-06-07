"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ImageIcon } from "lucide-react";

const categories = [
  "All",
  "Worship",
  "Graduations",
  // "Sports",
  "Programs",
  "Hangouts",
];

const gallery = [
  {
    image: "/images/youth/worship/one.jpg",
    title: "Celebration Service",
    category: "Worship",
  },
  {
    image: "/images/youth/grad1.jpg",
    title: "Graduation, May 26th, 2024",
    category: "Graduations",
  },
  // {
  //   image: "/images/youth/gallery-3.jpg",
  //   title: "Football Tournament",
  //   category: "Sports",
  // },
  {
    image: "/images/youth/programs/one.jpeg",
    title: "Community Programs",
    category: "Programs",
  },
  
  {
    image: "/images/youth/hangout/one.jpeg",
    title: "Youth Hangout",
    category: "Hangouts",
  },
  {
    image: "/images/youth/worship/youth.jpg",
    title: "Prayer Gathering",
    category: "Worship",
  },
  {
    image: "/images/youth/programs/two.jpeg",
    title: "Community Programs",
    category: "Programs",
  },
  {
    image: "/images/youth/grad2.jpg",
    title: "Graduation, May 26th, 2024",
    category: "Graduations",
  },
  {
    image: "/images/youth/hangout/two.jpeg",
    title: "Youth Hangout",
    category: "Hangouts",
  },
  // {
  //   image: "/images/youth/gallery-8.jpg",
  //   title: "Basketball Day",
  //   category: "Sports",
  // },

  {
    image: "/images/youth/worship/two.jpg",
    title: "Celebration Service",
    category: "Worship",
  },
  {
    image: "/images/youth/programs/three.jpeg",
    title: "Community Programs",
    category: "Programs",
  },
  {
    image: "/images/youth/grad3.jpg",
    title: "Graduation, May 26th, 2024",
    category: "Graduations",
  },
  {
    image: "/images/youth/hangout/three.jpeg",
    title: "Youth Hangout",
    category: "Hangouts",
  }
];

export const YouthMinistryGallery = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? gallery
      : gallery.filter((item) => item.category === active);

  return (
    <section className="relative overflow-hidden bg-muted/20 px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/[0.04] blur-3xl" />
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
            <Camera className="h-3.5 w-3.5" />
            Youth Moments
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
            Life In Our Youth Ministry
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            A glimpse into worship, friendships, Programs, Graduations,
            sports and unforgettable moments together.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`
                rounded-full
                px-5 py-3
                text-sm
                font-semibold
                transition-all
                ${
                  active === category
                    ? "bg-primary text-white shadow-lg"
                    : "border border-primary/10 bg-white hover:bg-primary/5"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="relative h-[450px] overflow-hidden rounded-[2.5rem]">
            <Image
              src="/images/youth/group.jpg"
              alt="Youth Ministry"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-8 left-8">
              <div className="rounded-2xl bg-white/95 px-5 py-4 backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                  Featured Moment
                </p>

                <h3 className="mt-1 text-xl font-black">
                  Building Faith & Friendships
                </h3>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              mt-10
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {filtered.map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                }}
                className="
                  group
                  overflow-hidden
                  rounded-[2rem]
                  bg-white
                  shadow-sm
                "
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/75
                      via-transparent
                      to-transparent
                    "
                  />

                  <div className="absolute bottom-5 left-5 right-5">
                    <span
                      className="
                        rounded-full
                        bg-white/90
                        px-3 py-1
                        text-xs
                        font-semibold
                      "
                    >
                      {item.category}
                    </span>

                    <h4 className="mt-3 text-lg font-bold text-white">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div
            className="
              rounded-[2.5rem]
              border border-primary/10
              bg-white
              p-8 md:p-10
              text-center
              shadow-sm
            "
          >
            <ImageIcon className="mx-auto h-10 w-10 text-primary" />

            <h3 className="mt-4 text-3xl font-black">
              Creating Memories Together
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Every gathering is an opportunity to grow in faith,
              build friendships, and experience life-changing moments
              with God and one another.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};