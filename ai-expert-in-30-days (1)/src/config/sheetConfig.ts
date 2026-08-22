// Configuration for Form Submissions & Webhook Integrations
// Google Apps Script Webhook URL to directly save leads into Google Sheets.

export const GOOGLE_SHEET_WEBHOOK_URL: string = 
  "https://script.google.com/macros/s/AKfycbzFqKpIu3MMtHR163T85gxySkCKF--TppI0ocywgwVGZ23LQz1SIS-SJV4rrDGvo81s/exec";

// When GOOGLE_SHEET_WEBHOOK_URL is configured with a Google Apps Script Web App URL,
// form submissions will automatically POST/GET to that endpoint and save into your Google Sheet.
// Even if empty, the form safely falls back to local logging and seamlessly redirects the user
// to the official WhatsApp cohort group!

