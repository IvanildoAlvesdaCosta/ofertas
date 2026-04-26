import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1500);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-6 animate-fade-in">
      <div className="container">
        <div className="glass p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-2">🍪 Cookies & Privacidade</h3>
            <p className="text-sm opacity-80">
              Nós utilizamos cookies para melhorar sua experiência e analisar nosso tráfego. 
              Ao continuar navegando, você concorda com nossa política de privacidade.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={acceptCookies}
              className="bg-primary hover:bg-primary-hover px-8 py-3 rounded-full font-bold transition-all"
            >
              Aceitar Tudo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
