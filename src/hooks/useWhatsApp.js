export const useWhatsApp = (phoneNumber) => {
  const sendMessage = (data) => {
    const { name, email, service, message } = data;
    
    // Formatting the multi-line message for WhatsApp
    const intro = `Hello Bahuchar Engineering, I am interested in a quote.`;
    const details = `\n\n*Name:* ${name}\n*Email:* ${email}\n*Machine Type:* ${service}\n*Message:* ${message}`;
    
    const encodedText = encodeURIComponent(intro + details);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    // Safety check for mobile browsers
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return { sendMessage };
};
