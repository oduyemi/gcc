import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Baptism from "@/models/baptism.model";

/**
 * GET BAPTISM ENTRIES
 *
 * Examples:
 * /api/baptism
 * /api/baptism?status=pending
 * /api/baptism?status=treated
 */
export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);

    const status = searchParams.get("status");

    const filter: Record<string, string> = {};

    if (status) {
      filter.status = status;
    }

    const baptisms = await Baptism.find(filter)
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      count: baptisms.length,
      data: baptisms,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch baptism entries",
      },
      { status: 500 }
    );
  }
}

/**
 * CREATE BAPTISM REQUEST
 */
export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json();

    const baptism = await Baptism.create({
      ...body,
      status: "pending",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Baptism request submitted successfully",
        data: baptism,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit baptism request",
      },
      { status: 500 }
    );
  }
}