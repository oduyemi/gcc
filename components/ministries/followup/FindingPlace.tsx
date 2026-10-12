"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";


const opportunities = [
  {
    number: "01",
    title: "Care & Hospitality",
    description: "Help people feel welcomed, valued and at home.",
  },
  {
    number: "02",
    title: "Worship & Creative Arts",
    description: "Use your creativity and gifts to contribute to worship.",
  },
  {
    number: "03",
    title: "Community & Outreach",
    description: "Share the love of Jesus through practical service.",
  },
  {
    number: "04",
    title: "Church Support",
    description: "Help the church family work together effectively.",
  },
  {
    number: "05",
    title: "Discipleship & Growth",
    description: "Encourage faith, learning and fellowship.",
  },
  {
    number: "06",
    title: "Your Unique Gifts",
    description: "Explore where your abilities and interests can flourish.",
  },
];

export const FindingYourPlace = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: 0.55,
      delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <section
      id="finding-your-place"
      className="overflow-hidden bg-[#FAF8F4] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          {...reveal()}
          className="grid gap-5 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-12"
        >
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
              <span className="h-px w-8 bg-primary/50" />
              Finding your place
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              There is room
              <span className="block text-primary">
                for you here.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:pb-1">
            Every person brings something valuable to the church family.
            Discover your gifts, meet others and find meaningful ways
            to serve.
          </p>
        </motion.div>

        {/* Main image */}
        <motion.div
          {...reveal(0.08)}
          className="relative mt-10 overflow-hidden rounded-[1.75rem] bg-[#E7E0D7] sm:mt-14 sm:rounded-[2rem]"
        >
          <div className="relative aspect-[5/4] sm:aspect-[16/8] lg:aspect-[21/8]">
            <Image
              src="/images/findplace.jpg"
              alt="Church community coming together in fellowship and service"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80 sm:text-sm">
                Made to grow together
              </p>

              <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                Your gifts. Your community. Your place to belong.
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Service opportunities */}
        <div className="mt-14 sm:mt-16 lg:mt-20">
          <motion.div
            {...reveal()}
            className="mb-7 flex flex-col gap-3 sm:mb-9 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary sm:text-sm">
                Explore opportunities
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Where might you fit?
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-base">
              These are a few ways you could contribute as you become
              established in the church.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((opportunity, index) => (
              <motion.article
                key={opportunity.number}
                {...reveal(index * 0.06)}
                className="group rounded-2xl border border-[#E7E0D7] bg-white/80 p-5 transition-colors duration-300 hover:border-primary/30 hover:bg-white sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="max-w-xs text-lg font-semibold leading-snug text-slate-950 transition-colors duration-300 group-hover:text-primary sm:text-xl">
                    {opportunity.title}
                  </h4>

                  <span className="shrink-0 pt-1 text-xs font-semibold tabular-nums text-primary/65">
                    {opportunity.number}
                  </span>
                </div>

                <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600 sm:text-base">
                  {opportunity.description}
                </p>

                <div className="mt-5 h-px w-9 bg-primary/40 transition-all duration-300 group-hover:w-14 group-hover:bg-primary" />
              </motion.article>
            ))}
          </div>
        </div>

        {/* Closing note */}
        <motion.div
          {...reveal(0.1)}
          className="mt-8 flex flex-col gap-3 border-t border-[#E5DDD3] pt-6 sm:mt-10 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
        >
          <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            You do not need to have everything figured out. We will help
            you explore where your gifts and interests may fit within
            the church's ministry structure.
          </p>

          <span className="shrink-0 text-sm font-semibold text-primary">
            Grow together. Serve with purpose.
          </span>
        </motion.div>
      </div>
    </section>
  );
};
