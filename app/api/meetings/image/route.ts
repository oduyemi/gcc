import { NextRequest, NextResponse } from "next/server";
import { uploadMeetingImage } from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File | null;
    const publicId = formData.get("publicId") as string | null;

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          message: "No image uploaded",
        },
        {
          status: 400,
        }
      );
    }

    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

    const result = await uploadMeetingImage(
      buffer,
      publicId || undefined
    );

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Image upload failed",
      },
      {
        status: 500,
      }
    );
  }
}