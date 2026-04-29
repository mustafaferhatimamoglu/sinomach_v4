import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Cta from '../components/Cta';

const faqData = [
  {
    k: "Sinomach hangi sektörlere hitap ediyor?",
    v: "Sinomach, inşaat, tarım, madencilik ve sanayi gibi birçok sektöre yönelik ağır iş ve endüstriyel makineler üretmektedir."
  },
  {
    k: "Sinomach ürünleri neden tercih edilmelidir?",
    v: "Sinomach makineleri, yüksek verimlilik, uygun maliyetli çözümler ve çevre dostu (Euro 5/EPA standartlarına sahip vb.) teknolojilerle donatılmıştır. Rakipsiz fiyat-performans oranına sahiptir."
  },
  {
    k: "Sinomach makineleri nereden satın alınabilir?",
    v: "Türkiye içerisindeki yetkili satış noktalarımız ve iletişim hatlarımız (Web Sitemizdeki Telefon ve WhatsApp) üzerinden direkt olarak distribütör güvencesiyle temin edebilirsiniz."
  },
  {
    k: "Sinomach makineleri için yedek parça ve servis hizmeti var mı?",
    v: "Evet, Sinomach Türkiye distribütörü olarak ülke genelinde geniş yedek parça stoğumuz ve alanda uzman teknik servis ağımızla 7/24 satış sonrası destek sağlamaktayız."
  }
];

const Faq = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
    }
  };

  return (
    <>
      <Helmet>
        <title>Soru ve Cevaplar - Sinomach Türkiye</title>
        <meta name="description" content="Sinomach makine çözümleri hakkında sıkça sorulan sorular, yedek parça ve servis süreçleri." />
      </Helmet>
      
      <div className="pt-24 min-h-screen bg-gray-50 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6 lowercase" style={{fontVariant: 'small-caps'}}>Sıkça Sorulan Sorular</h1>
            <p className="text-xl text-gray-600">İşiniz için en doğru kararı vermeden önce aklınızdaki soru işaretlerini giderin.</p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-all"
                onClick={() => toggle(idx)}
              >
                <div className="px-6 py-5 flex items-center justify-between">
                  <h3 className="font-bold text-lg text-gray-900 pr-4">{faq.k}</h3>
                  <div className="text-primary flex-shrink-0">
                    {openIdx === idx ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>
                {openIdx === idx && (
                  <div className="px-6 pb-6 animate-fade-in text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                    {faq.v}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <Cta />
      </div>
    </>
  );
};

export default Faq;
