
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-primary">Plan B</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground hover:text-primary transition-colors">Comment ça marche ?</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">Qui sommes-nous ?</a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Témoignages</a>
          <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Télécharger l'App
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Comment ça marche ?
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Qui sommes-nous ?
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Témoignages
            </a>
            <a 
              href="#faq" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-white w-full">
              Télécharger l'App
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
