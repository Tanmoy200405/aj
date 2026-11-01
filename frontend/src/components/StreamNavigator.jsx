import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Cpu, 
  Briefcase, 
  Palette, 
  Stethoscope, 
  Scale, 
  ArrowRight, 
  TrendingUp, 
  GraduationCap, 
  Building2, 
  Sparkles, 
  CheckCircle2 
} from "lucide-react";
import { collegeData } from "../data/collegeData";

const StreamNavigator = () => {
  const [activeStreamId, setActiveStreamId] = useState("tech");

  const streams = [
    {
      id: "tech",
      name: "Engineering & Deep Tech",
      icon: <Cpu size={18} />,
      badge: "High Growth",
      salary: "₹8 - ₹32 LPA",
      growth: "+34% YoY",
      summary: "Architecting software, autonomous robotics, cybersecurity, and cloud systems driving global innovation.",
      specializations: [
        { name: "Artificial Intelligence & ML", demand: "Exceptional" },
        { name: "Computer Science & Engineering", demand: "High" },
        { name: "Robotics & Automation", demand: "High" },
        { name: "Data Science & Cloud Systems", demand: "Exceptional" }
      ],
      exams: ["JEE Main & Advanced", "WBJEE", "BITSAT", "VITEEE"],
      colleges: ["iem", "adamas", "snu", "vit", "rcciit", "bppimt"],
      accent: "#FF5B45"
    },
    {
      id: "business",
      name: "Management & Strategy",
      icon: <Briefcase size={18} />,
      badge: "Global Leadership",
      salary: "₹7 - ₹28 LPA",
      growth: "+28% YoY",
      summary: "Leading corporate expansion, venture finance, analytics, and organizational strategy across Fortune 500s.",
      specializations: [
        { name: "Global Finance & Investment", demand: "High" },
        { name: "Business Analytics & AI", demand: "Exceptional" },
        { name: "Brand Strategy & Digital Marketing", demand: "High" },
        { name: "Entrepreneurship & Venture Operations", demand: "High" }
      ],
      exams: ["IPMAT", "CAT", "XAT", "CUET"],
      colleges: ["bhawanipur", "eiilm", "bibs", "uwsb", "adamas"],
      accent: "#D4AF37"
    },
    {
      id: "design",
      name: "Design & Creative Media",
      icon: <Palette size={18} />,
      badge: "Creative Impact",
      salary: "₹6 - ₹24 LPA",
      growth: "+31% YoY",
      summary: "Crafting intuitive digital interfaces, 3D animation, game design, and human-centered user experiences.",
      specializations: [
        { name: "UI/UX & Product Design", demand: "Exceptional" },
        { name: "Visual Media & Film Production", demand: "High" },
        { name: "Animation & Game Design", demand: "High" },
        { name: "Communication & Brand Design", demand: "High" }
      ],
      exams: ["UCEED", "NID DAT", "NIFT", "CUET"],
      colleges: ["ilead", "nif-global", "adamas", "snu"],
      accent: "#FF5B45"
    },
    {
      id: "medical",
      name: "Healthcare & Life Sciences",
      icon: <Stethoscope size={18} />,
      badge: "Essential Apex",
      salary: "₹8 - ₹35 LPA",
      growth: "+26% YoY",
      summary: "Pioneering clinical diagnostics, biotechnology, genomic therapy, and life-saving clinical breakthroughs.",
      specializations: [
        { name: "Clinical Medicine & Surgery", demand: "Exceptional" },
        { name: "Biotechnology & Bioinformatics", demand: "High" },
        { name: "Allied Healthcare & Radiology", demand: "High" },
        { name: "Pharmacy & Clinical Research", demand: "High" }
      ],
      exams: ["NEET-UG", "AIIMS", "State CET"],
      colleges: ["tnu", "brainware", "george", "adamas"],
      accent: "#10B981"
    },
    {
      id: "law",
      name: "Law & Corporate Policy",
      icon: <Scale size={18} />,
      badge: "Governance & Ethics",
      salary: "₹7 - ₹26 LPA",
      growth: "+22% YoY",
      summary: "Navigating corporate jurisprudence, intellectual property, constitutional advocacy, and international diplomacy.",
      specializations: [
        { name: "Corporate Law & Mergers", demand: "High" },
        { name: "Cyber Law & Intellectual Property", demand: "Exceptional" },
        { name: "Constitutional Advocacy", demand: "High" },
        { name: "International Trade & Policy", demand: "High" }
      ],
      exams: ["CLAT", "AILET", "LSAT India", "SLAT"],
      colleges: ["adamas", "snu", "bhawanipur"],
      accent: "#3B82F6"
    }
  ];

  const currentStream = streams.find(s => s.id === activeStreamId) || streams[0];

  // Resolve matching partner colleges
  const matchedColleges = collegeData.filter(c => currentStream.colleges.includes(c.id)).slice(0, 4);

  return (
    <section className="py-24 md:py-32 bg-[var(--ivory)] text-[var(--ink)] border-b border-[var(--stone)]/40 relative overflow-hidden" id="streams">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--coral)]/10 text-[var(--coral)] text-xs font-bold tracking-widest uppercase mb-4">
              <Sparkles size={14} />
              Career Stream Navigator
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[var(--ink)] leading-tight">
              Compare disciplines. <br />
              <span className="italic font-light text-[var(--coral)]">Quantify</span> your future.
            </h2>
          </div>
          
          <Link
            to="/roadmap"
            className="group inline-flex items-center gap-2.5 text-xs uppercase tracking-widest font-bold text-[var(--ink)] hover:text-[var(--coral)] transition-colors duration-200 pb-2 border-b border-[var(--ink)] hover:border-[var(--coral)] self-start md:self-end"
          >
            <span>Explore 6-Step Post-12th Roadmap</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Stream Selector Buttons (Horizontal Scrollable Tabs) */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {streams.map((stream) => {
            const isActive = stream.id === activeStreamId;
            return (
              <button
                key={stream.id}
                onClick={() => setActiveStreamId(stream.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 border ${
                  isActive
                    ? "bg-[var(--ink)] text-[var(--ivory)] border-[var(--ink)] shadow-lg scale-102"
                    : "bg-white text-[var(--muted)] border-[var(--stone)] hover:text-[var(--ink)] hover:border-[var(--ink)]/40 hover:bg-[var(--ivory)]"
                }`}
              >
                <span className={isActive ? "text-[var(--coral)]" : "text-[var(--muted)]"}>
                  {stream.icon}
                </span>
                <span>{stream.name}</span>
                {isActive && (
                  <span className="ml-1 px-2 py-0.5 rounded-full bg-[var(--coral)] text-[var(--ink)] text-[9px] font-mono font-bold">
                    ACTIVE
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Stream Card */}
        <div className="bg-white border border-[var(--stone)] rounded-[32px] p-8 md:p-12 shadow-sm transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 7 Cols: Overview, Metrics, Specializations */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[var(--coral)]/10 text-[var(--coral)] text-xs font-bold uppercase tracking-wider">
                    {currentStream.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--muted)]">
                    <TrendingUp size={14} className="text-emerald-600" />
                    <span>Industry Growth: {currentStream.growth}</span>
                  </div>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--ink)] mb-4">
                  {currentStream.name}
                </h3>

                <p className="text-sm sm:text-base text-[var(--muted)] font-light leading-relaxed mb-8">
                  {currentStream.summary}
                </p>

                {/* Compensation & Entrance Indicators */}
                <div className="grid grid-cols-2 gap-4 mb-8 p-5 rounded-2xl bg-[var(--ivory)] border border-[var(--stone)]/60">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--muted)] block mb-1">
                      Starting Compensation
                    </span>
                    <span className="text-lg sm:text-xl font-display font-semibold text-[var(--ink)]">
                      {currentStream.salary}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--muted)] block mb-1">
                      Key Entrance Tests
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[var(--ink)] block truncate">
                      {currentStream.exams.join(", ")}
                    </span>
                  </div>
                </div>

                {/* Specializations */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] font-bold mb-3">
                    High-Demand Specializations
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentStream.specializations.map((spec, i) => (
                      <div 
                        key={i} 
                        className="flex items-center justify-between p-3 rounded-xl border border-[var(--stone)]/60 bg-white"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-[var(--coral)] shrink-0" />
                          <span className="text-xs font-semibold text-[var(--ink)]">{spec.name}</span>
                        </div>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[var(--ivory)] text-[var(--muted)] font-bold">
                          {spec.demand}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--stone)]/50">
                <Link
                  to="/careers"
                  className="btn btn-coral py-3 px-6 text-xs uppercase tracking-wider"
                >
                  <span>Explore All Careers</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-outline py-3 px-6 text-xs uppercase tracking-wider"
                >
                  <span>Consult Discipline Mentor</span>
                </Link>
              </div>
            </div>

            {/* Right 5 Cols: Recommended Partner Colleges */}
            <div className="lg:col-span-5 bg-[var(--ivory)]/70 border border-[var(--stone)]/80 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--coral)] font-bold block mb-0.5">
                    Curated Network
                  </span>
                  <h4 className="font-display text-xl font-medium text-[var(--ink)]">
                    Target Partner Colleges
                  </h4>
                </div>
                <GraduationCap size={24} className="text-[var(--muted)]" />
              </div>

              <div className="space-y-3.5 mb-6">
                {matchedColleges.map((col) => (
                  <Link
                    key={col.id}
                    to={`/colleges/${col.id}`}
                    className="group/item flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[var(--stone)]/70 hover:border-[var(--coral)] transition-all duration-200 shadow-xs hover:shadow-md"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {col.logo ? (
                        <img 
                          src={col.logo} 
                          alt={col.name} 
                          className="w-9 h-9 object-contain rounded-xl border border-[var(--stone)]/40 p-0.5 shrink-0 bg-white" 
                        />
                      ) : (
                        <Building2 size={20} className="text-[var(--coral)] shrink-0" />
                      )}
                      <div className="min-w-0">
                        <h5 className="text-xs sm:text-sm font-semibold text-[var(--ink)] group-hover/item:text-[var(--coral)] transition-colors truncate">
                          {col.shortName || col.short_name || col.name}
                        </h5>
                        <span className="text-[10px] text-[var(--muted)] block truncate">
                          {col.location}
                        </span>
                      </div>
                    </div>
                    
                    <div className="w-7 h-7 rounded-full bg-[var(--ivory)] flex items-center justify-center text-[var(--muted)] group-hover/item:bg-[var(--coral)] group-hover/item:text-white transition-colors shrink-0 ml-2">
                      <ArrowRight size={12} />
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                to="/colleges"
                className="w-full block text-center py-3 rounded-xl bg-white border border-[var(--stone)] text-xs font-bold uppercase tracking-wider text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
              >
                View Full College Registry ({collegeData.length}+)
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default StreamNavigator;
