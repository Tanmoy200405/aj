import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CareerQuizCTA = () => {
  return (
    <div 
      className="interactive-ui absolute bottom-[15svh] left-1/2 flex flex-col items-center justify-center"
      style={{
        opacity: 0,
        visibility: "hidden",
        transform: `translate(-50%, 20px)`
      }}
    >
      <Link
        to="/quiz"
        className="group relative flex items-center gap-3 bg-ivory text-ink font-sans text-xs md:text-sm font-bold tracking-widest uppercase px-6 py-4 md:px-8 md:py-5 rounded-full overflow-hidden shadow-xl"
      >
        <div className="absolute inset-0 bg-[#713E48] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">TAKE THE CAREER QUIZ</span>
        <ArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
      </Link>
    </div>
  );
};

export default CareerQuizCTA;
