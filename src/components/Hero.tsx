
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-secondary to-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Pose tes clés, utilise tes pieds.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              L'app qui te fait gagner à mieux te déplacer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
                <Download className="mr-2" size={20} />
                Télécharger l'app
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-8">
              <div className="flex">
                <img src="/placeholder.svg" alt="App Store" className="h-10" />
              </div>
              <div className="flex">
                <img src="/placeholder.svg" alt="Google Play" className="h-10" />
              </div>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary via-accent to-primary rounded-full blur-3xl opacity-30"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
                <img 
                  src="/placeholder.svg" 
                  alt="Screenshot de l'application" 
                  className="w-64 md:w-72 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
