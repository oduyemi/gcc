import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Serve from "@/models/serve.model";

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

    const request = await Serve.findById(id);

    if (!request) {
      return NextResponse.json(
        {
          success: false,
          message: "Serve request not found",
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
        message: "Failed to fetch serve request",
      },
      { status: 500 }
    );
  }
}

/**
 * UPDATE REQUEST
 */
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;

    const body = await req.json();

    const request = await Serve.findByIdAndUpdate(
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
          message: "Serve request not found",
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
        message: "Failed to update serve request",
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

    const request = await Serve.findByIdAndDelete(id);

    if (!request) {
      return NextResponse.json(
        {
          success: false,
          message: "Serve request not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Serve request deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete serve request",
      },
      { status: 500 }
    );
  }
}