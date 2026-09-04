import React, { useState } from "react";
import { Link } from "react-router-dom";
import { coursesData } from "../data/coursesData";
import { ArrowRight, BookOpen, GraduationCap, CheckCircle2 } from "lucide-react";

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="bg-[var(--ivory)] pb-24 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="section py-16 md:py-24 border-b border-[var(--stone)]/40">
        <div className="container max-w-[1000px] text-center">
          <span className="text-[10px] font-bold text-[var(--coral)] uppercase tracking-[3px] mb-4 block">
            Academic Fields & Degrees
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-medium text-[var(--ink)] leading-tight tracking-tight mb-6">
            Explore Premium Career<br />Pathways & Courses
          </h1>
          <p className="font-body text-base md:text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
            Discover a comprehensive catalog of professional streams, undergraduate degrees, and post-graduate programs structured to shape global career success.
          </p>
        </div>
      </section>

      {/* 2. COURSES LISTING SECTION */}
      <section className="section py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left side: Quick Jumper / Sidebar */}
            <div className="lg:col-span-1 lg:sticky lg:top-36 self-start flex flex-col gap-3 p-6 bg-white rounded-3xl border border-[var(--stone)]/50">
              <h3 className="font-display text-xs uppercase tracking-widest text-[var(--muted)] mb-3 flex items-center gap-2">
                <BookOpen size={14} className="text-[var(--coral)]" />
                Select Category
              </h3>
              <button
                onClick={() => setActiveCategory(null)}
                className={`text-left px-4 py-3 rounded-2xl text-xs uppercase tracking-wider font-bold transition-all duration-300 ${
                  activeCategory === null
                    ? "bg-[var(--ink)] text-white shadow-sm"
                    : "text-[var(--ink)] hover:bg-[var(--stone)]/40"
                }`}
              >
                All Courses
              </button>
              {coursesData.map((course) => (
                <button
                  key={course.id}
                  onClick={() => setActiveCategory(course.id)}
                  className={`text-left px-4 py-3 rounded-2xl text-xs uppercase tracking-wider font-bold transition-all duration-300 flex items-center justify-between ${
                    activeCategory === course.id
                      ? "bg-[var(--ink)] text-white shadow-sm"
                      : "text-[var(--ink)] hover:bg-[var(--stone)]/40"
                  }`}
                >
                  <span className="truncate">{course.category}</span>
                  <span className={`text-[10px] ${activeCategory === course.id ? "text-white/60" : "text-[var(--muted)]"}`}>
                    0{course.id}
                  </span>
                </button>
              ))}
            </div>

            {/* Right side: Detailed Cards Grid */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {coursesData
                .filter((course) => activeCategory === null || course.id === activeCategory)
                .map((course) => {
                  const IconComponent = course.icon;
                  return (
                    <div
                      key={course.id}
                      className="group bg-white rounded-3xl border border-[var(--stone)] hover:border-[var(--coral)] p-8 transition-all duration-300 hover:shadow-md flex flex-col md:flex-row gap-8 items-start"
                    >
                      {/* Image Thumbnail */}
                      <div className="w-full md:w-44 aspect-square rounded-2xl overflow-hidden border border-[var(--stone)]/60 bg-[var(--stone)]/30 flex-shrink-0 relative">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-[var(--ivory)] border border-[var(--stone)]/60 flex items-center justify-center text-[var(--ink)]">
                          <IconComponent size={14} />
                        </div>
                      </div>

                      {/* Content details */}
                      <div className="flex-1 flex flex-col justify-between self-stretch">
                        <div>
                          <span className="text-[9px] font-bold tracking-[2px] text-[var(--coral)] uppercase block mb-2">
                            {course.category}
                          </span>
                          <h2 className="font-display text-2xl font-medium text-[var(--ink)] mb-3">
                            {course.title}
                          </h2>
                          <p className="font-body text-xs text-[var(--muted)] leading-relaxed mb-6">
                            {course.desc}
                          </p>

                          <div className="border-t border-[var(--stone)]/40 pt-4">
                            <h4 className="text-[10px] font-bold text-[var(--ink)] uppercase tracking-wider mb-3">
                              Key Specializations:
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {course.items.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-xs text-[var(--muted)]">
                                  <CheckCircle2 size={13} className="text-[var(--coral)] mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Action Link */}
                        <div className="mt-8 pt-4 border-t border-[var(--stone)]/40 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-[var(--muted)]">0{course.id} / 11</span>
                          <Link
                            to="/contact"
                            state={{ subject: `Inquiry about ${course.category}` }}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--ink)] hover:text-[var(--coral)] transition-colors uppercase tracking-wider"
                          >
                            Get Free counseling
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

          </div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="section py-12">
        <div className="container max-w-[800px] text-center bg-white p-12 rounded-[32px] border border-[var(--stone)]">
          <div className="w-12 h-12 rounded-2xl bg-[var(--coral)]/10 flex items-center justify-center text-[var(--coral)] mx-auto mb-6">
            <GraduationCap size={24} />
          </div>
          <h3 className="font-display text-3xl font-medium text-[var(--ink)] mb-4">
            Confused About Your Options?
          </h3>
          <p className="text-xs text-[var(--muted)] max-w-md mx-auto leading-relaxed mb-8">
            Speak to a certified career advisor at A & J Career Guidance to identify the ideal program matched to your personality and future career trajectory.
          </p>
          <Link
            to="/contact"
            className="btn btn-dark inline-flex items-center gap-2 border-none"
            style={{ background: "var(--ink)", color: "var(--ivory)", padding: "0.8rem 1.8rem" }}
          >
            Consult Counselor Now
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Courses;
