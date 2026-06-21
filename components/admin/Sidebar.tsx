"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  CreditCard,
  MessageSquare,
  Settings,
} from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { label: "Members", icon: Users, href: "/admin/members" },
  { label: "Events", icon: CalendarDays, href: "/admin/events" },
  { label: "Giving", icon: CreditCard, href: "/admin/giving" },
  { label: "Messages", icon: MessageSquare, href: "/admin/messages" },
  { label: "Settings", icon: Settings, href: "/admin/settings" },
];

export const AdminSidebar = () => {
  return (
    <motion.aside
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="
        fixed
        left-4
        top-4
        bottom-4
        w-72
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        flex
        flex-col
        overflow-hidden
      "
    >
      {/* Header */}
      <div className="border-b border-white/10 p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-white">
            {/* <Church size={20} /> */}
            <Image
                src="/images/logo.png"
                alt="Church logo"
                width={75}
                height={75}
                className="object-fit"
            />
          </div>

          <div>
            <h2 className="text-white font-semibold leading-tight">
              GCC UK
            </h2>
            <p className="text-xs text-slate-400">
              Admin Console
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item, i) => {
          const Icon = item.icon;

          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 6 }}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  px-4
                  py-3
                  text-sm
                  text-slate-300
                  transition
                  hover:bg-white/5
                  hover:text-white
                "
              >
                <Icon size={18} className="text-slate-400" />
                {item.label}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-white/10 p-4">
        <div className="rounded-2xl bg-white/5 p-4">
          <p className="text-sm font-medium text-white">
            Ministry OS
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Secure church administration system
          </p>
        </div>
      </div>
    </motion.aside>
  );
};