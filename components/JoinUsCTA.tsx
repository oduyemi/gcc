"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";

export const JoinUsCTA = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-5%] top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-5%] h-[26rem] w-[26rem] rounded-full bg-[#AF3800]/10 blur-3xl" />

        <div
          className="
          absolute inset-0
          bg-[linear-gradient(rgba(30,41,59,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.025)_1px,transparent_1px)]
          [background-size:120px_120px]
        "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          {/* IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px]">
              {/* large image */}
              <div className="absolute left-0 top-0 h-[390px] w-[75%] overflow-hidden rounded-[2.5rem] shadow-2xl">
                <Image
                  src="/images/service.jpg"
                  alt="Church family"
                  fill
                  className="object-cover"
                />
              </div>

              {/* overlapping image */}
              <div className="absolute bottom-0 right-0 h-[300px] w-[62%] overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl">
                <Image
                  src="/images/worship1.jpg"
                  alt="Worship"
                  fill
                  className="object-cover"
                />
              </div>

              {/* floating card */}
              <div
                className="
                absolute left-8 bottom-10
                rounded-[1.8rem]
                border border-white/40
                bg-white/85
                px-5 py-4
                backdrop-blur-2xl
                shadow-xl
              "
              >
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-primary" />

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                      Sunday Service
                    </p>

                    <p className="font-semibold text-foreground">
                      10:30AM – 12:30PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div
              className="
              inline-flex items-center
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
              Join Us This Sunday
            </div>

            <h2
              className="
              mt-6
              text-5xl
              font-black
              leading-[0.95]
              tracking-[-0.06em]
              text-foreground
              lg:text-6xl
            "
            >
              You're
              <span className="block text-primary">
                Invited
              </span>
            </h2>

            <p
              className="
              mt-6
              max-w-xl
              text-lg
              leading-9
              text-muted-foreground
            "
            >
              Whether you're exploring faith, looking for a church home,
              or simply curious about God, we'd love to welcome you.
            </p>

            {/* info row */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div
                className="
                flex items-center gap-3
                rounded-2xl
                border border-primary/10
                bg-white
                px-5 py-4
                shadow-sm
              "
              >
                <CalendarDays className="h-5 w-5 text-primary" />

                <span className="font-semibold">
                  Sundays • 10:30AM
                </span>
              </div>

              <div
                className="
                flex items-center gap-3
                rounded-2xl
                border border-primary/10
                bg-white
                px-5 py-4
                shadow-sm
              "
              >
                <MapPin className="h-5 w-5 text-primary" />

                <span className="font-semibold">
                  Margate, UK
                </span>
              </div>
            </div>

            <Button
              asChild
              className="
              mt-8
              h-14
              rounded-2xl
              bg-primary
              px-8
              text-sm
              font-bold
              text-white
              shadow-[0_20px_60px_rgba(34,0,124,0.25)]
              hover:bg-primary/90
            "
            >
              <Link href="/visit">
                Plan Your Visit

                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};