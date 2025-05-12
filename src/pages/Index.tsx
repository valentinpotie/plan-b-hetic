
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
                <h2 className="mb-4">Nous sommes sérieux concernant la création d'impact</h2>
                <p className="text-gray-600 text-lg">
                  ÉcoMouv est construit sur trois principes fondamentaux : Transparence, Validation Scientifique et Maximisation de l'Impact
                </p>
              </div>
              
              <div className="flex justify-center">
                <div className="bg-white p-4 rounded-2xl shadow-lg inline-block">
                  <img 
                    src="/placeholder.svg" 
                    alt="Certification B Corp" 
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
                <h2 className="mb-4">Développé par une équipe portée par une mission</h2>
                <p className="text-gray-600 text-lg mb-6">
                  Nous sommes une équipe diversifiée de scientifiques du climat, de développeurs et de designers engagés à rendre l'action climatique accessible à tous.
                </p>
                <p className="text-gray-600">
                  Notre mission est de donner aux individus les outils dont ils ont besoin pour prendre des mesures climatiques significatives et créer un avenir durable pour tous.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded-lg p-2">
                  <img src="/placeholder.svg" alt="Membre de l'équipe" className="rounded w-full aspect-square object-cover" />
                </div>
                <div className="bg-gray-100 rounded-lg p-2 mt-6">
                  <img src="/placeholder.svg" alt="Membre de l'équipe" className="rounded w-full aspect-square object-cover" />
                </div>
                <div className="bg-gray-100 rounded-lg p-2 -mt-6">
                  <img src="/placeholder.svg" alt="Membre de l'équipe" className="rounded w-full aspect-square object-cover" />
                </div>
                <div className="bg-gray-100 rounded-lg p-2">
                  <img src="/placeholder.svg" alt="Membre de l'équipe" className="rounded w-full aspect-square object-cover" />
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
