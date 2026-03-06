import React from 'react';
import { Phone, Award, Zap, CheckCircle2 } from 'lucide-react';

const ValueProps = () => {
  const values = [
    {
      icon: <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#c1121f]" />,
      title: "24X7 SUPPORT",
      description: "On WhatsApp, Discord, Slack, Google Meet, and Zoom."
    },
    {
      icon: <Award className="w-5 h-5 md:w-6 md:h-6 text-[#c1121f]" />,
      title: "TRUST > MONEY",
      description: "Building lasting partnerships over short-term gains."
    },
    {
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6 text-[#c1121f]" />,
      title: "FAST DELIVERY",
      description: "Your task will be prioritized for quick turnaround."
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#c1121f]" />,
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
              className="glass p-6 md:p-8 rounded-[20px] transition-all duration-300 hover:border-[#c1121f]/30 group"
            >
              <div className="mb-4 md:mb-6 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-white font-display text-xl md:text-2xl font-bold uppercase mb-2">
                {item.title.includes('>') ? (
                  <>
                    <span className="text-[#c1121f]">TRUST</span>
                    <span className="mx-2 text-white/40">&gt;</span>
                    <span>MONEY</span>
                  </>
                ) : item.title}
              </h3>
              <p className="text-white/60 font-body text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;