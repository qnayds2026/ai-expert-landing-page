import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface FloatingCTAProps {
  onOpenEnrollment?: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ 
  onOpenEnrollment
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA once user scrolls past 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-3 sm:bottom-4 inset-x-0 z-40 px-3 sm:px-4 pointer-events-none transition-all duration-300 transform animate-in fade-in slide-in-from-bottom-5">
      <div className="max-w-4xl mx-auto pointer-events-auto">
        {/* Dark Pill Bar Container matching reference screenshot */}
        <div className="bg-[#0b1329]/95 backdrop-blur-md text-white border border-[#1e2d4d]/90 rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 shadow-2xl shadow-black/60 flex items-center justify-between gap-3">
          
          {/* Left: Price Pill Badge */}
          <div className="flex items-center">
            <div className="flex items-center gap-2 bg-[#121c38]/90 border border-[#223359] px-3 sm:px-4 py-1.5 rounded-full">
              <span className="text-slate-400 line-through text-xs font-semibold">
                $99
              </span>
              <span className="text-[#00e676] font-black text-xs sm:text-sm tracking-wide">
                $2
              </span>
              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-black px-1.5 py-0.5 rounded">
                98% OFF
              </span>
            </div>
          </div>

          {/* Right: Glow Blue/Purple Pill Button matching reference screenshot */}
          <div className="flex items-center">
            <button
              type="button"
              id="sticky-floating-cta-btn"
              onClick={onOpenEnrollment}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#1d61ff] to-[#6d28d9] hover:from-[#1853db] hover:to-[#5c1fc7] rounded-full shadow-[0_0_22px_rgba(29,97,255,0.65)] hover:shadow-[0_0_28px_rgba(29,97,255,0.9)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
            >
              <span>Join the Session – Just $2</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
