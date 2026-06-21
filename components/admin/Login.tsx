"use client";
import { motion } from "framer-motion";
import { Lock, Mail, ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const LoginForm = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center p-6">
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl"
      >
        {/* Left Side Image */}
        <div className="relative hidden lg:block lg:w-1/2">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/admin.jpg')",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-blue-950/60" />

          <div className="relative flex h-full flex-col justify-end p-10 text-white">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-4xl font-bold leading-tight">
                Welcome Back
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Access the Global Crossfire Church UK administration portal.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Side Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full p-8 md:p-12 lg:w-1/2"
        >
          <motion.div variants={itemVariants} className="mb-10 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg">
              <Lock size={28} />
            </div>

            <h1 className="text-3xl font-bold text-slate-900">
              Global Crossfire Church UK
            </h1>

            <p className="mt-2 text-slate-500">
              Sign in to continue to your dashboard
            </p>
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants} className="mb-5">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </motion.div>

          {/* Password */}
          <motion.div variants={itemVariants}>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">
                Password
              </label>

              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Forgot Password?
              </a>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
            />
          </motion.div>

          {/* Login Button */}
          <motion.div variants={itemVariants} className="mt-8">
            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-semibold text-white shadow-lg transition hover:bg-seondary"
            >
              Login
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-8 text-center text-sm text-slate-500"
          >
            Secure Church Administration Portal
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};