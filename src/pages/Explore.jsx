import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/Hero";
import StudentJourney from "../components/StudentJourney";
import DecisionTree from "../components/DecisionTree";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  useEffect(() => {
    // Initialize smooth scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="bg-[var(--ivory)] min-h-screen text-[var(--ink)] selection:bg-[var(--coral)] selection:text-white">
      <Hero />
      <StudentJourney />
      <DecisionTree />
      <Footer />
    </div>
  );
};

export default Explore;
