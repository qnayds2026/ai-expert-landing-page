import React from 'react';
import { 
  Calendar, 
  Layers, 
  Video, 
  Clock, 
  Sparkles, 
  BookOpen, 
  MessageSquare, 
  Trophy,
  Check,
  Zap,
  ShieldCheck,
  Target,
  ArrowRight
} from 'lucide-react';
import { PROGRAM_SPECS } from '../data/courseData';

const iconMap: Record<string, React.ElementType> = {
  Calendar,
  Layers,
  Video,
  Clock,
  Sparkles,
  BookOpen,
  MessageSquare,
  Trophy
};

interface ProgramOverviewProps {
  onOpenEnrollment?: () => void;
}

export const ProgramOverview: React.FC<ProgramOverviewProps> = ({ onOpenEnrollment }) => {
  return (
    <section id="overview" className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 relative border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            Program Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            How The 30-Day Training Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            A battle-tested hybrid format engineered to bridge the gap between passive video watching and real income-generating implementation.
          </p>
        </div>

        {/* 8 Core Specs Grid (from Page 1 Table) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PROGRAM_SPECS.map((spec, index) => {
            const IconComponent = iconMap[spec.iconName] || Sparkles;
            return (
              <div
                key={index}
                className="group relative bg-white hover:bg-blue-50/40 border border-blue-100 hover:border-blue-300 rounded-xl p-5 transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {spec.label}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center text-blue-600 group-hover:text-white border border-blue-100 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {spec.value}
                  </h3>
                </div>
                {spec.subtext && (
                  <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100 leading-normal font-medium">
                    {spec.subtext}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Deep Dive Breakdown Cards: Class & Learning Mode (from Page 1 Section 1) */}
        <div className="mt-12 bg-white border border-blue-100 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Section 1</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                1. Class & Learning Mode Breakdown
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 text-xs text-blue-700 font-semibold border border-blue-200 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Full Mentorship & Live Support</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* WhatsApp Group */}
            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 h-fit shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  WhatsApp-Based Learning & Mentoring
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Students join a dedicated private WhatsApp group for real-time instructions, doubts, practical work sharing, instant updates, and direct instructor mentoring.
                </p>
              </div>
            </div>

            {/* LMS Recorded Learning */}
            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 h-fit shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  LMS Recorded Learning Portal
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Access a structured repository of recorded learning resources. Includes carefully curated YouTube deep dives and proprietary Academy-created instructional content.
                </p>
              </div>
            </div>

            {/* Weekly Live Sessions */}
            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 h-fit shrink-0">
                <Video className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  Weekly Live Sessions (10 Total Hours)
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Two interactive live sessions are conducted every week (approx 2.5 hours per session, 10 hours total) for live tool teardowns, advanced prompt breakdowns, and Q&A.
                </p>
              </div>
            </div>

            {/* Practical Implementation */}
            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 h-fit shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  Practical Implementation & Real Assets
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  No dry theory exams. Students apply every concept directly by completing hands-on assignments and building real digital assets, landing pages, and a launched project.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Action Button */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex justify-center">
            <button
              type="button"
              onClick={onOpenEnrollment}
              className="action-btn inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              <span>Join Our Free Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
