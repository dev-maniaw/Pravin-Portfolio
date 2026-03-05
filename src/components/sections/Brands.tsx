import React from 'react';

const BRANDS = [
  { name: "Brand B", logo: "/clients/Logo/B.png" },
  { name: "CW", logo: "/clients/Logo/CW.png" },
  { name: "Cansaa", logo: "/clients/Logo/Cansaa.png" },
  { name: "GN", logo: "/clients/Logo/GN.png" },
  { name: "KS", logo: "/clients/Logo/KS.png" },
  { name: "Kassa", logo: "/clients/Logo/Kassa.png" },
  { name: "PD", logo: "/clients/Logo/PD.png" },
  { name: "R", logo: "/clients/Logo/R.png" },
  { name: "SA", logo: "/clients/Logo/SA.png" },
  { name: "SFT", logo: "/clients/Logo/SFT.png" },
  { name: "SK", logo: "/clients/Logo/SK.png" },
  { name: "Swix", logo: "/clients/Logo/Swix.png" },
  { name: "TM", logo: "/clients/Logo/TM.png" },
  { name: "WC", logo: "/clients/Logo/WC.png" },
  { name: "WK", logo: "/clients/Logo/WK.png" },
  { name: "Zewa", logo: "/clients/Logo/Zewa.png" },
];

const BrandItem = ({ brand, keyPrefix }: { brand: { name: string; logo: string }; keyPrefix: string }) => (
  <div
    key={keyPrefix}
    className="inline-flex flex-col justify-center items-center select-none pointer-events-none min-w-fit"
  >
    <div className="relative size-[90px] sm:size-[100px] lg:size-[120px] xl:size-[140px] rounded-full overflow-hidden bg-white flex items-center justify-center shadow-lg">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="w-full h-full object-cover" src={brand.logo} alt={brand.name} />
    </div>
    <div className="mt-2 md:mt-3 text-white text-sm sm:text-base lg:text-xl xl:text-2xl font-medium uppercase text-center font-['Montserrat'] tracking-tight">
      {brand.name}
    </div>
  </div>
);

const Brands = () => {
  return (
    <section className="w-full mt-0 mb-6 md:my-0">
      <div className="w-full max-w-[1440px] xl:max-w-[1536px] 2xl:max-w-[1600px] h-80 md:h-72 lg:h-80 xl:h-96 relative overflow-hidden mx-auto mt-6 md:mt-8 lg:mt-6 rounded-xl fade-section bg-black">
        {/* Section Title */}
        <h2 className="left-[50%] -translate-x-1/2 top-[16px] md:top-[12px] lg:top-[16px] absolute text-[#c1121f] text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-normal uppercase font-fiorello whitespace-nowrap z-10">
          Brands I worked With
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
