import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, ShieldCheck, Award, CheckCircle2, ArrowRight, Building2, Users, Target, GraduationCap, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CorePrinciples = () => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Word-by-word scrub reveal scrolling text animation
      if (quoteRef.current) {
        const words = quoteRef.current.querySelectorAll(".reveal-word");
        gsap.fromTo(
          words,
          { opacity: 0.15, color: "var(--muted)", filter: "blur(2px)" },
          {
            scrollTrigger: {
              trigger: quoteRef.current,
              start: "top 80%",
              end: "bottom 45%",
              scrub: true,
            },
            opacity: 1,
            color: "var(--ink)",
            filter: "blur(0px)",
            stagger: 0.08,
            ease: "none",
          }
        );
      }

      // 2. Animated statistics counter numbers on scroll
      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll(".stat-number");
        statItems.forEach((item) => {
          const targetVal = parseFloat(item.getAttribute("data-target")) || 0;
          const prefix = item.getAttribute("data-prefix") || "";
          const suffix = item.getAttribute("data-suffix") || "";
          const obj = { val: 0 };

          gsap.to(obj, {
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            val: targetVal,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              if (targetVal >= 1000) {
                item.textContent = `${prefix}${Math.floor(obj.val).toLocaleString()}${suffix}`;
              } else {
                item.textContent = `${prefix}${Math.floor(obj.val)}${suffix}`;
              }
            },
          });
        });
      }

      // 3. Stagger reveal for the 3 pillar cards
      gsap.from(".pillar-card", {
        scrollTrigger: {
          trigger: ".pillars-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const philosophyWords = "We believe every student deserves honest answers, not marketing sales pitches. A college degree is four years of your life and a major family investment — our mission is to ensure you pick the right institution with absolute confidence.".split(" ");

  const principles = [
    {
      step: "01",
      icon: <Compass size={28} className="text-[var(--coral)]" />,
      title: "100% Unbiased Advisory",
      tagline: "Zero quota bias, no false promises",
      description: "We evaluate colleges based on official NAAC & NIRF rankings, faculty strength, real campus lab facilities, and genuine alumni placement records — never on commercial sales quotas.",
      points: [
        "Vetted placement medians and real recruiter lists",
        "Direct comparison of 34+ accredited universities",
        "Honest guidance on private vs state counseling"
      ]
    },
    {
      step: "02",
      icon: <ShieldCheck size={28} className="text-[var(--ink)]" />,
      title: "Complete Fee Transparency",
      tagline: "Know the full 4-year cost before applying",
      description: "No hidden charges, no surprise fees after registration. We provide an exact itemized breakdown of tuition, semester examinations, laboratory fees, and hostel accommodations upfront.",
      points: [
        "Itemized semester-wise fee projections",
        "Zero hidden agent charges to families",
        "Direct fee payments straight to the university"
      ]
    },
    {
      step: "03",
      icon: <Award size={28} className="text-[var(--coral)]" />,
      title: "End-to-End Handholding",
      tagline: "Step-by-step guidance from form to campus",
      description: "Our senior advisors walk you through every step: career stream selection, entrance cutoff analysis, choice-filling in WBJEE/JEE, document verification, and final college enrollment.",
      points: [
        "Dedicated senior mentor assigned to your family",
        "Counseling choice-filling & documentation help",
        "Continuous post-admission support & campus guidance"
      ]
    }
  ];

  const stats = [
    {
      icon: <Building2 size={24} className="text-[var(--coral)]" />,
      target: 34,
      prefix: "",
      suffix: "+",
      label: "Partner Institutions",
      sub: "NAAC A++ & top tier universities"
    },
    {
      icon: <Users size={24} className="text-[var(--ink)]" />,
      target: 10000,
      prefix: "",
      suffix: "+",
      label: "Students Mentored",
      sub: "Across Science, Commerce & Arts"
    },
    {
      icon: <Target size={24} className="text-[var(--coral)]" />,
      target: 98,
      prefix: "",
      suffix: "%",
      label: "Admission Success",
      sub: "High-match counseling accuracy"
    },
    {
      icon: <GraduationCap size={24} className="text-[var(--ink)]" />,
      target: 100,
      prefix: "",
      suffix: "%",
      label: "Unbiased Guidance",
      sub: "Transparent advisory for every student"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[var(--ivory)] text-[var(--ink)] border-b border-[var(--stone)]/40 relative overflow-hidden" id="principles">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Top Philosophy Scrubbing Text Block */}
        <div className="max-w-[960px] mx-auto text-center mb-20 md:mb-28">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--coral)]/10 text-[var(--coral)] text-xs font-bold tracking-widest uppercase mb-6">
            <Sparkles size={13} />
            Our Foundation & Philosophy
          </span>
          
          <h2 
            ref={quoteRef}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[var(--ink)] leading-[1.25] tracking-tight whitespace-normal"
          >
            {philosophyWords.map((word, i) => (
              <span 
                key={i} 
                className="reveal-word inline-block mr-2 md:mr-3.5 my-1 transition-all duration-300"
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Dynamic Verified Metrics Row with Counter Animation */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((s, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[var(--stone)] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[var(--coral)] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[var(--ivory)] border border-[var(--stone)]/40 flex items-center justify-center mb-5">
                {s.icon}
              </div>
              <div>
                <span 
                  className="stat-number font-display text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--coral)] tracking-tight block mb-1"
                  data-target={s.target}
                  data-prefix={s.prefix}
                  data-suffix={s.suffix}
                >
                  {s.prefix}0{s.suffix}
                </span>
                <span className="font-body text-xs sm:text-sm font-bold text-[var(--ink)] uppercase tracking-wider block mb-1">
                  {s.label}
                </span>
                <span className="text-xs text-[var(--muted)] font-light block">
                  {s.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Core Principles Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-mono uppercase tracking-[3px] text-[var(--muted)] font-bold mb-2 block">
            Guiding Philosophy
          </span>
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--ink)]">
            The AJ Standard
          </h3>
          <p className="text-sm text-[var(--muted)] font-light mt-3 leading-relaxed">
            Three non-negotiable principles that distinguish AJ Career Guidance from generic coaching institutes.
          </p>
        </div>

        {/* 3 Core Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[var(--stone)] rounded-[32px] p-8 sm:p-10 flex flex-col justify-between hover:border-[var(--coral)]/50 hover:shadow-xl hover:shadow-[var(--coral)]/5 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--ivory)] border border-[var(--stone)]/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="font-mono text-sm font-bold text-[var(--muted)] tracking-widest">
                    {item.step}
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--coral)] font-bold block mb-1">
                  {item.tagline}
                </span>

                <h4 className="font-display text-2xl font-medium text-[var(--ink)] mb-4">
                  {item.title}
                </h4>

                <p className="text-sm text-[var(--muted)] font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-[var(--ink)]/85">
                      <CheckCircle2 size={15} className="text-[var(--coral)] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[var(--stone)]/50">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[var(--ink)] group-hover:text-[var(--coral)] transition-colors"
                >
                  <span>Learn Our Methodology</span>
                  <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CorePrinciples;
