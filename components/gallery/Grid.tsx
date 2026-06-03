"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import {
    GalleryCategory,
    GalleryImage,
  } from "@/types/gallery";

type Props = {
  images: GalleryImage[];
  activeCategory: GalleryCategory;
  onImageClick: (
    image: GalleryImage
  ) => void;
};

const categoryStyles = {
  "church-life":
    "bg-primary text-white",

  "local-missions":
    "bg-emerald-600 text-white",

  "international-missions":
    "bg-blue-600 text-white",

  "youth":
    "bg-violet-600 text-white",
};

const categoryLabels = {
  "church-life": "Church Life",

  "local-missions": "Local Missions",

  "international-missions":
    "International Missions",

  "youth": "Youth",
};

export const GalleryGrid = ({
  images,
  activeCategory,
  onImageClick,
}: Props) => {
  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter(
          (image) =>
            image.category === activeCategory
        );

  return (
    <section className="px-4 pb-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          layout
          className="
            columns-1
            gap-6
            md:columns-2
            xl:columns-3
          "
        >
          {filteredImages.map(
            (image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay:
                    index * 0.04,
                }}
                className="
                  mb-6
                  break-inside-avoid
                "
              >
                <button
                  onClick={() =>
                    onImageClick(image)
                  }
                  className="
                    group
                    glass
                    glass-hover
                    relative
                    block
                    w-full
                    overflow-hidden
                    rounded-[2rem]
                    p-2
                    text-left
                  "
                >
                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[1.5rem]
                    "
                  >
                    <Image
                      src={image.image}
                      alt={image.title}
                      width={800}
                      height={1200}
                      className="
                        h-auto
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/80
                        via-black/20
                        to-transparent
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        p-5
                        opacity-0
                        translate-y-4
                        transition-all
                        duration-300
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      <div
                        className={`
                          inline-flex
                          rounded-full
                          px-3
                          py-1
                          text-xs
                          font-bold
                          ${
                            categoryStyles[
                              image.category
                            ]
                          }
                        `}
                      >
                        {
                          categoryLabels[
                            image.category
                          ]
                        }
                      </div>

                      <h3
                        className="
                          mt-3
                          text-lg
                          font-black
                          text-white
                        "
                      >
                        {image.title}
                      </h3>

                      <div
                        className="
                          mt-3
                          inline-flex
                          items-center
                          gap-2
                          text-sm
                          font-semibold
                          text-white/90
                        "
                      >
                        <Eye className="h-4 w-4" />
                        View Photo
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};