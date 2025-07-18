"use client";
import React from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
} from "lucide-react";

export default function Connect() {
  return (
    <section id="connect" className="bg-[#0a0a0a] text-white py-12 px-6 md:px-10 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Heading */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">📬 Get in Touch</h2>
          <p className="text-zinc-400">
            Feel free to reach out for collaborations, freelance opportunities, or just to say hi!
          </p>
        </div>

        {/* Contact Links */}
        <div className="col-span-1">
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3 text-zinc-300">
              <Mail className="w-4 h-4 text-indigo-400" />
              <a href="mailto:rajatnath6909@gmail.com" className="hover:underline">
                rajatnath6909@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-zinc-300">
              <Phone className="w-4 h-4 text-indigo-400" />
              <a href="tel:+916909802009" className="hover:underline">
                +91 6909802009
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="col-span-1">
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3 text-zinc-300">
              <Linkedin className="w-4 h-4 text-indigo-400" />
              <a
                href="https://linkedin.com/in/rajat-debnath/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                /rajat-debnath
              </a>
            </li>
            <li className="flex items-center gap-3 text-zinc-300">
              <Github className="w-4 h-4 text-indigo-400" />
              <a
                href="https://github.com/Rajat22UEE"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @Rajat22UEE
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Rajat Debnath. All rights reserved.
      </div>
    </section>
  );
}
