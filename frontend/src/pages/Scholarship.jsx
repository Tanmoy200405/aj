import React, { useState } from "react";
import { Upload, CheckCircle, ArrowRight, Info } from "lucide-react";

const Scholarship = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    course: "",
    college: "",
    admissionDate: "",
    year: "",
    time: "",
    email: "",
    file: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call to backend
    console.log("Scholarship Form Submitted:", formData);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        fatherName: "",
        motherName: "",
        course: "",
        college: "",
        admissionDate: "",
        year: "",
        time: "",
        email: "",
        file: null,
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[var(--ivory)] pt-28 pb-20">
      <div className="container max-w-[800px] mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--coral)]/10 text-[var(--coral)] text-xs font-bold tracking-widest uppercase mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--coral)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--coral)]"></span>
            </span>
            A & J Scholarship Program
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-medium tracking-tight text-[var(--ink)] mb-4">
            Claim Your <span className="italic text-[var(--coral)]">₹1,00,000</span> Grant
          </h1>
          <p className="text-[var(--muted)] font-body text-base md:text-lg max-w-xl mx-auto">
            Successfully secured your college admission? Upload your admission form below and get a ₹1,00,000 reward directly! We will notify you via email once verified.
          </p>
        </div>

        {/* Application Form */}
        <div className="bg-white border border-[var(--stone)] rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden">
          
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={40} className="text-green-500" />
              </div>
              <h3 className="font-display text-3xl text-[var(--ink)] mb-3">Application Received!</h3>
              <p className="text-[var(--muted)] max-w-sm">
                Thank you for applying. Our team will verify your admission form and notify you via <strong className="text-[var(--ink)]">{formData.email}</strong> shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="bg-[var(--ivory)] p-4 rounded-xl border border-[var(--stone)]/30 flex gap-3 items-start mb-2">
                <Info size={20} className="text-[var(--coral)] shrink-0 mt-0.5" />
                <p className="text-xs text-[var(--ink)] leading-relaxed">
                  <strong>Verification Notice:</strong> Please ensure all details perfectly match your official admission receipt. Invalid or mismatched documents will be rejected.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">Student Name</label>
                  <input 
                    required type="text" name="name" value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--ivory)] border border-[var(--stone)] focus:border-[var(--ink)] focus:outline-none transition-colors"
                    placeholder="Enter full name"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">Email Address</label>
                  <input 
                    required type="email" name="email" value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--ivory)] border border-[var(--stone)] focus:border-[var(--ink)] focus:outline-none transition-colors"
                    placeholder="student@example.com"
                  />
                </div>

                {/* Father's Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">Father's Name</label>
                  <input 
                    required type="text" name="fatherName" value={formData.fatherName} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--ivory)] border border-[var(--stone)] focus:border-[var(--ink)] focus:outline-none transition-colors"
                    placeholder="Father's full name"
                  />
                </div>

                {/* Mother's Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">Mother's Name</label>
                  <input 
                    required type="text" name="motherName" value={formData.motherName} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--ivory)] border border-[var(--stone)] focus:border-[var(--ink)] focus:outline-none transition-colors"
                    placeholder="Mother's full name"
                  />
                </div>

                {/* Course */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">Admitted Course</label>
                  <input 
                    required type="text" name="course" value={formData.course} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--ivory)] border border-[var(--stone)] focus:border-[var(--ink)] focus:outline-none transition-colors"
                    placeholder="e.g. B.Tech Computer Science"
                  />
                </div>

                {/* College */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">College Name</label>
                  <input 
                    required type="text" name="college" value={formData.college} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--ivory)] border border-[var(--stone)] focus:border-[var(--ink)] focus:outline-none transition-colors"
                    placeholder="e.g. IIT Bombay"
                  />
                </div>

                {/* Admission Date & Year */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">Admission Date</label>
                    <input 
                      required type="date" name="admissionDate" value={formData.admissionDate} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--ivory)] border border-[var(--stone)] focus:border-[var(--ink)] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">Year</label>
                    <input 
                      required type="number" name="year" value={formData.year} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--ivory)] border border-[var(--stone)] focus:border-[var(--ink)] focus:outline-none transition-colors"
                      placeholder="e.g. 2026"
                      min="2020" max="2030"
                    />
                  </div>
                </div>

                {/* Time */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">Admission Time</label>
                  <input 
                    required type="time" name="time" value={formData.time} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--ivory)] border border-[var(--stone)] focus:border-[var(--ink)] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* File Upload */}
              <div className="mt-4 flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">Upload Admission Form / Receipt</label>
                <div className="border-2 border-dashed border-[var(--stone)] rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-[var(--ivory)]/50 hover:bg-[var(--ivory)] transition-colors relative">
                  <input 
                    required type="file" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Upload size={32} className="text-[var(--coral)] mb-3" />
                  <p className="font-semibold text-[var(--ink)] text-sm mb-1">
                    {formData.file ? formData.file.name : "Click or drag file to upload"}
                  </p>
                  <p className="text-xs text-[var(--muted)]">PDF, JPG, or PNG (Max 5MB)</p>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-coral mt-4 py-4 w-full text-sm">
                Submit Application & Claim Reward
                <ArrowRight size={16} />
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default Scholarship;
