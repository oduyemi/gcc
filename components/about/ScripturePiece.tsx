"use client";

import { motion } from "framer-motion";
import {
  Quote,
  Cross,
  Sparkles,
  Flame,
  Heart,
} from "lucide-react";

const values = [
  "Faith",
  "Prayer",
  "Revival",
  "Purpose",
  "Worship",
];

export const ScriptureCenterpiece = () => {
  return (
    <section className="relative overflow-hidden px-4 py-32 md:px-8 lg:px-12">
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        {/* Divine Glow */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[42rem]
            w-[42rem]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary/20
            blur-[140px]
          "
        />

        {/* Secondary Glow */}

        <motion.div
          animate={{
            scale: [1, 1.18, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[28rem]
            w-[28rem]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-accent/20
            blur-[100px]
          "
        />

        {/* Light Rays */}

        <div
          className="
            absolute
            inset-0
            opacity-60
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-0
              h-full
              w-[900px]
              -translate-x-1/2
              bg-[conic-gradient(from_180deg_at_50%_0%,transparent_0deg,rgba(255,255,255,0.8)_25deg,transparent_50deg)]
              blur-3xl
            "
          />
        </div>

        {/* Giant Cross */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            pointer-events-none
          "
        >
          <Cross
            className="
              h-[34rem]
              w-[34rem]
              text-primary/[0.03]
              drop-shadow-[0_0_80px_rgba(175,56,0,0.12)]
            "
          />
        </div>

        {/* Sparkles */}

        <Sparkles className="absolute left-[12%] top-[20%] h-5 w-5 animate-pulse text-primary/50" />
        <Sparkles className="absolute right-[18%] top-[15%] h-4 w-4 animate-pulse text-primary/40" />
        <Sparkles className="absolute bottom-[25%] left-[18%] h-4 w-4 animate-pulse text-primary/40" />
        <Sparkles className="absolute bottom-[18%] right-[15%] h-5 w-5 animate-pulse text-primary/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            overflow-hidden
            rounded-[3rem]
            border
            border-white/40
            bg-white/60
            px-8
            py-20
            text-center
            backdrop-blur-3xl
            shadow-[0_40px_120px_rgba(175,56,0,0.12)]
            md:px-20
          "
        >
          {/* Shimmer Sweep */}

          <motion.div
            animate={{
              x: ["-150%", "150%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 6,
            }}
            className="
              absolute
              inset-y-0
              w-40
              rotate-12
              bg-gradient-to-r
              from-transparent
              via-white/40
              to-transparent
              blur-xl
            "
          />

          {/* Halo */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[24rem]
              w-[24rem]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-primary/10
              blur-[120px]
            "
          />

          {/* Rotating Rings */}

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                h-[34rem]
                w-[34rem]
                rounded-full
                border
                border-primary/10
              "
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 80,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-[26rem]
                w-[26rem]
                rounded-full
                border
                border-primary/5
              "
            />
          </div>

          {/* Floating Particles */}

          {[...Array(14)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -25, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
              }}
              className="
                absolute
                h-2
                w-2
                rounded-full
                bg-primary/30
              "
              style={{
                left: `${8 + i * 6}%`,
                top: `${15 + (i % 5) * 15}%`,
              }}
            />
          ))}

          {/* Icon */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              relative
              z-10
              mx-auto
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              bg-primary/10
              shadow-[0_0_60px_rgba(175,56,0,0.25)]
            "
          >
            <Quote className="h-10 w-10 text-primary" />
          </motion.div>

          {/* Badge */}

          <div
            className="
              relative
              z-10
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-primary/10
              bg-white/70
              px-5
              py-3
              backdrop-blur-xl
            "
          >
            <Flame className="h-4 w-4 text-primary" />

            <span
              className="
                text-[11px]
                font-black
                uppercase
                tracking-[0.3em]
                text-primary
              "
            >
              Our Foundation
            </span>
          </div>

          {/* Scripture */}

          <blockquote
            className="
              relative
              z-10
              mx-auto
              mt-10
              max-w-5xl
              text-5xl
              font-black
              leading-[0.95]
              tracking-[-0.07em]
              text-foreground
              md:text-7xl
              xl:text-8xl
            "
          >
            For no one can lay any foundation
            other than the one already laid,
            which is{" "}
            <span
              className="
                bg-gradient-to-r
                from-primary
                via-[#d8a45b]
                to-primary
                bg-clip-text
                text-transparent
              "
            >
              Jesus Christ
            </span>
            .
          </blockquote>

          {/* Divider */}

          <div className="relative z-10 mt-12 flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-primary/20" />

            <Cross className="h-5 w-5 text-primary" />

            <div className="h-px w-20 bg-primary/20" />
          </div>

          {/* Reference */}

          <div className="relative z-10 mt-8">
            <span
              className="
                inline-flex
                rounded-full
                bg-primary
                px-7
                py-3
                text-sm
                font-black
                uppercase
                tracking-[0.15em]
                text-white
                shadow-[0_0_40px_rgba(175,56,0,0.35)]
              "
            >
              1 Corinthians 3:11
            </span>
          </div>

          {/* Values */}

          <div className="relative z-10 mt-14 flex flex-wrap justify-center gap-4">
            {values.map((value) => (
              <div
                key={value}
                className="
                  rounded-full
                  border
                  border-primary/10
                  bg-white/70
                  px-5
                  py-3
                  text-sm
                  font-bold
                  backdrop-blur-xl
                "
              >
                {value}
              </div>
            ))}
          </div>

          {/* Bottom Message */}

          <div className="relative z-10 mt-10 flex items-center justify-center gap-2 text-muted-foreground">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-sm">
              Everything we do begins and ends with Christ.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};