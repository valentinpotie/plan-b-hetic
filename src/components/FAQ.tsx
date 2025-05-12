
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "What is Klima?",
      answer: "Klima is an all-in-one climate action app that helps you offset, reduce, and multiply your impact on fighting climate change. It combines carbon footprint tracking, offsetting, and personalized suggestions in one seamless experience."
    },
    {
      question: "How does carbon offsetting work?",
      answer: "Carbon offsetting works by investing in projects that reduce or remove carbon emissions elsewhere to compensate for emissions you can't avoid. Klima connects you with verified climate projects around the world that have demonstrable carbon benefits."
    },
    {
      question: "Are the climate projects verified?",
      answer: "Yes, all climate projects available on Klima are verified by internationally recognized standards such as Gold Standard and Verified Carbon Standard (VCS). We ensure transparency by providing detailed information about each project."
    },
    {
      question: "How accurate is the carbon footprint calculator?",
      answer: "Our carbon footprint calculator uses the latest research and methodologies to provide an accurate estimate based on your lifestyle. While no calculator can be 100% precise, it gives you a good baseline to work from and improve upon."
    },
    {
      question: "Is my data secure?",
      answer: "We take data privacy very seriously. Your personal information is encrypted and stored securely. We never sell your data to third parties and only use it to provide you with the best possible service."
    },
    {
      question: "How can I maximize my climate impact?",
      answer: "You can maximize your impact by taking a holistic approach: offset what you can't reduce, reduce what you can, and inspire others to join your climate journey. The multiplication effect of community action is one of the most powerful tools we have against climate change."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Questions?</h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about Klima and climate action.
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
        </div>
      </div>
    </section>
  );
};

export default FAQ;
