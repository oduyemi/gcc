"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Users2,
  Mail,
  Phone,
  Sparkles,
  Flame,
} from "lucide-react";

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
  email: "pastor@globalcrossfirechurch.org",
  image: "/images/staff/ashong.jpg",
  bio: "Called into ministry at fifteen and serving faithfully for many years, Apostle Benjamin Ashong leads the local church with passion, wisdom and a heart for people.",
};

const ministers = [
  {
    name: "Mary Ashong",
    role: "Minister",
    email: "support@globalcrossfirechurch.org",
    image: "/images/staff/mary.jpg",
  },
  {
    name: "Okechukwu Okonkwo",
    role: "Minister",
    email: "info@globalcrossfirechurch.org",
    image: "/images/staff/okonkwo.jpg",
  },
  {
    name: "Melissa Sesay",
    role: "Minister",
    email: "secretary@globalcrossfirechurch.org",
    image: "/images/staff/sesay.jpg",
  },
  {
    name: "Emmanual Okesola",
    role: "Minister",
    email: "info@globalcrossfirechurch.org",
    image: "/images/staff/okesola.png",
  },
];

export const OurPastors = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-0 h-[30rem] w-[30rem] rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute right-[-10%] bottom-0 h-[35rem] w-[35rem] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div
            className="
              glass
              inline-flex items-center gap-2
              rounded-full
              px-5 py-3
            "
          >
            <Sparkles className="h-4 w-4 text-primary" />

            <span
              className="
                text-[11px]
                font-black
                uppercase
                tracking-[0.28em]
                text-primary
              "
            >
              Meet Our Leadership
            </span>
          </div>

          <h2
            className="
              mt-6
              text-5xl
              font-black
              tracking-[-0.06em]
              md:text-6xl
            "
          >
            Faithful Servants
            <span className="block text-primary">
              Called To Lead
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Passionate leaders dedicated to helping people know Christ,
            grow in faith and fulfil God's purpose for their lives.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Global Mission",
              "Kingdom Impact",
              "Spirit-Led Ministry",
            ].map((item) => (
              <div
                key={item}
                className="
                  glass
                  rounded-full
                  px-5 py-3
                  text-sm font-semibold
                "
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Overseer */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div
            className="
              glass
              glow-gold
              relative
              overflow-hidden
              rounded-[3rem]
            "
          >
            <div
              className="
                absolute
                right-8
                top-0
                text-[12rem]
                font-black
                leading-none
                text-primary/5
              "
            >
              "
            </div>

            <div className="grid lg:grid-cols-[430px_1fr]">
              <div className="relative h-[550px]">
                <Image
                  src={overseer.image}
                  alt={overseer.name}
                  fill
                  className="
                    object-cover
                    brightness-[1.02]
                    contrast-[0.95]
                    saturate-[0.95]
                  "
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-14">
                <div
                  className="
                    inline-flex w-fit
                    rounded-full
                    bg-primary/10
                    px-4 py-2
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.22em]
                    text-primary
                  "
                >
                  General Overseer
                </div>

                <h3 className="mt-5 text-5xl font-black tracking-[-0.05em]">
                  {overseer.name}
                </h3>

                <p className="mt-4 font-semibold text-primary">
                  Apostolic Vision • Global Leadership • Kingdom Impact
                </p>

                <p className="mt-6 max-w-2xl leading-8 text-muted-foreground">
                  {overseer.bio}
                </p>

                <div className="mt-8">
                  <div
                    className="
                      glass
                      inline-flex items-center gap-3
                      rounded-full
                      px-5 py-3
                    "
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    {overseer.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pastor */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div
            className="
              glass
              relative
              overflow-hidden
              rounded-[3rem]
            "
          >
            <div className="grid lg:grid-cols-[1fr_430px]">
              <div className="flex flex-col justify-center p-8 md:p-14">
                <div
                  className="
                    inline-flex w-fit items-center gap-2
                    rounded-full
                    bg-primary/10
                    px-4 py-2
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.22em]
                    text-primary
                  "
                >
                  <Heart className="h-4 w-4" />
                  Resident Pastor
                </div>

                <h3 className="mt-5 text-5xl font-black tracking-[-0.05em]">
                  {pastor.name}
                </h3>

                <p className="mt-4 font-semibold text-primary">
                  Pastoral Care • Discipleship • Community
                </p>

                <p className="mt-6 max-w-2xl leading-8 text-muted-foreground">
                  {pastor.bio}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <div
                    className="
                      glass
                      inline-flex items-center gap-2
                      rounded-full
                      px-4 py-3
                    "
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    {pastor.phone}
                  </div>

                  <div
                    className="
                      glass
                      inline-flex items-center gap-2
                      rounded-full
                      px-4 py-3
                    "
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    {pastor.email}
                  </div>
                </div>

                <Link
                  href="/about"
                  className="
                    mt-8
                    inline-flex items-center gap-2
                    font-bold text-primary
                  "
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="relative h-[550px]">
                <Image
                  src={pastor.image}
                  alt={pastor.name}
                  fill
                  className="
                    object-cover
                    brightness-[1.02]
                    contrast-[0.95]
                    saturate-[0.95]
                  "
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ministry Team */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center">
            <div className="inline-flex items-center gap-3">
              <Users2 className="h-5 w-5 text-primary" />

              <h3 className="text-3xl font-black">
                Ministry Team
              </h3>
            </div>

            <p className="mt-3 text-muted-foreground">
              Helping people connect, grow and thrive in Christ.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {ministers.map((minister) => (
              <div
                key={minister.name}
                className="
                  group
                  glass
                  overflow-hidden
                  rounded-[2rem]
                "
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={minister.image}
                    alt={minister.name}
                    fill
                    className="
                      object-cover
                      transition duration-700
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/20
                      to-transparent
                      opacity-0
                      transition-all duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div
                    className="
                      absolute bottom-5 left-5 right-5
                      translate-y-4
                      opacity-0
                      transition-all duration-500
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <p className="text-sm text-white">
                      {minister.email}
                    </p>

                    <span className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-white">
                      Connect
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                <div className="p-5 text-center">
                  <h4 className="font-black">
                    {minister.name}
                  </h4>

                  <p className="mt-1 text-sm text-primary">
                    {minister.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}

        <div
          className="
            glass
            glow-gold
            mt-20
            rounded-[3rem]
            p-10
            text-center
          "
        >
          <Flame className="mx-auto h-10 w-10 text-primary" />

          <h3 className="mt-5 text-4xl font-black">
            We'd Love To Meet You
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Whether you're exploring faith, looking for a church home,
            or seeking community, there's a place for you here.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/visit"
              className="
                rounded-full
                bg-primary
                px-6 py-3
                font-bold
                text-white
              "
            >
              Plan Your Visit
            </Link>

            <Link
              href="/contact"
              className="
                glass
                rounded-full
                px-6 py-3
                font-bold
              "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};