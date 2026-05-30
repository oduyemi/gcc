"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users2 } from "lucide-react";

const overseer = {
  name: "Worldshaker Koach Odoom",
  role: "General Overseer",
  email: "koach@koachcoachingconsulting.com",
  image: "/images/staff/overseer.jpg",
  bio: "Apostle, author, coach and prophetic teacher bringing revelatory teaching and leadership across the Global Crossfire Mission.",
};

const pastor = {
  name: "Benjamin Ashong",
  role: "Resident Pastor",
  phone: "01843 265001",
  email: "pastor@globalcrossfirechurch.co.uk",
  image: "/images/staff/ashong.jpg",
  bio: "Called into ministry at fifteen and serving faithfully for many years, Apostle Benjamin Ashong leads the local church with passion, wisdom and a heart for people.",
};

const ministers = [
  {
    name: "Mary Ashong",
    role: "Minister",
    email: "support@globalcrossfirechurch.co.uk",
    image: "/images/staff/mary.jpg",
  },
  {
    name: "Okechukwu Okonkwo",
    role: "Minister",
    email: "info@globalcrossfirechurch.co.uk",
    image: "/images/staff/okonkwo.jpg",
  },
  {
    name: "Melissa Sesay",
    role: "Minister",
    email: "secretary@globalcrossfirechurch.co.uk",
    image: "/images/staff/sesay.jpg",
  },
  {
    name: "Emmanual Okesola",
    role: "Minister",
    email: "info@globalcrossfirechurch.co.uk",
    image: "/images/staff/okesola.png",
  },
];

export const OurPastors = () => {
  return (
    <section className="relative overflow-hidden bg-muted/20 px-4 py-24 md:px-8 lg:px-12">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-5%] top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-[-5%] h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className="
              inline-flex items-center
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
            Meet The Team
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
            We Can't Wait To Meet You
          </h2>

          <p className="mt-4 text-muted-foreground">
            Friendly faces ready to welcome you and help you feel at home.
          </p>
        </motion.div>

        {/* General Overseer */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div
            className="
              overflow-hidden
              rounded-[3rem]
              border border-primary/10
              bg-gradient-to-br
              from-white
              via-white
              to-primary/[0.03]
              shadow-xl
            "
          >
            <div className="grid lg:grid-cols-[420px_1fr]">
              <div className="relative h-[500px]">
                <Image
                  src={overseer.image}
                  alt={overseer.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12">
                <div
                  className="
                    inline-flex w-fit
                    rounded-full
                    bg-primary/10
                    px-4 py-2
                    text-xs
                    font-black
                    tracking-[0.22em]
                    text-primary
                    uppercase
                  "
                >
                  General Overseer
                </div>

                <h3 className="mt-5 text-4xl font-black tracking-[-0.05em]">
                  {overseer.name}
                </h3>

                <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
                  {overseer.bio}
                </p>

                <div className="mt-6">
                  <div
                    className="
                      inline-flex
                      rounded-full
                      border border-primary/10
                      bg-primary/5
                      px-4 py-2
                      text-sm
                    "
                  >
                    {overseer.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Resident Pastor */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div
            className="
              overflow-hidden
              rounded-[2.8rem]
              border border-primary/10
              bg-white
              shadow-xl
            "
          >
            <div className="grid lg:grid-cols-[420px_1fr]">
              <div className="relative h-[450px] lg:h-full">
                <Image
                  src={pastor.image}
                  alt={pastor.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12">
                <div
                  className="
                    inline-flex w-fit items-center gap-2
                    rounded-full
                    bg-primary/10
                    px-4 py-2
                    text-xs
                    font-black
                    tracking-[0.22em]
                    text-primary
                    uppercase
                  "
                >
                  <Heart className="h-4 w-4" />
                  Resident Pastor
                </div>

                <h3
                  className="
                    mt-5
                    text-4xl
                    font-black
                    tracking-[-0.05em]
                    text-foreground
                  "
                >
                  {pastor.name}
                </h3>

                <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
                  {pastor.bio}
                </p>

                <Link
                  href="/about"
                  className="
                    mt-8
                    inline-flex w-fit items-center gap-2
                    font-bold
                    text-primary
                  "
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ministers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="mb-8 flex items-center gap-3">
            <Users2 className="h-5 w-5 text-primary" />

            <h3 className="text-2xl font-black text-foreground">
              Ministers
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {ministers.map((minister) => (
              <div
                key={minister.name}
                className="
                  group
                  overflow-hidden
                  rounded-[2rem]
                  border border-primary/10
                  bg-white
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={minister.image}
                    alt={minister.name}
                    fill
                    className="
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="p-5">
                  <h4 className="font-black text-foreground">
                    {minister.name}
                  </h4>

                  <p className="mt-1 text-sm text-primary">
                    {minister.role}
                  </p>

                  <p className="mt-4 text-sm text-muted-foreground">
                    {minister.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};