"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Landmark,
  Copy,
  Check,
  ShieldCheck,
  Heart,
  GraduationCap,
  ArrowRight,
} from "lucide-react";



export const DonationMethod = () => {
  const [copied, setCopied] = useState("");

  const copyToClipboard = async (
    text: string,
    field: string
  ) => {
    await navigator.clipboard.writeText(text);

    setCopied(field);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-0 h-[30rem] w-[30rem] rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute right-[-10%] bottom-0 h-[34rem] w-[34rem] rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Scripture */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-primary/10
              bg-primary/5
              px-4 py-2
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
              className="
                absolute
                left-1/2
                top-[-5rem]
                -translate-x-1/2
                text-[12rem]
                font-black
                leading-none
                text-primary/5
                select-none
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
              Each of you should give what you have decided
              in your heart to give, not reluctantly or under
              compulsion, for God loves a cheerful giver.
            </blockquote>

            <p className="mt-6 text-lg font-bold text-primary">
              2 Corinthians 9:7
            </p>
          </div>
        </motion.div>

        {/* Intro */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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
            Your giving to our ministry is gratefully
            appreciated. Every contribution helps support
            ministry initiatives and educational projects
            within our local community.
          </p>
        </motion.div>

        {/* Impact Banner */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              icon={<Heart className="h-5 w-5" />}
              label="Community Outreach"
            />

            <ImpactItem
              icon={<HeartHandshake className="h-5 w-5" />}
              label="Church Ministry"
            />

            <ImpactItem
              icon={<GraduationCap className="h-5 w-5" />}
              label="Educational Projects"
            />
          </div>
        </motion.div>

        {/* Donation Methods */}

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* PayPal */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

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
                Make a secure donation using our PayPal
                donation button.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <TrustBadge label="Secure Giving" />
                <TrustBadge label="Trusted Worldwide" />
                <TrustBadge label="Quick Donation" />
              </div>

              <Link
                href="https://www.paypal.com/donate?token=T2phWbeRXr5YAH90w6SqPmEk90OHjzYCdKfZt213hkCHqQ2fEZ9OsbZoy3E-G2aq0zcnBxPyB5ZNrDm-"
                target="_blank"
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-primary
                  px-8
                  py-4
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                Donate Now

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Bank Transfer */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
              Donate directly into our church account.
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
                copied={copied === "sortCode"}
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
                copied={copied === "account"}
              />
            </div>
          </motion.div>
        </div>

        {/* Thank You */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            Thank you for your generosity, partnership,
            and support. Your giving helps us continue
            sharing the Gospel, serving our community,
            and impacting lives through the ministry of
            Global Crossfire Church UK.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

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
        rounded-[1.5rem]
        border
        border-primary/10
        bg-white/40
        p-5
      "
    >
      <div>
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

        <p
          className="
            mt-2
            text-lg
            font-black
          "
        >
          {value}
        </p>
      </div>

      {onCopy && (
        <button
          onClick={onCopy}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-primary/10
            text-primary
            transition-all
            hover:bg-primary
            hover:text-white
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