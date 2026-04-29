import React from 'react';
import { Target, Eye, Link as LinkIcon, Building } from 'lucide-react';
import contentData from '../data/content.json';
import Cta from '../components/Cta';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Hakkımızda - Sinomach Türkiye Distribütörü</title>
        <meta name="description" content="Sinomach markasının Türkiye'deki tek yetkili satış noktasıyız. Şirket hedeflerimiz, vizyonumuz ve değerlerimiz." />
      </Helmet>
      <div className="pt-24 min-h-screen relative overflow-hidden bg-gray-50">
      <div className="absolute top-0 right-0 w-1/2 h-96 bg-primary/10 rounded-bl-full -z-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Global Company Profile */}
        <div className="mb-20 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-secondary p-12 flex flex-col justify-center text-white relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <h2 className="text-3xl font-bold mb-6 relative z-10">Küresel Güç: SINOMACH</h2>
                <div className="w-20 h-1.5 bg-primary rounded-full mb-8 relative z-10"></div>
                <p className="text-blue-100 text-lg leading-relaxed relative z-10">
                  Ocak 2011'de kurulan China SINOMACH Heavy Industry Corporation, Fortune 500 listesinde yer alan dev bir iştiraktir.
                </p>
              </div>
              <div className="lg:col-span-3 p-12">
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    <strong className="text-secondary font-bold">China SINOMACH Heavy Industry Corporation (SINOMACH Heavy Industry)</strong>, 
                    Ocak 2011'de kurulan ve bir Fortune 500 kuruluşu olan China National Machinery Industry Corporation'ın (SINOMACH Group) merkezi bir iştirakidir. 
                    İnşaat makineleri sektöründeki kaynakların yeniden yapılandırılması yoluyla kurulan, büyük ölçekli ve köklü bir ekipman üretim grubudur. 
                    Şirketin genel merkezi Pekin, Çin'dedir.
                  </p>
                  <p>
                    SINOMACH Heavy Industry; inşaat makineleri için Ar-Ge, üretim, servis, proje taahhüdü ve ilgili alanlarda ticaret faaliyetlerini yürütmekte olup, 
                    100'den fazla ülkede iş birliği ağlarına sahiptir.
                  </p>
                  <p>
                    Tarihine bakıldığında SINOMACH Heavy Industry, Çin makine endüstrisinin gücüyle; ilk yol silindiri, ilk arazi düzeltici (leveler) ve 
                    ilk odun yükleyici gibi başarılara imza atarak sektördeki liderliğini kanıtlamıştır. Bugün, SINOMACH-HI mirasını koruyarak yeni bir 
                    gelişim yolculuğuna kararlılıkla devam etmektedir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-8 tracking-tight">BİZ KİMİZ?</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {contentData.brand.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-6">Sektörde Güvenin Adı</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Yılların getirdiği tecrübe ile endüstriyel makine, tarım ekipmanları ve iş makineleri sektöründe Türkiye&apos;nin önde gelen kuruluşlarından biriyiz. Misyonumuz; sadece makine tedarik etmek değil, iş ortaklarımızın projelerinde bir çözüm ortağı olmaktır.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Yetkili distribütörlük güvencemiz, alanında uzman satış sonrası hizmet ekibimiz ve kıtamızı kapsayan geniş hizmet ağımız ile kesintisiz destek sunuyoruz.
            </p>
          </div>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl glass">
            {/* Fallback pattern background since we don't have an exact team image yet */}
            <div className="absolute inset-0 bg-blue-50 opacity-90"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#0075C2_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-t from-black/50 to-transparent">
              <Building className="w-24 h-24 text-white/90 mb-4 drop-shadow-md" />
              <h3 className="text-3xl font-extrabold text-white">{contentData.brand.name}</h3>
              <p className="text-white/80 font-medium">Uzman Kadro, Kaliteli Hizmet</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Misyonumuz</h3>
            <p className="text-gray-600 leading-relaxed">
              İş dünyasının talep ettiği yüksek gücü ve teknolojiyi, en erişilebilir koşullarda 
              ve mükemmel bir hizmet anlayışıyla sunmak.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Vizyonumuz</h3>
            <p className="text-gray-600 leading-relaxed">
              Türkiye pazarında akla ilk gelen iş makinesi tedarikçisi olmak ve küresel marka değerimizi
              ülkemizde en yükseklere taşımak.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <LinkIcon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Değerlerimiz</h3>
            <p className="text-gray-600 leading-relaxed">
              Müşteri odaklılık, sürdürülebilirlik, kalite ve dayanıklılık ilkelerinden asla taviz vermemek.
            </p>
          </div>
        </div>

      </div>
      
      <Cta />
    </div>
    </>
  );
};

export default About;
