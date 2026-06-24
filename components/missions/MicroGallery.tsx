"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const images = [
    "/images/togo.jpg",
    "/images/sierra-leone.jpg",
    "/images/fosu.jpg",
    "/images/ghana.jpg",
    "/images/hero1.jpg"
];

export default function MicroGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-[500px] md:h-[650px] gap-3 overflow-hidden">
          {images.map((image, index) => (
            <motion.div
              key={index}
              onHoverStart={() => setActiveIndex(index)}
              animate={{
                flex:
                  activeIndex === index
                    ? 6
                    : activeIndex === null
                    ? 2
                    : 1.5,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="relative cursor-pointer overflow-hidden rounded-3xl"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
        <Link
                href="/gallery?section=missions"
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
                View More

                <ArrowRight className="h-5 w-5" />
              </Link>
        </div>
      </div>
    </section>
  );
}