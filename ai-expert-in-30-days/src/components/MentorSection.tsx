import React from 'react';
import { 
  Sparkles, 
  Award, 
  Users, 
  TrendingUp, 
  Brain, 
  Target, 
  Megaphone, 
  Zap, 
  Globe, 
  ShoppingBag,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import sawadImg from '../image_sawad.png';

interface MentorSectionProps {
  onOpenEnrollment?: () => void;
}

export const MentorSection: React.FC<MentorSectionProps> = () => {
  const WHATSAPP_SESSION_URL = "https://chat.whatsapp.com/DKkUINCsIx9K7uKXDXwgJp?s=cl&p=i&ilr=0&amv=1";

  const expertise = [
    { name: 'Artificial Intelligence', icon: Brain },
    { name: 'Meta Ads', icon: Target },
    { name: 'Digital Marketing', icon: Megaphone },
    { name: 'Business Automation', icon: Zap },
    { name: 'Web Development', icon: Globe },
    { name: 'Dropshipping', icon: ShoppingBag },
  ];

  return (
    <section id="mentor" className="py-16 sm:py-20 lg:py-24 bg-white relative border-b border-blue-100 overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            Meet Your Instructor
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Learn Directly From Industry Leadership
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Gain direct guidance from a practitioner with a proven track record in AI business growth and digital education.
          </p>
        </div>

        {/* Mentor Profile Card */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/40 rounded-3xl border border-blue-100/90 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-[320px] sm:max-w-[360px]">
                {/* Decorative border backdrop */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-sm opacity-20 group-hover:opacity-40 transition duration-300" />
                
                <div className="relative rounded-2xl overflow-hidden bg-white border-2 border-white shadow-xl">
                  <img
                    src={sawadImg}
                    alt="Sawad KT - Founder Qnayds LLP"
                    className="w-full h-auto object-cover max-h-[460px] mx-auto block transform group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-4 text-white text-center">
                    <p className="font-extrabold text-lg leading-tight text-white">Sawad KT</p>
                    <p className="text-xs text-blue-200 font-medium">Founder – Qnayds LLP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Header Info */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold shadow-xs">
                    Lead Mentor
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold">
                    Founder – Qnayds LLP
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Sawad KT
                </h3>

                <p className="text-base sm:text-lg font-bold text-blue-600">
                  AI Mentor • Digital Strategist
                </p>
              </div>

              {/* Key Achievements */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Achievements
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl bg-white border border-blue-100 shadow-2xs space-y-1.5 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 leading-snug">
                        1 Million+ Learners
                      </p>
                      <p className="text-xs text-slate-600 font-normal">
                        Educated over a million students and creators via social media content.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-blue-100 shadow-2xs space-y-1.5 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 leading-snug">
                        Multi-Business Scaling
                      </p>
                      <p className="text-xs text-slate-600 font-normal">
                        Helped multiple businesses scale revenue with AI & workflow automation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Areas of Expertise */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Areas of Expertise
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {expertise.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-xs font-semibold text-slate-800"
                      >
                        <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="truncate">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Direct CTA */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={WHATSAPP_SESSION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
                >
                  <span>Join Our Free Session with Sawad KT</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Direct Mentorship in WhatsApp Group</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
