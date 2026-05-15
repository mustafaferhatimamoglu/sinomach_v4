import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import contentData from '../data/content.json';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full bg-[#0a192f]">
        {/* Main Excavator Background */}
        <img 
          src="/hero_generated.png" 
          alt="Sinomach Excavator at Quarry" 
          className="w-full h-full object-cover object-[75%_center]"
          fetchPriority="high"
          decoding="async"
        />
        {/* Gradient overlays to ensure text readability on the left while keeping the machine visible on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 pt-32">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-white font-medium text-sm tracking-widest mb-6 shadow-sm">
            GELECEĞİN TEKNOLOJİSİ
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Gelişmiş Mühendislik, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Güçlü Performans
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
            {contentData.brand.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/models" className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg shadow-primary/30 hover:-translate-y-1">
              Modellerimizi İnceleyin
              <ArrowRight size={20} />
            </Link>
            
            <a href={contentData.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-md font-bold text-lg transition-all hover:-translate-y-1">
              <Play className="fill-white" size={20} />
              Bize Ulaşın
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Shape */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)'}}></div>
    </div>
  );
};

export default Hero;
