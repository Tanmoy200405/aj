import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StoryVideo = ({ src, fallbackSrc, isMobile, isReducedMotion, sectionRef }) => {
  const videoRef = useRef(null);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sourceToUse, setSourceToUse] = useState(src);

  useEffect(() => {
    setSourceToUse(src);
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef?.current;
    if (!video || hasError || !section) return;

    if (isMobile || isReducedMotion) {
      video.playbackRate = 1.0;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      
      const playVideo = async () => {
        try {
          if (video.paused) {
            await video.play();
          }
        } catch (e) {
          console.warn("Autoplay was prevented, retrying: ", e);
        }
      };
      playVideo();
    } else {
      video.pause();
      
      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          // Direct property assignment is the fastest possible way to scrub video in the DOM!
          if (video.duration && !isNaN(video.duration)) {
            video.currentTime = self.progress * video.duration;
          }
        }
      });

      return () => st.kill();
    }
  }, [isMobile, isReducedMotion, sourceToUse, hasError, sectionRef]);

  const handleLoadedMetadata = () => {
    setIsLoaded(true);
  };

  const handleVideoError = () => {
    if (sourceToUse !== fallbackSrc && fallbackSrc) {
      console.warn(`Failed to load video: ${sourceToUse}. Trying fallback: ${fallbackSrc}`);
      setSourceToUse(fallbackSrc);
    } else {
      console.error(`Failed to load video source and fallback.`);
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#090B10] via-[#111A2B] to-[#090B10] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,106,0.08),transparent_70%)]" />
        <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center animate-pulse">
          <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center" />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(9,11,16,0)_50%,rgba(9,11,16,0.85)_100%)] z-10 pointer-events-none" />

      {!isLoaded && (
        <div className="absolute inset-0 bg-[#090B10] flex items-center justify-center z-20">
          <div className="w-12 h-12 rounded-full border-2 border-gold/10 border-t-gold animate-spin" />
        </div>
      )}

      <video
        ref={videoRef}
        src={sourceToUse}
        className="w-full h-full object-cover transition-opacity duration-1000 ease-out"
        style={{ opacity: isLoaded ? 1 : 0 }}
        muted
        playsInline
        preload={isMobile ? "none" : "auto"}
        onLoadedMetadata={handleLoadedMetadata}
        onError={handleVideoError}
      />
    </div>
  );
};

export default StoryVideo;
