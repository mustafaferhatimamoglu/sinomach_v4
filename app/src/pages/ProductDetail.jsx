import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import modelsData from '../data/models.json';
import { FileText, Phone, ArrowLeft, CheckCircle2, ChevronRight, Share2, Ruler, Cog, Weight, Gauge } from 'lucide-react';
import Cta from '../components/Cta';
import contentData from '../data/content.json';
import { Helmet } from 'react-helmet-async';

const ProductDetail = () => {
  const { id } = useParams();
  const product = modelsData.find(m => m.id === id);
  const [activeTab, setActiveTab] = useState('specs');

  // Find similar products in same category
  const similarProducts = modelsData
    .filter(m => m.category === product?.category && m.id !== product?.id)
    .slice(0, 3);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ürün Bulunamadı</h2>
        <Link to="/models" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft size={18} /> Modellere Dön
        </Link>
      </div>
    );
  }

  const getSpecIcon = (key) => {
    const k = key.toLowerCase();
    if (k.includes('ağırlık')) return <Weight size={18} />;
    if (k.includes('güç')) return <Gauge size={18} />;
    if (k.includes('kapasite') || k.includes('hacim')) return <Ruler size={18} />;
    return <Cog size={18} />;
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Ürün bağlantısı panoya kopyalandı!');
  };

  return (
    <>
      <Helmet>
        <title>{product.title} - Sinomach Modellerimiz</title>
        <meta name="description" content={`${product.title} iş makinesi detayları, teknik parametreleri ve karakteristik özellikleri. Sinomach Türkiye güvencesiyle.`} />
      </Helmet>

      <div className="pt-24 min-h-screen bg-gray-50 pb-20">
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <Link to="/" className="hover:text-primary">Ana Sayfa</Link>
              <span className="mx-2">/</span>
              <Link to="/models" className="hover:text-primary">Modellerimiz</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-semibold">{product.title}</span>
            </div>
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors"
            >
              <Share2 size={16} /> Paylaş
            </button>
          </div>
        </div>
      </div>

      {/* Hero Product Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Product Image Area */}
            <div className="bg-gray-100 p-8 flex items-center justify-center relative min-h-[400px] group">
              <img 
                src={product.image} 
                alt={product.title} 
                className="max-w-full h-auto object-cover rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = '/images/models/sinomach-general-tr.jpeg';
                }}
              />
            </div>

            {/* Product Quick Info Area */}
            <div className="p-10 lg:p-12 flex flex-col justify-center">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-secondary mb-4 tracking-tight">{product.title}</h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Sinomach güvencesiyle zorlu koşullarda üstün performans göstermek için özel olarak tasarlandı.
                Yüksek verimliliği ve gelişmiş mühendisliği ile işletme maliyetlerinizi düşürür.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                {Object.entries(product.specs).slice(0, 4).map(([key, val], idx) => (
                  <div key={idx} className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/50 flex flex-col">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      {getSpecIcon(key)}
                      <p className="text-xs text-gray-500 font-semibold tracking-wider">{key.toLocaleUpperCase('tr-TR')}</p>
                    </div>
                    <p className="text-lg font-bold text-secondary">{val}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={contentData.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary hover:bg-secondary text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 transform hover:-translate-y-0.5"
                >
                  <Phone size={20} /> Hemen Teklif Alın
                </a>
                <button 
                  className="flex-1 bg-white border-2 border-gray-200 hover:border-primary hover:text-primary text-gray-700 py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                  onClick={() => {
                    if (product.brochure) {
                      // Fix for opening PDFs in public folder
                      window.open(`/${product.brochure}`, '_blank');
                    } else {
                      alert(`${product.title} için detaylı teknik döküman hazırlanıyor. Lütfen WhatsApp üzerinden iletişime geçiniz.`);
                      window.open(contentData.contact.whatsapp, '_blank');
                    }
                  }}
                >
                  <FileText size={20} /> Teknik Döküman
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Tabs Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          
          <div className="flex border-b border-gray-100 overflow-x-auto hide-scrollbar">
            <button 
              className={`px-8 py-5 text-sm font-bold tracking-wider whitespace-nowrap transition-colors border-b-2 ${activeTab === 'specs' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-secondary'}`}
              onClick={() => setActiveTab('specs')}
            >
              TEKNİK PARAMETRELER
            </button>
            <button 
              className={`px-8 py-5 text-sm font-bold tracking-wider whitespace-nowrap transition-colors border-b-2 ${activeTab === 'features' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-secondary'}`}
              onClick={() => setActiveTab('features')}
            >
              KARAKTERİSTİK ÖZELLİKLER
            </button>
          </div>

          <div className="p-8 lg:p-12">
            
            {activeTab === 'specs' && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-secondary mb-6">Detaylı Performans Verileri</h3>
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      {Object.entries(product.specs).map(([key, val], idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700 w-1/3 border-r border-gray-200">
                            <div className="flex items-center gap-3">
                              <span className="text-primary">{getSpecIcon(key)}</span>
                              {key}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary font-medium italic">
                            {val}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="animate-fade-in max-w-4xl">
                <h3 className="text-2xl font-bold text-secondary mb-6">Neden Bu Modeli Seçmelisiniz?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contentData.whySinomach.map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                        <p className="mt-1 text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-extrabold text-secondary mb-8">Benzer Modeller</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similarProducts.map((p) => (
              <Link to={`/models/${p.id}`} key={p.id} className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all overflow-hidden flex flex-col">
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-6">
                   <h4 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{p.title}</h4>
                   <div className="mt-4 flex items-center text-primary font-bold text-sm">
                     Detayları İncele <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                   </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      <Cta />
    </div>
    </>
  );
};

export default ProductDetail;
