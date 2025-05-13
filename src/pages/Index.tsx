
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import FeatureSection from '@/components/FeatureSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import EarlyAccessSection from '@/components/EarlyAccessSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <FeatureSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQ />
        <EarlyAccessSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
