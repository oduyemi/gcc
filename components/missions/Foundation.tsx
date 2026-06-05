"use client";
import { motion } from "framer-motion";
import {
  Quote,
  HeartHandshake,
  Globe2,
} from "lucide-react";



export const ScriptureFoundation = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 md:px-8 lg:px-12">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[30rem] w-[30rem] rounded-full bg-primary/[0.04] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-[#AF3800]/[0.05] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            overflow-hidden
            rounded-[3rem]
            border border-primary/10
            bg-gradient-to-br
            from-primary/[0.03]
            via-white
            to-[#AF3800]/[0.03]
            p-8 md:p-12 lg:p-16
          "
        >
          <div className="mx-auto max-w-4xl text-center">
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                bg-primary/10
                px-4 py-2
                text-[11px]
                font-black
                uppercase
                tracking-[0.28em]
                text-primary
              "
            >
              <Quote className="h-3.5 w-3.5" />
              Biblical Foundation
            </div>

            <h2
              className="
                mt-6
                text-4xl
                font-black
                tracking-[-0.05em]
                md:text-5xl
              "
            >
              Compassion In Action
            </h2>

            <blockquote
              className="
                mt-10
                text-2xl
                font-black
                leading-relaxed
                tracking-[-0.03em]
                md:text-4xl
              "
            >
              “Truly I tell you, whatever you did for one of the least
              of these brothers and sisters of mine, you did for Me.”
            </blockquote>

            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-primary">
              Matthew 25:40
            </p>

            <p
              className="
                mx-auto mt-8 max-w-3xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              Our mission is rooted in Christ's call to love, serve and
              care for those in need. Every outreach initiative,
              partnership and act of generosity reflects our commitment
              to sharing God's love in practical and transformative ways.
            </p>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <div
                className="
                  rounded-[2rem]
                  border border-primary/10
                  bg-white
                  p-6
                  shadow-sm
                "
              >
                <HeartHandshake className="h-8 w-8 text-primary" />

                <h3 className="mt-4 text-xl font-black">
                  Serve People
                </h3>

                <p className="mt-3 text-muted-foreground">
                  Demonstrating Christ's love through compassion,
                  generosity and practical support.
                </p>
              </div>

              <div
                className="
                  rounded-[2rem]
                  border border-primary/10
                  bg-white
                  p-6
                  shadow-sm
                "
              >
                <Globe2 className="h-8 w-8 text-primary" />

                <h3 className="mt-4 text-xl font-black">
                  Reach Communities
                </h3>

                <p className="mt-3 text-muted-foreground">
                  Extending hope beyond church walls and into the places
                  where it is needed most.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};