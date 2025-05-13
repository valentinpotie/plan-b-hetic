
import React from 'react';
import { Activity, Calendar, FileText, Gift } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
      title: "Des solutions qui vous ressemblent",
      description: "On s'adapte à votre rythme, vos contraintes et vos habitudes.",
      icon: <Activity size={32} className="text-green-700" />,
      color: "bg-green-100"
    },
    {
      title: "Connecté à votre agenda",
      description: "On anticipe vos trajets et vous propose l'alternative la plus écolo, juste au bon moment.",
      icon: <Calendar size={32} className="text-blue-700" />,
      color: "bg-blue-100"
    },
    {
      title: "Suivi de vos trajets",
      description: "On propose un bilan hebdo de vos trajets avec l'impact.",
      icon: <FileText size={32} className="text-purple-700" />,
      color: "bg-purple-100"
    },
    {
      title: "Récompenses",
      description: "On récompense vos efforts.",
      icon: <Gift size={32} className="text-amber-700" />,
      color: "bg-amber-100"
    }
  ];

  const appTourSteps = [
    {
      title: "Calculez l'impact carbone de vos déplacements quotidiens",
      description: "Connectez votre agenda (Google, Microsoft…) et laissez notre app analyser vos trajets pour estimer vos émissions à venir.",
      imageSrc: "/placeholder.svg",
      imageAlt: "Calculateur d'impact carbone"
    },
    {
      title: "Recevez des suggestions de trajets plus durables",
      description: "Chaque matin, notre app vous propose les meilleurs moyens de transport selon vos rendez-vous, votre rythme de vie et vos contraintes.",
      imageSrc: "/placeholder.svg",
      imageAlt: "Suggestions de trajets",
      reverse: true
    },
    {
      title: "Suivez vos progrès semaine après semaine",
      description: "Grâce à la connexion à vos apps de transport, vous recevez chaque fin de semaine un bilan clair de vos émissions évitées, des alternatives choisies et de votre évolution.",
      imageSrc: "/placeholder.svg",
      imageAlt: "Suivi des progrès"
    },
    {
      title: "Soyez récompensé pour vos efforts",
      description: "Obtenez des bons d'achat, des réductions ou des avantages en récompense de vos choix durables.",
      imageSrc: "/placeholder.svg",
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
            <h2 className="mb-4">Vos rendez-vous ne changent pas. Vos trajets, si.</h2>
            <p className="text-gray-600 text-lg">
              Des fonctionnalités conçues pour rendre vos déplacements plus écologiques, sans complication.
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
      
      <section id="app-tour" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Planifiez votre journée, réduisez votre impact</h2>
            <p className="text-gray-600 text-lg">
              Découvrez comment DADA transforme vos habitudes de déplacement, une journée à la fois.
            </p>
          </div>
          
          <div className="space-y-24">
            {appTourSteps.map((step, index) => (
              <AppFeature key={index} {...step} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-4">Notre app est différente.</h2>
            <p className="text-gray-600 text-lg">
              DADA est la seule application qui combine analyse intelligente, suggestions personnalisées et récompenses dans une expérience fluide.
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
