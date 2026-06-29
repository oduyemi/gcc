import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import QuarterEvent from "@/models/quarterEvent.model";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);

    const year = Number(
      searchParams.get("year")
    );

    const quarter = Number(
      searchParams.get("quarter")
    );

    let filter = {};

    if (year && quarter) {
      const startMonth =
        (quarter - 1) * 3;

      const start = new Date(
        year,
        startMonth,
        1
      );

      const end = new Date(
        year,
        startMonth + 3,
        0,
        23,
        59,
        59
      );

      filter = {
        date: {
          $gte: start,
          $lte: end,
        },
      };
    }

    const events =
      await QuarterEvent.find(filter)
        .populate("meeting")
        .sort({
          date: 1,
        });

    return NextResponse.json({
      success: true,
      data: events,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}


export async function POST(req: NextRequest) {
    try {
      await dbConnect();
  
      const body = await req.json();
  
      const event =
        await QuarterEvent.create(body);
  
      return NextResponse.json(
        {
          success: true,
          data: event,
        },
        {
          status: 201,
        }
      );
    } catch {
      return NextResponse.json(
        {
          success: false,
        },
        {
          status: 500,
        }
      );
    }
  }