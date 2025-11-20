import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Scale, AlertCircle, TrendingUp } from 'lucide-react';
export function GobiernoCorporativo() {
  const {
    t
  } = useTranslation();
  const sections = [{
    icon: Scale,
    title: t('ethics.principles.title'),
    text: t('ethics.principles.text')
  }, {
    icon: FileText,
    title: t('ethics.scope.title'),
    text: t('ethics.scope.text')
  }, {
    icon: AlertCircle,
    title: t('ethics.reporting.title'),
    text: t('ethics.reporting.text')
  }, {
    icon: TrendingUp,
    title: t('ethics.supervision.title'),
    text: t('ethics.supervision.text')
  }];
  return <section id="ethics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center">
          {t('ethics.title')}
        </h2>
        <p className="text-lg text-[#595959] text-center mb-16 max-w-4xl mx-auto">
          {t('ethics.intro')}
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {sections.map((section, index) => <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#753bbd] rounded-lg flex items-center justify-center">
                    <section.icon className="text-white" size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {section.title}
                  </h3>
                  <p className="text-[#595959]">{section.text}</p>
                </div>
              </div>
            </div>)}
        </div>
        <div className="text-center">
          <button className="bg-[#753bbd] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#5f2f9a] transition-colors inline-flex items-center">
            <FileText className="mr-2" size={20} />
            {t('ethics.download')}
          </button>
        </div>
      </div>
    </section>;
}