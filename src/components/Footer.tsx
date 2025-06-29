
import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Plan B</h3>
            <p className="text-gray-600 mb-4">
              L'appli qui t'aide à mieux bouger, pour des trajets plus responsables et optimisés.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Application</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-primary transition-colors">Ce que Plan B fait</a></li>
              <li><a href="#app-tour" className="text-gray-600 hover:text-primary transition-colors">Comment ça fonctionne</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Entreprise</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 hover:text-primary transition-colors">Qui sommes-nous</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Carrières</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Contactez-nous</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Mentions légales</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Plan B. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
