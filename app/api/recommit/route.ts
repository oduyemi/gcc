import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Recommit from "@/models/recommit.model";
import { sendEmailWithRetry } from "@/helper/emailLogic";

/**
 * GET RECOMMITMENT REQUESTS
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

    const requests = await Recommit.find(filter)
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
        message: "Failed to fetch recommitment requests",
      },
      { status: 500 }
    );
  }
}

/**
 * CREATE RECOMMITMENT REQUEST
 */ 
 export async function POST(req: NextRequest) {
   try {
     await dbConnect();
 
     const body = await req.json();
 
     const request = await Recommit.create({
       ...body,
       status: "pending",
     });
 
     await sendEmailWithRetry(
       "info@globalcrossfirechurch.co.uk",
       `Recommitment Request - ${body.fullname}`,
       `
         <h2>New Recommitment Request</h2>
 
         <p><strong>Name:</strong> ${body.fullname}</p>
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
         message: "Recommitment request submitted successfully",
         data: request,
       },
       { status: 201 }
     );
   } catch (error) {
     console.error(error);
 
     return NextResponse.json(
       {
         success: false,
         message: "Failed to submit recommitment request",
       },
       { status: 500 }
     );
   }
 }