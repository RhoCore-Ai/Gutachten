"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

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
        <h1 className="text-5xl md:text-7xl font-bold mb-4">{t.title}</h1>
        <p className="text-xl md:text-2xl mb-8 font-light">{t.subtitle}</p>
        <button 
          onClick={scrollToContact}
          className="bg-[#0057b7] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-800 transition-transform transform hover:scale-105"
        >
          {t.button}
        </button>
      </div>
    </section>
  );
};

export default Hero;
