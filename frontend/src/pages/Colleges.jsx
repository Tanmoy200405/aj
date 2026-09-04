import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ArrowRight, Filter, RefreshCw } from "lucide-react";
import { collegeData } from "../data/collegeData";
import { API_BASE_URL } from "../config/api";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const listRef = useRef(null);

  const filters = ["All", "Engineering", "Medicine", "Design", "Business", "Law", "Arts"];

  useEffect(() => {
    setLoading(true);
    const query = activeFilter !== "All" ? `?filter_cat=${activeFilter}` : "";
    fetch(`${API_BASE_URL}/api/colleges${query}`)
      .then((res) => {
        if (!res.ok) throw new Error("API Offline");
        return res.json();
      })
      .then((data) => {
        setColleges(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Backend error, rendering fallback colleges list", err);
        const filtered = activeFilter === "All" 
          ? collegeData 
          : collegeData.filter(c => c.categories.includes(activeFilter));
        setColleges(filtered);
        setLoading(false);
      });
  }, [activeFilter]);

  useEffect(() => {
    if (!loading && listRef.current) {
      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" }
      );
    }
  }, [loading]);

  return (
    <div className="bg-[var(--ivory)] min-h-screen pb-24">
      {/* 1. HERO */}
      <section className="section py-20 border-b border-[var(--stone)]/40">
        <div className="container text-center">
          <span className="text-xs font-bold text-[var(--coral)] uppercase tracking-widest block mb-4">
            Curated Institutions
          </span>
          <h1 className="font-display text-5xl md:text-8xl font-medium tracking-tight text-[var(--ink)] mb-6 max-w-[800px] mx-auto leading-none">
            Where will your future journey begin?
          </h1>
          <p className="text-[var(--muted)] text-base md:text-lg max-w-[480px] mx-auto mb-10 leading-relaxed">
            Discover premier institutes and colleges structured to scale your career goals and matches.
          </p>
        </div>
      </section>

      {/* 2. FILTERS */}
      <section className="section py-8 bg-white border-b border-[var(--stone)]/40 sticky top-[80px] z-30">
        <div className="container flex flex-wrap items-center justify-between gap-4" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--ink)]" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Filter size={14} className="text-[var(--coral)]" />
            <span>Filter by discipline:</span>
          </div>

          <div className="flex flex-wrap gap-2" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[var(--ink)] text-[var(--ivory)] border-[var(--ink)]"
                    : "bg-transparent text-[var(--muted)] border-[var(--stone)] hover:border-[var(--ink)]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COLLEGE LISTINGS */}
      <section className="section py-16">
        <div className="container max-w-[900px]">
          {loading ? (
            <div className="flex items-center justify-center min-h-[300px]">
              <RefreshCw className="animate-spin text-[var(--coral)]" size={30} />
            </div>
          ) : colleges.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[var(--muted)] text-sm">No institutions found matching this category.</p>
            </div>
          ) : (
            <div ref={listRef} className="flex flex-col gap-6">
              {colleges.map((col, idx) => (
                <div 
                  key={col.id} 
                  className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-8 rounded-3xl bg-white border border-[var(--stone)] hover:border-[var(--coral)] transition-all duration-300 hover:shadow-md"
                >
                  {/* Left Side: Number Index & Basic Meta */}
                  <div className="flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-12">
                    <div className="flex items-center gap-4 md:gap-8">
                      <span className="font-display text-4xl md:text-5xl font-light text-[var(--muted)]/40 group-hover:text-[var(--coral)] transition-colors">
                        0{idx + 1}
                      </span>
                      {(() => {
                        const localCol = collegeData.find(c => c.id === col.id);
                        const logoSrc = localCol ? localCol.logo : col.logo;
                        return logoSrc ? (
                          <div className="w-16 h-16 rounded-2xl border border-[var(--stone)] bg-white p-2 flex items-center justify-center overflow-hidden flex-shrink-0">
                            <img src={logoSrc} alt={col.name} className="w-full h-full object-contain" />
                          </div>
                        ) : null;
                      })()}
                    </div>
                    <div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "8px" }}>
                        {col.categories && col.categories.map((cat, i) => (
                          <span 
                            key={i} 
                            style={{ 
                              display: "inline-block", 
                              fontSize: "9px", 
                              fontWeight: "700", 
                              letterSpacing: "1px", 
                              textTransform: "uppercase", 
                              padding: "3px 8px", 
                              borderRadius: "12px", 
                              backgroundColor: "var(--stone)", 
                              color: "var(--ink)" 
                            }}
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-display text-2xl font-medium text-[var(--ink)] mb-1.5">
                        {col.short_name || col.shortName} <span className="font-light text-base text-[var(--muted)] font-body">— {col.name}</span>
                      </h3>
                      <p className="text-xs text-[var(--muted)]">{col.location}</p>
                    </div>
                  </div>

                  {/* Right Side: Action Link */}
                  <div className="mt-6 md:mt-0 pt-4 md:pt-0 border-t md:border-none border-[var(--stone)]/40 w-full md:w-auto flex justify-end">
                    <Link 
                      to={`/colleges/${col.id}`}
                      className="btn btn-dark inline-flex items-center gap-2 group-hover:bg-[var(--coral)] border-none transition-colors"
                      style={{
                        background: "var(--ink)",
                        color: "var(--ivory)",
                        padding: "0.8rem 1.8rem"
                      }}
                    >
                      EXPLORE
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Colleges;
