import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cog, PenTool, Beaker, BarChart3, BookOpen, Plus, Minus, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DecisionTree = () => {
  const sectionRef = useRef(null);
  const treeRef = useRef(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const categories = [
    {
      id: "engineering",
      title: "ENGINEERING",
      icon: <Cog size={18} className="text-[#a8b7a0]" />,
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
      icon: <PenTool size={18} className="text-[#ff5b45]" />,
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
      icon: <Beaker size={18} className="text-[#a8b7a0]" />,
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
      icon: <BarChart3 size={18} className="text-[#ff5b45]" />,
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
      icon: <BookOpen size={18} className="text-[#a8b7a0]" />,
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
        ease: "power2.out",
      });

      // Animate the tree lines (SVG paths)
      gsap.from(".tree-line", {
        scrollTrigger: {
          trigger: treeRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        strokeDasharray: 200,
        strokeDashoffset: 200,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="section py-24 bg-[var(--ivory)] text-[var(--ink)]" id="colleges">
      <div className="container">
        
        {/* TOP LEVEL: 12TH GRADE BADGE (Hidden on desktop left panel, shown top center) */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="bg-[var(--ink)] text-[var(--ivory)] text-xs font-bold tracking-widest px-6 py-2.5 rounded-full uppercase">
            12th Grade
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_2.2fr] items-start">
          
          {/* LEFT PANEL */}
          <div className="flex flex-col justify-between h-full lg:sticky lg:top-32">
            <div>
              <h2 className="section-title text-5xl md:text-6xl font-medium leading-[0.92] tracking-tight">
                One decision.<br />Hundreds of<br />possibilities.
              </h2>
              <p className="mt-6 text-[var(--muted)] text-base leading-relaxed max-w-[320px]">
                Every path is unique. Yours is waiting to be explored.
              </p>
            </div>
            
            <a 
              href="#careers" 
              className="mt-10 lg:mt-24 inline-flex items-center gap-2 text-[var(--coral)] font-semibold text-sm hover:gap-3 transition-all duration-300"
            >
              View all career paths 
              <ArrowRight size={16} />
            </a>
          </div>

          {/* RIGHT PANEL - GRAPH TREE (Desktop) / ACCORDION (Mobile) */}
          <div ref={treeRef} className="w-full">
            
            {/* DESKTOP VIEW (Tree Structure) */}
            <div className="hidden lg:block relative w-full">
              
              {/* SVG Connector Lines */}
              <div className="absolute top-0 left-0 w-full h-[60px] pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 800 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Central vertical line from top down */}
                  <path className="tree-line" d="M 400 0 L 400 20" stroke="var(--stone)" strokeWidth="1.5" />
                  {/* Horizontal branching line connecting the 5 columns */}
                  {/* Columns centers are roughly at: 80, 240, 400, 560, 720 (equal spacing) */}
                  <path className="tree-line" d="M 80 20 L 720 20" stroke="var(--stone)" strokeWidth="1.5" />
                  {/* Vertical lines going down to each column header */}
                  <path className="tree-line" d="M 80 20 L 80 60" stroke="var(--stone)" strokeWidth="1.5" />
                  <path className="tree-line" d="M 240 20 L 240 60" stroke="var(--stone)" strokeWidth="1.5" />
                  <path className="tree-line" d="M 400 20 L 400 60" stroke="var(--stone)" strokeWidth="1.5" />
                  <path className="tree-line" d="M 560 20 L 560 60" stroke="var(--stone)" strokeWidth="1.5" />
                  <path className="tree-line" d="M 720 20 L 720 60" stroke="var(--stone)" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-5 gap-6 pt-16 relative z-10">
                {categories.map((cat, i) => (
                  <div key={cat.id} className="tree-node flex flex-col items-center text-center">
                    
                    {/* Icon & Title Header */}
                    <div className="flex flex-col items-center justify-center p-3 w-full border border-[var(--stone)] rounded-xl bg-[var(--ivory)] hover:border-[var(--coral)] hover:shadow-md transition-all duration-300">
                      <div className="mb-2 p-2 rounded-full bg-[var(--stone)]/20">
                        {cat.icon}
                      </div>
                      <h4 className="font-body text-xs font-bold tracking-widest text-[var(--ink)]">
                        {cat.title}
                      </h4>
                    </div>

                    {/* Dotted Vertical Connector to list */}
                    <div className="h-6 w-px border-l border-dashed border-[var(--stone)]" />

                    {/* Majors / Fields List */}
                    <div className="w-full flex flex-col gap-2.5 p-4 rounded-xl bg-[var(--stone)]/10 border border-[var(--stone)]/20">
                      {cat.fields.map((field, idx) => (
                        <div 
                          key={idx}
                          className="text-xs text-[var(--muted)] hover:text-[var(--ink)] hover:translate-x-1 cursor-pointer transition-all duration-200 text-left py-1 border-b border-[var(--stone)]/10 last:border-b-0"
                        >
                          {field}
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
                    className="border border-[var(--stone)] rounded-2xl overflow-hidden bg-[var(--ivory)] transition-all duration-300"
                  >
                    {/* Header bar */}
                    <button
                      className="w-full flex items-center justify-between p-5 text-left font-body text-sm font-semibold tracking-wider text-[var(--ink)]"
                      onClick={() => toggleAccordion(i)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-[var(--stone)]/20">
                          {cat.icon}
                        </div>
                        <span>{cat.title}</span>
                      </div>
                      <div className="text-[var(--muted)]">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>

                    {/* Accordion panel content */}
                    <div 
                      className="transition-all duration-300 ease-in-out overflow-hidden"
                      style={{
                        maxHeight: isOpen ? "300px" : "0px",
                        borderTop: isOpen ? "1px solid var(--stone)" : "none",
                      }}
                    >
                      <div className="p-5 flex flex-col gap-3.5 bg-[var(--stone)]/10">
                        {cat.fields.map((field, idx) => (
                          <div 
                            key={idx}
                            className="text-xs text-[var(--muted)] hover:text-[var(--ink)] transition-colors duration-200 py-1"
                          >
                            • {field}
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
