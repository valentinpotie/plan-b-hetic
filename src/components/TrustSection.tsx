
import React, { useRef, useEffect } from 'react';

const TrustSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;
    
    const scroll = () => {
      if (scrollElement.scrollLeft >= scrollElement.scrollWidth - scrollElement.clientWidth) {
        scrollElement.scrollLeft = 0;
      } else {
        scrollElement.scrollLeft += 1;
      }
    };
    
    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  // Partner logos
  const partners = [
    { name: "ADEME", logo: "/placeholder.svg" },
    { name: "Ville de Paris", logo: "/placeholder.svg" },
    { name: "Région Occitanie", logo: "/placeholder.svg" },
    { name: "Région Auvergne-Rhône-Alpes", logo: "/placeholder.svg" },
    { name: "Ministère de l'Écologie", logo: "/placeholder.svg" }
  ];

  return (
    <section className="py-8 bg-white border-t border-b border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500 uppercase tracking-wider">Ils nous font confiance</p>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-12 py-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          {partners.map((partner, idx) => (
            <div key={idx} className="flex-shrink-0 flex items-center justify-center">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-12 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
          
          {/* Duplicate logos for infinite scroll effect */}
          {partners.map((partner, idx) => (
            <div key={`dup-${idx}`} className="flex-shrink-0 flex items-center justify-center">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-12 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
