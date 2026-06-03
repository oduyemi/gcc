"use client";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";


export const WomenMinistryHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[35rem] w-[35rem] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[#AF3800]/[0.05] blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                bg-primary/5
                px-5 py-2
                text-[11px]
                font-black
                uppercase
                tracking-[0.25em]
                text-primary
              "
            >
              <Heart className="h-4 w-4" />
              Women's Ministry
            </div>

            <h1
              className="
                mt-7
                text-5xl
                font-black
                tracking-[-0.06em]
                sm:text-6xl
                lg:text-7xl
              "
            >
              Women Of
              <span className="block text-primary">
                Grace & Purpose
              </span>
            </h1>

            <p
              className="
                mx-auto mt-8 max-w-3xl
                text-lg leading-8
                text-muted-foreground
              "
            >
              A thriving community where women are encouraged,
              equipped, and empowered to grow in Christ,
              strengthen their families, and fulfil God's purpose.
            </p>

            <div
              className="
                mt-10
                inline-flex items-center gap-2
                rounded-2xl
                border border-primary/10
                bg-white
                px-5 py-4
                shadow-sm
              "
            >
              <Sparkles className="h-5 w-5 text-primary" />

              <span className="font-medium">
                "She is clothed with strength and dignity."
              </span>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              Proverbs 31:25
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};