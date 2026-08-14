"use client";

import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Landmark,
  Copy,
  Check,
  ShieldCheck,
  Heart,
  GraduationCap,
  AlertCircle,
  Loader2,
  RotateCcw,
  ReceiptText,
} from "lucide-react";
import {
  PayPalButtons,
  PayPalScriptProvider,
} from "@paypal/react-paypal-js";

const MIN_DONATION = 1;
const MAX_DONATION = 100000;

type PaymentStatus =
  | "idle"
  | "processing"
  | "success"
  | "error";

interface DonationResult {
  orderID: string;
  captureID?: string;
  amount?: string;
  currency?: string;
  referenceID?: string;
}

export const DonationMethod = () => {
  const [copied, setCopied] = useState("");
  const [amount, setAmount] = useState("50");

  const [paymentError, setPaymentError] =
    useState("");

  const [paymentStatus, setPaymentStatus] =
    useState<PaymentStatus>("idle");

  const [donationResult, setDonationResult] =
    useState<DonationResult | null>(null);

  const paypalClientId =
    process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  /**
   * Validate the donation amount on the client.
   *
   * This is only for UX.
   * The server performs the authoritative validation.
   */
  const normalizedAmount = useMemo(() => {
    const trimmed = amount.trim();

    if (!trimmed) {
      return null;
    }

    const numericAmount = Number(trimmed);

    if (!Number.isFinite(numericAmount)) {
      return null;
    }

    if (
      numericAmount < MIN_DONATION ||
      numericAmount > MAX_DONATION
    ) {
      return null;
    }

    /**
     * Prevent more than two decimal places.
     */
    if (
      Math.round(numericAmount * 100) !==
      numericAmount * 100
    ) {
      return null;
    }

    return numericAmount.toFixed(2);
  }, [amount]);

  const isProcessing =
    paymentStatus === "processing";

  const hasPaymentError =
    paymentStatus === "error" &&
    Boolean(paymentError);

  const copyToClipboard = useCallback(
    async (text: string, field: string) => {
      try {
        await navigator.clipboard.writeText(text);

        setCopied(field);

        window.setTimeout(() => {
          setCopied("");
        }, 2000);
      } catch (error) {
        console.error(
          "Clipboard copy failed:",
          error
        );
      }
    },
    []
  );

  /**
   * Reset the payment UI.
   */
  const resetPaymentState = useCallback(() => {
    setPaymentError("");
    setPaymentStatus("idle");
    setDonationResult(null);
  }, []);

  /**
   * Create the PayPal order through our server.
   *
   * The browser never creates a PayPal order directly.
   */
  const createPayPalOrder = useCallback(
    async () => {
      setPaymentError("");
      setPaymentStatus("processing");
      setDonationResult(null);

      if (!normalizedAmount) {
        setPaymentStatus("error");

        throw new Error(
          `Please enter a valid donation amount between £${MIN_DONATION.toFixed(
            2
          )} and £${MAX_DONATION.toLocaleString(
            "en-GB"
          )}.`
        );
      }

      try {
        const response = await fetch(
          "/api/paypal/create-order",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              amount: normalizedAmount,
            }),
            cache: "no-store",
          }
        );

        const data = await response.json();

        if (
          !response.ok ||
          !data?.orderID
        ) {
          throw new Error(
            data?.error ||
              "Unable to initialize PayPal checkout."
          );
        }

        /**
         * The server is authoritative about
         * the amount and PayPal order.
         *
         * We intentionally return only the
         * PayPal order ID to the SDK.
         */
        return data.orderID as string;
      } catch (error) {
        console.error(
          "PayPal create-order error:",
          error
        );

        const message =
          error instanceof Error
            ? error.message
            : "Unable to initialize PayPal checkout.";

        setPaymentError(message);
        setPaymentStatus("error");

        throw error;
      }
    },
    [normalizedAmount]
  );

  /**
   * Capture the PayPal order through our server.
   *
   * The server verifies:
   * - order
   * - capture
   * - capture status
   * - currency
   * - amount
   */
  const capturePayPalOrder = useCallback(
    async (orderID: string) => {
      setPaymentStatus("processing");
      setPaymentError("");

      try {
        const response = await fetch(
          "/api/paypal/capture-order",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              orderID,
            }),
            cache: "no-store",
          }
        );

        const data = await response.json();

        if (
          !response.ok ||
          !data?.success
        ) {
          throw new Error(
            data?.error ||
              "Unable to complete the donation."
          );
        }

        /**
         * Store the server-confirmed result.
         */
        setDonationResult({
          orderID:
            data?.donation?.orderID ||
            orderID,

          captureID:
            data?.donation?.captureID,

          amount:
            data?.donation?.amount,

          currency:
            data?.donation?.currency,

          referenceID:
            data?.donation?.referenceID,
        });

        setPaymentStatus("success");
        setPaymentError("");
      } catch (error) {
        console.error(
          "PayPal capture error:",
          error
        );

        const message =
          error instanceof Error
            ? error.message
            : "Something went wrong while completing your donation.";

        setPaymentError(message);
        setPaymentStatus("error");
      }
    },
    []
  );

  const handleAmountChange = (
    value: string
  ) => {
    /**
     * Allow an empty field while typing.
     */
    if (value === "") {
      setAmount("");
      resetPaymentState();
      return;
    }

    /**
     * Allow only numbers with up to two decimals.
     */
    if (!/^\d*(\.\d{0,2})?$/.test(value)) {
      return;
    }

    setAmount(value);
    resetPaymentState();
  };

  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
      >
        <div className="absolute left-[-10%] top-0 h-[30rem] w-[30rem] rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute bottom-0 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-accent/15 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.025] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Scripture */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-5xl text-center"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-primary/10
              bg-primary/5
              px-4
              py-2
              text-[11px]
              font-black
              uppercase
              tracking-[0.25em]
              text-primary
            "
          >
            <HeartHandshake className="h-4 w-4" />
            Cheerful Giving
          </div>

          <div className="relative mt-10">
            <div
              aria-hidden="true"
              className="
                absolute
                left-1/2
                top-[-5rem]
                -translate-x-1/2
                select-none
                text-[12rem]
                font-black
                leading-none
                text-primary/5
              "
            >
              "
            </div>

            <blockquote
              className="
                relative
                text-3xl
                font-black
                leading-tight
                tracking-[-0.04em]
                md:text-5xl
              "
            >
              Each of you should give what you
              have decided in your heart to give,
              not reluctantly or under compulsion,
              for God loves a cheerful giver.
            </blockquote>

            <p className="mt-6 text-lg font-bold text-primary">
              2 Corinthians 9:7
            </p>
          </div>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mt-20 max-w-4xl text-center"
        >
          <h2
            className="
              text-4xl
              font-black
              tracking-[-0.05em]
              md:text-6xl
            "
          >
            Support The Ministry
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-muted-foreground
            "
          >
            Your giving to our ministry is
            gratefully appreciated. Every
            contribution helps support ministry
            initiatives and educational projects
            within our local community.
          </p>
        </motion.div>

        {/* Impact Banner */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            glass
            mx-auto
            mt-12
            max-w-5xl
            rounded-[2rem]
            p-6
          "
        >
          <div className="flex flex-wrap items-center justify-center gap-6">
            <ImpactItem
              icon={
                <Heart className="h-5 w-5" />
              }
              label="Community Outreach"
            />

            <ImpactItem
              icon={
                <HeartHandshake className="h-5 w-5" />
              }
              label="Church Ministry"
            />

            <ImpactItem
              icon={
                <GraduationCap className="h-5 w-5" />
              }
              label="Educational Projects"
            />
          </div>
        </motion.div>

        {/* Donation Methods */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* PayPal */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              glass
              glow-gold
              glass-hover
              relative
              overflow-hidden
              rounded-[3rem]
              p-10
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                right-0
                top-0
                h-72
                w-72
                rounded-full
                bg-primary/10
                blur-3xl
              "
            />

            <div className="relative z-10">
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-primary/10
                  text-primary
                "
              >
                <HeartHandshake className="h-8 w-8" />
              </div>

              <h3 className="mt-8 text-4xl font-black">
                Donate Via PayPal
              </h3>

              <p className="mt-5 leading-8 text-muted-foreground">
                Make a secure donation through
                PayPal. Choose the amount you
                would like to give and continue
                securely with PayPal.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <TrustBadge label="Secure Giving" />
                <TrustBadge label="Trusted Worldwide" />
                <TrustBadge label="Quick Donation" />
              </div>

              {paypalClientId ? (
                <PayPalScriptProvider
                  options={{
                    clientId:
                      paypalClientId,
                    currency: "GBP",
                    intent: "capture",
                    locale: "en_GB",
                  }}
                >
                  <div className="mt-10">
                    {/* Amount */}
                    <label
                      htmlFor="donation-amount"
                      className="
                        block
                        text-sm
                        font-black
                        uppercase
                        tracking-[0.15em]
                        text-muted-foreground
                      "
                    >
                      Donation Amount
                    </label>

                    <div className="relative mt-3">
                      <span
                        aria-hidden="true"
                        className="
                          absolute
                          left-5
                          top-1/2
                          -translate-y-1/2
                          text-lg
                          font-black
                          text-muted-foreground
                        "
                      >
                        £
                      </span>

                      <input
                        id="donation-amount"
                        name="donationAmount"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        min={MIN_DONATION}
                        max={MAX_DONATION}
                        value={amount}
                        disabled={isProcessing}
                        onChange={(event) =>
                          handleAmountChange(
                            event.target.value
                          )
                        }
                        className="
                          w-full
                          rounded-2xl
                          border
                          border-primary/10
                          bg-white/50
                          px-5
                          py-4
                          pl-10
                          text-lg
                          font-bold
                          outline-none
                          transition
                          focus:border-primary/40
                          focus:ring-2
                          focus:ring-primary/10
                          disabled:cursor-not-allowed
                          disabled:opacity-60
                        "
                        placeholder="50.00"
                        aria-describedby="donation-amount-help"
                        aria-invalid={
                          Boolean(amount) &&
                          !normalizedAmount
                        }
                      />
                    </div>

                    <p
                      id="donation-amount-help"
                      className="
                        mt-2
                        text-xs
                        text-muted-foreground
                      "
                    >
                      Minimum £1.00 · Maximum
                      £100,000.00
                    </p>

                    {/* Payment Success */}
                    {paymentStatus ===
                      "success" && (
                      <DonationSuccess
                        donation={
                          donationResult
                        }
                        onReset={() => {
                          setAmount("50");
                          resetPaymentState();
                        }}
                      />
                    )}

                    {/* Payment */}
                    {paymentStatus !==
                      "success" && (
                      <div className="mt-6">
                        <PayPalButtons
                          style={{
                            layout:
                              "vertical",
                            shape: "pill",
                            label: "donate",
                            height: 48,
                          }}
                          disabled={
                            isProcessing ||
                            !normalizedAmount
                          }
                          forceReRender={[
                            normalizedAmount,
                          ]}
                          createOrder={
                            createPayPalOrder
                          }
                          onApprove={async (
                            data
                          ) => {
                            if (
                              !data.orderID
                            ) {
                              setPaymentStatus(
                                "error"
                              );

                              setPaymentError(
                                "PayPal did not return a valid order."
                              );

                              return;
                            }

                            await capturePayPalOrder(
                              data.orderID
                            );
                          }}
                          onCancel={() => {
                            setPaymentStatus(
                              "idle"
                            );
                            setPaymentError("");
                          }}
                          onError={(error) => {
                            console.error(
                              "PayPal checkout error:",
                              error
                            );

                            setPaymentStatus(
                              "error"
                            );

                            setPaymentError(
                              "We couldn't complete the PayPal checkout. Please try again."
                            );
                          }}
                        />

                        {/* Processing */}
                        {isProcessing && (
                          <div
                            className="
                              mt-4
                              flex
                              items-center
                              justify-center
                              gap-2
                              text-sm
                              font-semibold
                              text-muted-foreground
                            "
                          >
                            <Loader2 className="h-4 w-4 animate-spin" />

                            Processing your
                            donation securely...
                          </div>
                        )}

                        {/* Error */}
                        {hasPaymentError && (
                          <div
                            role="alert"
                            className="
                              mt-4
                              rounded-2xl
                              border
                              border-red-500/20
                              bg-red-500/10
                              p-4
                              text-center
                            "
                          >
                            <div className="flex items-start justify-center gap-3">
                              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />

                              <p className="text-sm font-medium text-red-700">
                                {
                                  paymentError
                                }
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={() => {
                                setPaymentError(
                                  ""
                                );
                                setPaymentStatus(
                                  "idle"
                                );
                              }}
                              className="
                                mt-4
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-red-600
                                px-4
                                py-2
                                text-xs
                                font-bold
                                text-white
                                transition
                                hover:bg-red-700
                              "
                            >
                              <RotateCcw className="h-3.5 w-3.5" />
                              Try Again
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    <p
                      className="
                        mt-4
                        text-center
                        text-xs
                        leading-5
                        text-muted-foreground
                      "
                    >
                      Your payment is securely
                      processed by PayPal. Your
                      card or PayPal details are
                      never stored on this website.
                    </p>
                  </div>
                </PayPalScriptProvider>
              ) : (
                <div
                  role="alert"
                  className="
                    mt-10
                    rounded-2xl
                    border
                    border-red-200
                    bg-red-50
                    p-5
                    text-sm
                    text-red-700
                  "
                >
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 shrink-0" />

                    <span>
                      PayPal is currently
                      unavailable. Please try
                      again later.
                    </span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Bank Transfer */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              glass
              glass-hover
              rounded-[3rem]
              p-10
            "
          >
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-primary/10
                text-primary
              "
            >
              <Landmark className="h-8 w-8" />
            </div>

            <h3 className="mt-8 text-4xl font-black">
              Bank Transfer
            </h3>

            <p className="mt-5 text-muted-foreground">
              Donate directly into our church
              account.
            </p>

            <div className="mt-8 space-y-4">
              <BankRow
                label="Bank"
                value="Barclays Bank"
              />

              <BankRow
                label="Account Name"
                value="Global Crossfire Church UK"
              />

              <BankRow
                label="Sort Code"
                value="20-17-94"
                onCopy={() =>
                  copyToClipboard(
                    "201794",
                    "sortCode"
                  )
                }
                copied={
                  copied === "sortCode"
                }
              />

              <BankRow
                label="Account Number"
                value="33838552"
                onCopy={() =>
                  copyToClipboard(
                    "33838552",
                    "account"
                  )
                }
                copied={
                  copied === "account"
                }
              />
            </div>

            <div
              className="
                mt-6
                rounded-2xl
                border
                border-primary/10
                bg-primary/[0.035]
                p-5
              "
            >
              <div className="flex gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                <div>
                  <p className="font-bold">
                    Bank transfer giving
                  </p>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Please use an appropriate
                    reference when making your
                    transfer so our team can
                    identify your gift.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Thank You */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            glass
            glow-lavender
            mx-auto
            mt-12
            max-w-5xl
            rounded-[3rem]
            p-10
            text-center
          "
        >
          <h3 className="text-3xl font-black">
            Thank You
          </h3>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-lg
              leading-8
              text-muted-foreground
            "
          >
            Thank you for your generosity,
            partnership, and support. Your giving
            helps us continue sharing the Gospel,
            serving our community, and impacting
            lives through the ministry of Global
            Crossfire Church UK.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* Donation Success                                                           */
/* -------------------------------------------------------------------------- */

function DonationSuccess({
  donation,
  onReset,
}: {
  donation: DonationResult | null;
  onReset: () => void;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className="
        mt-6
        rounded-[2rem]
        border
        border-green-500/20
        bg-green-500/10
        p-6
        text-center
      "
    >
      <div
        className="
          mx-auto
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-green-500/10
          text-green-600
        "
      >
        <Check className="h-7 w-7" />
      </div>

      <p className="mt-4 text-xl font-black">
        Thank You for Your Generosity!
      </p>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        Your PayPal donation has been
        successfully completed. Thank you for
        supporting the ministry of Global
        Crossfire Church UK.
      </p>

      {donation?.amount && (
        <div
          className="
            mx-auto
            mt-5
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-white/60
            px-4
            py-2
            text-sm
            font-black
          "
        >
          <HeartHandshake className="h-4 w-4 text-primary" />

          {donation.currency || "GBP"}{" "}
          {donation.amount}
        </div>
      )}

      {donation?.referenceID && (
        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <ReceiptText className="h-4 w-4" />

          <span>
            Reference:{" "}
            <span className="font-bold">
              {donation.referenceID}
            </span>
          </span>
        </div>
      )}

      <button
        type="button"
        onClick={onReset}
        className="
          mt-6
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-primary/15
          bg-white/60
          px-5
          py-2.5
          text-sm
          font-bold
          text-primary
          transition
          hover:bg-primary
          hover:text-white
        "
      >
        <HeartHandshake className="h-4 w-4" />
        Make Another Donation
      </button>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Trust Badge                                                                */
/* -------------------------------------------------------------------------- */

function TrustBadge({
  label,
}: {
  label: string;
}) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-primary/10
        bg-white/50
        px-4
        py-2
        text-sm
        font-medium
      "
    >
      <ShieldCheck className="h-4 w-4 text-primary" />
      {label}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Impact Item                                                                */
/* -------------------------------------------------------------------------- */

function ImpactItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-primary/10
          text-primary
        "
      >
        {icon}
      </div>

      <span className="font-semibold">
        {label}
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Bank Row                                                                   */
/* -------------------------------------------------------------------------- */

function BankRow({
  label,
  value,
  onCopy,
  copied,
}: {
  label: string;
  value: string;
  onCopy?: () => void;
  copied?: boolean;
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        gap-4
        rounded-[1.5rem]
        border
        border-primary/10
        bg-white/40
        p-5
      "
    >
      <div className="min-w-0">
        <p
          className="
            text-xs
            font-black
            uppercase
            tracking-[0.2em]
            text-muted-foreground
          "
        >
          {label}
        </p>

        <p className="mt-2 break-all text-lg font-black">
          {value}
        </p>
      </div>

      {onCopy && (
        <button
          type="button"
          onClick={onCopy}
          aria-label={`Copy ${label}`}
          title={`Copy ${label}`}
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-primary/10
            text-primary
            transition-all
            hover:bg-primary
            hover:text-white
            focus:outline-none
            focus:ring-2
            focus:ring-primary/30
          "
        >
          {copied ? (
            <Check className="h-5 w-5" />
          ) : (
            <Copy className="h-5 w-5" />
          )}
        </button>
      )}
    </div>
  );
}