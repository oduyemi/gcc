import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import NewToChurch from "@/models/newToChurch.model";

/**
 * GET NEW TO CHURCH ENTRIES
 *
 * Examples:
 * /api/new-to-church
 * /api/new-to-church?status=pending
 * /api/new-to-church?interest=youngadults
 * /api/new-to-church?status=pending&interest=youngadults
 */
export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);

    const status = searchParams.get("status");
    const interest = searchParams.get("interest");

    const filter: Record<string, string> = {};

    if (status) {
      filter.status = status;
    }

    if (interest) {
      filter.interest = interest;
    }

    const entries = await NewToChurch.find(filter)
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      count: entries.length,
      data: entries,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch entries",
      },
      { status: 500 }
    );
  }
}

/**
 * CREATE NEW TO CHURCH ENTRY
 */
export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json();

    const entry = await NewToChurch.create({
      ...body,
      status: "pending",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Information submitted successfully",
        data: entry,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit information",
      },
      { status: 500 }
    );
  }
}