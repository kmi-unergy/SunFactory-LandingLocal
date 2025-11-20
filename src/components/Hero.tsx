import React from 'react';
import { useTranslation } from 'react-i18next';
export function Hero() {
  const {
    t
  } = useTranslation();
  const scrollToConnect = () => {
    const element = document.getElementById('connect');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="relative h-screen w-full flex items-center justify-center" style={{
    backgroundImage: "url('https://uploadthingy.s3.us-west-1.amazonaws.com/bwUf6BSm4fQayDRxd5XRoT/Copia_de_Unergy-192.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-lg sm:text-xl text-white mb-8 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <button onClick={scrollToConnect} className="bg-[#f89400] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#d97f00] transition-colors">
          {t('hero.cta')}
        </button>
      </div>
    </section>;
}