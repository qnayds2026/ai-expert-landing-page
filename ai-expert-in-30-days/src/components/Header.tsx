import React from 'react';
import { ArrowRight } from 'lucide-react';
import logoImg from '../logo.png.png';

interface HeaderProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnrollment }) => {
  return (
    <header id="site-header" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center group shrink-0">
            <div className="h-[64px] flex items-center justify-center shrink-0">
              <img 
                src={logoImg} 
                alt="Logo" 
                className="h-[64px] w-auto object-contain"
              />
            </div>
          </a>

          {/* Direct Header Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="https://chat.whatsapp.com/DKkUINCsIx9K7uKXDXwgJp?s=cl&p=i&ilr=0&amv=1"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-5 py-1.5 sm:py-2.5 text-[11px] sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg sm:rounded-xl shadow-md shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
            >
              <span>Join Our Free Session</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
