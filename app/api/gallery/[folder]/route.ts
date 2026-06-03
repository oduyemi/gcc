import { NextResponse } from "next/server";

import {
  getFolderContents,
} from "@/lib/cloudinary";

export async function GET(
  request: Request
) {
  const { searchParams } =
    new URL(request.url);

  const path =
    searchParams.get("path");

  if (!path) {
    return NextResponse.json(
      {
        error:
          "Folder path required",
      },
      { status: 400 }
    );
  }

  const contents =
    await getFolderContents(path);

  return NextResponse.json(
    contents.files
  );
}