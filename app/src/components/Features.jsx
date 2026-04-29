import React from 'react';
import { ShieldCheck, TrendingUp, Headphones, Globe, CheckCircle2 } from 'lucide-react';
import contentData from '../data/content.json';

const iconArr = [ShieldCheck, TrendingUp, Headphones, Globe];

const Features = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 translate-x-32 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Neden Sinomach?</h2>
            <h3 className="text-4xl font-extrabold text-secondary mb-6 leading-tight">Yüksek Kalite,<br />Üstün Performans</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              İş dünyasının zorluklarına karşı her zaman yanınızdayız. Sinomach makineleri ile 
              üretkenliğinizi artırır, işletme maliyetlerinizi düşürür ve sürdürülebilir başarı 
              elde edersiniz.
            </p>
            
            <div className="space-y-6">
              {contentData.whySinomach.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                    <p className="mt-1 text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content / Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {/* Background blob overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
            
            {contentData.advantages.map((adv, idx) => {
              const IconComponent = iconArr[idx % iconArr.length];
              return (
                <div key={idx} className={`bg-white p-8 rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-100 hover:-translate-y-2 transition-transform duration-300 ${idx % 2 !== 0 ? 'sm:mt-12' : ''}`}>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-400 rounded-xl flex items-center justify-center mb-6 text-white shadow-md">
                    <IconComponent size={28} />
                  </div>
                  <h4 className="text-lg font-bold text-secondary mb-3 leading-tight">{adv.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
