"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Wrench, Github, Link } from "lucide-react";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiNpm,
  SiChartdotjs,
  SiNextdotjs,
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiC,
  SiExpress,
  SiFastapi,
  SiMysql,
  SiSqlite,
  SiVite,
  SiVercel,
  SiGithub,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

// TECH ICONS & DATA
const techIcons = {
  React: <SiReact className="text-cyan-400" />,
  Tailwind: <SiTailwindcss className="text-blue-400" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  CLI: <SiNodedotjs className="text-green-400" />,
  NPM: <SiNpm className="text-red-500" />,
  "Chart.js": <SiChartdotjs className="text-yellow-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
};

const techSkills = {
  Languages: [
    { name: "C", icon: <SiC className="text-blue-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
    { name: "Python", icon: <SiPython className="text-yellow-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  ],
  Development: [
    { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
    { name: "Express.js", icon: <SiExpress className="text-white" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-green-300" /> },
  ],
  Databases: [
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-300" /> },
    { name: "SQLite", icon: <SiSqlite className="text-yellow-200" /> },
  ],
  Tools: [
    { name: "REST APIs", icon: <Wrench className="w-4 h-4 text-yellow-400" /> },
    { name: "npm", icon: <SiNpm className="text-red-500" /> },
    { name: "Vite", icon: <SiVite className="text-purple-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-white" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "CI/CD", icon: <Wrench className="w-4 h-4 text-yellow-400" /> },
  ],
};

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
    name: "Spend Track",
    desc: "Modern expense tracker with intuitive UI.",
    repo: "https://github.com/Rajat22UEE/Spend_Track.git",
    live: "https://spend-track-sigma.vercel.app/",
    tech: ["Next.js", "React", "Chart.js"],
  },
];

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero */}
        <section className=" min-h-screen flex flex-col items-center justify-center">
          

          <div className="space-y-10">
            <p
              data-aos="fade-down"
              className="text-2xl md:text-3xl text-purple-300"
              style={{ fontFamily: "var(--font-hello)" }}
            >
              👋 Hello, I'm
            </p>
            <h1
              data-aos="zoom-in"
              className="text-6xl md:text-8xl font-extrabold text-white"
              style={{ fontFamily: "var(--font-name)" }}
            >
              Rajat Debnath
            </h1>
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-5xl text-indigo-300 font-semibold"
              style={{ fontFamily: "var(--font-title)" }}
            >
              💻 Full Stack Web Developer
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-lg leading-relaxed max-w-3xl text-zinc-300"
              style={{ fontFamily: "var(--font-desc)" }}
            >
              A{" "}
              <span className="text-purple-400 font-bold">
                Full Stack Developer
              </span>{" "}
              with{" "}
              <span className="text-pink-400 font-bold">
                excellence in design
              </span>
              , hands-on experience with modern{" "}
              <span className="text-blue-400 font-bold">
                frontend frameworks
              </span>
              , strong{" "}
              <span className="text-indigo-400 font-bold">backend logic</span>,
              and
              <span className="text-emerald-400 font-bold">
                {" "}
                team collaboration
              </span>
              .
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 border-t border-zinc-800" id="projects">
          <h2
            className="text-5xl font-bold mb-16 text-center"
            data-aos="zoom-in-up"
          >
            📁 Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((proj, i) => (
              <div
                key={proj.name}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-[#0f0f0f] border border-zinc-700 rounded-2xl p-6 shadow-md group transition-all hover:shadow-lg hover:shadow-indigo-500/20"
              >
                <h3 className="text-2xl font-bold text-indigo-400 flex items-center gap-2">
                  <Code className="w-6 h-6 text-indigo-300" /> {proj.name}
                </h3>
                <p className="text-zinc-300 mt-3">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.tech.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-2 text-sm bg-zinc-800 px-3 py-1 rounded-full border border-zinc-600"
                    >
                      {techIcons[tech] || <Wrench className="w-4 h-4" />}
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4 justify-end">
                  <a href={proj.repo} target="_blank" rel="noopener noreferrer">
                    <Github className="w-6 h-6 text-zinc-400 hover:text-white" />
                  </a>
                  <a href={proj.live} target="_blank" rel="noopener noreferrer">
                    <Link className="w-6 h-6 text-zinc-400 hover:text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="/Project"
              className="group w-full md:w-[80%] bg-[#0f0f0f] rounded-2xl border border-zinc-700 p-6 text-center shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
            >
              <h3
                className="text-2xl font-bold text-indigo-400 group-hover:scale-105 transition-transform"
                style={{ fontFamily: "Bungee" }}
              >
                🔍 See More Projects...
              </h3>
              <p className="text-zinc-400 text-base max-w-xl mx-auto">
                Explore more open source and side projects I’ve worked on.
              </p>
            </a>
          </div>
        </section>

        {/* Skills */}
        <section className="py-20 border-t border-zinc-800">
          <h2
            className="text-5xl font-bold mb-16 text-center"
            data-aos="zoom-in-up"
          >
            🧠 Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(techSkills).map(([category, items], i) => (
              <div
                key={category}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="bg-[#111] border border-zinc-700 rounded-xl p-6"
              >
                <h3 className="text-xl text-indigo-300 mb-4 font-semibold">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {items.map(({ name, icon }) => (
                    <li
                      key={name}
                      className="flex items-center gap-3 text-zinc-100"
                    >
                      <span className="text-lg">{icon}</span>
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 border-t border-zinc-800 bg-[#0e0e0e] text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-4xl font-bold text-indigo-300 mb-12"
              data-aos="fade-in"
            >
              📞 Contact Me
            </h2>

            <div
              className="flex justify-center gap-10 flex-wrap"
              data-aos="fade-up"
            >
              {/* Location */}
              <div className="relative group">
                <a
                  href="https://maps.google.com?q=Agartala,India"
                  target="_blank"
                >
                  <FaMapMarkerAlt className="text-indigo-400 text-2xl group-hover:scale-125 transition-transform" />
                </a>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Agartala, India
                </div>
              </div>

              {/* Phone */}
              <div className="relative group">
                <a href="tel:+916909802009">
                  <FaPhone className="text-green-400 text-2xl group-hover:scale-125 transition-transform" />
                </a>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  +91 6909802009
                </div>
              </div>

              {/* Email */}
              <div className="relative group">
                <a href="mailto:rajatnath6909@gmail.com">
                  <FaEnvelope className="text-yellow-400 text-2xl group-hover:scale-125 transition-transform" />
                </a>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  rajatnath6909@gmail.com
                </div>
              </div>

              {/* LinkedIn */}
              <div className="relative group">
                <a
                  href="https://www.linkedin.com/in/rajat-debnath/"
                  target="_blank"
                >
                  <FaLinkedin className="text-blue-500 text-2xl group-hover:scale-125 transition-transform" />
                </a>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  LinkedIn
                </div>
              </div>

              {/* GitHub */}
              <div className="relative group">
                <a href="https://github.com/Rajat22UEE" target="_blank">
                  <FaGithub className="text-white text-2xl group-hover:scale-125 transition-transform" />
                </a>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  GitHub
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
