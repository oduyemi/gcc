import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import PrayerRequest from "@/models/prayerRequest.model";
import { sendEmailWithRetry } from "@/helper/emailLogic";

/**
 * GET PRAYER REQUESTS
 *
 * Examples:
 * /api/prayer-request
 * /api/prayer-request?status=pending
 * /api/prayer-request?status=treated
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

    const requests = await PrayerRequest.find(filter)
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
        message: "Failed to fetch prayer requests",
      },
      { status: 500 }
    );
  }
}

/**
 * CREATE PRAYER REQUEST
 */ 
 export async function POST(req: NextRequest) {
   try {
     await dbConnect();
     const body = await req.json();
     const request = await PrayerRequest.create({
       ...body,
       status: "pending",
     });
 
     await sendEmailWithRetry(
       "info@globalcrossfirechurch.co.uk",
       `New Prayer Request From ${body.fullname}`,
       `
         <h2>New Prayer Request</h2>
 
         <p><strong>Name:</strong> ${body.fullname}</p>
         <p><strong>Email:</strong> ${body.email}</p>
         <p><strong>Phone:</strong> ${body.phone}</p>
 
         <hr />
 
         <p><strong>Prayer Request:</strong></p>
         <p>${body.request}</p>
       `
     );
 
     return NextResponse.json(
       {
         success: true,
         message: "Prayer request submitted successfully",
         data: request,
       },
       { status: 201 }
     );
   } catch (error) {
     console.error(error);
 
     return NextResponse.json(
       {
         success: false,
         message: "Failed to submit prayer request",
       },
       { status: 500 }
     );
   }
 }