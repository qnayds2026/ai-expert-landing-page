import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Lock, 
  Calendar, 
  Users, 
  ShieldCheck,
  Send
} from 'lucide-react';

import { MASTERCLASS_WHATSAPP_URL } from '../config/links';
import { GOOGLE_SHEET_WEBHOOK_URL } from '../config/sheetConfig';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ 
  isOpen, 
  onClose, 
  selectedTier = 'Complete 30-Day Cohort (FREE)' 
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [goal, setGoal] = useState('Freelance AI Services');
  const [experience, setExperience] = useState('Complete Beginner');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const trimmedWhatsapp = whatsapp.trim();
    const formattedWhatsapp = trimmedWhatsapp ? (trimmedWhatsapp.startsWith("'") ? trimmedWhatsapp : `'${trimmedWhatsapp}`) : '';

    const submissionData = {
      timestamp: new Date().toLocaleString(),
      fullName: name.trim(),
      email: email.trim(),
      whatsapp: formattedWhatsapp,
      countryCity: 'Online / Remote',
      occupation: 'Student / Professional',
      aiKnowledge: experience,
      aiGoal: goal,
      currentTools: 'ChatGPT',
      biggestChallenge: 'Finding structured guidance',
      learningPreference: 'Live Interactive Sessions',
      investmentBudget: selectedTier,
      valuableOutcome: goal,
      considerJoining: 'Yes - Enrolled',
      source: `Enrollment Modal (${selectedTier})`
    };

    if (GOOGLE_SHEET_WEBHOOK_URL && GOOGLE_SHEET_WEBHOOK_URL.trim() !== '') {
      try {
        await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(submissionData),
        });
      } catch (err) {
        console.warn('Google Sheet submission warning:', err);
      }
    }

    setLoading(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full transition-colors cursor-pointer shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="space-y-1 mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-bold">
                <Sparkles className="w-3 h-3 text-blue-600" />
                <span>Free 90-Min Live AI Training</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Join Our Free Session
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Live Interactive Teardown: <strong className="text-blue-700">Practical AI & Digital Business in 30 Days</strong>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  WhatsApp Number (with Country Code) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                />
                <p className="text-[10px] text-slate-500 mt-1 font-medium">Used for private cohort WhatsApp group & daily mentoring access.</p>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Primary Goal
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-2.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 font-medium focus:outline-none focus:border-blue-500"
                  >
                    <option value="Freelance AI Services">Freelance AI Services</option>
                    <option value="Launch Online Business">Launch Online Business</option>
                    <option value="Career & Work Productivity">Career Productivity</option>
                    <option value="Content Creation & Media">Content & Media</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    AI Experience
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full px-2.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 font-medium focus:outline-none focus:border-blue-500"
                  >
                    <option value="Complete Beginner">Complete Beginner</option>
                    <option value="Occasional ChatGPT User">Used ChatGPT A Little</option>
                    <option value="Intermediate">Intermediate Marketer</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Reserving Your Seat...</span>
                  ) : (
                    <>
                      <span>Join Our Free Session</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1 font-medium">
                <Lock className="w-3 h-3 text-blue-600" />
                <span>100% Free Access • Instant WhatsApp Live Link</span>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Success State */
          <div className="text-center py-4 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9 text-blue-600" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-2xl font-black text-slate-900">
                You're In, {name || 'Student'}!
              </h3>
              <p className="text-sm text-slate-600">
                Your seat for the <strong className="text-slate-900">Free AI Live Session</strong> is reserved.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Student Name:</span>
                <span className="font-bold text-slate-900">{name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Email:</span>
                <span className="font-bold text-slate-900">{email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">WhatsApp Mentoring:</span>
                <span className="font-bold text-blue-700">{whatsapp}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Next Live Session:</span>
                <span className="font-bold text-blue-600">Orientation Saturday 6:00 PM</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href="https://chat.whatsapp.com/DKkUINCsIx9K7uKXDXwgJp?s=cl&p=i&ilr=0&amv=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Join Official WhatsApp Group</span>
              </a>

              <button
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
  );
};
