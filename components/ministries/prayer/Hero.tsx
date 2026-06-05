"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  ArrowRight,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const PrayerCaringHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[35rem] w-[35rem] rounded-full bg-primary/[0.05] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[#AF3800]/[0.04] blur-3xl" />

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
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Tag */}

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
              <HeartHandshake className="h-3.5 w-3.5" />
              Prayer & Caring Ministry
            </div>

            {/* Heading */}

            <h1
              className="
                mt-7
                text-5xl
                font-black
                leading-[0.95]
                tracking-[-0.06em]
                text-foreground
                sm:text-6xl
                lg:text-7xl
              "
            >
              You're Not Meant
              <span className="block text-primary">
                To Walk Alone
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-2xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              Whether you're celebrating a breakthrough, carrying a burden,
              facing a difficult season or simply in need of prayer, our
              Prayer & Caring Ministry is here to stand with you in faith,
              encouragement and Christ-centred support.
            </p>

            {/* CTA */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="
                  h-14
                  rounded-2xl
                  px-8
                  text-base
                  font-bold
                "
              >
                <Link href="/next-step/ask-for-prayer">
                  Request Prayer

                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="
                  h-14
                  rounded-2xl
                  px-8
                  text-base
                  font-bold
                "
              >
                <Link href="/contact">
                  Contact Us

                  <Phone className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Trust Message */}

            <div
              className="
                mt-10
                flex items-start gap-4
                rounded-[1.75rem]
                border border-primary/10
                bg-white
                p-5
                shadow-sm
                max-w-xl
              "
            >
              <div
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-2xl
                  bg-primary/10
                "
              >
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>

              <div>
                <h3 className="font-bold">
                  Confidential & Compassionate
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Every prayer request and pastoral conversation is
                  handled with care, respect and confidentiality.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}

            <div className="relative h-[650px] overflow-hidden rounded-[3rem]">
              <Image
                src="/images/prayerhero.jpg"
                alt="Prayer Ministry"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
            </div>

            {/* Floating Card 1 */}

            <div
              className="
                absolute
                left-6
                top-6
                rounded-[1.75rem]
                border border-white/20
                bg-white/90
                p-5
                shadow-xl
                backdrop-blur-xl
              "
            >
              <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">
                Prayer Support
              </p>

              <h4 className="mt-2 text-xl font-black">
                Standing Together
              </h4>
            </div>

            {/* Floating Card 2 */}

            <div
              className="
                absolute
                bottom-6
                right-6
                rounded-[1.75rem]
                border border-white/20
                bg-white/90
                p-5
                shadow-xl
                backdrop-blur-xl
              "
            >
              <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">
                Caring Ministry
              </p>

              <h4 className="mt-2 text-xl font-black">
                Hope • Prayer • Care
              </h4>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};