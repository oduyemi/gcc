"use client";
import { motion } from "framer-motion";
import { AdminSidebar } from "@/components/admin/Sidebar";
import { AdminTopbar } from "@/components/admin/Topbar";
import { useState } from "react";


export default function AdminLayout({children}: {children: React.ReactNode;}) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
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
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-accent/20 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-chart-3/10 blur-3xl" />
      </motion.div>

      <div className="flex">
        <AdminSidebar
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        />
        <main
          className="
            flex-1
            min-h-screen
            ml-[304px]
          "
        >
          <AdminTopbar />

          <div className="p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}


