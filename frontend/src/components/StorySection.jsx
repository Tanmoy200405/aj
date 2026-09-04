import React, { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StoryVideo from "./StoryVideo";
import StoryImage from "./StoryImage";
import StoryText from "./StoryText";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const StorySection = ({ scene, index, isMobile, isReducedMotion, children }) => {
  const sectionRef = useRef(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // 1. Intersection Observer for lazy loading media (React state is perfectly fine here as it triggers rarely)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsNearViewport(entry.isIntersecting);
        });
      },
      { rootMargin: "100% 0px" } // Pre-load 1 viewport ahead
    );
    observer.observe(section);

    // 2. GSAP Timeline setup for buttery smooth animation
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5, // 0.5 seconds of smoothing removes all scroll lag!
        }
      });

      // Overlay Theme Animations
      if (scene.theme === "school-gate") {
        tl.fromTo(".theme-overlay", 
          { backgroundColor: "rgba(25, 20, 15, 0.3)" },
          { backgroundColor: "rgba(17, 26, 43, 0.5)", duration: 1 }, 0);
      } else if (scene.theme === "pressure") {
        tl.fromTo(".theme-overlay", 
          { backgroundColor: "rgba(9, 11, 16, 0.4)" },
          { backgroundColor: "rgba(9, 11, 16, 0.85)", duration: 1 }, 0);
      }
      
      // Text Segment Animations
      scene.textSegments?.forEach((seg, i) => {
        const duration = seg.end - seg.start;
        const fadeDur = duration * 0.2;
        
        // Fade In
        tl.to(`.text-seg-${i}`, {
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          duration: fadeDur, 
          ease: "power2.out"
        }, seg.start);

        // Fade Out
        tl.to(`.text-seg-${i}`, {
          opacity: 0, 
          y: -40, 
          filter: "blur(8px)",
          duration: fadeDur, 
          ease: "power2.in"
        }, seg.end - fadeDur);
      });

      // Initial Scroll Indicator animation
      if (index === 0) {
        tl.to(".scroll-indicator", { opacity: 0, duration: 0.05 }, 0);
      }

      // Interactive UI element fade-ins (CTAs, Grids)
      if (scene.showQuizCTA || scene.showCategoriesGrid || scene.showPathGrid || scene.showFinalCTA) {
        // If it uses -translate-x-1/2 (like CTAs), we use xPercent to preserve it
        const hasCenterTransform = scene.showQuizCTA || scene.showFinalCTA;
        tl.to(".interactive-ui", 
          { 
            autoAlpha: 1, // handles opacity and visibility
            y: 0, 
            xPercent: hasCenterTransform ? -50 : 0, 
            duration: 0.2, 
            ease: "power2.out" 
          }, 
          0.4 // They fade in exactly after 40% scroll of their section
        );
      }
      
    }, sectionRef);

    return () => {
      observer.disconnect();
      ctx.revert();
    };
  }, [scene, index]);

  // Determine initial static overlay style
  const getInitialOverlayStyle = () => {
    switch (scene.theme) {
      case "school": return { backgroundColor: "rgba(9, 11, 16, 0.25)", mixBlendMode: "multiply" };
      case "school-gate": return { backgroundColor: "rgba(25, 20, 15, 0.3)" };
      case "unknown": return { backgroundColor: "rgba(17, 26, 43, 0.5)" };
      case "pressure": return { backgroundColor: "rgba(9, 11, 16, 0.4)" };
      case "discovery": return { backgroundColor: "rgba(9, 11, 16, 0.2)" };
      case "future": return { background: "radial-gradient(circle at 50% 100%, rgba(201,168,106,0.2) 0%, rgba(9,11,16,0.3) 100%)" };
      default: return { backgroundColor: "rgba(9, 11, 16, 0.3)" };
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full overflow-visible" style={{ height: scene.height }}>
      <div className="sticky top-0 left-0 w-full h-[100svh] overflow-hidden bg-background">
        
        {/* Media Layer */}
        {isNearViewport && (
          scene.type === "video" ? (
            <StoryVideo 
              src={scene.media} 
              fallbackSrc={scene.fallbackMedia} 
              isMobile={isMobile} 
              isReducedMotion={isReducedMotion} 
              sectionRef={sectionRef} // pass ref so video can attach its own timeline
            />
          ) : (
            <StoryImage 
              src={scene.media} 
              fallbackSrc={scene.fallbackMedia} 
              sectionRef={sectionRef} 
            />
          )
        )}

        {/* Theme Color Overlay */}
        <div className="theme-overlay absolute inset-0 z-10 pointer-events-none" style={getInitialOverlayStyle()} />

        {/* Text Layer */}
        {scene.textSegments && (
          <StoryText segments={scene.textSegments} />
        )}

        {/* Scene 01 Initial Scroll Indicator */}
        {index === 0 && (
          <div className="scroll-indicator absolute bottom-[10svh] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
            <span className="font-sans text-xs text-ivory/60 tracking-widest uppercase">Scroll to begin</span>
            <ArrowDown size={16} className="text-ivory animate-bounce" />
          </div>
        )}

        {/* Interactive UI elements injected from parent */}
        {children}
        
      </div>
    </section>
  );
};

export default StorySection;
