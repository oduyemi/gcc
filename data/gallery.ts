export type GalleryCategory =
  | "church-life"
  | "local-missions"
  | "international-missions"
  | "youth-kids";

export type GalleryImage = {
  id: number;
  title: string;
  category: GalleryCategory;
  image: string;
};

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Sunday Worship Service",
    category: "church-life",
    image: "/images/gallery/church-1.jpg",
  },
  {
    id: 2,
    title: "Community Food Outreach",
    category: "local-missions",
    image: "/images/gallery/local-1.jpg",
  },
  {
    id: 3,
    title: "Mission Trip to Ghana",
    category: "international-missions",
    image: "/images/gallery/international-1.jpg",
  },
  {
    id: 4,
    title: "Children's Ministry",
    category: "youth-kids",
    image: "/images/gallery/youth-1.jpg",
  },
];