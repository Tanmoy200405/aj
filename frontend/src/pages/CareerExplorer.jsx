import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ArrowRight, Sparkles, Filter } from "lucide-react";
import { API_BASE_URL } from "../config/api";

const categoryBackgrounds = {
  ALL: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
  BUILD: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
  CREATE: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
  DISCOVER: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1200&q=80",
  LEAD: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  HELP: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80",
  ANALYZE: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
};

const CareerExplorer = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [hoveredCat, setHoveredCat] = useState(location.state?.category || "ALL");
  const gridRef = useRef(null);

  // Fetch careers from Express backend
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/careers`)
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((data) => {
        setCareers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Backend offline, rendering client catalog", err);
        const mockCareers = [
          { id: "software-engineering", name: "Software Engineering", category: "BUILD", short_desc: "Architect scalable software, mobile apps, and cloud infrastructure.", duration: "4 Years", growth: "32% Annual", skills: ["Coding", "Algorithms", "System Architecture"], img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" },
          { id: "data-science", name: "Data Science & AI", category: "ANALYZE", short_desc: "Uncover insights from massive data streams to drive strategic AI innovation.", duration: "4 Years", growth: "35% Annual", skills: ["Statistics", "Python", "Machine Learning"], img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
          { id: "product-design", name: "UI/UX & Product Design", category: "CREATE", short_desc: "Craft intuitive, human-centered digital experiences and physical products.", duration: "4 Years", growth: "24% Annual", skills: ["UI/UX", "Figma", "User Research"], img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80" },
          { id: "astrophysics", name: "Astrophysics & Space Research", category: "DISCOVER", short_desc: "Investigate cosmic phenomena, orbital telemetry, and space exploration.", duration: "5 Years", growth: "18% Annual", skills: ["Physics", "Mathematics", "Telemetry"], img: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=800&q=80" },
          { id: "corporate-strategy", name: "Management & Strategy", category: "LEAD", short_desc: "Lead global enterprises through market expansion and financial scaling.", duration: "3-4 Years", growth: "28% Annual", skills: ["Strategy", "Financial Modeling", "Leadership"], img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" },
          { id: "clinical-medicine", name: "Medicine & Surgery", category: "HELP", short_desc: "Diagnose, treat, and pioneer life-saving clinical breakthroughs for patient wellness.", duration: "5.5 Years", growth: "25% Annual", skills: ["Diagnostics", "Clinical Care", "Pathology"], img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80" },
          { id: "robotics-engineering", name: "Robotics & Automation", category: "BUILD", short_desc: "Design autonomous hardware systems, drones, and intelligent mechatronics.", duration: "4 Years", growth: "30% Annual", skills: ["Robotics", "Embedded Systems", "CAD"], img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80" },
          { id: "biotechnology", name: "Biotechnology & Genetics", category: "DISCOVER", short_desc: "Develop genomic therapies, vaccines, and bio-engineered solutions.", duration: "4 Years", growth: "22% Annual", skills: ["Genomics", "Lab Tech", "Bio-analytics"], img: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=800&q=80" }
        ];
        setCareers(mockCareers);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading && gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" }
      );
    }
  }, [loading, hoveredCat]);

  const categories = ["ALL", "BUILD", "CREATE", "DISCOVER", "LEAD", "HELP", "ANALYZE"];

  const filteredCareers = hoveredCat === "ALL" 
    ? careers 
    : careers.filter(c => c.category === hoveredCat);

  return (
    <div className="relative min-h-screen bg-[var(--ivory)] text-[var(--ink)]">
      
      {/* 1. HERO HEADER */}
      <section className="pt-28 pb-16 px-4 md:px-8 border-b border-[var(--stone)]/50 bg-[#F4F0E8]">
        <div className="container max-w-[1200px]">
          <span className="text-xs font-bold text-[var(--coral)] uppercase tracking-[0.2em] block mb-3">
            EXPLORE PATHWAYS
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.95] text-[var(--ink)] mb-6">
            Find the career <br />
            <span className="italic text-[var(--coral)] font-light">crafted for you.</span>
          </h1>
          <p className="text-[var(--muted)] text-sm sm:text-base max-w-[560px] leading-relaxed">
            Browse through curated career tracks across engineering, design, scientific research, health, and corporate leadership.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mr-2 flex items-center gap-1.5">
              <Filter size={14} className="text-[var(--coral)]" /> Discipline:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setHoveredCat(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all duration-300 ${
                  hoveredCat === cat
                    ? "bg-[var(--ink)] text-[var(--ivory)] border-[var(--ink)] shadow-sm"
                    : "bg-white text-[var(--ink)] border-[var(--stone)] hover:border-[var(--coral)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CAREER CARDS GRID */}
      <section className="py-16 px-4 md:px-8">
        <div className="container max-w-[1200px]">
          {loading ? (
            <div className="flex items-center justify-center min-h-[300px]">
              <div className="w-10 h-10 border-4 border-[var(--coral)] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : filteredCareers.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-[var(--stone)]">
              <p className="text-[var(--muted)] text-sm">No careers match the selected category filter.</p>
            </div>
          ) : (
            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredCareers.map((career) => (
                <Link
                  key={career.id}
                  to={`/careers/${career.id}`}
                  className="group relative flex flex-col justify-between bg-white rounded-3xl overflow-hidden border border-[var(--stone)] hover:border-[var(--coral)] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Image Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EFECE6]">
                    <img 
                      src={career.img || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"} 
                      alt={career.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] font-mono font-semibold tracking-wider text-white uppercase">
                      {career.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-medium text-[var(--ink)] mb-2 group-hover:text-[var(--coral)] transition-colors">
                        {career.name}
                      </h3>
                      <p className="text-xs md:text-sm text-[var(--muted)] font-body line-clamp-2 mb-4 leading-relaxed">
                        {career.short_desc || career.shortDesc}
                      </p>
                    </div>

                    {/* Metadata Badges */}
                    <div>
                      <div className="flex items-center gap-3 pt-4 border-t border-[var(--stone)]/60 text-[11px] text-[var(--muted)] font-medium mb-4">
                        <span>Duration: <strong className="text-[var(--ink)]">{career.duration || "4 Years"}</strong></span>
                        <span>•</span>
                        <span>Growth: <strong className="text-emerald-700">{career.growth || "High"}</strong></span>
                      </div>

                      <div className="btn w-full justify-between py-3 px-5 text-xs font-semibold uppercase tracking-wider group-hover:bg-[var(--coral)] group-hover:text-white group-hover:border-[var(--coral)] transition-all">
                        <span>Explore Pathway</span>
                        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default CareerExplorer;
