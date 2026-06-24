"use client";
import { useEffect, useState } from "react";
import { GalleryHero } from "@/components/gallery/Hero";
import { GalleryTabs } from "@/components/gallery/Tabs";
import { GallerySubTabs } from "@/components/gallery/SubTabs";
import { GalleryGrid } from "@/components/gallery/Grid";
import { GalleryLightbox } from "@/components/gallery/Lightbox";
import { MemoryVerseCTA } from "@/components/gallery/MemoryVerse";
import { GalleryImage, GallerySection, GallerySubfolder } from "@/types/gallery";
import { useSearchParams } from "next/navigation";


const IMAGES_PER_PAGE = 12;
const FOLDERS_PER_PAGE = 6;

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [folders, setFolders] = useState<GallerySubfolder[]>([]);
  // const [activeSection, setActiveSection] = useState<GallerySection>("churchlife");
  const [activePath, setActivePath] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [imagePage, setImagePage] = useState(0);
  const [folderPage, setFolderPage] =  useState(0);
  const searchParams = useSearchParams();
  const initialSection = (searchParams.get("section") as GallerySection) || "churchlife";
  const [activeSection, setActiveSection] = useState<GallerySection>(initialSection);

  useEffect(() => {
    setImagePage(0);
  }, [activePath]);

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

          setFolderPage(0);
          setImagePage(0);
          
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
          setImagePage(0);
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

  const visibleFolders =
  folders.slice(
    folderPage *
      FOLDERS_PER_PAGE,
    (folderPage + 1) *
      FOLDERS_PER_PAGE
  );

const totalFolderPages =
  Math.ceil(
    folders.length /
      FOLDERS_PER_PAGE
  );

const visibleImages =
  images.slice(
    imagePage *
      IMAGES_PER_PAGE,
    (imagePage + 1) *
      IMAGES_PER_PAGE
  );

const totalImagePages =
  Math.ceil(
    images.length /
      IMAGES_PER_PAGE
  );

  const selectedIndex =
  selectedImage
    ? visibleImages.findIndex(
        (img) =>
          img.id ===
          selectedImage.id
      )
    : 0;

    useEffect(() => {
      if (
        visibleFolders.length &&
        !visibleFolders.some(
          (folder) =>
            folder.path === activePath
        )
      ) {
        setActivePath(
          visibleFolders[0].path
        );
      }
    }, [
      folderPage,
      visibleFolders,
      activePath,
    ]);

    useEffect(() => {
      setSelectedImage(null);
    }, [imagePage]);

    useEffect(() => {
      setSelectedImage(null);
    }, [imagePage, activePath]);

    useEffect(() => {
      const section = searchParams.get("section");
    
      if (
        section &&
        [
          "churchlife",
          "youth",
          "communityPrograms",
          "missions",
        ].includes(section)
      ) {
        setActiveSection(
          section as GallerySection
        );
      }
    }, [searchParams]);
    
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

      <>
        <GallerySubTabs
          folders={visibleFolders}
          activePath={
            activePath
          }
          onChange={
            setActivePath
          }
        />

        {totalFolderPages >
          1 && (
          <section className="px-4 pb-8 md:px-8 lg:px-12">
            <div className="mx-auto flex max-w-7xl items-center justify-center gap-4">
              <button
                disabled={
                  folderPage ===
                  0
                }
                onClick={() =>
                  setFolderPage(
                    (
                      prev
                    ) =>
                      prev - 1
                  )
                }
                className="rounded-full bg-muted px-5 py-2 text-sm font-semibold disabled:opacity-40"
              >
                Previous
              </button>

              <span className="text-sm font-medium">
                {
                  folderPage +
                    1
                }{" "}
                of{" "}
                {
                  totalFolderPages
                }
              </span>

              <button
                disabled={
                  folderPage ===
                  totalFolderPages -
                    1
                }
                onClick={() =>
                  setFolderPage(
                    (
                      prev
                    ) =>
                      prev + 1
                  )
                }
                className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </section>
        )}
      </>
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
        <>
          <GalleryGrid
            images={visibleImages}
            onImageClick={(
              image
            ) =>
              setSelectedImage(
                image
              )
            }
          />
      
          {totalImagePages >
            1 && (
            <section className="px-4 pb-16 md:px-8 lg:px-12">
              <div className="mx-auto flex max-w-7xl items-center justify-center gap-4">
                <button
                  disabled={
                    imagePage ===
                    0
                  }
                  onClick={() =>
                    setImagePage(
                      (
                        prev
                      ) =>
                        prev - 1
                    )
                  }
                  className="rounded-full bg-muted px-5 py-2 text-sm font-semibold disabled:opacity-40"
                >
                  Previous
                </button>
      
                <span className="text-sm font-medium">
                  {
                    imagePage +
                      1
                  }{" "}
                  of{" "}
                  {
                    totalImagePages
                  }
                </span>
      
                <button
                  disabled={
                    imagePage ===
                    totalImagePages -
                      1
                  }
                  onClick={() =>
                    setImagePage(
                      (
                        prev
                      ) =>
                        prev + 1
                    )
                  }
                  className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white disabled:opacity-40"
                >
                  Next
                </button>
              </div>
              {images.length > 0 && (
                <div className="text-center text-sm text-muted-foreground">
                  Showing{" "}
                  {imagePage * IMAGES_PER_PAGE + 1}
                  -
                  {Math.min(
                    (imagePage + 1) * IMAGES_PER_PAGE,
                    images.length
                  )}{" "}
                  of {images.length} images
                </div>
              )}
            </section>
          )}
        </>
      )}

      <GalleryLightbox
        images={visibleImages}
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