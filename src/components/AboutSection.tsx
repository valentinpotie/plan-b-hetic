
import React from 'react';
import { Users } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const AboutSection = () => {
  const teamMembers = [
    { name: 'Alicia', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c' },
    { name: 'Amine', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158' },
    { name: 'David', image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952' },
    { name: 'Lucas', image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7' },
    { name: 'Medhi', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
    { name: 'Valentin', image: 'https://images.unsplash.com/photo-1542740348-39501cd6e2b4' },
    { name: 'Yael', image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1' },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="animate-about-fade-in">
            <h2 className="mb-8">Qui sommes-nous ?</h2>
            <div className="space-y-8">
              <div className="animate-about-text-zoom animation-delay-200">
                <h3 className="text-xl font-bold mb-3 text-primary">• Une équipe de passionnés</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nous sommes une équipe d'étudiants en Master Product Management à HETIC, passionnés par la tech et l'écologie, avec une mission : rendre les choix écologiques plus simples et accessibles.
                </p>
              </div>
              <div className="animate-about-text-zoom animation-delay-400">
                <h3 className="text-xl font-bold mb-3 text-primary">• Notre mission ?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Apporter des solutions concrètes pour des trajets plus responsables, sans prise de tête. On veut rendre l'écologie compatible avec la vraie vie.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center animate-about-fade-in animation-delay-600">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-3xl opacity-30"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg max-w-md">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Users size={48} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Notre équipe</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Une équipe diversifiée qui partage une passion commune pour la création d'un avenir plus durable.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <Avatar className="w-16 h-16 mb-2 hover:scale-105 transition-transform duration-200">
                        <AvatarImage src={member.image} alt={`Photo de ${member.name}`} className="object-cover" />
                        <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{member.name}</span>
                    </div>
                  ))}
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
