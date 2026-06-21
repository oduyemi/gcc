"use client";
import { motion } from "framer-motion";
import { Bell, Search, ChevronDown } from "lucide-react";


export const AdminTopbar = () => {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="
        sticky
        top-0
        z-40
        border-b
        border-white/20
        bg-white/30
        backdrop-blur-xl
      "
    >
      <div className="flex h-20 items-center justify-between px-6 lg:px-8">
        {/* Search */}

        <div className="relative hidden md:block">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />

          <input
            placeholder="Search..."
            className="
              glass
              w-80
              rounded-2xl
              py-3
              pl-11
              pr-4
              text-sm
              focus:outline-none
              focus:ring-2
              focus:ring-primary/20
            "
          />
        </div>

        {/* Right */}

        <div className="ml-auto flex items-center gap-4">
          <button
            className="
              glass
              relative
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
            "
          >
            <Bell size={18} />

            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-primary" />
          </button>

          <button
            className="
              glass
              flex
              items-center
              gap-3
              rounded-2xl
              px-3
              py-2
            "
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-semibold">
              PO
            </div>

            <div className="hidden text-left md:block">
              <p className="text-sm font-semibold">
                Pastor Opeyemi
              </p>

              <p className="text-xs text-muted-foreground">
                Administrator
              </p>
            </div>

            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </motion.header>
  );
};