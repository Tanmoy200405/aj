import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/logo.jpeg";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Explore", href: "/" },
    { name: "Careers", href: "/careers" },
    { name: "Colleges", href: "/colleges" },
    { name: "Courses", href: "/courses" },
    { name: "Quiz", href: "/quiz" },
    { name: "Compare", href: "/compare" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">

          {/* Logo Container - Prevents collision and mobile overflow */}
          <Link to="/" className="logo flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0 max-w-[70%] sm:max-w-none">
            <img 
              src={logo} 
              alt="A & J Career Guidance" 
              className="h-8 sm:h-10 md:h-11 w-auto object-contain rounded-xl shadow-sm border border-[var(--stone)]/60 flex-shrink-0" 
            />
            <span className="font-display tracking-wide text-xs sm:text-base md:text-lg lg:text-xl font-semibold text-[var(--ink)] truncate">
              A & J Career Guidance
            </span>
          </Link>

          {/* Desktop Navigation - Properly separated from logo */}
          <div className="hidden xl:flex nav-links items-center gap-3 lg:gap-4 xl:gap-5 flex-shrink-0 ml-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) => 
                  `nav-link ${isActive ? "text-[var(--coral)] font-semibold" : "text-[var(--ink)]/80"} font-sans text-xs tracking-wider uppercase transition-colors duration-200`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="btn btn-dark group font-sans text-xs tracking-wider uppercase py-2.5 px-4 rounded-full ml-1 flex-shrink-0"
              style={{
                background: "var(--ink)",
                color: "var(--ivory)",
                border: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem"
              }}
            >
              Consult Counselor
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden flex items-center justify-center text-[var(--ink)] p-2 flex-shrink-0 rounded-lg hover:bg-[var(--stone)]/40 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={24} strokeWidth={1.8} />
            ) : (
              <Menu size={24} strokeWidth={1.8} />
            )}
          </button>

        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div
        className={`
          fixed inset-0 z-[90]
          bg-[#111111] text-[#F5F2EA]
          transition-transform duration-500
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >

        {/* Mobile Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-2 max-w-[80%] min-w-0">
            <img src={logo} alt="A & J Career Guidance" className="h-8 w-auto object-contain rounded-lg flex-shrink-0" />
            <span className="font-display text-sm font-semibold tracking-wide text-[#F5F2EA] truncate">
              A & J Career Guidance
            </span>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-[#F5F2EA] p-1 rounded-lg hover:bg-white/10"
          >
            <X size={26} strokeWidth={1.8} />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex h-[calc(100vh-80px)] flex-col justify-between px-6 overflow-y-auto py-8">
          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="
                  border-b border-white/10
                  py-3
                  font-display
                  text-xl sm:text-2xl
                  tracking-tight
                  transition-colors
                  hover:text-[#FF5B45]
                  flex items-center
                "
              >
                <span className="mr-4 font-body text-xs text-white/40 w-6">
                  0{index + 1}
                </span>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="
              mt-6
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#FF5B45]
              px-6
              py-3.5
              text-sm
              font-semibold
              text-[#111111]
              shadow-lg
            "
          >
            Consult Counselor
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;