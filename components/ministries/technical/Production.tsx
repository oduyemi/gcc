"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mic2,
  Music4,
  Radio,
  Camera,
  Headphones,
  MonitorPlay,
  Check,
} from "lucide-react";

const worshipAreas = [
  "Worship Leaders",
  "Vocals & Choir",
  "Musicians",
  "Special Worship Presentations",
  "Prayer & Worship Nights",
];

const productionAreas = [
  "Audio Engineering",
  "Livestream Production",
  "Projection & Presentation",
  "Photography & Media",
  "Lighting & Technical Support",
];

export const WorshipAndProduction = () => {
  return (
    <section className="relative overflow-hidden bg-muted/20 px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-primary/[0.04] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#AF3800]/[0.04] blur-3xl" />
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
              bg-primary/5
              px-4 py-2
              text-[11px]
              font-black
              tracking-[0.25em]
              uppercase
              text-primary
            "
          >
            Ministry Teams
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
            Worship &
            <span className="text-primary"> Production</span>
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Different gifts. One purpose. Creating environments where
            people can encounter God.
          </p>
        </motion.div>

        {/* Main Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Worship Card */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              overflow-hidden
              rounded-[2.5rem]
              border border-primary/10
              bg-white
              shadow-xl
            "
          >
            <div className="relative h-72">
              <Image
                src="/images/worshippers.jpg"
                alt="Worship Team"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <div
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    bg-white/95
                    backdrop-blur
                  "
                >
                  <Mic2 className="h-7 w-7 text-primary" />
                </div>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-black">
                Worship Ministry
              </h3>

              <p className="mt-4 leading-8 text-muted-foreground">
                Through music, worship and praise, we seek to lead people
                into God's presence and create moments of genuine encounter.
              </p>

              <div className="mt-8 space-y-4">
                {worshipAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="
                        flex h-7 w-7 items-center justify-center
                        rounded-full
                        bg-primary/10
                      "
                    >
                      <Check className="h-4 w-4 text-primary" />
                    </div>

                    <span>{area}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <div
                  className="
                    flex items-center gap-2
                    rounded-full
                    bg-primary/5
                    px-4 py-2
                    text-sm
                  "
                >
                  <Music4 className="h-4 w-4 text-primary" />
                  Music
                </div>

                <div
                  className="
                    flex items-center gap-2
                    rounded-full
                    bg-primary/5
                    px-4 py-2
                    text-sm
                  "
                >
                  <Mic2 className="h-4 w-4 text-primary" />
                  Worship
                </div>
              </div>
            </div>
          </motion.div>

          {/* Production Card */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              overflow-hidden
              rounded-[2.5rem]
              border border-primary/10
              bg-white
              shadow-xl
            "
          >
            <div className="relative h-72">
              <Image
                src="/images/music/production.jpg"
                alt="Production Team"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <div
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    bg-white/95
                    backdrop-blur
                  "
                >
                  <Radio className="h-7 w-7 text-primary" />
                </div>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-black">
                Technical & Production
              </h3>

              <p className="mt-4 leading-8 text-muted-foreground">
                Behind every service is a dedicated team using technology,
                creativity and excellence to support worship and ministry.
              </p>

              <div className="mt-8 space-y-4">
                {productionAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="
                        flex h-7 w-7 items-center justify-center
                        rounded-full
                        bg-primary/10
                      "
                    >
                      <Check className="h-4 w-4 text-primary" />
                    </div>

                    <span>{area}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <div
                  className="
                    flex items-center gap-2
                    rounded-full
                    bg-primary/5
                    px-4 py-2
                    text-sm
                  "
                >
                  <Headphones className="h-4 w-4 text-primary" />
                  Audio
                </div>

                <div
                  className="
                    flex items-center gap-2
                    rounded-full
                    bg-primary/5
                    px-4 py-2
                    text-sm
                  "
                >
                  <MonitorPlay className="h-4 w-4 text-primary" />
                  Livestream
                </div>

                <div
                  className="
                    flex items-center gap-2
                    rounded-full
                    bg-primary/5
                    px-4 py-2
                    text-sm
                  "
                >
                  <Camera className="h-4 w-4 text-primary" />
                  Media
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Statement */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-12
            max-w-5xl
            rounded-[2.5rem]
            border border-primary/10
            bg-white
            p-8 md:p-10
            text-center
            shadow-sm
          "
        >
          <p className="text-xl font-semibold leading-relaxed">
            Whether on stage or behind the scenes, every role is ministry.
            Every song, every camera angle, every sound check and every
            act of service contributes to helping people encounter Christ.
          </p>
        </motion.div>
      </div>
    </section>
  );
};