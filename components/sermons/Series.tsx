"use client";
import { motion } from "framer-motion";


const series = [
  "Faith Foundations",
  "Kingdom Living",
  "Prayer & Power",
  "Grace Unveiled",
];

export function SermonSeries() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-4xl font-bold">
          Sermon Series
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {series.map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -5 }}
              className="glass rounded-3xl p-8 text-center"
            >
              <h3 className="font-semibold">
                {item}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}