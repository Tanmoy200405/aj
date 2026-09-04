import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroArchStudent from "../assets/hero_arch_student.png";

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
            
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[var(--coral)] mb-6 block">
              A & J CAREER GUIDANCE
            </span>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-normal leading-[0.95] tracking-tight text-[var(--ink)] mb-8">
              Architecting <br />
              <span className="italic font-display text-[var(--coral)] font-light">extraordinary</span> <br />
              futures.
            </h1>

            <p className="text-sm md:text-base text-[var(--muted)] font-body font-light leading-relaxed max-w-[540px] mb-10">
              A premier, bespoke counseling platform designed to map scientific aptitude, streamline college admissions, and build custom strategic career roadmaps for post-12th students.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                to="/contact" 
                className="btn group py-4 px-8 rounded-full text-xs md:text-sm tracking-wider uppercase font-semibold flex items-center gap-3 transition-all duration-300 shadow-md"
                style={{
                  background: "var(--ink)",
                  color: "var(--ivory)",
                  border: "none",
                }}
              >
                <span>Consult Counselor</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link 
                to="/careers" 
                className="btn py-4 px-8 rounded-full text-xs md:text-sm tracking-wider uppercase font-semibold flex items-center gap-2 border border-[var(--stone)] text-[var(--ink)] hover:bg-[var(--stone)]/20 transition-all duration-300"
              >
                <span>Explore Careers</span>
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN: Arched Image Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-t-[180px] rounded-b-3xl overflow-hidden border border-[var(--stone)]/40 shadow-2xl bg-[#EFECE6]">
              <img 
                src={heroArchStudent} 
                alt="Architecting Extraordinary Futures" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Decorative Circular Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/60 shadow-lg flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--coral)] animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-[var(--ink)] uppercase font-bold">
                  AWAITS YOU • DISCOVER FUTURE
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
