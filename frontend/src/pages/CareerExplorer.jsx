import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";
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
        console.error("Backend offline, falling back to local catalog mockup", err);
        // Fallback mockup
        const mockCareers = [
          { id: "software-engineering", name: "Software Engineering", category: "BUILD", short_desc: "Build the technology people use daily.", duration: "4 Years", growth: "High", skills: ["Coding", "Algorithms"], img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" },
          { id: "data-science", name: "Data Science", category: "ANALYZE", short_desc: "Analyze and mine massive data streams.", duration: "4 Years", growth: "High", skills: ["Statistics", "Python"], img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
          { id: "product-design", name: "Product Design", category: "CREATE", short_desc: "Design experiences that scale.", duration: "4 Years", growth: "High", skills: ["UI/UX", "Figma"], img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80" }
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
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, [loading, hoveredCat]); // Re-trigger stagger animation when hoveredCat filters the list

  const categories = ["ALL", "BUILD", "CREATE", "DISCOVER", "LEAD", "HELP", "ANALYZE"];

  return (
    <div className="relative min-h-screen">
      
      {/* 1. INTERACTIVE HERO */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black text-[var(--ivory)] py-12">
        {/* Background images container */}
        <div className="absolute inset-0 z-0">
          {Object.entries(categoryBackgrounds).map(([cat, imgUrl]) => (
            <div
              key={cat}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out ${
                hoveredCat === cat ? "opacity-45 scale-100" : "opacity-0 scale-105"
              }`}
              style={{ backgroundImage: `url(${imgUrl})` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
        </div>

        <div className="container relative z-10 text-center px-6">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--coral)] mb-4 block">
            Map Your Path
          </span>
          <h1 className="font-display text-5xl md:text-8xl font-medium tracking-tight mb-6 max-w-[900px] mx-auto leading-none">
            There are more paths<br />than you think.
          </h1>
          <p className="text-[var(--stone)] text-base md:text-lg max-w-[580px] mx-auto mb-12 font-body font-light leading-relaxed">
            Explore careers based on what you enjoy, how you think, and what you want to build. Hover over a discipline category below to filter your perspective.
          </p>

          {/* Interactive categories portal */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 max-w-[800px] mx-auto border-t border-[var(--stone)]/20 pt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onMouseEnter={() => setHoveredCat(cat)}
                className={`font-display text-2xl md:text-4xl tracking-tight transition-all duration-300 ${
                  hoveredCat === cat 
                    ? "text-[var(--coral)] scale-110 font-medium" 
                    : "text-white/60 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CAREER GRID SECTION */}
      <section className="section py-24 bg-[var(--ivory)]" id="catalog">
        <div className="container">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[var(--stone)] pb-8">
            <div>
              <span className="text-xs font-bold text-[var(--coral)] tracking-wider uppercase block mb-2">
                Discover Careers
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-[var(--ink)]">
                The Editorial Catalog
              </h2>
            </div>
            <p className="text-[var(--muted)] text-sm max-w-[340px] mt-4 md:mt-0 leading-relaxed font-body">
              Select a specialized pathway. Learn details about the work environment, average study years, and skills.
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center min-h-[300px]">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-[var(--coral)]" />
            </div>
          ) : (
            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {careers.filter((c) => hoveredCat === "ALL" || c.category === hoveredCat).map((career) => (
                <div 
                  key={career.id} 
                  className="group flex flex-col justify-between bg-white border border-[var(--stone)] hover:border-[var(--coral)] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg p-6"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-6 bg-[var(--stone)]/30">
                      <img 
                        src={career.img} 
                        alt={career.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 bg-[var(--ink)] text-[var(--ivory)] text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full">
                        {career.category}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-medium text-[var(--ink)] mb-3">
                      {career.name}
                    </h3>
                    
                    <p className="text-[var(--muted)] text-xs leading-relaxed mb-6">
                      {career.short_desc}
                    </p>

                    {/* Stats */}
                    <div className="border-t border-[var(--stone)]/50 pt-4 mb-6 flex flex-col gap-2">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-[var(--muted)]">Study Duration:</span>
                        <span className="font-semibold text-[var(--ink)]">{career.duration}</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-[var(--muted)]">Market Demand:</span>
                        <span className="font-semibold text-[var(--ink)]">{career.growth}</span>
                      </div>
                    </div>

                    {/* Skills tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                      {career.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          style={{
                            display: "inline-block",
                            fontSize: "10px",
                            backgroundColor: "var(--stone)",
                            padding: "3px 8px",
                            borderRadius: "6px",
                            color: "var(--ink)",
                            fontWeight: "500"
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to={`/careers/${career.id}`} 
                    className="flex items-center justify-between text-xs font-bold text-[var(--ink)] hover:text-[var(--coral)] group/link border-t border-[var(--stone)]/50 pt-4"
                  >
                    <span>EXPLORE PATHWAY</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default CareerExplorer;
