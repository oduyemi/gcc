import { NextResponse } from "next/server";
import { getFolderContents } from "@/lib/cloudinary";

export async function GET(
  request: Request
) {
  try {
    const { searchParams } =
      new URL(request.url);

    const path =
      searchParams.get("path");

    if (!path) {
      return NextResponse.json(
        {
          error:
            "Path required",
        },
        {
          status: 400,
        }
      );
    }

    const images =
      await getFolderContents(
        path
      );

    return NextResponse.json(
      images
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Failed to fetch images",
      },
      {
        status: 500,
      }
    );
  }
}