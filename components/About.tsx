"use client";

import React from 'react';
import AnimatedSection from './AnimatedSection';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <AnimatedSection id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <Image 
              src="https://images.pexels.com/photos/8982439/pexels-photo-8982439.jpeg" 
              alt="Moderne Autowerkstatt mit Hebebühne" 
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto" 
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">{t.title}</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              {t.p1}
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              {t.p2}
            </p>
             <p className="text-lg text-gray-600 leading-relaxed">
              {t.p3}
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
