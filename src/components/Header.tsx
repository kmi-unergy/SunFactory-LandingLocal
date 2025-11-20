import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
export function Header() {
  const {
    t,
    i18n
  } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const textColor = scrolled ? 'text-black' : 'text-white';
  const bgColor = scrolled ? 'bg-white shadow-md' : 'bg-transparent';
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img src="/TSF_Logo_purple.png" alt="Sun Factory Logo" className="h-12 w-auto" />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className={`${textColor} hover:text-[#753bbd] transition-colors`}>
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('about')} className={`${textColor} hover:text-[#753bbd] transition-colors`}>
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('us')} className={`${textColor} hover:text-[#753bbd] transition-colors`}>
              {t('nav.us')}
            </button>
            <button onClick={() => scrollToSection('projects')} className={`${textColor} hover:text-[#753bbd] transition-colors`}>
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection('connect')} className={`${textColor} hover:text-[#753bbd] transition-colors`}>
              {t('nav.connect')}
            </button>
            <button onClick={() => scrollToSection('ethics')} className={`${textColor} hover:text-[#753bbd] transition-colors`}>
              {t('nav.ethics')}
            </button>
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <button onClick={() => scrollToSection('connect')} className="bg-[#f89400] text-white px-6 py-2 rounded-full hover:bg-[#d97f00] transition-colors">
              {t('nav.connect')}
            </button>
            <div className="flex items-center space-x-2">
              <button onClick={() => changeLanguage('es')} className={`${textColor} hover:text-[#753bbd] transition-colors font-medium ${i18n.language === 'es' ? 'underline' : ''}`}>
                ES
              </button>
              <span className={textColor}>|</span>
              <button onClick={() => changeLanguage('en')} className={`${textColor} hover:text-[#753bbd] transition-colors font-medium ${i18n.language === 'en' ? 'underline' : ''}`}>
                EN
              </button>
            </div>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`lg:hidden ${textColor}`}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-black hover:text-[#753bbd]">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-black hover:text-[#753bbd]">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('us')} className="block w-full text-left text-black hover:text-[#753bbd]">
              {t('nav.us')}
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-black hover:text-[#753bbd]">
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection('connect')} className="block w-full text-left text-black hover:text-[#753bbd]">
              {t('nav.connect')}
            </button>
            <button onClick={() => scrollToSection('ethics')} className="block w-full text-left text-black hover:text-[#753bbd]">
              {t('nav.ethics')}
            </button>
            <button onClick={() => scrollToSection('connect')} className="w-full bg-[#f89400] text-white px-6 py-2 rounded-full hover:bg-[#d97f00] transition-colors">
              {t('nav.connect')}
            </button>
            <div className="flex items-center justify-center space-x-4 pt-2">
              <button onClick={() => changeLanguage('es')} className={`text-black hover:text-[#753bbd] font-medium ${i18n.language === 'es' ? 'underline' : ''}`}>
                ES
              </button>
              <span className="text-black">|</span>
              <button onClick={() => changeLanguage('en')} className={`text-black hover:text-[#753bbd] font-medium ${i18n.language === 'en' ? 'underline' : ''}`}>
                EN
              </button>
            </div>
          </div>
        </div>}
    </header>;
}