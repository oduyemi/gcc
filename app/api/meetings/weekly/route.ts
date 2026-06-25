import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Meeting from "@/models/meeting.model";
import { getNextMeetingDate } from "@/utils/getNextMeetingDate";

export async function GET() {
  try {
    await dbConnect();

    const meetings = await Meeting.find().sort({
      sortOrder: 1,
    });

    const today = new Date();

    const startOfWeek = new Date(today);
    startOfWeek.setDate(
      today.getDate() - today.getDay()
    );
    startOfWeek.setHours(0, 0, 0, 0);
    
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(
      startOfWeek.getDate() + 6
    );
    endOfWeek.setHours(
      23,
      59,
      59,
      999
    );

    const weeklyMeetings = meetings
      .map((meeting) => {
        const nextOccurrence = getNextMeetingDate({
          type: meeting.type,
          frequency: meeting.frequency,
          dayOfWeek: meeting.dayOfWeek,
          weekOfMonth: meeting.weekOfMonth,
          startDate: meeting.startDate,
        });

        return {
          ...meeting.toObject(),
          nextOccurrence,
        };
      })
      .filter((meeting) => {
        if (!meeting.nextOccurrence) return false;

        const date = new Date(
          meeting.nextOccurrence
        );

        return (
          date >= startOfWeek &&
          date <= endOfWeek
        );
      });

    return NextResponse.json({
      success: true,
      data: weeklyMeetings,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to fetch weekly meetings",
      },
      {
        status: 500,
      }
    );
  }
}