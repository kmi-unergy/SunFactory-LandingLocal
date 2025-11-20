import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Shield, Leaf } from 'lucide-react';
export function Nosotros() {
  const {
    t
  } = useTranslation();
  const values = [{
    icon: Users,
    title: t('us.sustainability.title'),
    text: t('us.sustainability.text')
  }, {
    icon: Shield,
    title: t('us.safety.title'),
    text: t('us.safety.text')
  }, {
    icon: Leaf,
    title: t('us.environment.title'),
    text: t('us.environment.text')
  }];
  return <section id="us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-16 text-center">
          {t('us.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#753bbd] rounded-full flex items-center justify-center">
                  <value.icon className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 text-center">
                {value.title}
              </h3>
              <p className="text-[#595959] text-center leading-relaxed">
                {value.text}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
}