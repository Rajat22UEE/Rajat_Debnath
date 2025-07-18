"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="introduction"
      className="relative bg-[#0a0a0a] text-white min-h-screen flex items-center overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex items-center justify-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          {/* "Myself" */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl text-purple-400 tracking-wider uppercase"
          >
            👤 Myself
          </motion.p>

          {/* Name with fade-up animation */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-extrabold"
          >
            Rajat Debnath
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-2xl md:text-4xl text-indigo-300 font-semibold"
          >
            💻 Full Stack Website Developer
          </motion.h2>

          {/* Short Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-center md:text-left text-lg md:text-2xl text-zinc-300 font-medium max-w-2xl mt-4"
          >
            I design immersive digital experiences that empower brands and users alike 🚀
          </motion.p>
        </div>
      </div>
    </section>
  );
}
