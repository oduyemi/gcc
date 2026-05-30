"use client";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";



export const DonationHero = () => {
  return (
    <section className="relative overflow-hidden px-4 py-28 md:px-8 lg:px-12">
      {/* Background Orbs */}

      <div className="absolute inset-0">
        <div className="absolute left-[-5%] top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute right-[-5%] top-20 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-primary/10
              bg-primary/5
              px-4 py-2
              text-[11px]
              font-black
              tracking-[0.22em]
              text-primary
              uppercase
            "
          >
            <HeartHandshake className="h-4 w-4" />
            Support The Ministry
          </div>

          <h1
            className="
              mt-6
              text-5xl
              font-black
              tracking-[-0.06em]
              md:text-7xl
            "
          >
            Your Generosity
            <span className="block text-primary">
              Makes A Difference
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-muted-foreground
            "
          >
            Your giving helps support the ministry of Global
            Crossfire Church, outreach initiatives, community
            programmes, discipleship efforts, and educational
            projects that impact lives both locally and beyond.
          </p>
        </motion.div>
      </div>
    </section>
  );
};