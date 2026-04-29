import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductGrid from '../components/ProductGrid';
import Cta from '../components/Cta';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ana Sayfa - Sinomach Türkiye Distribütörü</title>
        <meta name="description" content="Endüstriyel makineler, tarım ve inşaat makineleri. Sinomach Türkiye ile yenilikçi çözümler." />
      </Helmet>
      <div>
      <Hero />
      <ProductGrid />
      <Features />
      <Cta />
    </div>
    </>
  );
};

export default Home;
