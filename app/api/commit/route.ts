import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Commit from "@/models/commit.model";
import { sendEmailWithRetry } from "@/helper/emailLogic";

/**
 * GET COMMITMENT ENTRIES
 *
 * Examples:
 * /api/commit
 * /api/commit?status=pending
 * /api/commit?status=treated
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
    const commitments = await Commit.find(filter)
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      count: commitments.length,
      data: commitments,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch commitment entries",
      },
      { status: 500 }
    );
  }
}

/**
 * CREATE COMMITMENT ENTRY
 */
export async function POST(req: NextRequest) {
   try {
     await dbConnect();
     const body = await req.json();
     const commitment = await Commit.create({
       ...body,
       status: "pending",
     });
 
     await sendEmailWithRetry(
       "info@globalcrossfirechurch.co.uk",
       `New Commitment To Christ: ${body.fullname}`,
       `
         <h2>New Commitment To Christ</h2>
 
         <p><strong>Full Name:</strong> ${body.fullname}</p>
         <p><strong>Email:</strong> ${body.email}</p>
         <p><strong>Phone:</strong> ${body.phone}</p>
 
         <hr />
 
         <p><strong>Decision / Notes:</strong></p>
         <p>${body.reason}</p>
       `
     );
 
     return NextResponse.json(
       {
         success: true,
         message: "Commitment submitted successfully",
         data: commitment,
       },
       { status: 201 }
     );
   } catch (error) {
     console.error(error);
 
     return NextResponse.json(
       {
         success: false,
         message: "Failed to submit commitment",
       },
       { status: 500 }
     );
   }
}