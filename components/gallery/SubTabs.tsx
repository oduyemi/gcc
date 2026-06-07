"use client";

import { motion } from "framer-motion";
import {
  GallerySubfolder,
} from "@/types/gallery";

type Props = {
  folders: GallerySubfolder[];

  activePath: string;

  onChange: (
    path: string
  ) => void;
};

const formatLabel = (
  name: string
) =>
  name
    .replace(/-/g, " ")
    .replace(
      /\b\w/g,
      (char) =>
        char.toUpperCase()
    );

export function GallerySubTabs({
  folders,
  activePath,
  onChange,
}: Props) {
  if (!folders.length)
    return null;

  return (
    <section className="px-4 pb-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-3">
          {folders.map(
            (folder) => {
              const active =
                activePath ===
                folder.path;

              return (
                <button
                  key={
                    folder.path
                  }
                  onClick={() =>
                    onChange(
                      folder.path
                    )
                  }
                  className="relative"
                >
                  {active && (
                    <motion.div
                      layoutId="gallery-subtab"
                      className="absolute inset-0 rounded-full bg-primary"
                    />
                  )}

                  <span
                    className={`relative z-10 block rounded-full px-5 py-2 text-sm font-semibold ${
                      active
                        ? "text-white"
                        : "bg-muted"
                    }`}
                  >
                    {formatLabel(
                      folder.name
                    )}
                  </span>
                </button>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}