
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      toast({
        title: "Merci de t'être inscrit!",
        description: "Tu recevras bientôt des nouvelles sur nos initiatives climatiques.",
      });
    }, 1000);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-secondary">
      <div className="container-custom">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="mb-4">Restons en contact !</h2>
            <p className="text-gray-600 text-lg">
              Reçois des mises à jour sur nos dernières initiatives climatiques et fonctionnalités de l'application.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Entre ton email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 rounded-full px-6"
            />
            <Button 
              type="submit" 
              disabled={isLoading} 
              className="bg-primary hover:bg-primary/90 text-white h-12 rounded-full px-8"
            >
              {isLoading ? "Inscription..." : "Je m'inscris"}
            </Button>
          </form>
          
          <p className="text-xs text-center text-gray-500 mt-4">
            En t'inscrivant, tu acceptes notre Politique de Confidentialité et nos Conditions d'Utilisation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
