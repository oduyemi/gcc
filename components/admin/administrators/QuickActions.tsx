"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  CalendarDays,
  ShieldCheck,
  Images,
  Mail,
  Heart,
  UserPlus,
  Plus,
} from "lucide-react";

import { AdminCard } from "../Cards";
import { CreateAdminDialog } from "../dialog/CreateAdmin";

const actions = [
  {
    title: "Manage Blog",
    icon: FileText,
    href: "/admin/blog",
  },
  {
    title: "Create Meeting",
    icon: CalendarDays,
    href: "/admin/events",
  },
  {
    title: "Manage Gallery",
    icon: Images,
    href: "/admin/gallery",
  },
  {
    title: "Prayer Requests",
    icon: Heart,
    href: "/admin/forms/prayer-requests",
  },
  {
    title: "Contact Entries",
    icon: Mail,
    href: "/admin/forms/contact",
  },
  {
    title: "New To GCC",
    icon: UserPlus,
    href: "/admin/forms/new-to-gcc",
  },
  {
    title: "View All Forms",
    icon: Plus,
    href: "/admin/forms",
  },
];

export const AdminQuickActions = () => {
  const [createAdminOpen, setCreateAdminOpen] = useState(false);

  return (
    <>
      <AdminCard>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">
            Quick Actions
          </h2>

          <Plus
            className="text-primary"
            size={20}
          />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {/* Create Administrator */}

          <motion.button
            type="button"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => setCreateAdminOpen(true)}
            className="
              group
              rounded-2xl
              border
              border-primary/30
              bg-primary/10
              p-4
              text-left
              transition-all
              hover:border-primary/50
              hover:bg-primary/20
            "
          >
            <div
              className="
                mb-3
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-primary
                text-white
              "
            >
              <ShieldCheck size={18} />
            </div>

            <p className="text-sm font-medium text-white">
              Add Administrator
            </p>
          </motion.button>

          {/* Other Actions */}

          {actions.map((action, index) => {
            const Icon = action.icon;

            return (
              <Link
                key={action.title}
                href={action.href}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: (index + 1) * 0.05,
                  }}
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    group
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-4
                    transition-all
                    hover:border-primary/30
                    hover:bg-white/[0.06]
                  "
                >
                  <div
                    className="
                      mb-3
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-primary/15
                      text-primary
                    "
                  >
                    <Icon size={18} />
                  </div>

                  <p className="text-sm font-medium text-white">
                    {action.title}
                  </p>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </AdminCard>

      <CreateAdminDialog
        open={createAdminOpen}
        onOpenChange={setCreateAdminOpen}
      />
    </>
  );
};