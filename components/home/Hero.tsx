"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Flame,
  Globe2,
  MapPin,
  // Play,
  ShieldCheck,
  Sparkles,
  Star,
  Waves,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


const slides = [
  {
    image: "/images/hero1.jpg",

    eyebrow: "WELCOME TO GLOBAL CROSSFIRE",

    title: "A Global Church Raising People Of Fire, Faith & Purpose",

    description:
      "Experience deep worship, transformational teaching, prayer, healing, community, and the manifest presence of God in a warm and spiritually vibrant atmosphere.",

    floatingWords: [
      "Revival",
      "Worship",
      "Healing",
      "Prayer",
      "Transformation",
    ],

    badge: "SUNDAY WORSHIP EXPERIENCE",

    announcement: {
      title: "Encounter Glory. Experience Jesus.",
      description:
        "Join us this Sunday for a powerful atmosphere of worship, revelation, prophetic ministry, miracles, and Kingdom encounters.",

      button: "Plan Your Visit",
      href: "/visit",
    },
  },

  {
    image: "/images/hero2.png",

    eyebrow: "A HOME FOR EVERY GENERATION",

    title: "Building Kingdom Leaders For This Generation",

    description:
      "From children to adults, we are passionate about raising people grounded in truth, excellence, purpose, leadership, and the power of the Holy Spirit.",

    floatingWords: [
      "Leadership",
      "Discipleship",
      "Purpose",
      "Community",
      "Growth",
    ],

    badge: "NEXT GENERATION MOVEMENT",

    announcement: {
      title: "Faith That Shapes The Future",
      description:
        "A church family where young people, families, and leaders are equipped to thrive spiritually and impact the world boldly.",

      button: "Discover Ministries",
      href: "/ministries",
    },
  },

  {
    image: "/images/hero3.jpg",

    eyebrow: "REACHING NATIONS WITH THE GOSPEL",

    title: "Taking Hope, Compassion & Jesus To The Nations",

    description:
      "Through missions, outreach, prayer, and community impact, we are extending the love of Christ beyond walls and borders.",

    floatingWords: [
      "Nations",
      "Outreach",
      "Impact",
      "Compassion",
      "Missions",
    ],

    badge: "GLOBAL MISSIONS & OUTREACH",

    announcement: {
      title: "A Church Beyond The Walls",
      description:
        "We believe in carrying revival, hope, healing, and practical love into communities locally and internationally.",

      button: "Explore Missions",
      href: "/missions",
    },
  },
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* =========================
            BACKGROUND IMAGES
        ========================== */}

        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].image}
            initial={{
              opacity: 0,
              scale: 1.08,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.04,
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              priority
              className="object-cover"
            />

            {/* LIGHT OVERLAYS */}

            <div className="absolute inset-0 bg-white/10" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#22007C]/60 via-[#22007C]/25 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#22007C]/35 via-transparent to-transparent" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_30%)]" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:120px_120px]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(34,0,124,0.18)_100%)]" />
          </motion.div>
        </AnimatePresence>

        {/* =========================
            LUXURY GLOWS
        ========================== */}

        <motion.div
          animate={{
            y: [0, -35, 0],
            opacity: [0.18, 0.35, 0.18],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="
          absolute left-[5%] top-[10%]
          h-[26rem] w-[26rem]
          rounded-full
          bg-[#22007C]/20
          blur-3xl
        "
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.15, 0.28, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="
          absolute bottom-[0%] right-[5%]
          h-[30rem] w-[30rem]
          rounded-full
          bg-[#AF3800]/20
          blur-3xl
        "
        />

        <div
          className="
          absolute left-1/2 top-[15%]
          h-[28rem] w-[28rem]
          -translate-x-1/2
          rounded-full
          bg-[#AF3800]/10
          blur-3xl
        "
        />

        {/* moving beam */}

        <motion.div
          animate={{
            x: ["-120%", "220%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
          absolute inset-y-0 z-[1]
          w-[20%]
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          blur-2xl
        "
        />

        {/* =========================
            TOP BAR
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          absolute left-1/2 top-6 z-30
          hidden -translate-x-1/2 items-center gap-5
          rounded-full
          border border-white/40
          bg-white/60
          px-6 py-3
          text-[#22007C]
          shadow-[0_15px_60px_rgba(255,255,255,0.2)]
          backdrop-blur-3xl
          xl:flex
        "
        >
          <div className="flex items-center gap-2">
            <div className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#AF3800] opacity-75" />

              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#AF3800]" />
            </div>

            <span className="text-sm font-black">
              LIVE WORSHIP EXPERIENCE
            </span>
          </div>

          <div className="h-5 w-px bg-slate-300" />

          <div className="flex items-center gap-2 text-slate-600">
            <Clock3 className="h-4 w-4" />

            <span className="text-sm">
              Sunday: 10:30AM – 12:30PM
            </span>
          </div>

          <div className="h-5 w-px bg-slate-300" />

          <div className="flex items-center gap-2 text-slate-600">
            <MapPin className="h-4 w-4" />

            <span className="text-sm">
              Margate, United Kingdom
            </span>
          </div>
        </motion.div>

        {/* =========================
            MAIN CONTENT
        ========================== */}

        <div
          className="
          relative z-10
          mx-auto
          flex min-h-screen
          max-w-7xl
          items-center
          px-6 pb-20 pt-32
          md:px-10
          lg:px-16
        "
        >
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT */}

            <div className="max-w-3xl">
              {/* eyebrow */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="
                mb-7 inline-flex items-center gap-3
                rounded-full
                border border-white/40
                bg-white/65
                px-5 py-2.5
                text-[#22007C]
                shadow-[0_15px_50px_rgba(255,255,255,0.18)]
                backdrop-blur-3xl
              "
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#22007C]/10">
                  <Sparkles className="h-3.5 w-3.5 text-[#22007C]" />
                </div>

                <span className="text-[11px] font-black tracking-[0.32em] uppercase">
                  {slides[current].eyebrow}
                </span>
              </motion.div>

              {/* TITLE */}

              <AnimatePresence mode="wait">
                <motion.h1
                  key={slides[current].title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                  text-5xl
                  font-black
                  leading-[0.9]
                  tracking-[-0.07em]
                  text-white
                  sm:text-6xl
                  lg:text-7xl
                  xl:text-[5.6rem]
                "
                >
                  {slides[current].title}
                </motion.h1>
              </AnimatePresence>

              {/* DESCRIPTION */}

              <AnimatePresence mode="wait">
                <motion.p
                  key={slides[current].description}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                  }}
                  className="
                  mt-8
                  max-w-2xl
                  text-lg
                  leading-8
                  text-slate-100
                "
                >
                  {slides[current].description}
                </motion.p>
              </AnimatePresence>

              {/* TAGS */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                }}
                className="mt-8 flex flex-wrap gap-3"
              >
                {slides[current].floatingWords.map((word) => (
                  <div
                    key={word}
                    className="
                    rounded-full
                    border border-white/40
                    bg-white/70
                    px-4 py-2
                    text-xs
                    font-black
                    tracking-[0.22em]
                    text-[#22007C]
                    uppercase
                    backdrop-blur-xl
                  "
                  >
                    {word}
                  </div>
                ))}
              </motion.div>

              {/* BUTTONS */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <Button
                  asChild
                  className="
                  group
                  h-14
                  rounded-2xl
                  border border-white/20
                  bg-[#AF3800]
                  px-8
                  text-sm font-bold
                  text-white
                  shadow-[0_20px_80px_rgba(175,56,0,0.35)]
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:bg-[#AF3800]/90
                "
                >
                  <Link href="/visit">
                    Plan Your Visit

                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Link href="/community">
                  <Button
                    variant="outline"
                    className="
                    h-14
                    rounded-2xl
                    border border-white/40
                    bg-white/65
                    px-8
                    text-sm font-semibold
                    text-[#22007C]
                    backdrop-blur-2xl
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:bg-white/85
                  "
                  >
                    <ShieldCheck className="mr-2 h-4 w-4 fill-[#22007C]" />

                    Explore Community
                  </Button>
                </Link>
              </motion.div>

              {/* SERVICE CARDS */}

              {/* <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.25,
                }}
                className="mt-10 grid gap-4 sm:grid-cols-2"
              >
                {[
                  {
                    title: "Sunday Service",
                    time: "10:30AM – 12:30PM",
                    desc: "Worship, Word & Encounters",
                    icon: Flame,
                  },
                  {
                    title: "Friday Prayer",
                    time: "6PM – 7PM",
                    desc: "Intercession & Revival",
                    icon: ShieldCheck,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                      rounded-[2rem]
                      border border-white/40
                      bg-white/65
                      p-5
                      shadow-[0_10px_40px_rgba(255,255,255,0.12)]
                      backdrop-blur-3xl
                    "
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#22007C]/10">
                          <Icon className="h-5 w-5 text-[#22007C]" />
                        </div>

                        <div>
                          <p className="text-xs font-black tracking-[0.25em] text-[#AF3800] uppercase">
                            {item.title}
                          </p>

                          <h4 className="mt-2 text-lg font-black text-[#22007C]">
                            {item.time}
                          </h4>

                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div> */}
            </div>

            {/* RIGHT PANEL */}

            <div className="flex justify-center lg:justify-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[current].announcement.title}
                  initial={{
                    opacity: 0,
                    x: 50,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 30,
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                  relative
                  w-full
                  max-w-xl
                  overflow-hidden
                  rounded-[2.8rem]
                  border border-white/40
                  bg-white/75
                  p-7
                  shadow-[0_30px_100px_rgba(255,255,255,0.2)]
                  backdrop-blur-[35px]
                "
                >
                  {/* glows */}

                  <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#22007C]/10 blur-3xl" />

                  <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-[#AF3800]/10 blur-3xl" />

                  {/* shine */}

                  <motion.div
                    animate={{
                      x: ["-120%", "220%"],
                    }}
                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                    absolute inset-y-0 w-[30%]
                    bg-gradient-to-r
                    from-transparent
                    via-white/30
                    to-transparent
                    blur-2xl
                  "
                  />

                  <div className="relative z-10">
                    {/* top */}

                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="
                        inline-flex items-center gap-2
                        rounded-full
                        border border-[#22007C]/10
                        bg-[#22007C]/5
                        px-4 py-2
                        text-[11px]
                        font-black uppercase tracking-[0.25em]
                        text-[#22007C]
                      "
                      >
                        <Star className="h-3.5 w-3.5 text-[#AF3800]" />

                        {slides[current].badge}
                      </div>

                      <div
                        className="
                        flex h-14 w-14 items-center justify-center
                        rounded-2xl
                        bg-[#22007C]/5
                      "
                      >
                        <Waves className="h-6 w-6 text-[#22007C]" />
                      </div>
                    </div>

                    {/* content */}

                    <div className="mt-8">
                      <h3
                        className="
                        text-4xl
                        font-black
                        leading-[1]
                        tracking-[-0.05em]
                        text-[#22007C]
                      "
                      >
                        {slides[current].announcement.title}
                      </h3>

                      <p className="mt-5 text-[15px] leading-8 text-slate-600">
                        {slides[current].announcement.description}
                      </p>
                    </div>

                    {/* location */}

                    <div
                      className="
                      mt-8
                      rounded-[2rem]
                      border border-[#22007C]/10
                      bg-white/80
                      p-5
                    "
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#22007C]/10">
                          <MapPin className="h-5 w-5 text-[#22007C]" />
                        </div>

                        <div>
                          <p className="text-xs font-black tracking-[0.25em] text-[#AF3800] uppercase">
                            Church Location
                          </p>

                          <div className="mt-3 space-y-1 text-[#22007C]">
                            <p className="font-bold">
                              Global Crossfire Church UK
                            </p>

                            <p className="text-sm text-slate-600">
                              Randolph House, Zion Place
                            </p>

                            <p className="text-sm text-slate-600">
                              Margate, CT9 1RP
                            </p>

                            <p className="text-sm text-slate-600">
                              United Kingdom
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* footer */}

                    <div
                      className="
                      mt-7
                      flex flex-col gap-4
                      rounded-[2rem]
                      border border-[#22007C]/10
                      bg-white/80
                      p-5
                      sm:flex-row sm:items-center sm:justify-between
                    "
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#22007C]/10">
                          <Globe2 className="h-5 w-5 text-[#22007C]" />
                        </div>

                        <div>
                          <p className="text-xs font-black tracking-[0.25em] text-[#AF3800] uppercase">
                            Global Family
                          </p>

                          <p className="mt-1 text-sm font-semibold text-[#22007C]">
                            One Church • Many Nations
                          </p>
                        </div>
                      </div>

                      <Button
                        asChild
                        className="
                        h-12
                        rounded-2xl
                        bg-[#AF3800]
                        px-6
                        font-bold
                        text-white
                        shadow-[0_15px_50px_rgba(175,56,0,0.3)]
                        hover:bg-[#AF3800]/90
                      "
                      >
                        <Link href={slides[current].announcement.href}>
                          {slides[current].announcement.button}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* =========================
            INDICATORS
        ========================== */}

        <div
          className="
          absolute bottom-7 left-1/2 z-20
          flex -translate-x-1/2 items-center gap-3
        "
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={cn(
                "relative overflow-hidden rounded-full transition-all duration-500",
                current === index
                  ? "h-2.5 w-16 bg-[#AF3800]"
                  : "h-2.5 w-2.5 bg-white/60 hover:bg-white",
              )}
            >
              {current === index && (
                <motion.div
                  layoutId="hero-progress"
                  className="absolute inset-0 rounded-full bg-[#AF3800]"
                />
              )}
            </button>
          ))}
        </div>

        {/* =========================
            NAVIGATION
        ========================== */}

        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="
            group
            flex h-14 w-14 items-center justify-center
            rounded-2xl
            border border-white/40
            bg-white/70
            text-[#22007C]
            backdrop-blur-2xl
            transition-all duration-300
            hover:-translate-y-1
            hover:bg-white
          "
          >
            <ChevronLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          <button
            onClick={nextSlide}
            className="
            group
            flex h-14 w-14 items-center justify-center
            rounded-2xl
            border border-white/40
            bg-white/70
            text-[#22007C]
            backdrop-blur-2xl
            transition-all duration-300
            hover:-translate-y-1
            hover:bg-white
          "
          >
            <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* bottom fade */}

        <div className="absolute inset-x-0 bottom-0 z-[2] h-52 bg-gradient-to-t from-white to-transparent" />
      </div>
    </section>
  );
};