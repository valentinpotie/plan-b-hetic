
import React from 'react';
import { Users } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const AboutSection = () => {
  // Liste des membres de l'équipe
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
    <section id="about" className="section-padding bg-primary/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-4">Plan B, c'est qui ?</h2>
            <p className="text-gray-600 text-lg mb-6">
              On est une team d'étudiants en Master Product Management à HETIC, avec un pied dans la tech, l'autre dans l'écologie, et la tête dans les solutions concrètes.
            </p>
            <p className="text-gray-600 mb-4">
              Avec Plan B, on veut rendre l'écologie un peu moins prise de tête, et beaucoup plus compatible avec la vraie vie.
            </p>
            <p className="text-gray-600 mb-4">
              Pas de grandes leçons, juste un coup de pouce pour mieux faire au quotidien, sans tout changer.
            </p>
            <p className="text-gray-600">
              Notre idée ? Commencer par les trajets — parce que c'est là qu'on peut avoir de l'impact, facilement, et dès maintenant.
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
                <h3 className="text-xl font-semibold text-center mb-4">Notre équipe</h3>
                <p className="text-gray-600 text-center mb-6">
                  Une équipe diversifiée qui partage une passion commune pour la création d'un avenir plus durable.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <Avatar className="w-16 h-16 mb-2">
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
