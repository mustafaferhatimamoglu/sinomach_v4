import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import contentData from '../data/content.json';
import logoData from '../data/logo.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/90 backdrop-blur-md py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <img src={logoData.logoUrl} alt="Sinomach Logo" className="h-[45px] object-contain" decoding="async" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {contentData.navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  location.pathname === link.path ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                {link.title.toLocaleUpperCase('tr-TR')}
              </Link>
            ))}
            
            <a href={contentData.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md hover:shadow-lg">
              <Phone size={18} />
              <span>Bize Ulaşın</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {contentData.navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  location.pathname === link.path ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                }`}
              >
                {link.title.toLocaleUpperCase('tr-TR')}
              </Link>
            ))}
            <a 
              href={contentData.contact.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block mt-4 px-3 py-3 rounded-md text-base font-bold text-white bg-primary text-center"
            >
              Hemen Bize Ulaşın
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
