"use client";

import React from 'react';
import Image from 'next/image';
import { r2 } from '@/lib/r2';

const photos = [
    // Row 1 — People / Portrait
    { src: r2('Photography/1000086542.jpg.jpg'), alt: "Photography 1" },
    { src: r2('Photography/DSC_0810.JPG.jpg'),   alt: "Photography 6" },
    { src: r2('Photography/DSC_0822.JPG.jpg'),   alt: "Photography 7" },
    { src: r2('Photography/DSC_0826.JPG.jpg'),   alt: "Photography 8" },
    // Row 2 — Products
    { src: r2('Photography/DSC_0401.jpg'),       alt: "Photography 2" },
    { src: r2('Photography/DSC_0411.jpg'),       alt: "Photography 3" },
    { src: r2('Photography/DSC_0430.jpg'),       alt: "Photography 4" },
    { src: r2('Photography/DSC_0440.jpg'),       alt: "Photography 5" },
    // Row 3 — People / Portrait
    { src: r2('Photography/_DSC0159.jpg'),       alt: "Photography 9"  },
    { src: r2('Photography/_DSC0174.jpg'),       alt: "Photography 10" },
    { src: r2('Photography/_DSC0178.jpg'),       alt: "Photography 11" },
    { src: r2('Photography/_DSC0344.jpg'),       alt: "Photography 12" },
];

// Dark shimmer placeholder shown while image loads
const shimmerBase64 =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUzMyIgZmlsbD0iIzE2MTYxNiIvPjwvc3ZnPg==";

const Photography = () => {
    return (
        <section id="photography" className="bg-black py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1536px]">
                {/* Section Header */}
                <div className="mb-12 md:mb-16">
                    <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white/90 leading-[0.85] tracking-tight">
                        PHOTO<span className="text-[#c1121f]">GRAPHY</span>
                    </h2>
                </div>

                {/* Photo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#161616] border border-white/5 transition-all duration-500 hover:border-[#c1121f]/40 hover:scale-[1.02]"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                loading="lazy"
                                unoptimized
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                placeholder="blur"
                                blurDataURL={shimmerBase64}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Photography;
