"use client";
import { useEffect, useState } from "react";
import { GalleryHero } from "@/components/gallery/Hero";
import { GalleryTabs } from "@/components/gallery/Tabs";
import { GalleryGrid } from "@/components/gallery/Grid";
import { GalleryLightbox } from "@/components/gallery/Lightbox";
import { MemoryVerseCTA } from "@/components/gallery/MemoryVerse";

import {
  GalleryCategory,
  GalleryImage,
} from "@/types/gallery";

export default function Gallery() {
  const [images, setImages] =
    useState<GalleryImage[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [
    activeCategory,
    setActiveCategory,
  ] =
    useState<GalleryCategory>("all");

  const [
    selectedImage,
    setSelectedImage,
  ] =
    useState<GalleryImage | null>(
      null
    );

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res =
          await fetch(
            "/api/gallery"
          );

        if (!res.ok) {
          throw new Error(
            "Failed to fetch gallery"
          );
        }

        const data: GalleryImage[] =
          await res.json();

        setImages(data);
      } catch (error) {
        console.error(
          "Gallery fetch error:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();
  }, []);

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter(
          (image) =>
            image.category ===
            activeCategory
        );

  const selectedIndex =
    selectedImage
      ? filteredImages.findIndex(
          (img) =>
            img.id ===
            selectedImage.id
        )
      : 0;

  if (loading) {
    return (
      <>
        <GalleryHero />

        <GalleryTabs
          activeCategory={
            activeCategory
          }
          onChange={
            setActiveCategory
          }
        />

        <section className="px-4 pb-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div
              className="
                columns-1
                gap-6
                md:columns-2
                xl:columns-3
              "
            >
              {Array.from({
                length: 9,
              }).map((_, i) => (
                <div
                  key={i}
                  className="
                    mb-6
                    h-80
                    animate-pulse
                    rounded-[2rem]
                    bg-muted
                  "
                />
              ))}
            </div>
          </div>
        </section>

        <MemoryVerseCTA />
      </>
    );
  }

  return (
    <>
      <GalleryHero />

      <GalleryTabs
        activeCategory={
          activeCategory
        }
        onChange={
          setActiveCategory
        }
      />

      <GalleryGrid
        images={images}
        activeCategory={
          activeCategory
        }
        onImageClick={(
          image
        ) =>
          setSelectedImage(
            image
          )
        }
      />

      <GalleryLightbox
        images={filteredImages}
        open={
          !!selectedImage
        }
        selectedIndex={
          selectedIndex
        }
        onClose={() =>
          setSelectedImage(
            null
          )
        }
      />

      <MemoryVerseCTA />
    </>
  );
}