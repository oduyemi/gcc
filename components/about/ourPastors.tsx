"use client";
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
  Cross,
  ShieldCheck,
  BookOpen,
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
  bio: "Called into ministry at fifteen and serving faithfully for many years, Apostle Benjamin Ashong leads the local church with passion, wisdom and a heart for people.",
};

const ministers = [
  {
    name: "Mary Ashong",
    role: "Minister",
    email: "support@globalcrossfirechurch.org",
  },
  {
    name: "Okechukwu Okonkwo",
    role: "Minister",
    email: "info@globalcrossfirechurch.org",
  },
  {
    name: "Melissa Sesay",
    role: "Minister",
    email: "secretary@globalcrossfirechurch.org",
  },
  {
    name: "Emmanual Okesola",
    role: "Minister",
    email: "info@globalcrossfirechurch.org",
  },
];

const deacons = [
  {
    name: "Edward McCann",
    role: "Deacon",
    phone: "01843265001",
  },
  {
    name: "Joshua Johnson",
    role: "Deacon",
  },
];

const leadershipValues = [
  {
    icon: Cross,
    title: "Christ-Centred",
    description:
      "Serving with Christ at the centre of our faith, mission and ministry.",
  },
  {
    icon: BookOpen,
    title: "Biblically Grounded",
    description:
      "Teaching and leading from a foundation rooted in God's Word.",
  },
  {
    icon: Users2,
    title: "People Focused",
    description:
      "Creating a church family where people are known, supported and encouraged.",
  },
  {
    icon: ShieldCheck,
    title: "Faithful Service",
    description:
      "Leading with integrity, humility and a commitment to serve others.",
  },
];

