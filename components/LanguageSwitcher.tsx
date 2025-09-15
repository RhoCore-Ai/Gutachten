"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="text-gray-700 hover:text-[#0057b7] transition-colors font-bold uppercase text-sm border border-gray-400 rounded-md px-3 py-1"
      aria-label={`Switch to ${language === 'de' ? 'English' : 'German'}`}
    >
      {language === 'de' ? 'en' : 'de'}
    </button>
  );
};

export default LanguageSwitcher;
