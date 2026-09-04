import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight, Sparkles, Compass, Target, GraduationCap, RefreshCw, HelpCircle } from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);
  const containerRef = useRef(null);
  const [step, setStep] = useState(1); // 1: Crossroads, 2: Confusion, 3: Guidance, 4: Destination
  const [stream, setStream] = useState(""); // science, commerce, arts

  useEffect(() => {
    // Run an entrance animation for the hero typography on mount
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-split-heading span", 
        { y: "100%", rotate: 2 },
        { y: "0%", rotate: 0, duration: 1.2, stagger: 0.1, ease: "power4.out" }
      );
      gsap.fromTo(".hero-intro-text",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.6 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Whenever the step or stream changes, animate the story card changes
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".story-card-element", 
        { opacity: 0, y: 30, filter: "blur(5px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6, stagger: 0.1, ease: "power3.out" }
      );

      // Unique step animations
      if (step === 2) {
        gsap.fromTo(".floating-doubt", 
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, stagger: 0.15, ease: "back.out(1.5)" }
        );
      }
      if (step === 3) {
        gsap.fromTo(".alignment-bar", 
          { width: "0%" },
          { width: (el) => el.getAttribute("data-width") || "90%", duration: 1.2, ease: "power2.out", stagger: 0.2 }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [step, stream]);

  const selectStream = (selectedStream) => {
    setStream(selectedStream);
    setStep(2);
  };

  const getMatchedColleges = () => {
    if (stream === "science") {
      return [
        { name: "IEM Kolkata", course: "B.Tech Computer Science", placement: "12 LPA Avg" },
        { name: "SRM University", course: "B.Tech Biotechnology", placement: "9.5 LPA Avg" },
        { name: "TNU Kolkata", course: "B.Tech Marine Engineering", placement: "10 LPA Avg" }
      ];
    } else if (stream === "commerce") {
      return [
        { name: "EIILM Kolkata", course: "BBA (Hospital Management)", placement: "7.8 LPA Avg" },
        { name: "UWSB Kolkata", course: "BBA Global Marketing", placement: "8.5 LPA Avg" },
        { name: "BP Poddar Institute", course: "BCA (Data Analytics)", placement: "6.5 LPA Avg" }
      ];
    } else {
      return [
        { name: "George College", course: "Bachelor of Media Studies", placement: "6.0 LPA Avg" },
        { name: "Adamas University", course: "B.Des Communication Design", placement: "7.2 LPA Avg" },
        { name: "ECMT Kolkata", course: "B.Sc Animation & Film", placement: "5.5 LPA Avg" }
      ];
    }
  };

  return (
    <section ref={heroRef} className="min-h-screen lg:h-screen flex items-start lg:items-center pt-32 pb-20 lg:py-0 bg-[var(--ivory)] text-[var(--ink)] px-6 md:px-12 lg:px-20 relative overflow-hidden" id="home">
      
      {/* Editorial Decorative Grid Overlay */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-5 border-x border-[var(--ink)]">
        <div className="border-r border-[var(--ink)] h-full"></div>
        <div className="border-r border-[var(--ink)] h-full"></div>
        <div className="border-r border-[var(--ink)] h-full"></div>
      </div>

      <div ref={containerRef} className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
        
        {/* LEFT COLUMN: Large Editorial Typography & Story Hook */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          
          <span className="text-[10px] font-mono tracking-[4px] text-[var(--coral)] uppercase block mb-4 font-bold">
            Interactive Experience
          </span>

          <h1 className="hero-split-heading font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight flex flex-col text-[var(--ink)]">
            <div className="overflow-hidden py-1">
              <span className="block">Rohan's</span>
            </div>
            <div className="overflow-hidden py-1">
              <span className="block font-display italic text-[var(--coral)] lowercase">career path.</span>
            </div>
            <div className="overflow-hidden py-1">
              <span className="block">Or yours?</span>
            </div>
          </h1>

          <p className="hero-intro-text text-sm md:text-base text-[var(--muted)] font-light leading-relaxed max-w-[480px] mt-6">
            We don't believe in generic brochures. Follow Rohan's journey from board-exam chaos to securing admission at a tier-one NAAC A++ college. Use the simulator to map a personalized legacy.
          </p>

          {/* Core action button */}
          <div className="hero-intro-text mt-8 flex flex-wrap gap-4">
            <a href="#quiz" className="px-6 py-3 bg-[var(--ink)] text-[var(--ivory)] hover:bg-[var(--coral)] transition-colors duration-300 font-medium text-xs tracking-wider uppercase rounded-full inline-flex items-center gap-2">
              Start Your Own Quiz
              <Sparkles size={14} />
            </a>
            <button 
              onClick={() => { setStep(1); setStream(""); }} 
              className="px-6 py-3 border border-[var(--stone)] hover:border-[var(--ink)] hover:bg-[var(--stone)]/10 transition-all duration-300 font-medium text-xs tracking-wider uppercase rounded-full inline-flex items-center gap-2"
            >
              Reset Rohan's Story
              <RefreshCw size={12} />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: The Interactive Story Canvas Card */}
        <div className="lg:col-span-6 flex justify-center w-full">
          <div className="w-full max-w-[500px] min-h-[480px] bg-white rounded-3xl border border-[var(--stone)]/30 p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col justify-between">
            
            {/* Top Indicator */}
            <div className="flex justify-between items-center pb-4 border-b border-[var(--stone)]/20">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--coral)] animate-pulse" />
                <span className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-wider">
                  Narrative Simulator
                </span>
              </div>
              <span className="text-xs font-mono text-[var(--coral)] font-bold">
                STEP 0{step} / 04
              </span>
            </div>

            {/* STAGE 1: THE CROSSROADS */}
            {step === 1 && (
              <div className="my-auto flex flex-col gap-6 py-6">
                <div className="story-card-element w-12 h-12 bg-[var(--coral)]/5 rounded-2xl flex items-center justify-center text-[var(--coral)]">
                  <Compass size={24} />
                </div>
                <h3 className="story-card-element font-display text-2xl font-light text-[var(--ink)]">
                  Rohan finishes Class 12 Boards. <br />
                  <span className="italic text-[var(--coral)]">Select Rohan's Academic Stream:</span>
                </h3>
                <div className="story-card-element flex flex-col gap-3">
                  <button 
                    onClick={() => selectStream("science")}
                    className="w-full text-left px-5 py-4 border border-[var(--stone)]/40 rounded-xl hover:border-[var(--coral)] hover:bg-[var(--coral)]/5 transition-all group flex justify-between items-center"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--ink)]">Science & Tech</h4>
                      <p className="text-[10px] text-[var(--muted)]">Engineering, Marine, Bio-tech, Coding</p>
                    </div>
                    <ArrowRight size={16} className="text-[var(--stone)] group-hover:text-[var(--coral)] transition-colors" />
                  </button>
                  <button 
                    onClick={() => selectStream("commerce")}
                    className="w-full text-left px-5 py-4 border border-[var(--stone)]/40 rounded-xl hover:border-[var(--coral)] hover:bg-[var(--coral)]/5 transition-all group flex justify-between items-center"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--ink)]">Business & Commerce</h4>
                      <p className="text-[10px] text-[var(--muted)]">Management, Analytics, Finance, global BBA</p>
                    </div>
                    <ArrowRight size={16} className="text-[var(--stone)] group-hover:text-[var(--coral)] transition-colors" />
                  </button>
                  <button 
                    onClick={() => selectStream("arts")}
                    className="w-full text-left px-5 py-4 border border-[var(--stone)]/40 rounded-xl hover:border-[var(--coral)] hover:bg-[var(--coral)]/5 transition-all group flex justify-between items-center"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--ink)]">Liberal Arts & Media</h4>
                      <p className="text-[10px] text-[var(--muted)]">Communication Design, Journalism, Film studies</p>
                    </div>
                    <ArrowRight size={16} className="text-[var(--stone)] group-hover:text-[var(--coral)] transition-colors" />
                  </button>
                </div>
              </div>
            )}

            {/* STAGE 2: THE CONFUSION */}
            {step === 2 && (
              <div className="my-auto flex flex-col gap-6 py-6">
                <div className="story-card-element w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600">
                  <HelpCircle size={24} />
                </div>
                <h3 className="story-card-element font-display text-2xl font-light text-[var(--ink)]">
                  Rohan falls into the <span className="italic text-[var(--stone)]">Horizon of Doubt</span>
                </h3>
                
                {/* Simulated Floating doubt prompts */}
                <div className="grid grid-cols-1 gap-2.5">
                  <div className="floating-doubt bg-rose-50 border border-rose-100 px-4 py-2.5 rounded-lg text-xs text-rose-700 font-light flex items-center gap-2">
                    <span>⚠️</span> "Should I clear JEE or focus on college placements directly?"
                  </div>
                  <div className="floating-doubt bg-amber-50 border border-amber-100 px-4 py-2.5 rounded-lg text-xs text-amber-700 font-light flex items-center gap-2">
                    <span>⚠️</span> "Which colleges in Kolkata accept my board percentages?"
                  </div>
                  <div className="floating-doubt bg-blue-50 border border-blue-100 px-4 py-2.5 rounded-lg text-xs text-blue-700 font-light flex items-center gap-2">
                    <span>⚠️</span> "Are average package statistics genuinely real?"
                  </div>
                </div>

                <p className="story-card-element text-xs text-[var(--muted)] font-light leading-relaxed">
                  Rohan is overwhelmed by brochures, fee metrics, and conflicting suggestions from relatives. He needs scientific counseling.
                </p>

                <button 
                  onClick={() => setStep(3)}
                  className="story-card-element w-full py-4 bg-[var(--coral)] text-white text-xs font-semibold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 hover:bg-[var(--ink)] transition-colors"
                >
                  Consult A & J Career Guidance
                  <ArrowRight size={14} />
                </button>
              </div>
            )}

            {/* STAGE 3: THE GUIDANCE */}
            {step === 3 && (
              <div className="my-auto flex flex-col gap-5 py-6">
                <div className="story-card-element w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                  <Target size={24} />
                </div>
                <h3 className="story-card-element font-display text-2xl font-light text-[var(--ink)]">
                  Applying the <span className="italic text-[var(--coral)]">Scientific Alignment Profile</span>
                </h3>
                
                <p className="story-card-element text-xs text-[var(--muted)] font-light">
                  A & J psychometric evaluation isolates Rohan's natural aptitudes:
                </p>

                {/* Animated Alignment Bars */}
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span>Analytical Aptitude</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                      <div className="alignment-bar h-full bg-[var(--coral)] rounded-full" data-width="92%" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span>Creative / Lateral Thinking</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                      <div className="alignment-bar h-full bg-[var(--coral)] rounded-full" data-width="85%" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span>Placement Readiness Score</span>
                      <span>88%</span>
                    </div>
                    <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                      <div className="alignment-bar h-full bg-[var(--coral)] rounded-full" data-width="88%" />
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setStep(4)}
                  className="story-card-element w-full py-4 bg-[var(--ink)] text-white text-xs font-semibold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 hover:bg-[var(--coral)] transition-colors"
                >
                  Generate Rohan's Match Blueprint
                  <ArrowRight size={14} />
                </button>
              </div>
            )}

            {/* STAGE 4: THE DESTINATION */}
            {step === 4 && (
              <div className="my-auto flex flex-col gap-5 py-6">
                <div className="story-card-element w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                  <GraduationCap size={24} />
                </div>
                <h3 className="story-card-element font-display text-2xl font-light text-[var(--ink)]">
                  The Blueprint of <span className="italic text-[var(--coral)]">Legacy Success</span>
                </h3>
                
                <p className="story-card-element text-xs text-[var(--muted)] font-light">
                  A & J mapping maps Rohan's profile to optimal tier-one targets:
                </p>

                {/* College Recommendations */}
                <div className="story-card-element flex flex-col gap-2">
                  {getMatchedColleges().map((college, i) => (
                    <div key={i} className="bg-stone-50 border border-stone-200/50 p-3 rounded-lg flex justify-between items-center text-xs">
                      <div>
                        <h4 className="font-bold text-[var(--ink)]">{college.name}</h4>
                        <p className="text-[10px] text-[var(--muted)]">{college.course}</p>
                      </div>
                      <span className="font-mono text-[var(--coral)] font-bold">{college.placement}</span>
                    </div>
                  ))}
                </div>

                <div className="story-card-element pt-2 flex gap-2">
                  <button 
                    onClick={() => { setStep(1); setStream(""); }}
                    className="flex-1 py-3 border border-[var(--stone)] text-xs font-semibold uppercase tracking-wider rounded-xl text-[var(--ink)] hover:bg-stone-50"
                  >
                    Simulate Again
                  </button>
                  <a 
                    href="#quiz"
                    className="flex-1 py-3 bg-[var(--coral)] hover:bg-[var(--ink)] transition-colors text-white text-xs font-semibold uppercase tracking-wider rounded-xl text-center flex items-center justify-center"
                  >
                    Map My Profile
                  </a>
                </div>
              </div>
            )}

            {/* Bottom Brand tagline */}
            <div className="flex justify-between items-center pt-4 border-t border-[var(--stone)]/20 text-[9px] font-mono text-[var(--muted)] tracking-wider">
              <span>SECURE ROUNDS & NAAC A++ MATCH</span>
              <span>100% TRANSPARENT</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
