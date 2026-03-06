"use client";

import React from 'react';

const ExpertiseItem = ({
  number,
  title,
  level,
  description,
  targetId
}: {
  number: string;
  title: string;
  level: string;
  description: string;
  targetId: string;
}) => {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-10 border-b border-white/5 cursor-pointer transition-all duration-300"
    >
      <div className="flex items-center gap-4 md:gap-12">
        <span className="font-['Montserrat'] text-xs md:text-lg font-bold transition-colors duration-300 text-white/20 group-hover:text-[#c1121f]">
          {number}
        </span>
        <h3 className="font-fiorello text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase leading-[0.85] tracking-tight transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] transform origin-left text-white/80 group-hover:text-white group-hover:translate-x-4">
          {title}
        </h3>
      </div>

      {/* Desktop Reveal State */}
      <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 transition-all duration-500 transform origin-right opacity-0 md:translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 hidden md:flex">
        <span className="hidden md:block h-[2px] w-6 bg-[#c1121f]"></span>
        <div className="flex flex-col">
          <span className="font-['Montserrat'] uppercase font-bold text-[10px] md:text-xs tracking-[0.3em] text-[#c1121f]">
            {level}
          </span>
          <p className="max-w-[300px] text-white/60 text-xs font-['Montserrat'] leading-relaxed mt-1">
            {description}
          </p>
        </div>
        <svg
          className="w-4 h-4 md:w-5 md:h-5 text-[#c1121f] -rotate-44 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>

      {/* Mobile Always Visible State */}
      <div className="md:hidden mt-4">
        <p className="text-white/50 text-xs font-['Montserrat'] leading-relaxed max-w-[280px]">
          {description}
        </p>
      </div>
    </div>
  );
};

const Expertise = () => {
  const services = [
    {
      number: "01",
      title: "Video Editing",
      level: "Expert",
      description: "Expert cutting, pacing, and storytelling that hooks the audience from the first second.",
      targetId: "video-editing"
    },
    {
      number: "02",
      title: "Motion Graphics",
      level: "Expert",
      description: "Dynamic animations and kinetic typography that bring static designs to life.",
      targetId: "video-editing"
    },
    {
      number: "03",
      title: "Branding & Visual Design",
      level: "Advanced",
      description: "Crafting striking visual assets, thumbnails, and brand identities that demand clicks.",
      targetId: "gfx"
    },
    {
      number: "04",
      title: "Photography",
      level: "Expert",
      description: "Professional event and product photography with a cinematic eye.",
      targetId: "photography"
    }
  ];

  return (
    <section
      id="about"
      className="w-full relative py-20 md:py-40 bg-black overflow-hidden scroll-mt-12"
    >
      <div className="relative z-10 max-w-[1440px] xl:max-w-[1536px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-12 md:mb-20 flex items-center justify-between border-b border-white/10 pb-8 md:pb-10">
          <h2 className="text-[#c1121f] text-sm md:text-xl font-['Montserrat'] font-bold uppercase tracking-[0.4em]">
            My Expertise
          </h2>
        </div>

        {/* Expertise List */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <ExpertiseItem
              key={index}
              number={service.number}
              title={service.title}
              level={service.level}
              description={service.description}
              targetId={service.targetId}
            />
          ))}
        </div>
      </div>

      {/* Background Decorative Element (Subtle glow) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#c1121f]/5 blur-[120px] rounded-full pointer-events-none select-none"></div>
    </section>
  );
};

export default Expertise;