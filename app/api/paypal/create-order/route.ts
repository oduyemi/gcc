import { NextResponse } from "next/server";
import crypto from "crypto";

import {
  getPayPalAccessToken,
  getPayPalApiUrl,
} from "@/lib/paypal/client";

const MIN_DONATION = 1;
const MAX_DONATION = 100000;

function normalizeAmount(
  value: unknown
): string | null {
  const amount = Number(value);

  if (!Number.isFinite(amount)) {
    return null;
  }

  if (
    amount < MIN_DONATION ||
    amount > MAX_DONATION
  ) {
    return null;
  }

  /*
   * Only permit two decimal places.
   */
  if (
    Math.round(amount * 100) !==
    amount * 100
  ) {
    return null;
  }

  return amount.toFixed(2);
}

export async function POST(
  request: Request
) {
  try {
    /*
     * Parse request body
     */
    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          error:
            "Invalid request body.",
        },
        { status: 400 }
      );
    }

    /*
     * Extract amount
     */
    const amount = normalizeAmount(
      (body as { amount?: unknown })
        ?.amount
    );

    if (!amount) {
      return NextResponse.json(
        {
          error:
            "Please provide a valid donation amount between £1.00 and £100,000.00.",
        },
        { status: 400 }
      );
    }

    /*
     * Get PayPal access token
     */
    const accessToken =
      await getPayPalAccessToken();

    /*
     * Internal donation reference.
     *
     * This can later be stored in MongoDB
     * alongside the PayPal order.
     */
    const donationReference =
      `GCC-${crypto.randomUUID()}`;

    /*
     * Idempotency key for PayPal.
     */
    const requestId =
      crypto.randomUUID();

    /*
     * Create PayPal order
     */
    const paypalResponse =
      await fetch(
        `${getPayPalApiUrl()}/v2/checkout/orders`,
        {
          method: "POST",

          headers: {
            Authorization:
              `Bearer ${accessToken}`,

            "Content-Type":
              "application/json",

            Accept:
              "application/json",

            Prefer:
              "return=representation",

            "PayPal-Request-Id":
              requestId,
          },

          body: JSON.stringify({
            intent: "CAPTURE",

            purchase_units: [
              {
                reference_id:
                  donationReference,

                description:
                  "Donation to Global Crossfire Church UK",

                amount: {
                  currency_code: "GBP",
                  value: amount,
                },
              },
            ],

            application_context: {
              brand_name:
                "Global Crossfire Church UK",

              user_action:
                "PAY_NOW",

              shipping_preference:
                "NO_SHIPPING",

              locale:
                "en-GB",
            },
          }),

          cache: "no-store",
        }
      );

    /*
     * PayPal may return JSON or,
     * in an unexpected failure, text.
     */
    const responseText =
      await paypalResponse.text();

    let data: any;

    try {
      data = JSON.parse(
        responseText
      );
    } catch {
      console.error(
        "PayPal returned non-JSON response:",
        responseText
      );

      return NextResponse.json(
        {
          error:
            "PayPal returned an unexpected response.",
        },
        { status: 502 }
      );
    }

    /*
     * Handle PayPal errors.
     */
    if (!paypalResponse.ok) {
      console.error(
        "PayPal create-order failed:",
        {
          status:
            paypalResponse.status,

          data,
        }
      );

      return NextResponse.json(
        {
          error:
            data?.message ||
            data?.details?.[0]
              ?.description ||
            "Unable to create PayPal order.",
        },
        {
          status: 502,
        }
      );
    }

    /*
     * Validate PayPal response.
     */
    if (
      typeof data?.id !==
      "string"
    ) {
      console.error(
        "PayPal order response missing ID:",
        data
      );

      return NextResponse.json(
        {
          error:
            "PayPal did not return a valid order ID.",
        },
        { status: 502 }
      );
    }

    /*
     * Return only what the browser needs.
     */
    return NextResponse.json({
      success: true,

      orderID: data.id,

      donationReference,

      amount,

      currency: "GBP",
    });
  } catch (error) {
    console.error(
      "PayPal create-order error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to initialize the PayPal donation.",
      },
      { status: 500 }
    );
  }
}