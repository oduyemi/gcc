"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
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
  PanelLeftClose,
  PanelLeftOpen,
  X,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useMediaQuery } from "usehooks-ts";

interface AdminSidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  onCollapse: () => void;
  onClose: () => void;
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

export const AdminSidebar = ({collapsed, mobileOpen, onCollapse, onClose}: AdminSidebarProps) => {
  const pathname = usePathname();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  if (isDesktop === undefined) {
    return null;
  }

  return (
    <>
      {/* Mobile Backdrop */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-40
              bg-black/60
              backdrop-blur-sm
              lg:hidden
            "
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}

      <motion.aside
        animate={{
          width: collapsed ? 88 : 288,
          x: isDesktop ? 0 : mobileOpen ? 0 : -320,
        }}
        transition={{
          duration: 0.25,
        }}
        className={cn(
          "fixed z-50 flex flex-col overflow-hidden border border-white/10 bg-slate-950/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.45)]",
          "left-0 top-0 bottom-0 w-[288px]",
          "lg:left-4 lg:top-4 lg:bottom-4 lg:rounded-3xl"
        )}
      >
        {/* Header */}

        <div className="border-b border-white/10 p-4">
          <div className="flex items-center justify-between">

            <div
              className={cn(
                "flex items-center",
                collapsed ? "justify-center w-full" : "gap-3"
              )}
            >
              <Image
                src="/images/logo.png"
                alt="Church Logo"
                width={42}
                height={42}
                className="shrink-0"
              />

              <AnimatePresence>
                {!collapsed && (
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    className="overflow-hidden"
                  >
                    <h2 className="font-semibold text-white whitespace-nowrap">
                      GCC UK
                    </h2>

                    <p className="text-xs text-slate-400">
                      Admin Console
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Collapse */}

            <div className="hidden lg:block">
              {!collapsed ? (
                <button
                  onClick={onCollapse}
                  className="
                    rounded-xl
                    p-2
                    bg-white/5
                    hover:bg-white/10
                    transition-colors
                  "
                >
                  <PanelLeftClose size={18} />
                </button>
              ) : (
                <button
                  onClick={onCollapse}
                  className="
                    absolute
                    right-3
                    top-5
                    rounded-lg
                    p-2
                    bg-white/5
                    hover:bg-white/10
                  "
                >
                  <PanelLeftOpen size={16} />
                </button>
              )}
            </div>

            {/* Mobile Close */}

            <button
              onClick={onClose}
              className="
                rounded-xl
                p-2
                bg-white/5
                hover:bg-white/10
                transition-colors
                lg:hidden
              "
            >
              <X size={18} />
            </button>

          </div>
        </div>

        {/* Navigation */}

        <TooltipProvider delayDuration={100}>
          <nav className="flex-1 overflow-y-auto p-3">
          {navigation.map((section) => (
          <div key={section.title} className="mb-6">
            {/* Section Title */}

            {!collapsed && (
              <p
                className="
                  mb-3
                  px-3
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                {section.title}
              </p>
            )}

            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;

                const active =
                  item.href === "/admin"
                    ? pathname === "/admin"
                    : pathname.startsWith(item.href);

                const link = (
                  <motion.div
                    whileHover={{
                      x: collapsed ? 0 : 6,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className={cn(
                      "group flex items-center rounded-xl py-3 text-sm transition-all duration-200",

                      collapsed
                        ? "justify-center px-0"
                        : "gap-3 px-4",

                      active
                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <Icon
                      size={20}
                      className={cn(
                        "shrink-0 transition-colors",
                        active
                          ? "text-white"
                          : "text-slate-400 group-hover:text-white"
                      )}
                    />

                    <AnimatePresence mode="wait">
                      {!collapsed && (
                        <motion.span
                          initial={{
                            opacity: 0,
                            x: -6,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          exit={{
                            opacity: 0,
                            x: -6,
                          }}
                          transition={{
                            duration: 0.15,
                          }}
                          className="whitespace-nowrap"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      if (!isDesktop) {
                        onClose();
                      }
                    }}
                  >
                    {collapsed ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          {link}
                        </TooltipTrigger>

                        <TooltipContent side="right">
                          {item.label}
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      link
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </TooltipProvider>
          {/* Footer */}

    <div className="border-t border-white/10 p-4">
    {collapsed ? (
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="
              flex
              h-12
              items-center
              justify-center
              rounded-2xl
              bg-white/5
              text-xs
              font-semibold
              text-primary
            "
          >
            GCC
          </div>
        </TooltipTrigger>

        <TooltipContent side="right">
          Ministry OS
        </TooltipContent>
      </Tooltip>
    ) : (
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        className="
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-4
        "
      >
        <p className="text-sm font-semibold text-white">
          Ministry OS
        </p>

        <p className="mt-1 text-xs leading-relaxed text-slate-400">
          Secure church administration system
        </p>
      </motion.div>
    )}
  </div>
  </motion.aside>
  </>
  );
  };