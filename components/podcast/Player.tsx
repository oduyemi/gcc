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
            {/* <iframe
              title="Global Crossfire Podcast"
              src="https://www.podbean.com/player-v2/?i=PLAYLIST_ID"
              width="100%"
              height="600"
              allowFullScreen
            /> */}
            <iframe 
              title="Global Crossfire Church UK Podcast" 
              allowTransparency="true" 
              height="315" 
              width="100%" 
              style={{ 
                border: "none", 
                minWidth: "min(100%, 430px)",
                height:"315px" 
              }} 
              scrolling="no" 
              data-name="pb-iframe-player" 
              src="https://www.podbean.com/player-v2/?i=5wx48-1e6a7e-pbblog-playlist&share=1&download=1&rtl=0&fonts=Arial&skin=1&font-color=auto&logo_link=episode_page&order=episodic&limit=10&filter=all&ss=a713390a017602015775e868a2cf26b0&btn-skin=13&size=315" 
              loading="lazy" 
              allowFullScreen=""
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};