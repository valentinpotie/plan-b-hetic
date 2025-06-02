import React from 'react';
import { Car, MapPin, Gift } from 'lucide-react';
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
        <div className="text-4xl font-bold text-primary mr-4">{number}</div>
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
    title: "Ton trajet optimisé",
    description: "Plan B calcule le meilleur trajet en combinant voiture et transports en commun pour économiser ton temps, ton argent et réduire ton empreinte carbone.",
    details: "L'application choisit le meilleur mix en fonction de ta destination, de ton emploi du temps et des conditions de circulation.",
    icon: <Car size={24} className="text-green-700" />,
    color: "bg-green-100"
  }, {
    number: "2️⃣",
    title: "Parkings pratiques et disponibles",
    description: "Plan B te propose les parkings les plus proches de ton itinéraire, avec toutes les infos utiles : disponibilité, prix et horaires.",
    details: "Tu n'as plus à chercher un parking pendant 30 minutes, l'app le trouve pour toi.",
    icon: <MapPin size={24} className="text-blue-700" />,
    color: "bg-blue-100"
  }, {
    number: "3️⃣",
    title: "Récompenses pour tes choix responsables",
    description: "Chaque fois que tu choisis une option de transport plus écologique, tu gagnes des récompenses : bons d'achat, réductions et avantages locaux.",
    details: "Plus tu réduis ton empreinte carbone, plus tu bénéficies de récompenses.",
    icon: <Gift size={24} className="text-amber-700" />,
    color: "bg-amber-100"
  }];
  const appTourSteps = [{
    number: "01",
    title: "Connexion à ton agenda",
    description: "Dès la connexion de ton agenda (Google, Microsoft…), notre app analyse tes trajets pour estimer tes émissions à venir. Tu découvres concrètement l'empreinte carbone liée à ta mobilité.",
    imageSrc: "/lovable-uploads/74109e83-0279-4776-94ea-5e1238ea087e.png",
    imageAlt: "Connexion à ton agenda"
  }, {
    number: "02",
    title: "Tes suggestions du jour",
    description: "Chaque matin, notre app te propose les meilleurs moyens de transport selon tes rendez-vous, ton rythme de vie et tes contraintes : pas de vélo si tu n'en fais jamais, pas de marche si tu es pressé·e.",
    imageSrc: "/lovable-uploads/abb684d7-78f4-4ee5-9f0e-c0bf0946aff4.png",
    imageAlt: "Suggestions de trajets",
    reverse: true
  }, {
    number: "03",
    title: "Ton bilan de la semaine",
    description: "Grâce à la connexion à tes apps de transport, tu reçois chaque fin de semaine un bilan clair de tes émissions évitées, des alternatives choisies et de ton évolution.",
    imageSrc: "/lovable-uploads/8ed73e71-72bc-400c-8bb6-777b7f6138d1.png",
    imageAlt: "Suivi des progrès"
  }, {
    number: "04",
    title: "Scanne le QR code EXO",
    description: "Dès le scan du QR code dans la salle, tu reçois directement tes exocoins sur ton compte EXO !",
    imageSrc: "/lovable-uploads/3d0ac83d-fe53-4216-b1bf-de1aba866f1e.png",
    imageAlt: "Récompenses",
    reverse: true
  }];
  return <>
      <section id="features" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Pourquoi nous et pas une autre ? </h2>
            <p className="text-gray-600 text-lg">L'app ultime pour optimiser tes trajets du quotidien</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => <Feature key={index} {...feature} />)}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full" onClick={() => {
            if (typeof window.amplitude !== 'undefined') {
              window.amplitude.track('button_click', {
                button_id: 'download_app_features_cta',
                button_text: 'Télécharge l\'app et optimise tes trajets dès maintenant !',
                button_location: 'features_section',
                button_type: 'cta',
                page: 'home'
              });
            }
          }}>
              Télécharge l'app et optimise tes trajets dès maintenant !
            </Button>
          </div>
        </div>
      </section>
      
      <section id="app-tour" className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Comment ça fonctionne</h2>
            <p className="text-gray-600 text-lg">
              Découvre comment Plan B transforme tes habitudes de déplacement, une journée à la fois.
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