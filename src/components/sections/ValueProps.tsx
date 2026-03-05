import React from 'react';
import { Phone, Award, Zap, CheckCircle2 } from 'lucide-react';

const ValueProps = () => {
  const values = [
    {
      icon: <Phone className="w-5 h-5 md:w-6 md:h-6" />,
      title: "24X7 SUPPORT",
      description: "On WhatsApp, Discord, Slack, Google Meet, and Zoom."
    },
    {
      icon: <Award className="w-5 h-5 md:w-6 md:h-6" />,
      title: "TRUST > MONEY",
      description: "Building lasting partnerships over short-term gains."
    },
    {
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
      title: "FAST DELIVERY",
      description: "Your task will be prioritized for quick turnaround."
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />,
      title: "RELIABILITY",
      description: "Consistent quality and performance you can count on."
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-black">
      <div className="container max-w-[1440px] xl:max-w-[1536px] mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {values.map((item, index) => (
            <div 
              key={index}
              className="group relative flex flex-col p-6 md:p-8 rounded-[20px] bg-[#1a1a1a]/40 border border-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-[#1a1a1a]/60 hover:border-white/10"
            >
              {/* Icon Container */}
              <div className="mb-6 text-[#c1121f] transition-transform duration-500 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl md:text-2xl text-[#c1121f] tracking-tight mb-3 uppercase">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm md:text-base text-white/50 leading-relaxed max-w-[240px]">
                {item.description}
              </p>

              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 shadow-[0_0_30px_rgba(193,18,31,0.05)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;