export const OurPastors = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-0 h-[30rem] w-[30rem] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-[-12%] bottom-[10%] h-[35rem] w-[35rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute left-1/2 top-[40%] h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-primary/[0.025] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-5 py-3">
            <Sparkles className="h-4 w-4 text-primary" />

            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-primary">
              Meet Our Leadership
            </span>
          </div>

          <h2 className="mt-6 text-5xl font-black tracking-[-0.06em] md:text-6xl">
            Faithful Servants
            <span className="block text-primary">Called To Lead</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            A team of faithful servants committed to Christ, the local church
            and the people God has entrusted to our care.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              {
                value: "30+",
                label: "Years of Ministry",
              },
              {
                value: "4",
                label: "Leadership Groups",
              },
              {
                value: "Spirit",
                label: "Led Ministry",
              },
              {
                value: "1",
                label: "Church Family",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="glass group rounded-3xl p-5 text-center transition duration-300 hover:-translate-y-1"
              >
                <h3 className="text-2xl font-black text-primary md:text-3xl">
                  {item.value}
                </h3>

                <p className="mt-2 text-xs font-medium text-muted-foreground md:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Leadership values */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Global Mission", "Kingdom Impact", "Spirit-Led Ministry"].map(
              (item) => (
                <div
                  key={item}
                  className="glass rounded-full px-5 py-3 text-sm font-semibold transition hover:border-primary/30 hover:text-primary"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </motion.div>

        {/* =========================================================
            GENERAL OVERSEER — ONLY SECTION WITH A PHOTOGRAPH
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass glow-gold relative overflow-hidden rounded-[3rem]">
            {/* Decorative quote */}
            <div className="pointer-events-none absolute right-8 top-0 select-none text-[12rem] font-black leading-none text-primary/5">
              "
            </div>

            <div className="grid lg:grid-cols-[430px_1fr]">
              {/* Overseer image */}
              <div className="relative min-h-[480px] overflow-hidden lg:min-h-[550px]">
                <img
                  src={overseer.image}
                  alt={overseer.name}
                  className="absolute inset-0 h-full w-full object-cover brightness-[1.02] contrast-[0.95] saturate-[0.95]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <div className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    General Overseer
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative flex flex-col justify-center p-8 md:p-14">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  Apostolic Leadership
                </div>

                <h3 className="mt-5 text-4xl font-black tracking-[-0.05em] md:text-5xl">
                  {overseer.name}
                </h3>

                <p className="mt-4 font-semibold text-primary">
                  Apostolic Vision • Global Leadership • Kingdom Impact
                </p>

                <p className="mt-6 max-w-2xl leading-8 text-muted-foreground">
                  {overseer.bio}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${overseer.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white transition hover:scale-[1.02] hover:shadow-lg"
                  >
                    <Mail className="h-4 w-4" />
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            RESIDENT PASTOR — NO IMAGE
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div className="glass relative overflow-hidden rounded-[3rem]">
            {/* Decorative number */}
            <div className="pointer-events-none absolute right-8 top-[-2rem] select-none text-[14rem] font-black leading-none text-primary/[0.035]">
              01
            </div>

            <div className="relative grid lg:grid-cols-[140px_1fr]">
              {/* Icon column */}
              <div className="flex items-start justify-center p-8 lg:p-10">
                <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-primary/10 bg-primary/10 text-primary shadow-inner">
                  <Heart className="h-10 w-10" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 pt-0 lg:p-10 lg:pl-4">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-primary">
                  <Heart className="h-3.5 w-3.5" />
                  Resident Pastor
                </div>

                <h3 className="mt-5 text-3xl font-black tracking-[-0.04em] md:text-4xl">
                  {pastor.name}
                </h3>

                <p className="mt-3 font-semibold text-primary">
                  Pastoral Care • Discipleship • Community
                </p>

                <p className="mt-5 max-w-3xl leading-8 text-muted-foreground">
                  {pastor.bio}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    {pastor.phone}
                  </div>

                  <a
                    href={`mailto:${pastor.email}`}
                    className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:border-primary/30 hover:text-primary"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            LEADERSHIP VALUES
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-primary">
              What Guides Us
            </p>

            <h3 className="mt-3 text-3xl font-black tracking-tight">
              Leading With Purpose
            </h3>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {leadershipValues.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="glass group rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h4 className="mt-5 font-black">{item.title}</h4>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* =========================================================
            MINISTERS — TYPOGRAPHY / ICON CARDS
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center">
            <div className="inline-flex items-center gap-3">
              <Users2 className="h-5 w-5 text-primary" />

              <h3 className="text-3xl font-black">Our Ministers</h3>
            </div>

            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Helping people connect, grow and thrive in Christ.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {ministers.map((minister, index) => (
              <motion.div
                key={minister.name}
                whileHover={{ y: -5 }}
                className="glass group relative overflow-hidden rounded-[2rem] p-6 transition duration-300"
              >
                {/* Number */}
                <span className="absolute right-6 top-3 text-7xl font-black leading-none text-primary/[0.045]">
                  0{index + 1}
                </span>

                <div className="relative flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                    <Users2 className="h-6 w-6" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                      Minister
                    </p>

                    <h4 className="mt-2 text-xl font-black md:text-2xl">
                      {minister.name}
                    </h4>

                    <a
                      href={`mailto:${minister.email}`}
                      className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      {minister.email}
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-5">
                  <span className="text-sm font-medium text-muted-foreground">
                    Serving the church community
                  </span>

                  <ArrowRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =========================================================
            DEACONS — NO IMAGES
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center">
            <div className="inline-flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />

              <h3 className="text-3xl font-black">Our Deacons</h3>
            </div>

            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Faithful servants supporting the ministry through leadership,
              care and practical service.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {deacons.map((deacon, index) => (
              <motion.div
                key={deacon.name}
                whileHover={{ y: -5 }}
                className="glass group relative overflow-hidden rounded-[2rem] p-7"
              >
                <div className="absolute right-5 top-2 text-8xl font-black leading-none text-primary/[0.04]">
                  0{index + 1}
                </div>

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                    <ShieldCheck className="h-6 w-6" />
                  </div>

                  <span className="mt-6 inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    Deacon
                  </span>

                  <h4 className="mt-4 text-2xl font-black">
                    {deacon.name}
                  </h4>

                  <p className="mt-3 max-w-lg leading-7 text-muted-foreground">
                    Supporting the vision of Global Crossfire Church through
                    faithful service, stewardship and ministry to people.
                  </p>

                  {deacon.phone && (
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                      <Phone className="h-4 w-4 text-primary" />
                      {deacon.phone}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =========================================================
            CTA
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass glow-gold relative mt-20 overflow-hidden rounded-[3rem] p-10 text-center md:p-14"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Flame className="h-8 w-8" />
            </div>

            <h3 className="mt-6 text-3xl font-black tracking-tight md:text-4xl">
              We'd Love To Meet You
            </h3>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
              Whether you're exploring faith, looking for a church home, or
              seeking community, there's a place for you here.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/visit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-white transition hover:scale-[1.02] hover:shadow-lg"
              >
                Plan Your Visit
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="glass inline-flex rounded-full px-6 py-3 font-bold transition hover:border-primary/30 hover:text-primary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
