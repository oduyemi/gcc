"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Genuine care",
    description:
      "Every person who walks through our doors matters to God. We want everyone to feel seen, welcomed and treated with warmth, dignity and love.",
  },
  {
    number: "02",
    title: "Meaningful relationships",
    description:
      "A welcome is only the beginning. We take time to listen, stay connected with permission and build relationships that grow naturally.",
  },
  {
    number: "03",
    title: "A place to belong",
    description:
      "We help people find their place in our church family, grow in their faith and discover the joy of walking alongside others.",
  },
];

export const Intro = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.65, delay, ease: "easeOut" as const },
  });

  return (
    <section
      id="about-follow-up"
      className="relative overflow-hidden bg-[#FAF8F4] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section introduction */}
        <motion.div {...reveal()} className="max-w-3xl">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
            <span className="h-px w-9 bg-primary/60" />
            The heart of follow-up
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            More than a welcome.
            <span className="mt-2 block text-primary">
              A journey of belonging.
            </span>
          </h2>
        </motion.div>

        {/* Story and church community image */}
        <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            {...reveal(0.08)}
            className="relative"
          >
            <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] bg-[#EAE4DC] sm:aspect-[4/3] lg:aspect-[5/4]">
              <Image
                src="/images/followup1.jpg"
                alt="Church members sharing fellowship and welcoming one another"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                  Global Crossfire Church UK
                </p>
                <p className="mt-2 max-w-md text-2xl font-semibold leading-snug sm:text-3xl">
                  There is a place for you here.
                </p>
              </div>
            </div>

            {/* Small supporting caption */}
            <div className="mt-4 flex items-start gap-3 px-1">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <p className="text-sm leading-6 text-slate-500">
                Every conversation, every connection, every new beginning
                matters.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...reveal(0.16)}
            className="flex flex-col justify-center"
          >
            <h3 className="max-w-xl text-2xl font-semibold leading-snug tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              Church is not just somewhere to attend. It is a family to
              grow with.
            </h3>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              <p>
                At Global Crossfire Church UK, we believe that everyone
                who comes through our doors matters to God and should
                matter to us. Our Follow-Up Ministry exists to ensure
                that every guest receives a warm welcome, genuine care
                and appropriate support as they become connected to the
                life of the church.
              </p>

              <p>
                Follow-up is more than making telephone calls or
                sending messages. It is about showing the love of Jesus
                in practical ways, building trust and helping people
                move from being guests to becoming established members
                of our church family.
              </p>
            </div>

            <div className="mt-8 border-l-2 border-primary/50 pl-5 sm:pl-6">
              <p className="text-lg font-medium leading-8 text-slate-800 sm:text-xl">
                We want you to feel welcomed, remembered and supported
                as you find your place among us.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Ministry values */}
        <div className="mt-20 sm:mt-24 lg:mt-32">
          <motion.div
            {...reveal()}
            className="mb-8 max-w-2xl sm:mb-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
              What you can expect
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              A church family that makes room for you.
            </h3>

            <p className="mt-3 max-w-xl leading-7 text-slate-600 sm:text-base">
              Our heart is simple: to help every person feel at home,
              build genuine connections and take their next steps in faith.
            </p>
          </motion.div>

          <div className="grid overflow-hidden rounded-3xl border border-[#E7E0D7] bg-white/70 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.article
                key={value.number}
                {...reveal(index * 0.1)}
                className={[
                  "group relative p-7 transition-colors duration-300 hover:bg-white sm:p-8 lg:p-10",
                  index !== 0
                    ? "border-t border-[#E7E0D7] md:border-l md:border-t-0"
                    : "",
                ].join(" ")}
              >
                <p className="text-sm font-semibold tabular-nums text-primary/70">
                  {value.number}
                </p>

                <h4 className="mt-5 text-xl font-semibold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                  {value.title}
                </h4>

                <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {value.description}
                </p>

                <div className="mt-7 h-px w-10 bg-primary/50 transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
              </motion.article>
            ))}
          </div>
        </div>

        {/* Closing reassurance */}
        <motion.div
          {...reveal()}
          className="mt-12 rounded-3xl bg-primary px-6 py-9 text-white sm:mt-16 sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              You are welcome here
            </p>

            <h3 className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl">
              You do not have to find your way alone.
            </h3>

            <p className="mt-3 max-w-xl leading-7 text-white/85">
              Whether you are visiting for the first time or finding
              your way back to church, we are here to help you take
              your next step at a pace that feels right for you.
            </p>
          </div>

          <a
            href="/contact"
            className="mt-7 inline-flex min-h-12 shrink-0 items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary lg:mt-0"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};
