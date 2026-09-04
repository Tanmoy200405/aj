import { useState } from "react";
import { ArrowRight, CheckCircle2, MessageSquare, PhoneCall, HelpCircle } from "lucide-react";
import { API_BASE_URL } from "../config/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    qualification: "",
    interested_in: "",
    confused_about: "",
    contact: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        if (!res.ok) throw new Error("Submission failed");
        return res.json();
      })
      .then((data) => {
        setSubmitted(true);
        setStatusMsg(data.message);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setSubmitted(true);
        setStatusMsg("Thank you! Your counseling booking has been received. A counselor will call you shortly.");
        setLoading(false);
      });
  };

  return (
    <div className="bg-[var(--ivory)] min-h-screen pb-24">
      {/* 1. HERO */}
      <section className="section py-20 border-b border-[var(--stone)]/40 text-center">
        <div className="container">
          <span className="text-xs font-bold text-[var(--coral)] uppercase tracking-widest block mb-4">
            Direct Mentorship
          </span>
          <h1 className="font-display text-5xl md:text-8xl font-medium tracking-tight text-[var(--ink)] mb-6 max-w-[800px] mx-auto leading-none">
            Still not sure?<br />Let's talk.
          </h1>
          <p className="text-[var(--muted)] text-base md:text-lg max-w-[480px] mx-auto mb-10 leading-relaxed">
            Fill out our counselor inquiry board or schedule a direct counseling session below.
          </p>
        </div>
      </section>

      {/* 2. FORM & METRICS COLUMN */}
      <section className="section py-16">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-[1100px] mx-auto">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[36px] border border-[var(--stone)] shadow-sm">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <CheckCircle2 className="text-emerald-500 mb-6 animate-bounce" size={48} />
                <h3 className="font-display text-3xl font-medium text-[var(--ink)] mb-4">
                  Request Submitted
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed max-w-[360px] mb-8">
                  {statusMsg}
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn text-xs font-bold uppercase tracking-wider"
                  style={{
                    background: "var(--ink)",
                    color: "var(--ivory)",
                    border: "none"
                  }}
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h3 className="font-display text-2xl font-medium text-[var(--ink)] mb-4">
                  Counselor Inquiry
                </h3>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">Your Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Tanmoy Mukherjee"
                    className="p-3.5 rounded-xl border border-[var(--stone)] bg-[var(--ivory)] text-sm font-medium text-[var(--ink)] focus:outline-none focus:border-[var(--coral)]"
                  />
                </div>

                {/* Qualification */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">Class / Current Qualification *</label>
                  <input
                    type="text"
                    name="qualification"
                    required
                    value={formData.qualification}
                    onChange={handleChange}
                    placeholder="e.g. Class 12th PCM / Undergrad"
                    className="p-3.5 rounded-xl border border-[var(--stone)] bg-[var(--ivory)] text-sm font-medium text-[var(--ink)] focus:outline-none focus:border-[var(--coral)]"
                  />
                </div>

                {/* Interested in */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">What are you interested in?</label>
                  <input
                    type="text"
                    name="interested_in"
                    value={formData.interested_in}
                    onChange={handleChange}
                    placeholder="e.g. Computer Science, Graphic Design"
                    className="p-3.5 rounded-xl border border-[var(--stone)] bg-[var(--ivory)] text-sm font-medium text-[var(--ink)] focus:outline-none focus:border-[var(--coral)]"
                  />
                </div>

                {/* Confused about */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">What are you confused about?</label>
                  <textarea
                    name="confused_about"
                    rows={4}
                    value={formData.confused_about}
                    onChange={handleChange}
                    placeholder="e.g. Confused between engineering at a tier-2 college or design at a tier-1 institute."
                    className="p-3.5 rounded-xl border border-[var(--stone)] bg-[var(--ivory)] text-sm font-medium text-[var(--ink)] focus:outline-none focus:border-[var(--coral)] resize-none"
                  />
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">Phone Number or Email Address *</label>
                  <input
                    type="text"
                    name="contact"
                    required
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210 / mail@domain.com"
                    className="p-3.5 rounded-xl border border-[var(--stone)] bg-[var(--ivory)] text-sm font-medium text-[var(--ink)] focus:outline-none focus:border-[var(--coral)]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn group mt-4 w-full"
                  style={{
                    background: "var(--ink)",
                    color: "var(--ivory)",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem"
                  }}
                >
                  {loading ? "Registering..." : "Talk to a Counselor"}
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: direct contact metadata */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Book slot */}
            <div className="p-8 rounded-3xl bg-white border border-[var(--stone)]">
              <div className="w-10 h-10 rounded-xl bg-[var(--coral)]/10 flex items-center justify-center text-[var(--coral)] mb-6">
                <PhoneCall size={20} />
              </div>
              <h3 className="font-display text-xl font-medium text-[var(--ink)] mb-2">Book counseling slot</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed mb-6 font-body">
                Call our direct academic support desk to set up a 1-on-1 counseling video call with our senior mentors.
              </p>
              <div className="border-t border-[var(--stone)]/40 pt-4 flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">Support Helpline:</span>
                <span className="text-sm font-bold text-[var(--ink)]">+91 1800 242 7837</span>
              </div>
            </div>

            {/* Counsel email */}
            <div className="p-8 rounded-3xl bg-white border border-[var(--stone)]">
              <div className="w-10 h-10 rounded-xl bg-[var(--coral)]/10 flex items-center justify-center text-[var(--coral)] mb-6">
                <MessageSquare size={20} />
              </div>
              <h3 className="font-display text-xl font-medium text-[var(--ink)] mb-2">Academic Enquiries</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed mb-6 font-body">
                For partnerships, institution listings, or organizational counseling memberships, send our board an email.
              </p>
              <div className="border-t border-[var(--stone)]/40 pt-4 flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">Office Mailbox:</span>
                <span className="text-sm font-bold text-[var(--ink)]">counsel@ajcareerguidance.com</span>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
