import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Building2 } from "lucide-react";
import { collegeData } from "../data/collegeData";

const PartnerLogosMarquee = () => {
  // Extract all institutions with valid logos
  const partnerInstitutions = collegeData.filter(c => c.logo);
  // Duplicate for seamless infinite loop
  const duplicatedLogos = [...partnerInstitutions, ...partnerInstitutions];

  return (
    <section className="py-14 bg-white border-y border-[var(--stone)]/60 overflow-hidden relative select-none">
      
      {/* Header Bar */}
      <div className="container max-w-[1400px] mx-auto px-4 md:px-8 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[var(--coral)]/10 text-[var(--coral)] flex items-center justify-center shrink-0">
            <Building2 size={16} />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--coral)] font-bold block">
              OFFICIAL INSTITUTIONAL NETWORK
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-medium text-[var(--ink)]">
              34+ Partner Colleges & Universities
            </h3>
          </div>
        </div>

        <Link
          to="/colleges"
          className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--muted)] hover:text-[var(--coral)] transition-colors self-start sm:self-center"
        >
          <span>View All Accredited Partners</span>
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Edge Gradient Fades for Infinite Illusion */}
      <div className="absolute left-0 top-16 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-16 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track Container */}
      <div className="flex overflow-hidden py-2">
        <div className="flex items-center gap-8 shrink-0 animate-marquee hover:[animation-play-state:paused]">
          {duplicatedLogos.map((college, idx) => (
            <Link
              key={`${college.id}-${idx}`}
              to={`/colleges/${college.id}`}
              className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-[var(--ivory)] border border-[var(--stone)]/70 hover:border-[var(--coral)] hover:shadow-md transition-all duration-300 shrink-0 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center border border-[var(--stone)]/40 shrink-0">
                <img 
                  src={college.logo} 
                  alt={`${college.name} logo`} 
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-[var(--ink)] group-hover:text-[var(--coral)] transition-colors line-clamp-1 max-w-[160px]">
                  {college.shortName || college.name}
                </span>
                <span className="text-[10px] text-[var(--muted)] font-medium">
                  {college.type}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
};

export default PartnerLogosMarquee;
