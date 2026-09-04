import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, UserCheck, Calendar, DollarSign, Briefcase, Smile, MapPin } from "lucide-react";
import { collegeData } from "../data/collegeData";
import { API_BASE_URL } from "../config/api";

const defaultCollegeDetails = {
  desc: "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
  courses: ["Undergraduate Programs", "Postgraduate Specializations", "Vocational/Certificate Programs"],
  admission: "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
  exams: "National / State level entrance tests or College Merit Assessment.",
  fees: "Subsidized or competitive tuition structure based on merit brackets.",
  placements: "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
  student_life: "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments."
};

const CollegeDetail = () => {
  const { id } = useParams();
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/colleges/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("College not found");
        return res.json();
      })
      .then((data) => {
        setCollege(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Using fallback for college detail", err);
        const found = collegeData.find(c => c.id === id);
        if (found) {
          const enriched = {
            ...defaultCollegeDetails,
            ...found,
            short_name: found.short_name || found.shortName
          };
          setCollege(enriched);
        } else {
          setCollege(null);
        }
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[var(--ivory)]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-[var(--coral)]" />
      </div>
    );
  }

  if (!college) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--ivory)] px-6">
        <h2 className="font-display text-4xl mb-4 text-[var(--ink)]">College Not Found</h2>
        <Link to="/colleges" className="btn flex items-center gap-2 border border-[var(--stone)] text-xs uppercase font-bold text-[var(--ink)]">
          <ArrowLeft size={14} /> Back to Directory
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[var(--ivory)] pb-24">
      {/* Back link */}
      <div className="container pt-8">
        <Link to="/colleges" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--muted)] hover:text-[var(--coral)] transition-colors">
          <ArrowLeft size={14} /> Back to Directory
        </Link>
      </div>

      {/* 1. HERO */}
      <section className="section py-12">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              {(() => {
                const localCol = collegeData.find(c => c.id === college.id);
                const logoSrc = localCol ? localCol.logo : college.logo;
                return logoSrc ? (
                  <div className="w-16 h-16 rounded-2xl border border-[var(--stone)] bg-white p-2 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
                    <img src={logoSrc} alt={college.name} className="w-full h-full object-contain" />
                  </div>
                ) : null;
              })()}
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--coral)] mb-1">
                  <MapPin size={13} />
                  <span>{college.location}</span>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted)] bg-[var(--stone)] px-2 py-0.5 rounded-md">
                  {college.type || "Institution"}
                </span>
              </div>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-medium text-[var(--ink)] mb-4 leading-tight tracking-tight">
              A place to<br />build what's next.
            </h1>
            <p className="font-display text-2xl font-light text-[var(--muted)] leading-relaxed italic">
              {college.short_name} — {college.name}
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden border border-[var(--stone)] bg-[var(--stone)]/30">
              <img 
                src={college.img} 
                alt={college.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTION INTRO */}
      <section className="section py-12 bg-white border-y border-[var(--stone)]/40">
        <div className="container max-w-[800px] flex flex-col items-start gap-6">
          <div>
            <h2 className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-widest mb-4">
              About the Institution
            </h2>
            <p className="font-body text-base leading-relaxed text-[var(--ink)]">
              {college.desc}
            </p>
          </div>
          {(college.officialSite || college.official_site) && (college.officialSite !== "#" && college.official_site !== "#") && (
            <a 
              href={college.officialSite || college.official_site} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-dark inline-flex items-center gap-2 border-none text-xs tracking-wider uppercase font-bold"
              style={{ background: "var(--ink)", color: "var(--ivory)", padding: "0.8rem 1.8rem" }}
            >
              Visit Official Website
              <ArrowRight size={14} />
            </a>
          )}
        </div>
      </section>

      {/* 3. DETAILS BLOCK SECTION */}
      <section className="section py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Courses Card */}
            <div className="p-8 rounded-3xl bg-white border border-[var(--stone)] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[var(--coral)]/10 flex items-center justify-center text-[var(--coral)] mb-6">
                  <BookOpen size={20} />
                </div>
                <h3 className="font-display text-xl font-medium text-[var(--ink)] mb-4">
                  Courses Offered
                </h3>
                <ul className="flex flex-col gap-2">
                  {college.courses.map((course, idx) => (
                    <li key={idx} className="text-xs font-semibold text-[var(--muted)] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--coral)]" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Admission Card */}
            <div className="p-8 rounded-3xl bg-white border border-[var(--stone)] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[var(--coral)]/10 flex items-center justify-center text-[var(--coral)] mb-6">
                  <UserCheck size={20} />
                </div>
                <h3 className="font-display text-xl font-medium text-[var(--ink)] mb-4">
                  Admission Criteria
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
                  {college.admission}
                </p>
                <div className="border-t border-[var(--stone)]/40 pt-4 flex items-center gap-2">
                  <Calendar size={14} className="text-[var(--coral)]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--ink)]">Exams: {college.exams}</span>
                </div>
              </div>
            </div>

            {/* Financials & Fees Card */}
            <div className="p-8 rounded-3xl bg-white border border-[var(--stone)] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[var(--coral)]/10 flex items-center justify-center text-[var(--coral)] mb-6">
                  <DollarSign size={20} />
                </div>
                <h3 className="font-display text-xl font-medium text-[var(--ink)] mb-4">
                  Tuition & Fees
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
                  Understanding standard tuition costs helps evaluate final investment returns.
                </p>
                <div className="border-t border-[var(--stone)]/40 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] block mb-1">Yearly Cost:</span>
                  <span className="text-sm font-bold text-[var(--ink)]">{college.fees}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PLACEMENT & LIFE SECTION */}
      <section className="section py-16 bg-[var(--stone)]/30 border-y border-[var(--stone)]/50">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Placements */}
          <div className="bg-white p-8 rounded-[32px] border border-[var(--stone)]">
            <h3 className="flex items-center gap-2 font-display text-2xl font-medium text-[var(--ink)] mb-6">
              <Briefcase size={22} className="text-[var(--coral)]" />
              Placements & Recruiters
            </h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
              {college.placements}
            </p>
          </div>

          {/* Student Life */}
          <div className="bg-white p-8 rounded-[32px] border border-[var(--stone)]">
            <h3 className="flex items-center gap-2 font-display text-2xl font-medium text-[var(--ink)] mb-6">
              <Smile size={22} className="text-[var(--coral)]" />
              Student Life & Campus
            </h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
              {college.student_life}
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CollegeDetail;
