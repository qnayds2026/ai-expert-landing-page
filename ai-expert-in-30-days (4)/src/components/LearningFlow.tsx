import React, { useState } from 'react';
import { 
  PlayCircle, 
  Radio, 
  Cpu, 
  HelpCircle, 
  Compass, 
  TrendingUp, 
  Rocket,
  ArrowRight,
  Sparkles,
  CheckCircle
} from 'lucide-react';
import { LEARNING_FLOW_STEPS } from '../data/courseData';

const stepIconMap: Record<string, React.ElementType> = {
  PlayCircle,
  Radio,
  Cpu,
  HelpCircle,
  Compass,
  TrendingUp,
  Rocket
};

export const LearningFlow: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const activeStep = LEARNING_FLOW_STEPS[selectedStepIndex];
  const ActiveIcon = stepIconMap[activeStep.icon] || Sparkles;

  return (
    <section id="learning-flow" className="py-16 sm:py-20 lg:py-24 bg-white relative border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Proven Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            The 7-Step Learning Flow
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            A continuous feedback loop designed so you never get stuck in "tutorial paralysis". You practice, receive direct mentor corrections, and build actual commercial projects.
          </p>
        </div>

        {/* The Pipeline Ribbon */}
        <div className="mt-10 overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex items-center justify-between min-w-[760px] gap-2 p-2 bg-slate-50 border border-slate-200 rounded-2xl shadow-xs">
            {LEARNING_FLOW_STEPS.map((step, idx) => {
              const isSelected = selectedStepIndex === idx;
              const StepIcon = stepIconMap[step.icon] || Sparkles;
              return (
                <React.Fragment key={step.step}>
                  <button
                    onClick={() => setSelectedStepIndex(idx)}
                    className={`flex-1 flex flex-col items-center p-3 rounded-xl transition-all cursor-pointer text-center group relative ${
                      isSelected
                        ? 'bg-white border border-blue-600 shadow-md shadow-blue-500/10'
                        : 'hover:bg-white/80 border border-transparent text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center mb-1.5 transition-colors ${
                        isSelected
                          ? 'bg-blue-600 text-white font-bold'
                          : 'bg-white text-slate-600 group-hover:text-blue-600 border border-slate-200'
                      }`}
                    >
                      <StepIcon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[11px] font-mono tracking-wider font-bold uppercase ${
                        isSelected ? 'text-blue-700 font-extrabold' : 'text-slate-600'
                      }`}
                    >
                      {step.action}
                    </span>
                    <span className="text-[10px] text-slate-400 truncate max-w-[90px] font-medium">
                      Step 0{step.step}
                    </span>
                  </button>

                  {idx < LEARNING_FLOW_STEPS.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 shrink-0 hidden sm:block" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Selected Step Detailed Feature Card */}
        <div className="mt-6 bg-white border border-blue-100 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-md shadow-blue-500/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                <ActiveIcon className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    STEP {activeStep.step} OF 7
                  </span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">
                    {activeStep.subtitle}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {activeStep.action} — {activeStep.subtitle}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 pt-1 leading-relaxed max-w-2xl font-normal">
                  {activeStep.description}
                </p>
              </div>
            </div>

            {/* Quick Step Navigation Controls */}
            <div className="flex items-center gap-2 self-end md:self-center shrink-0">
              <button
                disabled={selectedStepIndex === 0}
                onClick={() => setSelectedStepIndex(Math.max(0, selectedStepIndex - 1))}
                className="px-3 py-2 text-xs font-semibold rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-2xs"
              >
                ← Previous
              </button>
              <button
                disabled={selectedStepIndex === LEARNING_FLOW_STEPS.length - 1}
                onClick={() => setSelectedStepIndex(Math.min(LEARNING_FLOW_STEPS.length - 1, selectedStepIndex + 1))}
                className="px-3 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-md shadow-blue-600/20"
              >
                Next Step →
              </button>
            </div>
          </div>

          {/* Outcome highlight for this step */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-2 text-blue-700">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span>Full WhatsApp community support active at this stage</span>
            </div>
            <span className="text-slate-400 italic">
              Goal: Continuous momentum from day 1 to day 30
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
