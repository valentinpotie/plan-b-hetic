import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
const FAQ = () => {
  const faqItems = [{
    question: "Comment l'application sait-elle quels transports te proposer ?",
    answer: "L'app se connecte à ton agenda (Google, Microsoft…) et analyse tes rendez-vous et trajets du jour. Elle prend en compte tes habitudes, contraintes (temps, confort, sportivité…) et préférences pour te recommander des options de transport plus responsables mais réalistes pour toi."
  }, {
    question: "Est-ce que tu dois tout changer dans ta manière de te déplacer ?",
    answer: "Non. L'app s'adapte à ton rythme et propose des améliorations progressives. Il ne s'agit pas de tout bouleverser, mais d'optimiser ce que tu fais déjà, en gardant ton confort."
  }, {
    question: "Quels types de transports sont pris en compte ?",
    answer: "On te propose des alternatives bas carbone comme la marche, le vélo, les transports en commun, le covoiturage, ou des trajets multimodaux. Les options sont filtrées selon tes besoins du jour."
  }, {
    question: "Est-ce que tes données sont sécurisées ?",
    answer: "Oui. On ne collecte que les données nécessaires au bon fonctionnement du service, et elles sont stockées de manière sécurisée. Tu gardes à tout moment le contrôle sur ce que tu partages."
  }, {
    question: "Est-ce que tu gagnes vraiment quelque chose à utiliser l'app ?",
    answer: "Oui. En privilégiant la mobilité douce tu réduis ton empreinte carbone, tu fais des économies, et tu reçois des récompenses concrètes (réductions, bons d'achat) si tu optes régulièrement pour des trajets plus durables."
  }, {
    question: "Est-ce que c'est compliqué à utiliser ?",
    answer: "Non. Une fois ton agenda connecté, l'app fonctionne en arrière-plan. Tu reçois chaque matin une notification avec tes suggestions de transport. Tout est pensé pour être simple, rapide et utile."
  }, {
    question: "Est-ce que tu peux voir tes progrès ?",
    answer: "Oui. Chaque semaine, tu reçois un tableau de bord personnalisé avec tes trajets effectués, les émissions évitées, et tes avancées. C'est motivant, concret, et visuel."
  }];
  return <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">FAQ – Questions fréquentes</h2>
          <p className="text-gray-600 text-lg">
            Trouve des réponses aux questions fréquentes sur Plan B et ton impact environnemental.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
          
          
        </div>
      </div>
    </section>;
};
export default FAQ;