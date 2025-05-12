
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <section id="about" className="section-padding bg-primary/5">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">We're serious about creating impact</h2>
                <p className="text-gray-600 text-lg">
                  Klima is built on three core principles: Transparency, Scientific Validation, and Maximizing Impact
                </p>
              </div>
              
              <div className="flex justify-center">
                <div className="bg-white p-4 rounded-2xl shadow-lg inline-block">
                  <img 
                    src="/placeholder.svg" 
                    alt="B Corp Certification" 
                    className="h-16"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-4">Developed by a mission-driven team</h2>
                <p className="text-gray-600 text-lg mb-6">
                  We're a diverse team of climate scientists, developers, and designers committed to making climate action accessible to everyone.
                </p>
                <p className="text-gray-600">
                  Our mission is to empower individuals with the tools they need to take meaningful climate action and create a sustainable future for all.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded-lg p-2">
                  <img src="/placeholder.svg" alt="Team member" className="rounded w-full aspect-square object-cover" />
                </div>
                <div className="bg-gray-100 rounded-lg p-2 mt-6">
                  <img src="/placeholder.svg" alt="Team member" className="rounded w-full aspect-square object-cover" />
                </div>
                <div className="bg-gray-100 rounded-lg p-2 -mt-6">
                  <img src="/placeholder.svg" alt="Team member" className="rounded w-full aspect-square object-cover" />
                </div>
                <div className="bg-gray-100 rounded-lg p-2">
                  <img src="/placeholder.svg" alt="Team member" className="rounded w-full aspect-square object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
