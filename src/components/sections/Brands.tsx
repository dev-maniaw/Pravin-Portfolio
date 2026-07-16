import React from 'react';
import Image from 'next/image';
import { r2 } from '@/lib/r2';

const BRANDS = [
  { name: "Bodhitva", logo: r2('Logo/Bodhitva.png') },
  { name: "Connectwoods", logo: r2('Logo/Connectwoods.png') },
  { name: "Cansaa", logo: r2('Logo/Cansaa.png') },
  { name: "GameNation", logo: r2('Logo/Gamenation.png') },
  { name: "Kadal Suvai", logo: r2('Logo/Kadal Suvai.png') },
  { name: "Kassa", logo: r2('Logo/Kassa.png') },
  { name: "Dr. Poorani's Dentistry", logo: r2('Logo/Dr.Poorani_s Dentistry.png') },
  { name: "Renovar", logo: r2('Logo/Renovar.png') },
  { name: "Simta Astrix", logo: r2('Logo/Simta Astrix.png') },
  { name: "Susan Future Technologies", logo: r2('Logo/Susan Future Technologies.png') },
  { name: "Sky Dental", logo: r2('Logo/Sky Dental.png') },
  { name: "Swix", logo: r2('Logo/Swix.png') },
  { name: "T-Medly", logo: r2('Logo/T-Medly.png') },
  { name: "Wonchance", logo: r2('Logo/Wonchance.png') },
  { name: "Wonkrew", logo: r2('Logo/Wonkrew.png') },
  { name: "Zewa", logo: r2('Logo/Zewa.png') },
];

const BrandItem = ({ brand, keyPrefix }: { brand: { name: string; logo: string }; keyPrefix: string }) => (
  <div
    key={keyPrefix}
    className="inline-flex flex-col justify-center items-center select-none pointer-events-none min-w-fit"
  >
    <div className="relative size-[90px] sm:size-[100px] lg:size-[120px] xl:size-[140px] rounded-full overflow-hidden bg-white flex items-center justify-center shadow-lg p-2">
      <Image className="w-full h-full object-contain" src={brand.logo} alt={brand.name} width={140} height={140} loading="lazy" sizes="140px" />
    </div>
    <div className="mt-2 md:mt-3 text-white text-[10px] sm:text-xs lg:text-sm xl:text-base font-medium uppercase text-center font-['Montserrat'] tracking-tight max-w-[120px] md:max-w-[140px] leading-tight">
      {brand.name}
    </div>
  </div>
);

const Brands = () => {
  return (
    <section className="w-full mt-0 mb-4 md:my-0">
      <div className="w-full max-w-[1440px] xl:max-w-[1536px] 2xl:max-w-[1600px] h-64 md:h-72 lg:h-80 xl:h-96 relative overflow-hidden mx-auto mt-2 md:mt-8 lg:mt-6 rounded-xl fade-section bg-black">
        {/* Section Title */}
        <h2 className="left-[50%] -translate-x-1/2 top-[16px] md:top-[12px] lg:top-[16px] absolute text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-normal uppercase font-fiorello whitespace-nowrap z-10">
          <span className="text-white">Brands I</span> <span className="text-[#c1121f]">worked With</span>
        </h2>

        {/* Marquee Wrapper */}
        <div className="absolute left-0 right-0 top-[80px] sm:top-[90px] md:top-[85px] lg:top-[97px] xl:top-[110px]">
          <div className="relative flex overflow-hidden">
            {/* Primary marquee track */}
            <div className="flex animate-marquee items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-14 pr-8 sm:pr-10 lg:pr-12 xl:pr-14">
              {BRANDS.map((brand, idx) => (
                <BrandItem key={`a-${idx}`} brand={brand} keyPrefix={`a-${idx}`} />
              ))}
              {BRANDS.map((brand, idx) => (
                <BrandItem key={`b-${idx}`} brand={brand} keyPrefix={`b-${idx}`} />
              ))}
            </div>
            {/* Duplicate track for seamless loop */}
            <div className="flex animate-marquee items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-14 pr-8 sm:pr-10 lg:pr-12 xl:pr-14" aria-hidden="true">
              {BRANDS.map((brand, idx) => (
                <BrandItem key={`c-${idx}`} brand={brand} keyPrefix={`c-${idx}`} />
              ))}
              {BRANDS.map((brand, idx) => (
                <BrandItem key={`d-${idx}`} brand={brand} keyPrefix={`d-${idx}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
