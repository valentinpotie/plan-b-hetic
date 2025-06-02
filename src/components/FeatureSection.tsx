import React from 'react';
import { Car, MapPin, Gift, Clock, Euro, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
type FeatureProps = {
  number: string;
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  color: string;
};
const Feature = ({
  number,
  title,
  description,
  details,
  icon,
  color
}: FeatureProps) => {
  return <div className="flex flex-col items-start text-left p-6 bg-white rounded-xl shadow-sm border">
      <div className="flex items-center mb-4">
        
        <div className={`${color} w-12 h-12 rounded-full flex items-center justify-center`}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700 mb-3 font-medium">{description}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{details}</p>
    </div>;
};
type AppFeatureProps = {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
};
const AppFeature = ({
  number,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false
}: AppFeatureProps) => {
  return <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className={`${reverse ? 'md:order-2' : ''}`}>
        <div className="flex flex-col mb-6">
          <div className="flex items-center mb-2">
            <div className="text-4xl font-bold mr-4">{number}</div>
          </div>
          <h3 className="text-3xl font-black mb-4">{title}</h3>
          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        </div>
        <Button className="mt-2 bg-primary hover:bg-primary/90" onClick={() => {
        if (typeof window.amplitude !== 'undefined') {
          window.amplitude.track('button_click', {
            button_id: `download_app_step_${number}`,
            button_text: 'Télécharge maintenant',
            button_location: 'app_tour_feature',
            button_type: 'cta',
            page: 'home'
          });
        }
      }}>
          Télécharge maintenant
        </Button>
      </div>
      <div className={`flex justify-center ${reverse ? 'md:order-1' : ''}`}>
        <div className="relative w-full max-w-md">
          <div className="absolute -inset-4 bg-gradient-to-r from-secondary via-accent/30 to-primary/30 rounded-xl blur-3xl opacity-20"></div>
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={imageSrc} alt={imageAlt} className="w-full h-auto object-contain" loading="lazy" />
          </div>
        </div>
      </div>
    </div>;
};
const FeatureSection = () => {
  const features = [{
    number: "1️⃣",
    title: "Impossible d'abandonner sa voiture pour mes trajets",
    description: "On sait que tu ne peux pas tout quitter pour faire tes trajets à vélo.",
    details: "Plan B comprend que la voiture reste indispensable pour certains de tes déplacements. L'app t'aide à optimiser tes trajets sans te forcer à tout changer.",
    icon: <Car size={24} className="text-blue-700" />,
    color: "bg-blue-100"
  }, {
    number: "2️⃣",
    title: "Flemme de faire des calculs pour savoir quel est le meilleur trajet",
    description: "Plus besoin de jongler entre 5 apps différentes. Plan B fait tous les calculs à ta place",
    details: "Plus besoin de jongler entre 5 apps différentes. Plan B fait tous les calculs à ta place et te donne la solution optimale en quelques secondes.",
    icon: <Zap size={24} className="text-green-700" />,
    color: "bg-green-100"
  }, {
    number: "3️⃣",
    title: "Aucune idée d'où trouver des parkings",
    description: "L'app te guide vers les meilleurs parkings : disponibilité en temps réel, prix, proximité des transports.",
    details: "L'app te guide vers les meilleurs parkings : disponibilité en temps réel, prix, proximité des transports.",
    icon: <MapPin size={24} className="text-amber-700" />,
    color: "bg-amber-100"
  }];
  const appTourSteps = [{
    number: "01",
    title: "Dis-nous où tu veux aller",
    description: "Qu'importe la place et qu'importe l'endroit, sélectionne en deux clics ta destination et enregistre tes trajets favoris.",
    imageSrc: "/lovable-uploads/74109e83-0279-4776-94ea-5e1238ea087e.png",
    imageAlt: "Sélection de destination"
  }, {
    number: "02",
    title: "On te fait la meilleure recommandation de trajet",
    description: "Ta feuille de route personnalisée, qui te dit où te garer pour optimiser ton temps, budget et ton empreinte carbone.",
    imageSrc: "/lovable-uploads/abb684d7-78f4-4ee5-9f0e-c0bf0946aff4.png",
    imageAlt: "Recommandation de trajet",
    reverse: true
  }, {
    number: "03",
    title: "T'es un boss, tu mérites une récompense",
    description: "Si tu réussis la mission en optimisant ton trajet avec Plan B, on te régale avec des cadeaux et récompenses.",
    imageSrc: "/lovable-uploads/8ed73e71-72bc-400c-8bb6-777b7f6138d1.png",
    imageAlt: "Récompenses"
  }];
  return <>
      <section id="features" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Ce que Plan B fait pour toi</h2>
            <p className="text-gray-600 text-lg">L'assistant qui optimise tes déplacements sans te faire changer tes habitudes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => <Feature key={index} {...feature} />)}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full" onClick={() => {
            if (typeof window.amplitude !== 'undefined') {
              window.amplitude.track('button_click', {
                button_id: 'download_app_features_cta',
                button_text: 'Fais le choix malin, télécharge Plan B !',
                button_location: 'features_section',
                button_type: 'cta',
                page: 'home'
              });
            }
          }}>
              Fais le choix malin, télécharge Plan B !
            </Button>
          </div>
        </div>
      </section>
      
      <section id="app-tour" className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Comment ça marche</h2>
            <p className="text-gray-600 text-lg">
              Découvre comment Plan B s'adapte à tes habitudes pour t'aider à faire les choix les plus malins, au quotidien.
            </p>
          </div>
          
          <div className="space-y-24">
            {appTourSteps.map((step, index) => <AppFeature key={index} {...step} />)}
          </div>
        </div>
      </section>
    </>;
};
export default FeatureSection;