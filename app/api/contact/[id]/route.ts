import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Contact from "@/models/contact.model";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;

    const contact = await Contact.findById(id);

    if (!contact) {
      return NextResponse.json(
        {
          success: false,
          message: "Contact entry not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch contact entry",
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
  
      const contact = await Contact.findByIdAndUpdate(
        id,
        body,
        {
          new: true,
          runValidators: true,
        }
      );
  
      if (!contact) {
        return NextResponse.json(
          {
            success: false,
            message: "Contact entry not found",
          },
          { status: 404 }
        );
      }
  
      return NextResponse.json({
        success: true,
        data: contact,
      });
    } catch (error) {
      console.error(error);
  
      return NextResponse.json(
        {
          success: false,
          message: "Failed to update contact entry",
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
  
      const contact = await Contact.findByIdAndDelete(id);
  
      if (!contact) {
        return NextResponse.json(
          {
            success: false,
            message: "Contact entry not found",
          },
          { status: 404 }
        );
      }
  
      return NextResponse.json({
        success: true,
        message: "Contact entry deleted",
      });
    } catch (error) {
      console.error(error);
  
      return NextResponse.json(
        {
          success: false,
          message: "Failed to delete contact entry",
        },
        { status: 500 }
      );
    }
  }