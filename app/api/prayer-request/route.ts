import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import PrayerRequest from "@/models/prayer-request.model";

/**
 * GET PRAYER REQUESTS
 *
 * Examples:
 * /api/prayer-request
 * /api/prayer-request?status=pending
 * /api/prayer-request?status=treated
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

    const requests = await PrayerRequest.find(filter)
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
        message: "Failed to fetch prayer requests",
      },
      { status: 500 }
    );
  }
}

/**
 * CREATE PRAYER REQUEST
 */
export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json();

    const request = await PrayerRequest.create({
      ...body,
      status: "pending",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Prayer request submitted successfully",
        data: request,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit prayer request",
      },
      { status: 500 }
    );
  }
}