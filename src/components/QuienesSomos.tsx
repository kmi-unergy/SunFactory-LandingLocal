import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
export function QuienesSomos() {
  const {
    t
  } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/DJI_0198.jpg", "/DJI_0185.jpg", "/DJI_0208.jpg", "/DJI_0180.jpg"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);
  return <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12 text-center">
          {t('about.title')}
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-[#595959] leading-relaxed">
              {t('about.text')}
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-[30px] overflow-hidden shadow-lg relative h-[300px]">
              {images.map((image, index) => <img key={index} src={image} alt={`Sun Factory Project ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`} />)}
            </div>
            <div className="flex justify-center gap-2">
              {images.map((_, index) => <button key={index} onClick={() => setCurrentImage(index)} className={`w-3 h-3 rounded-full transition-all ${index === currentImage ? 'bg-[#753bbd] w-8' : 'bg-gray-300'}`} aria-label={`Ver imagen ${index + 1}`} />)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}