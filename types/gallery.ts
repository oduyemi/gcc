export type GalleryCategory =
  | "all"
  | "church-life"
  | "local-missions"
  | "international-missions"
  | "youth-kids";

export type GalleryImage = {
  id: string;
  title: string;
  image: string;
  publicId: string;

  category: Exclude<
    GalleryCategory,
    "all"
  >;
};