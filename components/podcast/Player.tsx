"use client";

import { motion } from "framer-motion";

export const PodcastPlayer = () => {
  return (
    <section className="relative px-4 pb-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            glass
            glow-lavender
            overflow-hidden
            rounded-[3rem]
            p-4
            md:p-8
          "
        >
          <div className="mb-8 text-center">
            <h2
              className="
                text-3xl
                font-black
                tracking-[-0.04em]
                md:text-5xl
              "
            >
              Podcast Library
            </h2>

            <p className="mt-4 text-muted-foreground">
              Browse and listen to our latest messages and
              teachings.
            </p>
          </div>

          <div
            className="
              overflow-hidden
              rounded-[2rem]
              bg-white/40
              p-2
            "
          >
            <iframe
              title="Global Crossfire Podcast"
              src="https://www.podbean.com/player-v2/?i=PLAYLIST_ID"
              width="100%"
              height="600"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};