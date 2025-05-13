
import React from 'react';
import { Activity, Calendar, Map, Gift } from 'lucide-react';

type FeatureProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const StrategyFeature = ({ title, description, icon, color }: FeatureProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

type AppFeatureProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
};

const AppFeature = ({ title, description, imageSrc, imageAlt, reverse = false }: AppFeatureProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className={`${reverse ? 'md:order-2' : ''}`}>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div className={`flex justify-center ${reverse ? 'md:order-1' : ''}`}>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-secondary via-accent/30 to-primary/30 rounded-full blur-3xl opacity-20"></div>
          <img src={imageSrc} alt={imageAlt} className="relative w-64 md:w-72 rounded-xl shadow-lg" />
        </div>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const strategyFeatures = [
    {
      title: "Ton app qui comprend tes déplacements",
      description: "Suis automatiquement tes trajets, sans effort",
      icon: <Map size={32} className="text-green-700" />,
      color: "bg-green-100"
    },
    {
      title: "Des recommandations de trajet plus responsable",
      description: "Reçois des suggestions adaptées à tes déplacements",
      icon: <Calendar size={32} className="text-blue-700" />,
      color: "bg-blue-100"
    },
    {
      title: "Des trajets qui te rapportent",
      description: "Gagne des récompenses à chaque trajet",
      icon: <Gift size={32} className="text-amber-700" />,
      color: "bg-amber-100"
    }
  ];

  const appTourSteps = [
    {
      title: "Calcule l'impact carbone de tes déplacements quotidiens",
      description: "Connecte ton agenda (Google, Microsoft…) et laisse notre app analyser tes trajets pour estimer tes émissions à venir. Tu découvres concrètement l'empreinte carbone liée à ta mobilité.",
      imageSrc: "/lovable-uploads/12f1adbb-41e8-43ef-8f8d-59352d67761c.png",
      imageAlt: "Connexion à ton agenda"
    },
    {
      title: "Reçois des suggestions de trajets plus durables",
      description: "Chaque matin, notre app te propose les meilleurs moyens de transport selon tes rendez-vous, ton rythme de vie et tes contraintes : pas de vélo si tu n'en fais jamais, pas de marche si tu es pressé·e. Tu gagnes du temps tout en réduisant ton impact.",
      imageSrc: "/lovable-uploads/93a891f2-2e76-4ba0-97b4-5cf192b94f7c.png",
      imageAlt: "Suggestions de trajets",
      reverse: true
    },
    {
      title: "Suis tes progrès semaine après semaine",
      description: "Grâce à la connexion à tes apps de transport (Google Maps, etc.), tu reçois chaque fin de semaine un bilan clair de tes émissions évitées, des alternatives choisies et de ton évolution.",
      imageSrc: "/lovable-uploads/ea5f325c-3f2c-44e7-81f8-47bb4a036197.png",
      imageAlt: "Suivi des progrès"
    },
    {
      title: "Sois récompensé·e pour tes efforts",
      description: "Chaque pas vers une mobilité plus responsable compte. Obtiens des bons d'achat, des réductions ou des avantages en récompense de tes choix durables.",
      imageSrc: "/lovable-uploads/6571a915-6ef2-4d00-ad84-6cbc5856dd07.png",
      imageAlt: "Récompenses",
      reverse: true
    }
  ];

  return (
    <>
      <section id="features" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Comment ça marche ?</h2>
            <p className="text-gray-600 text-lg">
              Une approche simple pour réduire ton impact environnemental au quotidien.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategyFeatures.map((feature, index) => (
              <StrategyFeature key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
      
      <section id="app-tour" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Planifie ta journée, réduis ton impact</h2>
            <p className="text-gray-600 text-lg">
              Découvre comment Plan B transforme tes habitudes de déplacement, une journée à la fois.
            </p>
          </div>
          
          <div className="space-y-24">
            {appTourSteps.map((step, index) => (
              <AppFeature key={index} {...step} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
