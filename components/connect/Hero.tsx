"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export function SocialHero() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass overflow-hidden rounded-4xl p-10 lg:p-16"
        >
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Social Connect
            </span>

            <h1 className="mt-6 text-5xl font-black lg:text-7xl">
              Stay Connected
              <span className="block text-primary">
                Beyond Sunday
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
              Follow Global Crossfire Church UK on social
              media for worship moments, event updates,
              teachings, testimonies and community life.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/globalcrossfirechurchuk/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-white"
              >
                <FaInstagram />
                Follow on Instagram
              </a>

              <a
                href="https://facebook.com/GlobalCrossfireChurchUk"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/40 px-8 py-4 backdrop-blur-xl"
              >
                <FaFacebookF />
                Follow on Facebook
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}