import React from "react";
import { Link } from "react-router-dom";
import { Compass, GraduationCap, Award, UserCheck, ArrowRight, CheckCircle2 } from "lucide-react";

const CounselingServices = () => {
  const services = [
    {
      icon: <Compass className="text-[var(--coral)]" size={28} />,
      title: "Strategic Stream & Career Architecture",
      tagline: "Science-backed academic path design",
      description: "Our comprehensive advisory maps your cognitive inclinations, academic strengths, and industry demand to structure high-growth career trajectories.",
      benefits: [
        "Identifies natural academic & professional strengths",
        "Aligns 12th board subjects with high-paying industries",
        "Personalized 5-year step-by-step career milestones"
      ],
      linkText: "Explore Career Roadmaps",
      linkTo: "/roadmap"
    },
    {
      icon: <GraduationCap className="text-[var(--coral)]" size={28} />,
      title: "Tier-1 College Admissions Strategy",
      tagline: "Vetted institutions & entrance roadmaps",
      description: "Strategic counseling tailored to competitive cut-offs, fee budgets, accreditation (NIRF/NAAC), campus culture, and verified placement track records.",
      benefits: [
        "Personalized target, reach & safety college lists",
        "Form filling & counseling round assistance",
        "Direct alumni placement intelligence"
      ],
      linkText: "Explore Top Colleges",
      linkTo: "/colleges"
    },
    {
      icon: <UserCheck className="text-[var(--coral)]" size={28} />,
      title: "1-on-1 Senior Counselor Mentorship",
      tagline: "Personalized guidance from experts",
      description: "Direct video or in-person sessions with certified educational advisors who listen to your doubts, resolve confusion, and craft a 5-year academic masterplan.",
      benefits: [
        "Dedicated mentor assigned to your profile",
        "Parent-student alignment discussions",
        "Post-12th branch vs college dilemma clarity"
      ],
      linkText: "Schedule Consultation",
      linkTo: "/contact"
    },
    {
      icon: <Award className="text-[var(--coral)]" size={28} />,
      title: "AJ ₹1,00,000 Scholarship Program",
      tagline: "Financial empowerment for achievers",
      description: "Exclusive student grant program rewarding students who secure college admissions through our guidance platform, easing initial tuition costs.",
      benefits: [
        "Direct ₹1 Lakh cash grant support",
        "Transparent verification process",
        "National merit & institutional scholarship mapping"
      ],
      linkText: "Apply For Grant",
      linkTo: "/scholarship"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-y border-[var(--stone)]/40 text-[var(--ink)] relative">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--coral)]/10 text-[var(--coral)] text-xs font-bold tracking-widest uppercase mb-4">
            Counseling Ecosystem
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[var(--ink)] mb-6 leading-tight">
            How AJ Career Guidance <br className="hidden sm:inline" />
            <span className="italic font-light text-[var(--coral)]">empowers</span> your future.
          </h2>
          <p className="font-body text-base md:text-lg text-[var(--muted)] leading-relaxed font-light">
            We replace anxiety and guesswork with scientific clarity, rigorous institutional research, and personalized human mentorship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((item, idx) => (
            <div 
              key={idx}
              className="group bg-[var(--ivory)]/70 hover:bg-white border border-[var(--stone)] hover:border-[var(--coral)]/40 p-8 sm:p-10 rounded-[32px] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--coral)]/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-[var(--stone)]/60 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-[var(--muted)] tracking-widest">
                    0{idx + 1}
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--coral)] font-bold block mb-1">
                  {item.tagline}
                </span>

                <h3 className="font-display text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-4">
                  {item.title}
                </h3>

                <p className="text-sm text-[var(--muted)] leading-relaxed font-light mb-6">
                  {item.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {item.benefits.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--ink)]/85">
                      <CheckCircle2 size={16} className="text-[var(--coral)] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[var(--stone)]/50">
                <Link
                  to={item.linkTo}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[var(--ink)] group-hover:text-[var(--coral)] transition-colors duration-200"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CounselingServices;
