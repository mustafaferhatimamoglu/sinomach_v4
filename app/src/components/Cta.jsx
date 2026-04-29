import React from 'react';
import { PhoneCall } from 'lucide-react';
import contentData from '../data/content.json';

const Cta = () => {
  return (
    <section className="relative py-24 bg-secondary overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          Projeleriniz İçin Doğru Makineleri Seçin
        </h2>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
          Uzman ekibimizle görüşerek ihtiyaçlarınıza en uygun endüstriyel makine çözümlerini hemen keşfedin. Size özel tekliflerimizden yararlanın.
        </p>
        
        <a 
          href={contentData.contact.whatsapp} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-white text-secondary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-primary/50"
        >
          <PhoneCall size={22} />
          Hemen İletişime Geçin
        </a>
      </div>
    </section>
  );
};

export default Cta;
