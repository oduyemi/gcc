"use client";
import { motion } from "framer-motion";


export const HeroBackground = () => {
  return (
    <>
      {/* Base Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#faf8ff] to-[#fff8f3]" />

      {/* Grid Texture */}
      <div
        className="
          absolute inset-0
          opacity-[0.035]
          [background-image:linear-gradient(to_right,#22007C_1px,transparent_1px),linear-gradient(to_bottom,#22007C_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      {/* Purple Ambient Light */}
      <motion.div
        animate={{
          y: [0, -50, 0],
          x: [0, 20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-40
          top-0
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#22007C]/10
          blur-[160px]
        "
      />

      {/* Gold Ambient Light */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-32
          bottom-[-120px]
          h-[640px]
          w-[640px]
          rounded-full
          bg-[#AF3800]/10
          blur-[160px]
        "
      />

      {/* Central Light */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white
          blur-[120px]
        "
      />

      {/* Decorative Ring */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          right-[8%]
          top-[12%]
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-[#22007C]/6
        "
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 150,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          right-[5%]
          top-[9%]
          h-[500px]
          w-[500px]
          rounded-full
          border
          border-[#AF3800]/5
        "
      />

      {/* Floating Accent */}
      <motion.div
        animate={{
          y: [0, -18, 0],
          opacity: [0.25, 0.6, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          left-[14%]
          top-[18%]
          h-4
          w-4
          rounded-full
          bg-[#AF3800]
          shadow-[0_0_35px_#AF3800]
        "
      />

      <motion.div
        animate={{
          y: [0, 22, 0],
          opacity: [0.15, 0.45, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          right-[22%]
          bottom-[22%]
          h-3
          w-3
          rounded-full
          bg-[#22007C]
          shadow-[0_0_30px_#22007C]
        "
      />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </>
  );
};