import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

import imgBuild from "../assets/career_build.png";
import imgCreate from "../assets/career_create.png";
import imgDiscover from "../assets/career_discover.png";
import imgLead from "../assets/career_lead.png";

gsap.registerPlugin(ScrollTrigger);

const Careers = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const careerData = [
    {
      num: "01",
      title: "Build",
      type: "Engineering",
      desc: "Tech, Innovation & Systems",
      img: imgBuild,
    },
    {
      num: "02",
      title: "Create",
      type: "Design",
      desc: "Art, Expression & Media",
      img: imgCreate,
    },
    {
      num: "03",
      title: "Discover",
      type: "Science",
      desc: "Research, Data & Logic",
      img: imgDiscover,
    },
    {
      num: "04",
      title: "Lead",
      type: "Business",
      desc: "Impact, Strategy & Vision",
      img: imgLead,
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[var(--ivory)] text-[var(--ink)] relative" id="careers">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.95] tracking-tight mb-6">
              Explore.<br />
              Discover.<br />
              Become.
            </h2>
            <p className="text-[var(--muted)] font-body text-base md:text-lg max-w-md font-light leading-relaxed">
              Dive into different worlds and find what truly inspires you. Discover pathways tailored to your unique potential.
            </p>
          </div>
          
          <Link 
            to="/careers" 
            className="group flex items-center gap-3 text-[var(--ink)] font-semibold text-sm uppercase tracking-widest pb-2 border-b border-[var(--ink)] hover:text-[var(--coral)] hover:border-[var(--coral)] transition-colors duration-300 w-fit"
          >
            <span>Explore all careers</span>
            <ArrowUpRight size={18} className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Elegant Grid Layout */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {careerData.map((item, index) => (
            <Link 
              to="/careers"
              state={{ category: item.title.toUpperCase() }}
              key={index}
              className="group flex flex-col cursor-pointer"
            >
              {/* Image Container with Soft Shadow and Hover Zoom */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200 mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Hover Action Circle */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                   <ArrowUpRight size={18} className="text-[var(--ink)]" />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-medium mb-1 group-hover:text-[var(--coral)] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-widest text-[var(--muted)] font-semibold mb-1">
                    {item.type}
                  </p>
                  <p className="text-sm text-[var(--muted)] font-light">
                    {item.desc}
                  </p>
                </div>
                <span className="font-mono text-sm text-[var(--muted)] pt-1">
                  {item.num}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Careers;
