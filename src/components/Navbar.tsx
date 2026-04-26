import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        <a href="/" className="text-2xl font-bold flex items-center gap-2">
          <span className="text-primary">Escolha</span>Oferta
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="hover:text-primary font-medium">Home</a>
          <a href="/sobre" className="hover:text-primary font-medium">Sobre</a>
          <a href="#ofertas" className="bg-primary hover:bg-primary-hover px-6 py-2 rounded-full font-semibold transition-all">
            Ver Ofertas
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full glass transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 border-t' : 'max-h-0'}`}>
        <div className="container py-6 flex flex-col gap-4 text-center">
          <a href="/" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary">Home</a>
          <a href="/sobre" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary">Sobre</a>
          <a href="#ofertas" onClick={() => setIsMenuOpen(false)} className="bg-primary px-6 py-2 rounded-full mx-auto">Ver Ofertas</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
