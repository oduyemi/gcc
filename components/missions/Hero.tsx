"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  HeartHandshake,
  Users,
  Sparkles,
} from "lucide-react";

export const MissionHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Elements */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[40rem] w-[40rem] rounded-full bg-primary/[0.05] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[35rem] w-[35rem] rounded-full bg-[#AF3800]/[0.05] blur-3xl" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)]
            [background-size:120px_120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                bg-primary/10
                px-5 py-2
                text-[11px]
                font-black
                uppercase
                tracking-[0.28em]
                text-primary
              "
            >
              <Sparkles className="h-3.5 w-3.5" />
              Our Mission
            </div>

            <h1
              className="
                mt-7
                text-5xl
                font-black
                leading-none
                tracking-[-0.07em]
                text-foreground
                md:text-6xl
                lg:text-7xl
              "
            >
              Transforming Lives.
              <span className="block text-primary">
                Revealing Christ.
              </span>

              <span className="block">
                Impacting The World.
              </span>
            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              Our Overseas Mission Project supports vulnerable families, 
              particularly children, young people, and women in deprived 
              communities in Ghana. Through local service centres and 
              community outreach, we provide essential items such as 
              clothing, toiletries, baby supplies, stationery, toys, 
              and hot meals to improve well-being and living conditions. 
              Working with local schools, welfare services, health clinics, 
              hospitals, and police, we ensure support is coordinated and 
              targeted effectively. We also deliver one-off community 
              support projects in other African countries, including Ghana, 
              Sierra Leone, and Togo.
            </p>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="
                  inline-flex items-center gap-3
                  rounded-2xl
                  bg-primary
                  px-8 py-4
                  font-bold
                  text-white
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                Join The Mission

                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/visit"
                className="
                  inline-flex items-center gap-3
                  rounded-2xl
                  border border-primary/15
                  bg-white
                  px-8 py-4
                  font-bold
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                Visit Us
              </Link>
            </div>

            {/* Mission Metrics */}

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Users,
                  value: "Growing",
                  label: "Disciples",
                },
                {
                  icon: HeartHandshake,
                  value: "Serving",
                  label: "Communities",
                },
                {
                  icon: Globe,
                  value: "Reaching",
                  label: "Nations",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="
                      rounded-[1.5rem]
                      border border-primary/10
                      bg-white/80
                      p-5
                      backdrop-blur-sm
                    "
                  >
                    <Icon className="h-5 w-5 text-primary" />

                    <div className="mt-4 text-xl font-black">
                      {item.value}
                    </div>

                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Visual */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[3rem]">
              <div className="relative h-[650px]">
                <Image
                  src="/images/africa.jpg"
                  alt="Church Mission"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Floating Card 1 */}

                <div
                  className="
                    absolute left-6 top-6
                    rounded-2xl
                    bg-white
                    p-5
                    shadow-2xl
                  "
                >
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                    Mission Focus
                  </p>

                  <p className="mt-2 font-bold">
                    Making Disciples
                  </p>
                </div>

                {/* Floating Card 2 */}

                <div
                  className="
                    absolute bottom-6 right-6
                    rounded-2xl
                    bg-white
                    p-5
                    shadow-2xl
                  "
                >
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                    Matthew 28:19
                  </p>

                  <p className="mt-2 max-w-[220px] text-sm font-medium">
                    Go and make disciples of all nations.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Ring */}

            <div
              className="
                absolute -bottom-8 -left-8
                h-40 w-40
                rounded-full
                border-[20px]
                border-primary/10
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};