import { NextResponse } from "next/server";
import { getGalleryImages } from "@/lib/cloudinary";

export async function GET() {
  try {
    const images =
      await getGalleryImages();

    return NextResponse.json(
      images
    );
  } catch {
    return NextResponse.json(
      {
        error:
          "Failed to fetch gallery images",
      },
      {
        status: 500,
      }
    );
  }
}