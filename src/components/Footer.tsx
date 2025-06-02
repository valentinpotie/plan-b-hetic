
import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-12 pb-6 animate-footer-slide-up">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="animate-footer-fade-in">
            <h3 className="text-xl font-bold mb-4">Plan B</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              L'appli qui t'aide à mieux bouger, pour des trajets plus responsables et optimisés.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-200 hover:scale-110 transform">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-200 hover:scale-110 transform">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-200 hover:scale-110 transform">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-200 hover:scale-110 transform">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="animate-footer-fade-in animation-delay-200">
            <h4 className="font-bold mb-4">Application</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-primary transition-colors duration-200">Ce que Plan B fait</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Comment ça fonctionne</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-primary transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>
          
          <div className="animate-footer-fade-in animation-delay-400">
            <h4 className="font-bold mb-4">Entreprise</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 hover:text-primary transition-colors duration-200">Qui sommes-nous</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Carrières</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div className="animate-footer-fade-in animation-delay-600">
            <h4 className="font-bold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Contactez-nous</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Mentions légales</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Politique de confidentialité</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 animate-footer-fade-in animation-delay-800">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Plan B. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
