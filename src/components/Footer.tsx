import React from 'react';
import { useTranslation } from 'react-i18next';
import { Instagram, Linkedin } from 'lucide-react';
export function Footer() {
  const {
    t,
    i18n
  } = useTranslation();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="/TSF_Logo_purple.png" alt="Sun Factory Logo" className="h-10 w-auto mb-4" />
          </div>
          <div>
            <h4 className="font-bold mb-4">{t('footer.quickLinks')}</h4>
            <nav className="space-y-2">
              <button onClick={() => scrollToSection('hero')} className="block hover:text-[#753bbd] transition-colors">
                {t('nav.home')}
              </button>
              <button onClick={() => scrollToSection('about')} className="block hover:text-[#753bbd] transition-colors">
                {t('nav.about')}
              </button>
              <button onClick={() => scrollToSection('us')} className="block hover:text-[#753bbd] transition-colors">
                {t('nav.us')}
              </button>
              <button onClick={() => scrollToSection('projects')} className="block hover:text-[#753bbd] transition-colors">
                {t('nav.projects')}
              </button>
              <button onClick={() => scrollToSection('connect')} className="block hover:text-[#753bbd] transition-colors">
                {t('nav.connect')}
              </button>
              <button onClick={() => scrollToSection('ethics')} className="block hover:text-[#753bbd] transition-colors">
                {t('nav.ethics')}
              </button>
            </nav>
          </div>
          <div>
            {/* <h4 className="font-bold mb-4">{t('footer.followUs')}</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#753bbd] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#753bbd] transition-colors">
                <Linkedin size={24} />
              </a>
            </div> */}
            <div className="flex items-center space-x-2">
              <button onClick={() => changeLanguage('es')} className={`hover:text-[#753bbd] transition-colors ${i18n.language === 'es' ? 'underline' : ''}`}>
                ES
              </button>
              <span>|</span>
              <button onClick={() => changeLanguage('en')} className={`hover:text-[#753bbd] transition-colors ${i18n.language === 'en' ? 'underline' : ''}`}>
                EN
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>;
}
