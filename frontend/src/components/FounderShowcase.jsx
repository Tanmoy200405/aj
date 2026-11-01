import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  PhoneCall, 
  MessageCircle, 
  GraduationCap, 
  Compass, 
  ArrowRight 
} from "lucide-react";
import founderImg from "../assets/founder.jpeg";

const FounderShowcase = () => {
  return (
    <section className="py-24 md:py-32 bg-[var(--ivory)] text-[var(--ink)] border-b border-[var(--stone)]/40 relative overflow-hidden" id="founder">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-8">
        
        <div className="bg-white border border-[var(--stone)] rounded-[40px] p-8 md:p-14 lg:p-16 shadow-xl relative overflow-hidden">
          
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[var(--coral)]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* LEFT COLUMN: Founder Portrait with Luxury Framing */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
              
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[32px] overflow-hidden border-2 border-[var(--stone)] shadow-2xl bg-[#EFECE6] group">
                <img 
                  src={founderImg} 
                  alt="Founder & Chief Educational Advisor - AJ Career Guidance" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Top Verification Badge */}
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/60 shadow-md flex items-center gap-2">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  <span className="text-[10px] font-mono tracking-wider text-[var(--ink)] uppercase font-bold">
                    FOUNDER & DIRECTOR
                  </span>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-[var(--coral)] text-[10px] font-mono uppercase font-bold tracking-wider text-white">
                      Leadership
                    </span>
                    <span className="text-[11px] text-white/80">10+ Years Mentorship</span>
                  </div>
                  <h3 className="font-display text-2xl font-medium text-white">
                    Jaydeep Majumdar
                  </h3>
                  <p className="text-xs text-white/80 font-light">
                    Founder & Chief Educational Advisor
                  </p>
                </div>
              </div>

              {/* Founder Direct Credential Pill */}
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full max-w-[380px]">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[var(--ivory)] border border-[var(--stone)]/80 text-xs font-semibold text-[var(--ink)]">
                  <GraduationCap size={15} className="text-[var(--coral)]" />
                  <span>10,000+ Students Mentored</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[var(--ivory)] border border-[var(--stone)]/80 text-xs font-semibold text-[var(--ink)]">
                  <Award size={15} className="text-amber-600" />
                  <span>34+ Partner Colleges</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Founder Vision Statement & Personal Message */}
            <div className="lg:col-span-7">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--coral)]/10 text-[var(--coral)] text-xs font-bold tracking-widest uppercase mb-6">
                <Sparkles size={13} />
                Message from the Founder
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--ink)] leading-[1.15] tracking-tight mb-6">
                "We don't push colleges for quotas. We engineer <span className="italic font-normal text-[var(--coral)]">authentic trajectories</span> for real students."
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[var(--muted)] font-light leading-relaxed mb-8">
                <p>
                  When I founded <strong className="text-[var(--ink)] font-semibold">AJ Career Guidance</strong>, I saw how stressful and commercially distorted college admissions had become for students after 12th grade. Conflicting entrance dates, misleading marketing claims, and peer anxiety often derail native talent.
                </p>
                <p>
                  Our standard is simple and non-negotiable: <em className="text-[var(--ink)] font-normal not-italic">Every single student</em> receives our personalized aptitude assessment, full fee transparency, and direct institutional access to top-tier NAAC-accredited universities across West Bengal and India.
                </p>
              </div>

              {/* Founder Commitments Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10 pt-4 border-t border-[var(--stone)]/60">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--coral)] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[var(--ink)]">Personal 1-on-1 counseling review</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--coral)] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[var(--ink)]">100% Transparent Fee Structures</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--coral)] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[var(--ink)]">34+ Vetted Partner Institutions</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--coral)] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[var(--ink)]">End-to-end documentation & choice filling</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="btn btn-coral group"
                >
                  <PhoneCall size={16} />
                  <span>Request Founder Callback</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="https://wa.me/919874563210?text=Hello%2C%20I%20would%20like%20to%20consult%20AJ%20Career%20Guidance%20for%20admissions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline group flex items-center gap-2 hover:border-emerald-600 hover:text-emerald-700"
                >
                  <MessageCircle size={16} className="text-emerald-600" />
                  <span>WhatsApp Founder Directly</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FounderShowcase;
