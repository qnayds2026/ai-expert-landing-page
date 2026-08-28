import React from 'react';
import { 
  Rocket, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Globe, 
  Video, 
  MessageSquare, 
  BarChart3, 
  ShieldCheck,
  Zap,
  Target
} from 'lucide-react';

interface FinalProjectSpotlightProps {
  onOpenEnrollment: () => void;
}

export const FinalProjectSpotlight: React.FC<FinalProjectSpotlightProps> = ({ onOpenEnrollment }) => {
  const capstoneChecklist = [
    { title: 'Select a Focused Business Niche', desc: 'Identify high-demand product or service angles.' },
    { title: 'Research Customers & Competitors', desc: 'AI-driven market gap analysis & audience psychographics.' },
    { title: 'Create Visual Identity & Branding', desc: 'Logo, typography, color scheme, and brand kit.' },
    { title: 'Generate Marketing Posters & Creatives', desc: 'High-converting ad banners, social carousels & flyers.' },
    { title: 'Produce AI Video, Avatar & Voiceover', desc: 'Photorealistic spokesperson promo & reels without a camera.' },
    { title: 'Build & Publish Live Website (No Code)', desc: 'Responsive landing page with lead capture form & SEO.' },
    { title: 'Deploy 30-Day Digital Marketing Strategy', desc: 'Content calendar, viral hooks, and ad campaign structure.' },
    { title: 'Structure Commercial Offer or Product', desc: 'High-margin digital asset, service retainer, or dropship pack.' },
    { title: 'Formulate Customer Acquisition Strategy', desc: 'Outreach scripts, lead magnets, and conversion funnels.' },
    { title: 'Set Up Automated WhatsApp Business CRM', desc: 'Catalogs, quick replies, routing labels & closing flow.' }
  ];

  return (
    <section id="capstone" className="py-16 sm:py-20 lg:py-24 bg-white relative border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Context & Value */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Rocket className="w-3.5 h-3.5 text-blue-600" />
              Module 12 Capstone Milestone
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Graduate with a Real, Live <span className="text-blue-600">AI-Powered Business</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Most courses hand you a paper certificate. In <strong className="text-slate-900">AI Expert in 30 Days</strong>, you finish the 30th day with a complete, fully launched digital business or client-ready service offering built by combining every tool mastered.
            </p>

            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2 shadow-2xs">
              <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wide">
                Final Program Outcome:
              </span>
              <p className="text-sm font-semibold text-slate-900">
                "Combine the skills learned throughout the program into one practical AI-powered business/project."
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://chat.whatsapp.com/DKkUINCsIx9K7uKXDXwgJp?s=cl&p=i&ilr=0&amv=1"
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn inline-flex items-center gap-2.5 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/25 cursor-pointer transition-all transform hover:-translate-y-0.5"
              >
                <span>Join Our Free Session</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: The 10 Capstone Building Blocks */}
          <div className="lg:col-span-6 bg-slate-50 border border-blue-100 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600" />
                The 10 Capstone Milestones
              </h3>
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">100% Practical</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {capstoneChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 transition-all shadow-2xs group"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-mono font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 pl-7 leading-normal font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 text-blue-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                Reviewed 1-on-1 by Mentors in WhatsApp
              </span>
              <span className="font-mono text-slate-500 font-semibold">Day 29 - 30</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
