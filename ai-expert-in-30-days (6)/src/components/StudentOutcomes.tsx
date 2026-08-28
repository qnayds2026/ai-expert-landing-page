import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Flame, 
  BadgeCheck, 
  Search, 
  Check, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { STUDENT_OUTCOMES } from '../data/courseData';

interface StudentOutcomesProps {
  onOpenEnrollment?: () => void;
}

export const StudentOutcomes: React.FC<StudentOutcomesProps> = ({ onOpenEnrollment }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const tags = ['All', 'Core Skill', 'Creative', 'Design', 'Video', 'Audio', 'Tech', 'Marketing', 'Business', 'Sales', 'Operations'];

  const filtered = STUDENT_OUTCOMES.filter(outcome => {
    const matchesTag = selectedTag === 'All' || outcome.category === selectedTag;
    const matchesSearch = outcome.title.toLowerCase().includes(search.toLowerCase()) || outcome.tag.toLowerCase().includes(search.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section id="outcomes" className="py-16 sm:py-20 lg:py-24 bg-white relative border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <BadgeCheck className="w-3.5 h-3.5 text-blue-600" />
            Verified Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Concrete Student Outcomes (15 Core Competencies)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            By the 30th day, you will have built verified hands-on proficiency across all 15 operational skills required to launch AI services and digital businesses.
          </p>
        </div>

        {/* Filter bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-2.5 rounded-xl border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none pb-1 sm:pb-0">
            {tags.slice(0, 7).map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-56">
            <input
              type="text"
              placeholder="Search 15 outcomes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-3 pr-3 py-1 text-xs bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-2xs"
            />
          </div>
        </div>

        {/* 15 Outcomes Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {filtered.map((outcome) => (
            <div
              key={outcome.id}
              className="p-4 rounded-xl bg-white hover:bg-blue-50/40 border border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between group shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                    #{outcome.id < 10 ? `0${outcome.id}` : outcome.id}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                    {outcome.category}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {outcome.title}
                </h3>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>{outcome.tag}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 opacity-80 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>

        {/* Student Mastery Bar */}
        <div className="mt-8 p-4 rounded-xl bg-blue-50 border border-blue-200 text-center text-xs text-blue-800 font-medium flex items-center justify-center gap-2">
          <TrendingUp className="w-4 h-4 text-blue-600" />
          <span>Every outcome is validated through practical homework review in the private WhatsApp group.</span>
        </div>

        {/* CTA Action Button */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={onOpenEnrollment}
            className="action-btn inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            <span>Join the Session – Just ₹1</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
