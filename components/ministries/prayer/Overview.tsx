"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  HandHeart,
  Hospital,
} from "lucide-react";

const features = [
  {
    icon: HeartHandshake,
    title: "Prayer Support",
    description:
      "Standing with individuals and families in prayer through every season.",
  },
  {
    icon: ShieldCheck,
    title: "Pastoral Care",
    description:
      "Spiritual guidance, encouragement and support when needed most.",
  },
  {
    icon: Hospital,
    title: "Hospital Visits",
    description:
      "Bringing comfort, prayer and encouragement during recovery and illness.",
  },
  {
    icon: HandHeart,
    title: "Practical Care",
    description:
      "Helping people feel supported, valued and connected within the church family.",
  },
];

export const PrayerCaringOverview = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/[0.04] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#AF3800]/[0.04] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1fr]">
          {/* Image Side */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[550px] overflow-hidden rounded-[3rem]">
              <Image
                src="/images/prayeroverview.jpg"
                alt="Prayer and Caring Ministry"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}

            <div
              className="
                absolute
                -bottom-6
                left-6
                rounded-[1.75rem]
                border border-primary/10
                bg-white
                p-5
                shadow-xl
              "
            >
              <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">
                Our Heart
              </p>

              <h4 className="mt-2 text-xl font-black">
                Prayer • Care • Compassion
              </h4>
            </div>
          </motion.div>

          {/* Content Side */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="
                inline-flex items-center
                rounded-full
                bg-primary/5
                px-4 py-2
                text-[11px]
                font-black
                tracking-[0.22em]
                uppercase
                text-primary
              "
            >
              About The Ministry
            </div>

            <h2
              className="
                mt-6
                text-4xl
                font-black
                tracking-[-0.05em]
                text-foreground
                md:text-5xl
              "
            >
              A Ministry Of Prayer,
              <span className="block text-primary">
                Compassion & Support
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              We believe no one should walk through life's challenges alone.
              Through prayer, encouragement and practical care, we support
              individuals and families while pointing them to the hope found in
              Christ.
            </p>

            {/* Feature Cards */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="
                      rounded-[1.75rem]
                      border border-primary/10
                      bg-white
                      p-5
                      shadow-sm
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-lg
                    "
                  >
                    <div
                      className="
                        flex h-12 w-12 items-center justify-center
                        rounded-2xl
                        bg-primary/10
                      "
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <h3 className="mt-4 text-lg font-black">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};