import React, { useState, useMemo } from 'react';
import { ArrowRight, FileCheck, CheckCircle2, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import contentData from '../data/content.json';
import modelsData from '../data/models.json';
import Cta from '../components/Cta';
import { Helmet } from 'react-helmet-async';

const Models = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter models based on search query
  const filteredModels = useMemo(() => {
    return modelsData.filter(m => {
      const matchesSearch = m.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            Object.values(m.specs).some(val => val.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSearch;
    });
  }, [searchQuery]);

  return (
    <>
      <Helmet>
        <title>Modellerimiz - Sinomach İş Makineleri</title>
        <meta name="description" content="Tüm Sinomach modellerine göz atın. Bekoloder, Ekskavatör, Yükleyici ve daha fazlası. İşiniz için en doğru makineyi seçin." />
      </Helmet>
      <div className="pt-24 min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-secondary text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-30 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 animate-fade-in-up">
            Kapsamlı <span className="text-primary">Makine Parkuru</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Geniş ürün yelpazemizle, farklı sektörlerin ihtiyaçlarını karşılamak üzere tasarlanmış dayanıklı ve güçlü çözümler.
          </p>
        </div>
      </div>

      {/* Search Bar - Now Centered and Alone */}
      <section className="sticky top-[80px] z-30 py-8 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
              <input 
                type="text" 
                placeholder="Model veya teknik özellik ara..." 
                className="w-full pl-16 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-secondary p-1"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-20 bg-gray-50 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredModels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredModels.map((model) => (
                <Link to={`/models/${model.id}`} key={model.id} className="group bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col hover:-translate-y-2">
                  <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                    <img 
                      src={model.image}
                      alt={model.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = '/images/models/sinomach-general-tr.jpeg';
                      }}
                    />
                  </div>
                  
                  <div className="p-8 pb-0 flex-grow">
                    <h4 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors tracking-tight">{model.title}</h4>
                    <div className="space-y-3 mb-6">
                      {Object.entries(model.specs).slice(1, 3).map(([key, val], idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                          <span className="text-gray-500 font-medium">{key}</span>
                          <span className="font-bold text-secondary">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-8 pt-4">
                    <div className="w-full inline-flex items-center justify-center p-4 rounded-2xl bg-blue-50 text-primary font-bold hover:bg-primary hover:text-white transition-all transform group-hover:shadow-lg group-hover:bg-primary group-hover:text-white">
                     Modeli Detaylı İncele
                     <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 text-gray-400 mb-6">
                <Search size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Sonuç Bulunamadı</h3>
              <p className="text-gray-500 max-w-sm mx-auto">
                Aramanızla eşleşen bir model bulamadık. Lütfen farklı anahtar kelimeler deneyin veya filtreleri temizleyin.
              </p>
              <button 
                onClick={() => {setSearchQuery(''); setActiveCategory('all');}}
                className="mt-8 text-primary font-bold hover:underline"
              >
                Tümünü Göster
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative group">
              <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-secondary/90 group-hover:bg-secondary/80 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 p-12 rounded-[32px] flex flex-col items-center transform group-hover:scale-105 transition-transform">
                     <FileCheck className="text-primary w-24 h-24 mb-6 drop-shadow-lg" />
                     <h3 className="text-white text-3xl font-extrabold tracking-tight text-center leading-tight">
                        Yetkili Satış & <br/>Servis Noktası
                     </h3>
                   </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20 -z-10"></div>
            </div>

            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">DOĞRU SEÇİM</span>
              <h2 className="text-4xl font-extrabold text-secondary mb-8 tracking-tight">Neden Sinomach Modelleri?</h2>
              
              <div className="space-y-10">
                {contentData.advantages.map((adv, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-primary transition-all rotate-3 group-hover:rotate-0">
                        <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{adv.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-lg">{adv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                 <a 
                   href={contentData.contact.whatsapp}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center text-primary text-xl font-bold hover:text-secondary transition-colors group"
                 >
                   Hızlı Teklif ve Teknik Destek Alın
                   <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                 </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Cta />
    </div>
    </>
  );
};

export default Models;
