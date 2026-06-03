"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const methods = [
  {
    title: "Call Us",
    value: "01843 265001",
    description:
      "Speak directly with our church office and ministry team.",
    icon: Phone,
  },
  {
    title: "Email Us",
    value: "info@globalcrossfirechurch.org",
    description:
      "Send us a message and we'll respond as quickly as possible.",
    icon: Mail,
  },
  {
    title: "Visit Us",
    value:
      "Randolph House, Zion Place, Margate, CT9 1RP • United Kingdom",
    description:
      "Experience worship, community and fellowship in person.",
    icon: MapPin,
  },
  {
    title: "Service Times",
    value: "Sunday • 10:00 AM",
    description:
      "Join us every Sunday for worship and the Word.",
    icon: Clock3,
  },
];

export const ContactMethods = () => {
  return (
    <section className="relative overflow-hidden px-4 py-28 md:px-8 lg:px-12">
      {/* Background Atmosphere */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[32rem] w-[32rem] rounded-full bg-primary/[0.05] blur-[140px]" />

        <div className="absolute right-0 top-1/3 h-[38rem] w-[38rem] rounded-full bg-[#AF3800]/[0.04] blur-[160px]" />

        <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-purple-300/[0.05] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-primary/15
              bg-white/70
              px-5 py-2.5
              backdrop-blur-xl
            "
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />

            <span
              className="
                text-[11px]
                font-black
                uppercase
                tracking-[0.28em]
                text-primary
              "
            >
              Contact Information
            </span>
          </div>

          <h2
            className="
              mt-7
              text-4xl
              font-black
              tracking-[-0.06em]
              text-slate-900
              md:text-6xl
              lg:text-7xl
            "
          >
            We'd Love To
            <span
              className="
                block
                bg-gradient-to-r
                from-primary
                to-[#d6a05a]
                bg-clip-text
                text-transparent
              "
            >
              Connect With You
            </span>
          </h2>

          <p
            className="
              mx-auto mt-7
              max-w-3xl
              text-lg
              leading-8
              text-slate-600
            "
          >
            Whether you're visiting for the first time, requesting
            prayer, seeking guidance, or looking for a church home,
            our team is ready to welcome and assist you.
          </p>
        </motion.div>

        {/* Hero Contact Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div
            className="
              relative overflow-hidden
              rounded-[3rem]
              border border-white/30
              bg-white/[0.65]
              p-10 md:p-14 lg:p-16
              shadow-[0_30px_120px_rgba(216,164,91,0.12)]
              backdrop-blur-[30px]
            "
          >
            {/* Decorative Layers */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.8),transparent_30%)]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(216,164,91,0.08),transparent_35%)]" />

            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/[0.05] blur-3xl" />

            <div className="relative z-10">
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  bg-primary/10
                  px-5 py-2.5
                "
              >
                <Sparkles className="h-4 w-4 text-primary" />

                <span
                  className="
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.22em]
                    text-primary
                  "
                >
                  Church Office
                </span>
              </div>

              <h3
                className="
                  mt-7
                  max-w-4xl
                  text-3xl
                  font-black
                  tracking-[-0.05em]
                  text-slate-900
                  md:text-5xl
                  lg:text-6xl
                "
              >
                Have Questions?
                <span className="block mt-2 text-primary">
                  We're Here To Help.
                </span>
              </h3>

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                Reach out by phone, email, or visit us in person.
                We'd love to answer your questions, pray with you,
                and help you get connected.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="tel:+441843265001"
                  className="
                    group
                    inline-flex items-center gap-3
                    rounded-2xl
                    bg-primary
                    px-7 py-4
                    font-bold
                    text-white
                    shadow-[0_15px_50px_rgba(216,164,91,0.35)]
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:bg-[#d6a05a]
                  "
                >
                  Call Church Office

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="mailto:info@globalcrossfirechurch.org"
                  className="
                    inline-flex items-center gap-3
                    rounded-2xl
                    border border-primary/15
                    bg-white/70
                    px-7 py-4
                    font-bold
                    text-slate-800
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:bg-white
                  "
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Cards */}

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {methods.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border border-white/30
                  bg-white/[0.65]
                  p-8
                  shadow-[0_20px_60px_rgba(0,0,0,0.04)]
                  backdrop-blur-[24px]
                  transition-all duration-700
                  hover:-translate-y-2
                  hover:shadow-[0_30px_90px_rgba(216,164,91,0.14)]
                "
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,164,91,0.08),transparent_35%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative z-10 flex gap-5">
                  <div
                    className="
                      flex h-16 w-16 shrink-0
                      items-center justify-center
                      rounded-[1.4rem]
                      bg-primary/10
                      text-primary
                      transition-all duration-500
                      group-hover:scale-110
                      group-hover:bg-primary
                      group-hover:text-white
                    "
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-xs
                        font-black
                        uppercase
                        tracking-[0.22em]
                        text-primary
                      "
                    >
                      {item.title}
                    </p>

                    <h3
                      className="
                        mt-3
                        text-xl
                        font-black
                        leading-snug
                        tracking-[-0.03em]
                        text-slate-900
                      "
                    >
                      {item.value}
                    </h3>

                    <p
                      className="
                        mt-3
                        leading-7
                        text-slate-600
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                <div
                  className="
                    absolute bottom-0 left-0
                    h-[3px] w-0
                    bg-gradient-to-r
                    from-primary
                    to-[#d6a05a]
                    transition-all duration-700
                    group-hover:w-full
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};