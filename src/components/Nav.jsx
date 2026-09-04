import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/logo.jpeg";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore Careers", href: "/careers" },
    { name: "Career Quiz", href: "/quiz" },
    { name: "Roadmaps", href: "/roadmap" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""} ${isHome ? "is-home-nav text-[#F3EBDD]" : ""}`}>
        <div className="nav-container">

          {/* Logo */}
          <Link to="/" className="logo flex items-center gap-1.5 sm:gap-3">
            <img src={logo} alt="A & J Career Guidance" className="h-9 sm:h-12 md:h-14 w-auto object-contain rounded-xl shadow-md border border-[var(--stone)]/60" />
            <span className={`font-display tracking-wide text-xs sm:text-base md:text-xl lg:text-2xl font-semibold whitespace-nowrap ${isHome ? "text-[#F3EBDD]" : "text-[var(--ink)]"}`}>A & J Career Guidance</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex nav-links items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) => 
                  `nav-link ${isActive ? "text-[var(--coral)] border-b border-[var(--coral)] font-semibold" : ""} font-sans text-xs tracking-widest uppercase`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/careers"
              className="btn btn-dark group font-sans text-xs tracking-widest uppercase py-3.5 px-6"
              style={{
                background: "var(--ink)",
                color: "var(--ivory)",
                border: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              Start Exploring
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden flex items-center justify-center ${isHome ? "text-[#F5F2EA]" : "text-[var(--ink)]"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={26} strokeWidth={1.5} />
            ) : (
              <Menu size={26} strokeWidth={1.5} />
            )}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 z-[90]
          bg-[#111111] text-[#F5F2EA]
          transition-transform duration-500
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >

        {/* Mobile Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <img src={logo} alt="A & J Career Guidance" className="h-8 sm:h-10 w-auto object-contain rounded-lg" />
            <span className="font-display text-sm sm:text-base font-semibold tracking-wide text-[#F5F2EA] whitespace-nowrap">A & J Career Guidance</span>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-[#F5F2EA]"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex h-[calc(100vh-90px)] flex-col justify-center px-6 overflow-y-auto py-10">
          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="
                  border-b border-white/10
                  py-4.5
                  font-display
                  text-3xl
                  tracking-tight
                  transition-colors
                  hover:text-[#FF5B45]
                "
              >
                <span className="mr-4 font-body text-xs text-white/40">
                  0{index + 1}
                </span>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <Link
            to="/careers"
            onClick={() => setMenuOpen(false)}
            className="
              mt-10
              flex
              w-fit
              items-center
              gap-3
              rounded-full
              bg-[#FF5B45]
              px-6
              py-4
              text-sm
              font-semibold
              text-[#111111]
            "
          >
            Start Exploring
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;