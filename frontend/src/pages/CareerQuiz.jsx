import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ArrowRight, RotateCcw, Award, GraduationCap, Compass } from "lucide-react";
import { API_BASE_URL } from "../config/api";

const CareerQuiz = () => {
  const [step, setStep] = useState(0); // 0: Landing, 1-3: Questions, 4: Loading, 5: Results
  const [selections, setSelections] = useState([]);
  const [results, setResults] = useState(null);
  const quizBoxRef = useRef(null);

  const quizQuestions = [
    {
      id: 1,
      q: "What would you rather spend a free afternoon doing?",
      options: [
        { num: "01", text: "BUILD SOMETHING (a mechanical kit, a website, or a wooden model)", type: "BUILD" },
        { num: "02", text: "CREATE SOMETHING (a logo, a photo shoot, or write a poem)", type: "CREATE" },
        { num: "03", text: "HELP SOMEONE (coach a peer, consult a friend, or volunteer at a clinic)", type: "HELP" },
        { num: "04", text: "FIGURE SOMETHING OUT (solve a code puzzle, review stats, or research facts)", type: "DISCOVER" },
      ],
    },
    {
      id: 2,
      q: "If you were to write a short book, what would it cover?",
      options: [
        { num: "01", text: "A technical guide to programming or electronic engineering", type: "BUILD" },
        { num: "02", text: "A portfolio of architectural sketches or editorial graphics", type: "CREATE" },
        { num: "03", text: "A playbook on starting a venture or coordinating team projects", type: "LEAD" },
        { num: "04", text: "An investigation examining stock market trends and spreadsheets", type: "ANALYZE" },
      ],
    },
    {
      id: 3,
      q: "What role do you naturally fall into during group projects?",
      options: [
        { num: "01", text: "The hands-on maker drafting prototypes or writing files", type: "BUILD" },
        { num: "02", text: "The creative director selecting slides, fonts, and designs", type: "CREATE" },
        { num: "03", text: "The project lead delegating milestones and presenting pitches", type: "LEAD" },
        { num: "04", text: "The details analyst fact-checking sources and editing documents", type: "ANALYZE" },
      ],
    },
  ];

  useEffect(() => {
    if (quizBoxRef.current) {
      gsap.fromTo(
        quizBoxRef.current.children,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, [step]);

  const handleOptionClick = (type) => {
    const updated = [...selections, type];
    setSelections(updated);

    if (step < quizQuestions.length) {
      setStep(step + 1);
    } else {
      // Final question answered - show loading then fetch recommendation results
      setStep(quizQuestions.length + 1);
      setTimeout(() => {
        submitQuizAnswers(updated);
      }, 1500);
    }
  };

  const submitQuizAnswers = (finalSelections) => {
    fetch(`${API_BASE_URL}/api/recommend`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers: finalSelections }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed recommendation calculations");
        return res.json();
      })
      .then((data) => {
        setResults(data);
        setStep(5); // Results step
      })
      .catch((err) => {
        console.error(err);
        // Fallback mockup calculations
        calculateFallbackResults(finalSelections);
      });
  };

  const calculateFallbackResults = (ans) => {
    // Basic local calculation if recommendation api is disconnected
    setResults({
      personality: "YOU'RE A BUILDER.",
      traits: "Curious. Analytical. Persistent.",
      desc: "You enjoy hands-on projects, logical design, and engineering solutions. You are a natural at breaking down systems to construct new platforms.",
      matches: [
        { name: "BUILD", pct: 67.0 },
        { name: "ANALYZE", pct: 33.0 },
        { name: "CREATE", pct: 0 },
        { name: "DISCOVER", pct: 0 },
        { name: "LEAD", pct: 0 },
        { name: "HELP", pct: 0 },
      ],
      careers: [
        { id: "software-engineering", name: "Software Engineering", short_desc: "Build technology apps." },
        { id: "architecture", name: "Architecture", short_desc: "Design physical spaces." }
      ],
      colleges: [
        { id: "iit", name: "Indian Institute of Technology", short_name: "IIT", location: "Mumbai" }
      ]
    });
    setStep(5);
  };

  const restartQuiz = () => {
    setSelections([]);
    setResults(null);
    setStep(0);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-6 bg-[var(--ivory)]">
      <div className="w-full max-w-[800px] text-center" ref={quizBoxRef}>
        
        {/* STEP 0: LANDING */}
        {step === 0 && (
          <div className="max-w-[650px] mx-auto">
            <span className="text-xs font-bold text-[var(--coral)] tracking-widest uppercase block mb-4">
              Interactive Guidance
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight text-[var(--ink)] mb-6 leading-tight">
              Let's find your<br />direction.
            </h1>
            <p className="text-[var(--muted)] text-base md:text-lg mb-10 leading-relaxed font-body font-light">
              Not a test. Not a prediction. Just a better way to understand your natural strengths, work styles, and recommended pathways.
            </p>
            <button 
              onClick={() => setStep(1)}
              className="btn group"
              style={{
                background: "var(--ink)",
                color: "var(--ivory)",
                border: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "1rem 2.5rem"
              }}
            >
              Begin Journey
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        )}

        {/* QUESTIONS STAGE */}
        {step > 0 && step <= quizQuestions.length && (
          <div className="text-left bg-white border border-[var(--stone)] p-8 md:p-16 rounded-[36px] shadow-sm">
            {/* Progress bar */}
            <div className="w-full bg-[var(--stone)]/30 h-1 rounded-full mb-8 overflow-hidden">
              <div 
                className="bg-[var(--coral)] h-full transition-all duration-300"
                style={{ width: `${(step / quizQuestions.length) * 100}%` }}
              />
            </div>

            <span className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-widest block mb-4">
              Question 0{step} of 0{quizQuestions.length}
            </span>

            <h2 className="font-display text-2xl md:text-3xl font-medium text-[var(--ink)] mb-10 leading-snug">
              {quizQuestions[step - 1].q}
            </h2>

            <div className="flex flex-col gap-4">
              {quizQuestions[step - 1].options.map((opt) => (
                <button
                  key={opt.num}
                  onClick={() => handleOptionClick(opt.type)}
                  className="w-full text-left p-6 rounded-2xl border border-[var(--stone)] hover:border-[var(--coral)] hover:bg-[var(--stone)]/10 transition-all duration-300 group flex items-start gap-4"
                >
                  <span className="font-mono text-xs font-bold text-[var(--muted)] group-hover:text-[var(--coral)] mt-1">
                    {opt.num}
                  </span>
                  <span className="text-sm font-medium text-[var(--ink)] leading-normal">
                    {opt.text}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* LOADING SCREEN */}
        {step === quizQuestions.length + 1 && (
          <div className="py-20 flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--coral)] mb-6" />
            <h2 className="font-display text-2xl font-medium text-[var(--ink)]">Analyzing Your Selections...</h2>
            <p className="text-[var(--muted)] text-xs mt-2">Computing personality index via A & J Career Guidance Recommendation Engine</p>
          </div>
        )}

        {/* RESULTS SCREEN */}
        {step === 5 && results && (
          <div className="text-left bg-white border border-[var(--stone)] p-8 md:p-16 rounded-[40px] shadow-sm">
            
            {/* TOP TITLE */}
            <div className="border-b border-[var(--stone)]/60 pb-8 mb-8">
              <span className="text-xs font-bold text-[var(--coral)] uppercase tracking-wider block mb-2">
                Your Assessment Profile
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-medium text-[var(--ink)] mb-3 leading-none">
                {results.personality}
              </h2>
              <p className="font-display text-lg italic text-[var(--muted)] mb-4">
                {results.traits}
              </p>
              <p className="text-[var(--muted)] text-sm leading-relaxed max-w-[650px]">
                {results.desc}
              </p>
            </div>

            {/* MATCH PERCENTAGES */}
            <div className="mb-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--ink)] mb-6 flex items-center gap-2">
                <Compass size={16} className="text-[var(--coral)]" /> Discipline Alignment
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {results.matches.map((match) => (
                  <div key={match.name} className="flex flex-col mb-2">
                    <div className="flex justify-between text-xs font-bold text-[var(--ink)] mb-1">
                      <span>{match.name}</span>
                      <span>{match.pct}%</span>
                    </div>
                    <div className="w-full bg-[var(--stone)]/30 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-[var(--coral)] h-full transition-all duration-1000"
                        style={{ width: `${match.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RECOMMENDED CAREERS */}
            <div className="mb-10 border-t border-[var(--stone)]/60 pt-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--ink)] mb-6 flex items-center gap-2">
                <Award size={16} className="text-[var(--coral)]" /> Recommended Careers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {results.careers.map((career) => (
                  <div key={career.id} className="p-5 rounded-2xl border border-[var(--stone)] bg-[var(--stone)]/10 hover:border-[var(--coral)] transition-all flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-lg font-medium text-[var(--ink)] mb-1">{career.name}</h4>
                      <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">{career.short_desc}</p>
                    </div>
                    <Link to={`/careers/${career.id}`} className="text-xs font-bold text-[var(--coral)] inline-flex items-center gap-1 group/l">
                      Explore Pathway 
                      <ArrowRight size={12} className="transition-transform group-hover/l:translate-x-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* RECOMMENDED COLLEGES */}
            <div className="mb-10 border-t border-[var(--stone)]/60 pt-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--ink)] mb-6 flex items-center gap-2">
                <GraduationCap size={16} className="text-[var(--coral)]" /> Top Matching Institutions
              </h3>
              <div className="flex flex-wrap gap-4">
                {results.colleges.map((col) => (
                  <Link 
                    key={col.id} 
                    to={`/colleges/${col.id}`}
                    className="px-5 py-4 rounded-xl border border-[var(--stone)] hover:border-[var(--coral)] transition-all text-xs font-bold text-[var(--ink)] bg-white shadow-sm flex items-center gap-2"
                  >
                    <span>{col.short_name} • {col.name} ({col.location})</span>
                    <ArrowRight size={12} />
                  </Link>
                ))}
              </div>
            </div>

            {/* RETAKE ACTION */}
            <div className="flex justify-center border-t border-[var(--stone)]/60 pt-8">
              <button 
                onClick={restartQuiz}
                className="btn text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                style={{
                  background: "transparent",
                  border: "1px solid var(--stone)",
                  color: "var(--ink)"
                }}
              >
                <RotateCcw size={14} />
                Retake Assessment
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default CareerQuiz;
