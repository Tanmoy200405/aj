import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DoorOpen, HelpCircle, Compass, Target, GraduationCap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const StudentJourney = () => {
  const triggerRef = useRef(null);
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const trigger = triggerRef.current;

    const ctx = gsap.context(() => {
      // 1. Horizontal scroll pinning timeline
      const totalScroll = container.scrollWidth - window.innerWidth;
      
      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          pin: true,
          scrub: 1.2,
          start: "top top",
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
        }
      });

      pinTl.to(container, {
        x: -totalScroll,
        ease: "none"
      });

      // 2. SVG path drawing animation
      const pathLength = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength
      });

      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 1.2,
        }
      });

      // 3. Stagger reveal panels content
      const panels = container.querySelectorAll(".journey-panel");
      panels.forEach((panel) => {
        gsap.fromTo(panel.querySelector(".panel-content"), 
          { opacity: 0, y: 50 },
          {
            opacity: 1, 
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: panel,
              containerAnimation: pinTl,
              start: "left 80%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });

    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="relative h-screen bg-[#111111] overflow-hidden select-none">
      
      {/* Absolute SVG Path overlaying the horizontal flow */}
      <div className="absolute top-1/2 left-0 w-[500vw] h-20 -translate-y-1/2 pointer-events-none z-10 opacity-70">
        <svg viewBox="0 0 5000 100" fill="none" preserveAspectRatio="none" className="w-full h-full">
          {/* Base Track */}
          <path 
            d="M 0 50 Q 500 10, 1000 50 T 2000 50 T 3000 50 T 4000 50 L 5000 50" 
            stroke="rgba(255,255,255,0.06)" 
            strokeWidth="8" 
            strokeLinecap="round"
          />
          {/* Animated Highlight Draw Track */}
          <path 
            ref={pathRef}
            d="M 0 50 Q 500 10, 1000 50 T 2000 50 T 3000 50 T 4000 50 L 5000 50" 
            stroke="var(--coral)" 
            strokeWidth="6" 
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div ref={containerRef} className="flex h-full w-[500vw] relative z-20">
        
        {/* PANEL 1: THE CROSSROADS */}
        <div className="journey-panel w-screen h-full flex items-center justify-center px-12 md:px-24">
          <div className="panel-content max-w-[500px] text-left text-[var(--ivory)] relative z-30">
            <span className="text-[10px] font-mono tracking-[4px] text-[var(--coral)] uppercase block mb-4">
              Phase 01 / The Horizon
            </span>
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[var(--coral)] mb-6 border border-white/10">
              <DoorOpen size={28} />
            </div>
            <h3 className="font-display text-4xl md:text-5xl font-light leading-tight tracking-tight mb-4">
              The Crossroads of <span className="italic text-[var(--coral)]">Class 12</span>
            </h3>
            <p className="text-sm text-[#aaa69d] font-light leading-relaxed">
              After finishing higher secondary boards, students stand at the edge of the future. The pressure of career choice begins. A single decision defines the trajectory of a professional legacy.
            </p>
          </div>
        </div>

        {/* PANEL 2: THE CONFUSION */}
        <div className="journey-panel w-screen h-full flex items-center justify-center px-12 md:px-24">
          <div className="panel-content max-w-[500px] text-left text-[var(--ivory)] relative z-30">
            <span className="text-[10px] font-mono tracking-[4px] text-[var(--stone)] uppercase block mb-4">
              Phase 02 / The Friction
            </span>
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[var(--stone)] mb-6 border border-white/10">
              <HelpCircle size={28} />
            </div>
            <h3 className="font-display text-4xl md:text-5xl font-light leading-tight tracking-tight mb-4">
              The Horizon of <span className="italic text-[var(--stone)]">Doubt</span>
            </h3>
            <p className="text-sm text-[#aaa69d] font-light leading-relaxed">
              Hundreds of exam protocols, fluctuating fee structures, and aggressive university promotions create severe alignment errors. Students struggle to isolate their true native potential from industrial noise.
            </p>
          </div>
        </div>

        {/* PANEL 3: THE MAP */}
        <div className="journey-panel w-screen h-full flex items-center justify-center px-12 md:px-24">
          <div className="panel-content max-w-[500px] text-left text-[var(--ivory)] relative z-30">
            <span className="text-[10px] font-mono tracking-[4px] text-[var(--coral)] uppercase block mb-4">
              Phase 03 / The Blueprint
            </span>
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[var(--coral)] mb-6 border border-white/10">
              <Compass size={28} />
            </div>
            <h3 className="font-display text-4xl md:text-5xl font-light leading-tight tracking-tight mb-4">
              Bespoke <span className="italic text-[var(--coral)]">Scientific Alignment</span>
            </h3>
            <p className="text-sm text-[#aaa69d] font-light leading-relaxed">
              We intercept this confusion with our advanced psychometric alignment profile, mapping cognitive strengths, aptitudes, and personality keys to suitable occupational fields.
            </p>
          </div>
        </div>

        {/* PANEL 4: THE STRATEGY */}
        <div className="journey-panel w-screen h-full flex items-center justify-center px-12 md:px-24">
          <div className="panel-content max-w-[500px] text-left text-[var(--ivory)] relative z-30">
            <span className="text-[10px] font-mono tracking-[4px] text-[var(--stone)] uppercase block mb-4">
              Phase 04 / The Action
            </span>
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[var(--stone)] mb-6 border border-white/10">
              <Target size={28} />
            </div>
            <h3 className="font-display text-4xl md:text-5xl font-light leading-tight tracking-tight mb-4">
              Architecting the <span className="italic text-[var(--stone)]">Admission Roadmap</span>
            </h3>
            <p className="text-sm text-[#aaa69d] font-light leading-relaxed">
              From college profiles matching NIRF ranks to concierge form support. We map out application schedules, counseling deadlines, and portfolio structures to eliminate friction.
            </p>
          </div>
        </div>

        {/* PANEL 5: THE DESTINATION */}
        <div className="journey-panel w-screen h-full flex items-center justify-center px-12 md:px-24">
          <div className="panel-content max-w-[500px] text-left text-[var(--ivory)] relative z-30">
            <span className="text-[10px] font-mono tracking-[4px] text-[var(--coral)] uppercase block mb-4">
              Phase 05 / The Arrival
            </span>
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[var(--coral)] mb-6 border border-white/10">
              <GraduationCap size={28} />
            </div>
            <h3 className="font-display text-4xl md:text-5xl font-light leading-tight tracking-tight mb-4">
              Securing the <span className="italic text-[var(--coral)]">Ultimate Placement</span>
            </h3>
            <p className="text-sm text-[#aaa69d] font-light leading-relaxed">
              The destination is set. By aligning native aptitude with tier-one NAAC A++ institutions, our students secure successful placements, preparing to engineer the future.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentJourney;
