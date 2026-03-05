import React from 'react';
import Image from 'next/image';

const GFXShowcase = () => {
  // Assets mapped from the provided list and screenshots
  const bentoImages = [
    {
      url: "/clients/GFX/0.jpeg",
      className: "col-span-1 row-span-2 rounded-2xl md:rounded-3xl object-cover h-full",
      alt: "GFX Project 0"
    },
    {
      url: "/clients/GFX/1 (1).png",
      className: "col-span-1 row-span-1 rounded-2xl md:rounded-3xl object-cover h-full",
      alt: "GFX Project 1"
    },
    {
      url: "/clients/GFX/2.png",
      className: "col-span-1 row-span-1 rounded-2xl md:rounded-3xl object-cover h-full",
      alt: "GFX Project 2"
    },
    {
      url: "/clients/GFX/3 (1).png",
      className: "col-span-1 row-span-1 rounded-2xl md:rounded-3xl object-cover h-full",
      alt: "GFX Project 3"
    },
    {
      url: "/clients/GFX/3 (2).png",
      className: "col-span-1 row-span-1 rounded-2xl md:rounded-3xl object-cover h-full",
      alt: "GFX Project 4"
    },
    {
      url: "/clients/GFX/4.png",
      className: "col-span-1 row-span-2 rounded-2xl md:rounded-3xl object-cover h-full",
      alt: "GFX Project 5"
    },
    {
      url: "/clients/GFX/5.png",
      className: "col-span-2 row-span-1 rounded-2xl md:rounded-3xl object-cover h-full",
      alt: "GFX Project 6"
    }
  ];

  return (
    <section id="gfx" className="w-full bg-black py-20 md:py-32 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-[5%] relative z-10">
        {/* Massive Outlined GFX Header */}
        <div className="flex flex-col items-center justify-center mb-16 md:mb-24">
          <h2
            className="font-display text-[150px] sm:text-[220px] md:text-[300px] lg:text-[400px] leading-none uppercase select-none opacity-20"
            style={{
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.4)',
              color: 'transparent'
            }}
          >
            GFX
          </h2>
          <div className="max-w-xl text-center -mt-8 md:-mt-16">
            <p className="font-body text-sm md:text-base text-muted-foreground uppercase tracking-[0.3em] font-bold">
              Make your visuals unforgettable
            </p>
            <p className="font-body text-[10px] md:text-xs text-white/40 mt-3 md:mt-4 max-w-sm mx-auto leading-relaxed">
              Expert Lightroom edits, Photoshop retouches, and poster design that stops the scroll.
            </p>
          </div>
        </div>

        {/* Masonry Grid Layout to respect Og size (1:1, 4:5, etc.) */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {[
            { url: "/clients/GFX/0.jpeg", alt: "GFX Showcase" },
            { url: "/clients/GFX/1 (1).png", alt: "GFX Showcase" },
            { url: "/clients/GFX/2.png", alt: "GFX Showcase" },
            { url: "/clients/GFX/3 (1).png", alt: "GFX Showcase" },
            { url: "/clients/GFX/3 (2).png", alt: "GFX Showcase" },
            { url: "/clients/GFX/4.png", alt: "GFX Showcase" },
            { url: "/clients/GFX/5.png", alt: "GFX Showcase" },
            { url: "/clients/GFX/6.png", alt: "GFX Showcase" },
            { url: "/clients/GFX/Flossing.jpg", alt: "GFX Showcase" },
            { url: "/clients/GFX/KS NY.png", alt: "GFX Showcase" },
            { url: "/clients/GFX/MADRAS.png", alt: "GFX Showcase" },
            { url: "/clients/GFX/ROM SEPT 13.png", alt: "GFX Showcase" },
            { url: "/clients/GFX/ROM.jpg", alt: "GFX Showcase" }
          ].map((item, idx) => (
            <div key={idx} className="break-inside-avoid relative group overflow-hidden rounded-2xl md:rounded-[24px] border border-white/5 bg-[#161616] p-1">
              <Image
                src={item.url}
                alt={item.alt}
                width={800}
                height={1000}
                className="w-full h-auto object-cover rounded-xl md:rounded-[20px] transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
            </div>
          ))}

          {/* Special "Click for Photography" Block appended to masonry */}
          <div className="break-inside-avoid flex flex-col items-center justify-center p-8 bg-black/40 border border-white/10 rounded-2xl md:rounded-[24px] min-h-[200px]">
            <div className="bg-[#c1121f]/20 p-4 rounded-full mb-4">
              <svg className="w-6 h-6 text-[#c1121f]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2zm0-10h2v8h-2z" />
              </svg>
            </div>
            <p className="font-body text-center text-xs md:text-sm uppercase font-bold tracking-widest text-white/50">
              Scroll for Photography
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default GFXShowcase;