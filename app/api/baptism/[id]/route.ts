import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Baptism from "@/models/baptism.model";

/**
 * GET SINGLE BAPTISM ENTRY
 */
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;

    const baptism = await Baptism.findById(id);

    if (!baptism) {
      return NextResponse.json(
        {
          success: false,
          message: "Baptism entry not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: baptism,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch baptism entry",
      },
      { status: 500 }
    );
  }
}

/**
 * UPDATE BAPTISM ENTRY
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

    const baptism = await Baptism.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!baptism) {
      return NextResponse.json(
        {
          success: false,
          message: "Baptism entry not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: baptism,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update baptism entry",
      },
      { status: 500 }
    );
  }
}

/**
 * DELETE BAPTISM ENTRY
 */
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;

    const baptism = await Baptism.findByIdAndDelete(id);

    if (!baptism) {
      return NextResponse.json(
        {
          success: false,
          message: "Baptism entry not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Baptism entry deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete baptism entry",
      },
      { status: 500 }
    );
  }
}