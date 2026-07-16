"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { AdminSidebar } from "@/components/admin/Sidebar";
import { AdminTopbar } from "@/components/admin/Topbar";
import { cn } from "@/lib/utils";




export default function AdminLayout({children}: {children: React.ReactNode}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Animated Background */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px]" />

        <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-accent/20 blur-3xl sm:h-80 sm:w-80 lg:h-[400px] lg:w-[400px]" />

        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-chart-3/10 blur-3xl sm:h-96 sm:w-96 lg:h-[450px] lg:w-[450px]" />
      </motion.div>

      <div className="flex min-h-screen">
      <AdminSidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onCollapse={() => setCollapsed(!collapsed)}
        onClose={() => setMobileOpen(false)}
      />

        <main
          className={cn(
            "flex min-h-screen flex-1 flex-col min-w-0 overflow-x-hidden transition-all duration-300",
            collapsed ? "lg:ml-24" : "lg:ml-[304px]"
          )}
        >
          <AdminTopbar setMobileOpen={() => setMobileOpen(true)} />

          <div className="flex-1 px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}