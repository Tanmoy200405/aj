import React from "react";
import { Link } from "react-router-dom";
import { Compass, Map, BookOpen, GraduationCap, Search } from "lucide-react";

const tools = [
  { name: "Career Quiz", desc: "Discover your psychological profile and core strengths.", icon: Compass, link: "/quiz" },
  { name: "Career Explorer", desc: "Browse the ultimate editorial catalog of future careers.", icon: Search, link: "/careers" },
  { name: "Course Explorer", desc: "Find the exact academic degrees to reach your goal.", icon: BookOpen, link: "/courses" },
  { name: "College Explorer", desc: "Discover premier institutions that fit your ambition.", icon: GraduationCap, link: "/colleges" },
  { name: "Career Roadmaps", desc: "Step-by-step visual guides from high school to industry.", icon: Map, link: "/roadmap" },
];

const CareerPathGrid = () => {
  return (
    <div 
      className="interactive-ui absolute inset-0 z-30 flex items-center justify-center px-4 md:px-12"
      style={{
        opacity: 0,
        visibility: "hidden",
        transform: `translateY(20px)`
      }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6 mt-32 md:mt-48">
        {tools.map((tool, i) => {
          const Icon = tool.icon;
          return (
            <Link 
              key={i}
              to={tool.link}
              className="group flex-1 min-w-[260px] bg-ink/80 backdrop-blur-md border border-ivory/10 hover:border-gold/40 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(201,168,106,0.1)]"
            >
              <div className="w-12 h-12 rounded-full bg-ivory/5 border border-ivory/10 flex items-center justify-center mb-5 group-hover:bg-gold/10 group-hover:border-gold/30 transition-colors duration-500">
                <Icon size={20} className="text-ivory group-hover:text-gold transition-colors duration-500" />
              </div>
              <h3 className="font-display text-2xl text-ivory mb-2">{tool.name}</h3>
              <p className="font-sans text-sm text-ivory/60 leading-relaxed group-hover:text-ivory/80 transition-colors duration-300">
                {tool.desc}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CareerPathGrid;
