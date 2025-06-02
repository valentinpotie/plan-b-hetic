
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-secondary to-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Combine ta voiture avec la mobilité intelligente
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Plan B optimise tes trajets en combinant voiture et transports en commun quand ça te fait gagner du temps, de l'argent ou du stress - sans pression morale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full" 
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
          
          <div className="flex justify-center md:justify-end">
            <img 
              alt="Écrans de l'application mobile" 
              className="w-64 md:w-80 rounded-2xl" 
              src="/lovable-uploads/b16fdadf-41dd-4513-8dbb-2d16790cb625.png" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
