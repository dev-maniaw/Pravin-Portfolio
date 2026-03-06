"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ContactForm from '@/components/sections/ContactForm';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-0 md:pt-32">
            {/* Background glow effects */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-[5%] max-w-7xl relative z-10">



                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                    {/* =========================================
              LEFT COLUMN (Sticky Profile) 
              ========================================= */}
                    <div className="lg:w-1/3 flex-shrink-0">
                        <div className="lg:sticky lg:top-32 flex flex-col items-center lg:items-start">

                            {/* Profile Image with Red Glow */}
                            <div className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] mb-8 rounded-2xl overflow-hidden border border-white/10 bg-[#161616]">
                                <div className="absolute inset-0 bg-[#c1121f]/20 blur-2xl z-0" />
                                <Image
                                    src="/clients/Banners/GFX-banner-1.jpeg" // Re-using a cool existing image for now
                                    alt="Praveen Thangavel"
                                    fill
                                    className="object-cover z-10 relative saturate-50 contrast-125"
                                />
                            </div>

                            {/* Massive Name (Hero split style matching) */}
                            <div className="flex flex-col text-left mb-6 w-full items-center lg:items-start">
                                <h1 className="font-display text-5xl md:text-6xl uppercase leading-[0.85] tracking-tight">
                                    <span
                                        className="block text-transparent"
                                        style={{ WebkitTextStroke: '1.5px #c1121f' }}
                                    >
                                        PRAVEEN
                                    </span>
                                    <span className="block text-white">
                                        THANGAVEL
                                    </span>
                                </h1>
                            </div>

                            {/* Subtitle / Roles */}
                            <p className="font-body text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#c1121f] flex flex-wrap gap-2 justify-center lg:justify-start">
                                <span>VIDEO EDITOR</span>
                                <span className="text-white/30">•</span>
                                <span>MOTION GRAPHIC DESIGNER</span>
                                <span className="text-white/30">•</span>
                                <span>BRAND & VISUAL DESIGNER</span>
                            </p>

                            {/* Socials Grid */}
                            <div className="flex gap-4 mt-8">
                                {['IN', 'IG', 'YT', 'X', 'BE'].map((social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="w-10 h-10 rounded-full border border-white/10 bg-[#111] flex items-center justify-center text-white/50 hover:text-white hover:border-primary/50 transition-all hover:-translate-y-1"
                                    >
                                        <span className="font-body text-[10px] uppercase font-bold">{social}</span>
                                    </a>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* =========================================
              RIGHT COLUMN (Scrollable Content) 
              ========================================= */}
                    <div className="lg:w-2/3 flex flex-col gap-12 md:gap-16">

                        {/* Intro text */}
                        <motion.div
                            className="prose prose-invert max-w-none"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="font-body text-base md:text-lg text-white/80 leading-relaxed font-light mb-6">
                                Whether it’s motion that moves you or designs that hold you there. I specialise in both.
                            </p>
                            <p className="font-body text-base md:text-lg text-white/80 leading-relaxed font-light">
                                It does not matter if it’s moving at 24 frames per second or perfectly still on a poster. My job is always to make sure the audience stop, look and feel something. With expertise in video editing, motion graphics and static design, that is what I do for your story.
                            </p>
                        </motion.div>

                        {/* Experience Timeline */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h3 className="font-body text-xs uppercase tracking-[0.3em] font-bold text-white/50 border-b border-white/10 pb-4 mb-8">
                                EXPERIENCE
                            </h3>
                            <div className="flex flex-col gap-6">
                                {[
                                    {
                                        years: "Oct 2024 — Present",
                                        title: "Video Editor & Motion Graphics Designer",
                                        company: "GameNation",
                                        desc: ""
                                    },
                                    {
                                        years: "Jun 2024 — Sep 2024",
                                        title: "Video Editor & Digital Marketing Analyst",
                                        company: "Coco Chai",
                                        desc: ""
                                    },
                                    {
                                        years: "Jun 2023 — May 2024",
                                        title: "Video Editor",
                                        company: "Wonkrew",
                                        desc: ""
                                    },
                                    {
                                        years: "Mar 2023 — May 2023",
                                        title: "Social Media Manager",
                                        company: "Wonkrew",
                                        desc: ""
                                    }
                                ].map((job, i) => (
                                    <div key={i} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 p-6 rounded-2xl border border-white/5 bg-[#111] hover:bg-[#161616] transition-colors group">
                                        <div className="w-32 flex-shrink-0 pt-1">
                                            <span className="font-body text-[10px] text-white/40 tracking-widest uppercase">{job.years}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-fiorello tracking-wide text-xl text-white mb-1">{job.title}</h4>
                                            <p className="font-body text-[10px] text-[#c1121f] font-bold tracking-wider uppercase mb-3">{job.company}</p>
                                            <p className="font-body text-xs text-white/50">{job.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Education & Specs (Side by Side on desktop) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h3 className="font-body text-xs uppercase tracking-[0.3em] font-bold text-white/50 border-b border-white/10 pb-4 mb-8">
                                    EDUCATION
                                </h3>
                                <div className="flex flex-col gap-8">
                                    <div>
                                        <span className="font-body text-[10px] text-[#c1121f] tracking-widest uppercase block mb-2">2016 — 2020</span>
                                        <h4 className="font-fiorello tracking-wide text-lg text-white mb-1">BE, Computer Science & Engineering</h4>
                                        <p className="font-body text-[10px] uppercase tracking-wider text-white/40">RVS Technical Campus, Coimbatore</p>
                                    </div>
                                </div>
                            </motion.section>

                            <motion.section
                                className="flex flex-col gap-8 md:gap-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <div>
                                    <h3 className="font-body text-xs uppercase tracking-[0.3em] font-bold text-white/50 border-b border-white/10 pb-4 mb-6">
                                        LANGUAGES
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {['Tamil', 'English'].map((lang) => (
                                            <span key={lang} className="px-4 py-2 rounded-full border border-white/10 bg-[#111] font-body text-[10px] tracking-widest text-white/60">
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.section>

                        </div>

                        {/* Toolkit */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <h3 className="font-body text-xs uppercase tracking-[0.3em] font-bold text-white/50 border-b border-white/10 pb-4 mb-6">
                                TOOLKIT
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {['DaVinci Resolve', 'Adobe After Effects', 'Adobe Premiere Pro', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe Lightroom', 'Canva'].map((tool) => (
                                    <div key={tool} className="group relative px-6 py-3 rounded-xl border border-white/10 bg-[#111] hover:bg-[#c1121f]/10 hover:border-[#c1121f]/50 transition-all cursor-default">
                                        <span className="font-body text-[10px] uppercase font-bold tracking-widest text-white/60 group-hover:text-white transition-colors">
                                            {tool}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Skills */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <h3 className="font-body text-xs uppercase tracking-[0.3em] font-bold text-white/50 border-b border-white/10 pb-4 mb-6">
                                SKILLS
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                                <ul className="space-y-3">
                                    {[
                                        'Storytelling & Engaging Hooks',
                                        'Color Grading',
                                        'Audio Syncing',
                                        'Typography Animations & Kinetic Type',
                                        'Transitions & Effects'
                                    ].map((skill, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-[#c1121f] mt-1 text-[10px]">■</span>
                                            <span className="font-body text-xs text-white/70">{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="space-y-3">
                                    {[
                                        'Logo Creation',
                                        'Portrait & Product Shooting',
                                        'Lighting & Composition Basics',
                                        'Digital Marketing Basics'
                                    ].map((skill, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-[#c1121f] mt-1 text-[10px]">■</span>
                                            <span className="font-body text-xs text-white/70">{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.section>

                    </div>
                </div>
            </div>

            {/* =========================================
              BOTTOM SECTION (Let's Work Together)
              ========================================= */}
            <ContactForm />
        </main>
    );
}
