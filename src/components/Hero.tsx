
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-secondary to-white overflow-hidden relative">
      {/* Parallax background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent animate-parallax"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-hero-fade-in">
              Plan B – L'appli qui t'aide à mieux bouger
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-hero-fade-in animation-delay-200">
              Plan B optimise ton trajet en combinant voiture et transports en commun, pour te faire gagner du temps, de l'argent et du confort, tout en réduisant ton empreinte carbone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-hero-fade-in animation-delay-400">
              <Button 
                className="bg-primary hover:bg-primary/80 text-white px-8 py-6 text-lg rounded-full transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl" 
                onClick={() => {
                  if (window.amplitude) {
                    window.amplitude.track('button_click', {
                      button_id: 'download_app',
                      button_text: 'Télécharge maintenant',
                      button_location: 'hero',
                      button_type: 'primary',
                      page: 'home'
                    });
                  }
                }}
              >
                Télécharge maintenant
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end animate-hero-fade-in animation-delay-600">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-3xl opacity-30"></div>
              <img 
                alt="Écrans de l'application mobile" 
                className="relative w-64 md:w-80 rounded-2xl shadow-2xl" 
                src="/lovable-uploads/b16fdadf-41dd-4513-8dbb-2d16790cb625.png" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
