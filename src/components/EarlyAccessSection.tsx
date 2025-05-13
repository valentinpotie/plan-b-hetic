
import React from 'react';
import { Button } from "@/components/ui/button";
import { Rocket } from 'lucide-react';

const EarlyAccessSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-4 rounded-full">
              <Rocket size={32} className="text-primary" />
            </div>
          </div>
          <h2 className="mb-4">Teste Plan B avant tout le monde.</h2>
          <p className="text-gray-600 text-lg mb-8">
            Rejoins les premiers utilisateurs et aide-nous à construire la meilleure version.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
            Je rejoins le mouvement
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;
