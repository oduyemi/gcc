"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowRight,
} from "lucide-react";

const methods = [
  {
    title: "Call Us",
    value: "01843 265001",
    description:
      "Speak directly with our church office.",
    icon: Phone,
  },
  {
    title: "Email Us",
    value: "info@globalcrossfirechurch.org",
    description:
      "We'll respond as quickly as possible.",
    icon: Mail,
  },
  {
    title: "Visit Us",
    value: "Ramsgate, Kent",
    description:
      "Join us in person this Sunday.",
    icon: MapPin,
  },
  {
    title: "Service Times",
    value: "Sunday • 10:00 AM",
    description:
      "Come worship with us.",
    icon: Clock3,
  },
];

export const ContactMethods = () => {
  return (
    <section className="relative px-4 py-24 md:px-8 lg:px-12">
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className="
              inline-flex
              rounded-full
              border border-primary/10
              bg-primary/5
              px-4 py-2
              text-[11px]
              font-black
              tracking-[0.22em]
              text-primary
              uppercase
            "
          >
            Contact Information
          </div>

          <h2
            className="
              mt-5
              text-4xl
              font-black
              tracking-[-0.05em]
              md:text-6xl
            "
          >
            We're Ready To
            <span className="block text-primary">
              Welcome You
            </span>
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Whether you're visiting for the first time,
            requesting prayer, or looking to get involved,
            we're here to help.
          </p>
        </motion.div>

        {/* Featured Card */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div
            className="
              glass
              glow-gold
              relative
              overflow-hidden
              rounded-[3rem]
              p-10 md:p-14
            "
          >
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative z-10">
              <div
                className="
                  inline-flex
                  rounded-full
                  bg-primary/10
                  px-4 py-2
                  text-xs
                  font-black
                  tracking-[0.2em]
                  text-primary
                  uppercase
                "
              >
                Church Office
              </div>

              <h3
                className="
                  mt-6
                  max-w-3xl
                  text-3xl
                  font-black
                  tracking-[-0.04em]
                  md:text-5xl
                "
              >
                Have Questions?
                We'd Love To Hear From You.
              </h3>

              <p className="mt-6 max-w-2xl text-muted-foreground leading-8">
                Reach out by phone, email, or visit us in person.
                Our team is here to serve, support, and help
                you take your next step.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:01843265001"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-primary
                    px-6 py-4
                    font-bold
                    text-white
                  "
                >
                  Call Church Office

                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="mailto:info@globalcrossfirechurch.org"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-primary/10
                    bg-white/60
                    px-6 py-4
                    font-bold
                    backdrop-blur-md
                  "
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Grid */}

        <div className="mt-8 grid gap-6 md:grid-cols-2">
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
                  glass
                  glass-hover
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  p-8
                "
              >
                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-32
                    w-32
                    rounded-full
                    bg-primary/[0.04]
                    blur-2xl
                  "
                />

                <div className="relative z-10 flex items-start gap-5">
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-primary/10
                      text-primary
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:bg-primary
                      group-hover:text-white
                    "
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <div>
                    <h3 className="text-xl font-black">
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-lg
                        font-bold
                        text-primary
                      "
                    >
                      {item.value}
                    </p>

                    <p className="mt-3 leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};