"use client";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import {
  GalleryImage,
} from "@/types/gallery";

type Props = {
  images: GalleryImage[];
  open: boolean;
  selectedIndex: number;
  onClose: () => void;
};

export function GalleryLightbox({
  images,
  open,
  selectedIndex,
  onClose,
}: Props) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      index={selectedIndex}
      plugins={[
        Zoom,
        Thumbnails,
      ]}
      slides={images.map(
        (image) => ({
          src: image.url,
          alt: image.name,
          title:
            image.name,
        })
      )}
    />
  );
}