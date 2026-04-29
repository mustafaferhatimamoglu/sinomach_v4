import React from 'react';
import { Mail, MapPin, Phone, Settings } from 'lucide-react';
import contentData from '../data/content.json';
import { Link } from 'react-router-dom';
import logoData from '../data/logo.json';

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & About */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src={logoData.logoUrl} alt="Sinomach" className="h-[45px] object-contain brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {contentData.brand.description}
            </p>
            <div className="flex space-x-4">
              <a href={contentData.contact.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                F
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-4">
              {contentData.navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/soru-cevap" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                  Soru & Cevap
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Modellerimiz</h4>
            <ul className="space-y-4">
              {contentData.products.map((product) => (
                <li key={product.id}>
                  <Link to="/models" className="hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                <div className="text-sm">
                  <p className="font-bold text-gray-200 mb-1">{contentData.contact.distributor}</p>
                  <p>{contentData.contact.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="text-primary mt-1 shrink-0" size={20} />
                <div className="flex flex-col gap-2">
                  {contentData.contact.phones.map((staff, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="text-xs text-gray-400">{staff.name}</span>
                      <a href={`tel:${staff.raw}`} className="hover:text-primary transition-colors text-sm font-medium">
                        {staff.number}
                      </a>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {contentData.brand.name}. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/gizlilik-politikasi" className="hover:text-primary transition-colors">Gizlilik Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
