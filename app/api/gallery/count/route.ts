import { NextResponse } from "next/server";
import { getGalleryImageCount } from "@/lib/cloudinary";

export async function GET() {
  try {
    const count = await getGalleryImageCount();

    return NextResponse.json({
      success: true,
      count,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch gallery count",
      },
      { status: 500 }
    );
  }
}