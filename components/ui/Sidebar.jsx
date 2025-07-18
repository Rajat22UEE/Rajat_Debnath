'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  User,
  FolderKanban,
  Briefcase,
  Settings,
  GraduationCap,
  Mail,
} from 'lucide-react';

const navItems = [
  { label: 'Introduction', href: '#introduction', icon: <User size={18} /> },
  { label: 'Projects', href: '#projects', icon: <FolderKanban size={18} /> },
  { label: 'Experience', href: '#experience', icon: <Briefcase size={18} /> },
  { label: 'Skills', href: '#skills', icon: <Settings size={18} /> },
  { label: 'Education', href: '#education', icon: <GraduationCap size={18} /> },
  { label: 'Connect', href: '#connect', icon: <Mail size={18} /> },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-full md:w-64 bg-[#0a0a0a] text-white px-6 py-8 shadow-lg border-r border-zinc-800">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          {/* Glowing ring */}
          <div className="absolute inset-0 rounded-full border-4 border-purple-500 shadow-[0_0_60px_10px_rgba(168,85,247,0.4)] z-0" />
          {/* Image */}
          <div className="absolute inset-1 rounded-full overflow-hidden z-10">
            <Image
              src="/Rajat-pic.png"
              alt="Rajat Debnath"
              fill
              sizes="(max-width: 768px) 128px, 100vw"
              className="object-cover object-[45%_0%]"
              priority
            />
          </div>
        </div>
        <h2 className="mt-4 text-xl font-semibold">Rajat Debnath</h2>
      </div>

      {/* Navigation */}
      <nav className="mt-10 space-y-4">
        {navItems.map(({ label, href, icon }) => (
          <Link
            key={label}
            href={href}
            className="group flex items-center gap-3 text-zinc-300 hover:text-white transition-colors duration-200 relative"
          >
            <span>{icon}</span>
            <span className="text-base font-medium">{label}</span>
            {/* Underline hover effect */}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </nav>
    </aside>
  );
}
