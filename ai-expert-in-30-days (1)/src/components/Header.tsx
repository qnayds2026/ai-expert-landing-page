import React from 'react';
import { ArrowRight } from 'lucide-react';
import logoImg from '../logo.png.png';

interface HeaderProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenEnrollment
}) => {
  return (
    <header id="site-header" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center group shrink-0 text-left">
            <div className="h-[56px] sm:h-[64px] flex items-center justify-center shrink-0">
              <img 
                src={logoImg} 
                alt="Logo" 
                className="h-[56px] sm:h-[64px] w-auto object-contain"
              />
            </div>
          </div>

          {/* Navigation / Header CTA Action */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={onOpenEnrollment}
              className="action-btn inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/25 rounded-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
            >
              <span>Join Free Session</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
