import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Mouse movement listener
    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        xPercent: -50,
        yPercent: -50,
        duration: 0.12,
        ease: "power2.out",
      });
    };

    // Hover scale effects
    const onMouseEnterLink = () => {
      gsap.to(cursor, {
        scale: 4,
        backgroundColor: "transparent",
        border: "1px solid var(--coral)",
        mixBlendMode: "normal",
        duration: 0.25,
      });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "var(--coral)",
        border: "none",
        mixBlendMode: "difference",
        duration: 0.25,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Initial query
    const applyHoverListeners = () => {
      const interactiveElements = document.querySelectorAll("a, button, .btn, [role='button'], input, textarea");
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
      });
    };

    applyHoverListeners();

    // Observe changes in DOM to attach events to new items
    const observer = new MutationObserver(applyHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
      const interactiveElements = document.querySelectorAll("a, button, .btn, [role='button'], input, textarea");
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="cursor pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block w-3.5 h-3.5 rounded-full bg-[var(--coral)] mix-blend-difference" 
    />
  );
};

export default Cursor;
