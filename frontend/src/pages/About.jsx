import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Compass, ShieldCheck, Zap, User } from "lucide-react";

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.querySelectorAll(".reveal-item"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div className="bg-[var(--ivory)] min-h-screen pb-24" ref={containerRef}>
      
      {/* 1. HERO */}
      <section className="section py-24 border-b border-[var(--stone)]/40">
        <div className="container text-center">
          <span className="text-xs font-bold text-[var(--coral)] uppercase tracking-widest block mb-6 reveal-item">
            Our Purpose
          </span>
          <h1 className="font-display text-4xl md:text-7xl font-medium tracking-tight text-[var(--ink)] mb-8 max-w-[900px] mx-auto leading-[1.08] reveal-item">
            Choosing a career<br />shouldn't feel like<br />guessing.
          </h1>
          <p className="text-[var(--muted)] text-base md:text-lg max-w-[500px] mx-auto leading-relaxed reveal-item font-body font-light">
            We built A & J Career Guidance to give students honest data, animated timelines, and personalized recommendations, replacing guessing with clarity.
          </p>
        </div>
      </section>

      {/* 2. CORE STORIES */}
      <section className="section py-20 bg-white border-b border-[var(--stone)]/40">
        <div className="container max-w-[800px]">
          <div className="flex flex-col gap-16">
            
            {/* Why we exist */}
            <div className="reveal-item">
              <span className="font-mono text-xs font-bold text-[var(--coral)] uppercase tracking-wider block mb-2">01 / Motivation</span>
              <h2 className="font-display text-3xl font-medium text-[var(--ink)] mb-4">Why we exist</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed font-body">
                Every year, millions of students pick undergraduate degrees based on random suggestions, peer trends, or parental preferences, only to discover later that they dislike the day-to-day workflow. We exist to open the doors early, offering honest realities of fields so students make decisions with their eyes wide open.
              </p>
            </div>

            {/* Our approach */}
            <div className="reveal-item">
              <span className="font-mono text-xs font-bold text-[var(--coral)] uppercase tracking-wider block mb-2">02 / System</span>
              <h2 className="font-display text-3xl font-medium text-[var(--ink)] mb-4">Our approach</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed font-body">
                We combine advanced mathematical recommendation algorithms with high-end, visual storytelling. Instead of dumping complex catalogs, we break down careers into timelines, skill sets, and realistic pros/cons that paint an accurate picture of what each path demands.
              </p>
            </div>

            {/* What we believe */}
            <div className="reveal-item">
              <span className="font-mono text-xs font-bold text-[var(--coral)] uppercase tracking-wider block mb-2">03 / Vision</span>
              <h2 className="font-display text-3xl font-medium text-[var(--ink)] mb-4">What we believe</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed font-body">
                We believe that self-awareness is the highest leverage asset a student can have. When you align what you enjoy (creating, building, researching) with your college study, you don't just secure placements—you enjoy the work you ship every single day.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. VALUE PROPOSITIONS */}
      <section className="section py-20">
        <div className="container">
          <div className="text-center mb-16 reveal-item">
            <span className="text-xs font-bold text-[var(--coral)] uppercase tracking-widest block mb-2">Core Competence</span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-[var(--ink)]">Our Methodology</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-white p-8 rounded-3xl border border-[var(--stone)] reveal-item">
              <div className="w-10 h-10 rounded-xl bg-[var(--coral)]/10 flex items-center justify-center text-[var(--coral)] mb-6">
                <Compass size={20} />
              </div>
              <h3 className="font-display text-lg font-medium text-[var(--ink)] mb-2">Data Integrity</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed font-body">
                We vet tuition fees, entrance exams, and placement figures directly from official university records and alumni reports.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[var(--stone)] reveal-item">
              <div className="w-10 h-10 rounded-xl bg-[var(--coral)]/10 flex items-center justify-center text-[var(--coral)] mb-6">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-display text-lg font-medium text-[var(--ink)] mb-2">Honest Realities</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed font-body">
                We don't sell dream packages. Our reality split screens highlight the daily stresses and frustrations of each profession.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[var(--stone)] reveal-item">
              <div className="w-10 h-10 rounded-xl bg-[var(--coral)]/10 flex items-center justify-center text-[var(--coral)] mb-6">
                <Zap size={20} />
              </div>
              <h3 className="font-display text-lg font-medium text-[var(--ink)] mb-2">Personalized Matching</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed font-body">
                Our recommendation engines score cross-disciplinary parameters, linking assessment results to careers and top schools.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[var(--stone)] reveal-item">
              <div className="w-10 h-10 rounded-xl bg-[var(--coral)]/10 flex items-center justify-center text-[var(--coral)] mb-6">
                <User size={20} />
              </div>
              <h3 className="font-display text-lg font-medium text-[var(--ink)] mb-2">Human Counseling</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed font-body">
                We back up our automated matches with experienced human career mentors who talk to you and resolve your doubts.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
