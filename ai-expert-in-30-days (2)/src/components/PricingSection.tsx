import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Lock 
} from 'lucide-react';

interface PricingSectionProps {
  onOpenEnrollment?: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenEnrollment }) => {
  const WHATSAPP_SESSION_URL = "https://chat.whatsapp.com/DKkUINCsIx9K7uKXDXwgJp?s=cl&p=i&ilr=0&amv=1";

  const includedFeatures = [
    { title: '1-Hour Live Masterclass', desc: 'Interactive live intensive session with practical AI workflows and screen sharing' },
    { title: 'Live Q&A with Mentor', desc: 'Direct interactive question & answer session with Sawad KT' },
    { title: 'AI Prompt & Workflow Kit', desc: 'Curated library of plug-and-play AI prompt templates and automation blueprints' },
    { title: 'Private WhatsApp Community', desc: 'Immediate access to the official batch group for meeting links and resources' },
    { title: 'Session Recordings & Notes', desc: 'Access to key takeaways, session recap, and follow-up learning roadmap' }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 relative border-b border-blue-100 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-indigo-50/70 rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            1-Hour Live Masterclass Plan
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Join the 1-hour live practical masterclass for just ₹1. Gain actionable skills, live mentoring, and instant WhatsApp community access.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mt-10 sm:mt-12 bg-white rounded-3xl border-2 border-blue-500 shadow-xl shadow-blue-500/10 overflow-hidden relative">
          
          {/* Top Banner Ribbon */}
          <div className="bg-blue-600 py-2 text-center text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-200" />
            <span>Special Invitation • 1-Hour Live Masterclass Access</span>
            <Sparkles className="w-3.5 h-3.5 text-blue-200" />
          </div>

          <div className="p-6 sm:p-10 lg:p-12 space-y-8">
            
            {/* Price Display with Strikethrough (₹999 cut -> ₹1) */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  1-HOUR LIVE PASS
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  1-Hour Live AI Masterclass
                </h3>
              </div>

              <div className="text-left sm:text-right">
                <div className="flex items-center gap-2.5 sm:justify-end">
                  <span className="text-xl sm:text-2xl text-slate-400 font-bold line-through">
                    ₹999
                  </span>
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-600">
                    ₹1
                  </span>
                  <span className="bg-emerald-500 text-white font-black text-xs px-2.5 py-1 rounded-md uppercase tracking-wider shadow-xs">
                    99% OFF
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Just ₹1 token fee • Live 1-Hour Session
                </p>
              </div>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Everything Included In Your ₹1 Masterclass Pass:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {includedFeatures.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 hover:border-blue-300 transition-colors"
                  >
                    <div className="p-1 rounded-full bg-blue-100 text-blue-700 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900 leading-tight">
                        {item.title}
                      </h5>
                      <p className="text-xs text-slate-600 mt-0.5 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary CTA Button */}
            <div className="pt-2 space-y-3">
              <button
                type="button"
                onClick={onOpenEnrollment}
                className="action-btn w-full py-4 px-6 text-base sm:text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-2xl shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Join the Session – Just ₹1</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-medium pt-1">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-blue-600" />
                  Instant WhatsApp Group Invite
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  1-Hour Live Interactive Masterclass
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  100% Practical AI Workflows
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
