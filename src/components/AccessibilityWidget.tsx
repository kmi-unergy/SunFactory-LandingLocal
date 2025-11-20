import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Accessibility, X, Volume2, Eye, Type } from 'lucide-react';
export function AccessibilityWidget() {
  const {
    t
  } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [textToSpeech, setTextToSpeech] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  useEffect(() => {
    const savedHighContrast = localStorage.getItem('accessibility_highContrast') === 'true';
    const savedLargeText = localStorage.getItem('accessibility_largeText') === 'true';
    setHighContrast(savedHighContrast);
    setLargeText(savedLargeText);
    if (savedHighContrast) {
      document.body.classList.add('high-contrast-mode');
    }
    if (savedLargeText) {
      document.body.classList.add('large-text-mode');
    }
  }, []);
  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    localStorage.setItem('accessibility_highContrast', String(newValue));
    if (newValue) {
      document.body.classList.add('high-contrast-mode');
    } else {
      document.body.classList.remove('high-contrast-mode');
    }
  };
  const toggleTextToSpeech = () => {
    const newValue = !textToSpeech;
    setTextToSpeech(newValue);
    if (newValue) {
      document.addEventListener('mouseenter', handleTextToSpeech, true);
      speakText('Función de lectura en voz alta activada');
    } else {
      document.removeEventListener('mouseenter', handleTextToSpeech, true);
      window.speechSynthesis.cancel();
      speakText('Función de lectura en voz alta desactivada');
    }
  };
  const handleTextToSpeech = (e: Event) => {
    const target = e.target as HTMLElement;
    const text = target.getAttribute('aria-label') || target.textContent?.trim() || target.getAttribute('alt');
    if (text && text.length > 0 && text.length < 200) {
      window.speechSynthesis.cancel();
      speakText(text);
    }
  };
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = 0.9;
      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };
  const toggleLargeText = () => {
    const newValue = !largeText;
    setLargeText(newValue);
    localStorage.setItem('accessibility_largeText', String(newValue));
    if (newValue) {
      document.body.classList.add('large-text-mode');
    } else {
      document.body.classList.remove('large-text-mode');
    }
  };
  return <>
      <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-6 right-6 bg-[#753bbd] text-white p-4 rounded-full shadow-lg hover:bg-[#5f2f9a] transition-colors z-50" aria-label="Accessibility options">
        <Accessibility size={24} />
      </button>
      {isOpen && <div className="fixed bottom-24 right-6 bg-white rounded-lg shadow-xl p-6 w-80 z-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-black">{t('accessibility.title')}</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-black">
              <X size={20} />
            </button>
          </div>
          <div className="space-y-4">
            <button onClick={toggleHighContrast} className={`w-full flex items-center p-3 rounded-lg transition-colors ${highContrast ? 'bg-[#753bbd] text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
              <Eye className="mr-3" size={20} />
              {t('accessibility.highContrast')}
            </button>
            <button onClick={toggleLargeText} className={`w-full flex items-center p-3 rounded-lg transition-colors ${largeText ? 'bg-[#753bbd] text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
              <Type className="mr-3" size={20} />
              {t('accessibility.largeText')}
            </button>
            <button onClick={toggleTextToSpeech} className={`w-full flex items-center p-3 rounded-lg transition-colors ${textToSpeech ? 'bg-[#753bbd] text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
              <Volume2 className="mr-3" size={20} />
              {t('accessibility.textToSpeech')}
            </button>
          </div>
        </div>}
    </>;
}