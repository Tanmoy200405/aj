import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const textContainerRef = useRef(null);
  const progressLineRef = useRef(null);

  const words = ["DREAM", "DESIGN", "ACHIEVE", "A & J"];

  useEffect(() => {
    // Disable body scroll during preload
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          if (onComplete) onComplete();
        }
      });

      // 1. Reset states
      gsap.set(".preload-word", { opacity: 0, y: 30, filter: "blur(4px)" });
      gsap.set(progressLineRef.current, { width: "0%" });

      // 2. Animate counter number from 0 to 100
      const counterObj = { value: 0 };
      tl.to(counterObj, {
        value: 100,
        duration: 2.2,
        ease: "power2.out",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.floor(counterObj.value).toString().padStart(3, "0");
          }
        }
      }, 0);

      // 3. Animate progress bar width
      tl.to(progressLineRef.current, {
        width: "100%",
        duration: 2.2,
        ease: "power2.out"
      }, 0);

      // 4. Stagger reveal keywords
      const wordElements = textContainerRef.current.querySelectorAll(".preload-word");
      wordElements.forEach((el, index) => {
        const startOffset = index * 0.5;
        tl.to(el, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.4,
          ease: "power3.out"
        }, startOffset)
        .to(el, {
          opacity: 0,
          y: -30,
          filter: "blur(4px)",
          duration: 0.3,
          ease: "power3.in"
        }, startOffset + 0.45);
      });

      // 5. Slide preloader UP with a luxury clip-path reveal
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 1.0,
        ease: "power4.inOut"
      }, "+=0.1");

    }, containerRef);

    return () => {
      document.body.style.overflow = "";
      ctx.revert();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#111111] text-[var(--ivory)] px-8 py-12 md:px-16 md:py-20 select-none overflow-hidden"
    >
      {/* Top Section: Brand Identity */}
      <div className="flex justify-between items-center w-full">
        <span className="text-[10px] font-mono tracking-[4px] text-[var(--stone)] uppercase">
          A & J Career Guidance
        </span>
        <span className="text-[10px] font-mono tracking-[4px] text-[var(--coral)] uppercase">
          Bespoke Advisory
        </span>
      </div>

      {/* Center Section: Staggering Words */}
      <div ref={textContainerRef} className="relative flex items-center justify-center h-48 w-full">
        {words.map((word, index) => (
          <h2 
            key={index} 
            className="preload-word absolute font-display text-5xl md:text-8xl lg:text-9xl font-light tracking-tight text-[var(--ivory)]"
          >
            {word === "A & J" ? (
              <>
                A <span className="font-display italic text-[var(--coral)]">&</span> J
              </>
            ) : (
              word
            )}
          </h2>
        ))}
      </div>

      {/* Bottom Section: Progress Bar & Counter */}
      <div className="w-full flex flex-col gap-4">
        {/* Progress Line */}
        <div className="w-full h-[1px] bg-[var(--stone)]/20 relative">
          <div 
            ref={progressLineRef} 
            className="absolute left-0 top-0 h-full bg-[var(--coral)]"
          />
        </div>

        <div className="flex justify-between items-end w-full">
          <span className="text-xs font-light text-[var(--stone)]">
            SYSTEM INITIALIZING
          </span>
          <span 
            ref={counterRef} 
            className="font-display text-6xl md:text-8xl font-light text-[var(--ivory)] leading-none tracking-tight"
          >
            000
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
