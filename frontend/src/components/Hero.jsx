import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Target } from "lucide-react";
import heroArchStudent from "../assets/hero_arch_student.png";
import photo1 from "../assets/testimonial/photo1.jpeg";
import photo2 from "../assets/testimonial/photo2.jpeg";
import photo3 from "../assets/testimonial/photo3.jpeg";
import photo4 from "../assets/testimonial/photo4.jpeg";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center pt-28 pb-16 bg-[var(--ivory)] text-[var(--ink)] relative overflow-hidden" id="home">
      
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-[0.03] border-x border-[var(--ink)]">
        <div className="border-r border-[var(--ink)] h-full" />
        <div className="border-r border-[var(--ink)] h-full" />
        <div className="border-r border-[var(--ink)] h-full" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[var(--coral)] mb-4 inline-flex items-center gap-2">
              <Sparkles size={14} />
              ADMISSIONS & CAREER ADVISORY • BATCH 2026
            </span>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-[var(--ink)] mb-6">
              The guidance you need. <br />
              <span className="italic font-display text-[var(--coral)] font-light">The college</span> you deserve.
            </h1>

            <p className="text-base sm:text-lg text-[var(--muted)] font-body font-light leading-relaxed max-w-[560px] mb-8">
              Personalized admission counseling, verified placement records, transparent fee breakdowns, and structured academic roadmaps for Class 12 & undergraduate students. 100% unbiased advisory.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link 
                to="/contact" 
                className="btn btn-coral group"
              >
                <span>Book Free Counseling</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>

              <Link 
                to="/colleges" 
                className="btn btn-outline group"
              >
                <span>Explore 34+ Colleges</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0" />
              </Link>

              <Link 
                to="/scholarship" 
                className="text-xs uppercase font-bold tracking-widest text-[var(--coral)] hover:underline flex items-center gap-1.5 py-2 px-1"
              >
                <span>Flat ₹1 Lakh Exam</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Social Proof & Trust Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t border-[var(--stone)]/60">
              <div className="flex -space-x-2.5">
                <img 
                  src={photo1} 
                  alt="Tanmoy Mukherjee - St Thomas College of Engineering & Technology" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <img 
                  src={photo2} 
                  alt="Moubani Issu - Bhawanipur Global Campus" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <img 
                  src={photo3} 
                  alt="Aysika Dey - Bhawanipur Global Campus" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <img 
                  src={photo4} 
                  alt="Sambhabi Banerjee - Bhawanipur Global Campus" 
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
                  34+ Partner Colleges • Zero Hidden Charges • Direct Campus Admissions
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: College & Career Visual Composition */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Main Center Image */}
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-t-[180px] rounded-b-3xl overflow-hidden border border-[var(--stone)]/60 shadow-2xl bg-[#EFECE6] group">
              <img 
                src={heroArchStudent} 
                alt="AJ Career Guidance Student" 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Top Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/60 shadow-lg flex items-center gap-2">
                <Sparkles size={13} className="text-[var(--coral)]" />
                <span className="text-[10px] font-mono tracking-wider text-[var(--ink)] uppercase font-bold">
                  34+ ACCREDITED COLLEGES
                </span>
              </div>
            </div>

            {/* Overlapping College Photo Card (Top Left) - Real Adamas Campus */}
            <div className="absolute -left-6 sm:-left-10 top-12 bg-white/95 backdrop-blur-md p-2 rounded-2xl border border-[var(--stone)] shadow-xl flex items-center gap-3 max-w-[220px] z-20 animate-in fade-in duration-700 transform hover:scale-105 transition-transform">
              <img 
                src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2019/05/30100229/photo-header.jpg" 
                alt="Adamas University Barasat Campus" 
                className="w-12 h-12 rounded-xl object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80"; }}
              />
              <div className="min-w-0">
                <span className="text-[9px] font-mono uppercase text-[var(--coral)] font-bold block">
                  Partner Campus
                </span>
                <h4 className="text-xs font-bold text-[var(--ink)] truncate">
                  Adamas University
                </h4>
                <span className="text-[9px] text-[var(--muted)] block">
                  Barasat • 120-Acre Campus
                </span>
              </div>
            </div>

            {/* Overlapping College Photo Card (Bottom Right) - Real IEM Campus */}
            <div className="absolute -right-4 sm:-right-8 bottom-8 bg-white/95 backdrop-blur-md p-2.5 rounded-2xl border border-[var(--stone)] shadow-xl flex items-center gap-3 max-w-[220px] z-20 animate-in fade-in duration-700 transform hover:scale-105 transition-transform">
              <img 
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Institute_of_Engineering_and_Management_01.jpg/1280px-Institute_of_Engineering_and_Management_01.jpg" 
                alt="IEM Kolkata Salt Lake Campus" 
                className="w-12 h-12 rounded-xl object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=200&q=80"; }}
              />
              <div className="min-w-0">
                <span className="text-[9px] font-mono uppercase text-emerald-600 font-bold block">
                  Top Tech College
                </span>
                <h4 className="text-xs font-bold text-[var(--ink)] truncate">
                  IEM Kolkata
                </h4>
                <span className="text-[9px] text-[var(--muted)] font-semibold block">
                  Salt Lake • NIRF Ranked
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
