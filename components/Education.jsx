"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, School2 } from "lucide-react";

const educationList = [
  {
    title: "National Institute of Technology, Agartala",
    degree: "B.Tech in Electrical Engineering",
    duration: "2022 – 2026 (Expected)",
    icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
    details: "Relevant Courses: Data Structures, Algorithms, OOP",
  },
  {
    title: "Belonia Vidyapith H.S. School",
    degree: "Higher Secondary Education",
    duration: "2019 – 2021",
    icon: <School2 className="w-5 h-5 text-indigo-400" />,
    details: "Science Stream (Physics, Chemistry, Mathematics)",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative min-h-screen bg-[#0a0a0a] text-white py-16 px-6 md:px-10 overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px] z-0 pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-4xl font-bold">🎓 Education</h2>
          <p className="text-zinc-400 text-lg mt-2 max-w-2xl">
            My academic background, providing the strong foundation for my journey into full-stack development and software engineering.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#111] p-6 rounded-xl border border-zinc-800 shadow-md"
            >
              <div className="flex items-center gap-2 mb-3">
                {edu.icon}
                <h3 className="text-lg font-semibold text-indigo-300">{edu.title}</h3>
              </div>
              <p className="text-zinc-100 font-medium">{edu.degree}</p>
              <p className="text-zinc-400 text-sm">{edu.duration}</p>
              <p className="text-zinc-400 text-sm mt-2">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
