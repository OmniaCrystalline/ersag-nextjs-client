/** @format */

"use client";

import React, { useState, useEffect } from "react";
import { FaCookie } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Перевіряємо, чи користувач вже прийняв cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-accent2 shadow-2xl'>
      <div className='max-w-5xl mx-auto px-5 py-4'>
        <div className='flex flex-col md:flex-row items-center gap-4'>
          <div className='flex items-center gap-3 flex-1'>
            <FaCookie className='text-accent1 text-2xl flex-shrink-0' />
            <div>
              <p className='text-sm text-text'>
                Ми використовуємо cookies для покращення вашого досвіду на
                сайті. Продовжуючи використовувати сайт, ви погоджуєтесь з
                нашою{" "}
                <a
                  href='/privacy'
                  className='text-accent1 hover:text-accent2 underline'>
                  політикою конфіденційності
                </a>
                .
              </p>
            </div>
          </div>
          <div className='flex gap-3 flex-shrink-0'>
            <button
              onClick={handleAccept}
              className='px-4 py-2 bg-accent1 text-bg rounded-lg hover:bg-accent1/90 transition-colors font-medium text-sm'>
              Прийняти
            </button>
            <button
              onClick={handleDecline}
              className='px-4 py-2 bg-accent2/20 text-accent2 rounded-lg hover:bg-accent2/30 transition-colors font-medium text-sm'>
              Відхилити
            </button>
            <button
              onClick={handleDecline}
              className='p-2 text-text/60 hover:text-text transition-colors'>
              <FaTimes className='w-5 h-5' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

