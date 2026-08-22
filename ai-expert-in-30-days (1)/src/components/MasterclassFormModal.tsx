import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Lock, 
  ShieldCheck,
  Globe,
  Briefcase,
  GraduationCap,
  Target,
  Wrench,
  HelpCircle,
  Clock,
  DollarSign,
  Award,
  Loader2
} from 'lucide-react';
import { MASTERCLASS_WHATSAPP_URL } from '../config/links';
import { GOOGLE_SHEET_WEBHOOK_URL } from '../config/sheetConfig';

interface MasterclassFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MasterclassFormModal: React.FC<MasterclassFormModalProps> = ({ 
  isOpen, 
  onClose 
}) => {
  // 1. Basic Details
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  // 2. Country & City
  const [countryCity, setCountryCity] = useState('Kenya — Nairobi');

  // 3. Occupation
  const [occupation, setOccupation] = useState('Student');
  const [occupationOther, setOccupationOther] = useState('');

  // 4. AI Knowledge
  const [aiKnowledge, setAiKnowledge] = useState('Beginner — I know almost nothing');

  // 5. Main Goal for AI
  const [aiGoal, setAiGoal] = useState('Freelancing');
  const [aiGoalOther, setAiGoalOther] = useState('');

  // 6. AI Tools currently used (multi-select / chips)
  const [currentTools, setCurrentTools] = useState<string[]>(['ChatGPT']);
  const [toolsOther, setToolsOther] = useState('');

  // 7. Biggest Challenge
  const [biggestChallenge, setBiggestChallenge] = useState('Don’t know where to start');

  // 8. Preferred Learning Mode
  const [learningPreference, setLearningPreference] = useState('Both live + recorded');

  // 9. Realistic Investment (Local currency / budget)
  const [investmentBudget, setInvestmentBudget] = useState('');

  // 10. High-Value Outcome
  const [valuableOutcome, setValuableOutcome] = useState('Get freelance clients');
  const [outcomeOther, setOutcomeOther] = useState('');

  // 11. Consideration for 30-Day AI Expert Program
  const [considerJoining, setConsiderJoining] = useState('Definitely yes');

  // Form State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleTool = (tool: string) => {
    if (tool === 'None') {
      setCurrentTools(['None']);
      return;
    }
    const filtered = currentTools.filter(t => t !== 'None');
    if (filtered.includes(tool)) {
      const next = filtered.filter(t => t !== tool);
      setCurrentTools(next.length === 0 ? ['None'] : next);
    } else {
      setCurrentTools([...filtered, tool]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    // Format whatsapp with leading single quote so Google Sheets treats it as plain text without #ERROR!
    const trimmedWhatsapp = whatsapp.trim();
    const formattedWhatsapp = trimmedWhatsapp ? (trimmedWhatsapp.startsWith("'") ? trimmedWhatsapp : `'${trimmedWhatsapp}`) : '';

    const submissionData = {
      timestamp: new Date().toLocaleString(),
      fullName: fullName.trim(),
      email: email.trim(),
      whatsapp: formattedWhatsapp,
      countryCity,
      occupation: occupation === 'Other' ? `Other: ${occupationOther}` : occupation,
      aiKnowledge,
      aiGoal: aiGoal === 'Other' ? `Other: ${aiGoalOther}` : aiGoal,
      currentTools: currentTools.includes('Other') ? [...currentTools.filter(t => t !== 'Other'), `Other: ${toolsOther}`].join(', ') : currentTools.join(', '),
      biggestChallenge,
      learningPreference,
      investmentBudget: investmentBudget.trim(),
      valuableOutcome: valuableOutcome === 'Other' ? `Other: ${outcomeOther}` : valuableOutcome,
      considerJoining,
      source: 'AI Masterclass Free Session Registration'
    };

    // 1. Send single atomic POST request to Google Sheet Webhook
    if (GOOGLE_SHEET_WEBHOOK_URL && GOOGLE_SHEET_WEBHOOK_URL.trim() !== '') {
      try {
        await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(submissionData),
        });
      } catch (err) {
        console.warn('Google Sheet submission warning:', err);
      }
    }

    // 2. Save to local storage for persistence backup
    try {
      const existing = JSON.parse(localStorage.getItem('qnayds_masterclass_leads') || '[]');
      existing.push(submissionData);
      localStorage.setItem('qnayds_masterclass_leads', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setIsSubmitting(false);
    setIsSubmitted(true);

    // 3. Auto-redirect to WhatsApp group after 1.5 seconds or on direct button click
    setTimeout(() => {
      window.open(MASTERCLASS_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    }, 1500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/70 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Modal Header Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center font-bold text-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                Join Free Live Session
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full transition-colors cursor-pointer shadow-xs"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Introduction Banner */}
              <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 text-slate-800 text-xs sm:text-sm space-y-1">
                <div className="flex items-center gap-2 font-bold text-blue-900">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Quick Survey & Free Seat Confirmation</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Fill in these quick details to help our mentors tailor the live training to your goals. After submitting, you will be redirected straight to the official <strong className="text-blue-700">WhatsApp Cohort Group</strong>.
                </p>
              </div>

              {/* 1. Basic Info Section */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5 border-b border-slate-100 pb-2">
                  <span>01.</span> Contact Information
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Kamau / Sarah Adebayo"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="youremail@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* WhatsApp Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      WhatsApp Number (with Country Code) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+254 / +234 / +27 / +233..."
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Country & City */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-blue-600" />
                  <span>Which country and city are you from? <span className="text-red-500">*</span></span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Kenya — Nairobi, Mombasa, etc.',
                    'Nigeria — Lagos, Abuja, Port Harcourt, etc.',
                    'South Africa — Johannesburg, Cape Town, Pretoria, Durban, etc.',
                    'Ghana — Accra, Kumasi, etc.'
                  ].map((option) => (
                    <label
                      key={option}
                      className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                        countryCity === option
                          ? 'bg-blue-50/80 border-blue-500 text-blue-900 font-bold shadow-xs'
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="countryCity"
                        checked={countryCity === option}
                        onChange={() => setCountryCity(option)}
                        className="mt-0.5 text-blue-600 focus:ring-blue-500"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 3. Occupation */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                  <span>What is your current occupation? <span className="text-red-500">*</span></span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'Student',
                    'Employee',
                    'Business owner',
                    'Freelancer',
                    'Teacher',
                    'Job seeker',
                    'Content creator',
                    'Other'
                  ].map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setOccupation(opt)}
                      className={`py-2 px-3 rounded-xl border text-xs text-center font-medium transition-all cursor-pointer ${
                        occupation === opt
                          ? 'bg-blue-600 text-white border-blue-600 font-bold shadow-xs'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {occupation === 'Other' && (
                  <input
                    type="text"
                    required
                    placeholder="Please specify your occupation..."
                    value={occupationOther}
                    onChange={(e) => setOccupationOther(e.target.value)}
                    className="w-full mt-2 px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                )}
              </div>

              {/* 4. AI Knowledge Rating */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                  <span>How would you rate your current AI knowledge? <span className="text-red-500">*</span></span>
                </label>
                <div className="space-y-2">
                  {[
                    'Beginner — I know almost nothing',
                    'Basic — I use ChatGPT occasionally',
                    'Intermediate — I use several AI tools',
                    'Advanced'
                  ].map((lvl) => (
                    <label
                      key={lvl}
                      className={`flex items-center gap-3 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                        aiKnowledge === lvl
                          ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold'
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="aiKnowledge"
                        checked={aiKnowledge === lvl}
                        onChange={() => setAiKnowledge(lvl)}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span>{lvl}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 5. Main Goal for AI */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-blue-600" />
                  <span>What do you mainly want to use AI for? <span className="text-red-500">*</span></span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Getting a job',
                    'Freelancing',
                    'Starting a business',
                    'Digital marketing',
                    'Content creation',
                    'Graphic/video design',
                    'Education/teaching',
                    'Automation',
                    'Other'
                  ].map((goal) => (
                    <button
                      type="button"
                      key={goal}
                      onClick={() => setAiGoal(goal)}
                      className={`py-2 px-2.5 rounded-xl border text-xs text-center transition-all cursor-pointer ${
                        aiGoal === goal
                          ? 'bg-blue-600 text-white border-blue-600 font-bold shadow-xs'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 font-medium'
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
                {aiGoal === 'Other' && (
                  <input
                    type="text"
                    required
                    placeholder="Specify what you want to use AI for..."
                    value={aiGoalOther}
                    onChange={(e) => setAiGoalOther(e.target.value)}
                    className="w-full mt-2 px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                )}
              </div>

              {/* 6. AI Tools currently used */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold text-slate-800 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-blue-600" />
                    <span>Which AI tools do you currently use? (Select all that apply)</span>
                  </span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'ChatGPT',
                    'Gemini',
                    'Claude',
                    'Canva AI',
                    'Midjourney / DALL-E',
                    'Other',
                    'None'
                  ].map((tool) => {
                    const isSelected = currentTools.includes(tool);
                    return (
                      <button
                        type="button"
                        key={tool}
                        onClick={() => toggleTool(tool)}
                        className={`py-1.5 px-3 rounded-full text-xs border transition-all cursor-pointer font-medium ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600 font-bold shadow-xs'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-300'
                        }`}
                      >
                        {tool}
                      </button>
                    );
                  })}
                </div>
                {currentTools.includes('Other') && (
                  <input
                    type="text"
                    placeholder="Other tools you use..."
                    value={toolsOther}
                    onChange={(e) => setToolsOther(e.target.value)}
                    className="w-full mt-1 px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                )}
              </div>

              {/* 7. Biggest Challenge */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                  <span>What is your biggest challenge in learning AI right now? <span className="text-red-500">*</span></span>
                </label>
                <div className="space-y-2">
                  {[
                    'Don’t know where to start',
                    'Too many tools',
                    'Lack of practical training',
                    'Cost of courses',
                    'Lack of time',
                    'Internet/data cost',
                    'Need someone to guide me'
                  ].map((ch) => (
                    <label
                      key={ch}
                      className={`flex items-center gap-3 p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                        biggestChallenge === ch
                          ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold'
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="biggestChallenge"
                        checked={biggestChallenge === ch}
                        onChange={() => setBiggestChallenge(ch)}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span>{ch}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 8. Preferred Learning Mode */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>How would you prefer to learn? <span className="text-red-500">*</span></span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Live classes',
                    'Recorded classes',
                    'Both live + recorded',
                    'WhatsApp mentoring',
                    'Self-learning'
                  ].map((mode) => (
                    <label
                      key={mode}
                      className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                        learningPreference === mode
                          ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold shadow-2xs'
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="learningPreference"
                        checked={learningPreference === mode}
                        onChange={() => setLearningPreference(mode)}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span>{mode}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 9. Realistic Investment Budget */}
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-blue-600" />
                  <span>How much would you realistically invest in a 30-day practical AI training program? <span className="text-red-500">*</span></span>
                </label>
                <p className="text-[11px] text-slate-500 font-medium">
                  Give local-currency ranges, not just USD. This is important for pricing research.
                </p>
                <input
                  type="text"
                  required
                  value={investmentBudget}
                  onChange={(e) => setInvestmentBudget(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                />
              </div>

              {/* 10. High Value Outcome */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-blue-600" />
                  <span>Which outcome would make you say the course was worth paying for? <span className="text-red-500">*</span></span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Get freelance clients',
                    'Create professional content',
                    'Get a job',
                    'Start an online business',
                    'Automate business tasks',
                    'Become an AI trainer',
                    'Build websites/apps using AI',
                    'Other'
                  ].map((out) => (
                    <label
                      key={out}
                      className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                        valuableOutcome === out
                          ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold'
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="valuableOutcome"
                        checked={valuableOutcome === out}
                        onChange={() => setValuableOutcome(out)}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span>{out}</span>
                    </label>
                  ))}
                </div>
                {valuableOutcome === 'Other' && (
                  <input
                    type="text"
                    required
                    placeholder="Specify what outcome you expect..."
                    value={outcomeOther}
                    onChange={(e) => setOutcomeOther(e.target.value)}
                    className="w-full mt-2 px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                )}
              </div>

              {/* 11. Consideration for 30-Day AI Expert Program */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold text-slate-800 leading-snug">
                  If a 30-day AI Expert program taught you practical skills and included LMS access, live sessions, recordings, certificate and WhatsApp mentoring, would you consider joining? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'Definitely yes',
                    'Maybe',
                    'Not interested',
                    'I need more information'
                  ].map((decision) => (
                    <button
                      type="button"
                      key={decision}
                      onClick={() => setConsiderJoining(decision)}
                      className={`py-2 px-2.5 rounded-xl border text-xs text-center transition-all cursor-pointer ${
                        considerJoining === decision
                          ? 'bg-emerald-600 text-white border-emerald-600 font-bold shadow-xs'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 font-medium'
                      }`}
                    >
                      {decision}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA Button */}
              <div className="pt-4 space-y-3 border-t border-slate-100">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-2xl shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Saving & Redirecting to WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit & Join Free Session on WhatsApp</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Free Live Registration • Direct WhatsApp Group Link</span>
                </div>
              </div>

            </form>
          ) : (
            /* Submission Success State */
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-2xl font-black text-slate-900">
                  Welcome aboard, {fullName || 'Student'}!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Your registration has been received. Redirecting to the official WhatsApp Group...
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Student Name:</span>
                  <span className="font-bold text-slate-900">{fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Email:</span>
                  <span className="font-bold text-slate-900">{email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">WhatsApp Number:</span>
                  <span className="font-bold text-blue-700">{whatsapp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Country / City:</span>
                  <span className="font-bold text-slate-800">{countryCity}</span>
                </div>
              </div>

              <div className="pt-2 space-y-2.5 max-w-md mx-auto">
                <a
                  href={MASTERCLASS_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Click here if not redirected automatically →</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-900 cursor-pointer"
                >
                  Close & Return to Page
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
