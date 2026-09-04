import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cog, PenTool, Beaker, BarChart3, BookOpen, Plus, Minus, ArrowRight, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DecisionTree = () => {
  const sectionRef = useRef(null);
  const treeRef = useRef(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const categories = [
    {
      id: "engineering",
      title: "ENGINEERING",
      icon: <Cog size={16} className="text-[#a8b7a0]" />,
      fields: [
        "Computer Science",
        "Mechanical",
        "Civil",
        "Electrical",
        "AI & Robotics",
      ],
    },
    {
      id: "design",
      title: "DESIGN",
      icon: <PenTool size={16} className="text-[var(--coral)]" />,
      fields: [
        "UI/UX Design",
        "Product Design",
        "Animation",
        "Fashion Design",
        "Interior Design",
      ],
    },
    {
      id: "science",
      title: "SCIENCE",
      icon: <Beaker size={16} className="text-[#a8b7a0]" />,
      fields: [
        "Medicine",
        "Biotechnology",
        "Data Science",
        "Research",
        "Environmental Sci.",
      ],
    },
    {
      id: "commerce",
      title: "COMMERCE",
      icon: <BarChart3 size={16} className="text-[var(--coral)]" />,
      fields: [
        "Finance",
        "Marketing",
        "Business Analytics",
        "Economics",
        "Startups",
      ],
    },
    {
      id: "humanities",
      title: "HUMANITIES",
      icon: <BookOpen size={16} className="text-[#a8b7a0]" />,
      fields: [
        "Psychology",
        "Journalism",
        "Law",
        "Teaching",
        "Public Policy",
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate left side text
      gsap.from(".tree-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Animate the tree columns
      gsap.from(".tree-node", {
        scrollTrigger: {
          trigger: treeRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.2)",
      });

      // Animate the tree lines
      gsap.from(".tree-line", {
        scrollTrigger: {
          trigger: treeRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        strokeDasharray: 300,
        strokeDashoffset: 300,
        duration: 1.5,
        ease: "power2.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="section py-24 md:py-32 bg-[var(--ivory)] text-[var(--ink)] overflow-hidden" id="pathways">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* TOP LEVEL: 12TH GRADE BADGE (Mobile only, hidden on desktop layout) */}
        <div className="flex lg:hidden flex-col items-center justify-center mb-16 tree-text">
          <div className="bg-white border border-[var(--stone)] shadow-sm text-[var(--ink)] text-[10px] font-bold tracking-widest px-6 py-2 rounded-full uppercase flex items-center gap-2">
            <Sparkles size={12} className="text-[var(--coral)]" />
            12th Grade
          </div>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1fr_2fr] items-start">
          
          {/* LEFT PANEL */}
          <div className="flex flex-col justify-between h-full lg:sticky lg:top-32 relative z-10">
            <div>
              <div className="hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[var(--stone)] shadow-sm text-[var(--ink)] text-[10px] font-bold tracking-widest uppercase w-fit mb-8 tree-text">
                <Sparkles size={12} className="text-[var(--coral)]" />
                <span>12th Grade Gateway</span>
              </div>

              <h2 className="tree-text font-display text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.9] tracking-tight text-[var(--ink)]">
                One decision. <br />
                <span className="italic font-display font-light text-[var(--coral)]">Hundreds</span> of <br />
                possibilities.
              </h2>
              <p className="tree-text mt-8 text-[var(--muted)] font-body text-base md:text-lg leading-relaxed max-w-[340px] font-light">
                Every path is incredibly unique. From tech and design to science and arts, yours is waiting to be explored.
              </p>
            </div>
            
            <a 
              href="#careers" 
              className="tree-text mt-12 lg:mt-24 inline-flex items-center gap-3 text-[var(--ink)] font-semibold text-xs tracking-widest uppercase hover:text-[var(--coral)] hover:gap-4 transition-all duration-300 w-fit pb-2 border-b border-[var(--ink)] hover:border-[var(--coral)]"
            >
              View all career paths 
              <ArrowRight size={16} />
            </a>
          </div>

          {/* RIGHT PANEL - GRAPH TREE (Desktop) */}
          <div ref={treeRef} className="w-full relative">
            
            {/* DESKTOP VIEW (Tree Structure) */}
            <div className="hidden lg:block relative w-full pt-8">
              
              {/* SVG Connector Lines from "12th Grade" over to the 5 columns */}
              <div className="absolute top-0 left-[-50%] w-[150%] h-[120px] pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 1000 120" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Central line coming from left text down to horizontal trunk */}
                  <path className="tree-line" d="M 0 40 L 500 40" stroke="rgba(41, 35, 31, 0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
                  {/* Horizontal branching line connecting the 5 columns */}
                  <path className="tree-line" d="M 100 40 L 900 40" stroke="rgba(41, 35, 31, 0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
                  
                  {/* Vertical drops down to each column header */}
                  <path className="tree-line" d="M 100 40 L 100 80" stroke="rgba(41, 35, 31, 0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path className="tree-line" d="M 300 40 L 300 80" stroke="rgba(41, 35, 31, 0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path className="tree-line" d="M 500 40 L 500 80" stroke="rgba(41, 35, 31, 0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path className="tree-line" d="M 700 40 L 700 80" stroke="rgba(41, 35, 31, 0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path className="tree-line" d="M 900 40 L 900 80" stroke="rgba(41, 35, 31, 0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
                </svg>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-5 gap-5 pt-20 relative z-10">
                {categories.map((cat, i) => (
                  <div key={cat.id} className="tree-node flex flex-col items-center group">
                    
                    {/* Icon & Title Header (Pill) */}
                    <div className="flex flex-col items-center justify-center p-4 w-full bg-white rounded-3xl border border-[var(--stone)] shadow-sm group-hover:border-[var(--coral)] group-hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-1">
                      <div className="mb-2 w-10 h-10 rounded-full bg-[var(--ivory)] border border-[var(--stone)]/30 flex items-center justify-center">
                        {cat.icon}
                      </div>
                      <h4 className="font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-[var(--ink)] text-center">
                        {cat.title}
                      </h4>
                    </div>

                    {/* Dotted Vertical Connector to list */}
                    <div className="h-6 w-px border-l-2 border-dotted border-[var(--stone)]/50 group-hover:border-[var(--coral)]/50 transition-colors duration-300" />

                    {/* Majors / Fields List */}
                    <div className="w-full flex flex-col gap-0 bg-white rounded-[24px] border border-[var(--stone)]/80 shadow-sm overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                      {cat.fields.map((field, idx) => (
                        <div 
                          key={idx}
                          className="px-4 py-3 text-[11px] font-medium text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--ivory)] cursor-pointer transition-colors duration-200 border-b border-[var(--stone)]/30 last:border-b-0 flex items-center justify-between"
                        >
                          {field}
                          <ArrowRight size={10} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[var(--coral)]" />
                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* MOBILE VIEW (Accordions) */}
            <div className="lg:hidden flex flex-col gap-4">
              {categories.map((cat, i) => {
                const isOpen = activeAccordion === i;
                return (
                  <div 
                    key={cat.id}
                    className="border border-[var(--stone)] rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300"
                  >
                    {/* Header bar */}
                    <button
                      className="w-full flex items-center justify-between p-5 text-left font-body text-sm font-semibold tracking-wider uppercase text-[var(--ink)]"
                      onClick={() => toggleAccordion(i)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[var(--ivory)] flex items-center justify-center border border-[var(--stone)]/30">
                          {cat.icon}
                        </div>
                        <span>{cat.title}</span>
                      </div>
                      <div className={`text-[var(--muted)] transition-transform duration-300 ${isOpen ? "rotate-180 text-[var(--coral)]" : ""}`}>
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>

                    {/* Accordion panel content */}
                    <div 
                      className="transition-all duration-300 ease-in-out overflow-hidden bg-[var(--ivory)]/50"
                      style={{
                        maxHeight: isOpen ? "300px" : "0px",
                        borderTop: isOpen ? "1px solid var(--stone)" : "none",
                      }}
                    >
                      <div className="p-2 flex flex-col">
                        {cat.fields.map((field, idx) => (
                          <div 
                            key={idx}
                            className="px-6 py-3 text-xs font-medium text-[var(--muted)] hover:text-[var(--ink)] transition-colors duration-200 border-b border-[var(--stone)]/30 last:border-b-0 flex items-center justify-between"
                          >
                            <span>{field}</span>
                            <ArrowRight size={14} className="text-[var(--coral)] opacity-50" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DecisionTree;
