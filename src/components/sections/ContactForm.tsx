import React from 'react';
import { Lock, Sparkles, Clock, ArrowRight } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="relative w-full py-20 md:py-40 bg-black overflow-hidden" id="contact">
      {/* Background elements for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none">
        <h2 className="font-logo text-[12vw] md:text-[180px] leading-tight uppercase text-white text-center">
          Praveen<br />Thangavel
        </h2>
      </div>

      <div className="container relative z-10 max-w-[1440px] px-4 md:px-12 flex flex-col items-center">
        {/* Availability Badge */}
        <div className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-[#c1121f] animate-pulse" />
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/80 font-body">
            Available for work
          </span>
        </div>

        {/* Header Text */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="font-fiorello text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.85] text-white">
            Got a project <span className="text-[#c1121f]">in mind?</span>
          </h2>
          <p className="mt-6 font-body text-sm md:text-base text-white/60 leading-relaxed">
            Tell me about your vision and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact form glassmorphic card */}
        <div className="w-full max-w-[640px] glass rounded-[32px] p-6 md:p-10 shadow-2xl relative">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#c1121f] transition-colors font-body text-sm"
                  required
                />
              </div>

              {/* Email/WhatsApp Field */}
              <div className="space-y-2">
                <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                  Email or WhatsApp *
                </label>
                <input
                  type="text"
                  placeholder="email@example.com or 98765432"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#c1121f] transition-colors font-body text-sm"
                  required
                />
              </div>
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
              <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                Service Needed *
              </label>
              <div className="relative">
                <select
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white appearance-none focus:outline-none focus:border-[#c1121f] transition-colors font-body text-sm cursor-pointer"
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="bg-neutral-900">Select a service...</option>
                  <option value="video-editing" className="bg-neutral-900">Video Editing</option>
                  <option value="gfx-design" className="bg-neutral-900">GFX & Design</option>
                  <option value="web-dev" className="bg-neutral-900">Web Development</option>
                  <option value="ui-ux" className="bg-neutral-900">UI/UX Design</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-2">
              <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                Project Details
              </label>
              <textarea
                placeholder="Briefly describe your project, deadline or budget..."
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#c1121f] transition-colors font-body text-sm resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#c1121f] hover:bg-[#a00d18] text-white font-bold py-5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group"
            >
              <span className="uppercase text-sm tracking-widest font-body">Get My Free Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Form Footer Meta */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-8 opacity-40">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5" />
              <span className="text-[10px] md:text-xs font-body font-medium">Private & Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[10px] md:text-xs font-body font-medium">No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-[10px] md:text-xs font-body font-medium">Reply in 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;