"use client";
import { motion } from "framer-motion";


export function BlogHero() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-primary">
            Resources
          </p>

          <h1 className="mx-auto max-w-4xl text-5xl font-black lg:text-7xl">
            Faith Insights &
            <span className="text-primary">
              {" "}Kingdom Resources
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Encouraging articles, devotionals, teachings and
            practical biblical insights to strengthen your walk with God.
          </p>
        </motion.div>
      </div>
    </section>
  );
}