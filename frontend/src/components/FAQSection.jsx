import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "When is the best time to start admission counseling with AJ?",
      a: "The most impactful time is during Class 12, right after board examinations, or as soon as entrance exam answer keys/ranks (WBJEE, JEE Main, NEET, CUET) are announced. Starting early allows you to explore backup options and secure direct seats before institutional deadlines close."
    },
    {
      q: "How do you help us select the right college and stream?",
      a: "We sit down with the student and parents to analyze marks, entrance ranks, family budget, and career interests. We compare 3 to 5 accredited institutions side-by-side using real NIRF/NAAC ratings, actual median salary packages, active faculty strength, and verified alumni reviews — eliminating commercial marketing bias."
    },
    {
      q: "Can I switch streams (e.g., from Science to Management, Design, or BCA)?",
      a: "Yes, absolutely. Many of India's highest-paying career streams — including BBA in Business Analytics, BCA in Cloud & AI, Product & UI/UX Design, B.Com in Applied Finance, and Integrated Law (BBA LLB) — warmly welcome students from Science, Commerce, and Arts alike."
    },
    {
      q: "What documents and eligibility are required for college admission?",
      a: "For institutional admission counseling, students need Class 10 & 12 mark sheets, pass certificates, admit cards, valid photo IDs, and rank cards if appeared for state or national entrance tests (WBJEE, JEE Main, CUET, etc.). Our counselors verify your documents and coordinate directly with the college admission directorate."
    },
    {
      q: "How does the Flat ₹1,00,000 scholarship exam work?",
      a: "Students who secure college admission through AJ Career Guidance are eligible to appear for our dedicated scholarship examination. If you qualify in the exam, you receive a flat ₹1,00,000 award. Full exam details, pattern, and schedule will be disclosed soon."
    },
    {
      q: "Are there any hidden fees or agent commissions charged to parents?",
      a: "Zero. AJ Career Guidance operates on strict transparency. All counseling, profile evaluations, and college shortlisting are completely free for students and parents. You pay tuition fees directly to the college bank account or official portal."
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 md:py-32 bg-[var(--ivory)] text-[var(--ink)] border-b border-[var(--stone)]/40 relative">
      <div className="container max-w-[1000px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--coral)]/10 text-[var(--coral)] text-xs font-bold tracking-widest uppercase mb-4">
            <HelpCircle size={14} />
            Got Questions?
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[var(--ink)] mb-4 leading-tight">
            Frequently Asked <span className="italic font-light text-[var(--coral)]">Questions</span>
          </h2>
          <p className="font-body text-base text-[var(--muted)] max-w-lg mx-auto font-light">
            Everything you need to know about our counseling process, methodology, and admissions support.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white border border-[var(--stone)] rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 font-display text-lg sm:text-xl font-medium text-[var(--ink)] hover:text-[var(--coral)] transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-[var(--coral)] text-white" : "bg-[var(--ivory)] text-[var(--muted)]"}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-sm sm:text-base text-[var(--muted)] font-body font-light leading-relaxed border-t border-[var(--stone)]/30 mt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Box */}
        <div className="mt-14 p-8 rounded-3xl bg-white border border-[var(--stone)] text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-left">
            <h4 className="font-display text-xl font-medium text-[var(--ink)] mb-1">
              Have a specific question not covered here?
            </h4>
            <p className="text-xs sm:text-sm text-[var(--muted)] font-light">
              Our academic counselors are available to talk through your doubts anytime.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn btn-coral py-3 px-6 text-xs uppercase tracking-wider shrink-0"
          >
            <span>Ask a Counselor</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
