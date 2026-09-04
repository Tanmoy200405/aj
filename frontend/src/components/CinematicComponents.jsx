import React from 'react';

export const StoryScene = React.forwardRef(({ children, className = '', id }, ref) => {
  return (
    <div ref={ref} id={id} className={`absolute inset-0 w-full h-full overflow-hidden will-change-transform ${className}`}>
      {children}
    </div>
  );
});

export const SceneText = React.forwardRef(({ children, className = '', animationStyle = 'SIDE_REVEAL' }, ref) => {
  // Styles: SIDE_REVEAL, VERTICAL_EDITORIAL, CLIP_REVEAL
  return (
    <div className={`absolute inset-0 flex flex-col justify-center px-8 md:px-24 w-full h-full z-20 pointer-events-none ${className}`}>
      <h2 ref={ref} className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight drop-shadow-xl text-warm-ivory max-w-5xl leading-tight">
        {children}
      </h2>
    </div>
  );
});

export const CinematicImage = React.forwardRef(({ src, video, alt, className = '', priority = false }, ref) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-background">
      {video ? (
        <video
          ref={ref}
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover will-change-transform ${className}`}
        />
      ) : (
        <img
          ref={ref}
          src={src}
          alt={alt}
          className={`w-full h-full object-cover will-change-transform ${className}`}
          loading={priority ? "eager" : "lazy"}
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop";
          }}
        />
      )}
      {/* Cinematic dark overlay with vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/60 z-10 pointer-events-none" />
    </div>
  );
});
