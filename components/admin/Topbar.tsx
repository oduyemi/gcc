"use client";
import { motion } from "framer-motion";
import {
  Bell,
  Search,
  Menu,
  User,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AdminTopbarProps {
  setMobileOpen: () => void;
}


export const AdminTopbar = ({
  setMobileOpen,
}: AdminTopbarProps) => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="
        sticky
        top-0
        z-40
        border-b
        border-white/10
        bg-slate-950/60
        backdrop-blur-xl
      "
    >
      <div className="flex h-20 items-center gap-4 px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu */}

        <button
          onClick={() => setMobileOpen()}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-white/5
            transition-colors
            hover:bg-white/10
            lg:hidden
          "
          aria-label="Open navigation"
        >
          <Menu size={20} />
        </button>

        {/* Search */}

        <div className="relative hidden flex-1 md:block">
          <Search
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="search"
            placeholder="Search..."
            className="
              h-12
              w-full
              max-w-md
              rounded-2xl
              border
              border-white/10
              bg-white/5
              pl-11
              pr-4
              text-sm
              text-white
              placeholder:text-slate-500
              backdrop-blur-xl
              outline-none
              transition-all
              focus:border-primary
              focus:ring-2
              focus:ring-primary/20
            "
          />
        </div>

        <div className="ml-auto flex items-center gap-3">
          {/* Notifications */}

          <button
            className="
              relative
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/5
              transition-colors
              hover:bg-white/10
            "
            aria-label="Notifications"
          >
            <Bell size={18} />

            <span
              className="
                absolute
                right-3
                top-3
                h-2
                w-2
                rounded-full
                bg-primary
              "
            />
          </button>

          {/* Profile */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-3
                  py-2
                  transition-colors
                  hover:bg-white/10
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary
                    font-semibold
                    text-white
                  "
                >
                  PO
                </div>

                <div className="hidden text-left md:block">
                  <p className="text-sm font-semibold text-white">
                    Pastor Jane
                  </p>

                  <p className="text-xs text-slate-400">
                    Administrator
                  </p>
                </div>

                <ChevronDown
                  size={16}
                  className="hidden md:block"
                />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-56"
            >
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                My Profile
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="text-red-500 focus:text-red-500">
                <LogOut className="mr-2 h-4 w-4" />
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  );
};