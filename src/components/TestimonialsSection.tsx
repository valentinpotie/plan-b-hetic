
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from 'lucide-react';

type TestimonialProps = {
  content: string;
  author: string;
};

const Testimonial = ({ content, author }: TestimonialProps) => {
  return (
    <Card className="border-none shadow-md h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="text-primary mb-4">
          <MessageSquare size={24} />
        </div>
        <p className="text-gray-700 italic mb-6 flex-grow">{content}</p>
        <div className="mt-auto">
          <p className="font-semibold text-right">– {author}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "Appli ludique, interface top. Les infos sont cohérentes d'un trajet à l'autre. Ça me suffit pour rester vigilante sur mon impact et essayer de toujours m'améliorer !",
      author: "Camille"
    },
    {
      content: "Une appli très utile pour quantifier notre empreinte écologique lors de nos déplacements quotidiens. L'interface est bien faite et l'impact sur l'autonomie de la batterie est très minime. Je recommande fortement !",
      author: "Lucas"
    },
    {
      content: "Plus qu'un outil pour connaître sa façon de se déplacer, il permet de remettre en question la façon de se déplacer.",
      author: "Sophie"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Témoignages</h2>
          <p className="text-gray-600 text-lg">
            Découvrez ce que nos utilisateurs pensent de DADA.
          </p>
        </div>
        
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="md:hidden">
          <Carousel>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Testimonial {...testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="mr-2" />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
