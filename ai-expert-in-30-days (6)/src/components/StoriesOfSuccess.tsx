import React, { useState } from 'react';
import { 
  Play, 
  Share2, 
  Clock, 
  X, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import sawadAvatar from '../image_sawad.png';
import { getWhatsAppUrl } from '../config/links';

interface SuccessVideo {
  id: string;
  studentName: string;
  title: string;
  channelName: string;
  resultBadge: string;
  description: string;
  videoEmbedUrl?: string;
  thumbnailBg: string;
  studentRole: string;
  metric: string;
}

const SUCCESS_VIDEOS: SuccessVideo[] = [
  {
    id: 'vid-1',
    studentName: 'Shruti Chaudhary',
    title: 'Shruti Chaudhary Testimonial',
    channelName: 'Sawad KT',
    resultBadge: '₹1.2 Lakhs / Month',
    studentRole: 'AI Workflow Consultant',
    metric: 'Closed 4 Enterprise Clients',
    thumbnailBg: 'bg-gradient-to-tr from-purple-950 via-slate-900 to-red-950',
    description: 'How Shruti automated lead pipelines and closed ₹1.2 Lakhs in monthly retainers using AI workflows taught by Sawad KT.',
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'vid-2',
    studentName: 'Riddhi Deorah',
    title: 'Riddhi Deorah Testimonial',
    channelName: 'Sawad KT',
    resultBadge: '4.5x Agency Speed',
    studentRole: 'Content Agency Owner',
    metric: 'Saved 25+ Hours Weekly',
    thumbnailBg: 'bg-gradient-to-tr from-amber-950 via-slate-900 to-orange-950',
    description: 'Riddhi scaled her agency content creation by 4.5x without hiring extra editors using Midjourney, Claude & Automation.',
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'vid-3',
    studentName: 'Aparna Ganesh',
    title: 'Aparna Ganesh Testimonial',
    channelName: 'Sawad KT',
    resultBadge: '₹85,000 in 45 Days',
    studentRole: 'Freelance AI Specialist',
    metric: 'WhatsApp Chatbot Deals',
    thumbnailBg: 'bg-gradient-to-tr from-teal-950 via-slate-900 to-emerald-950',
    description: 'Aparna deployed WhatsApp AI booking bots for local clinics and real estate firms with zero prior coding experience.',
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'vid-4',
    studentName: 'Archit Mishra',
    title: 'Archit Mishra Testimonial',
    channelName: 'Sawad KT',
    resultBadge: '3.8x Meta Ads ROAS',
    studentRole: 'E-Commerce Brand Founder',
    metric: '20+ AI Creatives Daily',
    thumbnailBg: 'bg-gradient-to-tr from-blue-950 via-slate-900 to-indigo-950',
    description: 'Archit explains how AI-generated image models & copy frameworks cut ad creative costs to zero while boosting ad ROAS.',
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'vid-5',
    studentName: 'Mahesh Hasaramani',
    title: 'Mahesh Hasaramani Testimonial',
    channelName: 'Sawad KT',
    resultBadge: 'Non-Tech Builder',
    studentRole: 'Career Switcher',
    metric: '3 Web Portals Built',
    thumbnailBg: 'bg-gradient-to-tr from-indigo-950 via-slate-900 to-slate-950',
    description: 'Transitioned from non-tech background to delivering interactive AI web apps and client portals in under a month.',
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'vid-6',
    studentName: 'Sakshi Chandraakar',
    title: 'Sakshi Chandraakar Testimonial',
    channelName: 'Sawad KT',
    resultBadge: '₹40,000 / Month',
    studentRole: 'Student & AI Freelancer',
    metric: 'Part-Time Income Stream',
    thumbnailBg: 'bg-gradient-to-tr from-rose-950 via-slate-900 to-purple-950',
    description: 'Sakshi turned AI voiceovers and social media automation into a sustainable income stream alongside college studies.',
    videoEmbedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  }
];

export const StoriesOfSuccess: React.FC<{
  onOpenEnrollment?: () => void;
  currentPage?: 'masterclass' | 'money-making';
}> = ({
  onOpenEnrollment,
  currentPage = 'masterclass'
}) => {
  const [activeVideo, setActiveVideo] = useState<SuccessVideo | null>(null);
  const whatsappUrl = getWhatsAppUrl(currentPage);
  const isMoney = currentPage === 'money-making';

  return (
    <section 
      id="stories-of-success" 
      className="py-16 sm:py-20 lg:py-24 bg-[#050814] text-white relative border-y border-slate-800/80"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className={`absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl pointer-events-none ${
        isMoney ? 'bg-emerald-500/10' : 'bg-blue-500/10'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with exact header button color on "Stories of" + White "Success" + Underline Accent */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            <span className={isMoney ? 'text-emerald-500' : 'text-blue-500'}>Stories of</span> <span className="text-white">Success</span>
          </h2>
          {/* Underline Accent matching header button color */}
          <div className={`w-24 h-1 mx-auto mt-3 rounded-full shadow-sm ${
            isMoney ? 'bg-emerald-500 shadow-emerald-500/50' : 'bg-blue-600 shadow-blue-500/50'
          }`} />
        </div>

        {/* 2 Rows x 3 Columns YouTube-Style Testimonial Cards Grid (Exact 6 Videos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SUCCESS_VIDEOS.map((video) => (
            <div
              key={video.id}
              className="bg-[#0c1429]/90 rounded-2xl sm:rounded-3xl p-3 sm:p-3.5 border border-blue-950/80 hover:border-blue-700/60 shadow-2xl transition-all duration-300 group hover:-translate-y-1"
            >
              {/* 16:9 Video Player Screen Container */}
              <div 
                onClick={() => setActiveVideo(video)}
                className={`relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer ${video.thumbnailBg} border border-slate-800/80 shadow-inner flex flex-col justify-between p-3.5 sm:p-4 select-none group/player`}
              >
                {/* Background Studio Lighting & Texture Simulation */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/80 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />

                {/* Top Left: Channel Avatar + Title + Subtitle */}
                <div className="relative z-10 flex items-center gap-2.5 max-w-[85%]">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-white/40 shadow-md shrink-0 bg-slate-800">
                    <img 
                      src={sawadAvatar} 
                      alt="Sawad KT" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-white truncate leading-tight drop-shadow-md">
                      {video.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-300 truncate drop-shadow-xs font-normal">
                      {video.channelName}
                    </p>
                  </div>
                </div>

                {/* Center: Iconic YouTube Red Play Button */}
                <div className="relative z-10 self-center my-auto transform group-hover/player:scale-110 transition-transform duration-200">
                  <div className="w-13 h-9 sm:w-16 sm:h-11 bg-[#FF0000] rounded-xl flex items-center justify-center shadow-2xl shadow-black/80 group-hover/player:bg-[#e60000]">
                    {/* White Play Triangle */}
                    <div className="w-0 h-0 border-y-[6px] sm:border-y-[7px] border-y-transparent border-l-[11px] sm:border-l-[13px] border-l-white ml-0.5" />
                  </div>
                </div>

                {/* Bottom Bar: Action Icons (Share + Clock) & "Watch on YouTube" Pill */}
                <div className="relative z-10 flex items-center justify-between pt-2">
                  {/* Bottom Left Icons */}
                  <div className="flex items-center gap-2 text-white/90">
                    <button 
                      type="button" 
                      className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                      title="Share"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (navigator.share) {
                          navigator.share({ title: video.title, url: window.location.href });
                        }
                      }}
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button 
                      type="button" 
                      className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                      title="Watch Later"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Clock className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Bottom Right Pill: "Watch on YouTube" */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 hover:bg-black/90 text-white text-[11px] sm:text-xs font-semibold backdrop-blur-md border border-white/10 shadow-md">
                    <span>Watch on</span>
                    <div className="inline-flex items-center gap-0.5 text-white font-bold tracking-tighter">
                      <span className="w-4 h-3 bg-[#FF0000] rounded-xs flex items-center justify-center">
                        <span className="w-0 h-0 border-y-[2.5px] border-y-transparent border-l-[4.5px] border-l-white ml-0.5" />
                      </span>
                      <span className="ml-1 text-[11px]">YouTube</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Brief outcome caption below card */}
              <div className="px-1.5 pt-3 pb-1 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300 truncate max-w-[65%]">
                  {video.studentRole}
                </span>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-800/40 shrink-0">
                  {video.resultBadge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to join the masterclass */}
        <div className="mt-14 max-w-2xl mx-auto text-center space-y-4">
          <p className="text-sm sm:text-base text-slate-300 font-medium">
            Want to build real-world AI skills and launch your own success story?
          </p>
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onOpenEnrollment}
              className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-black text-sm sm:text-base shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer ${
                isMoney
                  ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/25'
                  : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/25'
              }`}
            >
              <span>Join Free Live Session</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0c1429] rounded-2xl sm:rounded-3xl border border-slate-700 w-full max-w-3xl overflow-hidden shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-white/30 shrink-0">
                  <img src={sawadAvatar} alt="Sawad KT" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {activeVideo.title}
                  </h3>
                  <p className={`text-xs font-semibold ${
                    isMoney ? 'text-emerald-400' : 'text-blue-400'
                  }`}>
                    {activeVideo.resultBadge} • {activeVideo.studentRole}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveVideo(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              {activeVideo.videoEmbedUrl ? (
                <iframe
                  src={`${activeVideo.videoEmbedUrl}?autoplay=1`}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {activeVideo.title}
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md">
                    {activeVideo.description}
                  </p>
                </div>
              )}
            </div>

            {/* Modal Bottom CTA */}
            <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Case Study from Sawad KT's AI Mentorship</span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setActiveVideo(null);
                  if (onOpenEnrollment) onOpenEnrollment();
                }}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs text-white transition-colors cursor-pointer ${
                  isMoney
                    ? 'bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/30'
                    : 'bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/30'
                }`}
              >
                <span>Learn These AI Skills Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
