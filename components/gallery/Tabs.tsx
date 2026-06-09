"use client";
import { motion } from "framer-motion";
import {
  Church,
  HandHeart,
  Globe2,
  Sparkles,
} from "lucide-react";

import {
  GallerySection,
} from "@/types/gallery";

const sections = [
  {
    id: "churchlife",
    label: "Church Life",
    icon: Church,
  },
  {
    id: "youth",
    label: "Youth",
    icon: Sparkles,
  },
  {
    id: "communityPrograms",
    label: "Community Programs",
    icon: HandHeart,
  },
  {
    id: "missions",
    label: "Missions",
    icon: Globe2,
  },
] as const;

type Props = {
  activeSection: GallerySection;
  onChange: (
    section: GallerySection
  ) => void;
};

export function GalleryTabs({
  activeSection,
  onChange,
}: Props) {
  return (
    <section className="px-4 pb-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="glass rounded-[2rem] p-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            {sections.map((section) => {
              const Icon =
                section.icon;

              const active =
                activeSection ===
                section.id;

              return (
                <button
                  key={section.id}
                  onClick={() =>
                    onChange(
                      section.id
                    )
                  }
                  className="relative flex shrink-0 items-center gap-2 rounded-[1.25rem] px-5 py-3 text-sm font-bold"
                >
                  {active && (
                    <motion.div
                      layoutId="gallery-tab"
                      className="absolute inset-0 rounded-[1.25rem] bg-primary"
                    />
                  )}

                  <span
                    className={`relative z-10 flex items-center gap-2 ${
                      active
                        ? "text-white"
                        : "text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {section.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}