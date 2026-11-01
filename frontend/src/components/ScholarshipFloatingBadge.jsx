import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, ArrowRight, X } from "lucide-react";

const ScholarshipFloatingBadge = () => {
  const [closed, setClosed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (closed || !visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-3 bg-[#111110] text-white px-4 py-2.5 rounded-full border border-[var(--coral)]/50 shadow-xl shadow-black/30 animate-in fade-in slide-in-from-bottom-4 duration-500 hover:border-[var(--coral)] transition-all">
      <div className="w-7 h-7 rounded-full bg-[var(--coral)]/20 text-[var(--coral)] flex items-center justify-center shrink-0">
        <GraduationCap size={15} />
      </div>

      <a 
        href="#scholarship-grant" 
        className="text-xs font-semibold text-white/90 hover:text-white flex items-center gap-1.5"
      >
        <span>₹1,00,000 Grant Open</span>
        <span className="text-[10px] bg-[var(--coral)] text-white px-1.5 py-0.5 rounded font-mono uppercase">2026</span>
        <ArrowRight size={13} className="text-[var(--coral)]" />
      </a>

      <button
        onClick={() => setClosed(true)}
        className="text-white/40 hover:text-white transition-colors ml-1 p-0.5"
        aria-label="Dismiss scholarship notification"
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default ScholarshipFloatingBadge;
