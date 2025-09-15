"use client";

import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <h2>
      <button
        type="button"
        className="flex justify-between items-center w-full py-5 font-medium text-left text-gray-800 hover:bg-gray-50 focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg">{title}</span>
        <ChevronDownIcon className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </h2>
    <div
      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
    >
      <div className="overflow-hidden">
        <div className="py-5 text-gray-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
    const [openItem, setOpenItem] = useState<string | null>(null);
    const { language } = useLanguage();
    const t = translations[language].services;
    const servicesData = t.categories;

    const handleToggle = (id: string) => {
        setOpenItem(openItem === id ? null : id);
    };

  return (
    <AnimatedSection id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">{t.title}</h2>
            <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="md:col-span-1">
                <h3 className="text-2xl font-bold mb-6 text-[#0057b7]">{servicesData.damageReports.title}</h3>
                <div className="space-y-2">
                    {servicesData.damageReports.items.map((item, index) => (
                         <AccordionItem 
                            key={`damage-${index}`}
                            title={item.title}
                            isOpen={openItem === `damage-${index}`}
                            onClick={() => handleToggle(`damage-${index}`)}
                         >
                           <p>{item.content}</p>
                         </AccordionItem>
                    ))}
                </div>
            </div>

            <div className="md:col-span-1">
                <h3 className="text-2xl font-bold mb-6 text-[#0057b7]">{servicesData.valuationReports.title}</h3>
                <div className="space-y-2">
                    {servicesData.valuationReports.items.map((item, index) => (
                         <AccordionItem 
                            key={`valuation-${index}`}
                            title={item.title}
                            isOpen={openItem === `valuation-${index}`}
                            onClick={() => handleToggle(`valuation-${index}`)}
                         >
                           <p>{item.content}</p>
                         </AccordionItem>
                    ))}
                </div>
            </div>

            <div className="md:col-span-1">
                <h3 className="text-2xl font-bold mb-6 text-[#0057b7]">{servicesData.otherServices.title}</h3>
                 <div className="space-y-2">
                    {servicesData.otherServices.items.map((item, index) => (
                         <AccordionItem 
                            key={`other-${index}`}
                            title={item.title}
                            isOpen={openItem === `other-${index}`}
                            onClick={() => handleToggle(`other-${index}`)}
                         >
                           <p>{item.content}</p>
                         </AccordionItem>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </AnimatedSection>
  );
};

export default Services;
