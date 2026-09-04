import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";

const Quiz = () => {
  const [step, setStep] = useState(0); // 0: intro, 1-3: questions, 4: results
  const [answers, setAnswers] = useState([]);
  const containerRef = useRef(null);

  const questions = [
    {
      q: "What describes your ideal working style?",
      options: [
        { text: "Building products, writing code, or working with mechanics.", type: "BUILD" },
        { text: "Designing visuals, sketching concepts, or styling media.", type: "CREATE" },
        { text: "Analyzing data, researching phenomena, or investigating patterns.", type: "DISCOVER" },
        { text: "Pitching ideas, leading teams, or starting new ventures.", type: "LEAD" },
      ],
    },
    {
      q: "Which tool would you most enjoy mastering?",
      options: [
        { text: "A powerful software editor or advanced hardware rig.", type: "BUILD" },
        { text: "Figma, design sketchbooks, or digital styling tools.", type: "CREATE" },
        { text: "A laboratory microscope or statistical analyzer.", type: "DISCOVER" },
        { text: "A project control dashboard or business strategy sheet.", type: "LEAD" },
      ],
    },
    {
      q: "What type of puzzles do you like to solve?",
      options: [
        { text: "Mechanical bugs, structural faults, and logical loops.", type: "BUILD" },
        { text: "Usability flaws, design mismatches, and visual blocks.", type: "CREATE" },
        { text: "Scientific mysteries, health questions, and data anomalies.", type: "DISCOVER" },
        { text: "Operational gaps, marketing challenges, and leadership crises.", type: "LEAD" },
      ],
    },
  ];

  useEffect(() => {
    // Smooth transition between steps
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, [step]);

  const handleSelectOption = (type) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);
    if (step < questions.length) {
      setStep(step + 1);
    }
  };

  const getRecommendedPath = () => {
    // Count frequencies of types
    const counts = answers.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});

    // Find the type with maximum frequency
    let recommended = "BUILD";
    let max = 0;
    Object.keys(counts).forEach((key) => {
      if (counts[key] > max) {
        max = counts[key];
        recommended = key;
      }
    });

    return recommended;
  };

  const restartQuiz = () => {
    setAnswers([]);
    setStep(0);
  };

  const resultDetails = {
    BUILD: {
      name: "BUILD (Engineering & Tech)",
      desc: "You enjoy hands-on projects, logical design, and engineering solutions. You are natural at breaking down systems to construct new systems.",
      advice: "Consider majors in Computer Science, Mechanical/Electrical Engineering, AI & Robotics, or Biotechnology.",
    },
    CREATE: {
      name: "CREATE (Design & Expression)",
      desc: "You are driven by aesthetics, human experiences, and artistic exploration. You excel at turning abstract ideas into tangible designs.",
      advice: "Consider exploring UI/UX Design, Product Design, Animation, Architecture, or Fine Arts.",
    },
    DISCOVER: {
      name: "DISCOVER (Science & Research)",
      desc: "You have an insatiable curiosity about how things work. You love researching, experimenting, and diving deep into data.",
      advice: "Consider majors in Medicine, Genetics, Data Science, Quantum Physics, or Environmental Science.",
    },
    LEAD: {
      name: "LEAD (Business & Impact)",
      desc: "You are a natural organizer, presenter, and problem-solver. You love organizing groups and executing big ideas.",
      advice: "Consider studies in Finance, Entrepreneurship, Marketing, Economics, or Law.",
    },
  };

  return (
    <section className="section bg-[var(--stone)]/35 py-24 border-t border-[var(--stone)]/40" id="quiz">
      <div className="container max-w-[800px] text-center">
        
        {/* SMALL BADGE */}
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--coral)]/10 text-[var(--coral)] text-xs font-semibold uppercase tracking-wider">
          <Sparkles size={12} />
          <span>Interactive Career Quiz</span>
        </div>

        <div ref={containerRef} className="quiz-card p-8 md:p-12 rounded-3xl bg-[var(--ivory)] border border-[var(--stone)] shadow-sm text-left mt-4 min-h-[400px] flex flex-col justify-center">
          
          {/* STEP 0: INTRO */}
          {step === 0 && (
            <div className="flex flex-col items-center text-center">
              <h2 className="font-display text-4xl md:text-5xl font-medium text-[var(--ink)] mb-4">
                Find your path in 3 steps.
              </h2>
              <p className="text-[var(--muted)] text-base leading-relaxed max-w-[480px] mb-8">
                Take our quick interactive quiz to map your interests, skills, and goals to the ideal career categories.
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
                  gap: "0.5rem"
                }}
              >
                Start the Quiz
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          )}

          {/* STEP 1-3: QUESTIONS */}
          {step > 0 && step <= questions.length && (
            <div>
              {/* Progress bar */}
              <div className="w-full bg-[var(--stone)]/30 h-1 rounded-full mb-8 overflow-hidden">
                <div 
                  className="bg-[var(--coral)] h-full transition-all duration-300"
                  style={{ width: `${(step / questions.length) * 100}%` }}
                />
              </div>

              <span className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-widest font-body block mb-3">
                Question {step} of {questions.length}
              </span>
              
              <h3 className="font-display text-2xl md:text-3xl font-medium text-[var(--ink)] mb-8 leading-snug">
                {questions[step - 1].q}
              </h3>

              <div className="flex flex-col gap-3">
                {questions[step - 1].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.type)}
                    className="w-full text-left p-5 rounded-2xl border border-[var(--stone)] hover:border-[var(--coral)] hover:bg-[var(--stone)]/10 text-sm font-medium text-[var(--ink)] transition-all duration-300"
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: RESULTS */}
          {step > questions.length && (() => {
            const recommended = getRecommendedPath();
            const detail = resultDetails[recommended];
            return (
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[var(--coral)] tracking-widest uppercase mb-2">
                  Your recommendation is ready
                </span>
                
                <h3 className="font-display text-3xl md:text-4xl font-medium text-[var(--ink)] mb-4">
                  {detail.name}
                </h3>
                
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">
                  {detail.desc}
                </p>

                <div className="p-5 rounded-2xl bg-[var(--stone)]/20 border border-[var(--stone)]/30 mb-8">
                  <h4 className="font-body text-xs font-bold uppercase tracking-wide text-[var(--ink)] mb-1.5">
                    Next Actionable Step:
                  </h4>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    {detail.advice}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="#careers" 
                    className="btn group"
                    style={{
                      background: "var(--ink)",
                      color: "var(--ivory)",
                      border: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem"
                    }}
                  >
                    Explore {recommended.toLowerCase()} careers
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <button 
                    onClick={restartQuiz}
                    className="btn flex items-center gap-2"
                    style={{
                      background: "transparent",
                      border: "1px solid var(--stone)",
                      color: "var(--ink)"
                    }}
                  >
                    <RotateCcw size={14} />
                    Retake Quiz
                  </button>
                </div>
              </div>
            );
          })()}

        </div>
      </div>
    </section>
  );
};

export default Quiz;
