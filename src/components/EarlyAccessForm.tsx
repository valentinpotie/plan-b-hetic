import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from 'lucide-react';
const EarlyAccessForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      toast({
        title: "Merci de t'être inscrit!",
        description: "Tu recevras bientôt des nouvelles sur l'early access de Plan B."
      });
    }, 1000);
  };
  return <section className="section-padding bg-gradient-to-b from-white to-secondary">
      <div className="container-custom">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail size={28} className="text-primary" />
              </div>
            </div>
            <h2 className="mb-4">Rejoins les premiers à tester Plan B</h2>
            <p className="text-gray-600 text-lg">
              Laisse-nous ton e-mail et fais partie des premiers testeurs de notre app. On t'écrit dès que c'est prêt.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Ton adresse e-mail" value={email} onChange={e => setEmail(e.target.value)} required className="h-12 rounded-full px-6" />
            <Button type="submit" disabled={isLoading} className="bg-primary hover:bg-primary/90 text-white h-12 rounded-full px-8">
              {isLoading ? "Inscription..." : "Je m'inscris à l'early access"}
            </Button>
          </form>
          
          
        </div>
      </div>
    </section>;
};
export default EarlyAccessForm;