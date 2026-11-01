import React from "react";
import { Star, Quote, CheckCircle, GraduationCap, Building2 } from "lucide-react";

import photo1 from "../assets/testimonial/photo1.jpeg";
import photo2 from "../assets/testimonial/photo2.jpeg";
import photo3 from "../assets/testimonial/photo3.jpeg";
import photo4 from "../assets/testimonial/photo4.jpeg";
import photo5 from "../assets/testimonial/photo5.jpeg";
import photo6 from "../assets/testimonial/photo6.jpeg";

const SuccessStories = () => {
  const testimonials = [
    {
      name: "Tanmoy Mukherjee",
      college: "ST THOMAS COLLEGE OF ENGINEERING & TECHNOLOGY",
      avatar: photo1,
      quote: "AJ Career Guidance helped me find the perfect course. Their counseling was extremely thorough and professional.",
      rating: 5
    },
    {
      name: "Moubani Issu",
      college: "BHAWANIPUR GLOBAL CAMPUS",
      avatar: photo2,
      quote: "I liked it very much. Their guidance helped me in moving forward in the future and assisted me regarding college.",
      rating: 5
    },
    {
      name: "Aysika Dey",
      college: "BHAWANIPUR GLOBAL CAMPUS",
      avatar: photo3,
      quote: "The counselor helped me to choose the right platform and obviously the right college which I deserve... The guidance was 10 out of 10..",
      rating: 5
    },
    {
      name: "Sambhabi Banerjee",
      college: "BHAWANIPUR GLOBAL CAMPUS",
      avatar: photo4,
      quote: "I have benefited greatly from their guidance. It has helped me set my goals in life and find a good college.",
      rating: 5
    },
    {
      name: "Agnish Paul",
      college: "APC RAY POLYTECHNIC",
      avatar: photo5,
      quote: "Excellent mentorship! They helped me understand the career roadmap very clearly and choose the best engineering path.",
      rating: 5
    },
    {
      name: "SOHAM GUCHAIT",
      college: "TECHNO MAIN SALT LAKE",
      avatar: photo6,
      quote: "Great experience with this career counseling center. The counselors were supportive, knowledgeable, and gave clear, personalized guidance. It really helped me gain clarity and confidence about my career path. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[var(--ivory)] text-[var(--ink)] border-b border-[var(--stone)]/40 relative overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--coral)]/10 text-[var(--coral)] text-xs font-bold tracking-widest uppercase mb-4">
              Student Stories
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[var(--ink)] leading-tight">
              Real admissions. <br />
              <span className="italic font-light text-[var(--coral)]">Transformative</span> outcomes.
            </h2>
          </div>
          <p className="font-body text-sm md:text-base text-[var(--muted)] max-w-md font-light leading-relaxed">
            Over 10,000+ students and parents have trusted AJ Career Guidance to navigate the pivotal transition from high school to top-tier colleges and universities.
          </p>
        </div>

        {/* Testimonials Grid (6 authentic admissions) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="bg-white border border-[var(--stone)] p-8 sm:p-9 rounded-[28px] flex flex-col justify-between hover:shadow-xl hover:shadow-[var(--ink)]/5 hover:border-[var(--coral)]/30 transition-all duration-300 relative group"
            >
              <div>
                {/* Top Row: Quotation Icon & 5 Gold Stars */}
                <div className="flex items-start justify-between mb-6">
                  <span className="font-serif text-5xl leading-none text-[#E8BF85] select-none font-bold">
                    “
                  </span>
                  <div className="flex items-center gap-1 text-[#E5A826]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                </div>

                {/* Italic Quote */}
                <p className="font-serif italic text-base sm:text-[16.5px] text-[var(--ink)]/90 leading-relaxed font-normal mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Student Profile & College Info */}
              <div className="pt-6 border-t border-[var(--stone)]/60 flex items-center gap-4">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-[50px] h-[50px] rounded-full object-cover border-2 border-[var(--stone)]/70 flex-shrink-0 shadow-sm" 
                />
                <div className="min-w-0">
                  <h4 className="font-display text-base font-bold text-[var(--ink)] truncate tracking-tight">
                    {item.name}
                  </h4>
                  <p className="text-[10.5px] font-bold tracking-widest text-[#C49326] uppercase mt-1 leading-snug">
                    {item.college}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;
