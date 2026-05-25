"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { r2 } from '@/lib/r2';

// Lazy video: sets src + plays only when in viewport, pauses when out
const LazyVideo = ({ src, className }: { src: string; className?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={isInView ? src : undefined}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      className={className}
    />
  );
};

const VideoEditingShowcase: React.FC = () => {
  const shorts = [
    { id: 1,  src: r2('Videos/VIDEO 1.mp4'),  title: "Video 1",  category: "BRAND / COMMERCIAL", isVertical: false },
    { id: 2,  src: r2('Videos/VIDEO 2.mp4'),  title: "Video 2",  category: "BRAND / AD",         isVertical: false },
    { id: 3,  src: r2('Videos/VIDEO 3.mp4'),  title: "Video 3",  category: "ACTION / GAMING",    isVertical: true  },
    { id: 4,  src: r2('Videos/VIDEO 4.mp4'),  title: "Video 4",  category: "CREATIVE / MOTION",  isVertical: true  },
    { id: 5,  src: r2('Videos/VIDEO 5.mp4'),  title: "Video 5",  category: "GAMING / MONTAGE",   isVertical: true  },
    { id: 6,  src: r2('Videos/VIDEO 6.mp4'),  title: "Video 6",  category: "PORTFOLIO",          isVertical: true  },
    { id: 7,  src: r2('Videos/VIDEO 7.mp4'),  title: "Video 7",  category: "BRAND / COMMERCIAL", isVertical: true  },
    { id: 8,  src: r2('Videos/VIDEO 8.mp4'),  title: "Video 8",  category: "CINEMATIC",          isVertical: true  },
    { id: 9,  src: r2('Videos/VIDEO 9.mp4'),  title: "Video 9",  category: "ACTION / GAMING",    isVertical: false },
    { id: 10, src: r2('Videos/VIDEO 10.mp4'), title: "Video 10", category: "GAMING / MONTAGE",   isVertical: false },
    { id: 11, src: r2('Videos/VIDEO 11.mp4'), title: "Video 11", category: "PORTFOLIO",          isVertical: true  },
    { id: 12, src: r2('Videos/VIDEO 12.mp4'), title: "Video 12", category: "BRAND / AD",         isVertical: true  },
    { id: 13, src: r2('Videos/VIDEO 13.mp4'), title: "Video 13", category: "CREATIVE / MOTION",  isVertical: true  },
    { id: 14, src: r2('Videos/VIDEO 14.mp4'), title: "Video 14", category: "PORTFOLIO",          isVertical: true  },
    { id: 15, src: r2('Videos/VIDEO 15.mp4'), title: "Video 15", category: "PORTFOLIO",          isVertical: true  },
    { id: 16, src: r2('Videos/VIDEO 16.mp4'), title: "Video 16", category: "BRAND / COMMERCIAL", isVertical: true  },
  ];

  const services = [
    { title: "VIDEO EDITING", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f51d294f-28fd-449d-8e31-0c9fdae1cdc0-harshallax-page/assets/images/harshalaax_video_editing-BX8nY3rk-12.webp" },
    { title: "MOTION GRAPHICS", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f51d294f-28fd-449d-8e31-0c9fdae1cdc0-harshallax-page/assets/images/harshalaax_video_editing-BX8nY3rk-12.webp" }, // Placeholder image
    { title: "SHORT FORM", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f51d294f-28fd-449d-8e31-0c9fdae1cdc0-harshallax-page/assets/images/harshalaax_video_editing-BX8nY3rk-12.webp" }, // Placeholder image
    { title: "LONG FORM", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f51d294f-28fd-449d-8e31-0c9fdae1cdc0-harshallax-page/assets/images/harshalaax_video_editing-BX8nY3rk-12.webp" }, // Placeholder image
    { title: "COLOR GRADING", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f51d294f-28fd-449d-8e31-0c9fdae1cdc0-harshallax-page/assets/images/harshalaax_video_editing-BX8nY3rk-12.webp" } // Placeholder image
  ];

  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [services.length]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Separate landscape and portrait videos
  const isMobile = windowWidth > 0 && windowWidth < 768;
  const landscapeVideos = shorts.filter(v => !v.isVertical);
  const topLandscapeVideos = landscapeVideos.slice(0, 2);
  const bottomLandscapeVideos = landscapeVideos.slice(2);
  
  const portraitVideos = shorts.filter(v => v.isVertical);
  const portraitVideos1 = portraitVideos.slice(0, 6);
  const portraitVideos2 = portraitVideos.slice(6);

  // Masonry distribution for portrait videos 1 (Videos 3 to 8)
  const numCols = isMobile ? 2 : 3;
  const columns1: typeof shorts[] = Array.from({ length: numCols }, () => []);
  const colHeights1 = Array(numCols).fill(0);
  portraitVideos1.forEach((item) => {
    const minIdx = colHeights1.indexOf(Math.min(...colHeights1));
    columns1[minIdx].push(item);
    colHeights1[minIdx] += 2;
  });

  // Masonry distribution for portrait videos 2 (Videos 11 to 16)
  const columns2: typeof shorts[] = Array.from({ length: numCols }, () => []);
  const colHeights2 = Array(numCols).fill(0);
  portraitVideos2.forEach((item) => {
    const minIdx = colHeights2.indexOf(Math.min(...colHeights2));
    columns2[minIdx].push(item);
    colHeights2[minIdx] += 2;
  });

  return (
    <section className="w-full bg-black">
      {/* Auto-changing Hero Section */}
      <div id="video-editing" className="w-full min-h-[50vh] md:min-h-[70vh] lg:min-h-screen scroll-mt-20 md:scroll-mt-32 px-4 md:px-6 lg:px-0 py-8 md:py-20 lg:py-16 xl:py-20 flex items-center justify-center fade-section">
        <div className="max-w-[1440px] xl:max-w-[1536px] 2xl:max-w-[1600px] w-full md:w-[85%] lg:w-[90%] relative overflow-hidden aspect-[4/5] sm:aspect-[16/9] md:aspect-[2/1] lg:aspect-[2.35/1] xl:aspect-[2.4/1] flex items-center justify-center rounded-[20px] md:rounded-[24px] lg:rounded-[20px] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] border border-white/5 bg-[#161616]">
          {/* Background Text Overlay */}
          <div className="absolute top-[13%] left-0 w-full flex flex-col items-center justify-center z-0 pointer-events-none select-none">
            <h1 className="text-[#c1121f] font-normal font-display uppercase leading-[0.8] whitespace-normal md:whitespace-nowrap w-full text-[20vw] md:text-[80px] lg:text-[180px] xl:text-[220px] text-center opacity-80 transition-all duration-500 transform">
              {services[currentServiceIndex].title}
            </h1>
          </div>

          {/* Central Character Illustration */}
          <div className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none transition-opacity duration-500">
            <Image
              src={r2('Banners/pr.webp')}
              alt="Praveen Thangavel"
              width={1600}
              height={900}
              className="w-[210%] max-w-none md:w-[84%] lg:w-[78%] h-auto object-contain translate-y-[2px]"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>



      {/* Video Grid */}
      <div className="w-full max-w-[1440px] xl:max-w-[1536px] mx-auto pb-12 md:pb-20 lg:pb-24 px-4 md:px-6 lg:px-12">

        {/* Row 1 — Top Landscape videos (16:9) - Videos 1 and 2 */}
        {topLandscapeVideos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-3 md:mb-6">
            {topLandscapeVideos.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveVideo(item.src)}
                className="relative w-full aspect-video rounded-[12px] md:rounded-[20px] bg-[#161616] border border-white/5 hover:border-[#c1121f]/50 overflow-hidden group cursor-pointer"
              >
                <LazyVideo src={item.src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                {/* Category Badge */}
                <div className="absolute top-2 left-2 md:top-4 md:left-4 px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 z-10">
                  <span className="font-body text-[11px] md:text-base font-bold tracking-widest text-white/80 uppercase">
                    {(item as any).category || "PORTFOLIO"}
                  </span>
                </div>
                {/* Mute Icon */}
                <div className="absolute top-2 right-2 md:top-4 md:right-4 size-7 md:size-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center z-10">
                  <svg className="size-3 md:size-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <line x1="23" y1="9" x2="17" y2="15"></line>
                    <line x1="17" y1="9" x2="23" y2="15"></line>
                  </svg>
                </div>
                {/* Play */}
                <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 z-10 flex items-center gap-1 md:gap-2">
                  <svg className="size-3 md:size-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                  <span className="font-body text-[11px] md:text-base font-bold tracking-wider text-white uppercase mt-[1px]">PLAY</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Row 2 — Portrait videos (9:16) masonry - Videos 3 to 8 */}
        {portraitVideos1.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 items-start">
            {columns1.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-3 md:gap-6">
                {column.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveVideo(item.src)}
                    className="relative w-full rounded-[12px] md:rounded-[20px] bg-[#161616] border border-white/5 hover:border-[#c1121f]/50 overflow-hidden group cursor-pointer"
                  >
                    <LazyVideo src={item.src} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                    {/* Category Badge */}
                    <div className="absolute top-2 left-2 md:top-4 md:left-4 px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 z-10">
                      <span className="font-body text-[11px] md:text-base font-bold tracking-widest text-white/80 uppercase">
                        {(item as any).category || "PORTFOLIO"}
                      </span>
                    </div>
                    {/* Mute Icon */}
                    <div className="absolute top-2 right-2 md:top-4 md:right-4 size-7 md:size-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center z-10">
                      <svg className="size-3 md:size-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <line x1="23" y1="9" x2="17" y2="15"></line>
                        <line x1="17" y1="9" x2="23" y2="15"></line>
                      </svg>
                    </div>
                    {/* Play */}
                    <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 z-10 flex items-center gap-1 md:gap-2">
                      <svg className="size-3 md:size-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                      <span className="font-body text-[11px] md:text-base font-bold tracking-wider text-white uppercase mt-[1px]">PLAY</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Row 3 — Bottom Landscape videos (16:9) - Videos 9 and 10 */}
        {bottomLandscapeVideos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mt-3 md:mt-6 mb-3 md:mb-6">
            {bottomLandscapeVideos.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveVideo(item.src)}
                className="relative w-full aspect-video rounded-[12px] md:rounded-[20px] bg-[#161616] border border-white/5 hover:border-[#c1121f]/50 overflow-hidden group cursor-pointer"
              >
                <LazyVideo src={item.src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                {/* Category Badge */}
                <div className="absolute top-2 left-2 md:top-4 md:left-4 px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 z-10">
                  <span className="font-body text-[11px] md:text-base font-bold tracking-widest text-white/80 uppercase">
                    {(item as any).category || "PORTFOLIO"}
                  </span>
                </div>
                {/* Mute Icon */}
                <div className="absolute top-2 right-2 md:top-4 md:right-4 size-7 md:size-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center z-10">
                  <svg className="size-3 md:size-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <line x1="23" y1="9" x2="17" y2="15"></line>
                    <line x1="17" y1="9" x2="23" y2="15"></line>
                  </svg>
                </div>
                {/* Play */}
                <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 z-10 flex items-center gap-1 md:gap-2">
                  <svg className="size-3 md:size-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                  <span className="font-body text-[11px] md:text-base font-bold tracking-wider text-white uppercase mt-[1px]">PLAY</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Row 4 — Portrait videos (9:16) masonry - Videos 11 to 16 (Only visible when expanded) */}
        {isExpanded && portraitVideos2.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 items-start animate-in fade-in slide-in-from-top-4 duration-500">
            {columns2.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-3 md:gap-6">
                {column.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveVideo(item.src)}
                    className="relative w-full rounded-[12px] md:rounded-[20px] bg-[#161616] border border-white/5 hover:border-[#c1121f]/50 overflow-hidden group cursor-pointer"
                  >
                    <LazyVideo src={item.src} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                    {/* Category Badge */}
                    <div className="absolute top-2 left-2 md:top-4 md:left-4 px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 z-10">
                      <span className="font-body text-[11px] md:text-base font-bold tracking-widest text-white/80 uppercase">
                        {(item as any).category || "PORTFOLIO"}
                      </span>
                    </div>
                    {/* Mute Icon */}
                    <div className="absolute top-2 right-2 md:top-4 md:right-4 size-7 md:size-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center z-10">
                      <svg className="size-3 md:size-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <line x1="23" y1="9" x2="17" y2="15"></line>
                        <line x1="17" y1="9" x2="23" y2="15"></line>
                      </svg>
                    </div>
                    {/* Play */}
                    <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 z-10 flex items-center gap-1 md:gap-2">
                      <svg className="size-3 md:size-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                      <span className="font-body text-[11px] md:text-base font-bold tracking-wider text-white uppercase mt-[1px]">PLAY</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Load More Button — for portrait videos */}
        {portraitVideos2.length > 0 && (
          <div className="w-full flex flex-col items-center justify-center mt-12 md:mt-20">
            <span
              className="font-body text-sm md:text-base font-bold uppercase tracking-[0.2em] text-white/50 mb-4 transition-colors hover:text-white cursor-pointer select-none"
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
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
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