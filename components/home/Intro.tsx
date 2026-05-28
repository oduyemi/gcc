"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Flame,
  Globe2,
  HeartHandshake,
  PlayCircle,
  Sparkles,
  Users2,
  MapPin
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const Intro = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* =========================
          BACKGROUND DECOR
      ========================== */}

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
          absolute left-[-10%] top-10
          h-72 w-72
          rounded-full
          bg-primary/10
          blur-3xl
        "
        />

        <div
          className="
          absolute bottom-0 right-[-5%]
          h-96 w-96
          rounded-full
          bg-accent/10
          blur-3xl
        "
        />

        <div
          className="
          absolute inset-0
          bg-[linear-gradient(rgba(30,41,59,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.03)_1px,transparent_1px)]
          [background-size:110px_110px]
        "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
          {/* =========================
              LEFT CONTENT
          ========================== */}

          <div>
            {/* top label */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="
              mb-7 inline-flex items-center gap-3
              rounded-full
              border border-white/30
              bg-white/60
              px-5 py-2.5
              backdrop-blur-2xl
              shadow-[0_10px_50px_rgba(255,255,255,0.18)]
            "
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
              </div>

              <span className="text-[11px] font-black tracking-[0.32em] text-foreground uppercase">
                A Church Without Borders
              </span>
            </motion.div>

            {/* heading */}
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="
              max-w-3xl
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.06em]
              text-foreground
              sm:text-5xl
              lg:text-6xl
            "
            >
              Welcome To{" "}
              <span className="text-primary">
                Global Crossfire Church
              </span>
            </motion.h2>

            {/* description */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="
              mt-8
              max-w-2xl
              text-lg
              leading-9
              text-muted-foreground
            "
            >
              We are a passionate and Spirit-filled church in the United
              Kingdom committed to raising people who burn with purpose,
              worship boldly, love deeply, and impact the world through the
              power of Jesus Christ.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              viewport={{ once: true }}
              className="
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-muted-foreground
            "
            >
              Whether you are exploring faith, searching for community, or
              looking for a church to call home, you are welcome here. At
              Global Crossfire Church, every gathering is designed to create
              authentic encounters with God and meaningful connections with
              people.
            </motion.p>

            {/* feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="mt-9 flex flex-wrap gap-3"
            >
              {[
                "Worship",
                "Prayer",
                "Revival",
                "Discipleship",
                "Community",
                "Missions",
              ].map((item) => (
                <div
                  key={item}
                  className="
                  rounded-full
                  border border-white/30
                  bg-white/60
                  px-4 py-2.5
                  text-xs
                  font-bold
                  tracking-[0.22em]
                  text-foreground/80
                  uppercase
                  backdrop-blur-xl
                "
                >
                  {item}
                </div>
              ))}
            </motion.div>

            {/* buttons */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              viewport={{ once: true }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                asChild
                className="
                group
                h-14
                rounded-2xl
                bg-primary
                px-8
                text-sm font-bold
                text-white
                shadow-[0_15px_60px_rgba(216,164,91,0.28)]
                transition-all duration-500
                hover:-translate-y-1
                hover:bg-primary/90
              "
              >
                <Link href="/about">
                  Discover Our Story

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                variant="outline"
                className="
                h-14
                rounded-2xl
                border-white/30
                bg-white/50
                px-8
                text-sm font-semibold
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-1
                hover:bg-white/70
              "
              >
                <PlayCircle className="mr-2 h-4 w-4" />

                Watch Sermons
              </Button>
            </motion.div>
          </div>

          {/* =========================
              RIGHT FEATURE PANEL
          ========================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="
            relative
            overflow-hidden
            rounded-[2.8rem]
            border border-white/30
            bg-white/55
            p-7
            shadow-[0_30px_100px_rgba(255,220,170,0.12)]
            backdrop-blur-3xl
          "
          >
            {/* glow */}
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />

            <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-accent/15 blur-3xl" />

            {/* floating top */}
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div
                  className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-primary/10
                  bg-primary/10
                  px-4 py-2
                  text-[11px]
                  font-black
                  tracking-[0.22em]
                  text-primary
                  uppercase
                "
                >
                  <Flame className="h-3.5 w-3.5" />

                  Spirit Filled Community
                </div>

                <div
                  className="
                  flex h-14 w-14 items-center justify-center
                  rounded-2xl
                  bg-primary/10
                "
                >
                  <HeartHandshake className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* main content */}
              <div className="mt-8">
                <h3
                  className="
                  text-3xl
                  font-black
                  leading-tight
                  tracking-[-0.05em]
                  text-foreground
                "
                >
                  More Than A Church.
                  <br />
                  A Family Of Faith.
                </h3>

                <p className="mt-5 text-[15px] leading-8 text-muted-foreground">
                  Every service at Global Crossfire Church is intentionally
                  crafted to inspire faith, build lives, strengthen families,
                  and create life-changing encounters with God.
                </p>
              </div>

              {/* feature cards */}
              <div className="mt-8 space-y-4">
                <div
                  className="
                  flex items-start gap-4
                  rounded-[1.8rem]
                  border border-white/30
                  bg-white/60
                  p-5
                "
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Users2 className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground">
                      Authentic Community
                    </h4>

                    <p className="mt-1 text-sm leading-7 text-muted-foreground">
                      Build meaningful relationships and grow with people who
                      genuinely care.
                    </p>
                  </div>
                </div>

                <div
                  className="
                  flex items-start gap-4
                  rounded-[1.8rem]
                  border border-white/30
                  bg-white/60
                  p-5
                "
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Globe2 className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground">
                      Global Vision
                    </h4>

                    <p className="mt-1 text-sm leading-7 text-muted-foreground">
                      Reaching lives locally and internationally through the
                      Gospel and compassionate outreach.
                    </p>
                  </div>
                </div>

                <div
                  className="
                  flex items-start gap-4
                  rounded-[1.8rem]
                  border border-white/30
                  bg-white/60
                  p-5
                "
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Flame className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground">
                      Transformational Worship
                    </h4>

                    <p className="mt-1 text-sm leading-7 text-muted-foreground">
                      Experience worship gatherings filled with passion,
                      excellence, prayer, and God’s presence.
                    </p>
                  </div>
                </div>
              </div>

              {/* location block */}
              <div
                className="
                mt-7
                rounded-[2rem]
                border border-primary/10
                bg-primary/8
                p-5
              "
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs font-black tracking-[0.25em] text-primary uppercase">
                      Worship With Us
                    </p>

                    <div className="mt-3 space-y-1">
                      <h5 className="text-lg font-black text-foreground">
                        Global Crossfire Church
                      </h5>

                      <p className="text-sm leading-7 text-muted-foreground">
                        Randolph House, Zion Place,
                        <br />
                        Margate, CT9 1RP
                        <br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};