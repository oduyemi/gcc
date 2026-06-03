"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  BookOpen,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Grow In Faith",
    description:
      "Deepen your relationship with God through prayer, discipleship and biblical teaching.",
  },
  {
    icon: Heart,
    title: "Build Sisterhood",
    description:
      "Develop authentic friendships with women who will encourage and support you.",
  },
  {
    icon: Sparkles,
    title: "Live With Purpose",
    description:
      "Discover your gifts, serve others and make an impact for God's Kingdom.",
  },
];

export const WomenMinistryOverview = () => {
  return (
    <section className="relative overflow-hidden bg-muted/20 px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#AF3800]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-[2.5rem]">
              <Image
                src="/images/womens.jpg"
                alt="Women's Ministry"
                width={800}
                height={900}
                className="h-[650px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <div
                className="
                  absolute bottom-6 left-6
                  rounded-2xl
                  bg-white/95
                  px-5 py-4
                  shadow-lg
                  backdrop-blur-lg
                "
              >
                <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">
                  Women's Ministry
                </p>

                <p className="mt-1 font-semibold">
                  Encouraging Women To Flourish In Christ
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                tracking-[0.25em]
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
              Growing Together In
              <span className="block text-primary">
                Faith & Fellowship
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              The Women's Ministry exists to nurture spiritual growth,
              foster meaningful relationships and empower women to
              live out God's calling with confidence and purpose.
            </p>

            <div className="mt-10 space-y-5">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div
                    key={pillar.title}
                    className="
                      group
                      flex gap-5
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
                        flex h-14 w-14 shrink-0 items-center justify-center
                        rounded-2xl
                        bg-primary/10
                      "
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <h3 className="font-black text-foreground">
                        {pillar.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {pillar.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      className="
                        ml-auto hidden h-5 w-5
                        text-primary/50
                        transition-transform
                        group-hover:translate-x-1
                        lg:block
                      "
                    />
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