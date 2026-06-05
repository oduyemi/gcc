"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Music4,
  Users,
  Radio,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    id: "worship",
    label: "Worship",
    icon: Music4,
    images: [
      "/images/galleryhero.jpg",
      "/images/worship2.jpg",
      "/images/worship3.jpg",
      "/images/worship4.jpg",
      "/images/worship5.jpg",
      "/images/worship6.jpg",
    ],
  },
  {
    id: "choir",
    label: "Choir",
    icon: Users,
    images: [
        "/images/choir1.jpg",
        "/images/choir2.jpg",
        "/images/choir3.jpg",
        "/images/choir4.jpg",
        "/images/choir5.jpg",
        "/images/choir6.jpg",
    ],
  },
  {
    id: "production",
    label: "Production",
    icon: Radio,
    images: [
      "/images/music/production-1.jpg",
      "/images/music/production-2.jpg",
      "/images/music/production-3.jpg",
      "/images/music/production-4.jpg",
      "/images/music/production-5.jpg",
      "/images/music/production-6.jpg",
    ],
  },
  {
    id: "events",
    label: "Events",
    icon: Sparkles,
    images: [
      "/images/music/event-1.jpg",
      "/images/music/event-2.jpg",
      "/images/music/event-3.jpg",
      "/images/music/event-4.jpg",
      "/images/music/event-5.jpg",
      "/images/music/event-6.jpg",
    ],
  },
];

export const MusicTechnicalGallery = () => {
  const [activeTab, setActiveTab] = useState("worship");

  const activeCategory =
    categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section className="relative overflow-hidden bg-muted/20 px-4 py-24 md:px-8 lg:px-12">
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
            Ministry Gallery
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
            Moments Of Worship,
            <span className="block text-primary">
              Service & Creativity
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            A glimpse into the life of our Music & Technical Ministry.
          </p>
        </motion.div>

        {/* Tabs */}

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const Icon = category.icon;

            const active = activeTab === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`
                  inline-flex items-center gap-2
                  rounded-2xl
                  px-5 py-3
                  font-semibold
                  transition-all duration-300
                  ${
                    active
                      ? "bg-primary text-white shadow-lg"
                      : "border border-primary/10 bg-white hover:border-primary/30"
                  }
                `}
              >
                <Icon className="h-4 w-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Gallery */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {activeCategory.images.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: index * 0.05,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                "
              >
                <div className="relative h-80">
                  <Image
                    src={image}
                    alt={activeCategory.label}
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
                      from-black/50
                      via-transparent
                      to-transparent
                    "
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Statement */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-14
            max-w-4xl
            rounded-[2rem]
            border border-primary/10
            bg-white
            p-8
            text-center
            shadow-sm
          "
        >
          <p className="text-lg font-medium leading-8 text-muted-foreground">
            Every rehearsal, every service and every event represents
            people using their gifts to glorify God and serve others
            with excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};