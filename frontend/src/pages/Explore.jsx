import React from "react";
import Hero from "../components/Hero";
import Careers from "../components/Careers";
import DecisionTree from "../components/DecisionTree";
import ScholarshipExamShowcase from "../components/ScholarshipExamShowcase";
import CorePrinciples from "../components/CorePrinciples";
import FounderShowcase from "../components/FounderShowcase";
import SuccessStories from "../components/SuccessStories";
import CounselorConsultationBanner from "../components/CounselorConsultationBanner";
import FAQSection from "../components/FAQSection";

const Explore = () => {
  return (
    <div className="bg-[var(--ivory)] min-h-screen text-[var(--ink)] selection:bg-[var(--coral)] selection:text-white overflow-x-hidden">
      
      {/* 1. Hero with Real Student Proof & Guidance Value */}
      <Hero />

      {/* 2. Career Horizons & High-Growth Pathways (Build, Create, Discover, Lead) */}
      <Careers />

      {/* 3. 12th Grade Academic Decision Tree & Stream Specializations */}
      <DecisionTree />

      {/* 4. The AJ Flat ₹1,00,000 Scholarship Qualifying Exam Showcase */}
      <ScholarshipExamShowcase />

      {/* 5. Core Principles & The AJ Standard (Word-by-word reveal animation & stats) */}
      <CorePrinciples />

      {/* 6. Dedicated Founder Showcase with Leadership Vision & Direct WhatsApp */}
      <FounderShowcase />

      {/* 7. Verified Student Admissions with 6 Authentic Testimonial Photos */}
      <SuccessStories />

      {/* 8. Live Senior Advisors & 1-Click Consultation Callback */}
      <CounselorConsultationBanner />

      {/* 9. Real Parent & Student FAQ Accordion */}
      <FAQSection />

    </div>
  );
};

export default Explore;
