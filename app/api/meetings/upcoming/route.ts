import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Meeting from "@/models/meeting.model";
import { getNextMeetingDate } from "@/utils/getNextMeetingDate";

export async function GET() {
  try {
    await dbConnect();

    const meetings = await Meeting.find();

    const today = new Date();

    const oneMonthFromNow = new Date();
    oneMonthFromNow.setMonth(
      oneMonthFromNow.getMonth() + 1
    );

    const upcomingMeetings = meetings
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
          date >= today &&
          date <= oneMonthFromNow
        );
      })
      .sort(
        (a, b) =>
          new Date(a.nextOccurrence).getTime() -
          new Date(b.nextOccurrence).getTime()
      )
      .slice(0, 4);

    return NextResponse.json({
      success: true,
      data: upcomingMeetings,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to fetch upcoming meetings",
      },
      {
        status: 500,
      }
    );
  }
}