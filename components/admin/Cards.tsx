"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AdminCardProps {
  children: React.ReactNode;
  className?: string;
}

export const AdminCard = ({ children, className }: AdminCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={cn(
        `
        relative
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        shadow-[0_10px_50px_rgba(0,0,0,0.35)]
        overflow-hidden
        `,
        className
      )}
    >
      {/* subtle glow overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-70" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};