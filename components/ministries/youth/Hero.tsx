"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Flame,
  Users,
  Compass,
  Sparkles,
} from "lucide-react";

export const YouthMinistryHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-0 h-[32rem] w-[32rem] rounded-full bg-primary/[0.05] blur-3xl" />

        <div className="absolute right-[-10%] top-20 h-[28rem] w-[28rem] rounded-full bg-[#AF3800]/[0.05] blur-3xl" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)]
            [background-size:120px_120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-primary/10
                bg-primary/5
                px-4 py-2
                text-[11px]
                font-black
                uppercase
                tracking-[0.25em]
                text-primary
              "
            >
              <Sparkles className="h-3.5 w-3.5" />
              Youth Ministry
            </div>

            <h1
              className="
                mt-7
                text-5xl
                font-black
                leading-[0.92]
                tracking-[-0.06em]
                text-foreground
                sm:text-6xl
                lg:text-7xl
              "
            >
              A Generation
              <span className="block text-primary">
                On Fire For Jesus
              </span>
            </h1>

            <p
              className="
                mt-7
                max-w-2xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              Helping young people encounter God, build authentic
              friendships, discover purpose, and become leaders who
              influence their generation for Christ.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/next-steps/youth"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-2xl
                  bg-primary
                  px-7 py-4
                  font-bold
                  text-white
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                Join The Youth

                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/visit"
                className="
                  inline-flex items-center justify-center
                  rounded-2xl
                  border border-primary/10
                  bg-white
                  px-7 py-4
                  font-bold
                  transition-all duration-300
                  hover:border-primary/20
                  hover:bg-primary/5
                "
              >
                Plan A Visit
              </Link>
            </div>

            {/* Pillars */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div
                className="
                  rounded-[1.75rem]
                  border border-primary/10
                  bg-white
                  p-5
                  shadow-sm
                "
              >
                <Flame className="h-5 w-5 text-primary" />

                <h3 className="mt-4 font-black">
                  Faith
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Growing deeper in Christ.
                </p>
              </div>

              <div
                className="
                  rounded-[1.75rem]
                  border border-primary/10
                  bg-white
                  p-5
                  shadow-sm
                "
              >
                <Users className="h-5 w-5 text-primary" />

                <h3 className="mt-4 font-black">
                  Community
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Building lifelong friendships.
                </p>
              </div>

              <div
                className="
                  rounded-[1.75rem]
                  border border-primary/10
                  bg-white
                  p-5
                  shadow-sm
                "
              >
                <Compass className="h-5 w-5 text-primary" />

                <h3 className="mt-4 font-black">
                  Purpose
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Discovering God's calling.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-5">
              {/* Main */}
              <div className="relative col-span-2 h-[430px] overflow-hidden rounded-[2.5rem]">
                <Image
                  src="/images/youthhero.jpg"
                  alt="Youth Ministry"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <div
                    className="
                      rounded-2xl
                      bg-white/95
                      px-5 py-4
                      shadow-lg
                      backdrop-blur-xl
                    "
                  >
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">
                      Youth Community
                    </p>

                    <p className="mt-1 font-semibold">
                      Faith • Friends • Purpose
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-56 overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/youthfellowship.jpg"
                  alt="Youth Fellowship"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image */}
              <div className="relative h-56 overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/youthworship.jpg"
                  alt="Youth Worship"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Card */}
            <div
              className="
                absolute
                -bottom-6
                left-10
                hidden
                rounded-[2rem]
                border border-primary/10
                bg-white
                p-5
                shadow-xl
                lg:block
              "
            >
              <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">
                Our Vision
              </p>

              <h4 className="mt-2 text-2xl font-black">
                Raise World Changers
              </h4>

              <p className="text-sm text-muted-foreground">
                Empowering young people to lead boldly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};