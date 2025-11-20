import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Search, X, CheckCircle, Mail, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
interface Submission {
  filingNumber: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  category: string;
  message: string;
  date: string;
  status: 'inReview' | 'responded' | 'closed';
  anonymous: boolean;
}
export function Conectemos() {
  const {
    t
  } = useTranslation();
  const [viewMode, setViewMode] = useState<'form' | 'tracking'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    category: '',
    message: '',
    anonymous: false
  });
  const [trackingNumber, setTrackingNumber] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [generatedFilingNumber, setGeneratedFilingNumber] = useState('');
  const [trackedSubmission, setTrackedSubmission] = useState<Submission | null>(null);
  const [showTrackingResult, setShowTrackingResult] = useState(false);
  const generateFilingNumber = () => {
    const submissions = JSON.parse(localStorage.getItem('pqrsf_submissions') || '[]');
    const nextNumber = submissions.length + 1;
    return `PQRSF-${String(nextNumber).padStart(4, '0')}`;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filingNumber = generateFilingNumber();
    const submission: Submission = {
      filingNumber,
      name: formData.anonymous ? 'Anónimo' : formData.name,
      email: formData.anonymous ? '' : formData.email,
      phone: formData.phone,
      location: formData.location,
      category: formData.category,
      message: formData.message,
      date: new Date().toISOString(),
      status: 'inReview',
      anonymous: formData.anonymous
    };
    const submissions = JSON.parse(localStorage.getItem('pqrsf_submissions') || '[]');
    submissions.push(submission);
    localStorage.setItem('pqrsf_submissions', JSON.stringify(submissions));
    setGeneratedFilingNumber(filingNumber);
    setShowConfirmation(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      category: '',
      message: '',
      anonymous: false
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value,
      type
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };
  const handleTracking = () => {
    const submissions: Submission[] = JSON.parse(localStorage.getItem('pqrsf_submissions') || '[]');
    const found = submissions.find(s => s.filingNumber === trackingNumber);
    setTrackedSubmission(found || null);
    setShowTrackingResult(true);
  };
  const closeConfirmation = () => {
    setShowConfirmation(false);
    setGeneratedFilingNumber('');
  };
  const closeTrackingResult = () => {
    setShowTrackingResult(false);
    setTrackedSubmission(null);
    setTrackingNumber('');
  };
  const getStatusText = (status: string) => {
    switch (status) {
      case 'inReview':
        return t('connect.status.inReview');
      case 'responded':
        return t('connect.status.responded');
      case 'closed':
        return t('connect.status.closed');
      default:
        return status;
    }
  };
  return <section id="connect" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img src="/Conectemos_Version_primaria_1.png" alt="Conectemos" className="h-12 sm:h-16 w-auto" />
          </div>
          <p className="text-xl text-black mb-6 font-medium">
            {t('connect.subtitle')}
          </p>
          <p className="text-lg text-[#595959] max-w-3xl mx-auto">
            {t('connect.intro')}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6 flex justify-center gap-4">
              <button onClick={() => setViewMode('form')} className={`flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-colors ${viewMode === 'form' ? 'bg-[#753bbd] text-white' : 'bg-white text-black hover:bg-gray-100'}`}>
                {t('connect.viewForm')}
              </button>
              <button onClick={() => setViewMode('tracking')} className={`flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-colors ${viewMode === 'tracking' ? 'bg-[#753bbd] text-white' : 'bg-white text-black hover:bg-gray-100'}`}>
                {t('connect.viewTracking')}
              </button>
            </div>
            {viewMode === 'form' ? <div className="bg-white rounded-lg shadow-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {!formData.anonymous && <>
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                          {t('connect.form.name')}
                        </label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required={!formData.anonymous} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#753bbd] focus:border-transparent" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                          {t('connect.form.email')}
                        </label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required={!formData.anonymous} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#753bbd] focus:border-transparent" />
                      </div>
                    </>}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                      {t('connect.form.phone')}
                    </label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#753bbd] focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-black mb-2">
                      {t('connect.form.location')}
                    </label>
                    <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#753bbd] focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-black mb-2">
                      {t('connect.form.category')}
                    </label>
                    <select id="category" name="category" value={formData.category} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#753bbd] focus:border-transparent">
                      <option value="">
                        {t('connect.form.selectCategory')}
                      </option>
                      <option value="peticion">
                        {t('connect.form.petition')}
                      </option>
                      <option value="queja">
                        {t('connect.form.complaint')}
                      </option>
                      <option value="reclamo">{t('connect.form.claim')}</option>
                      <option value="sugerencia">
                        {t('connect.form.suggestion')}
                      </option>
                      <option value="felicitacion">
                        {t('connect.form.congratulation')}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                      {t('connect.form.message')}
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#753bbd] focus:border-transparent" />
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="anonymous" name="anonymous" checked={formData.anonymous} onChange={handleChange} className="w-4 h-4 text-[#753bbd] border-gray-300 rounded focus:ring-[#753bbd]" />
                    <label htmlFor="anonymous" className="ml-2 text-sm text-[#595959]">
                      {t('connect.form.anonymous')}
                    </label>
                  </div>
                  <button type="submit" className="w-full bg-[#f89400] text-white px-6 py-3 rounded-full font-medium hover:bg-[#d97f00] transition-colors flex items-center justify-center">
                    <Send className="mr-2" size={20} />
                    {t('connect.form.submit')}
                  </button>
                </form>
              </div> : <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-black mb-6">
                  {t('connect.form.tracking')}
                </h3>
                <div className="space-y-4">
                  <input type="text" value={trackingNumber} onChange={e => setTrackingNumber(e.target.value)} placeholder={t('connect.form.trackingPlaceholder')} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#753bbd] focus:border-transparent" />
                  <button onClick={handleTracking} className="w-full bg-[#753bbd] text-white px-6 py-3 rounded-full hover:bg-[#5f2f9a] transition-colors flex items-center justify-center">
                    <Search className="mr-2" size={20} />
                    {t('connect.form.trackButton')}
                  </button>
                </div>
              </div>}
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-black mb-4 flex items-center">
                <Mail className="mr-2 text-[#753bbd]" size={20} />
                {t('connect.sidebar.contactTitle')}
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <Mail className="mr-2 text-[#595959] flex-shrink-0 mt-1" size={16} />
                  <a href="mailto:conectemos@sunfactory.io" className="text-[#595959] hover:text-[#753bbd] transition-colors text-sm">
                    {t('connect.sidebar.contactEmail')}
                  </a>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-2 text-[#595959] flex-shrink-0 mt-1" size={16} />
                  <span className="text-[#595959] text-sm">
                    {t('connect.sidebar.contactPhone')}
                  </span>
                </div>
                <div className="pt-2">
                  <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-[#25D366] text-white px-6 py-2 rounded-full font-medium hover:bg-[#20BA5A] transition-colors text-sm">
                    <MessageCircle className="mr-2" size={16} />
                    {t('connect.sidebar.contactWhatsApp')}
                  </a>
                </div>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-lg font-bold text-black mb-4 flex items-center">
                  <CheckCircle2 className="mr-2 text-[#753bbd]" size={20} />
                  {t('connect.sidebar.commitmentsTitle')}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 text-[#753bbd] flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-[#595959] text-sm">
                      {t('connect.sidebar.commitment1')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 text-[#753bbd] flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-[#595959] text-sm">
                      {t('connect.sidebar.commitment2')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 text-[#753bbd] flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-[#595959] text-sm">
                      {t('connect.sidebar.commitment3')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 text-[#753bbd] flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-[#595959] text-sm">
                      {t('connect.sidebar.commitment4')}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showConfirmation && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button onClick={closeConfirmation} className="absolute top-4 right-4 text-gray-500 hover:text-black">
              <X size={24} />
            </button>
            <div className="flex justify-center mb-4">
              <CheckCircle className="text-green-500" size={64} />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4 text-center">
              {t('connect.confirmation.title')}
            </h3>
            <p className="text-[#595959] mb-4 text-center">
              {t('connect.confirmation.message')}
            </p>
            <div className="bg-[#753bbd] text-white text-2xl font-bold py-4 px-6 rounded-lg text-center mb-4">
              {generatedFilingNumber}
            </div>
            <p className="text-sm text-[#595959] mb-4 text-center">
              {t('connect.confirmation.note')}
            </p>
            {!formData.anonymous && <p className="text-sm text-[#595959] text-center">
                {t('connect.confirmation.emailSent')}
              </p>}
          </div>
        </div>}
      {showTrackingResult && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button onClick={closeTrackingResult} className="absolute top-4 right-4 text-gray-500 hover:text-black">
              <X size={24} />
            </button>
            {trackedSubmission ? <>
                <h3 className="text-2xl font-bold text-black mb-6 text-center">
                  {t('connect.status.title')}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-[#595959] mb-1">
                      {t('connect.status.filing')}
                    </p>
                    <p className="text-lg font-bold text-[#753bbd]">
                      {trackedSubmission.filingNumber}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#595959] mb-1">
                      {t('connect.status.date')}
                    </p>
                    <p className="text-lg font-medium text-black">
                      {new Date(trackedSubmission.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#595959] mb-1">
                      {t('connect.status.currentStatus')}
                    </p>
                    <div className={`inline-block px-4 py-2 rounded-full font-medium ${trackedSubmission.status === 'inReview' ? 'bg-yellow-100 text-yellow-800' : trackedSubmission.status === 'responded' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                      {getStatusText(trackedSubmission.status)}
                    </div>
                  </div>
                </div>
              </> : <>
                <h3 className="text-2xl font-bold text-black mb-4 text-center">
                  {t('connect.status.title')}
                </h3>
                <p className="text-[#595959] text-center">
                  {t('connect.status.notFound')}
                </p>
              </>}
          </div>
        </div>}
    </section>;
}