"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

interface Props {
  image: string;
  caption: string;
  link: string;
}

export function InstagramCard({
  image,
  caption,
  link,
}: Props) {
  return (
    <motion.a
      whileHover={{
        y: -8,
      }}
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group block"
    >
      <div className="glass overflow-hidden rounded-4xl">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image}
            alt={caption}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition group-hover:opacity-100" />

          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white opacity-0 transition group-hover:opacity-100">
            <FaInstagram />
            View on Instagram
          </div>
        </div>

        <div className="p-5">
          <p className="font-medium">{caption}</p>
        </div>
      </div>
    </motion.a>
  );
}