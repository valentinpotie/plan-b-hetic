
import React from 'react';
import { Activity, Calendar, Map, Gift, QrCode } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

type FeatureProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const StrategyFeature = ({
  title,
  description,
  icon,
  color
}: FeatureProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <Button 
        className="mt-4 bg-primary hover:bg-primary/90"
        onClick={() => {
          if (typeof window.amplitude !== 'undefined') {
            window.amplitude.track('button_click', {
              button_id: 'download_app_feature',
              button_text: 'Télécharger l\'app',
              button_location: 'strategy_feature',
              button_type: 'cta',
              page: 'home'
            });
          }
        }}
      >
        Télécharger l'app
      </Button>
    </div>
  );
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
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className={`${reverse ? 'md:order-2' : ''}`}>
        <div className="flex flex-col mb-6">
          <div className="flex items-center mb-2">
            <div className="text-4xl font-bold mr-4">{number}</div>
          </div>
          <h3 className="text-3xl font-black mb-4">{title}</h3>
          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        </div>
        <Button 
          className="mt-2 bg-primary hover:bg-primary/90"
          onClick={() => {
            if (typeof window.amplitude !== 'undefined') {
              window.amplitude.track('button_click', {
                button_id: `download_app_step_${number}`,
                button_text: 'Télécharger l\'app',
                button_location: 'app_tour_feature',
                button_type: 'cta',
                page: 'home'
              });
            }
          }}
        >
          Télécharger l'app
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
      number: "01",
      title: "Connexion à ton agenda",
      description: "Dès la connexion de ton agenda (Google, Microsoft…), notre app analyse tes trajets pour estimer tes émissions à venir. Tu découvres concrètement l'empreinte carbone liée à ta mobilité.",
      imageSrc: "/lovable-uploads/74109e83-0279-4776-94ea-5e1238ea087e.png",
      imageAlt: "Connexion à ton agenda"
    },
    {
      number: "02",
      title: "Tes suggestions du jour",
      description: "Chaque matin, notre app te propose les meilleurs moyens de transport selon tes rendez-vous, ton rythme de vie et tes contraintes : pas de vélo si tu n'en fais jamais, pas de marche si tu es pressé·e.",
      imageSrc: "/lovable-uploads/abb684d7-78f4-4ee5-9f0e-c0bf0946aff4.png",
      imageAlt: "Suggestions de trajets",
      reverse: true
    },
    {
      number: "03",
      title: "Ton bilan de la semaine",
      description: "Grâce à la connexion à tes apps de transport, tu reçois chaque fin de semaine un bilan clair de tes émissions évitées, des alternatives choisies et de ton évolution.",
      imageSrc: "/lovable-uploads/8ed73e71-72bc-400c-8bb6-777b7f6138d1.png",
      imageAlt: "Suivi des progrès"
    },
    {
      number: "04",
      title: "Scanne le QR code EXO",
      description: "Dès le scan du QR code dans la salle, tu reçois directement tes exocoins sur ton compte EXO !",
      imageSrc: "/lovable-uploads/3d0ac83d-fe53-4216-b1bf-de1aba866f1e.png",
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
