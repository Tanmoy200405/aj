import React from "react";
import { Link } from "react-router-dom";
import { Award, GraduationCap, CheckCircle2, ArrowRight, FileText, Sparkles, ShieldCheck, Bell } from "lucide-react";

const ScholarshipExamShowcase = () => {
  return (
    <section className="py-20 md:py-28 bg-[#111110] text-white border-y border-white/10 relative overflow-hidden" id="scholarship-exam">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--coral)]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--coral)]/20 text-[var(--coral)] text-xs font-bold tracking-widest uppercase mb-4 border border-[var(--coral)]/30">
            <Award size={15} />
            MERIT-BASED SCHOLARSHIP INITIATIVE
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Get Admitted via AJ Guidance. <br />
            Appear for the Exam. <br />
            <span className="italic font-light text-[var(--coral)]">Qualify & Get Flat ₹1,00,000.</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-body font-light leading-relaxed">
            Students who secure college admission through AJ Career Guidance earn the eligibility to appear for our dedicated scholarship examination. If you qualify, you will receive a flat ₹1,00,000 award.
          </p>
        </div>

        {/* 3-Step Clear Visual Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          
          {/* Step 1 */}
          <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-3xl p-8 relative group hover:border-[var(--coral)]/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[var(--coral)]/20 text-[var(--coral)] font-display text-xl font-bold flex items-center justify-center mb-6 border border-[var(--coral)]/30">
              01
            </div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-[var(--coral)] font-semibold">
              <GraduationCap size={15} />
              Step 1: Secure Admission
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Admission via AJ Guidance
            </h3>
            <p className="text-sm text-white/65 font-light leading-relaxed">
              Complete your counseling and secure admission into any of our 34+ partner colleges and universities.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-3xl p-8 relative group hover:border-amber-400/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 font-display text-xl font-bold flex items-center justify-center mb-6 border border-amber-500/30">
              02
            </div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              <FileText size={15} />
              Step 2: Appear for Exam
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Scholarship Qualifying Exam
            </h3>
            <p className="text-sm text-white/65 font-light leading-relaxed">
              Eligible admitted students appear for the official scholarship exam. <span className="text-amber-300 font-medium">(Exam name, pattern & dates to be disclosed soon)</span>.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-3xl p-8 relative group hover:border-emerald-400/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 font-display text-xl font-bold flex items-center justify-center mb-6 border border-emerald-500/30">
              03
            </div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              <Sparkles size={15} />
              Step 3: Qualify & Win
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Flat ₹1,00,000 Cash / Award
            </h3>
            <p className="text-sm text-white/65 font-light leading-relaxed">
              Students who qualify in the examination are awarded flat ₹1,00,000 directly felicitated by AJ Career Guidance.
            </p>
          </div>

        </div>

        {/* Highlight Card with Verification Guarantees & Action CTA */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/20 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} className="text-emerald-400 shrink-0" />
              <span className="text-xs uppercase font-mono tracking-wider text-emerald-400 font-semibold">
                Transparent Merit Opportunity
              </span>
            </div>

            <h4 className="font-display text-2xl sm:text-3xl font-medium text-white">
              Secured your admission? Stay tuned for exam updates.
            </h4>

            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              Eligible students who took admission through AJ Career Guidance can pre-register their admission details today to get notified as soon as the exam schedule and syllabus are released.
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-white/80 pt-2">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[var(--coral)]" />
                <span>Admission via AJ Guidance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bell size={14} className="text-amber-400" />
                <span>Exam Details Disclosed Soon</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>Flat ₹1,00,000 on Qualifying</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <Link
              to="/scholarship"
              className="btn btn-coral py-4 px-8 text-xs uppercase tracking-widest font-bold whitespace-nowrap shadow-xl shadow-[var(--coral)]/30 w-full sm:w-auto text-center"
            >
              <span>Scholarship Info & Updates</span>
              <ArrowRight size={15} />
            </Link>

            <Link
              to="/contact"
              className="btn btn-outline py-4 px-6 text-xs uppercase tracking-widest font-semibold border-white/30 text-white hover:bg-white hover:text-[var(--ink)] w-full sm:w-auto text-center"
            >
              <span>Consult Counselor</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ScholarshipExamShowcase;
