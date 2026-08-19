import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface FloatingCTAProps {
  onOpenEnrollment?: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const WHATSAPP_SESSION_URL = "https://chat.whatsapp.com/DKkUINCsIx9K7uKXDXwgJp?s=cl&p=i&ilr=0&amv=1";

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA once user scrolls past 400px (hero section)
      if (window.scrollY > 420) {
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
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 sm:p-4 transition-all duration-300 transform animate-in fade-in slide-in-from-bottom-5 pointer-events-none">
      <div className="max-w-4xl mx-auto pointer-events-auto">
        <div className="bg-slate-900/95 backdrop-blur-md text-white border border-slate-700/80 rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-3.5 shadow-2xl shadow-slate-950/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Left: Pricing */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-1.5 bg-slate-800/90 border border-slate-700 px-3 py-1.5 rounded-full text-xs">
              <span className="text-slate-400 line-through text-xs font-semibold">₹5,000</span>
              <span className="text-emerald-400 font-black text-sm">₹0 FREE</span>
            </div>
          </div>

          {/* Right: Action Button */}
          <div className="w-full sm:w-auto flex items-center justify-end">
            <a
              id="sticky-floating-cta-btn"
              href={WHATSAPP_SESSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl sm:rounded-full shadow-md shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
            >
              <span>Join Our Free Session</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
