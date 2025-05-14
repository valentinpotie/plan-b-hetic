
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import FeatureSection from '@/components/FeatureSection';
import AboutSection from '@/components/AboutSection';
import FAQ from '@/components/FAQ';
import EarlyAccessForm from '@/components/EarlyAccessForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <AboutSection />
        <TrustSection />
        <EarlyAccessForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
