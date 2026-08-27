import React from 'react';
import { 
  Sparkles, 
  Wrench, 
  Bot, 
  Palette, 
  Video, 
  Mic, 
  Globe, 
  MessageSquare, 
  Search,
  Zap
} from 'lucide-react';

export const ToolsShowcase: React.FC = () => {
  const tools = [
    {
      name: 'ChatGPT & Claude 3.5',
      category: 'Prompt Engineering & Copy',
      icon: Bot,
      modules: 'Module 1, 7, 9, 10',
      badge: 'Core Intelligence'
    },
    {
      name: 'Midjourney v6 & Firefly',
      category: 'Commercial Poster & Graphic Design',
      icon: Palette,
      modules: 'Module 2, 12',
      badge: 'Visual Engine'
    },
    {
      name: 'Kling AI & Runway Gen-3',
      category: 'AI Cinematic Video & Motion',
      icon: Video,
      modules: 'Module 3, 12',
      badge: 'Video Production'
    },
    {
      name: 'HeyGen & D-ID',
      category: 'Photorealistic AI Presenter Avatars',
      icon: Sparkles,
      modules: 'Module 4, 12',
      badge: 'Digital Humans'
    },
    {
      name: 'ElevenLabs VoiceLab',
      category: 'Studio Voiceover & 30+ Languages',
      icon: Mic,
      modules: 'Module 5, 12',
      badge: 'Audio AI'
    },
    {
      name: 'Framer AI & v0',
      category: 'No-Code AI Website Deployment',
      icon: Globe,
      modules: 'Module 6, 12',
      badge: 'Web Creation'
    },
    {
      name: 'Perplexity & DeepSeek',
      category: 'Market & Winning Product Research',
      icon: Search,
      modules: 'Module 8, 9',
      badge: 'Market Intel'
    },
    {
      name: 'WhatsApp Business CRM',
      category: 'Lead Routing, Catalogs & Sales',
      icon: MessageSquare,
      modules: 'Module 11, 12',
      badge: 'Revenue Channel'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 relative border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5 text-blue-600" />
            Industry Toolstack
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Master the World's Best AI Engines Hands-On
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            We teach you how to chain these state-of-the-art tools together to generate real commercial deliverables without high software overhead.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((t, idx) => {
            const IconComp = t.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white hover:bg-blue-50/30 border border-slate-200 hover:border-blue-300 transition-all shadow-2xs group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                    {t.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {t.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-normal font-medium">
                  {t.category}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-mono font-medium">
                  <span>Covered in</span>
                  <span className="text-blue-600 font-bold">{t.modules}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
