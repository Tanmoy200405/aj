import React, { useState, useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CinematicStory from "../components/CinematicStory";

gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useLayoutEffect(() => {
    // Check mobile and reduced motion
    const checkMedia = () => {
      setIsMobile(window.innerWidth < 768);
      setIsReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    };
    checkMedia();
    window.addEventListener("resize", checkMedia);

    // Initialize Lenis for smooth cinematic scrolling
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.removeEventListener("resize", checkMedia);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="bg-background min-h-screen text-ivory selection:bg-gold/30 selection:text-ivory">
      <CinematicStory isMobile={isMobile} isReducedMotion={isReducedMotion} />
    </div>
  );
};

export default Explore;
