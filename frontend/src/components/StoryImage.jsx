import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StoryImage = ({ src, fallbackSrc, sectionRef }) => {
  const [hasError, setHasError] = useState(false);
  const [sourceToUse, setSourceToUse] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    setSourceToUse(src);
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  useLayoutEffect(() => {
    const section = sectionRef?.current;
    const img = imgRef.current;
    if (!section || !img || hasError) return;

    let ctx = gsap.context(() => {
      // Ken Burns style animation driven by scroll!
      gsap.fromTo(img, 
        { scale: 1.05, x: -15, y: -8 },
        { 
          scale: 1.18, 
          x: 15, 
          y: 8,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [hasError, sectionRef]);

  const handleImageError = () => {
    if (sourceToUse !== fallbackSrc && fallbackSrc) {
      console.warn(`Failed to load image: ${sourceToUse}. Trying fallback: ${fallbackSrc}`);
      setSourceToUse(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#090B10] via-[#713E48]/20 to-[#090B10] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(113,62,72,0.1),transparent_70%)]" />
        <div className="text-gold/40 text-xs font-mono tracking-widest uppercase">Nostalgic Scene</div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black select-none">
      {/* Dark vignette overlay for cinematic mood */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(9,11,16,0.1)_40%,rgba(9,11,16,0.9)_100%)] z-10 pointer-events-none" />

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#090B10] flex items-center justify-center z-20">
          <div className="w-12 h-12 rounded-full border-2 border-gold/10 border-t-gold animate-spin" />
        </div>
      )}

      <img
        ref={imgRef}
        src={sourceToUse}
        alt="Cinematic Story Scene"
        className="w-full h-full object-cover transition-opacity duration-700 ease-out"
        style={{
          opacity: isLoaded ? 1 : 0,
          willChange: "transform"
        }}
        onLoad={() => setIsLoaded(true)}
        onError={handleImageError}
      />
    </div>
  );
};

export default StoryImage;
