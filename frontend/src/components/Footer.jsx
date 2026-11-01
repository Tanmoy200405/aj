import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Twitter, ArrowRight, Plus, Minus } from "lucide-react";
import logo from "../assets/logo.jpeg";

const Footer = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const footerLinks = {
    explore: {
      title: "EXPLORE",
      links: [
        { name: "Careers", href: "/careers" },
        { name: "Colleges", href: "/colleges" },
        { name: "Career Roadmap", href: "/roadmap" },
        { name: "Compare Careers", href: "/compare" },
      ],
    },
    resources: {
      title: "RESOURCES",
      links: [
        { name: "Academic Courses", href: "/courses" },
        { name: "Career Roadmap", href: "/roadmap" },
        { name: "Knowledge Hub", href: "/resources" },
        { name: "Scholarship Program", href: "/scholarship" },
      ],
    },
    company: {
      title: "COMPANY",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Methodology", href: "/about" },
        { name: "Book Counseling", href: "/contact" },
        { name: "Contact Counselors", href: "/contact" },
      ],
    },
  };

  return (
    <>
      {/* =====================================================
         BOTTOM CTA SECTION
         ===================================================== */}
      <section className="bg-[var(--ink)] text-[var(--ivory)] py-28 border-b border-white/5">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_0.5fr] items-center">
            
            {/* CTA Left: Large Typography */}
            <div>
              <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.95] tracking-tight max-w-[700px] text-[var(--ivory)]">
                There is no single right path. <br />
                <span className="italic font-display text-white/55">There is only the path you choose to explore.</span>
              </h2>
            </div>

            {/* CTA Right: Button */}
            <div className="flex flex-col gap-4 items-start lg:items-end">
              <span className="text-xs tracking-[0.2em] font-semibold text-white/40 uppercase">Take the first step today.</span>
              
              <Link 
                to="/careers" 
                className="btn btn-coral group" 
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "1.2rem 2rem",
                  fontSize: "0.9rem",
                }}
              >
                Start Your Journey
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
         FOOTER SECTION
         ===================================================== */}
      <footer className="footer bg-[var(--ink)] text-[var(--ivory)] border-t border-white/5">
        <div className="container">
          
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] mb-20">
            
            {/* FOOTER LEFT */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <img src={logo} alt="AJ Career Guidance" className="h-20 w-auto object-contain rounded-2xl shadow-lg border border-white/10" />
                  <span className="font-display text-3xl font-semibold tracking-wide text-[var(--ivory)]">AJ Career Guidance</span>
                </div>
                <p className="mt-4 text-[#aaa69d] text-sm leading-relaxed max-w-[280px]">
                  Your future starts here. Personal career mentoring for students after 12th.
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-8">
                <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#aaa69d] hover:text-[var(--coral)] hover:border-[var(--coral)] transition-colors duration-300">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#aaa69d] hover:text-[var(--coral)] hover:border-[var(--coral)] transition-colors duration-300">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#aaa69d] hover:text-[var(--coral)] hover:border-[var(--coral)] transition-colors duration-300">
                  <Youtube size={16} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#aaa69d] hover:text-[var(--coral)] hover:border-[var(--coral)] transition-colors duration-300">
                  <Twitter size={16} />
                </a>
              </div>
            </div>

            {/* FOOTER RIGHT */}
            <div className="grid gap-8 md:grid-cols-4">
              
              {/* DESKTOP COLUMNS (Hidden on Mobile) */}
              {Object.keys(footerLinks).map((key) => {
                const section = footerLinks[key];
                return (
                  <div key={key} className="hidden md:block">
                    <h4 className="font-body text-xs font-bold tracking-[0.2em] text-[var(--ivory)] mb-6">
                      {section.title}
                    </h4>
                    <ul className="flex flex-col gap-4.5">
                      {section.links.map((link, idx) => (
                        <li key={idx}>
                          <Link 
                            to={link.href} 
                            className="text-[#aaa69d] hover:text-[var(--coral)] text-xs font-semibold tracking-wide transition-colors duration-200"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}

              {/* MOBILE ACCORDIONS (Hidden on Desktop) */}
              <div className="md:hidden flex flex-col border-y border-white/10 py-2 col-span-full">
                {Object.keys(footerLinks).map((key) => {
                  const section = footerLinks[key];
                  const isOpen = activeAccordion === key;
                  return (
                    <div key={key} className="border-b border-white/5 last:border-b-0 py-2.5">
                      <button
                        className="w-full flex items-center justify-between py-2 text-left font-body text-xs font-bold tracking-[0.15em] text-[var(--ivory)]"
                        onClick={() => toggleAccordion(key)}
                      >
                        <span>{section.title}</span>
                        <span className="text-[#aaa69d]">
                          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                        </span>
                      </button>

                      <div 
                        className="transition-all duration-300 ease-in-out overflow-hidden"
                        style={{
                          maxHeight: isOpen ? "160px" : "0px",
                          marginTop: isOpen ? "12px" : "0px"
                        }}
                      >
                        <ul className="flex flex-col gap-3.5 pl-2 pb-4">
                          {section.links.map((link, idx) => (
                            <li key={idx}>
                              <Link 
                                to={link.href} 
                                className="text-[#aaa69d] hover:text-[var(--coral)] text-xs transition-colors duration-200"
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* NEWSLETTER COLUMN */}
              <div className="col-span-full md:col-span-1">
                <h4 className="font-body text-xs font-bold tracking-[0.2em] text-[var(--ivory)] mb-6">
                  STAY UPDATED
                </h4>
                <p className="text-xs text-[#aaa69d] leading-relaxed mb-4">
                  Get career insights and updates straight to your inbox.
                </p>
                <form 
                  onSubmit={(e) => e.preventDefault()}
                  className="flex items-center border-b border-white/20 focus-within:border-[var(--coral)] transition-colors duration-300 py-1"
                >
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-transparent border-none text-white text-xs font-semibold focus:outline-none placeholder-white/35 py-2 w-full"
                  />
                  <button 
                    type="submit"
                    className="text-[#aaa69d] hover:text-[var(--coral)] p-1.5 transition-colors duration-200"
                    aria-label="Submit email"
                  >
                    <ArrowRight size={16} />
                  </button>
                </form>
              </div>

            </div>

          </div>

          {/* BOTTOM SUBBAR */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 text-[10px] text-[#6b6b63] font-semibold tracking-wider uppercase">
            <span className="mb-4 sm:mb-0">© 2026 AJ Career Guidance. All rights reserved.</span>
            
            <div className="flex items-center gap-6">
              <Link to="/about" className="hover:text-[var(--coral)] transition-colors duration-200">About Guidance</Link>
              <Link to="/contact" className="hover:text-[var(--coral)] transition-colors duration-200">Contact Counselor</Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
