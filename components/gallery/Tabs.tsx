"use client";
import { motion } from "framer-motion";
import {
  Images,
  Church,
  HandHeart,
  Globe2,
  Sparkles,
} from "lucide-react";
import { GalleryCategory } from "@/types/gallery";


const categories = [
  {
    id: "all",
    label: "All",
    icon: Images,
  },
  {
    id: "church-life",
    label: "Church Life",
    icon: Church,
  },
  {
    id: "local-missions",
    label: "Local Missions",
    icon: HandHeart,
  },
  {
    id: "international-missions",
    label: "International Missions",
    icon: Globe2,
  },
  {
    id: "youth",
    label: "Youth",
    icon: Sparkles,
  },
] as const;

type Props = {
  activeCategory: GalleryCategory;
  onChange: (category: GalleryCategory) => void;
};

export const GalleryTabs = ({
  activeCategory,
  onChange,
}: Props) => {
  return (
    <section className="relative px-4 pb-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="glass rounded-[2rem] p-3">
          <div className="flex overflow-x-auto gap-2 scrollbar-none">
            {categories.map((category) => {
              const Icon = category.icon;

              const active =
                activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() =>
                    onChange(category.id)
                  }
                  className="
                    relative
                    flex
                    shrink-0
                    items-center
                    gap-2
                    rounded-[1.25rem]
                    px-5
                    py-3
                    text-sm
                    font-bold
                    transition-all
                    duration-300
                  "
                >
                  {active && (
                    <motion.div
                      layoutId="gallery-tab"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                      className="
                        absolute
                        inset-0
                        rounded-[1.25rem]
                        bg-primary
                      "
                    />
                  )}

                  <span
                    className={`
                      relative z-10
                      flex items-center gap-2
                      ${
                        active
                          ? "text-white"
                          : "text-muted-foreground"
                      }
                    `}
                  >
                    <Icon className="h-4 w-4" />
                    {category.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.p
          key={activeCategory}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            mt-6
            text-center
            text-muted-foreground
          "
        >
          {activeCategory === "all" &&
            "Explore moments from every area of ministry and church life."}

          {activeCategory === "church-life" &&
            "Worship services, conferences, fellowships and special church events."}

          {activeCategory === "local-missions" &&
            "Serving our local communities through outreach and practical support."}

          {activeCategory ===
            "international-missions" &&
            "Sharing the Gospel and serving communities across nations."}

          {activeCategory === "youth" &&
            "Building faith, friendships and fun experiences for young people."}
        </motion.p>
      </div>
    </section>
  );
};