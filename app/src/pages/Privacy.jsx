import React from 'react';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Gizlilik Politikası - Sinomach Türkiye</title>
        <meta name="description" content="Sinomach Türkiye Gizlilik Politikası, Kişisel Verilerin Korunması Kanunu ve kullanıcı hakları." />
      </Helmet>
      
      <div className="pt-24 min-h-screen bg-white pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12 border-b border-gray-100 pb-8">
            <h1 className="text-4xl font-extrabold text-secondary mb-4">Gizlilik Politikası</h1>
            <p className="text-gray-500">Son Güncelleme: 1 Ocak 2024</p>
          </div>

          <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed space-y-6">
            <p>
              Sinomach Türkiye olarak, web sitemizi ziyaret eden müşterilerimizin güvenliği ve gizliliği bizim için en öncelikli konulardan biridir. Bu Gizlilik Politikası, toplanan kişisel verilerinizin nasıl işlendiği ve korunduğu hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">1. Toplanan Veriler</h3>
            <p>
              İletişim formları, teklif alma butonları ve benzeri dijital kanallarımız aracılığıyla ad, soyad, telefon numarası ve e-posta adresi gibi kişisel verilerinizi toplamaktayız. Bu veriler sadece size özel hizmet sunabilmek ve geri dönüş sağlayabilmek amacıyla kullanılmaktadır.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">2. Verilerin Kullanımı</h3>
            <p>
              Bizimle paylaştığınız kişisel verileriniz, tamamen şirketimizin iş süreçleri dahilinde;
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Talep ettiğiniz ürün/hizmet ile ilgili teknik dökümanların size ulaştırılması,</li>
              <li>Size özel satış temsilcimizin sizinle doğrudan iletişime geçmesi,</li>
              <li>Yeni ürünlerimiz veya kampanyalarımız hakkında yasal izinler doğrultusunda bilgilendirme yapılması</li>
            </ul>
            <p className="mt-4">
              amacıyla kullanılmaktadır. Hiçbir şekilde izinsiz olarak üçüncü şahıs veya kurumlarla satılamaz, devredilemez.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">3. Çerezler (Cookies)</h3>
            <p>
              Web sitemizin kullanıcı deneyimini iyileştirmek, ziyaretçi tercihlerini hatırlamak ve anonim trafik analizi yapmak amacıyla çerezler kullanılmaktadır. Tarayıcı ayarlarınızdan çerezleri dilediğiniz zaman devre dışı bırakabilirsiniz.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">4. Haklarınız</h3>
            <p>
              KVKK (Kişisel Verilerin Korunması Kanunu) kapsamında, hakkınızda saklanan kişisel verileri görüntüleme, düzenleme veya kayıtlarımızdan tamamen sildirme hakkına sahipsiniz. Bu talepleriniz için <a href="mailto:info@sinomach.com.tr" className="text-primary hover:underline">info@sinomach.com.tr</a> adresiyle doğrudan iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
