"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";

const locations = [
  {
    title: "Juapong",
    country: "Ghana",
    image: "/images/ghana.jpg",
    description:
      "Supporting vulnerable families through practical aid, children's programmes and community outreach initiatives.",
    featured: true,
  },
  {
    title: "Kpoteme",
    country: "Ghana",
    image: "/images/kpoteme.jpg",
    description:
      "Providing resources, wellbeing support and opportunities that strengthen local families and young people.",
  },
  {
    title: "Assin Fosu",
    country: "Ghana",
    image: "/images/fosu.jpg",
    description:
      "Serving communities through social intervention projects, outreach events and practical support.",
  },
  {
    title: "Sierra Leone",
    country: "West Africa",
    image: "/images/sierra-leone.jpg",
    description:
      "Supporting one-off mission initiatives that bring hope, encouragement and essential assistance.",
  },
  {
    title: "Togo",
    country: "West Africa",
    image: "/images/togo.jpg",
    description:
      "Partnering with local communities through outreach and humanitarian support projects.",
  },
];

export const MissionLocations = () => {
  const featured = locations.find((l) => l.featured)!;
  const others = locations.filter((l) => !l.featured);

  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[30rem] w-[30rem] rounded-full bg-primary/[0.04] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-[#AF3800]/[0.05] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className="
              inline-flex items-center
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
            Where We Serve
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
            Impacting Communities
            <span className="block text-primary">
              Across Africa
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Through local partnerships, outreach programmes and social
            intervention projects, we are serving communities with
            practical support and the love of Christ.
          </p>
        </motion.div>

        {/* Layout */}

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Featured Location */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              group
              overflow-hidden
              rounded-[2.5rem]
              border border-primary/10
              bg-white
              shadow-xl
            "
          >
            <div className="relative h-[520px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="
                  object-cover
                  transition-transform duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="absolute left-8 top-8">
                <div
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    bg-white
                    px-4 py-2
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.2em]
                    text-primary
                  "
                >
                  <MapPin className="h-4 w-4" />
                  Featured Location
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                  {featured.country}
                </p>

                <h3 className="mt-2 text-5xl font-black">
                  {featured.title}
                </h3>

                <p className="mt-4 max-w-xl text-white/85">
                  {featured.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Other Locations */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {others.map((location, index) => (
              <motion.div
                key={location.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="
                  group
                  overflow-hidden
                  rounded-[2rem]
                  border border-primary/10
                  bg-white
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <div className="grid grid-cols-[120px_1fr]">
                  <div className="relative h-full min-h-[150px]">
                    <Image
                      src={location.image}
                      alt={location.title}
                      fill
                      className="
                        object-cover
                        transition-transform duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-primary">
                      <MapPin className="h-4 w-4" />

                      <span className="text-xs font-black uppercase tracking-[0.2em]">
                        {location.country}
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-black">
                      {location.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {location.description}
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 font-bold text-primary">
                      Community Impact

                      <ArrowUpRight
                        className="
                          h-4 w-4
                          transition-transform
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Highlight */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div
            className="
              rounded-[2.5rem]
              border border-primary/10
              bg-gradient-to-r
              from-primary/[0.04]
              via-white
              to-[#AF3800]/[0.04]
              p-8 md:p-10
            "
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-3xl font-black tracking-[-0.03em]">
                  Communities. Partnerships. Transformation.
                </h3>

                <p className="mt-3 max-w-3xl text-muted-foreground">
                  Every location represents lives being touched through
                  compassion, practical support and the hope found in Christ.
                </p>
              </div>

              <div
                className="
                  flex h-20 w-20 items-center justify-center
                  rounded-3xl
                  bg-primary
                  text-white
                "
              >
                <HeartHandshake className="h-10 w-10" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};