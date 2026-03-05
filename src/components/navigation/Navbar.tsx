"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "PORTFOLIO", href: "#expertise" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12 md:py-6",
        isScrolled ? "bg-black/80 backdrop-blur-lg border-b border-white/5 py-3 md:py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-[1536px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="group">
          <span className="text-white text-xl md:text-2xl font-logo tracking-tighter transition-transform duration-300 group-hover:scale-105 block whitespace-nowrap">
            Praveen Thangavel
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/60 hover:text-[#c1121f] text-sm font-display tracking-[0.2em] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hire Me Button */}
        <Link
          href="#contact"
          className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 hover:border-[#c1121f] hover:bg-[#c1121f] text-white transition-all duration-300 group"
        >
          <span className="text-xs font-display tracking-[0.2em]">HIRE ME</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#c1121f] group-hover:bg-white animate-pulse" />
        </Link>
      </div>
    </nav>
  );
}
