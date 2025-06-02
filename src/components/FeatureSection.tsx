
import React from 'react';
import { Car, MapPin, Gift } from 'lucide-react';
import { Button } from "@/components/ui/button";

type FeatureProps = {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
};

const Feature = ({
  number,
  title,
  description,
  icon,
  color,
  delay
}: FeatureProps) => {
  return (
    <div 
      className="flex flex-col items-start text-left p-8 bg-white rounded-xl shadow-sm border animate-feature-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="text-4xl font-bold text-primary mr-4">{number}</div>
        <div className={`${color} w-12 h-12 rounded-full flex items-center justify-center animate-icon-scale`}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      number: "1️⃣",
      title: "Ton trajet optimisé",
      description: "Plan B calcule le meilleur trajet en combinant voiture et transports en commun pour économiser ton temps, ton argent et réduire ton empreinte carbone. L'application choisit le meilleur mix en fonction de ta destination, de ton emploi du temps et des conditions de circulation.",
      icon: <Car size={24} className="text-green-700" />,
      color: "bg-green-100",
      delay: 0
    },
    {
      number: "2️⃣",
      title: "Parkings pratiques et disponibles",
      description: "Plan B te propose les parkings les plus proches de ton itinéraire, avec toutes les infos utiles : disponibilité, prix et horaires. Tu n'as plus à chercher un parking pendant 30 minutes, l'app le trouve pour toi.",
      icon: <MapPin size={24} className="text-blue-700" />,
      color: "bg-blue-100",
      delay: 200
    },
    {
      number: "3️⃣",
      title: "Récompenses pour tes choix responsables",
      description: "Chaque fois que tu choisis une option de transport plus écologique, tu gagnes des récompenses : bons d'achat, réductions et avantages locaux. Plus tu réduis ton empreinte carbone, plus tu bénéficies de récompenses.",
      icon: <Gift size={24} className="text-amber-700" />,
      color: "bg-amber-100",
      delay: 400
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6 animate-section-fade-in">Ce que Plan B fait</h2>
          <p className="text-gray-600 text-lg animate-section-fade-in animation-delay-200">
            Une approche simple pour optimiser tes trajets au quotidien.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>

        <div className="text-center animate-cta-fade-in">
          <Button 
            className="bg-primary hover:bg-primary/80 text-white px-12 py-6 text-lg rounded-full transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => {
              if (typeof window.amplitude !== 'undefined') {
                window.amplitude.track('button_click', {
                  button_id: 'download_app_features_cta',
                  button_text: 'Télécharge l\'app et optimise tes trajets dès maintenant !',
                  button_location: 'features_section',
                  button_type: 'cta',
                  page: 'home'
                });
              }
            }}
          >
            Télécharge l'app et optimise tes trajets dès maintenant !
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
