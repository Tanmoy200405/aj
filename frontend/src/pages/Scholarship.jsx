import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Upload, 
  Bell, 
  AlertCircle
} from "lucide-react";

const Scholarship = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    college: "Adamas University",
    course: "",
    counselorRef: "",
    file: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [registrationRef, setRegistrationRef] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = "AJ-SCH-" + Math.floor(100000 + Math.random() * 900000);
    setRegistrationRef(ref);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--ink)] pt-32 pb-24 selection:bg-[var(--coral)] selection:text-white">
      <div className="container max-w-[1200px] mx-auto px-4 md:px-8">
        
        {/* 1. HERO HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--coral)]/10 text-[var(--coral)] text-xs font-bold tracking-widest uppercase mb-4 border border-[var(--coral)]/20">
            <Award size={15} />
            AJ CAREER GUIDANCE SCHOLARSHIP INITIATIVE
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[var(--ink)] mb-6 leading-[1.05]">
            Admitted via AJ Guidance? <br />
            Appear for the exam. <br />
            <span className="italic font-display text-[var(--coral)] font-light">Qualify & Win Flat ₹1,00,000.</span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--muted)] font-body font-light leading-relaxed max-w-2xl mx-auto">
            If you have secured your college admission through AJ Career Guidance, you are eligible to appear for our dedicated scholarship examination. Clear the exam and receive flat ₹1,00,000!
          </p>
        </div>

        {/* 2. THE 3 SIMPLE CORE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          
          <div className="bg-white border border-[var(--stone)] rounded-3xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[var(--coral)]/10 text-[var(--coral)] font-display text-xl font-bold flex items-center justify-center mb-6 border border-[var(--coral)]/20">
              01
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--coral)] block mb-1">
              Condition 1
            </span>
            <h3 className="font-display text-xl font-medium text-[var(--ink)] mb-2">
              Admission via AJ Guidance
            </h3>
            <p className="text-xs sm:text-sm text-[var(--muted)] font-light leading-relaxed">
              You must have secured your college or university admission through AJ Career Guidance counseling at any of our partner institutions.
            </p>
          </div>

          <div className="bg-white border border-[var(--stone)] rounded-3xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 font-display text-xl font-bold flex items-center justify-center mb-6 border border-amber-500/20">
              02
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 block mb-1">
              Condition 2
            </span>
            <h3 className="font-display text-xl font-medium text-[var(--ink)] mb-2">
              Appear for the Exam
            </h3>
            <p className="text-xs sm:text-sm text-[var(--muted)] font-light leading-relaxed">
              Eligible admitted students need to appear for the scholarship qualifying examination conducted by AJ Career Guidance.
            </p>
          </div>

          <div className="bg-white border border-[var(--stone)] rounded-3xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 font-display text-xl font-bold flex items-center justify-center mb-6 border border-emerald-500/20">
              03
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-1">
              Condition 3
            </span>
            <h3 className="font-display text-xl font-medium text-[var(--ink)] mb-2">
              Qualify & Win Flat ₹1 Lakh
            </h3>
            <p className="text-xs sm:text-sm text-[var(--muted)] font-light leading-relaxed">
              If you qualify the exam, you will receive a flat ₹1,00,000 cash or fee award directly felicitated by AJ Career Guidance.
            </p>
          </div>

        </div>

        {/* 3. EXAM NOTICE CARD: DISCLOSED SOON */}
        <div className="bg-gradient-to-br from-[#111110] to-[#1f1f1d] text-white rounded-3xl p-8 md:p-12 shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--coral)]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-500/30">
                <Bell size={14} /> Official Exam Announcement
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-3">
                Exam Name & Pattern Disclosed Soon
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                The official examination name, syllabus guidelines, question pattern, and test dates will be disclosed very soon. Pre-register your admission details below to be the first to receive notifications via WhatsApp and Email.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shrink-0 text-center md:text-left">
              <span className="text-xs uppercase font-mono tracking-wider text-[var(--coral)] font-bold block mb-1">
                Scholarship Value
              </span>
              <div className="font-display text-4xl sm:text-5xl font-bold text-white mb-1">
                Flat ₹1,00,000
              </div>
              <span className="text-[11px] text-emerald-400 font-semibold block">
                Direct award upon qualifying
              </span>
            </div>
          </div>
        </div>

        {/* 4. PRE-REGISTRATION / VERIFICATION FORM */}
        <div className="bg-white border border-[var(--stone)] rounded-3xl p-8 md:p-14 shadow-md relative overflow-hidden mb-16" id="register-form">
          
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center max-w-xl mx-auto">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <CheckCircle2 size={44} />
              </div>
              
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold mb-2">
                Registration Acknowledged
              </span>
              
              <h3 className="font-display text-3xl md:text-4xl font-medium text-[var(--ink)] mb-3">
                You're on the Priority List!
              </h3>
              
              <div className="bg-[var(--ivory)] p-4 rounded-2xl border border-[var(--stone)] w-full mb-6 text-left">
                <div className="flex justify-between items-center py-1 border-b border-[var(--stone)]/40 text-xs">
                  <span className="text-[var(--muted)] font-medium">Reference Number:</span>
                  <span className="font-mono font-bold text-[var(--coral)]">{registrationRef}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[var(--stone)]/40 text-xs">
                  <span className="text-[var(--muted)] font-medium">Student Name:</span>
                  <span className="font-bold text-[var(--ink)]">{formData.name}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[var(--stone)]/40 text-xs">
                  <span className="text-[var(--muted)] font-medium">Admitted College:</span>
                  <span className="font-bold text-[var(--ink)]">{formData.college}</span>
                </div>
                <div className="flex justify-between items-center py-1 text-xs">
                  <span className="text-[var(--muted)] font-medium">Status:</span>
                  <span className="font-bold text-emerald-600">Pending Exam Announcement</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-8">
                Thank you, <strong className="text-[var(--ink)]">{formData.name}</strong>. As soon as the exam name, pattern, and schedule are announced, our team will notify you directly at <strong className="text-[var(--ink)]">{formData.email}</strong> and WhatsApp <strong className="text-[var(--ink)]">{formData.whatsapp || formData.phone}</strong>.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="btn btn-outline py-3 px-6 text-xs uppercase tracking-wider"
              >
                Submit Another Registration
              </button>
            </div>
          ) : (
            <div>
              
              <div className="max-w-2xl mb-10">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--coral)] font-bold mb-2">
                  <GraduationCap size={15} /> Student Pre-Registration
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-medium text-[var(--ink)] mb-3">
                  Register Your Admission for the Scholarship Exam
                </h2>
                <p className="text-xs sm:text-sm text-[var(--muted)] font-light leading-relaxed">
                  Enter your admission details below so we can verify your enrollment through AJ Career Guidance and notify you the moment exam details are disclosed.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="bg-[var(--ivory)] p-4 rounded-2xl border border-[var(--stone)]/60 flex items-start gap-3">
                  <AlertCircle size={18} className="text-[var(--coral)] shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--ink)]/80 leading-relaxed">
                    <strong>Eligibility Reminder:</strong> This scholarship is exclusively for students who secured admission through AJ Career Guidance. If you qualify the upcoming exam, you will receive flat ₹1,00,000.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Student Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                      Student Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sourav Sengupta"
                      className="px-4 py-3 rounded-xl bg-[var(--ivory)] border border-[var(--stone)] focus:border-[var(--ink)] focus:outline-none transition-colors text-sm font-medium"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                      Email Address (For Exam Notice) *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="student@example.com"
                      className="px-4 py-3 rounded-xl bg-[var(--ivory)] border border-[var(--stone)] focus:border-[var(--ink)] focus:outline-none transition-colors text-sm font-medium"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                      Calling Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="px-4 py-3 rounded-xl bg-[var(--ivory)] border border-[var(--stone)] focus:border-[var(--ink)] focus:outline-none transition-colors text-sm font-medium"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                      WhatsApp Number (For Direct Exam Updates) *
                    </label>
                    <input
                      required
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="px-4 py-3 rounded-xl bg-[var(--ivory)] border border-[var(--stone)] focus:border-[var(--ink)] focus:outline-none transition-colors text-sm font-medium"
                    />
                  </div>

                  {/* College Admitted */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                      College Admitted Through AJ Guidance *
                    </label>
                    <select
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-[var(--ivory)] border border-[var(--stone)] focus:border-[var(--ink)] focus:outline-none transition-colors text-sm font-medium"
                    >
                      <option value="Bhawanipur Global Campus">Bhawanipur Global Campus</option>
                      <option value="Adamas University">Adamas University</option>
                      <option value="Institute of Engineering and Management (IEM)">Institute of Engineering and Management (IEM)</option>
                      <option value="iLEAD Kolkata">iLEAD Kolkata</option>
                      <option value="Sister Nivedita University (SNU)">Sister Nivedita University (SNU)</option>
                      <option value="Brainware University">Brainware University</option>
                      <option value="Techno India University">Techno India University</option>
                      <option value="George Group of Colleges">George Group of Colleges</option>
                      <option value="EIILM Kolkata">EIILM Kolkata</option>
                      <option value="JIS Group / University">JIS Group / University</option>
                      <option value="The Neotia University (TNU)">The Neotia University (TNU)</option>
                      <option value="KIIT University">KIIT University</option>
                      <option value="VIT (Vellore)">VIT (Vellore)</option>
                      <option value="Other Partner Institution">Other Partner Institution</option>
                    </select>
                  </div>

                  {/* Course */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                      Admitted Course / Degree *
                    </label>
                    <input
                      required
                      type="text"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      placeholder="e.g. B.Tech CSE / BBA / BCA"
                      className="px-4 py-3 rounded-xl bg-[var(--ivory)] border border-[var(--stone)] focus:border-[var(--ink)] focus:outline-none transition-colors text-sm font-medium"
                    />
                  </div>

                  {/* Counselor Ref */}
                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                      AJ Counselor Name / Reference (Optional)
                    </label>
                    <input
                      type="text"
                      name="counselorRef"
                      value={formData.counselorRef}
                      onChange={handleChange}
                      placeholder="e.g. Counselor Name or Reference Number"
                      className="px-4 py-3 rounded-xl bg-[var(--ivory)] border border-[var(--stone)] focus:border-[var(--ink)] focus:outline-none transition-colors text-sm font-medium"
                    />
                  </div>

                </div>

                {/* File Upload */}
                <div className="flex flex-col gap-1.5 pt-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                    Upload Admission Letter / Fee Receipt (Optional)
                  </label>
                  <div className="border-2 border-dashed border-[var(--stone)] rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-[var(--ivory)]/40 hover:bg-[var(--ivory)] transition-colors relative">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Upload size={30} className="text-[var(--coral)] mb-2" />
                    <p className="font-semibold text-sm text-[var(--ink)]">
                      {formData.file ? formData.file.name : "Click or drag your admission receipt / letter"}
                    </p>
                    <p className="text-[11px] text-[var(--muted)] mt-1">PDF, JPG, or PNG (Max 5MB)</p>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-coral py-4 w-full text-xs uppercase tracking-widest font-bold shadow-lg shadow-[var(--coral)]/20 mt-4"
                >
                  <span>Submit Details & Receive Exam Notification</span>
                  <ArrowRight size={16} />
                </button>

              </form>

            </div>
          )}

        </div>

        {/* 5. TRANSPARENT FAQS */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--coral)] font-bold block mb-1">
              Clear & Simple
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-medium text-[var(--ink)]">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-[var(--stone)] p-6 rounded-2xl">
              <h4 className="font-bold text-sm sm:text-base text-[var(--ink)] mb-1.5">
                Who is eligible for this scholarship?
              </h4>
              <p className="text-xs sm:text-sm text-[var(--muted)] font-light leading-relaxed">
                Any student who has secured admission into a college or university through AJ Career Guidance is eligible to appear for the exam.
              </p>
            </div>

            <div className="bg-white border border-[var(--stone)] p-6 rounded-2xl">
              <h4 className="font-bold text-sm sm:text-base text-[var(--ink)] mb-1.5">
                When will the exam name, pattern, and schedule be announced?
              </h4>
              <p className="text-xs sm:text-sm text-[var(--muted)] font-light leading-relaxed">
                The complete exam details, question pattern, and schedule will be disclosed soon. All registered admitted students will receive notifications directly.
              </p>
            </div>

            <div className="bg-white border border-[var(--stone)] p-6 rounded-2xl">
              <h4 className="font-bold text-sm sm:text-base text-[var(--ink)] mb-1.5">
                What do students receive if they qualify?
              </h4>
              <p className="text-xs sm:text-sm text-[var(--muted)] font-light leading-relaxed">
                Students who appear for the exam and qualify will be awarded a flat ₹1,00,000 (1 Lakh Rupees) reward directly felicitated by AJ Career Guidance.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Scholarship;
