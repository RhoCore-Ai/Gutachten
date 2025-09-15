
"use client";

import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#0057b7]">Good Motors GmbH</h1>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#0057b7] transition-colors">Dienstleistungen</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#0057b7] transition-colors">Über Uns</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#0057b7] transition-colors">Kontakt</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
