"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const galleries = {
  conferences: [
    "/images/women/conf1.jpeg",
    "/images/women/conf2.jpeg",
    "/images/women/conf3.jpeg",
  ],

  fellowship: [
    "/images/women/fel1.jpeg",
    "/images/women/fel2.jpeg",
  ],

  prayer: [
    "/images/women/pr1.jpeg",
    "/images/women/pr2.jpeg",
  ],

  
};

const tabs = [
  { id: "conferences", label: "Conferences" },
  { id: "fellowship", label: "Fellowship" },
  { id: "prayer", label: "Prayer Gatherings" },
];

export const WomenGallery = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof galleries>("conferences");

  const images = galleries[activeTab];

  return (
    <section className="relative overflow-hidden bg-muted/20 px-4 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
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
            Moments & Memories
          </div>

          <h2
            className="
              mt-5
              text-4xl
              font-black
              tracking-[-0.05em]
              md:text-5xl
            "
          >
            Life Together
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Celebrating the moments that strengthen faith,
            friendships and community.
          </p>
        </div>

        {/* Tabs */}

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setActiveTab(tab.id as keyof typeof galleries)
              }
              className={`
                rounded-2xl px-5 py-3
                text-sm font-semibold
                transition-all
                ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white border border-primary/10"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-12 grid gap-5 lg:grid-cols-[1.4fr_1fr]"
          >
            {/* Featured */}

            <div className="relative h-[520px] overflow-hidden rounded-[2.5rem]">
              <Image
                src={images[0]}
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Smaller Images */}

            <div className="grid gap-5 sm:grid-cols-2">
              {images.slice(1).map((image) => (
                <div
                  key={image}
                  className="relative h-[250px] overflow-hidden rounded-[2rem]"
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};