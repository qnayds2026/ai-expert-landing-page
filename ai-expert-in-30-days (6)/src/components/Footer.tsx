import React from 'react';
import { ShieldCheck, ArrowUp } from 'lucide-react';
import logoImg from '../logo.png.png';

interface FooterProps {
  onOpenEnrollment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenEnrollment
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-blue-100 text-slate-600 text-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand & Positioning */}
          <div className="md:col-span-7 lg:col-span-8 space-y-4">
            <div className="flex items-center">
              <div className="h-[58px] flex items-center justify-center shrink-0">
                <img 
                  src={logoImg} 
                  alt="Logo" 
                  className="h-[58px] w-auto object-contain" 
                />
              </div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
              <strong className="text-slate-900">Program Positioning:</strong> Learn practical AI skills, build real projects, and learn how to apply AI to freelancing, marketing and online business opportunities.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={onOpenEnrollment}
                className="action-btn inline-block px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/25 rounded-lg transition-colors cursor-pointer"
              >
                Join the Session – Just ₹1
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-5 lg:col-span-4 space-y-3">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] font-mono">
              Program Modules & Outcomes
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <li><a href="#overview" className="hover:text-blue-600 transition-colors">Class & Learning Mode</a></li>
              <li><a href="#learning-flow" className="hover:text-blue-600 transition-colors">7-Step Learning Flow</a></li>
              <li><a href="#curriculum" className="hover:text-blue-600 transition-colors">12 Detailed Modules</a></li>
              <li><a href="#outcomes" className="hover:text-blue-600 transition-colors">15 Student Outcomes</a></li>
              <li><a href="#careers" className="hover:text-blue-600 transition-colors">10 Career Pathways</a></li>
              <li><a href="#mentor" className="hover:text-blue-600 transition-colors">Mentor Profile</a></li>
              <li><a href="#pricing" className="hover:text-blue-600 transition-colors">Cohort Pricing</a></li>
              <li><a href="#faq" className="hover:text-blue-600 transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

        </div>

        {/* Responsible Disclaimer Box (Verbatim from Page 5 of PDF) */}
        <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-[11px] text-slate-600 leading-relaxed">
          <p className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
            <span>
              <strong className="text-slate-900">Official Program Note:</strong> The program develops practical skills and business capabilities. Income is not guaranteed; results depend on implementation, skill development, market demand and the student's ability to acquire clients or customers.
            </span>
          </p>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Qnayds. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="hover:text-blue-600 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
