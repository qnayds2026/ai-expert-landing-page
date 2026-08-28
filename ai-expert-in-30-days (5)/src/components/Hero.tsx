import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  MessageSquare, 
  Award
} from 'lucide-react';
import africaImg from '../africa.jpg';

interface HeroProps {
  onOpenEnrollment: () => void;
  onOpenSyllabus?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrollment }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-blue-50/50 via-white to-white border-b border-blue-100">
      {/* Subtle ambient blue light effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-400/10 via-sky-300/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-300/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center max-w-3xl mx-auto">
          {/* Top Category Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 shadow-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span>Practical AI Skills, Digital Business & Income-Ready Program</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            Become an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Expert</span> in 30 Days.
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal mx-auto leading-relaxed">
            Stop watching random tutorials. Learn practical AI skills to create professional content, graphics, videos, AI avatars, websites, and digital marketing campaigns — while building your own AI-powered digital project with <strong className="text-slate-900 font-semibold">live training</strong>, <strong className="text-slate-900 font-semibold">WhatsApp mentoring</strong>, and <strong className="text-slate-900 font-semibold">real hands-on practice</strong>.
          </p>

          {/* Quick Proof Matrix Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-white border border-blue-100 hover:border-blue-300 rounded-xl p-3.5 text-center shadow-xs transition-colors">
              <div className="flex items-center justify-center gap-1.5 text-blue-600 font-bold text-base">
                <Calendar className="w-4 h-4" />
                <span>30 Days</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Structured Daily Track</p>
            </div>

            <div className="bg-white border border-blue-100 hover:border-blue-300 rounded-xl p-3.5 text-center shadow-xs transition-colors">
              <div className="flex items-center justify-center gap-1.5 text-blue-600 font-bold text-base">
                <Clock className="w-4 h-4" />
                <span>10 Hours</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Live Interactive Training</p>
            </div>

            <div className="bg-white border border-blue-100 hover:border-blue-300 rounded-xl p-3.5 text-center shadow-xs transition-colors">
              <div className="flex items-center justify-center gap-1.5 text-blue-600 font-bold text-base">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Mentoring & Doubt Clearance</p>
            </div>

            <div className="bg-white border border-blue-100 hover:border-blue-300 rounded-xl p-3.5 text-center shadow-xs transition-colors">
              <div className="flex items-center justify-center gap-1.5 text-blue-600 font-bold text-base">
                <Award className="w-4 h-4" />
                <span>12 Modules</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Real Portfolio Projects</p>
            </div>
          </div>

          {/* Africa Image Showcase */}
          <div className="pt-2 max-w-xl sm:max-w-2xl mx-auto w-full space-y-4">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-blue-200/80 shadow-lg bg-white">
              <img
                src={africaImg}
                alt="12 Modules & Program Overview"
                className="w-full h-auto object-contain mx-auto block max-h-[380px]"
              />
            </div>
            
            {/* Heading after image */}
            <div className="text-center pt-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Be an AI Expert
              </h2>
            </div>
          </div>

          {/* Hero Section CTA Card Model */}
          <div className="pt-4 max-w-xl mx-auto w-full">
            <div className="relative bg-white border border-blue-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-blue-500/10 text-center space-y-4 overflow-hidden">
              
              {/* Top-Right Badge: LIMITED BATCH OFFER */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-[#FF6B00] to-[#FF8800] text-black font-black text-[10px] sm:text-xs px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-bl-xl tracking-wider uppercase flex items-center gap-1 shadow-xs">
                <span>🔥</span>
                <span>LIMITED BATCH OFFER</span>
              </div>

              {/* Pricing Row: $2  $99 (cut)  98% OFF */}
              <div className="flex items-center justify-center gap-2.5 sm:gap-3 pt-2">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  $2
                </span>
                <span className="text-xl sm:text-2xl font-bold text-slate-400 line-through">
                  $99
                </span>
                <span className="bg-emerald-500 text-white font-black text-xs px-2.5 py-1 rounded-md uppercase tracking-wider shadow-xs">
                  98% OFF
                </span>
              </div>

              {/* Subtitle / Delivery Info */}
              <p className="text-xs sm:text-sm font-medium text-slate-600">
                1-Hour Live Masterclass • Q&A Session with Mentor • Instant WhatsApp Community Access
              </p>

              {/* Large CTA Button */}
              <div className="pt-1">
                <button
                  type="button"
                  id="hero-enroll-primary-btn"
                  onClick={onOpenEnrollment}
                  className="action-btn w-full py-3.5 sm:py-4 px-6 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-2xl shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span>Join the Session – Just $2</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Bottom Trust Line */}
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-600 pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>1-Hour Live Masterclass • WhatsApp Mentoring & Prompt Kit</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
