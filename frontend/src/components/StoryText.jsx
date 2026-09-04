import React from "react";

const StoryText = ({ segments }) => {
  if (!segments || segments.length === 0) return null;

  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-5 md:px-16 w-full h-full text-center">
      {segments.map((seg, index) => (
        <h2
          key={index}
          className={`text-seg-${index} absolute font-display text-4xl md:text-6xl lg:text-8xl text-ivory tracking-tight drop-shadow-2xl`}
          style={{
            opacity: 0,
            transform: "translateY(40px)",
            filter: "blur(8px)",
            willChange: "opacity, transform, filter",
          }}
        >
          {seg.text}
        </h2>
      ))}
    </div>
  );
};

export default StoryText;
