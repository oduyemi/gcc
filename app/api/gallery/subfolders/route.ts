import { NextResponse } from "next/server";
import { getGallerySubfolders } from "@/lib/cloudinary";
import {
  GallerySection,
} from "@/types/gallery";

export async function GET(
  request: Request
) {
  try {
    const { searchParams } =
      new URL(request.url);

    const section =
      searchParams.get(
        "section"
      ) as GallerySection;

    if (!section) {
      return NextResponse.json(
        {
          error:
            "Section required",
        },
        {
          status: 400,
        }
      );
    }

    const folders =
      await getGallerySubfolders(
        section
      );

    return NextResponse.json(
      folders
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Failed to fetch folders",
      },
      {
        status: 500,
      }
    );
  }
}