
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqItems = [
    {
      question: "Comment l'application sait-elle quels transports me proposer ?",
      answer: "Notre app se connecte à votre agenda et analyse vos rendez-vous et trajets du jour pour vous recommander des options de transport plus responsables."
    },
    {
      question: "Est-ce que je dois tout changer dans ma manière de me déplacer ?",
      answer: "Non. L'application s'adapte à votre rythme et propose des améliorations progressives."
    },
    {
      question: "Quels types de transports sont pris en compte ?",
      answer: "Marche, vélo, transports en commun, covoiturage, ou trajets multimodaux."
    },
    {
      question: "Est-ce que mes données sont sécurisées ?",
      answer: "Oui. Nous collectons uniquement les données nécessaires, stockées de manière sécurisée."
    },
    {
      question: "Est-ce que je gagne vraiment quelque chose à utiliser l'app ?",
      answer: "Oui. Vous gagnez du temps, réduisez votre empreinte carbone, et recevez des récompenses concrètes."
    },
    {
      question: "Est-ce que c'est compliqué à utiliser ?",
      answer: "Non. Une fois votre agenda connecté, l'app fonctionne en arrière-plan."
    },
    {
      question: "Est-ce que je peux voir mes progrès ?",
      answer: "Oui. Chaque semaine, vous recevez un tableau de bord personnalisé."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">FAQ – Questions fréquentes</h2>
          <p className="text-gray-600 text-lg">
            Trouve des réponses aux questions fréquentes sur DADA et ton impact environnemental.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold mb-4">Envie de voir ton impact ?</h3>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
              Je veux mes récompenses 🎁
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
