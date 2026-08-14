import { NextResponse } from "next/server";

import {
  getPayPalAccessToken,
  getPayPalApiUrl,
} from "@/lib/paypal/client";

const CURRENCY = "GBP";
const MIN_DONATION = 1;
const MAX_DONATION = 100000;

/**
 * PayPal can return amounts as strings.
 *
 * We normalize them before comparing them so that
 * "50", "50.00", and 50.00 are treated consistently.
 */
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

  if (!Number.isInteger(amount * 100)) {
    return null;
  }

  return amount.toFixed(2);
}

/**
 * Safely extract the first purchase unit.
 */
function getPurchaseUnit(
  order: any
) {
  return order?.purchase_units?.[0] ?? null;
}

/**
 * Safely extract the first capture.
 */
function getCapture(
  order: any
) {
  return (
    order?.purchase_units?.[0]
      ?.payments?.captures?.[0] ?? null
  );
}

export async function POST(
  request: Request
) {
  try {
    /*
     * =========================================================
     * 1. Parse request
     * =========================================================
     */

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request body.",
        },
        { status: 400 }
      );
    }

    const orderID =
      body &&
      typeof body === "object" &&
      "orderID" in body
        ? (body as {
            orderID?: unknown;
          }).orderID
        : undefined;

    if (
      typeof orderID !== "string" ||
      !orderID.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "A valid PayPal order ID is required.",
        },
        { status: 400 }
      );
    }

    const paypalOrderID =
      orderID.trim();

    /*
     * =========================================================
     * 2. Get PayPal access token
     * =========================================================
     */

    const accessToken =
      await getPayPalAccessToken();

    const apiUrl =
      getPayPalApiUrl();

    /*
     * =========================================================
     * 3. Retrieve PayPal order
     * =========================================================
     *
     * Never trust the browser to tell us:
     *
     * - the amount
     * - currency
     * - payment status
     * - purchase unit
     * - reference ID
     *
     * Everything is retrieved directly from PayPal.
     */

    const orderResponse =
      await fetch(
        `${apiUrl}/v2/checkout/orders/${encodeURIComponent(
          paypalOrderID
        )}`,
        {
          method: "GET",

          headers: {
            Authorization:
              `Bearer ${accessToken}`,

            Accept:
              "application/json",
          },

          cache: "no-store",
        }
      );

    let order: any;

    try {
      order =
        await orderResponse.json();
    } catch {
      console.error(
        "PayPal order lookup returned invalid JSON."
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to verify the PayPal order.",
        },
        { status: 502 }
      );
    }

    /*
     * =========================================================
     * 4. Handle order lookup failure
     * =========================================================
     */

    if (!orderResponse.ok) {
      console.error(
        "PayPal order lookup failed:",
        {
          orderID: paypalOrderID,
          status:
            orderResponse.status,
          data: order,
        }
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to verify the PayPal order.",
        },
        {
          status:
            orderResponse.status >= 400 &&
            orderResponse.status < 600
              ? orderResponse.status
              : 502,
        }
      );
    }

    /*
     * =========================================================
     * 5. Verify order ID
     * =========================================================
     */

    if (
      order?.id !== paypalOrderID
    ) {
      console.error(
        "PayPal order ID mismatch:",
        {
          requested:
            paypalOrderID,
          returned:
            order?.id,
        }
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "The PayPal order could not be verified.",
        },
        { status: 502 }
      );
    }

    /*
     * =========================================================
     * 6. Handle already-completed orders
     * =========================================================
     *
     * This is important for retries.
     *
     * Imagine:
     *
     * 1. PayPal capture succeeds.
     * 2. Our server captures successfully.
     * 3. Network response is lost.
     * 4. Browser calls this endpoint again.
     *
     * We should NOT attempt to capture again.
     */

    if (
      order.status === "COMPLETED"
    ) {
      const existingCapture =
        getCapture(order);

      if (
        !existingCapture ||
        existingCapture.status !==
          "COMPLETED"
      ) {
        console.error(
          "PayPal order is COMPLETED but capture information is missing:",
          order
        );

        return NextResponse.json(
          {
            success: false,
            error:
              "The PayPal order was completed but could not be fully verified.",
          },
          { status: 502 }
        );
      }

      const existingAmount =
        normalizeAmount(
          existingCapture?.amount?.value
        );

      const existingCurrency =
        existingCapture?.amount
          ?.currency_code;

      if (
        !existingAmount ||
        existingCurrency !== CURRENCY
      ) {
        console.error(
          "Invalid completed PayPal donation:",
          {
            orderID: paypalOrderID,
            amount:
              existingCapture?.amount
                ?.value,
            currency:
              existingCurrency,
          }
        );

        return NextResponse.json(
          {
            success: false,
            error:
              "The completed PayPal donation could not be verified.",
          },
          { status: 502 }
        );
      }

      const purchaseUnit =
        getPurchaseUnit(order);

      return NextResponse.json(
        {
          success: true,

          alreadyCaptured: true,

          donation: {
            orderID:
              order.id,

            captureID:
              existingCapture.id,

            status:
              existingCapture.status,

            amount:
              existingAmount,

            currency:
              existingCurrency,

            referenceID:
              purchaseUnit?.reference_id,

            payer: {
              payerID:
                order?.payer
                  ?.payer_id,

              email:
                order?.payer
                  ?.email_address,

              name: {
                given:
                  order?.payer
                    ?.name
                    ?.given_name,

                surname:
                  order?.payer
                    ?.name
                    ?.surname,
              },
            },

            createTime:
              existingCapture
                .create_time,

            updateTime:
              existingCapture
                .update_time,
          },
        },
        {
          status: 200,
          headers: {
            "Cache-Control":
              "no-store",
          },
        }
      );
    }

    /*
     * =========================================================
     * 7. Order must be approved
     * =========================================================
     */

    if (
      order.status !== "APPROVED"
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "This PayPal order has not been approved for capture.",
          status:
            order.status,
        },
        { status: 400 }
      );
    }

    /*
     * =========================================================
     * 8. Verify order intent
     * =========================================================
     */

    if (
      order.intent !== "CAPTURE"
    ) {
      console.error(
        "Unexpected PayPal order intent:",
        {
          orderID: paypalOrderID,
          intent:
            order.intent,
        }
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "This PayPal order is not a capture payment.",
        },
        { status: 400 }
      );
    }

    /*
     * =========================================================
     * 9. Verify purchase unit
     * =========================================================
     */

    const purchaseUnit =
      getPurchaseUnit(order);

    if (!purchaseUnit) {
      console.error(
        "PayPal order has no purchase unit:",
        order
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "The PayPal order does not contain a valid donation.",
        },
        { status: 400 }
      );
    }

    /*
     * =========================================================
     * 10. Verify donation amount
     * =========================================================
     */

    const orderAmount =
      normalizeAmount(
        purchaseUnit?.amount?.value
      );

    const orderCurrency =
      purchaseUnit?.amount
        ?.currency_code;

    if (
      !orderAmount ||
      orderCurrency !== CURRENCY
    ) {
      console.error(
        "Invalid PayPal donation amount:",
        {
          orderID: paypalOrderID,
          amount:
            purchaseUnit?.amount
              ?.value,
          currency:
            orderCurrency,
        }
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "The PayPal order contains an invalid donation amount or currency.",
        },
        { status: 400 }
      );
    }

    /*
     * =========================================================
     * 11. Verify internal donation reference
     * =========================================================
     *
     * The create-order endpoint creates references such as:
     *
     * GCC-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     *
     * This ensures the purchase unit represents one of our
     * donation orders.
     */

    const referenceID =
      purchaseUnit?.reference_id;

    if (
      typeof referenceID !== "string" ||
      !referenceID.startsWith("GCC-")
    ) {
      console.error(
        "Invalid Global Crossfire donation reference:",
        {
          orderID: paypalOrderID,
          referenceID,
        }
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "The PayPal order could not be verified as a church donation.",
        },
        { status: 400 }
      );
    }

    /*
     * =========================================================
     * 12. Capture PayPal order
     * =========================================================
     */

    const captureResponse =
      await fetch(
        `${apiUrl}/v2/checkout/orders/${encodeURIComponent(
          paypalOrderID
        )}/capture`,
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
              `capture-${paypalOrderID}`,
          },

          cache: "no-store",
        }
      );

    let captureData: any;

    try {
      captureData =
        await captureResponse.json();
    } catch {
      console.error(
        "PayPal capture returned invalid JSON."
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "PayPal returned an invalid capture response.",
        },
        { status: 502 }
      );
    }

    /*
     * =========================================================
     * 13. Handle capture failure
     * =========================================================
     *
     * PayPal may reject a second capture if another request
     * already captured the order.
     *
     * In that case, retrieve the order again and check whether
     * the payment actually completed.
     */

    if (!captureResponse.ok) {
      console.error(
        "PayPal capture request failed:",
        {
          orderID:
            paypalOrderID,
          status:
            captureResponse.status,
          data:
            captureData,
        }
      );

      /*
       * Re-fetch the order to determine whether the payment
       * was actually completed despite the capture response.
       */

      const verificationResponse =
        await fetch(
          `${apiUrl}/v2/checkout/orders/${encodeURIComponent(
            paypalOrderID
          )}`,
          {
            method: "GET",

            headers: {
              Authorization:
                `Bearer ${accessToken}`,

              Accept:
                "application/json",
            },

            cache: "no-store",
          }
        );

      if (
        verificationResponse.ok
      ) {
        const verificationOrder =
          await verificationResponse.json();

        if (
          verificationOrder?.status ===
          "COMPLETED"
        ) {
          const completedCapture =
            getCapture(
              verificationOrder
            );

          if (
            completedCapture?.status ===
            "COMPLETED"
          ) {
            const verifiedAmount =
              normalizeAmount(
                completedCapture
                  ?.amount?.value
              );

            const verifiedCurrency =
              completedCapture
                ?.amount
                ?.currency_code;

            if (
              verifiedAmount ===
                orderAmount &&
              verifiedCurrency ===
                CURRENCY
            ) {
              return NextResponse.json(
                {
                  success: true,

                  alreadyCaptured:
                    true,

                  donation: {
                    orderID:
                      verificationOrder.id,

                    captureID:
                      completedCapture.id,

                    status:
                      completedCapture.status,

                    amount:
                      verifiedAmount,

                    currency:
                      verifiedCurrency,

                    referenceID:
                      referenceID,

                    payer: {
                      payerID:
                        verificationOrder
                          ?.payer
                          ?.payer_id,

                      email:
                        verificationOrder
                          ?.payer
                          ?.email_address,

                      name: {
                        given:
                          verificationOrder
                            ?.payer
                            ?.name
                            ?.given_name,

                        surname:
                          verificationOrder
                            ?.payer
                            ?.name
                            ?.surname,
                      },
                    },

                    createTime:
                      completedCapture
                        .create_time,

                    updateTime:
                      completedCapture
                        .update_time,
                  },
                },
                {
                  status: 200,
                  headers: {
                    "Cache-Control":
                      "no-store",
                  },
                }
              );
            }
          }
        }
      }

      return NextResponse.json(
        {
          success: false,

          error:
            captureData?.message ||
            captureData?.details?.[0]
              ?.description ||
            "Unable to capture PayPal donation.",
        },
        {
          status:
            captureResponse.status >=
              400 &&
            captureResponse.status < 600
              ? captureResponse.status
              : 502,
        }
      );
    }

    /*
     * =========================================================
     * 14. Extract capture
     * =========================================================
     */

    const capture =
      getCapture(captureData);

    if (!capture) {
      console.error(
        "PayPal capture response did not contain a capture:",
        captureData
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "PayPal payment could not be verified.",
        },
        { status: 502 }
      );
    }

    /*
     * =========================================================
     * 15. Verify capture status
     * =========================================================
     */

    if (
      capture.status !==
      "COMPLETED"
    ) {
      console.error(
        "PayPal capture was not completed:",
        {
          orderID:
            paypalOrderID,
          captureID:
            capture.id,
          status:
            capture.status,
        }
      );

      return NextResponse.json(
        {
          success: false,

          error:
            "The PayPal donation was not completed.",

          status:
            capture.status,
        },
        { status: 400 }
      );
    }

    /*
     * =========================================================
     * 16. Verify captured amount
     * =========================================================
     */

    const capturedAmount =
      normalizeAmount(
        capture?.amount?.value
      );

    const capturedCurrency =
      capture?.amount
        ?.currency_code;

    if (
      !capturedAmount ||
      capturedCurrency !== CURRENCY
    ) {
      console.error(
        "Invalid PayPal capture amount:",
        {
          orderID:
            paypalOrderID,

          orderAmount,

          orderCurrency,

          capturedAmount,

          capturedCurrency,
        }
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "The captured donation amount could not be verified.",
        },
        { status: 502 }
      );
    }

    /*
     * =========================================================
     * 17. Compare order amount with captured amount
     * =========================================================
     */

    if (
      capturedAmount !==
      orderAmount
    ) {
      console.error(
        "PayPal amount mismatch:",
        {
          orderID:
            paypalOrderID,

          orderAmount,

          capturedAmount,

          orderCurrency,

          capturedCurrency,
        }
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "The captured donation amount does not match the original donation.",
        },
        { status: 502 }
      );
    }

    /*
     * =========================================================
     * 18. Build verified donation
     * =========================================================
     */

    const donation = {
      orderID:
        captureData.id,

      captureID:
        capture.id,

      status:
        capture.status,

      amount:
        capturedAmount,

      currency:
        capturedCurrency,

      referenceID,

      payer: {
        payerID:
          captureData?.payer
            ?.payer_id,

        email:
          captureData?.payer
            ?.email_address,

        name: {
          given:
            captureData?.payer
              ?.name
              ?.given_name,

          surname:
            captureData?.payer
              ?.name
              ?.surname,
        },
      },

      createTime:
        capture.create_time,

      updateTime:
        capture.update_time,
    };

    /*
     * =========================================================
     * 19. Log verified donation
     * =========================================================
     *
     * IMPORTANT:
     *
     * This is the point where you should persist the donation
     * to MongoDB.
     *
     * Do NOT create the database donation record before the
     * capture has been verified as COMPLETED.
     */

    console.log(
      "PayPal donation completed:",
      donation
    );

    /*
     * =========================================================
     * 20. Return successful donation
     * =========================================================
     */

    return NextResponse.json(
      {
        success: true,

        alreadyCaptured: false,

        donation,
      },
      {
        status: 200,

        headers: {
          "Cache-Control":
            "no-store",
        },
      }
    );
  } catch (error) {
    /*
     * =========================================================
     * Unexpected server error
     * =========================================================
     */

    console.error(
      "PayPal capture-order unexpected error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Unable to complete the PayPal donation.",
      },
      { status: 500 }
    );
  }
}