import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Columns, Check, AlertTriangle, RefreshCw } from "lucide-react";
import { API_BASE_URL } from "../config/api";

const CompareCareers = () => {
  const [careerList, setCareerList] = useState([]);
  const [selA, setSelA] = useState("software-engineering");
  const [selB, setSelB] = useState("architecture");
  const [compData, setCompData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch career list for dropdowns
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/careers`)
      .then((res) => res.json())
      .then((data) => setCareerList(data))
      .catch((err) => {
        console.error(err);
        // Fallback dropdown choices
        setCareerList([
          { id: "software-engineering", name: "Software Engineering" },
          { id: "architecture", name: "Architecture" },
          { id: "medicine", name: "Medicine" },
          { id: "design", name: "Design" },
          { id: "finance", name: "Finance" },
          { id: "law", name: "Law" },
          { id: "psychology", name: "Psychology" },
          { id: "business", name: "Business Management" },
          { id: "data-science", name: "Data Science & AI" },
          { id: "media", name: "Media & Journalism" },
        ]);
      });
  }, []);

  // Fetch comparison stats when selection A or B changes
  useEffect(() => {
    if (!selA || !selB) return;
    setLoading(true);
    fetch(`${API_BASE_URL}/api/compare`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ career_a: selA, career_b: selB }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Compare failed");
        return res.json();
      })
      .then((data) => {
        setCompData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        // Fallback mock comparison calculations
        setCompData({
          career_a: {
            name: "Software Engineering",
            duration: "4 Years (B.Tech)",
            skills: ["Coding", "System Design", "Problem Solving"],
            work_env: "Office or remote.",
            growth: "High (22%)",
            challenges: ["Sitting for long hours debugging.", "Rapid tech updates."]
          },
          career_b: {
            name: "Architecture",
            duration: "5 Years (B.Arch)",
            skills: ["Spatial Design", "3D Drafting", "Math"],
            work_env: "Design studio and site visits.",
            growth: "Moderate (8%)",
            challenges: ["Long licensing hours.", "Client budget limits."]
          }
        });
        setLoading(false);
      });
  }, [selA, selB]);

  return (
    <div className="bg-[var(--ivory)] min-h-screen pb-24">
      {/* 1. HERO */}
      <section className="section py-20 border-b border-[var(--stone)]/40 text-center">
        <div className="container">
          <span className="text-xs font-bold text-[var(--coral)] uppercase tracking-widest block mb-4">
            Side-By-Side Comparison
          </span>
          <h1 className="font-display text-5xl md:text-8xl font-medium tracking-tight text-[var(--ink)] mb-6 max-w-[800px] mx-auto leading-none">
            Two paths.<br />One decision.
          </h1>
          <p className="text-[var(--muted)] text-base md:text-lg max-w-[480px] mx-auto mb-12">
            Compare study durations, key skill sets, projected growth rate, and challenges to isolate the ideal match.
          </p>
        </div>
      </section>

      {/* 2. SELECTORS */}
      <section className="section py-6 bg-white border-b border-[var(--stone)]/40">
        <div className="container flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12">
          
          {/* Dropdown A */}
          <div className="flex flex-col gap-1 w-full max-w-[280px]">
            <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">Path A</label>
            <select
              value={selA}
              onChange={(e) => setSelA(e.target.value)}
              className="p-3.5 rounded-xl border border-[var(--stone)] bg-[var(--ivory)] text-sm font-semibold text-[var(--ink)] focus:outline-none focus:border-[var(--coral)]"
            >
              {careerList.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          <div className="text-[var(--muted)] font-display text-lg hidden sm:block">VS</div>

          {/* Dropdown B */}
          <div className="flex flex-col gap-1 w-full max-w-[280px]">
            <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">Path B</label>
            <select
              value={selB}
              onChange={(e) => setSelB(e.target.value)}
              className="p-3.5 rounded-xl border border-[var(--stone)] bg-[var(--ivory)] text-sm font-semibold text-[var(--ink)] focus:outline-none focus:border-[var(--coral)]"
            >
              {careerList.map((c) => (
                <option key={c.id} value={c.id} disabled={c.id === selA}>{c.name}</option>
              ))}
            </select>
          </div>

        </div>
      </section>

      {/* 3. COMPARISON TABLE */}
      <section className="section py-16">
        <div className="container max-w-[900px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center min-h-[300px]">
              <RefreshCw className="animate-spin text-[var(--coral)] mb-4" size={30} />
              <p className="text-xs text-[var(--muted)]">Comparing Pathways...</p>
            </div>
          ) : compData ? (
            <div className="bg-white border border-[var(--stone)] rounded-[32px] overflow-hidden shadow-sm">
              <div className="grid grid-cols-2 bg-[var(--ink)] text-[var(--ivory)] text-center p-6 border-b border-[var(--stone)]">
                <div className="font-display text-xl md:text-2xl font-medium border-r border-white/20 pr-4">
                  {compData.career_a.name}
                </div>
                <div className="font-display text-xl md:text-2xl font-medium pl-4">
                  {compData.career_b.name}
                </div>
              </div>

              {/* STUDY DURATION */}
              <div className="p-8 border-b border-[var(--stone)]/40">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--coral)] text-center mb-4">Study Duration</h4>
                <div className="grid grid-cols-2 text-center text-sm font-semibold text-[var(--ink)]">
                  <div className="border-r border-[var(--stone)]/40 pr-4">{compData.career_a.duration}</div>
                  <div className="pl-4">{compData.career_b.duration}</div>
                </div>
              </div>

              {/* WORK ENVIRONMENT */}
              <div className="p-8 border-b border-[var(--stone)]/40 bg-[var(--stone)]/10">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--coral)] text-center mb-4">Work Environment</h4>
                <div className="grid grid-cols-2 text-center text-xs text-[var(--muted)] leading-relaxed">
                  <div className="border-r border-[var(--stone)]/40 pr-4">{compData.career_a.work_env}</div>
                  <div className="pl-4">{compData.career_b.work_env}</div>
                </div>
              </div>

              {/* DEMAND & GROWTH */}
              <div className="p-8 border-b border-[var(--stone)]/40">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--coral)] text-center mb-4">Projected Growth</h4>
                <div className="grid grid-cols-2 text-center text-sm font-bold text-[var(--ink)]">
                  <div className="border-r border-[var(--stone)]/40 pr-4">{compData.career_a.growth}</div>
                  <div className="pl-4">{compData.career_b.growth}</div>
                </div>
              </div>

              {/* CORE SKILLS */}
              <div className="p-8 border-b border-[var(--stone)]/40 bg-[var(--stone)]/10">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--coral)] text-center mb-4">Key Skills</h4>
                <div className="grid grid-cols-2">
                  <div className="border-r border-[var(--stone)]/40 pr-4 flex flex-wrap justify-center gap-1.5">
                    {compData.career_a.skills.map((s, i) => (
                      <span key={i} className="text-[10px] bg-white border border-[var(--stone)] px-2 py-0.5 rounded text-[var(--ink)] font-semibold">{s}</span>
                    ))}
                  </div>
                  <div className="pl-4 flex flex-wrap justify-center gap-1.5">
                    {compData.career_b.skills.map((s, i) => (
                      <span key={i} className="text-[10px] bg-white border border-[var(--stone)] px-2 py-0.5 rounded text-[var(--ink)] font-semibold">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* TYPICAL CHALLENGES */}
              <div className="p-8">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--coral)] text-center mb-6">Typical Challenges</h4>
                <div className="grid grid-cols-2 gap-8 text-xs text-[var(--muted)] leading-relaxed">
                  
                  {/* Career A Challenges */}
                  <div className="border-r border-[var(--stone)]/40 pr-8">
                    <ul className="flex flex-col gap-3">
                      {compData.career_a.challenges.map((c, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <AlertTriangle size={14} className="text-orange-500 shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Career B Challenges */}
                  <div className="pl-8">
                    <ul className="flex flex-col gap-3">
                      {compData.career_b.challenges.map((c, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <AlertTriangle size={14} className="text-orange-500 shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

            </div>
          ) : null}
        </div>
      </section>

      {/* 4. FINAL QUESTION */}
      <section className="section py-16 text-center">
        <div className="container max-w-[600px]">
          <h3 className="font-display text-3xl font-medium text-[var(--ink)] mb-4">
            Which feels more like you?
          </h3>
          <p className="text-[var(--muted)] text-sm mb-8 max-w-[340px] mx-auto leading-relaxed">
            If you need support mapping these details to your profile, speak with one of our counselors.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-dark" style={{ background: "var(--ink)", color: "var(--ivory)", border: "none" }}>
              Consult Counselor
            </Link>
            <Link 
              to="/quiz" 
              className="btn flex items-center gap-2"
              style={{
                background: "transparent",
                border: "1px solid var(--stone)",
                color: "var(--ink)"
              }}
            >
              Take Quiz
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompareCareers;
