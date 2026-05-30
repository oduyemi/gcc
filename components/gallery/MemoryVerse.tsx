"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Church,
} from "lucide-react";

export const MemoryVerseCTA = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-24 md:px-8 lg:px-12">
      {/* Background Effects */}

      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute right-[-5%] top-0 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            glass
            glow-gold
            relative
            overflow-hidden
            rounded-[3rem]
            px-6
            py-14
            md:px-12
            md:py-20
            lg:px-20
          "
        >
          {/* Decorative Quote */}

          <div
            className="
              pointer-events-none
              absolute
              left-4
              top-4
              text-[10rem]
              font-black
              leading-none
              text-primary/10
              md:text-[14rem]
            "
          >
            "
          </div>

          <div
            className="
              pointer-events-none
              absolute
              right-6
              bottom-0
              text-[8rem]
              font-black
              leading-none
              text-primary/10
              md:text-[12rem]
            "
          >
            "
          </div>

          <div className="relative z-10 text-center">
            {/* Label */}

            <div
              className="
                inline-flex
                rounded-full
                border border-primary/10
                bg-primary/5
                px-5
                py-2
                text-[11px]
                font-black
                uppercase
                tracking-[0.25em]
                text-primary
              "
            >
              A Legacy Of Faith
            </div>

            {/* Scripture */}

            <h2
              className="
                mx-auto
                mt-10
                max-w-5xl
                text-5xl
                font-black
                leading-[0.95]
                tracking-[-0.06em]
                text-foreground
                md:text-7xl
                lg:text-8xl
              "
            >
              One generation shall
              <span className="block text-primary">
                praise Your works
              </span>
              to another.
            </h2>

            <p
              className="
                mt-6
                text-lg
                font-bold
                tracking-wide
                text-primary
              "
            >
              Psalm 145:4
            </p>

            <p
              className="
                mx-auto
                mt-8
                max-w-3xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              Every image in this gallery tells a story of worship,
              fellowship, outreach, discipleship, and lives being
              transformed through the power of Jesus Christ.
            </p>

            {/* Faith Pills */}

            <div
              className="
                mt-10
                flex
                flex-wrap
                justify-center
                gap-3
              "
            >
              {["Faith", "Worship", "Community"].map(
                (item) => (
                  <div
                    key={item}
                    className="
                      glass
                      rounded-full
                      px-5
                      py-2
                      text-sm
                      font-bold
                    "
                  >
                    {item}
                  </div>
                )
              )}
            </div>

            {/* CTA Cards */}

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {/* Watch Sermons */}

              <Link
                href="/sermons"
                className="
                  glass
                  glass-hover
                  group
                  rounded-[2rem]
                  p-8
                  text-left
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary/10
                    text-primary
                  "
                >
                  <PlayCircle className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-2xl font-black">
                  Watch Sermons
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  Experience powerful biblical teaching,
                  encouragement, and life-changing messages.
                </p>

                <div
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    font-bold
                    text-primary
                  "
                >
                  Start Watching

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </Link>

              {/* Plan Visit */}

              <Link
                href="/visit"
                className="
                  glass
                  glass-hover
                  group
                  rounded-[2rem]
                  p-8
                  text-left
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-accent/30
                    text-foreground
                  "
                >
                  <Church className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-2xl font-black">
                  Plan Your Visit
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  We'd love to welcome you and help you feel
                  right at home from the moment you arrive.
                </p>

                <div
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    font-bold
                    text-primary
                  "
                >
                  Visit Us

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};