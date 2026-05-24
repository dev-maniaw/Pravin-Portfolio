"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show for 2s then fade out
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    const hideTimer = setTimeout(() => setVisible(false), 2800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-700 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6 select-none px-4 text-center w-full">
        {/* Big bold name — fills screen width */}
        <h1
          className="font-display font-black uppercase text-[#c1121f] leading-none w-full"
          style={{
            fontSize: "clamp(4.5rem, 18vw, 14rem)",
            letterSpacing: "0.08em",
          }}
        >
          PRAVEEN
        </h1>

        {/* Description */}
        <p
          className="font-body text-white/40 uppercase text-[10px] md:text-xs"
          style={{ letterSpacing: "0.45em" }}
        >
          CRAFTING VISUALS THAT SPEAK LOUDER
        </p>
      </div>
    </div>
  );
}
