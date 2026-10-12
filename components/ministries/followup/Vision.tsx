"use client";
import { motion, useReducedMotion } from "framer-motion";


const outcomes = [
  {
    number: "01",
    title: "Our vision",
    description:
      "Understand the vision, direction and purpose of Global Crossfire Church UK and the heart behind what we do.",
  },
  {
    number: "02",
    title: "Our beliefs & values",
    description:
      "Discover the beliefs, values and culture that shape our church family and guide how we grow together.",
  },
  {
    number: "03",
    title: "Your next steps",
    description:
      "Explore what making this church your spiritual home means and how you can become more connected to church life.",
  },
];


export const VisionImpartation = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <section
      id="vision-impartation"
      className="overflow-hidden bg-[#FAF8F4] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          {...reveal()}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
            <span className="h-px w-8 bg-primary/50" />
            An important milestone
            <span className="h-px w-8 bg-primary/50" />
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Discover the heart
            <span className="mt-2 block text-primary">
              behind our church.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
            As you begin to feel at home at Global Crossfire Church UK,
            the Vision Impartation Programme is an opportunity to
            understand who we are, what we believe and how you can
            become part of our church family.
          </p>
        </motion.div>

        {/* Main programme panel */}
        <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-[#E8E0D6] bg-white shadow-sm sm:mt-16 lg:mt-20 lg:grid-cols-[0.85fr_1.15fr] lg:rounded-[2.5rem]">
          {/* Programme details */}
          <motion.div
            {...reveal(0.05)}
            className="relative flex flex-col justify-between overflow-hidden bg-primary p-7 text-white sm:p-10 lg:p-12"
          >
            {/* Decorative shapes */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-8 h-56 w-56 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/[0.06] blur-2xl"
            />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Getting to know us
              </p>

              <h3 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
                Vision Impartation Programme
              </h3>

              <p className="mt-5 max-w-md text-base leading-8 text-white/80 sm:text-lg">
                A dedicated time to learn, ask questions and discover
                the heart of Global Crossfire Church UK.
              </p>

              <div className="mt-8 h-px w-16 bg-white/50" />
            </div>

            <div className="relative mt-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
                At a glance
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/15 bg-white/[0.08] p-4 sm:p-5">
                  <p className="text-sm text-white/70">
                    Format
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    Online
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    Via Zoom
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/[0.08] p-4 sm:p-5">
                  <p className="text-sm text-white/70">
                    Duration
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    Up to 2 hours
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    One session
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/70">
                Held on a selected day and time, with details shared
                as arrangements are made.
              </p>
            </div>
          </motion.div>

          {/* What to expect */}
          <motion.div
            {...reveal(0.12)}
            className="p-7 sm:p-10 lg:p-12"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
              What you will discover
            </p>

            <h3 className="mt-4 max-w-lg text-2xl font-semibold leading-snug tracking-tight text-slate-950 sm:text-3xl">
              A clearer understanding of our church and your place in it.
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600">
              When you are ready to make Global Crossfire Church UK
              your spiritual home, you will be invited to participate
              in VIP. This single online session gives you space to
              understand our church, its direction and what being part
              of the family involves.
            </p>

            <div className="mt-8 divide-y divide-[#EAE4DC] border-y border-[#EAE4DC]">
              {outcomes.map((outcome, index) => (
                <motion.article
                  key={outcome.number}
                  {...reveal(0.15 + index * 0.08)}
                  className="group py-6 first:pt-6 last:pb-6"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/20 text-xs font-semibold tabular-nums text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      {outcome.number}
                    </span>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-950 transition-colors duration-300 group-hover:text-primary sm:text-xl">
                        {outcome.title}
                      </h4>

                      <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                        {outcome.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Reassurance */}
            <div className="mt-8 rounded-2xl bg-[#F6F1EA] p-5 sm:p-6">
              <p className="text-base font-semibold leading-7 text-slate-900">
                This is a step towards belonging, not a test you need
                to pass.
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                Following completion of VIP, you will be supported
                towards becoming established and connected to the life
                and ministry of the church.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Closing statement */}
        <motion.div
          {...reveal(0.1)}
          className="mx-auto mt-12 max-w-3xl text-center sm:mt-16"
        >
          <p className="text-xl font-medium leading-8 tracking-tight text-slate-800 sm:text-2xl sm:leading-9">
            We look forward to helping you understand our heart, share
            our vision and find your place in the family.
          </p>
        </motion.div>
      </div>
    </section>
  );
};