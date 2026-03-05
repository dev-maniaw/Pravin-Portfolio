"use client";

import React from 'react';
import Image from 'next/image';

const VideoEditingShowcase: React.FC = () => {
  const shorts = [
    { id: 1, src: "/clients/Videos/Beauty Of Open Worlds.mp4", title: "Beauty of Open Worlds", category: "CINEMATIC / TRAVEL" },
    { id: 2, src: "/clients/Videos/Rockstar Games.mp4", title: "Rockstar Style Edit", category: "ACTION / GAMING" },
    { id: 3, src: "/clients/Videos/Music Aura.mp4", title: "Music Aura", category: "CREATIVE / MOTION" },
    { id: 4, src: "/clients/Videos/Top 5 Gaming Moments.mp4", title: "Top 5 Gaming Moments", category: "GAMING / MONTAGE" },
    { id: 5, src: "/clients/Videos/Zewa Birdoo.mp4", title: "Zewa Birdoo", category: "BRAND / COMMERCIAL" },
    { id: 6, src: "/clients/Videos/Trade Games Ad.mp4", title: "Trade Games Ad", category: "AD / MOTION GFX" },
    { id: 7, src: "/clients/Videos/Buy Console.mp4", title: "Buy Console" },
    { id: 8, src: "/clients/Videos/Sell Console.mp4", title: "Sell Console" },
    { id: 9, src: "/clients/Videos/RENOVAR 1.mp4", title: "Renovar V1" },
    { id: 10, src: "/clients/Videos/RENOVAR 3.mp4", title: "Renovar V3" },
    { id: 11, src: "/clients/Videos/Sc 12.0 V1.mp4", title: "SC 12.0" },
    { id: 12, src: "/clients/Videos/Sc 13.0 V1.mp4", title: "SC 13.0" },
    { id: 13, src: "/clients/Videos/Sg 5 V1.mp4", title: "SG 5" },
    { id: 14, src: "/clients/Videos/Steel Doors.mp4", title: "Steel Doors" },
    { id: 15, src: "/clients/Videos/T-Medly.mp4", title: "T-Medly" },
    { id: 16, src: "/clients/Videos/Tg 7.0 V1.mp4", title: "TG 7.0" },
    { id: 17, src: "/clients/Videos/Trade Games.mp4", title: "Trade Games" },
    { id: 18, src: "/clients/Videos/Trade Games 2.0.mp4", title: "Trade Games 2.0" },
    { id: 19, src: "/clients/Videos/ROM.mp4", title: "ROM" }
  ];

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 md:size-6 text-[#c1121f]">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: "24X7 Support",
      description: "On WhatsApp, Discord, Slack, Google Meet, and Zoom."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 md:size-6 text-[#c1121f]">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: "Trust > Money",
      description: "Building lasting partnerships over short-term gains."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 md:size-6 text-[#c1121f]">
          <path d="m13 2-2 10h8L7 22l2-10H1L13 2z" />
        </svg>
      ),
      title: "Fast Delivery",
      description: "Your task will be prioritized for quick turnaround."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 md:size-6 text-[#c1121f]">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: "Reliability",
      description: "Consistent quality and performance you can count on."
    }
  ];

  const [activeVideo, setActiveVideo] = React.useState<string | null>(null);
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Dynamic masonry column distribution
  const visibleCount = isExpanded ? shorts.length : 6;
  const visibleShorts = shorts.slice(0, visibleCount);
  const itemsPerCol = Math.ceil(visibleShorts.length / 3);

  const columns = [
    visibleShorts.slice(0, itemsPerCol),
    visibleShorts.slice(itemsPerCol, itemsPerCol * 2),
    visibleShorts.slice(itemsPerCol * 2),
  ];

  return (
    <section className="w-full bg-black">
      {/* Massive Video Editing Hero Section */}
      <div id="video-editing" className="w-full min-h-screen scroll-mt-24 md:scroll-mt-32 px-4 md:px-6 lg:px-0 py-16 md:py-20 lg:py-16 xl:py-20 flex items-center justify-center fade-section">
        <div className="max-w-[1440px] xl:max-w-[1536px] 2xl:max-w-[1600px] w-full md:w-[85%] lg:w-[90%] relative overflow-hidden aspect-[4/5] sm:aspect-[16/9] md:aspect-[2/1] lg:aspect-[2.35/1] xl:aspect-[2.4/1] flex items-center justify-center rounded-[20px] md:rounded-[24px] lg:rounded-[20px] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] border border-white/5 bg-[#161616]">
          {/* Background Text Overlay */}
          <div className="absolute top-[13%] left-0 w-full flex flex-col items-center justify-center z-0 pointer-events-none select-none">
            <h1 className="text-[#c1121f] font-normal font-display uppercase leading-[0.8] whitespace-normal md:whitespace-nowrap w-full text-[28vw] lg:text-[400px] text-center opacity-80">
              VIDEO EDITING
            </h1>
          </div>

          {/* Central Character Illustration */}
          <div className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f51d294f-28fd-449d-8e31-0c9fdae1cdc0-harshallax-page/assets/images/harshalaax_video_editing-BX8nY3rk-12.webp"
              alt="Video Editing Character"
              width={1600}
              height={900}
              className="w-[210%] max-w-none md:w-[84%] lg:w-[78%] h-auto object-contain translate-y-[2px]"
              priority
            />
          </div>
        </div>
      </div>

      {/* Trust Badges / Features Grid */}
      <div className="w-full max-w-[1440px] xl:max-w-[1536px] mx-auto px-4 md:px-6 lg:px-12 mb-16 md:mb-24 lg:mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="glass p-6 md:p-8 rounded-[20px] transition-all duration-300 hover:border-[#c1121f]/30 group"
            >
              <div className="mb-4 md:mb-6 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-white font-display text-xl md:text-2xl font-bold uppercase mb-2">
                {feature.title.includes('>') ? (
                  <>
                    <span className="text-[#c1121f]">TRUST</span>
                    <span className="mx-2 text-white/40">&gt;</span>
                    <span>MONEY</span>
                  </>
                ) : feature.title}
              </h3>
              <p className="text-white/60 font-body text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3-Column Masonry Video Grid */}
      <div className="w-full max-w-[1440px] xl:max-w-[1536px] mx-auto pb-12 md:pb-20 lg:pb-24 px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4 md:gap-6">
              {column.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveVideo(item.src)}
                  className="relative w-full rounded-[20px] bg-[#161616] border border-white/5 hover:border-[#c1121f]/50 overflow-hidden group cursor-pointer"
                >
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 z-10 transition-opacity">
                    <span className="font-body text-[8px] md:text-[9px] font-bold tracking-widest text-white/80 uppercase">
                      {(item as any).category || "PORTFOLIO"}
                    </span>
                  </div>
                  {/* Mute/Speaker Icon */}
                  <div className="absolute top-4 right-4 size-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center z-10">
                    <svg className="size-3 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <line x1="23" y1="9" x2="17" y2="15"></line>
                      <line x1="17" y1="9" x2="23" y2="15"></line>
                    </svg>
                  </div>
                  {/* Play Overlay (Bottom Left) */}
                  <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 z-10 flex items-center gap-2 transition-opacity">
                    <svg className="size-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span className="font-body text-[8px] md:text-[9px] font-bold tracking-wider text-white uppercase mt-[1px]">PLAY</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {shorts.length > 6 && (
          <div className="w-full flex flex-col items-center justify-center mt-12 md:mt-20">
            <span
              className="font-body text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-4 transition-colors hover:text-white cursor-pointer select-none"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "LOAD LESS" : "LOAD MORE"}
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="size-10 md:size-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/30 transition-all duration-300 group"
              aria-label={isExpanded ? "Load less videos" : "Load more videos"}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`size-4 text-white/50 group-hover:text-white transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Full-Screen Video Modal (Zoom-like) */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setActiveVideo(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 md:top-8 md:right-8 z-[101] size-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#c1121f] hover:scale-110 text-white transition-all duration-300 shadow-xl"
            aria-label="Close video"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-6">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Video Container (Click stops propagation so it doesn't close modal) */}
          <div
            className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center p-4 md:p-0"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo}
              autoPlay
              controls
              className="w-full h-auto max-h-[90vh] object-contain rounded-[16px] md:rounded-[32px] shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoEditingShowcase;