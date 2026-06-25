import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Meeting from "@/models/meeting.model";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;

    const meeting = await Meeting.findById(id);

    if (!meeting) {
      return NextResponse.json(
        {
          success: false,
          message: "Meeting not found",
        },
        { status: 404 }
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
        message: "Failed to fetch meeting",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
  ) {
    try {
      await dbConnect();
  
      const { id } = await params;
  
      const body = await req.json();
  
      const meeting = await Meeting.findByIdAndUpdate(
        id,
        body,
        {
          new: true,
          runValidators: true,
        }
      );
  
      if (!meeting) {
        return NextResponse.json(
          {
            success: false,
            message: "Meeting not found",
          },
          { status: 404 }
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
          message: "Failed to update meeting",
        },
        { status: 500 }
      );
    }
  }

  export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
  ) {
    try {
      await dbConnect();
  
      const { id } = await params;
  
      const meeting = await Meeting.findByIdAndDelete(id);
  
      if (!meeting) {
        return NextResponse.json(
          {
            success: false,
            message: "Meeting not found",
          },
          { status: 404 }
        );
      }
  
      return NextResponse.json({
        success: true,
        message: "Meeting deleted",
      });
    } catch (error) {
      console.error(error);
  
      return NextResponse.json(
        {
          success: false,
          message: "Failed to delete meeting",
        },
        { status: 500 }
      );
    }
  }