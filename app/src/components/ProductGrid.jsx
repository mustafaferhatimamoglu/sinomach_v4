import React from 'react';
import { Truck, Navigation, Settings, ChevronRight } from 'lucide-react';
import contentData from '../data/content.json';
import { Link } from 'react-router-dom';

const iconMap = {
  agriculture: <Navigation className="w-12 h-12 text-primary" />,
  construction: <Truck className="w-12 h-12 text-primary" />,
  industrial: <Settings className="w-12 h-12 text-primary" />,
  'backhoe-loader': <Truck className="w-12 h-12 text-primary" />,
  forklift: <Settings className="w-12 h-12 text-primary" />,
  telehandler: <Navigation className="w-12 h-12 text-primary" />,
  'wheel-loader': <Truck className="w-12 h-12 text-primary" />,
};

const ProductGrid = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Model Serilerimiz</h2>
          <h3 className="text-4xl font-extrabold text-secondary mb-6 leading-tight">İhtiyacınıza Uygun Güçlü Çözümler</h3>
          <p className="text-gray-600 text-lg">
            Geniş ürün yelpazemizle tarım, inşaat ve ağır sanayi sektörlerine yönelik yenilikçi ve verimli makineler sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentData.products.map((product) => (
            <Link to={`/models`} key={product.id} className="group min-h-[400px] bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-2 cursor-pointer">
              <div className="p-8 pb-0">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  {React.cloneElement(iconMap[product.id], {
                    className: "w-10 h-10 text-primary group-hover:text-white transition-colors"
                  })}
                </div>
                <h4 className="text-2xl font-bold text-secondary mb-4">{product.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>
              
              <div className="mt-auto p-8 pt-0">
                <ul className="mb-8 space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm font-semibold text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center font-bold text-primary group-hover:text-secondary transition-colors">
                  Daha Fazla Bilgi
                  <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
