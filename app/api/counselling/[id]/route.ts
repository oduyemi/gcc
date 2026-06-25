import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Counselling from "@/models/counselling.model";

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

    const request = await Counselling.findById(id);

    if (!request) {
      return NextResponse.json(
        {
          success: false,
          message: "Counselling request not found",
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
        message: "Failed to fetch counselling request",
      },
      { status: 500 }
    );
  }
}

/**
 * UPDATE REQUEST
 * Usually used to mark as treated
 */
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;

    const body = await req.json();

    const request = await Counselling.findByIdAndUpdate(
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
          message: "Counselling request not found",
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
        message: "Failed to update counselling request",
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

    const request = await Counselling.findByIdAndDelete(id);

    if (!request) {
      return NextResponse.json(
        {
          success: false,
          message: "Counselling request not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Counselling request deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete counselling request",
      },
      { status: 500 }
    );
  }
}