import React, { useState } from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  ChevronRight
} from 'lucide-react';
import { CAREER_OPPORTUNITIES } from '../data/courseData';

interface CareerOpportunitiesProps {
  onOpenEnrollment: () => void;
}

export const CareerOpportunities: React.FC<CareerOpportunitiesProps> = ({ onOpenEnrollment: _onOpenEnrollment }) => {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState<number>(0);
  const selectedRole = CAREER_OPPORTUNITIES[selectedRoleIndex];

  return (
    <section id="careers" className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 relative border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            Monetization & Career Tracks
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Potential Skill-Based Opportunities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Every module directly maps to in-demand client deliverables and online business models. Choose to freelance, work with international clients, or launch your own venture.
          </p>
        </div>

        {/* 10 Roles Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {CAREER_OPPORTUNITIES.map((role, idx) => {
            const isSelected = selectedRoleIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedRoleIndex(idx)}
                className={`p-4 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-white border-blue-600 shadow-md shadow-blue-500/10 ring-2 ring-blue-500/20'
                    : 'bg-white hover:bg-blue-50/40 border-slate-200 text-slate-900 shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                        role.demandLevel === 'Explosive'
                          ? 'bg-blue-100 text-blue-800 border border-blue-200'
                          : 'bg-blue-50 text-blue-700 border border-blue-100'
                      }`}
                    >
                      {role.demandLevel} Demand
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {role.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-1 font-medium">
                    {role.deliverable}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                  <span className="truncate max-w-[120px]">{role.category}</span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Role Deep-Dive Card */}
        <div className="mt-6 bg-white border border-blue-100 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  ROLE PROFILE
                </span>
                <span className="text-xs text-slate-500 font-semibold">{selectedRole.category}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {selectedRole.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {selectedRole.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                {selectedRole.coreSkills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3 text-blue-600" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-blue-50/70 rounded-xl p-4 border border-blue-200 shadow-2xs space-y-3">
              <div>
                <span className="text-[11px] font-mono font-bold text-slate-500 uppercase">Industry Demand</span>
                <p className="text-base font-extrabold text-blue-700">{selectedRole.demandLevel} Demand</p>
              </div>
              <div className="pt-2 border-t border-blue-200/60">
                <span className="text-[11px] font-mono font-bold text-slate-500 uppercase">Packaged Deliverable</span>
                <p className="text-xs font-semibold text-slate-900 mt-0.5">{selectedRole.deliverable}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
