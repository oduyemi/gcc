"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: string;
  tone?: "blue" | "green" | "purple" | "amber" | "rose";
}

const toneMap = {
  blue: "bg-blue-500/20 text-blue-400",
  green: "bg-emerald-500/20 text-emerald-400",
  purple: "bg-purple-500/20 text-purple-400",
  amber: "bg-amber-500/20 text-amber-400",
  rose: "bg-rose-500/20 text-rose-400",
};

export const StatCard = ({
  title,
  value,
  icon: Icon,
  change,
  tone = "blue",
}: StatsCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="
        relative
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-6
        shadow-[0_10px_50px_rgba(0,0,0,0.35)]
        overflow-hidden
      "
    >
      {/* glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-60" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h3>

          {change && (
            <p className="mt-2 text-sm text-emerald-400">
              {change}
            </p>
          )}
        </div>

        <div
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            ${toneMap[tone]}
          `}
        >
          <Icon size={20} />
        </div>
      </div>
    </motion.div>
  );
};