import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ArrowRight, Sparkles, Filter, TrendingUp, CheckCircle2 } from "lucide-react";
import { API_BASE_URL } from "../config/api";

import imgBuild from "../assets/career_build.png";
import imgCreate from "../assets/career_create.png";
import imgDiscover from "../assets/career_discover.png";
import imgLead from "../assets/career_lead.png";

const categoryMeta = {
  ALL: {
    title: "Multidisciplinary Excellence",
    subtitle: "Cross-stream career potential across tech, design, science & management",
    salary: "₹7 - ₹35 LPA Avg",
    growth: "High Demand Sector",
    badge: "500+ Pathways",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    tags: ["Cross-Discipline", "High Demand", "Global Scope"]
  },
  BUILD: {
    title: "Engineering & Deep Systems",
    subtitle: "AI architectures, robotics, cloud infrastructure, and autonomous systems",
    salary: "₹8 - ₹32 LPA Avg",
    growth: "+34% Annual Demand",
    badge: "Technology Vanguard",
    image: imgBuild,
    tags: ["AI & Cloud", "Robotics", "Autonomous Tech"]
  },
  CREATE: {
    title: "Design & Immersive Media",
    subtitle: "UI/UX, digital product architecture, 3D CGI and visual direction",
    salary: "₹6 - ₹24 LPA Avg",
    growth: "+31% Annual Demand",
    badge: "Creative Impact",
    image: imgCreate,
    tags: ["Product Design", "Human Interface", "Creative Media"]
  },
  DISCOVER: {
    title: "Science & Frontier Research",
    subtitle: "Biotechnology, genomics, clinical analytics & data modeling",
    salary: "₹8 - ₹30 LPA Avg",
    growth: "+26% Annual Demand",
    badge: "Frontier Science",
    image: imgDiscover,
    tags: ["Genomics", "Biotech", "Astrophysics"]
  },
  LEAD: {
    title: "Business Strategy & Venture",
    subtitle: "Executive leadership, venture finance, analytics & global markets",
    salary: "₹7 - ₹28 LPA Avg",
    growth: "+28% Annual Demand",
    badge: "Corporate Leadership",
    image: imgLead,
    tags: ["Venture Capital", "Corporate Strategy", "Fintech"]
  },
  HELP: {
    title: "Medicine & Clinical Healthcare",
    subtitle: "Surgery, allied healthcare, clinical diagnostics & patient wellness",
    salary: "₹9 - ₹35 LPA Avg",
    growth: "+29% Annual Demand",
    badge: "Essential Care",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
    tags: ["Clinical Medicine", "Diagnostics", "Public Health"]
  },
  ANALYZE: {
    title: "Data Intelligence & Quantitative Systems",
    subtitle: "Predictive AI modeling, data telemetry & algorithmic decision systems",
    salary: "₹8 - ₹30 LPA Avg",
    growth: "+36% Annual Demand",
    badge: "Quantitative Apex",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Machine Learning", "Algorithmic Systems", "Big Data"]
  }
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

  const currentMeta = categoryMeta[hoveredCat] || categoryMeta.ALL;

  return (
    <div className="relative min-h-screen bg-[var(--ivory)] text-[var(--ink)]">
      
      {/* 1. HERO HEADER WITH IMAGERY */}
      <section className="pt-28 pb-16 px-4 md:px-8 border-b border-[var(--stone)]/50 bg-[#F4F0E8] overflow-hidden">
        <div className="container max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Subtitle & Discipline Selector */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-[var(--coral)] uppercase tracking-[0.2em] block mb-3">
                EXPLORE PATHWAYS
              </span>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.95] text-[var(--ink)] mb-6">
                Find the career <br />
                <span className="italic text-[var(--coral)] font-light">crafted for you.</span>
              </h1>
              <p className="text-[var(--muted)] text-sm sm:text-base max-w-[560px] leading-relaxed mb-8">
                Browse through curated career tracks across engineering, design, scientific research, health, and corporate leadership.
              </p>

              {/* Category Filter Pills */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-3 flex items-center gap-1.5">
                  <Filter size={14} className="text-[var(--coral)]" /> Discipline:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setHoveredCat(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                        hoveredCat === cat
                          ? "bg-[var(--ink)] text-[var(--ivory)] border-[var(--ink)] shadow-md scale-105"
                          : "bg-white text-[var(--ink)] border-[var(--stone)] hover:border-[var(--coral)] hover:bg-[var(--ivory)]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick stats ticker below pills */}
              <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-[var(--stone)]/60 text-xs text-[var(--muted)]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Sparkles size={14} className="text-[var(--coral)]" />
                  <strong className="text-[var(--ink)]">{filteredCareers.length} Specialized Roles</strong> Mapped
                </span>
                <span>•</span>
                <span>Average Compensation: <strong className="text-[var(--ink)]">{currentMeta.salary}</strong></span>
                <span>•</span>
                <span className="text-emerald-700 font-semibold">{currentMeta.growth}</span>
              </div>
            </div>

            {/* Right Column: Visual Photographic Showcase */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden border border-[var(--stone)] shadow-2xl bg-white group">
                <img 
                  key={hoveredCat}
                  src={currentMeta.image} 
                  alt={currentMeta.title} 
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 animate-in fade-in zoom-in-95 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                
                {/* Floating Top Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/60 shadow-md flex items-center gap-2">
                  <Sparkles size={12} className="text-[var(--coral)]" />
                  <span className="text-[10px] font-mono tracking-wider text-[var(--ink)] uppercase font-bold">
                    {currentMeta.badge}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--coral)] font-bold block mb-1">
                    {hoveredCat} TRACK FOCUS
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-medium text-white mb-1">
                    {currentMeta.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-1 mb-3">
                    {currentMeta.subtitle}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-1.5">
                    {currentMeta.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-semibold text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Overlapping Small Card */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[var(--stone)] shadow-xl items-center gap-3 max-w-[240px] z-10">
                <div className="w-10 h-10 rounded-xl bg-[var(--coral)]/10 text-[var(--coral)] flex items-center justify-center shrink-0">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase text-[var(--muted)] font-bold block">
                    Target Compensation
                  </span>
                  <strong className="text-xs font-bold text-[var(--ink)] block">
                    {currentMeta.salary}
                  </strong>
                  <span className="text-[9px] text-emerald-700 font-semibold block">
                    Direct Tier-1 Placement
                  </span>
                </div>
              </div>

            </div>

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
