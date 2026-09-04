import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ChevronDown, ChevronUp, MapPin, CheckCircle, Award } from "lucide-react";

const Roadmap = () => {
  const [activeStep, setActiveStep] = useState(0);
  const detailRefs = useRef([]);

  const steps = [
    {
      label: "12TH CLASS",
      title: "Consolidate Streams & Focus Fields",
      short: "Finalize your board stream and match subjects to preliminary options.",
      desc: "This is your starting platform. The choice of Science, Commerce, or Arts sets the boundaries of immediate college entrance options. Focus on scoring strong percentages in board exams, as many universities still check cut-off scores, and begin aligning your stream with your interests.",
      tips: [
        "Align subjects with core skills (e.g., Mathematics for Engineering/Data Science, Biology for Medicine).",
        "Don't panic if your stream doesn't match perfectly; fields like Design, Management, and Law are open to all streams.",
        "Check basic eligibility criteria for national entrance tests early."
      ]
    },
    {
      label: "CHOOSE DIRECTION",
      title: "Evaluate Strengths & Skills",
      short: "Identify matches using aptitude tools and personality profiles.",
      desc: "Do not choose a degree simply because it is popular. Map out what you enjoy (Build, Create, Discover, Lead, Help, Analyze) and match it to actual careers. This is where tools like our Career Quiz or counseling sessions play a key role.",
      tips: [
        "Consult working professionals in your fields of interest.",
        "Analyze a day in the life of careers to understand the actual reality, not just the dream version.",
        "Select your top 2 career candidates to compare side-by-side."
      ]
    },
    {
      label: "ENTRANCE / COLLEGE",
      title: "Navigate Testing & Applications",
      short: "Formulate registration strategy for national entrance tests.",
      desc: "Prepare and clear entrance exams mapped to your goals (JEE, NEET, UCEED, CLAT, IPMAT, etc.). Filter premier colleges based on tuition fees, location, course availability, and placements.",
      tips: [
        "Create an organized timeline of application deadlines and exam schedules.",
        "Balance preparation for competitive tests with university boards.",
        "Draft backups: select secondary colleges in case primary cut-offs are missed."
      ]
    },
    {
      label: "DEGREE",
      title: "Scale Core Academic Knowledge",
      short: "Maximize under-grad learning, projects, and peer networking.",
      desc: "Once admitted, focus on academic performance while exploring secondary interests. Join college engineering societies, design clubs, or editorial chambers to collaborate and network.",
      tips: [
        "Keep your CGPA above 7.5 to remain eligible for top placement drives.",
        "Participate in national level hackathons, design sprints, or case competitions.",
        "Build relationships with professors who can write research recommendations."
      ]
    },
    {
      label: "SKILLS DEVELOPMENT",
      title: "Assemble Practical Portfolios",
      short: "Build certifications, write code projects, design mockups.",
      desc: "A degree alone doesn't secure a job anymore. You must compile a portfolio demonstrating real, practical capability. Write software code repositories, design high-fi Figma prototypes, or write business research analyses.",
      tips: [
        "Complete industry certifications (AWS, CFA Level 1, Google UX, etc.).",
        "Publish your work on GitHub, Behance, or LinkedIn.",
        "Work on real-world projects or freelance projects to gain practice."
      ]
    },
    {
      label: "INTERNSHIPS",
      title: "Gain First-Hand Industry Exposure",
      short: "Apply skills in company sprints and secure recommendations.",
      desc: "Complete at least 2 internships during summer or winter breaks. Internships offer a low-risk environment to test if you enjoy the actual daily tasks of a career, while establishing industry contacts.",
      tips: [
        "Apply through college placement chambers or platform search directories (Internshala, LinkedIn).",
        "Treat internships as extended interviews; many lead to Pre-Placement Offers (PPOs).",
        "Ask managers for feedback and recommendation letters."
      ]
    },
    {
      label: "FIRST JOB",
      title: "Enter the Market & Launch",
      short: "Secure placements, navigate interviews, start your career.",
      desc: "Prepare your resume, compile your portfolios, practice mock interviews, and apply for roles. Start your first job and begin continuous learning in the professional market.",
      tips: [
        "Practice behavioral interview questions and technical code/design tests.",
        "Build a strong LinkedIn profile and network with industry recruiters.",
        "Remember: your first job is just the launch pad, not your final destination. Keep growing."
      ]
    }
  ];

  useEffect(() => {
    // Animate details box opening
    const target = detailRefs.current[activeStep];
    if (target) {
      gsap.fromTo(
        target,
        { opacity: 0, height: 0 },
        { opacity: 1, height: "auto", duration: 0.4, ease: "power2.out" }
      );
    }
  }, [activeStep]);

  return (
    <div className="bg-[var(--ivory)] min-h-screen pb-24">
      
      {/* HERO */}
      <section className="section py-20 border-b border-[var(--stone)]/40 text-center">
        <div className="container">
          <span className="text-xs font-bold text-[var(--coral)] uppercase tracking-widest block mb-4">
            Interactive Roadmap
          </span>
          <h1 className="font-display text-5xl md:text-8xl font-medium tracking-tight text-[var(--ink)] mb-6 max-w-[800px] mx-auto leading-none">
            From 12th<br />to your first job.
          </h1>
          <p className="text-[var(--muted)] text-base md:text-lg max-w-[480px] mx-auto mb-10 leading-relaxed">
            Click through each milestone stage to reveal detailed guidelines, actionable tips, and strategic instructions.
          </p>
        </div>
      </section>

      {/* ROADMAP TIMELINE & PANEL */}
      <section className="section py-16">
        <div className="container max-w-[900px]">
          <div className="flex flex-col gap-6">
            {steps.map((step, idx) => {
              const isOpen = activeStep === idx;
              return (
                <div 
                  key={idx}
                  className={`border rounded-3xl overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? "bg-white border-[var(--coral)] shadow-md" 
                      : "bg-white border-[var(--stone)] hover:border-[var(--ink)]"
                  }`}
                >
                  {/* Step Header Accordion Toggle */}
                  <button
                    onClick={() => setActiveStep(idx)}
                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-6 focus:outline-none"
                  >
                    <div className="flex items-center gap-6">
                      {/* Visual Indicator */}
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 ${
                        isOpen 
                          ? "bg-[var(--coral)] text-white" 
                          : "bg-[var(--stone)]/40 text-[var(--ink)]"
                      }`}>
                        {idx + 1}
                      </span>
                      <div>
                        <span className={`text-[10px] font-bold tracking-widest block mb-1 uppercase ${
                          isOpen ? "text-[var(--coral)]" : "text-[var(--muted)]"
                        }`}>
                          {step.label}
                        </span>
                        <h3 className="font-display text-xl font-medium text-[var(--ink)]">
                          {step.title}
                        </h3>
                        <p className="text-xs text-[var(--muted)] mt-1.5 hidden md:block">
                          {step.short}
                        </p>
                      </div>
                    </div>
                    <div>
                      {isOpen ? (
                        <ChevronUp size={20} className="text-[var(--coral)]" />
                      ) : (
                        <ChevronDown size={20} className="text-[var(--muted)]" />
                      )}
                    </div>
                  </button>

                  {/* Step Expanded Content */}
                  {isOpen && (
                    <div 
                      ref={(el) => (detailRefs.current[idx] = el)}
                      className="px-6 pb-8 md:px-8 md:pb-10 border-t border-[var(--stone)]/30 overflow-hidden"
                    >
                      <div className="pt-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--ink)] mb-3">Overview</h4>
                        <p className="text-xs text-[var(--muted)] leading-relaxed mb-6 font-body">
                          {step.desc}
                        </p>

                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--coral)] mb-4 flex items-center gap-1.5">
                          <Award size={12} /> Actionable Tips
                        </h4>
                        <ul className="flex flex-col gap-3">
                          {step.tips.map((tip, i) => (
                            <li key={i} className="flex gap-2.5 items-start text-xs font-medium text-[var(--ink)] font-body">
                              <CheckCircle size={14} className="text-[var(--coral)] shrink-0 mt-0.5" />
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Roadmap;
