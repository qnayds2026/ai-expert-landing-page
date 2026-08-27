import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Calendar,
  Clock,
  MessageSquare
} from 'lucide-react';
import { COURSE_MODULES, PROGRAM_SPECS } from '../data/courseData';

interface SyllabusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnroll: () => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({ 
  isOpen, 
  onClose, 
  onEnroll 
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                Official 30-Day Syllabus & Curriculum Guide
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                AI Expert in 30 Days • 12 Practical Modules • 10 Live Hours
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer shadow-xs"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-blue-600" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-full transition-colors cursor-pointer shadow-xs"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Syllabus Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-8 bg-white text-slate-900 text-xs sm:text-sm">
          
          {/* Document Header */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                COHORT SYLLABUS
              </span>
              <span className="text-xs font-bold text-slate-700">30 Days Accelerated AI Track</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              AI EXPERT IN 30 DAYS: Practical AI Skills & Digital Business
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              <strong>Positioning:</strong> Learn practical AI skills, build real projects, and learn how to apply AI to freelancing, marketing and online business opportunities.
            </p>
          </div>

          {/* Quick Specs Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PROGRAM_SPECS.slice(0, 4).map((spec, sIdx) => (
              <div key={sIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] uppercase font-bold text-slate-500">{spec.label}</span>
                <p className="text-xs font-bold text-slate-900 mt-0.5">{spec.value}</p>
              </div>
            ))}
          </div>

          {/* Detailed 12 Modules Listing */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2 flex items-center justify-between">
              <span>Detailed Module Breakdown (12 Modules)</span>
              <span className="text-xs text-blue-600 font-mono font-bold">12 Projects</span>
            </h4>

            <div className="space-y-4">
              {COURSE_MODULES.map((mod) => (
                <div 
                  key={mod.id}
                  className="p-4 rounded-xl bg-slate-50/70 border border-slate-200 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">
                        {mod.number}
                      </span>
                      <h5 className="font-bold text-slate-900 text-sm">{mod.title}</h5>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 font-semibold">{mod.category} • {mod.estimatedHours}</span>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                    {mod.topics.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                        <span className="font-medium">{t}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-1.5 text-blue-800 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Deliverable: {mod.practicalProject}</span>
                    </div>
                    <div className="flex gap-1 flex-wrap font-mono text-[10px] text-slate-600">
                      {mod.keyTools.join(' • ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Note from PDF */}
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 leading-relaxed space-y-1">
            <span className="font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Official Program Note:
            </span>
            <p className="text-slate-600">
              The program develops practical skills and business capabilities. Income is not guaranteed; results depend on implementation, skill development, market demand and the student's ability to acquire clients or customers.
            </p>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50/90 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500 font-medium">
            Ready to master all 12 modules with personal mentorship?
          </span>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl cursor-pointer shadow-2xs"
            >
              Close
            </button>
            <button
              onClick={onEnroll}
              className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/20 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Join Our Free Session</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
