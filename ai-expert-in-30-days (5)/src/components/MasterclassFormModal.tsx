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
  Loader2,
  CreditCard,
  ExternalLink,
  Smartphone
} from 'lucide-react';
import { MASTERCLASS_WHATSAPP_URL } from '../config/links';
import { 
  GOOGLE_SHEET_WEBHOOK_URL,
  RAZORPAY_PAYMENT_URL,
  RAZORPAY_KEY_ID,
  PAYMENT_AMOUNT_USD,
  PAYMENT_AMOUNT_INR,
  ORIGINAL_PRICE_USD,
  DISCOUNT_PERCENT
} from '../config/sheetConfig';

declare global {
  interface Window {
    Razorpay?: any;
  }
}

interface MasterclassFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ModalStep = 'form' | 'payment' | 'completed';

export const MasterclassFormModal: React.FC<MasterclassFormModalProps> = ({ 
  isOpen, 
  onClose 
}) => {
  // Modal Step State: 'form' -> 'payment' -> 'completed'
  const [currentStep, setCurrentStep] = useState<ModalStep>('form');
  const [isPaymentVerifying, setIsPaymentVerifying] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'razorpay'>('razorpay');
  const [paymentInitiated, setPaymentInitiated] = useState(false);
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [upiId, setUpiId] = useState('');

  // 1. Basic Details
  const [fullName, setFullName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  // 2. Country & City
  const [countryCity, setCountryCity] = useState('Kenya — Nairobi');

  // 3. Occupation
  const [occupation, setOccupation] = useState('Student');
  const [occupationOther, setOccupationOther] = useState('');

  // Form State
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

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
      whatsapp: formattedWhatsapp,
      countryCity,
      occupation: occupation === 'Other' ? `Other: ${occupationOther}` : occupation,
      source: 'AI Masterclass 1-Hour Live Pass ($2)',
      paymentStatus: 'Initiated ($2)'
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
    // Transition to Razorpay payment step!
    setCurrentStep('payment');
  };

  const handleProcessPayment = (method: 'card' | 'upi' | 'razorpay') => {
    setIsPaymentVerifying(true);
    setPaymentInitiated(true);

    // If Razorpay SDK is loaded and we have a valid key (test or live)
    if (typeof window !== 'undefined' && window.Razorpay && RAZORPAY_KEY_ID && !RAZORPAY_KEY_ID.includes('demo123456789')) {
      try {
        const options = {
          key: RAZORPAY_KEY_ID,
          amount: PAYMENT_AMOUNT_INR * 100, // in paise (e.g. ₹169 = ~$2)
          currency: 'INR',
          name: 'Practical AI Masterclass',
          description: '1-Hour Live Masterclass Access Pass ($2)',
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=128&auto=format&fit=crop&q=80',
          prefill: {
            name: fullName || '',
            contact: whatsapp ? whatsapp.replace(/\D/g, '') : '',
          },
          theme: {
            color: '#2563eb'
          },
          handler: function (_response: any) {
            // Payment success callback
            try {
              const existing = JSON.parse(localStorage.getItem('qnayds_masterclass_leads') || '[]');
              if (existing.length > 0) {
                existing[existing.length - 1].paymentStatus = `Paid / Confirmed ($2 via Razorpay - ${_response.razorpay_payment_id || 'Success'})`;
                localStorage.setItem('qnayds_masterclass_leads', JSON.stringify(existing));
              }
              // Send payment confirmation update to Google Sheet
              if (GOOGLE_SHEET_WEBHOOK_URL) {
                const updatePayload = {
                  timestamp: new Date().toLocaleString(),
                  fullName: fullName.trim(),
                  whatsapp: whatsapp.trim(),
                  countryCity,
                  occupation: occupation === 'Other' ? `Other: ${occupationOther}` : occupation,
                  source: 'AI Masterclass 1-Hour Live Pass ($2)',
                  paymentStatus: `Paid ($2 via Razorpay: ${_response.razorpay_payment_id || 'Success'})`
                };
                fetch(GOOGLE_SHEET_WEBHOOK_URL, {
                  method: 'POST',
                  mode: 'no-cors',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(updatePayload)
                }).catch(() => {});
              }
            } catch {
              // ignore
            }
            setIsPaymentVerifying(false);
            setCurrentStep('completed');
          },
          modal: {
            ondismiss: function () {
              setIsPaymentVerifying(false);
            }
          }
        };

        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response: any) {
          console.error('Payment Failed:', response.error);
          setIsPaymentVerifying(false);
        });
        rzp.open();
        return;
      } catch (err) {
        console.warn('Razorpay SDK modal error, fallback to redirect:', err);
      }
    }

    if (method === 'razorpay' && RAZORPAY_PAYMENT_URL && !RAZORPAY_PAYMENT_URL.includes('ai-masterclass-2usd')) {
      window.open(RAZORPAY_PAYMENT_URL, '_blank', 'noopener,noreferrer');
      setIsPaymentVerifying(false);
    }
  };

  const handleRazorpayPayment = () => {
    handleProcessPayment('razorpay');
  };

  const handleJoinWhatsApp = () => {
    window.open(MASTERCLASS_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    setTimeout(() => {
      handleReset();
    }, 1200);
  };

  const handleReset = () => {
    setCurrentStep('form');
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
                {currentStep === 'form' && `Join 1-Hour Live Masterclass ($${PAYMENT_AMOUNT_USD})`}
                {currentStep === 'payment' && `Step 2: Payment ($${PAYMENT_AMOUNT_USD})`}
                {currentStep === 'completed' && 'Registration Confirmed!'}
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
          {currentStep === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Introduction Banner */}
              <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 text-slate-800 text-xs sm:text-sm space-y-1">
                <div className="flex items-center gap-2 font-bold text-blue-900">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>1-Hour Live Masterclass (${PAYMENT_AMOUNT_USD}) Registration</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Fill in your details below to register for the 1-Hour Live AI Masterclass. After submitting, you will proceed to complete the ${PAYMENT_AMOUNT_USD} session fee and join the official <strong className="text-blue-700">WhatsApp Cohort Group</strong>.
                </p>
              </div>

              {/* 1. Basic Info Section */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5 border-b border-slate-100 pb-2">
                  <span>01.</span> Contact Information
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
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
                      <span>Saving details & proceeding to payment...</span>
                    </>
                  ) : (
                    <>
                      <span>Proceed to Payment (${PAYMENT_AMOUNT_USD})</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Step 1 of 2: Submit Details ➔ Secure Razorpay Checkout</span>
                </div>
              </div>

            </form>
          )}

          {/* STEP 2: RAZORPAY & INSTANT PAYMENT SCREEN */}
          {currentStep === 'payment' && (
            <div className="py-2 space-y-5 animate-in zoom-in-95 duration-200">
              
              <div className="text-center space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold rounded-full">
                  <CreditCard className="w-3.5 h-3.5 text-amber-600" />
                  <span>Step 2 of 2: Complete Session Fee</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Pay ${PAYMENT_AMOUNT_USD} to Secure Your Seat
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                  Hi <strong className="text-slate-900">{fullName || 'Student'}</strong>, choose your preferred payment option below to complete the registration.
                </p>
              </div>

              {/* High-conversion Pass Summary Card */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white p-4 sm:p-5 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-blue-300 font-bold block mb-0.5">
                      1-HOUR LIVE MASTERCLASS PASS
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
                      Practical AI Masterclass with Sawad KT
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 flex items-center gap-2">
                      <span>• Live Zoom Session</span>
                      <span>• WhatsApp Community</span>
                    </p>
                  </div>

                  <div className="text-right bg-white/10 px-3.5 py-2.5 rounded-xl border border-white/15 min-w-[90px] shrink-0">
                    <span className="text-[9px] text-slate-400 block line-through">Regular ${ORIGINAL_PRICE_USD}</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 leading-tight">
                      ${PAYMENT_AMOUNT_USD}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-700">
                  Select Payment Method:
                </label>
                
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('razorpay')}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                      paymentMethod === 'razorpay'
                        ? 'border-blue-600 bg-blue-50/80 text-blue-900 shadow-sm ring-1 ring-blue-600'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-bold">Razorpay</span>
                    <span className="text-[10px] text-slate-400">All-in-one</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                      paymentMethod === 'upi'
                        ? 'border-emerald-600 bg-emerald-50/80 text-emerald-900 shadow-sm ring-1 ring-emerald-600'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <Smartphone className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-bold">UPI / GPay</span>
                    <span className="text-[10px] text-slate-400">PhonePe/QR</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                      paymentMethod === 'card'
                        ? 'border-indigo-600 bg-indigo-50/80 text-indigo-900 shadow-sm ring-1 ring-indigo-600'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-indigo-600" />
                    <span className="text-xs font-bold">Debit / Card</span>
                    <span className="text-[10px] text-slate-400">Visa/Master</span>
                  </button>
                </div>

                {/* Form fields based on selected method */}
                {paymentMethod === 'card' && (
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 text-left text-xs animate-in fade-in">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Cardholder Name</label>
                      <input 
                        type="text" 
                        placeholder={fullName || "Name on Card"} 
                        value={cardHolder} 
                        onChange={(e) => setCardHolder(e.target.value)} 
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">Card Number</label>
                        <input 
                          type="text" 
                          placeholder="•••• •••• •••• ••••" 
                          value={cardNumber} 
                          onChange={(e) => setCardNumber(e.target.value)} 
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 mb-1">Expiry</label>
                          <input type="text" placeholder="MM/YY" className="w-full px-2 py-2 bg-white border border-slate-300 rounded-lg text-xs text-center" />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 mb-1">CVV</label>
                          <input type="password" placeholder="•••" maxLength={4} className="w-full px-2 py-2 bg-white border border-slate-300 rounded-lg text-xs text-center" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'upi' && (
                  <div className="p-3.5 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-2 text-left text-xs animate-in fade-in">
                    <label className="block text-[11px] font-bold text-slate-700">UPI ID / Mobile Number</label>
                    <input 
                      type="text" 
                      placeholder="username@okaxis / 9876543210@paytm" 
                      value={upiId} 
                      onChange={(e) => setUpiId(e.target.value)} 
                      className="w-full px-3 py-2 bg-white border border-emerald-300 rounded-lg text-xs"
                    />
                    <p className="text-[10px] text-emerald-800">
                      Supports Google Pay, PhonePe, Paytm, BHIM, and all UPI applications.
                    </p>
                  </div>
                )}

                {paymentMethod === 'razorpay' && (
                  <div className="p-3 bg-blue-50/60 border border-blue-200 rounded-xl text-xs text-slate-600 text-left">
                    <p className="text-[11px]">
                      ⚡ Opens Razorpay secure 256-bit encrypted checkout to complete payment using Cards, NetBanking, or UPI.
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => handleProcessPayment(paymentMethod)}
                  disabled={isPaymentVerifying}
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-base sm:text-lg rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-75"
                >
                  {isPaymentVerifying ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Verifying ${PAYMENT_AMOUNT_USD} Payment & Unlocking WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5" />
                      <span>{paymentInitiated ? `Re-open Razorpay Gateway ($${PAYMENT_AMOUNT_USD})` : `Pay $${PAYMENT_AMOUNT_USD} via Razorpay / Card`}</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Immediate WhatsApp group invite link given upon payment completion</span>
              </div>

            </div>
          )}

          {/* STEP 3: COMPLETED / WHATSAPP GROUP LINK */}
          {currentStep === 'completed' && (
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 animate-bounce" />
              </div>

              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-full mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Payment Verified & Seat Confirmed</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Welcome aboard, {fullName || 'Student'}!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Your seat for the 1-Hour Live AI Masterclass is reserved. Click below to join the private WhatsApp Masterclass Community for live Zoom links and course resources.
                </p>
              </div>

              {/* WhatsApp Community Box */}
              <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-2xl p-4 text-left flex items-start gap-3 max-w-md mx-auto">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-emerald-950">Official WhatsApp Batch Group</h4>
                  <p className="text-xs text-emerald-800/90 mt-0.5">
                    Live class meeting links, prompts, and mentor interaction happen inside this group.
                  </p>
                </div>
              </div>

              <div className="pt-2 space-y-2.5 max-w-md mx-auto">
                <button
                  type="button"
                  onClick={handleJoinWhatsApp}
                  className="w-full py-4 text-base font-extrabold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Smartphone className="w-5 h-5" />
                  <span>Join Masterclass WhatsApp Group Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

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
