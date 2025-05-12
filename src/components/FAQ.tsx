
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
      question: "Qu'est-ce qu'ÉcoMouv ?",
      answer: "ÉcoMouv est une application tout-en-un d'action climatique qui t'aide à compenser, réduire et multiplier ton impact sur la lutte contre le changement climatique. Elle combine le suivi de l'empreinte carbone, la compensation et des suggestions personnalisées en une seule expérience fluide."
    },
    {
      question: "Comment fonctionne la compensation carbone ?",
      answer: "La compensation carbone consiste à investir dans des projets qui réduisent ou éliminent les émissions de carbone ailleurs pour compenser les émissions que tu ne peux pas éviter. ÉcoMouv te met en relation avec des projets climatiques vérifiés dans le monde entier qui ont des avantages carbone démontrables."
    },
    {
      question: "Les projets climatiques sont-ils vérifiés ?",
      answer: "Oui, tous les projets climatiques disponibles sur ÉcoMouv sont vérifiés par des normes internationalement reconnues telles que Gold Standard et Verified Carbon Standard (VCS). Nous assurons la transparence en fournissant des informations détaillées sur chaque projet."
    },
    {
      question: "Comment puis-je maximiser mon impact climatique ?",
      answer: "Tu peux maximiser ton impact en adoptant une approche globale : compenser ce que tu ne peux pas réduire, réduire ce que tu peux, et inspirer d'autres à rejoindre ton parcours climatique. L'effet multiplicateur de l'action communautaire est l'un des outils les plus puissants que nous avons contre le changement climatique."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Nous prenons la confidentialité des données très au sérieux. Tes informations personnelles sont cryptées et stockées en toute sécurité. Nous ne vendons jamais tes données à des tiers et ne les utilisons que pour te fournir le meilleur service possible."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Des questions ?</h2>
          <p className="text-gray-600 text-lg">
            Trouve des réponses aux questions fréquentes sur ÉcoMouv et l'action climatique.
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
