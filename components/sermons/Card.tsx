"use client";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

interface SermonCardProps {
  title: string;
  thumbnail: string;
  videoId: string;
}

export function SermonCard({
  title,
  thumbnail,
  videoId,
}: SermonCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="glass glass-hover overflow-hidden rounded-3xl"
    >
      <Link
        href={`/sermons/${videoId}`}
        className="block"
      >
        <div className="relative">
          <img
            src={thumbnail}
            alt={title}
            className="aspect-video w-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="rounded-full bg-white/80 p-4 backdrop-blur-md">
              <PlayCircle
                className="text-primary"
                size={28}
              />
            </div>
          </div>
        </div>

        <div className="p-5">
          <h3 className="line-clamp-2 text-lg font-semibold">
            {title}
          </h3>

          <p className="mt-3 text-sm text-muted-foreground">
            Watch sermon
          </p>
        </div>
      </Link>
    </motion.article>
  );
}