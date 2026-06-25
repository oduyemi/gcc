import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import NewToChurch from "@/models/newToChurch.model";

/**
 * GET SINGLE ENTRY
 */
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;

    const entry = await NewToChurch.findById(id);

    if (!entry) {
      return NextResponse.json(
        {
          success: false,
          message: "Entry not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: entry,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch entry",
      },
      { status: 500 }
    );
  }
}

/**
 * UPDATE ENTRY
 */
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;

    const body = await req.json();

    const entry = await NewToChurch.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!entry) {
      return NextResponse.json(
        {
          success: false,
          message: "Entry not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: entry,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update entry",
      },
      { status: 500 }
    );
  }
}

/**
 * DELETE ENTRY
 */
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;

    const entry = await NewToChurch.findByIdAndDelete(id);

    if (!entry) {
      return NextResponse.json(
        {
          success: false,
          message: "Entry not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Entry deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete entry",
      },
      { status: 500 }
    );
  }
}