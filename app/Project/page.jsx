"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Github,
  Link as LinkIcon,
  ArrowLeft,
  Wrench,
  ArrowUp,
} from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiCss3,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiChartdotjs,
} from "react-icons/si";
import { BiGitRepoForked } from "react-icons/bi";
import { FaTerminal } from "react-icons/fa";

const projects = [
  {
    name: "ToneRD",
    desc: "A CLI tool and React component library for fast UI development.",
    repo: "https://github.com/Rajat22UEE/ToneRD.git",
    live: "https://tone-rd.vercel.app/",
    tech: ["Next.js", "React", "CLI"],
  },
  {
    name: "Career Horizon",
    desc: "Internship/job finder platform with HR contacts.",
    repo: "https://github.com/Rajat22UEE/Career-Horizon.git",
    live: "https://career-horizon.vercel.app/",
    tech: ["Next.js", "React"],
  },
  {
    name: "To-Do App",
    desc: "Full-stack To-Do app with MongoDB Database.",
    repo: "https://github.com/Rajat22UEE/To-Do.git",
    live: "https://to-do-phi-ruddy.vercel.app/",
    tech: ["React", "MongoDB", "Node.js", "Express"],
  },
  {
    name: "Spend Track",
    desc: "Modern expense tracker with intuitive UI.",
    repo: "https://github.com/Rajat22UEE/Spend_Track.git",
    live: "https://spend-track-sigma.vercel.app/",
    tech: ["Next.js", "React", "Chart.js"],
  },
  {
    name: "MovieGlance",
    desc: "Search and discover movies with real-time info.",
    repo: "https://github.com/Rajat22UEE/MovieGlance.git",
    live: "https://movie-glance.vercel.app/",
    tech: ["React", "API", "Tailwind"],
  },
  {
    name: "Git View",
    desc: "Visualize GitHub profiles in a stylish layout.",
    repo: "https://github.com/Rajat22UEE/Git_View.git",
    live: "https://git-view-topaz.vercel.app/",
    tech: ["React", "GitHub API"],
  },
  {
    name: "AI Validator",
    desc: "AI-powered content validator for fast and accurate checks.",
    repo: "https://github.com/Rajat22UEE/AI_Validator.git",
    live: "https://ai-validator.vercel.app/",
    tech: ["React", "LocalStorage", "Tailwind"],
  },
  {
    name: "Routes",
    desc: "Practice dynamic routing with React Router.",
    repo: "https://github.com/Rajat22UEE/Routes.git",
    live: "https://routes-livid.vercel.app/",
    tech: ["React", "React Router"],
  },
  {
    name: "Counter",
    desc: "Simple counter app to practice state management.",
    repo: "https://github.com/Rajat22UEE/counter.git",
    live: "https://counter-three-red.vercel.app/",
    tech: ["React", "Hooks"],
  },
  {
    name: "DoneZ",
    desc: "Task management app to simplify your day.",
    repo: "https://github.com/Rajat22UEE/DoneZ.git",
    live: "https://done-z.vercel.app/",
    tech: ["React", "LocalStorage", "Tailwind"],
  },
  {
    name: "BG Changer",
    desc: "Instant background color switcher.",
    repo: "https://github.com/Rajat22UEE/BG_Changer.git",
    live: "https://bg-changer-smoky.vercel.app/",
    tech: ["React", "CSS"],
  },
  {
    name: "Password Generator",
    desc: "Customizable password generator with strength indicator.",
    repo: "https://github.com/Rajat22UEE/Password-generator.git",
    live: "https://password-generator-liart-omega-97.vercel.app/",
    tech: ["React", "JavaScript", "Tailwind"],
  },
];

const techIcons = {
  React: <SiReact className="text-cyan-400" />,
  Tailwind: <SiTailwindcss className="text-blue-400" />,
  JavaScript: <SiJavascript className="text-yellow-300" />,
  CSS: <SiCss3 className="text-blue-500" />,
  API: <BiGitRepoForked className="text-pink-400" />,
  "GitHub API": <Github className="text-gray-300" />,
  Hooks: <Wrench className="text-orange-300" />,
  LocalStorage: <Wrench className="text-lime-400" />,
  "React Router": <Wrench className="text-rose-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  "Node.js": <SiNodedotjs className="text-green-400" />,
  Express: <SiExpress className="text-zinc-300" />,
  "Chart.js": <SiChartdotjs className="text-red-400" />,
  CLI: <FaTerminal className="text-zinc-200" />,
};

export default function ProjectPage() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen text-white px-4 py-10 max-w-6xl mx-auto relative">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 border border-indigo-400 text-zinc-300 rounded-lg transition-all duration-300 hover:bg-indigo-500/10 hover:border-indigo-300 hover:text-indigo-200 hover:shadow-[0_0_10px_rgba(129,140,248,0.4)]"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </Link>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4 text-indigo-400">
        📁 Projects
      </h1>
      <p className="text-center text-lg text-zinc-400 mb-12 max-w-3xl mx-auto">
        A curated showcase of some of my favorite full-stack projects built with modern technologies.
      </p>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.name}
            className="relative group bg-[#111111] rounded-2xl border border-zinc-700 p-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-indigo-500 hover:bg-[#1a1a1a] hover:scale-105"
          >
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold text-indigo-300 group-hover:scale-105 transition-transform">
                {project.name}
              </h3>
              <p className="text-zinc-200 text-lg font-medium">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-sm text-white hover:scale-105 transition"
                  >
                    {techIcons[tech] || <Wrench className="w-4 h-4" />}
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex justify-end gap-4">
                {/* GitHub Button */}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link text-zinc-400 hover:text-indigo-300 flex items-center gap-1 transition hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm group-hover/link:underline">GitHub</span>
                </a>

                {/* Live Button */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link text-zinc-400 hover:text-indigo-300 flex items-center gap-1 transition hover:scale-110"
                >
                  <LinkIcon className="w-5 h-5" />
                  <span className="text-sm group-hover/link:underline">Live</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll to Top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
