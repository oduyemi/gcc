"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  CalendarDays,
  FileText,
  Images,
  ShieldCheck,
  Mail,
  Heart,
  UserPlus,
  HandHelping,
  Waves,
  Cross,
  Flame,
  MessageCircleHeart,
  Handshake,
  Settings,
  ChevronDown,
  ChevronRight,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";





interface AdminSidebarProps {
  collapsed: boolean;
  onCollapse: () => void;
}


const navigation = [
  {
    title: "Overview",
    items: [
      {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/admin",
      },
    ],
  },

  {
    title: "Content",
    items: [
      {
        label: "Blog Posts",
        icon: FileText,
        href: "/admin/blog",
      },
      {
        label: "Events & Meetings",
        icon: CalendarDays,
        href: "/admin/events",
      },
      {
        label: "Gallery",
        icon: Images,
        href: "/admin/gallery",
      },
    ],
  },

  {
    title: "People",
    items: [
      {
        label: "Administrators",
        icon: ShieldCheck,
        href: "/admin/administrators",
      },
    ],
  },

  {
    title: "Forms",
    items: [
      {
        label: "Contact Entries",
        icon: Mail,
        href: "/admin/forms/contact",
      },
      {
        label: "Prayer Requests",
        icon: Heart,
        href: "/admin/forms/prayer-requests",
      },
      {
        label: "New To GCC",
        icon: UserPlus,
        href: "/admin/forms/new-to-gcc",
      },
      {
        label: "Start Serving",
        icon: HandHelping,
        href: "/admin/forms/start-serving",
      },
      {
        label: "Baptism",
        icon: Waves,
        href: "/admin/forms/baptism",
      },
      {
        label: "Commit To Christ",
        icon: Cross,
        href: "/admin/forms/commit-to-christ",
      },
      {
        label: "Recommit To Christ",
        icon: Flame,
        href: "/admin/forms/recommit-to-christ",
      },
      {
        label: "Counselling",
        icon: MessageCircleHeart,
        href: "/admin/forms/counselling",
      },
      {
        label: "Partnership",
        icon: Handshake,
        href: "/admin/forms/partnership",
      },
    ],
  },

  {
    title: "System",
    items: [
      {
        label: "Settings",
        icon: Settings,
        href: "/admin/settings",
      },
    ],
  },
];

export const AdminSidebar = ({collapsed, onCollapse}: AdminSidebarProps) => {
  const pathname = usePathname();
  const [formsOpen, setFormsOpen] = useState(true);
  return (
    <motion.aside
      animate={{
        width: collapsed ? 88 : 288,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        fixed
        left-4
        top-4
        bottom-4
        z-50
        hidden
        lg:flex
        flex-col
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        overflow-hidden
      "
    >
      {/* Header */}
      <div className="border-b border-white/10 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Church logo"
              width={42}
              height={42}
            />

            <AnimatePresence>
              {!collapsed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="font-semibold text-white">
                    GCC UK
                  </h2>

                  <p className="text-xs text-slate-400">
                    Admin Console
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {!collapsed && (
            <button
              onClick={onCollapse}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-white/5
                text-slate-400
                hover:text-white
              "
            >
              <PanelLeftClose size={18} />
            </button>
          )}

          {collapsed && (
            <button
              onClick={onCollapse}
              className="
                absolute
                right-2
                top-3
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                bg-white/5
                text-slate-400
              "
            >
              <PanelLeftOpen size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        {navigation.map((section) => (
          <div key={section.title} className="mb-8">
            <h3
              className="
              mb-3
              px-4
              text-xs
              uppercase
              tracking-wider
              text-slate-500
            "
            >
              {section.title}
            </h3>

            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;

                return (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      whileHover={{ x: 6 }}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-4
                        py-3
                        text-sm
                        text-slate-300
                        hover:bg-white/5
                        hover:text-white
                      "
                    >
                      <Icon size={18} />
                      {item.label}
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
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