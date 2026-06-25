"use client";

import { FaFacebookF, FaInstagram } from "react-icons/fa";

export function ConnectCTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="glass rounded-4xl p-10 text-center lg:p-16">
          <h2 className="text-4xl font-black">
            Join Our Online Community
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Stay inspired throughout the week with
            worship clips, teachings, event updates
            and encouragement.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.instagram.com/globalcrossfirechurchuk/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-white"
            >
              <FaInstagram />
              Instagram
            </a>

            <a
              href="https://facebook.com/GlobalCrossfireChurchUk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/40 px-8 py-4"
            >
              <FaFacebookF />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}