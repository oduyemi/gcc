"use client";
import { motion, useReducedMotion } from "framer-motion";

const commitments = [
  {
    number: "01",
    title: "Personal Care",
    description:
      "Every guest deserves a warm welcome, genuine care and appropriate support. We are committed to making every person feel seen, valued and welcomed into our church family.",
  },
  {
    number: "02",
    title: "Spiritual Growth",
    description:
      "We encourage people to grow in faith, develop meaningful relationships and become established in church life through fellowship, discipleship and the Word of God.",
  },
  {
    number: "03",
    title: "Continued Support",
    description:
      "As people become established, ongoing care, development, accountability and support continue through the appropriate leadership and pastoral structures.",
  },
];

const journey = ["Guest", "Family", "Growth", "Service"];

export const MinistryCommitment = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      {/* Subtle background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-primary/[0.04] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[45%] h-80 w-80 rounded-full bg-amber-100/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Commitment introduction */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-gradient-to-br from-[#FAF8F4] via-white to-[#F8F4EC] px-6 py-14 text-center sm:px-12 sm:py-16 lg:rounded-[2rem] lg:px-20 lg:py-20"
        >
          {/* Decorative accent */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
          />

          <div className="relative mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary sm:text-sm">
              Our Commitment
            </p>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              No guest overlooked.
              <span className="mt-2 block text-primary">
                No one forgotten.
              </span>
            </h2>

            <div
              aria-hidden="true"
              className="mx-auto mt-7 h-1 w-16 rounded-full bg-amber-600"
            />

            <p className="mx-auto mt-7 max-w-2xl text-lg font-medium leading-8 text-slate-700 sm:text-xl">
              Everyone deserves the opportunity to belong, grow and
              become established.
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              The Follow-Up Ministry serves as a bridge, helping people
              move from their first experience of Global Crossfire
              Church UK to meaningful connection, spiritual growth,
              belonging and active participation within the church
              family.
            </p>
          </div>
        </motion.div>

        {/* Ministry commitments */}
        <div className="mt-12">
          <div className="mb-7 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              What Guides Us
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              A commitment to every person.
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Our approach is built on intentional care, spiritual
              development and a lasting sense of belonging.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {commitments.map((item, index) => (
              <motion.article
                key={item.number}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 18 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion ? 0 : index * 0.1,
                  ease: "easeOut",
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-slate-900/[0.05] sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
                />

                <span className="text-sm font-bold tracking-[0.15em] text-primary/75">
                  {item.number}
                </span>

                <h4 className="mt-6 text-xl font-bold tracking-tight text-slate-950">
                  {item.title}
                </h4>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 sm:text-base">
                  {item.description}
                </p>

                <div
                  aria-hidden="true"
                  className="mt-7 h-px w-full bg-slate-100"
                />
              </motion.article>
            ))}
          </div>
        </div>

        {/* Continuity of care */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mt-8 overflow-hidden rounded-2xl border border-primary/15 bg-[#FAF8F4]"
        >
          <div className="grid lg:grid-cols-[0.34fr_0.66fr]">
            <div className="flex flex-col justify-center bg-primary px-7 py-8 text-white sm:px-9 lg:px-10 lg:py-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                Beyond Follow-Up
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                Follow-up transitions.
                <span className="mt-1 block text-[#E8D2A5]">
                  Care continues.
                </span>
              </h3>

              <div
                aria-hidden="true"
                className="mt-6 h-1 w-12 rounded-full bg-[#D9B779]"
              />
            </div>

            <div className="px-7 py-8 sm:px-9 sm:py-9 lg:px-10">
              <p className="leading-8 text-slate-700">
                Once a person has progressed through the follow-up
                journey, completed the Vision Impartation Programme,
                become established within the church and connected
                to the appropriate department or ministry structure,
                the formal responsibility of the Follow-Up Ministry
                comes to an end.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                This does not mean that care ends. Responsibility
                for ongoing care, development, accountability and
                support continues through the appropriate leadership
                and pastoral structures within the church. In this
                way, every person can remain connected to relationships
                and structures that support continued spiritual growth.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Journey progression */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-12"
        >
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            The Journey
          </p>

          <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:gap-x-5">
            {journey.map((item, index) => (
              <div key={item} className="flex items-center gap-3 sm:gap-5">
                <div
                  className={`rounded-full border px-5 py-3 text-sm font-bold transition-colors sm:px-6 ${
                    index === journey.length - 1
                      ? "border-primary bg-primary text-white"
                      : "border-slate-200 bg-white text-slate-800"
                  }`}
                >
                  {item}
                </div>

                {index < journey.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="text-lg font-medium text-primary/60"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="mt-5 text-center text-sm leading-6 text-slate-500">
            From a warm welcome to meaningful participation in church life.
          </p>
        </motion.div>
      </div>
    </section>
  );
};