import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Compass, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const StoryBrand = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Word-by-word reveal animation
      const words = textRef.current.querySelectorAll(".reveal-word");
      gsap.fromTo(
        words,
        { opacity: 0.15, color: "var(--muted)", filter: "blur(1px)" },
        {
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 75%",
            end: "bottom 45%",
            scrub: true,
          },
          opacity: 1,
          color: "var(--ink)",
          filter: "blur(0px)",
          stagger: 0.1,
          ease: "none",
        }
      );

      // Stats counters animation
      const statItems = statsRef.current.querySelectorAll(".stat-number");
      statItems.forEach((item) => {
        const targetVal = parseInt(item.getAttribute("data-target"), 10);
        const obj = { val: 0 };
        gsap.to(obj, {
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          val: targetVal,
          duration: 2,
          ease: "power3.out",
          onUpdate: () => {
            if (targetVal === 98) {
              item.textContent = Math.floor(obj.val) + "%";
            } else if (targetVal === 10) {
              item.textContent = Math.floor(obj.val) + "k+";
            } else {
              item.textContent = Math.floor(obj.val) + "+";
            }
          },
        });
      });

      // Pillars cards stagger reveal
      gsap.from(".pillar-card", {
        scrollTrigger: {
          trigger: ".pillars-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const storyText = 
    "We believe career counseling is not about choosing paths — it is about carving them. Every student is a unique architectural blueprint waiting to be realized, structured for greatness, and designed to make an impact.";

  return (
    <div ref={containerRef} className="bg-[var(--ivory)] py-24 md:py-36 border-t border-[var(--stone)]/40 overflow-hidden">
      <div className="container">
        
        {/* 1. SCROLL REVEAL TEXT BLOCK */}
        <div className="max-w-[900px] mx-auto text-center mb-28 md:mb-36">
          <span className="text-[10px] font-bold text-[var(--coral)] uppercase tracking-[3px] mb-6 block">
            Our Philosophy
          </span>
          <h2 
            ref={textRef} 
            className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-[var(--ink)] leading-tight tracking-tight whitespace-normal"
          >
            {storyText.split(" ").map((word, i) => (
              <span key={i} className="reveal-word inline-block mr-2.5 md:mr-3.5 my-1 transition-all duration-300">
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* 2. DYNAMIC STATISTICS SECTION */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-[var(--stone)]/45 py-12 md:py-16 mb-28 md:mb-36 bg-white/40 backdrop-blur-sm rounded-[32px] px-8">
          <div className="text-center">
            <span className="stat-number font-display text-5xl md:text-6xl font-medium text-[var(--coral)] tracking-tight block mb-2" data-target="34">
              0
            </span>
            <span className="font-body text-xs font-bold text-[var(--ink)] uppercase tracking-wider block mb-1">
              Partner Institutions
            </span>
            <span className="text-xs text-[var(--muted)]">Top tier NAAC A++ colleges & universities</span>
          </div>
          
          <div className="text-center border-y md:border-y-0 md:border-x border-[var(--stone)]/45 py-8 md:py-0">
            <span className="stat-number font-display text-5xl md:text-6xl font-medium text-[var(--ink)] tracking-tight block mb-2" data-target="10">
              0
            </span>
            <span className="font-body text-xs font-bold text-[var(--ink)] uppercase tracking-wider block mb-1">
              Students Mentored
            </span>
            <span className="text-xs text-[var(--muted)]">Navigating academic paths to success</span>
          </div>

          <div className="text-center">
            <span className="stat-number font-display text-5xl md:text-6xl font-medium text-[var(--coral)] tracking-tight block mb-2" data-target="98">
              0%
            </span>
            <span className="font-body text-xs font-bold text-[var(--ink)] uppercase tracking-wider block mb-1">
              Admission Success
            </span>
            <span className="text-xs text-[var(--muted)]">High-match counseling recommendation rate</span>
          </div>
        </div>

        {/* 3. CORE STORY PILLARS */}
        <div>
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-[3px] mb-3 block">
              Core Principles
            </span>
            <h3 className="font-display text-2xl md:text-4xl font-medium text-[var(--ink)]">
              The A & J Standard
            </h3>
          </div>

          <div className="pillars-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1050px] mx-auto">
            {/* Pillar 1 */}
            <div className="pillar-card bg-white border border-[var(--stone)] p-8 rounded-3xl transition-all duration-300 hover:border-[var(--coral)] hover:shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[var(--coral)]/10 text-[var(--coral)] flex items-center justify-center mb-6">
                <Compass size={24} />
              </div>
              <h4 className="font-display text-xl font-medium text-[var(--ink)] mb-3">
                Scientific Alignment
              </h4>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                We utilize psychometric assessments and academic telemetry to ensure students align with careers corresponding to their native potential.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="pillar-card bg-white border border-[var(--stone)] p-8 rounded-3xl transition-all duration-300 hover:border-[var(--coral)] hover:shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[var(--ink)]/5 text-[var(--ink)] flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-display text-xl font-medium text-[var(--ink)] mb-3">
                Unbiased Transparency
              </h4>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Honest counseling mapped to legitimate rankings and credentials. We place students where they will thrive, not where marketing dictates.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="pillar-card bg-white border border-[var(--stone)] p-8 rounded-3xl transition-all duration-300 hover:border-[var(--coral)] hover:shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[var(--coral)]/10 text-[var(--coral)] flex items-center justify-center mb-6">
                <Award size={24} />
              </div>
              <h4 className="font-display text-xl font-medium text-[var(--ink)] mb-3">
                Luxury Stewardship
              </h4>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Comprehensive concierge support, from form applications to counseling rounds. We offer a high-touch, stress-free advisory experience.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StoryBrand;
