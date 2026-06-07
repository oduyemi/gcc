export const GALLERY_SECTIONS = {
  churchlife: {
    label: "Church Life",
    subfolders: [
      "celebration",
      "programs",
      "hangouts",
      "sports",
    ],
  },

  youth: {
    label: "Youth",
    subfolders: [
      "celebration",
      "programs",
      "hangouts",
      "sports",
    ],
  },

  communityPrograms: {
    label: "Community Programs",
    subfolders: [
      "education",
      "welfare",
      "medical",
      "outreach",
    ],
  },

  missions: {
    label: "Missions",
    subfolders: [
      "ghana",
      "benin",
      "togo",
    ],
  },
} as const;

export type GallerySection =
  keyof typeof GALLERY_SECTIONS;

export type GalleryImage = {
  id: string;
  name: string;
  url: string;
  format: string;
  createdAt: string;
};

export type GallerySubfolder = {
  name: string;
  path: string;
  count: number;
};