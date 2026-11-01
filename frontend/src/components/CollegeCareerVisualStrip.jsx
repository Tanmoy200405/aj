import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Building2, Briefcase, ArrowUpRight, Sparkles, MapPin } from "lucide-react";
import { collegeData } from "../data/collegeData";

import imgBuild from "../assets/career_build.png";
import imgCreate from "../assets/career_create.png";
import imgDiscover from "../assets/career_discover.png";
import imgLead from "../assets/career_lead.png";

const CollegeCareerVisualStrip = () => {
  const [viewMode, setViewMode] = useState("all"); // "all", "colleges", "careers"

  // Pick top colleges from user's data
  const featuredColleges = collegeData.slice(0, 4).map(c => ({
    type: "COLLEGE",
    id: c.id,
    name: c.shortName || c.short_name || c.name,
    fullName: c.name,
    location: c.location,
    badge: c.type || "Private University",
    img: c.img,
    logo: c.logo,
    link: `/colleges/${c.id}`
  }));

  // Top careers with authentic photos
  const featuredCareers = [
    {
      type: "CAREER",
      id: "software-engineering",
      name: "AI & Software Engineering",
      fullName: "Cloud Architecture, Robotics & AI Systems",
      location: "Tech & Systems",
      badge: "₹12 - ₹32 LPA",
      img: imgBuild,
      logo: null,
      link: "/careers/software-engineering"
    },
    {
      type: "CAREER",
      id: "product-design",
      name: "Product & UI/UX Design",
      fullName: "Digital Experiences, Human Centered Design",
      location: "Design & Media",
      badge: "₹8 - ₹24 LPA",
      img: imgCreate,
      logo: null,
      link: "/careers/product-design"
    },
    {
      type: "CAREER",
      id: "corporate-strategy",
      name: "Corporate Strategy & Finance",
      fullName: "Investment, Global Management & Operations",
      location: "Business & Strategy",
      badge: "₹10 - ₹28 LPA",
      img: imgLead,
      logo: null,
      link: "/careers/corporate-strategy"
    },
    {
      type: "CAREER",
      id: "biotechnology",
      name: "Biomedical & Life Sciences",
      fullName: "Genomics, Clinical Research & Diagnostics",
      location: "Science & Healthcare",
      badge: "₹9 - ₹25 LPA",
      img: imgDiscover,
      logo: null,
      link: "/careers/biotechnology"
    }
  ];

  const combinedItems = viewMode === "all" 
    ? [...featuredColleges.slice(0, 2), ...featuredCareers.slice(0, 2), ...featuredColleges.slice(2, 4), ...featuredCareers.slice(2, 4)]
    : viewMode === "colleges"
    ? collegeData.slice(0, 8).map(c => ({
        type: "COLLEGE",
        id: c.id,
        name: c.shortName || c.short_name || c.name,
        fullName: c.name,
        location: c.location,
        badge: c.type,
        img: c.img,
        logo: c.logo,
        link: `/colleges/${c.id}`
      }))
    : featuredCareers;

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[var(--stone)]/40 relative">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Header with Mode Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--coral)]/10 text-[var(--coral)] text-xs font-bold tracking-widest uppercase mb-4">
              <Sparkles size={14} />
              College & Career Visual Gallery
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[var(--ink)] leading-tight">
              Real campuses. <span className="italic font-light text-[var(--coral)]">Real careers.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[var(--muted)] font-light mt-2 max-w-xl">
              Preview verified higher education campuses and thriving career pathways waiting for you.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-[var(--ivory)] p-1.5 rounded-2xl border border-[var(--stone)] self-start md:self-end">
            <button
              onClick={() => setViewMode("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                viewMode === "all" ? "bg-[var(--ink)] text-white shadow-sm" : "text-[var(--muted)] hover:text-[var(--ink)]"
              }`}
            >
              All Visuals
            </button>
            <button
              onClick={() => setViewMode("colleges")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                viewMode === "colleges" ? "bg-[var(--ink)] text-white shadow-sm" : "text-[var(--muted)] hover:text-[var(--ink)]"
              }`}
            >
              Colleges
            </button>
            <button
              onClick={() => setViewMode("careers")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                viewMode === "careers" ? "bg-[var(--ink)] text-white shadow-sm" : "text-[var(--muted)] hover:text-[var(--ink)]"
              }`}
            >
              Careers
            </button>
          </div>
        </div>

        {/* 4-Column Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {combinedItems.slice(0, 8).map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="group relative flex flex-col rounded-3xl overflow-hidden bg-[var(--ivory)] border border-[var(--stone)] hover:border-[var(--coral)]/60 hover:shadow-xl hover:shadow-[var(--coral)]/5 transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Floating Top Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md backdrop-blur-md ${
                    item.type === "COLLEGE" 
                      ? "bg-white/95 text-[var(--ink)] border border-white/60"
                      : "bg-[var(--coral)] text-white border border-[var(--coral)]"
                  }`}>
                    {item.type}
                  </span>
                </div>

                {/* Quick Arrow Action */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[var(--ink)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <ArrowUpRight size={16} />
                </div>

                {/* Content Overlay at bottom of photo */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  {item.logo && (
                    <div className="w-8 h-8 rounded-lg bg-white p-1 mb-2.5 shadow-md flex items-center justify-center">
                      <img src={item.logo} alt="" className="w-full h-full object-contain" />
                    </div>
                  )}

                  <span className="text-[10px] font-mono text-[var(--coral)] uppercase tracking-wider font-bold block mb-1">
                    {item.badge}
                  </span>

                  <h3 className="font-display text-xl sm:text-2xl font-medium leading-tight text-white mb-1.5 group-hover:text-[var(--coral)] transition-colors">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-white/70 font-light">
                    {item.type === "COLLEGE" ? <MapPin size={12} className="text-white/50" /> : <Briefcase size={12} className="text-white/50" />}
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>
              </div>

            </Link>
          ))}
        </div>

        {/* Bottom Navigation Ribbon */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--stone)]/50 text-xs text-[var(--muted)]">
          <span className="font-light">
            Displaying curated colleges and career pathways directly from verified AJ databases.
          </span>
          <div className="flex items-center gap-4">
            <Link to="/colleges" className="font-bold text-[var(--ink)] hover:text-[var(--coral)] transition-colors">
              Browse All Colleges ({collegeData.length}+) →
            </Link>
            <Link to="/careers" className="font-bold text-[var(--ink)] hover:text-[var(--coral)] transition-colors">
              Explore All Careers →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CollegeCareerVisualStrip;
