import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <div 
      className="interactive-ui absolute bottom-[20svh] left-1/2 flex flex-col items-center justify-center"
      style={{
        opacity: 0,
        visibility: "hidden",
        transform: `translate(-50%, 20px)`
      }}
    >
      <Link
        to="/careers"
        className="group relative flex items-center gap-3 bg-gold text-ink font-sans text-sm md:text-base font-bold tracking-widest uppercase px-8 py-5 md:px-10 md:py-6 rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300"
      >
        <div className="absolute inset-0 bg-[#111A2B] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        <span className="relative z-10 transition-colors duration-300 group-hover:text-ivory">DISCOVER YOUR PATH</span>
        <ArrowRight size={20} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ivory" />
      </Link>
    </div>
  );
};

export default FinalCTA;
