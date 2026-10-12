"use client";
import { motion, useReducedMotion } from "framer-motion";

const stages = [
  {
    number: "01",
    eyebrow: "Your first steps",
    title: "Welcome & First Contact",
    description:
      "Every journey begins with a welcome. After your visit, we may reach out—with your permission—to say hello, hear about your experience and help you feel at home.",
  },
  {
    number: "02",
    eyebrow: "Staying connected",
    title: "Continued Follow-Up",
    description:
      "We keep the conversation going at a comfortable pace, making space for your questions, offering support and helping you take your next steps.",
  },
  {
    number: "03",
    eyebrow: "Finding your people",
    title: "Relationship & Belonging",
    description:
      "Church becomes more meaningful when you know people by name. We encourage genuine friendships, fellowship and opportunities to grow together.",
  },
  {
    number: "04",
    eyebrow: "Understanding our heart",
    title: "Vision Impartation Programme",
    description:
      "Through our VIP session, you will learn about our vision, beliefs, values, culture and direction, helping you understand what shapes life at Global Crossfire Church.",
  },
  {
    number: "05",
    eyebrow: "Becoming established",
    title: "Church Integration",
    description:
      "As you settle in, we help you become more connected to the life of the church, build lasting relationships and participate in our shared journey of faith.",
  },
  {
    number: "06",
    eyebrow: "Discovering your gifts",
    title: "Department & Ministry Connection",
    description:
      "There is room for everyone to contribute. We help you explore opportunities to serve in ways that reflect your interests, gifts and personal development.",
  },
  {
    number: "07",
    eyebrow: "A lasting connection",
    title: "Established Membership",
    description:
      "You become connected to the church family, its ministry structures and ongoing pastoral support. And as you continue to grow, you will have others walking alongside you.",
  },
];

const journeyOutcomes = [
  "A warm welcome",
  "Meaningful relationships",
  "Growth in faith",
  "A place to serve",
];

export const FollowUpJourney = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
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
      id="your-journey"
      className="scroll-mt-20 overflow-hidden bg-[#FAF8F4] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Introduction */}
        <motion.div
          {...reveal()}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
            <span className="h-px w-8 bg-primary/50" />
            Your journey with us
            <span className="h-px w-8 bg-primary/50" />
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            From your first visit
            <span className="mt-2 block text-primary">
              to finding your place.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
            Getting connected takes time, and everyone’s journey looks
            a little different. We are here to walk alongside you as
            you build relationships, discover our vision and find your
            place in the Global Crossfire Church family.
          </p>
        </motion.div>

        {/* Journey introduction */}
        <motion.div
          {...reveal(0.08)}
          className="mt-12 flex flex-col gap-4 rounded-2xl border border-[#E8E0D6] bg-white/70 p-5 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-7 lg:px-9"
        >
          <div className="max-w-2xl">
            <p className="text-lg font-semibold text-slate-950 sm:text-xl">
              There is no need to have everything figured out.
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
              Come as you are. Ask questions, meet people and take
              each step at a pace that feels right for you.
            </p>
          </div>

          <span className="w-fit shrink-0 rounded-full bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            One step at a time
          </span>
        </motion.div>

        {/* Journey timeline */}
        <div className="relative mt-14 sm:mt-20">
          <div
            aria-hidden="true"
            className="absolute bottom-10 left-[19px] top-6 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent sm:left-[27px] lg:left-1/2 lg:-translate-x-1/2"
          />

          <div className="space-y-6 sm:space-y-8">
            {stages.map((stage, index) => {
              const isRight = index % 2 === 1;
              const isLast = index === stages.length - 1;

              return (
                <motion.article
                  key={stage.number}
                  {...reveal(index * 0.035)}
                  className="relative grid grid-cols-[40px_minmax(0,1fr)] gap-4 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-6 lg:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] lg:gap-5"
                >
                  {/* Left timeline content */}
                  <div
                    className={`hidden lg:block ${
                      isRight ? "" : "lg:col-start-1 lg:row-start-1"
                    }`}
                  >
                    {!isRight && (
                      <StageCard
                        stage={stage}
                        isLast={isLast}
                      />
                    )}
                  </div>

                  {/* Timeline marker */}
                  <div className="relative z-10 flex justify-center lg:col-start-2 lg:row-start-1">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border text-xs font-bold tabular-nums shadow-sm sm:h-14 sm:w-14 sm:text-sm ${
                        isLast
                          ? "border-primary bg-primary text-white"
                          : "border-[#E3D7C9] bg-[#FAF8F4] text-primary"
                      }`}
                    >
                      {stage.number}
                    </div>
                  </div>

                  {/* Right timeline content */}
                  <div className="min-w-0 lg:col-start-3 lg:row-start-1">
                    <div className="lg:hidden">
                      <StageCard
                        stage={stage}
                        isLast={isLast}
                      />
                    </div>

                    {isRight && (
                      <div className="hidden lg:block">
                        <StageCard
                          stage={stage}
                          isLast={isLast}
                        />
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* What the journey leads to */}
        <motion.div
          {...reveal(0.1)}
          className="mt-16 border-t border-[#E5DDD3] pt-10 sm:mt-20 sm:pt-14"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
              The heart of it all
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              More than joining a church. Becoming part of a family.
            </h3>

            <p className="mt-4 leading-7 text-slate-600 sm:text-base">
              Our hope is that you will feel cared for, connected to
              others, encouraged in your faith and supported as you
              discover how you can contribute.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {journeyOutcomes.map((outcome) => (
              <span
                key={outcome}
                className="rounded-full border border-[#E5DDD3] bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-primary/40 hover:text-primary sm:px-5"
              >
                {outcome}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Closing message */}
        <motion.div
          {...reveal(0.12)}
          className="mt-12 rounded-3xl bg-primary px-6 py-9 text-white sm:mt-16 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              We would love to walk with you
            </p>

            <h3 className="mt-4 text-2xl font-semibold leading-snug sm:text-3xl lg:text-4xl">
              Your story matters. Your place matters. You matter.
            </h3>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/85 sm:text-lg sm:leading-8">
              Whether you are new to Global Crossfire Church or
              looking to become more connected, you do not have to
              take the next step alone.
            </p>

            <a
              href="/contact"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-[#F3ECE4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Start a conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

type Stage = (typeof stages)[number];

function StageCard({
  stage,
  isLast,
}: {
  stage: Stage;
  isLast: boolean;
}) {
  return (
    <div
      className={`group rounded-2xl border p-5 transition-all duration-300 sm:p-7 ${
        isLast
          ? "border-primary/25 bg-white shadow-md shadow-primary/5"
          : "border-[#E8E0D6] bg-white/80 hover:border-primary/30 hover:bg-white hover:shadow-lg hover:shadow-slate-900/[0.03]"
      }`}
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-primary/80 sm:text-xs">
        {stage.eyebrow}
      </p>

      <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-primary sm:text-xl">
        {stage.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
        {stage.description}
      </p>

      {isLast && (
        <p className="mt-5 border-t border-[#E8E0D6] pt-4 text-sm font-medium leading-6 text-primary">
          Connected, supported and growing together.
        </p>
      )}
    </div>
  );
}
