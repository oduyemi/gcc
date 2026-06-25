import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import PrayerRequest from "@/models/prayerRequest.model";

/**
 * GET SINGLE REQUEST
 */
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;

    const request = await PrayerRequest.findById(id);

    if (!request) {
      return NextResponse.json(
        {
          success: false,
          message: "Prayer request not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: request,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch prayer request",
      },
      { status: 500 }
    );
  }
}

/**
 * UPDATE REQUEST
 * Typically used to mark as treated
 */
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;

    const body = await req.json();

    const request = await PrayerRequest.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!request) {
      return NextResponse.json(
        {
          success: false,
          message: "Prayer request not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: request,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update prayer request",
      },
      { status: 500 }
    );
  }
}

/**
 * DELETE REQUEST
 */
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;

    const request = await PrayerRequest.findByIdAndDelete(id);

    if (!request) {
      return NextResponse.json(
        {
          success: false,
          message: "Prayer request not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Prayer request deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete prayer request",
      },
      { status: 500 }
    );
  }
}