import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, BookOpen, Download, Bookmark, FileText } from "lucide-react";

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const gridRef = useRef(null);

  const categories = ["All", "Career Guides", "Entrance Exams", "College Guides", "Scholarships", "Articles"];

  const resourcesData = [
    {
      title: "The Tech Developer Curriculum",
      cat: "Career Guides",
      desc: "Complete skill pathways mapping Python, JavaScript, system structures, and AI algorithms.",
      readTime: "12 Pages • PDF",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Mastering Design Portfolios",
      cat: "Career Guides",
      desc: "Learn how to structure UI/UX projects, graphic designs, and architectural portfolios for recruiters.",
      readTime: "8 Pages • PDF",
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "JEE Advanced Strategy Matrix",
      cat: "Entrance Exams",
      desc: "Detailed handbook on high-weightage topics, exam prep schedules, and test day tips.",
      readTime: "15 mins read",
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "CLAT Legal Reasoning Guide",
      cat: "Entrance Exams",
      desc: "Precedent templates, logical deduction methods, and timing strategy models for CLAT.",
      readTime: "10 mins read",
      img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "IIT Placement Insights Report",
      cat: "College Guides",
      desc: "Analyzing recruitment records, average packages, and key tech recruiter profiles.",
      readTime: "6 Pages • PDF",
      img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "NID Studio Test Secrets",
      cat: "College Guides",
      desc: "Detailed tips on handling NID creative test parameters and model sculpting tests.",
      readTime: "5 Pages • PDF",
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "National Scholarship Directory",
      cat: "Scholarships",
      desc: "Curated registry of financial aid programs for engineering, arts, and clinical degrees in India.",
      readTime: "18 Pages • PDF",
      img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Why Mentorship beats Guessing",
      cat: "Articles",
      desc: "An analytical essay exploring why systematic counseling leads to 45% higher career retention.",
      readTime: "8 mins read",
      img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const filteredResources = activeCategory === "All" 
    ? resourcesData 
    : resourcesData.filter(r => r.cat === activeCategory);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" }
      );
    }
  }, [activeCategory]);

  return (
    <div className="bg-[var(--ivory)] min-h-screen pb-24">
      {/* 1. HERO */}
      <section className="section py-20 border-b border-[var(--stone)]/40 text-center">
        <div className="container">
          <span className="text-xs font-bold text-[var(--coral)] uppercase tracking-widest block mb-4">
            Curated Library
          </span>
          <h1 className="font-display text-5xl md:text-8xl font-medium tracking-tight text-[var(--ink)] mb-6 max-w-[800px] mx-auto leading-none">
            Useful things<br />for what's next.
          </h1>
          <p className="text-[var(--muted)] text-base md:text-lg max-w-[480px] mx-auto mb-12">
            Read expert research manuals, entrance exam strategy documents, and college scholarship directories.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY SELECTOR */}
      <section className="section py-6 bg-white border-b border-[var(--stone)]/40 sticky top-[80px] z-30">
        <div className="container flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[var(--ink)] text-[var(--ivory)] border-[var(--ink)]"
                  : "bg-transparent text-[var(--muted)] border-[var(--stone)] hover:border-[var(--ink)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. MAGAZINE CARDS */}
      <section className="section py-16">
        <div className="container">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredResources.map((res, i) => (
              <div 
                key={i} 
                className="group flex flex-col justify-between bg-white border border-[var(--stone)] hover:border-[var(--coral)] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md p-5"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-5 bg-[var(--stone)]/30">
                    <img 
                      src={res.img} 
                      alt={res.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-[var(--ink)] text-[var(--ivory)] text-[9px] font-bold tracking-widest px-2.5 py-0.5 rounded-full uppercase">
                      {res.cat}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-[var(--coral)] tracking-wider block mb-2">
                    {res.readTime}
                  </span>

                  <h3 className="font-display text-lg font-medium text-[var(--ink)] mb-3 leading-snug">
                    {res.title}
                  </h3>
                  
                  <p className="text-xs text-[var(--muted)] leading-relaxed mb-6 font-body">
                    {res.desc}
                  </p>
                </div>

                <button 
                  className="flex items-center justify-between text-xs font-bold text-[var(--ink)] hover:text-[var(--coral)] group/link border-t border-[var(--stone)]/50 pt-4"
                >
                  <span className="flex items-center gap-1.5">
                    <FileText size={14} />
                    READ GUIDE
                  </span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Resources;
