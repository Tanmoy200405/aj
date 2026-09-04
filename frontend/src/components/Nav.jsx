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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  const navLinks = [
    { name: "Explore", href: "/" },
    { name: "Careers", href: "/careers" },
    { name: "Colleges", href: "/colleges" },
    { name: "Courses", href: "/courses" },
    { name: "Quiz", href: "/quiz" },
    { name: "Compare", href: "/compare" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">

          {/* Logo Container - Clean Flex Layout */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 text-[var(--ink)]">
            <img 
              src={logo} 
              alt="A & J Career Guidance Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full border border-[var(--stone)]/80 shadow-sm shrink-0" 
            />
            <span className="font-display text-sm sm:text-base md:text-lg font-bold tracking-tight text-[var(--ink)] shrink-0">
              A & J Career Guidance
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex nav-links items-center gap-3 lg:gap-4 xl:gap-5 shrink-0 ml-4">
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
              className="btn btn-coral group text-xs tracking-wider uppercase py-2.5 px-5 shrink-0"
            >
              Consult Counselor
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="xl:hidden flex items-center justify-center text-[var(--ink)] p-2 shrink-0 rounded-lg hover:bg-[var(--stone)]/40 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <X size={24} strokeWidth={2} />
            ) : (
              <Menu size={24} strokeWidth={2} />
            )}
          </button>

        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`
          fixed inset-0 z-[100]
          bg-[#111111] text-[#F5F2EA]
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >

        {/* Mobile Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0 bg-[#111111]">
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5 shrink-0 text-[#F5F2EA]">
            <img 
              src={logo} 
              alt="A & J Career Guidance Logo" 
              className="w-8 h-8 object-cover rounded-full border border-white/20 shrink-0" 
            />
            <span className="font-display text-sm sm:text-base font-bold tracking-tight text-[#F5F2EA] shrink-0">
              A & J Career Guidance
            </span>
          </Link>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-[#F5F2EA] p-2 rounded-lg hover:bg-white/10 transition-colors shrink-0"
            aria-label="Close menu"
          >
            <X size={24} strokeWidth={2} />
          </button>
        </div>

        {/* Mobile Drawer Navigation Links */}
        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="
                  border-b border-white/10
                  py-3
                  font-display
                  text-lg sm:text-xl
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

          {/* Mobile Drawer CTA Button */}
          <div className="pt-6 shrink-0">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="
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
                hover:bg-[#ff452b]
                transition-colors
              "
            >
              Consult Counselor
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default Nav;