"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Play,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { FaYoutube } from "react-icons/fa"
import { Button } from "@/components/ui/button";
import { useYouTubeVideos } from "@/hook/UseYouTubeVideo";




export const LatestSermon = () => {
  const videos = useYouTubeVideos();
  const video = videos?.[0];
  if (!video) return null;

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[#AF3800]/10 blur-3xl" />

        <div
          className="
          absolute inset-0
          bg-[linear-gradient(rgba(30,41,59,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.025)_1px,transparent_1px)]
          [background-size:120px_120px]
        "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className="
            mb-6 inline-flex items-center gap-3
            rounded-full
            border border-primary/10
            bg-white
            px-5 py-2.5
            shadow-lg
          "
          >
            <Sparkles className="h-4 w-4 text-primary" />

            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">
              Latest Message
            </span>
          </div>

          <h2
            className="
            text-4xl
            font-black
            tracking-[-0.06em]
            text-foreground
            sm:text-5xl
            lg:text-6xl
          "
          >
            Be Strengthened By The Word
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Watch the latest sermon from Global Crossfire Church UK and
            encounter life-changing truth, encouragement, and spiritual
            growth.
          </p>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Link
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            className="group block"
          >
            <div
              className="
              overflow-hidden
              rounded-[2.5rem]
              border border-primary/10
              bg-white
              shadow-[0_30px_100px_rgba(34,0,124,0.08)]
            "
            >
              <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden rounded-[2rem]">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <div
                    className="
                    inline-flex w-fit items-center gap-2
                    rounded-full
                    bg-red-50
                    px-4 py-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-red-600
                  "
                  >
                    <FaYoutube className="h-4 w-4" />
                    Latest Upload
                  </div>

                  <h3
                    className="
                    mt-6
                    text-3xl
                    font-black
                    leading-tight
                    tracking-[-0.05em]
                    text-foreground
                  "
                  >
                    {video.title}
                  </h3>

                  <p className="mt-5 leading-8 text-muted-foreground">
                    Join thousands of believers around the world as we
                    grow deeper in God's Word and experience His power
                    through biblical teaching.
                  </p>

                  <Button
                    className="
                    mt-8
                    h-14
                    w-fit
                    rounded-2xl
                    bg-primary
                    px-8
                    text-white
                    hover:bg-primary/90
                  "
                  >
                    Watch Sermon

                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};