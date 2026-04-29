import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import contentData from '../data/content.json';
import Cta from '../components/Cta';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>İletişim - Sinomach Türkiye</title>
        <meta name="description" content="Sinomach Türkiye ile iletişime geçin. Teklif ve döküman alabilmek için hemen bize ulaşın." />
      </Helmet>
      <div className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6 lowercase" style={{fontVariant: 'small-caps'}}>İletişim</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            İhtiyaçlarınız için profesyonel ekibimizle iletişime geçin. Size en kısa sürede dönüş sağlayacağız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0 mt-1">
                 <Phone className="text-primary w-6 h-6" />
               </div>
               <div className="flex-grow">
                 <h4 className="text-xl font-bold text-secondary mb-2">Telefon</h4>
                 <p className="text-gray-500 text-sm mb-4">Satış & Destek için bizi arayın</p>
                 <div className="space-y-4">
                   {contentData.contact.phones.map((staff, index) => (
                     <div key={index} className="flex flex-col">
                       <span className="text-sm font-semibold text-gray-700">{staff.name}</span>
                       <a href={`tel:${staff.raw}`} className="text-primary font-bold text-lg hover:text-secondary transition-colors">
                         {staff.number}
                       </a>
                     </div>
                   ))}
                 </div>
               </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0 mt-1">
                 <Mail className="text-primary w-6 h-6" />
               </div>
               <div>
                 <h4 className="text-xl font-bold text-secondary mb-2">E-Posta</h4>
                 <p className="text-gray-500 text-sm mb-2">Teklif ve bilgi almak için</p>
                 <a href={`mailto:${contentData.contact.email}`} className="text-primary font-bold hover:text-secondary transition-colors">
                   {contentData.contact.email}
                 </a>
               </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0 mt-1">
                 <MapPin className="text-primary w-6 h-6" />
               </div>
               <div>
                 <h4 className="text-xl font-bold text-secondary mb-2">Adres</h4>
                 <p className="text-gray-700 font-bold text-sm mb-2">{contentData.contact.distributor}</p>
                 <p className="text-gray-500 leading-relaxed text-sm">
                   {contentData.contact.address}
                 </p>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-secondary mb-8">Bize Mesaj Gönderin</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Adınız Soyadınız</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Ad Soyad"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefon Numaranız</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="05XX XXX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-Posta Adresiniz</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="ornek@sirket.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Nasıl yardımcı olabiliriz?"
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  onClick={() => alert("Mesajınız simüle edildi.")}
                  className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-secondary text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Mesajı Gönder
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
      <Cta />
    </div>
    </>
  );
};

export default Contact;
