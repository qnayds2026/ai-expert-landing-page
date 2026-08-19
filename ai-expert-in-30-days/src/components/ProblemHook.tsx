import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Palette, 
  Video, 
  Globe, 
  TrendingUp, 
  Search, 
  Rocket, 
  HelpCircle,
  ArrowUpRight
} from 'lucide-react';

interface ProblemHookProps {
  onOpenEnrollment?: () => void;
}

export const ProblemHook: React.FC<ProblemHookProps> = ({ onOpenEnrollment }) => {
  const practicalSkills = [
    {
      title: 'Create professional content with AI',
      desc: 'High-converting copy, marketing articles, email sequences, and customer sales scripts in seconds.',
      icon: Sparkles,
    },
    {
      title: 'Design posters and advertisements',
      desc: 'Studio-quality social media posts, brand logos, commercial graphics, and advertising banners.',
      icon: Palette,
    },
    {
      title: 'Create AI videos and voiceovers',
      desc: 'Cinematic promotional reels, realistic presenter avatars, and multilingual voice narration without a studio.',
      icon: Video,
    },
    {
      title: 'Build websites without coding',
      desc: 'Modern, fully responsive business landing pages and lead funnels deployed live in minutes.',
      icon: Globe,
    },
    {
      title: 'Market businesses using AI',
      desc: 'Automate customer lead generation, outreach strategies, WhatsApp routing, and multi-channel campaigns.',
      icon: TrendingUp,
    },
    {
      title: 'Research products and business opportunities',
      desc: 'Identify trending market niches, uncover competitor weaknesses, and formulate high-margin offers.',
      icon: Search,
    },
    {
      title: 'Build your online presence',
      desc: 'Establish a dominant digital authority, expand your brand reach, and monetize modern AI skills.',
      icon: Rocket,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0F172B] relative border-b border-slate-800 overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-0 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hook Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
            The AI Shift Is Happening Now
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            AI is changing the way people work and do business. <br className="hidden sm:inline" />
            <span className="text-blue-400">Are you ready?</span>
          </h2>

          <div className="pt-2">
            <p className="text-base sm:text-lg md:text-xl font-medium text-slate-200 max-w-2xl mx-auto leading-relaxed">
              You don't need to be a programmer or AI expert to start using AI.
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed font-normal">
            With the right practical skills, you can learn to:
          </p>
        </div>

        {/* 7 Practical Skills Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {practicalSkills.map((skill, idx) => {
            const IconComponent = skill.icon;
            const isLast = idx === practicalSkills.length - 1;

            return (
              <div
                key={idx}
                className={`p-5 sm:p-6 rounded-2xl bg-[#1E293B]/70 hover:bg-[#1E293B] border border-slate-800 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-200 group flex flex-col justify-between ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-blue-400 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {skill.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-blue-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Practical skill included in 30 days</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-10 sm:mt-12 text-center">
          <a
            href="https://chat.whatsapp.com/DKkUINCsIx9K7uKXDXwgJp?s=cl&p=i&ilr=0&amv=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Learn These Skills in Our Free Session</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </a>
        </div>

      </div>
    </section>
  );
};
