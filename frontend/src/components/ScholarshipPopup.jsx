import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Sparkles, ArrowRight, GraduationCap } from 'lucide-react';

const ScholarshipPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);

  useEffect(() => {
    // Show the big popup after 2 seconds
    const timer = setTimeout(() => {
      if (!hasClosed) {
        setIsVisible(true);
        
        // Dynamically load confetti to avoid Vite build/import errors
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js';
        script.onload = () => {
          const duration = 3 * 1000;
          const end = Date.now() + duration;

          const frame = () => {
            if (window.confetti) {
              window.confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#FF5B45', '#111111', '#FFFFFF']
              });
              window.confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#FF5B45', '#111111', '#FFFFFF']
              });
            }

            if (Date.now() < end) {
              requestAnimationFrame(frame);
            }
          };
          frame();
        };
        document.body.appendChild(script);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasClosed]);

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
    setHasClosed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-[#111110]/80 backdrop-blur-sm animate-in fade-in duration-500">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500"
      >
        {/* Decorative Top Banner */}
        <div className="h-32 bg-gradient-to-br from-[var(--coral)] to-[#E0432C] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center animate-pulse">
            <GraduationCap size={40} className="text-white" />
          </div>
        </div>

        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-white transition-colors z-10"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="p-8 sm:p-12 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 text-[var(--coral)] text-xs font-bold tracking-widest uppercase mb-4 bg-[var(--coral)]/10 px-4 py-1.5 rounded-full">
            <Sparkles size={14} />
            Exclusive Scholarship
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--ink)] leading-tight mb-4 tracking-tight">
            Claim Your <span className="italic text-[var(--coral)] font-semibold">₹1,00,000</span> Grant
          </h2>
          
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed mb-8 max-w-lg mx-auto font-light">
            Successfully secured your college admission? Upload your official admission form today to unlock our exclusive ₹1 Lakh student reward.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link 
              to="/scholarship"
              onClick={() => setIsVisible(false)}
              className="btn btn-coral py-4 px-8 text-sm w-full sm:w-auto shadow-lg shadow-[var(--coral)]/30 group flex justify-center"
            >
              Apply for Scholarship Now
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
            
            <button 
              onClick={handleClose}
              className="btn btn-outline py-4 px-8 text-sm w-full sm:w-auto flex justify-center border-[var(--stone)] text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--ink)]"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipPopup;
