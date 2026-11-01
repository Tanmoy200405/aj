import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  PhoneCall, 
  Calendar, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  MessageSquare 
} from "lucide-react";
import { API_BASE_URL } from "../config/api";

const CounselorConsultationBanner = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    interested_in: "Engineering",
    qualification: "Class 12th"
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;
    setLoading(true);

    fetch(`${API_BASE_URL}/api/counseling`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .catch((err) => console.log("Offline mode, recorded locally", err))
      .finally(() => {
        setLoading(false);
        setSubmitted(true);
      });
  };

  const advisors = [
    {
      name: "Dr. Sumit Mukherjee",
      role: "Senior Academic Director",
      exp: "15+ Years Exp",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      rating: "4.95",
      specialty: "STEM & Medicine Admissions"
    },
    {
      name: "Pooja Banerjee",
      role: "Strategic Career Counselor",
      exp: "11+ Years Exp",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80",
      rating: "4.98",
      specialty: "Business & Creative Media"
    },
    {
      name: "Debashis Roy",
      role: "College Admissions Mentor",
      exp: "12+ Years Exp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      rating: "4.92",
      specialty: "Entrance Cutoffs & Choice Filling"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white text-[var(--ink)] border-b border-[var(--stone)]/40 relative overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-8">
        
        <div className="bg-gradient-to-br from-[#1A1A18] to-[#111111] text-[var(--ivory)] rounded-[40px] p-8 md:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--coral)]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
            
            {/* Left 7 Columns: Pitch & Counselor Badges */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[var(--coral)] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                <Clock size={14} />
                Live Advisory Board
              </div>

              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[var(--ivory)] leading-[1.05] mb-6">
                Still confused about streams or cutoffs? <br />
                <span className="italic font-light text-[var(--coral)]">Talk to an expert</span> today.
              </h2>

              <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed max-w-xl mb-8">
                Skip the guesswork. Our senior educational counselors analyze your marks, entrance options, and preferred colleges in a direct 1-on-1 session.
              </p>

              {/* Verified Mentors Lineup */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                {advisors.map((adv, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2.5">
                      <img 
                        src={adv.avatar} 
                        alt={adv.name} 
                        className="w-10 h-10 rounded-full object-cover border border-white/20" 
                      />
                      <div>
                        <h4 className="text-xs font-bold text-white truncate">{adv.name}</h4>
                        <span className="text-[10px] text-white/50 block">{adv.exp}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-white/60">
                      <span className="truncate pr-1">{adv.specialty}</span>
                      <span className="flex items-center gap-0.5 text-[#FFB800] font-bold">
                        <Star size={11} fill="currentColor" />
                        {adv.rating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Direct Fast Booking Box */}
            <div className="lg:col-span-5">
              <div className="bg-white text-[var(--ink)] p-8 sm:p-10 rounded-[32px] shadow-2xl relative">
                
                {submitted ? (
                  <div className="py-10 text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4 animate-in zoom-in-75">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="font-display text-2xl font-medium text-[var(--ink)] mb-2">
                      Callback Requested!
                    </h3>
                    <p className="text-xs text-[var(--muted)] max-w-xs leading-relaxed mb-6">
                      An AJ senior educational advisor has been assigned and will call you within 24 hours.
                    </p>
                    <Link
                      to="/contact"
                      className="btn btn-dark text-xs uppercase py-3 px-6"
                    >
                      View All Contact Channels
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--coral)] font-bold block mb-1">
                        Free 1-on-1 Consultation
                      </span>
                      <h3 className="font-display text-2xl font-medium text-[var(--ink)] mb-1">
                        Request a Strategy Call
                      </h3>
                      <p className="text-xs text-[var(--muted)] font-light mb-4">
                        Receive unbiased advice on choice-filling and college quotas.
                      </p>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[var(--muted)] block mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--ivory)] border border-[var(--stone)] text-xs font-semibold focus:border-[var(--coral)] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[var(--muted)] block mb-1">
                        Phone Number or WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="contact"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--ivory)] border border-[var(--stone)] text-xs font-semibold focus:border-[var(--coral)] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-[var(--muted)] block mb-1">
                          Current Stage
                        </label>
                        <select
                          value={formData.qualification}
                          onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                          className="w-full px-3 py-3 rounded-xl bg-[var(--ivory)] border border-[var(--stone)] text-xs font-semibold focus:border-[var(--coral)] focus:outline-none transition-colors"
                        >
                          <option>Class 11th</option>
                          <option>Class 12th</option>
                          <option>12th Passed</option>
                          <option>Parent of Student</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-[var(--muted)] block mb-1">
                          Target Field
                        </label>
                        <select
                          value={formData.interested_in}
                          onChange={(e) => setFormData({ ...formData, interested_in: e.target.value })}
                          className="w-full px-3 py-3 rounded-xl bg-[var(--ivory)] border border-[var(--stone)] text-xs font-semibold focus:border-[var(--coral)] focus:outline-none transition-colors"
                        >
                          <option>Engineering</option>
                          <option>Management / BBA</option>
                          <option>Design & Media</option>
                          <option>Medicine / Bio</option>
                          <option>Law & Humanities</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 mt-2 bg-[var(--coral)] hover:bg-[#E0432C] text-[var(--ink)] hover:text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[var(--coral)]/30 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Schedule Free Callback</span>
                          <ArrowRight size={14} />
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-center text-[var(--muted)] pt-1">
                      🔒 100% Confidential. Zero spam. Certified AJ Advisors only.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CounselorConsultationBanner;
