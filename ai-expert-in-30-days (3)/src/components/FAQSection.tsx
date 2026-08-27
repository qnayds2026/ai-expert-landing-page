import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  Search,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { FAQS } from '../data/courseData';

interface FAQSectionProps {
  onOpenEnrollment: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenEnrollment }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>('All');

  const categories = ['All', 'Program Format', 'Requirements', 'Support & Mentoring', 'Career & Business'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = category === 'All' || faq.category === category;
    const matchesSearch = 
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-white relative border-b border-blue-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            Common Questions
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Everything you need to know about the 30-day program, live sessions, WhatsApp mentoring, and capstone project.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-2.5 rounded-xl border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  category === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-56">
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-3 pr-3 py-1 text-xs bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-2xs"
            />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-6 space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-xs">
              No questions found matching your search.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-xl transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-white border-blue-400 shadow-md shadow-blue-500/5'
                      : 'bg-white hover:bg-slate-50 border-slate-200 shadow-2xs'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-blue-600 font-bold uppercase">
                        {faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="p-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-slate-900" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 border-t border-slate-100 pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
