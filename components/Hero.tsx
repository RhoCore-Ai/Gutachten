"use client";

import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white text-center">
       <Image
        src="https://images.pexels.com/photos/4488651/pexels-photo-4488651.jpeg"
        alt="Motor eines modernen Autos"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Good Motors GmbH</h1>
        <p className="text-xl md:text-2xl mb-8 font-light">Ihr unabhängiger Partner für Kfz-Gutachten und Fahrzeugbewertungen.</p>
        <button 
          onClick={scrollToContact}
          className="bg-[#0057b7] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-800 transition-transform transform hover:scale-105"
        >
          Gutachten anfordern
        </button>
      </div>
    </section>
  );
};

export default Hero;
