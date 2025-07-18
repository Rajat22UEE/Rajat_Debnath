"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen bg-[#0a0a0a] text-white py-16 px-6 md:px-10 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px] z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-4xl font-bold">💼 Experience</h2>
          <p className="text-zinc-400 text-lg mt-2 max-w-2xl">
            A hands-on internship that honed my full-stack skills by publishing packages and building developer tools.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-5 gap-8">
          {/* Left Column – Role & Company */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-2"
          >
            <h3 className="text-xl font-semibold text-indigo-300">
              Web Development Intern
            </h3>
            <p className="text-zinc-400 mb-2">
              Yupcha Softwares Pvt. Ltd.
            </p>
            <p className="text-sm text-zinc-500">
              Jan 2025 – Apr 2025 (Remote)
            </p>
          </motion.div>

          {/* Right Column – Experience Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-3 bg-[#111] p-6 rounded-xl border border-zinc-800 shadow-md"
          >
            <ul className="list-disc list-inside text-zinc-300 space-y-3">
              <li>
                Published 2 fully functional and customizable NPM packages:
                <span className="text-blue-400"> `@rajat debnath/grayui`</span> – a component library, and
                <span className="text-blue-400"> `cli-package`</span> – a powerful CLI utility tool.
              </li>
              <li>
                Engineered developer-focused CLI tools for fetching UI components with features like dynamic directory creation,
                real-time validation, and error-handling.
              </li>
              <li>
                Improved team scalability by enabling modular, plug-and-play components with centralized logic and theming.
              </li>
              <li>
                Collaborated remotely using GitHub issues and pull requests, delivering weekly milestones under Agile sprints.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
