
import React from 'react';

type FeatureProps = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

const StrategyFeature = ({ title, description, icon, color }: FeatureProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
        <span className="text-2xl">{icon}</span>
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
      title: "Offset",
      description: "Neutralize unavoidable emissions by funding climate projects.",
      icon: "♻️",
      color: "bg-green-100"
    },
    {
      title: "Reduce",
      description: "Lower your carbon footprint through simple lifestyle changes.",
      icon: "📉",
      color: "bg-blue-100"
    },
    {
      title: "Multiply",
      description: "Increase your impact by sharing and inspiring others.",
      icon: "🚀",
      color: "bg-purple-100"
    }
  ];

  const appFeatures = [
    {
      title: "Calculate your personal carbon footprint",
      description: "Our smart carbon calculator analyzes your lifestyle to estimate your carbon footprint, giving you a clear starting point for climate action.",
      imageSrc: "/placeholder.svg",
      imageAlt: "Carbon footprint calculator"
    },
    {
      title: "Offset the emissions you can't avoid",
      description: "Support verified climate projects around the world that remove or prevent carbon emissions. Choose from forest protection, renewable energy, and more.",
      imageSrc: "/placeholder.svg",
      imageAlt: "Offset projects",
      reverse: true
    },
    {
      title: "Reduce your emissions step by step",
      description: "Get personalized suggestions for reducing your carbon footprint based on your lifestyle. Track your progress and celebrate your achievements.",
      imageSrc: "/placeholder.svg",
      imageAlt: "Emission reduction"
    },
    {
      title: "Multiply your impact and spark a movement",
      description: "Share your climate journey with friends and family. Every action inspires others, creating a ripple effect of positive change.",
      imageSrc: "/placeholder.svg",
      imageAlt: "Impact multiplication",
      reverse: true
    }
  ];

  return (
    <>
      <section id="features" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Your holistic climate action strategy</h2>
            <p className="text-gray-600 text-lg">
              A comprehensive approach to fighting climate change through three essential pillars.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategyFeatures.map((feature, index) => (
              <StrategyFeature key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Packed into a next-gen social impact app</h2>
            <p className="text-gray-600 text-lg">
              Powerful features designed to make climate action accessible, engaging, and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 transform rotate-2 transition-transform hover:rotate-0 duration-300">
              <img src="/placeholder.svg" alt="App Screenshot 1" className="rounded-xl" />
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-4 transform -rotate-2 transition-transform hover:rotate-0 duration-300 -mt-6 md:mt-4">
              <img src="/placeholder.svg" alt="App Screenshot 2" className="rounded-xl" />
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-4 transform rotate-3 transition-transform hover:rotate-0 duration-300">
              <img src="/placeholder.svg" alt="App Screenshot 3" className="rounded-xl" />
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
            <h2 className="mb-4">Klima is different.</h2>
            <p className="text-gray-600 text-lg">
              We're the only climate app that combines carbon offsetting, footprint reduction, and social impact in one seamless experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
