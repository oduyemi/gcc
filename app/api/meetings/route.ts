import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Meeting from "@/models/meeting.model";

/**
 * GET ALL MEETINGS
 */
export async function GET() {
  try {
    await dbConnect();

    const meetings = await Meeting.find()
      .sort({ sortOrder: 1 });

    return NextResponse.json({
      success: true,
      data: meetings,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch meetings",
      },
      { status: 500 }
    );
  }
}

/**
 * CREATE MEETING
 */
export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json();

    const meeting = await Meeting.create(body);

    return NextResponse.json(
      {
        success: true,
        data: meeting,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create meeting",
      },
      { status: 500 }
    );
  }
}