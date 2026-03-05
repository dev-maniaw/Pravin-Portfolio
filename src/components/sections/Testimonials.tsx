import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  role: string | React.ReactNode;
}

const testimonials: Testimonial[] = [
  {
    text: "We truly appreciate the excellent work delivered by Pravin. His professionalism, attention to detail, and commitment to quality have been remarkable throughout our collaboration.",
    name: "NIKHIL MALANKAR",
    role: "BRAND AMBASSADOR, SPAWN SKOOL | CEO, GAMEON STUDIOS",
  },
  {
    text: "Quick Edits, Smooth transitions, Great Clippings and designs which gained millions of views to our short form made for MOC podcast Clips and MOC meme reacts.",
    name: "JAIDEEP",
    role: "MANAGER, MEN OF CULTURE",
  },
  {
    text: "Pravin's journey into video editing began right here with us. He took the time to experiment with different creative approaches, working with brands like Zoca and Attic Fanatics.",
    name: "CEO",
    role: "TRIGONA DIGITAL",
  },
  {
    text: "Seasonal Video edits for where so good had a overall good quality and clean look need to improve in fonts and more punchy look.",
    name: "CEO",
    role: "ATTIC FANATICS",
  },
  {
    text: "Would hire him again in a heartbeat, Great editing work!",
    name: "JONATHAN KIRCHNER",
    role: "LIFE COACH, FACEBOOK META ADS",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-black py-20 md:py-32 px-[5%]">
      <div className="max-w-[1536px] mx-auto">
        <div className="flex justify-center mb-16 md:mb-24">
          <h2 className="text-[#c1121f] font-display text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.85] text-center">
            Client Stories
          </h2>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <TestimonialCard item={testimonials[0]} />
            <TestimonialCard item={testimonials[3]} />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <TestimonialCard item={testimonials[1]} />
            <TestimonialCard item={testimonials[4]} />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <TestimonialCard item={testimonials[2]} />
            {/* CTA Card */}
            <div className="bg-[#c1121f] rounded-[24px] p-8 md:p-10 flex flex-col items-center justify-center text-center min-h-[300px] transition-transform duration-500 hover:scale-[1.02]">
              <h3 className="text-white font-fiorello text-4xl md:text-5xl uppercase leading-none mb-8">
                YOUR STORY<br />HERE?
              </h3>
              <a
                href="#contact"
                className="bg-black text-white px-8 py-3 rounded-full font-body font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-zinc-900"
              >
                LET&apos;S WORK
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  item: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ item }) => {
  return (
    <div className="bg-[#1a1a1a] border border-white/5 rounded-[24px] p-8 md:p-10 flex flex-col transition-all duration-500 hover:border-white/10 hover:bg-[#202020] group">
      <div className="mb-6">
        <Quote className="text-[#c1121f] w-6 h-6 rotate-180 fill-[#c1121f] opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>

      <p className="text-white/80 font-body text-lg leading-[1.7] mb-8">
        &ldquo;{item.text}&rdquo;
      </p>

      <div className="mt-auto">
        <h4 className="text-white font-body font-bold text-xl uppercase tracking-tighter leading-tight mb-2">
          {item.name}
        </h4>
        <div className="text-[#c1121f] font-body text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] leading-relaxed">
          {item.role}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;