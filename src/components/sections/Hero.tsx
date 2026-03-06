"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const SKILLS = [
  "Storytelling & Hooks",
  "Color Grading",
  "Audio Syncing",
  "Kinetic Typography",
  "Transitions & Effects",
  "Logo Creation",
  "Product Shooting",
  "Digital Marketing"
];
const TOOLS = [
  "DaVinci Resolve",
  "After Effects",
  "Premiere Pro",
  "Photoshop",
  "Illustrator",
  "Lightroom",
  "Canva"
];

const EXPERIENCE = [
  { role: "Video Editor & Motion Designer", company: "GameNation", period: "OCT 2024 — PRESENT" },
  { role: "Video Editor & Digital Analyst", company: "Coco Chai", period: "JUN 2024 — SEPT 2024" },
  { role: "Video Editor", company: "Wonkrew", period: "JUN 2023 — MAY 2024" },
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxValue = scrollY * 0.3;

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-[#111111] overflow-hidden select-none font-body"
    >
      {/* ── Background Portrait Photo ── */}
      <div
        className="absolute top-0 right-0 bottom-0 w-full md:w-[60%] z-0"
        style={{ transform: `translateY(${parallaxValue * 0.15}px)` }}
      >
        <Image
          src="/clients/Banners/GFX-banner-1.jpeg"
          alt="Praveen Thangavel"
          fill
          priority
          className="object-cover object-center md:object-right opacity-70"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        {/* Cinematic Overlays to blend with left dark area */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-90" />
      </div>

      {/* Red Glow mapped to eyes in reference */}
      <div className="absolute top-[40%] left-1/2 md:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[20vw] bg-red-600/30 rounded-[100%] blur-[100px] pointer-events-none z-[1]" />

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-[1536px] mx-auto px-6 md:px-12 lg:px-16 pt-32 md:pt-40 pb-12 min-h-[100dvh] flex flex-col justify-between">

        {/* Top Section */}
        <div className="relative z-20 mt-20 md:mt-20">
          {/* Portfolio Label */}
          <div className="flex items-center gap-4 mb-4 md:mb-6 text-white/50">
            <div className="w-8 md:w-16 h-[1px] bg-[#c1121f]" />
            <span className="font-body text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
              PORTFOLIO 2022 PRESENT
            </span>
          </div>

          <h1
            className="font-fiorello text-transparent text-[22vw] md:text-[180px] lg:text-[220px] uppercase leading-[0.85] tracking-widest relative z-10"
            style={{
              WebkitTextStroke: '1px #c1121f',
            }}
          >
            PRAVEEN <span className="text-[#c1121f] opacity-80 pl-2"></span>
          </h1>

          {/* Solid Last Name overlapping slightly */}
          <h2
            className="font-fiorello text-white text-[16vw] md:text-[120px] lg:text-[150px] uppercase leading-[0.8] tracking-widest relative top-1 md:-top-4 z-20"
          >
            THANGAVEL
          </h2>

          {/* Role Tags with extending red line */}
          <div className="flex items-center w-full mt-8 md:mt-2">
            <span className="font-body text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/40 pr-4 md:pr-8 whitespace-nowrap">
              VIDEO EDITOR · MOTION GRAPHIC DESIGNER · BRAND & VISUAL DESIGNER
            </span>
            <div className="h-[1px] bg-[#c1121f]/60 flex-grow" />
          </div>
        </div>

        {/* Bottom Section - Stats, Skills, Experience */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 mt-16 border-t border-white/10 pt-8 md:pt-10 z-20 relative bg-[#111111]/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-2xl md:rounded-none">

          {/* ── Stats ── */}
          <div className="md:col-span-4 flex flex-row gap-8 md:gap-12 items-start justify-between md:justify-start pr-0 md:pr-4">

            <div className="flex flex-col gap-2 md:gap-3">
              <span className="font-fiorello text-5xl md:text-6xl text-[#c1121f] leading-none tracking-normal">
                150+
              </span>
              <span className="font-body text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                PROJECTS
              </span>
            </div>

            <div className="flex flex-col gap-2 md:gap-3">
              <span className="font-fiorello text-5xl md:text-6xl text-[#c1121f] leading-none tracking-normal">
                10M+
              </span>
              <span className="font-body text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                VIEWS
              </span>
            </div>

            <div className="flex flex-col gap-2 md:gap-3">
              <span className="font-fiorello text-5xl md:text-6xl text-[#c1121f] leading-none tracking-normal whitespace-nowrap">
                3 YRS
              </span>
              <span className="font-body text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                EXPERIENCE
              </span>
            </div>

          </div>

          {/* ── Skills & Tools ── */}
          <div className="md:col-span-4 flex flex-col gap-6 md:pl-8 border-l-0 md:border-l border-white/10">
            {/* Skills */}
            <div>
              <h4 className="font-body text-[8px] uppercase tracking-[0.2em] font-bold text-white/50 mb-4">
                SKILLS
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 rounded-[20px] border border-white/10 bg-transparent text-white/60 text-[8px] md:text-[9px] font-medium tracking-[0.05em]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="mt-2">
              <h4 className="font-body text-[8px] uppercase tracking-[0.2em] font-bold text-white/50 mb-4">
                TOOLS
              </h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {TOOLS.map((tool) => (
                  <span key={tool} className="text-white/60 font-medium text-[8px] md:text-[9px] tracking-wide">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Experience ── */}
          <div className="md:col-span-4 md:pl-8 border-l-0 md:border-l border-white/5">
            <h4 className="font-body text-[8px] uppercase tracking-[0.2em] font-medium text-white/40 mb-4">
              EXPERIENCE
            </h4>
            <div className="flex flex-col gap-4">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="flex items-start justify-between pb-3 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="pr-4">
                    <p className="font-body text-[11px] text-white/90 font-bold mb-1">
                      {exp.role}
                    </p>
                    <p className="font-body text-[9px] text-white/40">
                      {exp.company}
                    </p>
                  </div>
                  <span className="font-body text-[9px] text-[#c1121f] font-bold tracking-wider pt-0.5 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}