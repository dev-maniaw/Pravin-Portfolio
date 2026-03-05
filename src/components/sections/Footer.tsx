import React from 'react';
import { Mail, Instagram, Linkedin, MessageCircle } from 'lucide-react';

/**
 * Footer Component
 * 
 * A dark cinematic footer featuring the "HARSHALLAX" logo in primary red,
 * categorized navigation links, legal links, and a grid of social media icons.
 * Consistent with the high-level design system's Dark Cinematic aesthetic.
 */
const Footer: React.FC = () => {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Video Editing', href: '#video-editing' },
    { label: 'GFX', href: '#gfx' },
    { label: 'Videos', href: '#videos' },
    { label: 'About', href: '#about' },
  ];

  const legalLinks = [
    { label: 'License', href: '/license' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ];

  const socialLinks = [
    { icon: <Mail size={18} />, href: 'mailto:contact@praveenthangavel.com' },
    { icon: <Instagram size={18} />, href: 'https://instagram.com' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com' },
    { icon: <XIcon />, href: 'https://twitter.com' },
    { icon: <UpworkIcon />, href: 'https://upwork.com' },
    { icon: <MessageCircle size={18} />, href: 'https://wa.me' },
    { icon: <RedDotIcon />, href: '#' },
  ];

  return (
    <footer className="w-full bg-black pt-20 pb-0 overflow-hidden">
      <div className="container mx-auto px-[5%] lg:px-[8%]">
        <div className="grid grid-cols-1 justify-between md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 items-start mb-20">

          {/* Brand Logo Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <h2 className="text-[#c1121f] text-4xl md:text-5xl lg:text-5xl font-logo font-normal uppercase leading-[0.85] tracking-tight select-none">
              Praveen<br />Thangavel
            </h2>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] font-['Montserrat'] mb-2">
              Navigation
            </h3>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#c1121f] transition-colors duration-300 text-xs font-bold uppercase tracking-[0.1em] font-['Montserrat'] whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] font-['Montserrat'] mb-2">
              Legal
            </h3>
            <ul className="flex flex-col gap-4">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#c1121f] transition-colors duration-300 text-xs font-bold uppercase tracking-[0.1em] font-['Montserrat'] whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Grid */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] font-['Montserrat'] mb-2">
              Socials
            </h3>
            <div className="grid grid-cols-3 gap-3 w-fit">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#c1121f]/20 hover:text-[#c1121f] hover:border-[#c1121f]/30 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Bar */}
      <div className="w-full h-8 bg-[#c1121f]"></div>
    </footer>
  );
};

/* Custom Icons */

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const UpworkIcon = () => (
  <span className="text-[14px] font-bold lowercase font-['Montserrat'] leading-none">up</span>
);

const RedDotIcon = () => (
  <div className="flex items-center justify-center">
    <div className="w-2 h-2 bg-[#c1121f] rounded-full"></div>
    <div className="absolute w-4 h-4 border border-[#c1121f]/30 rounded-full"></div>
  </div>
);

export default Footer;