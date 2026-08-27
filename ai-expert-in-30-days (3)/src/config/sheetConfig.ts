// Configuration for Form Submissions & Webhook Integrations
// Google Apps Script Webhook URL to directly save leads into Google Sheets.

export const GOOGLE_SHEET_WEBHOOK_URL: string = 
  "https://script.google.com/macros/s/AKfycbzFqKpIu3MMtHR163T85gxySkCKF--TppI0ocywgwVGZ23LQz1SIS-SJV4rrDGvo81s/exec";

// Razorpay Test / Live Configuration ($2 / ₹169)
// 1. You can put your Razorpay Key ID here (e.g. "rzp_test_..." or "rzp_live_...")
export const RAZORPAY_KEY_ID: string = 
  import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_live_TGqa3kq0WUhUMn";

// 2. OR You can use your direct Razorpay Payment Page / Payment Link (e.g., https://rzp.io/l/yourlink)
export const RAZORPAY_PAYMENT_URL: string = "https://rzp.io/l/ai-masterclass-2usd";

// Masterclass Pricing Configuration ($2 Offer / $99 Regular)
export const PAYMENT_AMOUNT_USD = 2;
export const PAYMENT_AMOUNT_INR = 169; // INR equivalent (~$2) for Razorpay UPI/NetBanking
export const ORIGINAL_PRICE_USD = 99; // Crossed-out original price
export const DISCOUNT_PERCENT = 98; // 98% OFF

// Masterclass WhatsApp Community Group Link
export const MASTERCLASS_WHATSAPP_URL: string = 
  "https://chat.whatsapp.com/E8w9oXkL6hT3B3wU4X9jKm";


