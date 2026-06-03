"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ChevronRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Ministries",
    href: "/ministries",
  },
  {
    label: "Next Steps",
    href: "/next-steps",
  },
  {
    label: "Podcast",
    href: "/podcast",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const socials = [
  {
    icon: FaFacebookF,
    href: "#",
  },
  {
    icon: FaInstagram,
    href: "#",
  },
  {
    icon: FaYoutube,
    href: "#",
  },
];

export const Footer = () => {
  return (
    <footer
      className="
      relative
      overflow-hidden
      border-t border-white/10
      bg-[#0E0A1F]
      text-white
    "
    >
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

        <div
          className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          [background-size:120px_120px]
        "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
        {/* MAIN */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_1fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div
              className="
              inline-flex items-center gap-3
              rounded-full
              border border-white/10
              bg-white/5
              px-4 py-2
              backdrop-blur-xl
            "
            >
              <div className="h-2.5 w-2.5 rounded-full bg-primary" />

              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                Global Crossfire Church UK
              </span>
            </div>

            <h3
              className="
              mt-5
              text-3xl
              font-black
              leading-[1]
              tracking-[-0.05em]
              text-white
            "
            >
              Raising People
              <br />
              Of Fire & Purpose
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
              A Spirit-filled church in the UK passionate about worship,
              prayer, revival, discipleship, and transforming lives through
              Jesus Christ.
            </p>

            {/* SOCIALS */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -4,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="
                      flex h-11 w-11 items-center justify-center
                      rounded-2xl
                      border border-white/10
                      bg-white/5
                      text-white
                      backdrop-blur-xl
                      transition-all duration-300
                      hover:border-primary/30
                      hover:bg-primary
                    "
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-black uppercase tracking-[0.28em] text-primary">
              Quick Links
            </h4>

            <div className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                  group
                  flex items-center gap-2
                  text-sm
                  text-white/70
                  transition-all duration-300
                  hover:text-white
                "
                >
                  <ChevronRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />

                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-black uppercase tracking-[0.28em] text-primary">
              Worship With Us
            </h4>

            <div className="mt-5 space-y-4">
              <div
                className="
                flex items-start gap-4
                rounded-2xl
                border border-white/10
                bg-white/5
                p-4
                backdrop-blur-xl
              "
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Randolph House, Zion Place
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/65">
                    Margate, CT9 1RP
                    <br />
                    United Kingdom
                  </p>
                </div>
              </div>

              <div
                className="
                flex items-start gap-4
                rounded-2xl
                border border-white/10
                bg-white/5
                p-4
                backdrop-blur-xl
              "
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
                  <Phone className="h-4 w-4 text-primary" />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Sunday: 10:30AM – 12:30PM
                  </p>

                  <p className="mt-1 text-sm text-white/65">
                    Friday Prayer: 6PM – 7PM
                  </p>
                </div>
              </div>

              <div
                className="
                flex items-start gap-4
                rounded-2xl
                border border-white/10
                bg-white/5
                p-4
                backdrop-blur-xl
              "
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
                  <Mail className="h-4 w-4 text-primary" />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Contact Email
                  </p>

                  <p className="mt-1 text-sm text-white/65">
                    info@globalcrossfirechurch.org
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div
          className="
          mt-10
          flex flex-col items-center justify-between gap-4
          border-t border-white/10
          pt-6
          text-center
          md:flex-row
        "
        >
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Global Crossfire Church UK.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-sm text-white/50 transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-sm text-white/50 transition hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};