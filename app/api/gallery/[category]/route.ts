import { NextResponse } from "next/server";

import {
  getGallerySubfolders,
} from "@/lib/cloudinary";

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: Promise<{
      category: string;
    }>;
  }
) {
  const { category } =
    await params;

  const folders =
    await getGallerySubfolders(
      category as any
    );

  return NextResponse.json(
    folders
  );
}