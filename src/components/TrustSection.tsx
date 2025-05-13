
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const TrustSection = () => {
  // Partenaires avec les nouveaux logos
  const partners = [
    { name: "Nos Gestes Climat", logo: "/lovable-uploads/ed91d83f-f5d4-4d4e-9eca-47db87b9c427.png" },
    { name: "Haut Conseil pour le Climat", logo: "/lovable-uploads/23cd894f-5ba9-4abe-a540-c594a4c5919a.png" },
    { name: "ADEME", logo: "/lovable-uploads/30cfb395-0af1-4142-966b-421a4b2427c2.png" },
    { name: "Ministère de la Transition Écologique", logo: "/lovable-uploads/4e04f018-9a3c-4df0-8803-1efa1e1df0ff.png" },
    { name: "1% For The Planet", logo: "/lovable-uploads/9b7f9fd0-4e67-49a1-85a7-eddbc3f3a988.png" },
    { name: "Impact 4 The Planet", logo: "/lovable-uploads/4e63305d-17f3-467b-b2eb-96e9c8143eb1.png" }
  ];

  return (
    <section className="py-8 bg-white border-t border-b border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500 uppercase tracking-wider">Ils nous font confiance</p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: "trimSnaps"
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partners.map((partner, idx) => (
              <CarouselItem key={idx} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6">
                <div className="flex items-center justify-center h-24 p-2">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-h-16 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TrustSection;
