"use client";

import Contact from " @/components/Connect";
import Education from " @/components/Education";
import Experience from " @/components/Experience";
import HeroSection from " @/components/HeroSection";
import Project from " @/components/Project";
import Skill from " @/components/Skill";

export default function HomePage() {
  return (
    <>
    <div className="flex-row items-center justify-center w-[175vh]">
      <HeroSection />
      <Project />
      <Experience />
      <Skill />
      <Education />
      <Contact />
    </div>
    </>
  );
}
