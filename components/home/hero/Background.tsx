"use client";
import { motion } from "framer-motion";


export const HeroBackground = () => {
  return (
    <>
      {/* =======================================================
          BASE EDITORIAL CANVAS
      ======================================================= */}
  
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_15%_15%,rgba(175,56,0,.08),transparent_28%),
          radial-gradient(circle_at_88%_20%,rgba(216,164,91,.12),transparent_34%),
          radial-gradient(circle_at_50%_45%,rgba(255,255,255,.92),transparent_52%),
          linear-gradient(180deg,#ffffff_0%,#fcfbfd_32%,#f7f3ef_100%)]
        "
      />
  
      {/* =======================================================
          PRINT NOISE
      ======================================================= */}
  
      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          mix-blend-multiply
          bg-[radial-gradient(circle,#8B5A2B_1px,transparent_1px)]
          [background-size:22px_22px]
        "
      />
  
      {/* =======================================================
          LARGE CENTRAL SPOTLIGHT
      ======================================================= */}
  
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.72, 0.95, 0.72],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[42%]
          h-[1200px]
          w-[1200px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white
          blur-[190px]
        "
      />
        {/* =======================================================
        WARM GOLD ATMOSPHERE
    ======================================================= */}

<motion.div
      animate={{
        x: [0, 40, 0],
        y: [0, -30, 0],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 22,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        -left-52
        top-[-120px]
        h-[900px]
        w-[900px]
        rounded-full
        bg-[#D8A45B]/12
        blur-[180px]
      "
    />

    {/* =======================================================
        WARM AMBER LIGHT
    ======================================================= */}

    <motion.div
      animate={{
        x: [0, -30, 0],
        y: [0, 40, 0],
        scale: [1, 1.06, 1],
      }}
      transition={{
        duration: 24,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        -right-40
        bottom-[-220px]
        h-[760px]
        w-[760px]
        rounded-full
        bg-[#AF3800]/10
        blur-[170px]
      "
    />

    {/* =======================================================
        EDITORIAL WATERMARK
    ======================================================= */}

    <div
      className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        select-none
        whitespace-nowrap
        font-black
        uppercase
        tracking-[-0.08em]
        text-[#8B5A2B]/[0.03]
        leading-none
      "
    >
      <div className="text-[15rem] xl:text-[18rem]">
        WORSHIP
      </div>

      <div
        className="
          -mt-12
          text-center
          text-[3rem]
          tracking-[0.75em]
          text-[#AF3800]/[0.05]
        "
      >
        GLOBAL CROSSFIRE CHURCH
      </div>
    </div>

    {/* =======================================================
        EDITORIAL DIAGONAL LIGHT STREAKS
    ======================================================= */}

    <div
      className="
        absolute
        left-[-12%]
        top-20
        h-px
        w-[45%]
        rotate-[12deg]
        bg-gradient-to-r
        from-transparent
        via-[#D8A45B]/20
        to-transparent
      "
    />

    <div
      className="
        absolute
        right-[-10%]
        bottom-28
        h-px
        w-[42%]
        -rotate-[12deg]
        bg-gradient-to-l
        from-transparent
        via-[#AF3800]/20
        to-transparent
      "
    />

        {/* =======================================================
        PREMIUM STATIC ARCS
    ======================================================= */}

<div
      className="
        absolute
        right-[4%]
        top-[8%]
        h-[520px]
        w-[520px]
        rounded-full
        border
        border-[#D8A45B]/10
      "
    />

    <div
      className="
        absolute
        right-[8%]
        top-[12%]
        h-[420px]
        w-[420px]
        rounded-full
        border
        border-[#AF3800]/10
      "
    />

    {/* =======================================================
        SOFT LEFT ARC
    ======================================================= */}

    <div
      className="
        absolute
        -left-[240px]
        top-[38%]
        h-[650px]
        w-[650px]
        rounded-full
        border
        border-[#8B5A2B]/8
      "
    />

    {/* =======================================================
        SUBTLE CROSS ACCENTS
    ======================================================= */}

    <motion.div
      animate={{
        opacity: [0.2, 0.55, 0.2],
        y: [0, -8, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
      }}
      className="
        absolute
        left-[12%]
        top-[22%]
        text-[#AF3800]/60
      "
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M10 2V18M2 10H18"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>

    <motion.div
      animate={{
        opacity: [0.15, 0.45, 0.15],
        y: [0, 10, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
      }}
      className="
        absolute
        right-[18%]
        bottom-[22%]
        text-[#D8A45B]/55
      "
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M10 2V18M2 10H18"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>

    {/* =======================================================
        ORGANIC GLASS HAZE
    ======================================================= */}

    <motion.div
      animate={{
        x: [0, 35, 0],
        y: [0, -25, 0],
        rotate: [0, 6, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        left-[30%]
        top-[18%]
        h-[360px]
        w-[360px]
        rounded-[45%]
        bg-white/40
        blur-[100px]
      "
    />

    <motion.div
      animate={{
        x: [0, -30, 0],
        y: [0, 25, 0],
        rotate: [0, -8, 0],
      }}
      transition={{
        duration: 24,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        right-[28%]
        bottom-[18%]
        h-[300px]
        w-[300px]
        rounded-[40%]
        bg-[#D8A45B]/12
        blur-[100px]
      "
    />

    {/* =======================================================
        FLOATING LIGHT PARTICLES
    ======================================================= */}

    <motion.div
      animate={{
        y: [0, -25, 0],
        opacity: [0.25, 0.7, 0.25],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        left-[25%]
        top-[35%]
        h-2
        w-2
        rounded-full
        bg-[#AF3800]
        shadow-[0_0_30px_rgba(175,56,0,.7)]
      "
    />

    <motion.div
      animate={{
        y: [0, 20, 0],
        opacity: [0.2, 0.55, 0.2],
      }}
      transition={{
        duration: 11,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        right-[35%]
        top-[25%]
        h-1.5
        w-1.5
        rounded-full
        bg-[#D8A45B]
        shadow-[0_0_30px_rgba(216,164,91,.6)]
      "
    />

    <motion.div
      animate={{
        y: [0, -15, 0],
        opacity: [0.15, 0.45, 0.15],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        right-[12%]
        top-[45%]
        h-2
        w-2
        rounded-full
        bg-[#AF3800]
        shadow-[0_0_35px_rgba(175,56,0,.5)]
      "
    />
  </>
  );
};