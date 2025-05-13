
import React from 'react';
import { Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-primary/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-4">Qui sommes-nous ?</h2>
            <p className="text-gray-600 text-lg mb-6">
              Nous sommes une équipe d'étudiants en Master Product Management à HETIC. Passionnés par la technologie, l'écologie et l'innovation, nous avons décidé de combiner ces domaines pour créer un projet qui aide les citoyens à réduire leur impact environnemental.
            </p>
            <p className="text-gray-600">
              Notre mission est simple : rendre la transition écologique plus accessible, sans sacrifier le confort de la vie quotidienne.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary via-accent to-primary rounded-full blur-3xl opacity-20"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg max-w-md">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Users size={48} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Notre équipe</h3>
                <p className="text-gray-600 text-center">
                  Une équipe diversifiée qui partage une passion commune pour la création d'un avenir plus durable.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-100 rounded-lg p-2">
                    <img src="/placeholder.svg" alt="Membre de l'équipe" className="rounded w-full aspect-square object-cover" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2">
                    <img src="/placeholder.svg" alt="Membre de l'équipe" className="rounded w-full aspect-square object-cover" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2">
                    <img src="/placeholder.svg" alt="Membre de l'équipe" className="rounded w-full aspect-square object-cover" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2">
                    <img src="/placeholder.svg" alt="Membre de l'équipe" className="rounded w-full aspect-square object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
