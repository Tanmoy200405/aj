import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, GraduationCap, Award } from "lucide-react";
import heroCampusStudents from "../assets/hero_campus_students.jpg";
import photo1 from "../assets/testimonial/photo1.jpeg";
import photo2 from "../assets/testimonial/photo2.jpeg";
import photo3 from "../assets/testimonial/photo3.jpeg";
import photo4 from "../assets/testimonial/photo4.jpeg";

const Hero = () => {
  return (
    <section className="min-h-[88vh] flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 bg-[var(--ivory)] text-[var(--ink)] relative overflow-hidden" id="home">
      
      {/* Background Subtle Editorial Grid Lines */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-[0.035] border-x border-[var(--ink)]">
        <div className="border-r border-[var(--ink)] h-full" />
        <div className="border-r border-[var(--ink)] h-full" />
        <div className="border-r border-[var(--ink)] h-full" />
      </div>

      {/* Ambient Radial Gradient for Depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[var(--coral)]/5 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Editorial Typography & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[var(--stone)] shadow-sm text-xs font-bold uppercase tracking-wider text-[var(--coral)] mb-6 w-fit">
              <Sparkles size={13} className="text-[var(--coral)]" />
              <span>Admissions & Career Advisory • Batch 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.04] tracking-tight text-[var(--ink)] mb-6">
              Architecting <br />
              <span className="italic font-display text-[var(--coral)] font-light">extraordinary</span> <br />
              futures.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[var(--muted)] font-body font-light leading-relaxed max-w-[560px] mb-8">
              Personalized stream selection, verified college admissions, and dedicated 1-on-1 mentorship for Class 12 & undergraduate students across West Bengal and India. 100% unbiased, student-first guidance.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Link 
                to="/contact" 
                className="btn btn-coral group px-7 py-3.5 text-sm font-semibold rounded-full shadow-lg shadow-[var(--coral)]/20"
              >
                <span>Book Free Counseling</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>

              <Link 
                to="/careers" 
                className="btn btn-outline px-6 py-3.5 text-sm font-semibold rounded-full border border-[var(--stone)] hover:border-[var(--coral)] hover:bg-white transition-all duration-300"
              >
                <span>Explore Career Pathways</span>
              </Link>
            </div>

            {/* Flat 1 Lakh Scholarship Exam Callout */}
            <div className="mb-10">
              <Link 
                to="/scholarship"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-bold hover:bg-amber-500/20 transition-all duration-300"
              >
                <Award size={15} className="text-amber-600 flex-shrink-0" />
                <span>AJ Flat ₹1,00,000 Scholarship Qualifying Exam for admitted students</span>
                <ArrowRight size={13} className="text-amber-700 ml-1" />
              </Link>
            </div>

            {/* Social Proof Strip with Authentic Student Avatars */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t border-[var(--stone)]/60">
              <div className="flex -space-x-2.5 flex-shrink-0">
                <img 
                  src={photo1} 
                  alt="Tanmoy Mukherjee" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <img 
                  src={photo2} 
                  alt="Moubani Issu" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <img 
                  src={photo3} 
                  alt="Aysika Dey" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <img 
                  src={photo4} 
                  alt="Sambhabi Banerjee" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--ink)]">
                  <span className="text-[#FFB800] tracking-tighter">★★★★★</span>
                  <span>4.9 / 5.0 Rating</span>
                  <span className="text-[var(--muted)] font-normal text-[11px]">(10,000+ Students Mentored)</span>
                </div>
                <span className="text-[11px] text-[var(--muted)] font-light block">
                  34+ Partner Colleges • Direct Campus Admissions • Zero Hidden Charges
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Authentic High-Res Visual Composition */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Main Visual Frame */}
            <div className="relative w-full max-w-[430px] rounded-[32px] overflow-hidden border border-[var(--stone)]/80 shadow-2xl shadow-[var(--ink)]/8 bg-white group">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img 
                  src={heroCampusStudents} 
                  alt="Students on college campus mentored by AJ Career Guidance" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Top Glass Badge */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/70 shadow-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-[var(--ink)] uppercase font-bold">
                  ADMISSIONS OPEN 2026-27
                </span>
              </div>

              {/* Bottom Glass Overlay Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/80 shadow-lg flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--coral)]/10 text-[var(--coral)] flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[var(--ink)] leading-tight">
                      34+ Leading Colleges
                    </h4>
                    <span className="text-[10px] text-[var(--muted)] font-medium">
                      Engineering • Management • Medical
                    </span>
                  </div>
                </div>

                <Link
                  to="/colleges"
                  className="px-3 py-1.5 rounded-lg bg-[var(--ivory)] hover:bg-[var(--coral)] hover:text-white border border-[var(--stone)] text-[11px] font-bold text-[var(--ink)] transition-colors whitespace-nowrap flex items-center gap-1"
                >
                  <span>Explore</span>
                  <ArrowRight size={11} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
