import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Sparkles, CheckCircle2, ArrowRight, Calculator, ShieldCheck, Award, HelpCircle } from "lucide-react";

const ScholarshipGrantSection = () => {
  const [examType, setExamType] = useState("12th-boards");
  const [scorePercentage, setScorePercentage] = useState(85);
  const [selectedStream, setSelectedStream] = useState("Engineering & Tech");
  const [claimed, setClaimed] = useState(false);

  // Calculate estimated scholarship grant
  const calculateGrant = () => {
    let base = 25000;
    if (scorePercentage >= 95) base = 100000;
    else if (scorePercentage >= 90) base = 80000;
    else if (scorePercentage >= 80) base = 60000;
    else if (scorePercentage >= 70) base = 40000;
    else base = 25000;

    return base.toLocaleString("en-IN");
  };

  const grantAmount = calculateGrant();

  return (
    <section id="scholarship-grant" className="py-20 md:py-28 bg-[#111110] text-white relative overflow-hidden border-y border-white/10">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--coral)]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--coral)]/20 text-[var(--coral)] text-xs font-bold tracking-widest uppercase mb-4 border border-[var(--coral)]/30">
            <GraduationCap size={15} />
            DIRECT TUITION ASSISTANCE • BATCH 2026
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            The AJ <span className="italic font-light text-[var(--coral)]">₹1,00,000</span> National Merit Grant.
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-body font-light leading-relaxed">
            Unlike commercial agents who charge hidden counseling fees, AJ Career Guidance directly sponsors deserving students. Your grant is credited straight toward your 1st-year college tuition fee at any of our 34+ partner institutions.
          </p>
        </div>

        {/* 2-Column Showcase: Interactive Calculator & Transparent Terms */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Interactive Live Eligibility Calculator */}
          <div className="lg:col-span-7 bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[var(--coral)]/20 border border-[var(--coral)]/40 flex items-center justify-center text-[var(--coral)]">
                  <Calculator size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Instant Grant Estimator</h3>
                  <span className="text-xs text-white/50">Calculate your estimated tuition fee concession</span>
                </div>
              </div>

              <span className="text-[11px] font-mono uppercase bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30 font-semibold">
                Batch 2026 Active
              </span>
            </div>

            <div className="space-y-6">
              
              {/* Step 1: Exam Type */}
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-white/80 block mb-3">
                  1. Select Qualification Basis:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: "12th-boards", label: "12th Boards %" },
                    { id: "wbjee", label: "WBJEE Rank" },
                    { id: "jee-main", label: "JEE Main %ile" },
                    { id: "cuet", label: "CUET / Direct" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setExamType(item.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all text-center border ${
                        examType === item.id
                          ? "bg-[var(--coral)] text-white border-[var(--coral)] shadow-md shadow-[var(--coral)]/20"
                          : "bg-white/5 text-white/70 border-white/10 hover:border-white/30"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Score Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-white/80">
                    2. Your Estimated Score / Percentage:
                  </label>
                  <span className="text-lg font-bold text-[var(--coral)] font-mono">
                    {scorePercentage}%
                  </span>
                </div>
                <input 
                  type="range"
                  min="55"
                  max="98"
                  value={scorePercentage}
                  onChange={(e) => setScorePercentage(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[var(--coral)]"
                />
                <div className="flex justify-between text-[11px] text-white/40 mt-1 font-mono">
                  <span>55% (Pass)</span>
                  <span>75% (First Div)</span>
                  <span>85% (Distinction)</span>
                  <span>95%+ (Topper)</span>
                </div>
              </div>

              {/* Step 3: Stream Selection */}
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-white/80 block mb-3">
                  3. Intended Field of Study:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    "Engineering & Tech",
                    "Management & BBA",
                    "Media & Design",
                    "Computer Apps (BCA)",
                    "Biotech & Science",
                    "Law & Humanities"
                  ].map((stream) => (
                    <button
                      key={stream}
                      type="button"
                      onClick={() => setSelectedStream(stream)}
                      className={`py-2 px-3 rounded-xl text-xs transition-all text-left truncate border ${
                        selectedStream === stream
                          ? "bg-white text-[var(--ink)] font-bold border-white"
                          : "bg-white/5 text-white/70 border-white/10 hover:border-white/20"
                      }`}
                    >
                      {stream}
                    </button>
                  ))}
                </div>
              </div>

              {/* Result Output Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-6 mt-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-white/60 font-medium block mb-1">
                    Your Eligible Tuition Grant:
                  </span>
                  <div className="font-display text-4xl sm:text-5xl font-bold text-white flex items-baseline gap-2">
                    <span className="text-[var(--coral)]">₹{grantAmount}</span>
                    <span className="text-xs font-normal text-white/60 font-sans">Deducted from 1st Year Fee</span>
                  </div>
                  <span className="text-xs text-emerald-400 flex items-center gap-1.5 mt-2">
                    <CheckCircle2 size={13} />
                    Valid for Adamas, IEM, BESC, iLEAD, SNU, Brainware & 34+ Colleges
                  </span>
                </div>

                <Link
                  to="/scholarship"
                  className="btn btn-coral py-3.5 px-6 text-xs uppercase tracking-widest font-bold whitespace-nowrap shadow-lg shadow-[var(--coral)]/30 w-full sm:w-auto text-center"
                >
                  <span>Claim Grant Online</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          </div>

          {/* RIGHT: Transparent Grant Policy & Categories */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Award size={20} className="text-[var(--coral)]" />
                4 Transparent Grant Tiers
              </h3>

              <div className="space-y-4 text-sm">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--coral)]/20 text-[var(--coral)] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-xs sm:text-sm">Merit Excellence Grant (Up to ₹1,00,000)</h4>
                    <p className="text-xs text-white/60 font-light mt-0.5">For students securing 85%+ in Class 12 Boards or top ranks in WBJEE/JEE Main.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--coral)]/20 text-[var(--coral)] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-xs sm:text-sm">Women in Higher Ed Grant (Up to ₹60,000)</h4>
                    <p className="text-xs text-white/60 font-light mt-0.5">Dedicated initiative to empower female students joining Engineering, Management, and Law.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--coral)]/20 text-[var(--coral)] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-xs sm:text-sm">Single Parent / Need-Based Support</h4>
                    <p className="text-xs text-white/60 font-light mt-0.5">Special fee assistance and hostel subsidy for students from economically constrained families.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--coral)]/20 text-[var(--coral)] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-xs sm:text-sm">Early Bird Counseling Grant (₹25,000)</h4>
                    <p className="text-xs text-white/60 font-light mt-0.5">Direct voucher for students completing profile assessment before counseling cutoff rounds.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Trust Guarantee */}
            <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-3xl p-6 sm:p-7 flex items-start gap-4">
              <ShieldCheck size={28} className="text-emerald-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-emerald-300 text-sm mb-1">
                  100% Legitimate University Adjustment
                </h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  This scholarship is NOT an entry raffle or coaching discount. It is an official institutional concession backed by AJ Career Guidance and credited directly on the college tuition receipt upon verified admission.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ScholarshipGrantSection;
