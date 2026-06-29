import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Blog from "@/models/blog.model";

export async function GET() {
  try {
    await dbConnect();

    const count = await Blog.countDocuments();

    return NextResponse.json({
      success: true,
      count,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blog count",
      },
      { status: 500 }
    );
  }
}