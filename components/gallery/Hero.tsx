"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Images } from "lucide-react";

export const GalleryHero = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* Background Effects */}

      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-0 h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute right-[-10%] bottom-0 h-[32rem] w-[32rem] rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border border-primary/10
                bg-primary/5
                px-4 py-2
                text-[11px]
                font-black
                uppercase
                tracking-[0.25em]
                text-primary
              "
            >
              <Images className="h-4 w-4" />
              Photo Gallery
            </div>

            <h1
              className="
                mt-6
                text-5xl
                font-black
                leading-none
                tracking-[-0.06em]
                md:text-7xl
              "
            >
              Capturing
              <span className="block text-primary">
                God's Faithfulness
              </span>
            </h1>

            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              Explore moments of worship, fellowship,
              outreach, missions, and lives transformed
              through the ministry of Global Crossfire
              Church.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <div
                className="
                  glass
                  rounded-full
                  px-5 py-3
                  text-sm
                  font-semibold
                "
              >
                Worship Services
              </div>

              <div
                className="
                  glass
                  rounded-full
                  px-5 py-3
                  text-sm
                  font-semibold
                "
              >
                Community Outreach
              </div>

              <div
                className="
                  glass
                  rounded-full
                  px-5 py-3
                  text-sm
                  font-semibold
                "
              >
                Mission Trips
              </div>
            </div>
          </motion.div>

          {/* Image Collage */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}

              <div className="glass overflow-hidden rounded-[2.5rem] p-2">
                <div className="relative h-[320px] overflow-hidden rounded-[2rem]">
                  <Image
                    src="/images/gallery.jpg"
                    alt="Church Worship"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="glass overflow-hidden rounded-[2rem] p-2">
                  <div className="relative h-[150px] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src="/images/gallery2.jpg"
                      alt="Community Outreach"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="glass overflow-hidden rounded-[2rem] p-2">
                  <div className="relative h-[150px] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src="/images/gallery3.png"
                      alt="Youth Ministry"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}

            <div
              className="
                glass
                absolute
                -bottom-6
                left-8
                rounded-[2rem]
                px-6 py-4
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary/10
                    text-primary
                  "
                >
                  <Camera className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Memories Captured
                  </p>

                  <p className="text-xl font-black">
                    God's Work In Action
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};