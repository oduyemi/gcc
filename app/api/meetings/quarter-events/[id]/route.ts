import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Meeting from "@/models/meeting.model";

interface Context {
  params: Promise<{
    id: string;
  }>;
}

/**
 * GET SINGLE QUARTER EVENT
 */
export async function GET(
  req: NextRequest,
  { params }: Context
) {
  try {
    await dbConnect();

    const { id } = await params;

    const meeting = await Meeting.findOne({
      _id: id,
      type: "special",
    });

    if (!meeting) {
      return NextResponse.json(
        {
          success: false,
          message: "Quarter event not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      data: meeting,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch event",
      },
      {
        status: 500,
      }
    );
  }
}

/**
 * UPDATE QUARTER EVENT
 */
export async function PATCH(
  req: NextRequest,
  { params }: Context
) {
  try {
    await dbConnect();

    const { id } = await params;
    const body = await req.json();

    const meeting = await Meeting.findOneAndUpdate(
      {
        _id: id,
        type: "special",
      },
      {
        $set: {
          title: body.title,
          description: body.description,
          category: body.category,
          image: body.image,
          startDate: body.startDate,
          endDate: body.endDate,
          time: body.time,
          location: body.location,
          meetingLink: body.meetingLink,
          isOnline: body.isOnline,
          isActive: body.isActive,
          sortOrder: body.sortOrder,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!meeting) {
      return NextResponse.json(
        {
          success: false,
          message: "Quarter event not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Quarter event updated successfully",
      data: meeting,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update event",
      },
      {
        status: 500,
      }
    );
  }
}

/**
 * DELETE QUARTER EVENT
 */
export async function DELETE(
  req: NextRequest,
  { params }: Context
) {
  try {
    await dbConnect();

    const { id } = await params;

    const meeting = await Meeting.findOneAndDelete({
      _id: id,
      type: "special",
    });

    if (!meeting) {
      return NextResponse.json(
        {
          success: false,
          message: "Quarter event not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Quarter event deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete event",
      },
      {
        status: 500,
      }
    );
  }
}