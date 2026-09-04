import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle2, ChevronRight, AlertTriangle, ArrowLeft } from "lucide-react";
import { API_BASE_URL } from "../config/api";

gsap.registerPlugin(ScrollTrigger);

const CareerDetail = () => {
  const { id } = useParams();
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);
  const timelineRef = useRef(null);
  const realityRef = useRef(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/careers/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        setCareer(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed fetching career detail", err);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (!loading && career) {
      const ctx = gsap.context(() => {
        // Timeline items staggered fade-in
        if (timelineRef.current) {
          gsap.fromTo(
            timelineRef.current.querySelectorAll(".timeline-item"),
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              stagger: 0.2,
              scrollTrigger: {
                trigger: timelineRef.current,
                start: "top 80%",
              },
            }
          );
        }

        // Reality split screens slide up
        if (realityRef.current) {
          gsap.fromTo(
            realityRef.current.querySelectorAll(".reality-card"),
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: realityRef.current,
                start: "top 75%",
              },
            }
          );
        }
      });
      return () => ctx.revert();
    }
  }, [loading, career]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[var(--ivory)]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-[var(--coral)]" />
      </div>
    );
  }

  if (!career) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--ivory)] px-6">
        <h2 className="font-display text-4xl mb-4 text-[var(--ink)]">Pathway Not Found</h2>
        <Link to="/careers" className="btn flex items-center gap-2 border border-[var(--stone)] text-xs uppercase font-bold text-[var(--ink)]">
          <ArrowLeft size={14} /> Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[var(--ivory)] pb-24">
      {/* Back button */}
      <div className="container pt-8">
        <Link to="/careers" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--muted)] hover:text-[var(--coral)] transition-colors">
          <ArrowLeft size={14} /> Back to Catalog
        </Link>
      </div>

      {/* 1. HERO SECTION */}
      <section className="section py-16">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-[var(--coral)] uppercase tracking-widest block mb-4">
              Pathway Details
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-medium text-[var(--ink)] leading-tight tracking-tight mb-6">
              {career.name}
            </h1>
            <p className="font-display text-xl md:text-2xl text-[var(--muted)] leading-relaxed italic max-w-[550px]">
              "{career.tagline}"
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] max-w-[360px] mx-auto rounded-[40px] overflow-hidden border border-[var(--stone)] bg-[var(--stone)]/30">
              <img 
                src={career.img} 
                alt={career.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. DESCRIPTION SECTION */}
      <section className="section py-16 bg-white border-y border-[var(--stone)]/40">
        <div className="container max-w-[800px]">
          <h2 className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-widest mb-6">
            What you'll actually do
          </h2>
          <p className="font-body text-base md:text-lg leading-relaxed text-[var(--ink)] mb-8">
            {career.what_you_do}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[var(--stone)]/40">
            <div>
              <span className="text-xs text-[var(--muted)] block mb-1">Standard Duration</span>
              <span className="text-sm font-semibold text-[var(--ink)]">{career.duration}</span>
            </div>
            <div>
              <span className="text-xs text-[var(--muted)] block mb-1">Projected Job Growth</span>
              <span className="text-sm font-semibold text-[var(--ink)]">{career.growth}</span>
            </div>
            <div>
              <span className="text-xs text-[var(--muted)] block mb-1">Typical Work Environment</span>
              <span className="text-sm font-semibold text-[var(--ink)]">{career.work_env}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. A DAY IN THE LIFE TIMELINE */}
      <section className="section py-20">
        <div className="container max-w-[800px]" ref={timelineRef}>
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[var(--coral)] uppercase tracking-wider block mb-2">
              Inside Look
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-[var(--ink)]">
              A Day in the Life
            </h2>
          </div>

          <div className="relative border-l border-[var(--stone)] ml-4 md:ml-12 pl-8 md:pl-12 flex flex-col gap-12">
            {career.day_in_life.map((item, idx) => (
              <div key={idx} className="timeline-item relative">
                {/* Bullet */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-[var(--coral)] border-4 border-[var(--ivory)]" />
                
                <span className="font-mono text-sm font-bold text-[var(--coral)] tracking-wider block mb-1">
                  {item.time}
                </span>
                <h3 className="font-display text-xl font-medium text-[var(--ink)] mb-2">
                  {item.task}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed max-w-[600px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RECOMMENDATION MATCH CHECK */}
      <section className="section py-16 bg-[var(--stone)]/30 border-y border-[var(--stone)]/50">
        <div className="container max-w-[700px]">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-[var(--ink)] mb-8 text-center">
            You'll probably enjoy this if...
          </h2>
          <div className="flex flex-col gap-4">
            {career.enjoy_if.map((condition, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 rounded-xl bg-white border border-[var(--stone)]/60">
                <CheckCircle2 className="text-[var(--coral)] shrink-0 mt-0.5" size={20} />
                <span className="text-sm font-medium text-[var(--ink)] leading-relaxed">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REALITY CHECK: SPLIT SCREEN */}
      <section className="section py-20" ref={realityRef}>
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[var(--coral)] uppercase tracking-wider block mb-2">
              Honest Counselling
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-[var(--ink)]">
              Reality Check
            </h2>
            <p className="text-[var(--muted)] text-xs mt-2">
              We present both sides of the coin to help you make a truly informed decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            {/* The Good */}
            <div className="reality-card p-8 rounded-3xl bg-emerald-50/40 border border-emerald-200/60">
              <h3 className="flex items-center gap-2 font-display text-2xl font-medium text-emerald-800 mb-6">
                <CheckCircle2 size={22} className="text-emerald-600" />
                The Good
              </h3>
              <ul className="flex flex-col gap-4">
                {career.reality.good.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm text-emerald-950 leading-relaxed font-body">
                    <span className="text-emerald-500 font-bold mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* The Challenging */}
            <div className="reality-card p-8 rounded-3xl bg-orange-50/40 border border-orange-200/60">
              <h3 className="flex items-center gap-2 font-display text-2xl font-medium text-orange-800 mb-6">
                <AlertTriangle size={22} className="text-orange-600" />
                The Challenging
              </h3>
              <ul className="flex flex-col gap-4">
                {career.reality.challenging.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm text-orange-950 leading-relaxed font-body">
                    <span className="text-orange-500 font-bold mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="section py-16 text-center">
        <div className="container max-w-[600px] p-12 rounded-[40px] bg-[var(--ink)] text-[var(--ivory)]">
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
            Could this be your path?
          </h2>
          <p className="text-white/60 text-xs mb-8 max-w-[340px] mx-auto">
            Let's evaluate your personal interests and strengths to determine if {career.name} is a match.
          </p>
          <Link 
            to="/quiz" 
            className="btn group"
            style={{
              background: "var(--coral)",
              color: "var(--white)",
              border: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              margin: "0 auto"
            }}
          >
            Take the Career Quiz
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CareerDetail;
