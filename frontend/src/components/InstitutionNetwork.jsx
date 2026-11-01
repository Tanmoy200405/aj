import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, ExternalLink, GraduationCap, Building2, CheckCircle2 } from "lucide-react";
import { collegeData } from "../data/collegeData";

const InstitutionNetwork = () => {
  const [activeTab, setActiveTab] = useState("Top Priority");

  const categories = [
    "Top Priority",
    "All Colleges",
    "Engineering",
    "Business",
    "Design",
    "Science"
  ];

  // Specific top priority college IDs defined by the platform
  const priorityIds = ["bhawanipur", "adamas", "ilead", "george", "eiilm", "iem", "snu", "brainware", "vit", "kiit"];

  const getFilteredColleges = () => {
    if (activeTab === "Top Priority") {
      return collegeData.filter(c => priorityIds.includes(c.id)).slice(0, 8);
    }
    if (activeTab === "All Colleges") {
      return collegeData.slice(0, 9);
    }
    return collegeData.filter(c => c.categories?.includes(activeTab)).slice(0, 9);
  };

  const displayedColleges = getFilteredColleges();

  return (
    <section className="py-24 md:py-32 bg-white text-[var(--ink)] border-b border-[var(--stone)]/40 relative">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--coral)]/10 text-[var(--coral)] text-xs font-bold tracking-widest uppercase mb-4">
              <Building2 size={14} />
              Partner & Affiliated Colleges
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[var(--ink)] leading-tight">
              Curated institutions <br />
              <span className="italic font-light text-[var(--coral)]">trusted</span> for admissions.
            </h2>
          </div>
          
          <Link
            to="/colleges"
            className="group inline-flex items-center gap-2.5 text-xs uppercase tracking-widest font-bold text-[var(--ink)] hover:text-[var(--coral)] transition-colors duration-200 pb-2 border-b border-[var(--ink)] hover:border-[var(--coral)] self-start md:self-end"
          >
            <span>Explore All {collegeData.length}+ Partner Colleges</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shrink-0 ${
                activeTab === cat
                  ? "bg-[var(--ink)] text-[var(--ivory)] shadow-md"
                  : "bg-[var(--ivory)] text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--stone)]/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedColleges.map((col) => (
            <div
              key={col.id}
              className="group bg-[var(--ivory)] hover:bg-white border border-[var(--stone)] hover:border-[var(--coral)]/50 rounded-[28px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[var(--coral)]/5 flex flex-col justify-between"
            >
              {/* College Card Image & Header */}
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                  <img
                    src={col.img}
                    alt={col.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Logo Badge */}
                  <div className="absolute bottom-3 left-4 bg-white/95 backdrop-blur-md p-1.5 rounded-2xl shadow-lg border border-white/40 flex items-center gap-2 max-w-[80%]">
                    {col.logo ? (
                      <img
                        src={col.logo}
                        alt={`${col.shortName || col.name} logo`}
                        className="w-8 h-8 object-contain rounded-xl shrink-0"
                      />
                    ) : (
                      <Building2 size={24} className="text-[var(--coral)]" />
                    )}
                    <span className="text-[11px] font-bold text-[var(--ink)] tracking-tight truncate pr-1">
                      {col.shortName || col.short_name || col.name}
                    </span>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {col.type || "College"}
                  </div>
                </div>

                {/* College Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl sm:text-2xl font-medium text-[var(--ink)] mb-2 group-hover:text-[var(--coral)] transition-colors duration-200 line-clamp-1">
                    {col.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-[var(--muted)] mb-4">
                    <MapPin size={13} className="text-[var(--stone)] shrink-0" />
                    <span className="truncate">{col.location}</span>
                  </div>

                  {/* Categories Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {col.categories?.slice(0, 3).map((c, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 bg-white border border-[var(--stone)]/80 text-[var(--muted)] rounded-md font-medium"
                      >
                        {c}
                      </span>
                    ))}
                    {col.categories?.length > 3 && (
                      <span className="text-[10px] font-mono text-[var(--muted)] px-1 self-center">
                        +{col.categories.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-[var(--stone)]/50 mt-2 flex items-center justify-between gap-3">
                <Link
                  to={`/colleges/${col.id}`}
                  className="flex-1 text-center py-2.5 px-4 bg-[var(--ink)] text-[var(--ivory)] hover:bg-[var(--coral)] hover:text-[var(--ink)] rounded-xl text-xs font-semibold tracking-wider uppercase transition-colors duration-200 flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Admission Details</span>
                  <ArrowRight size={13} />
                </Link>

                {col.officialSite && (
                  <a
                    href={col.officialSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white border border-[var(--stone)] hover:border-[var(--coral)] text-[var(--muted)] hover:text-[var(--coral)] rounded-xl transition-colors duration-200"
                    title="Visit Official University Portal"
                    aria-label={`Visit official website of ${col.name}`}
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 md:p-12 rounded-[32px] bg-[var(--ivory)] border border-[var(--stone)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--coral)] block mb-1">
              Direct Institutional Admissions
            </span>
            <h4 className="font-display text-2xl md:text-3xl font-medium text-[var(--ink)] mb-2">
              Need help securing admission in our partner colleges?
            </h4>
            <p className="text-xs md:text-sm text-[var(--muted)] font-light leading-relaxed">
              Our counselors verify cutoffs, manage institutional quota counseling, and facilitate direct admissions into verified universities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0">
            <Link
              to="/colleges"
              className="btn btn-outline py-3 px-6 text-xs uppercase tracking-wider"
            >
              Browse All Colleges
            </Link>
            <Link
              to="/contact"
              className="btn btn-coral py-3 px-6 text-xs uppercase tracking-wider"
            >
              <span>Consult College Advisor</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InstitutionNetwork;
