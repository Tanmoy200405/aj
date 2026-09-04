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
  const listRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Desktop cards stagger reveal
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        });
      }

      // Mobile list item reveal
      if (listRef.current) {
        gsap.from(listRef.current.children, {
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          x: -30,
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
      title: "BUILD",
      type: "Engineering",
      desc: "Tech + Innovation",
      img: imgBuild,
    },
    {
      num: "02",
      title: "CREATE",
      type: "Design",
      desc: "Art + Expression",
      img: imgCreate,
    },
    {
      num: "03",
      title: "DISCOVER",
      type: "Science",
      desc: "Research + Curiosity",
      img: imgDiscover,
    },
    {
      num: "04",
      title: "LEAD",
      type: "Business",
      desc: "Impact + Leadership",
      img: imgLead,
    },
  ];

  return (
    <section ref={sectionRef} className="section section-dark py-24 bg-[var(--ink)] text-[var(--ivory)]" id="careers">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_2.2fr] items-start">
          
          {/* LEFT COLUMN - TEXT */}
          <div className="flex flex-col justify-between h-full lg:sticky lg:top-32">
            <div>
              <h2 className="section-title text-[var(--ivory)] text-5xl md:text-6xl font-medium leading-[0.92] tracking-tight">
                Explore.<br />Discover.<br />Become.
              </h2>
              <p className="mt-6 text-[#aaa69d] text-base leading-relaxed max-w-[320px]">
                Dive into different worlds and find what truly inspires you.
              </p>
            </div>
            
            <Link 
              to="/careers" 
              className="mt-10 lg:mt-24 inline-flex items-center gap-2 text-[var(--coral)] font-semibold text-sm hover:gap-3 transition-all duration-300"
            >
              Explore all careers 
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* RIGHT COLUMN - CARDS (Desktop) / LIST (Mobile) */}
          <div className="w-full">
            
            {/* Desktop grid layout */}
            <div ref={cardsRef} className="hidden md:grid grid-cols-2 xl:grid-cols-4 gap-6">
              {careerData.map((item, index) => (
                <Link 
                  to="/careers"
                  state={{ category: item.title }}
                  key={index}
                  className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#1c1c1a]/50 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden h-[450px]"
                >
                  {/* Background Zoom Image on Hover */}
                  <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/40 to-transparent" />
                  </div>

                  {/* Card Content Top */}
                  <div className="relative z-10">
                    <span className="text-xs font-mono text-[var(--coral)]">{item.num}</span>
                    <h3 className="font-display text-3xl font-medium tracking-tight mt-1 text-[var(--ivory)]">{item.title}</h3>
                  </div>

                  {/* Card Content Bottom */}
                  <div className="relative z-10 flex items-end justify-between mt-auto">
                    <div>
                      <p className="text-xs text-[#aaa69d] font-semibold tracking-wider uppercase">{item.type}</p>
                      <p className="text-[10px] text-white/55 mt-0.5">{item.desc}</p>
                    </div>
                    
                    {/* Circle button */}
                    <div className="w-10 h-10 rounded-full bg-[var(--coral)] flex items-center justify-center text-[var(--ink)] transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile list layout */}
            <div ref={listRef} className="md:hidden flex flex-col border-t border-white/10">
              {careerData.map((item, index) => (
                <Link 
                  to="/careers"
                  state={{ category: item.title }}
                  key={index}
                  className="flex items-center justify-between py-6 border-b border-white/10 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-[#6b6b63]">{item.num}</span>
                    
                    {/* Tiny thumbnail */}
                    <div className="w-14 h-10 rounded-lg overflow-hidden border border-white/10 bg-white/5">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-medium text-[var(--ivory)] group-hover:text-[var(--coral)] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[10px] text-[#aaa69d] tracking-wide mt-0.5">{item.type} • {item.desc}</p>
                    </div>
                  </div>
                  
                  <div className="text-[#aaa69d] group-hover:text-[var(--coral)] transition-colors duration-300">
                    <ArrowUpRight size={20} strokeWidth={1.5} />
                  </div>
                </Link>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Careers;
