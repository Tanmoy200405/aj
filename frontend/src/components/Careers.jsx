import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Sparkles, Layers, Cpu, Palette, Compass, Briefcase } from "lucide-react";

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
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const careerData = [
    {
      num: "01",
      title: "BUILD",
      type: "Engineering & Tech",
      desc: "Software, Robotics, Hardware & Systems",
      icon: Cpu,
      tags: ["AI & Coding", "Robotics", "System Design"],
      img: imgBuild,
    },
    {
      num: "02",
      title: "CREATE",
      type: "Design & Expression",
      desc: "UI/UX, Architecture, Media & Animation",
      icon: Palette,
      tags: ["UI/UX Design", "3D Motion", "Architecture"],
      img: imgCreate,
    },
    {
      num: "03",
      title: "DISCOVER",
      type: "Science & Data",
      desc: "Research, Medicine, AI & Biotechnology",
      icon: Compass,
      tags: ["Data Science", "Biotech", "Medical Research"],
      img: imgDiscover,
    },
    {
      num: "04",
      title: "LEAD",
      type: "Business & Strategy",
      desc: "Finance, Management & Entrepreneurship",
      icon: Briefcase,
      tags: ["Fintech", "Startups", "Strategy"],
      img: imgLead,
    },
  ];

  return (
    <section ref={sectionRef} className="section py-24 bg-[#111110] text-[#F5F2EA] relative overflow-hidden" id="careers">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--coral)]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* LEFT COLUMN - Editorial Section Header */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full lg:sticky lg:top-36">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[var(--coral)] text-xs font-semibold uppercase tracking-widest mb-6">
                <Sparkles size={13} />
                <span>Explore Disciplines</span>
              </div>

              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium leading-[0.95] tracking-tight text-[#F5F2EA] mb-6">
                Explore. <br />
                Discover. <br />
                <span className="italic font-display text-[var(--coral)]">Become.</span>
              </h2>

              <p className="text-[#A3A099] text-sm md:text-base leading-relaxed max-w-[340px] mb-8 font-light">
                Step into specialized professional fields designed to align your innate talent with high-impact global careers.
              </p>
            </div>
            
            <Link 
              to="/careers" 
              className="btn btn-coral inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold py-3.5 px-7 rounded-full w-fit group shadow-lg"
            >
              <span>Explore All Pathways</span>
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          {/* RIGHT COLUMN - Interactive 2x2 Pillar Cards Grid */}
          <div className="lg:col-span-8 w-full">
            <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {careerData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link 
                    to="/careers"
                    state={{ category: item.title }}
                    key={index}
                    className="group relative flex flex-col justify-between p-7 rounded-3xl bg-[#1A1A18] border border-white/10 hover:border-[var(--coral)] transition-all duration-500 overflow-hidden min-h-[380px] shadow-xl hover:shadow-2xl hover:-translate-y-1"
                  >
                    {/* Background Zoom Image with Dark Gradient Sweep */}
                    <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl opacity-40 group-hover:opacity-75 transition-opacity duration-500">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-[#111110]/70 to-transparent" />
                    </div>

                    {/* Card Top: Number & Icon Badge */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-[var(--coral)]">
                        <IconComponent size={20} />
                      </div>
                      <span className="font-mono text-xs text-[var(--coral)] tracking-wider font-bold bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                        {item.num} / 04
                      </span>
                    </div>

                    {/* Card Middle: Title & Tags */}
                    <div className="relative z-10 my-auto py-6">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--coral)] block mb-1">
                        {item.type}
                      </span>
                      <h3 className="font-display text-4xl font-medium tracking-tight text-[#F5F2EA] mb-2 group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#A3A099] font-light leading-relaxed mb-4">
                        {item.desc}
                      </p>

                      {/* Specialization Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag, idx) => (
                          <span 
                            key={idx}
                            className="text-[10px] bg-white/10 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-white/80 border border-white/10 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Bottom: Action CTA Bar */}
                    <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                      <span className="text-xs font-bold uppercase tracking-wider text-white/60 group-hover:text-[var(--coral)] transition-colors">
                        Discover Discipline
                      </span>
                      
                      <div className="w-9 h-9 rounded-full bg-[var(--coral)] text-[#111110] flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300 shadow-md">
                        <ArrowUpRight size={18} strokeWidth={2.5} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Careers;
