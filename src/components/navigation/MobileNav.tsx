"use client";

import React, { useState, useEffect } from "react";
import { Home, Play, Layers, UserRound } from "lucide-react";

/**
 * MobileNav Component
 * 
 * A fixed bottom navigation bar for mobile devices.
 * Features:
 * - Glassmorphic background (backdrop-blur-xl)
 * - Focused/Active state with primary red color (#c1121f)
 * - Centered floating pill shape
 * - Smooth transitions
 */
// Navigation items mapping to sections on the page (static, defined outside component to avoid dependency issues)
const NAV_ITEMS = [
  { id: "home", icon: Home, label: "Home" },
  { id: "video-editing", icon: Play, label: "Video" },
  { id: "gfx", icon: Layers, label: "GFX" },
  { id: "contact", icon: UserRound, label: "About" },
] as const;

export default function MobileNav() {
  const [activeTab, setActiveTab] = useState("home");

  const handleScroll = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Update active state based on scroll position
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/5 rounded-full px-5 py-2 flex items-center justify-center gap-6 shadow-2xl">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className={`h-10 w-10 flex items-center justify-center transition-all duration-300 outline-none ${
              isActive 
                ? "text-[#c1121f] scale-110" 
                : "text-white/40 hover:text-white/60"
            }`}
            aria-label={item.label}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
          </button>
        );
      })}
    </nav>
  );
}