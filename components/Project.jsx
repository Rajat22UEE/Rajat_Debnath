"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Mock Data
const projects = [
  {
    name: "🎬 MovieGlance",
    description: [
      "Real-time movie search with OMDb API",
      "Card flip animation & modal previews",
      "Responsive layout with Tailwind CSS"
    ],
    techStack: ["Next.js", "Tailwind CSS", "OMDb API"],
    github: "#",
    live: "#",
  },
  {
    name: "🐙 GitHub Profile Viewer",
    description: [
      "Fetch GitHub user data & repos",
      "Displays stars, forks & repo worth",
      "Optimized with Next.js routing"
    ],
    techStack: ["React", "Next.js", "GitHub API"],
    github: "#",
    live: "#",
  },
  {
    name: "🧮 DevTools Dashboard",
    description: [
      "A dashboard for monitoring developer tools",
      "Built with reusable UI components",
      "Light/dark mode & fully responsive"
    ],
    techStack: ["React", "Tailwind", "Chart.js"],
    github: "#",
    live: "#",
  }
];

export default function Project() {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#0a0a0a] text-white py-16 px-6 md:px-10 overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px] z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading Row */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold">🚀 Projects</h2>
          <Link
            href="/Project"
            className="text-indigo-400 hover:underline font-medium"
          >
            See more →
          </Link>
        </motion.div>

        {/* Optional Short Description */}
        <motion.p
          className="text-zinc-400 text-lg mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          A curated showcase of some of my favorite full-stack projects built with modern technologies.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#111] rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-zinc-800"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-indigo-300">
                {project.name}
              </h3>
              <ul className="text-zinc-300 list-disc list-inside space-y-1 mb-4">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <p className="text-sm text-zinc-400 mb-4">
                <strong>Tech Stack:</strong> {project.techStack.join(", ")}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
