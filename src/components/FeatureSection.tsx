
import React from 'react';
import { Activity, Calendar, FileText, Gift } from 'lucide-react';

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
      title: "Analyse de tes habitudes",
      description: "On regarde comment tu bouges aujourd'hui (promis, sans jugement)",
      icon: <Activity size={32} className="text-green-700" />,
      color: "bg-green-100"
    },
    {
      title: "Recommandations malignes",
      description: "On se branche à ton agenda et on te propose mieux : plus vert, moins cher, plus rapide",
      icon: <Calendar size={32} className="text-blue-700" />,
      color: "bg-blue-100"
    },
    {
      title: "Récap de ta semaine",
      description: "Temps, argent, CO₂ : t'as tout le bilan… et des idées pour faire encore mieux",
      icon: <FileText size={32} className="text-purple-700" />,
      color: "bg-purple-100"
    },
    {
      title: "Récompenses",
      description: "Des vrais cadeaux si tu fais les bons choix 💸🌱",
      icon: <Gift size={32} className="text-amber-700" />,
      color: "bg-amber-100"
    }
  ];

  const appFeatures = [
    {
      title: "Calcule ton empreinte carbone personnelle",
      description: "Notre calculateur intelligent analyse ton style de vie pour estimer ton empreinte carbone, te donnant un point de départ clair pour agir pour le climat.",
      imageSrc: "/placeholder.svg",
      imageAlt: "Calculateur d'empreinte carbone"
    },
    {
      title: "Compense les émissions que tu ne peux pas éviter",
      description: "Soutiens des projets climatiques vérifiés qui éliminent ou préviennent les émissions de carbone. Choisis parmi la protection des forêts, les énergies renouvelables, et plus encore.",
      imageSrc: "/placeholder.svg",
      imageAlt: "Projets de compensation",
      reverse: true
    },
    {
      title: "Réduis tes émissions étape par étape",
      description: "Reçois des suggestions personnalisées pour réduire ton empreinte carbone en fonction de ton style de vie. Suis tes progrès et célèbre tes réussites.",
      imageSrc: "/placeholder.svg",
      imageAlt: "Réduction des émissions"
    },
    {
      title: "Multiplie ton impact et lance un mouvement",
      description: "Partage ton parcours climatique avec tes amis et ta famille. Chaque action en inspire d'autres, créant un effet d'entraînement positif.",
      imageSrc: "/placeholder.svg",
      imageAlt: "Multiplication de l'impact",
      reverse: true
    }
  ];

  return (
    <>
      <section id="features" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Ta stratégie d'action climatique globale</h2>
            <p className="text-gray-600 text-lg">
              Une approche complète pour lutter contre le changement climatique à travers quatre piliers essentiels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {strategyFeatures.map((feature, index) => (
              <StrategyFeature key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Emballé dans une app d'impact social nouvelle génération</h2>
            <p className="text-gray-600 text-lg">
              Des fonctionnalités puissantes conçues pour rendre l'action climatique accessible, engageante et efficace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 transform rotate-2 transition-transform hover:rotate-0 duration-300">
              <img src="/placeholder.svg" alt="Capture d'écran 1" className="rounded-xl" />
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-4 transform -rotate-2 transition-transform hover:rotate-0 duration-300 -mt-6 md:mt-4">
              <img src="/placeholder.svg" alt="Capture d'écran 2" className="rounded-xl" />
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-4 transform rotate-3 transition-transform hover:rotate-0 duration-300">
              <img src="/placeholder.svg" alt="Capture d'écran 3" className="rounded-xl" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="container-custom space-y-24">
          {appFeatures.map((feature, index) => (
            <AppFeature key={index} {...feature} />
          ))}
        </div>
      </section>
      
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-4">Notre app est différente.</h2>
            <p className="text-gray-600 text-lg">
              Nous sommes la seule application climatique qui combine la compensation carbone, la réduction de l'empreinte et l'impact social en une seule expérience fluide.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full mt-8">
              J'embarque dans l'aventure 🌍
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
