// WhatsApp Group Links Configuration
// You can customize the WhatsApp group link for each course here.

export const MASTERCLASS_WHATSAPP_URL = "https://chat.whatsapp.com/DKkUINCsIx9K7uKXDXwgJp?s=cl&p=i&ilr=0&amv=1";

// WhatsApp Group specifically for "AI Money Making Course":
export const MONEY_MAKING_WHATSAPP_URL = "https://chat.whatsapp.com/DKkUINCsIx9K7uKXDXwgJp?s=cl&p=i&ilr=0&amv=1";

export const getWhatsAppUrl = (currentPage: string = 'masterclass') => {
  return currentPage === 'money-making' || currentPage === 'ai-money-making'
    ? MONEY_MAKING_WHATSAPP_URL 
    : MASTERCLASS_WHATSAPP_URL;
};
