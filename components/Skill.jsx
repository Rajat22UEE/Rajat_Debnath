"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Braces,
  MonitorSmartphone,
  Server,
  GitBranch,
  Database,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5 text-indigo-400" />,
    skills: ["C", "C++", "Python", "JavaScript"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <MonitorSmartphone className="w-5 h-5 text-indigo-400" />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "FastAPI"],
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5 text-indigo-400" />,
    skills: ["SQLite"],
  },
  {
    title: "Tools & Others",
    icon: <GitBranch className="w-5 h-5 text-indigo-400" />,
    skills: ["REST APIs", "Git", "GitHub"],
  },
];

export default function Skill() {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#0a0a0a] text-white py-16 px-6 md:px-10 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px] z-0 pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-4xl font-bold">🛠️ Skills</h2>
          <p className="text-zinc-400 text-lg mt-2 max-w-2xl">
            A comprehensive stack of technologies and tools I’ve used to build real-world projects across frontend, backend, and dev workflows.
          </p>
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#111] p-6 rounded-xl border border-zinc-800 shadow-md"
            >
              <div className="flex items-center gap-2 mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold text-indigo-300">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-zinc-800 text-zinc-300 text-sm px-3 py-1 rounded-full border border-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
