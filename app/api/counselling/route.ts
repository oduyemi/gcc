import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Counselling from "@/models/counselling.model";

/**
 * GET COUNSELLING REQUESTS
 *
 * Examples:
 * /api/counselling
 * /api/counselling?status=pending
 * /api/counselling?status=treated
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

    const requests = await Counselling.find(filter)
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      count: requests.length,
      data: requests,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch counselling requests",
      },
      { status: 500 }
    );
  }
}

/**
 * CREATE COUNSELLING REQUEST
 */
export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json();

    const request = await Counselling.create({
      ...body,
      status: "pending",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Counselling request submitted successfully",
        data: request,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit counselling request",
      },
      { status: 500 }
    );
  }
}