"use client";
import { useEffect, useState } from "react";
import { GalleryHero } from "@/components/gallery/Hero";
import { GalleryTabs } from "@/components/gallery/Tabs";
import { GallerySubTabs } from "@/components/gallery/SubTabs";
import { GalleryGrid } from "@/components/gallery/Grid";
import { GalleryLightbox } from "@/components/gallery/Lightbox";
import { MemoryVerseCTA } from "@/components/gallery/MemoryVerse";


import {
  GalleryImage,
  GallerySection,
  GallerySubfolder,
} from "@/types/gallery";

export default function GalleryPage() {
  const [images, setImages] =
    useState<GalleryImage[]>(
      []
    );

  const [folders, setFolders] =
    useState<
      GallerySubfolder[]
    >([]);

  const [
    activeSection,
    setActiveSection,
  ] =
    useState<GallerySection>(
      "churchlife"
    );

  const [
    activePath,
    setActivePath,
  ] = useState("");

  const [loading, setLoading] =
    useState(true);

  const [
    selectedImage,
    setSelectedImage,
  ] =
    useState<GalleryImage | null>(
      null
    );

  useEffect(() => {
    async function loadFolders() {
      try {
        const res =
          await fetch(
            `/api/gallery/subfolders?section=${activeSection}`
          );

        if (!res.ok) {
          throw new Error(
            "Failed to load folders"
          );
        }

        const data: GallerySubfolder[] =
          await res.json();

        setFolders(data);

        if (data.length > 0) {
          setActivePath(
            data[0].path
          );
        } else {
          setActivePath("");
          setImages([]);
        }
      } catch (error) {
        console.error(
          error
        );

        setFolders([]);
        setImages([]);
      }
    }

    loadFolders();
  }, [activeSection]);

  useEffect(() => {
    if (!activePath) return;

    async function loadImages() {
      try {
        setLoading(true);

        const res =
          await fetch(
            `/api/gallery/images?path=${encodeURIComponent(
              activePath
            )}`
          );

        if (!res.ok) {
          throw new Error(
            "Failed to load images"
          );
        }

        const data: GalleryImage[] =
          await res.json();

        setImages(data);
      } catch (error) {
        console.error(
          error
        );

        setImages([]);
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, [activePath]);

  const selectedIndex =
    selectedImage
      ? images.findIndex(
          (img) =>
            img.id ===
            selectedImage.id
        )
      : 0;

  return (
    <>
      <GalleryHero />

      <GalleryTabs
        activeSection={
          activeSection
        }
        onChange={
          setActiveSection
        }
      />

      <GallerySubTabs
        folders={folders}
        activePath={
          activePath
        }
        onChange={
          setActivePath
        }
      />

      {loading ? (
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
      ) : (
        <GalleryGrid
          images={images}
          onImageClick={(
            image
          ) =>
            setSelectedImage(
              image
            )
          }
        />
      )}

      <GalleryLightbox
        images={images}
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