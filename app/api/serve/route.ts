import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Serve from "@/models/serve.model";
import { sendEmailWithRetry } from "@/helper/emailLogic";

/**
 * GET SERVE REQUESTS
 */
export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);

    const status = searchParams.get("status");
    const interest = searchParams.get("interest");

    const filter: Record<string, string> = {};

    if (status) {
      filter.status = status;
    }

    if (interest) {
      filter.interest = interest;
    }

    const requests = await Serve.find(filter)
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
        message: "Failed to fetch serve requests",
      },
      { status: 500 }
    );
  }
}

/**
 * CREATE SERVE REQUEST
 */
export async function POST(req: NextRequest) {
   try {
     await dbConnect();
 
     const body = await req.json();
 
     const request = await Serve.create({
       ...body,
       status: "pending",
     });
 
     await sendEmailWithRetry(
       "info@globalcrossfirechurch.co.uk",
       `New Serve Request: ${body.fullname}`,
       `
         <h2>New Serve Request</h2>
 
         <p><strong>Name:</strong> ${body.fullname}</p>
         <p><strong>Email:</strong> ${body.email}</p>
         <p><strong>Phone:</strong> ${body.phone}</p>
 
         <p><strong>Area of Interest:</strong> ${body.interest}</p>
 
         <hr />
 
         <p><strong>About:</strong></p>
         <p>${body.about}</p>
 
         <hr />
 
         <p><strong>Reason For Serving:</strong></p>
         <p>${body.reason}</p>
       `
     );
 
     return NextResponse.json(
       {
         success: true,
         message: "Serve request submitted successfully",
         data: request,
       },
       { status: 201 }
     );
   } catch (error) {
     console.error(error);
 
     return NextResponse.json(
       {
         success: false,
         message: "Failed to submit serve request",
       },
       { status: 500 }
     );
   }
 }