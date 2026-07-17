import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Counselling from "@/models/counselling.model";
import { sendEmailWithRetry } from "@/helper/emailLogic";

/**
 * GET COUNSELLING REQUESTS
 *
 * Examples:
 * /api/counselling
 * /api/counselling?status=pending
 * /api/counselling?status=treated
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
    const requests = await Counselling.find(filter)
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
        message: "Failed to fetch counselling requests",
      },
      { status: 500 }
    );
  }
}

/**
 * CREATE COUNSELLING REQUEST
 */
export async function POST(req: NextRequest) {
   try {
     await dbConnect();
     const body = await req.json();
     const request = await Counselling.create({
       ...body,
       status: "pending",
     });
     await sendEmailWithRetry(
       "info@globalcrossfirechurch.co.uk",
       `New Counselling Request: ${body.fullname}`,
       `
         <h2>New Counselling Request</h2>
 
         <p><strong>Full Name:</strong> ${body.fullname}</p>
         <p><strong>Email:</strong> ${body.email}</p>
         <p><strong>Phone:</strong> ${body.phone}</p>
 
         <hr />
 
         <p><strong>Support Request:</strong></p>
         <p>${body.support}</p>
       `
     );
     return NextResponse.json(
       {
         success: true,
         message: "Counselling request submitted successfully",
         data: request,
       },
       { status: 201 }
     );
   } catch (error) {
     console.error(error);
     return NextResponse.json(
       {
         success: false,
         message: "Failed to submit counselling request",
       },
       { status: 500 }
     );
   }
 }