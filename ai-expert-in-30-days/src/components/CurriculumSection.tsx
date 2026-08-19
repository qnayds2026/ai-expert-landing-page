import React, { useState } from 'react';
import { 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Wrench, 
  FolderGit2, 
  CheckCircle2, 
  Layers,
  ArrowUpRight,
  Flame,
  Award
} from 'lucide-react';
import { COURSE_MODULES } from '../data/courseData';
import { ModuleItem } from '../types';

interface CurriculumSectionProps {
  onOpenEnrollment: () => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({ onOpenEnrollment }) => {
  const [expandedModules, setExpandedModules] = useState<number[]>([1, 2, 6, 12]); // defaults open

  const toggleModule = (id: number) => {
    if (expandedModules.includes(id)) {
      setExpandedModules(expandedModules.filter((mId) => mId !== id));
    } else {
      setExpandedModules([...expandedModules, id]);
    }
  };

  return (
    <section id="curriculum" className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 relative border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            Complete 30-Day Syllabus
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Detailed Course Modules (12 Modules)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            From prompt engineering fundamentals to commercial AI media creation, live no-code website deployment, and full customer acquisition funnels.
          </p>
        </div>

        {/* Modules List */}
        <div className="mt-10 space-y-4">
          {COURSE_MODULES.map((module) => {
            const isExpanded = expandedModules.includes(module.id);
            return (
              <div
                key={module.id}
                id={`module-${module.id}`}
                className={`border rounded-2xl transition-all overflow-hidden ${
                  module.isCapstone
                    ? 'bg-gradient-to-b from-blue-50/60 to-white border-blue-300 shadow-md shadow-blue-500/10'
                    : isExpanded
                    ? 'bg-white border-blue-400 shadow-md shadow-blue-500/5'
                    : 'bg-white hover:bg-slate-50/80 border-slate-200 shadow-2xs'
                }`}
              >
                  {/* Module Accordion Header */}
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      {/* Module Number Box */}
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono font-bold text-sm shrink-0 ${
                          module.isCapstone
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                            : 'bg-blue-50 text-blue-700 border border-blue-100'
                        }`}
                      >
                        {module.number < 10 ? `0${module.number}` : module.number}
                      </div>

                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-slate-500">
                            MODULE {module.number}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                            {module.category}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono font-medium">
                            • {module.estimatedHours}
                          </span>
                          {module.isCapstone && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-300">
                              <Flame className="w-3 h-3 text-blue-600" />
                              CAPSTONE BUSINESS LAUNCH
                            </span>
                          )}
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                          {module.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="hidden md:flex items-center gap-1.5 text-xs text-blue-700 font-semibold bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                        <span>Hands-On Project</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-100 text-slate-600 border border-slate-200">
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-900" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-6 border-t border-slate-100 pt-5 space-y-5 animate-in fade-in duration-200 bg-white">
                      {module.description && (
                        <p className="text-sm text-slate-600 leading-relaxed font-normal">
                          {module.description}
                        </p>
                      )}

                      {/* Bullet Topics (From PDF) */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                          Topics Covered in this Module:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                          {module.topics.map((topic, tIdx) => (
                            <div
                              key={tIdx}
                              className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-normal"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                              <span className="font-medium">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Practical Project Card (From PDF) */}
                      <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-blue-600 text-white shrink-0 shadow-md shadow-blue-600/20">
                            <Award className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700">
                              PRACTICAL PROJECT DELIVERABLE
                            </span>
                            <p className="text-sm font-bold text-slate-900 mt-0.5">
                              {module.practicalProject}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-1.5 sm:self-center shrink-0">
                          {module.keyTools.map((tool, toolIdx) => (
                            <span
                              key={toolIdx}
                              className="text-[11px] px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-300 font-mono font-medium shadow-2xs"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-blue-200 text-slate-900 text-center space-y-4 shadow-lg shadow-blue-500/5">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Ready to Build All 12 Projects and Launch Your AI Business?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto font-normal">
            Get direct WhatsApp mentoring, live workshops, step-by-step video tutorials, and personal project critiques every single week.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href="https://chat.whatsapp.com/DKkUINCsIx9K7uKXDXwgJp?s=cl&p=i&ilr=0&amv=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Join Our Free Session</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
