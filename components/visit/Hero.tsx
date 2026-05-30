"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const VisitHero = () => {
  return (
    <section className="relative overflow-hidden px-4 pt-32 pb-24 md:px-8 lg:px-12">
      {/* background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-5%] top-0 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-5%] h-[30rem] w-[30rem] rounded-full bg-[#AF3800]/8 blur-3xl" />

        <div
          className="
          absolute inset-0
          bg-[linear-gradient(rgba(30,41,59,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.025)_1px,transparent_1px)]
          [background-size:120px_120px]
        "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
          {/* CONTENT */}

          <div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
              inline-flex items-center gap-3
              rounded-full
              bg-primary/10
              px-4 py-2
              text-[11px]
              font-black
              uppercase
              tracking-[0.28em]
              text-primary
            "
            >
              <Sparkles className="h-3.5 w-3.5" />
              Plan Your Visit
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="
              mt-6
              text-5xl
              font-black
              leading-[0.92]
              tracking-[-0.06em]
              text-foreground
              lg:text-7xl
            "
            >
              We Can't Wait
              <span className="block text-primary">
                To Meet You
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="
              mt-7
              max-w-2xl
              text-lg
              leading-9
              text-muted-foreground
            "
            >
              Whether you're exploring faith, returning to church,
              or searching for a place to belong, you'll find
              a warm welcome, authentic community, and a place
              to encounter God at Global Crossfire Church.
            </motion.p>

            {/* info cards */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-10 grid gap-4 sm:grid-cols-2"
            >
              <div
                className="
                rounded-[1.8rem]
                border
                bg-white
                p-5
                shadow-sm
              "
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <CalendarDays className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">
                      Sunday Service
                    </p>

                    <p className="mt-2 text-lg font-bold">
                      10:30AM – 12:30PM
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="
                rounded-[1.8rem]
                border
                bg-white
                p-5
                shadow-sm
              "
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">
                      Location
                    </p>

                    <p className="mt-2 font-semibold">
                      Margate, Kent, UK
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* buttons */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                asChild
                className="
                h-14
                rounded-2xl
                bg-primary
                px-8
                text-white
              "
              >
                <Link href="#service-details">
                  Service Details

                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="
                h-14
                rounded-2xl
              "
              >
                <Link
                  href="https://maps.google.com"
                  target="_blank"
                >
                  Get Directions
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2.8rem]">
              <Image
                src="/images/crossfire.jpg"
                alt="Visit Global Crossfire Church"
                width={900}
                height={1100}
                className="h-[650px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* floating card */}

            <div
              className="
              absolute
              -bottom-6
              left-8
              rounded-[2rem]
              border
              bg-white/95
              p-5
              shadow-xl
              backdrop-blur-xl
            "
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Clock3 className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">
                    This Sunday
                  </p>

                  <p className="font-bold">
                    We'd Love To Meet You
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