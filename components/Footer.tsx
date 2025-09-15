"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} {t.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
