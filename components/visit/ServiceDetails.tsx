"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  MapPin,
  Car,
  Coffee,
  Users,
  Shirt,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const details = [
  {
    icon: Clock3,
    title: "Service Time",
    value: "Sunday • 10:30 AM",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Margate, Kent",
  },
  {
    icon: Car,
    title: "Parking",
    value: "Available Nearby",
  },
  {
    icon: Shirt,
    title: "Dress",
    value: "Come As You Are",
  },
];

export const VisitServiceDetails = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 md:px-8 lg:px-12">
      {/* background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
            text-primary
            uppercase
          "
          >
            Plan Your Visit
          </div>

          <h2
            className="
            mt-5
            text-4xl
            font-black
            tracking-[-0.05em]
            text-foreground
            md:text-5xl
          "
          >
            Everything You Need To Know
          </h2>

          <p className="mt-4 text-muted-foreground">
            Simple. Easy. Stress-free.
          </p>
        </motion.div>

        {/* cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {details.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="
                group
                rounded-[2rem]
                border border-primary/10
                bg-white
                p-6
                shadow-sm
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
              >
                <div
                  className="
                  flex h-14 w-14 items-center justify-center
                  rounded-2xl
                  bg-primary/10
                "
                >
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <p
                  className="
                  mt-5
                  text-xs
                  font-black
                  tracking-[0.22em]
                  text-muted-foreground
                  uppercase
                "
                >
                  {item.title}
                </p>

                <h3
                  className="
                  mt-2
                  text-xl
                  font-black
                  text-foreground
                "
                >
                  {item.value}
                </h3>
              </motion.div>
            );
          })}
        </div>

        {/* experience card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
          mt-10
          overflow-hidden
          rounded-[2.5rem]
          border border-primary/10
          bg-gradient-to-r
          from-primary/[0.04]
          via-white
          to-accent/[0.04]
          p-8
          md:p-10
        "
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    icon: Users,
                    label: "Friendly People",
                  },
                  {
                    icon: Coffee,
                    label: "Warm Welcome",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="
                      flex items-center gap-2
                      rounded-full
                      bg-white
                      px-4 py-2
                      shadow-sm
                    "
                    >
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <h3
                className="
                mt-6
                text-3xl
                font-black
                tracking-[-0.05em]
                text-foreground
              "
              >
                Your First Visit Matters
              </h3>

              <p className="mt-3 max-w-2xl text-muted-foreground">
                From the moment you arrive, our team is here to help you feel
                comfortable, connected, and at home.
              </p>
            </div>

            <Link
              href="https://maps.app.goo.gl/r6rvUFyiA2rsqqA57"
              className="
              inline-flex items-center gap-2
              rounded-2xl
              bg-primary
              px-7 py-4
              font-bold
              text-white
              transition-all
              hover:-translate-y-1
            "
            >
              Get Directions

              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};