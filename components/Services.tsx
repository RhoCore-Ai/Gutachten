
"use client";

import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import AnimatedSection from './AnimatedSection';

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

const servicesData = {
  damageReports: [
    {
      title: 'Allgemeines Schadengutachten',
      content: 'Wenn Sie unverschuldet in einen Unfall verwickelt wurden, haben Sie als Geschädigter das Recht, einen unabhängigen Sachverständigen Ihrer Wahl zu beauftragen. Unser Gutachten bildet die Basis für eine sachgerechte Schadenregulierung und enthält alle wesentlichen Informationen wie Schadensumfang, Schadenshöhe, Wiederbeschaffungswert, Restwert, Reparaturdauer und mögliche Wertminderung.',
    },
    {
        title: 'Gutachten Pkw',
        content: 'Wenn Sie einen Unfall mit Ihrem Pkw hatten oder ein Wertgutachten benötigen, stehen wir Ihnen mit unserer Erfahrung als Kfz-Gutachter zur Seite. Wir erstellen für alle Automarken ein Unfall- und/oder Wertgutachten schnell und zuverlässig – sei es im Schadenfall, beim Kauf oder Verkauf eines Gebrauchtwagens oder zur Fahrzeugbewertung.'
    },
    {
        title: 'Gutachten Bus / Lkw',
        content: 'Als verlässlicher Kfz-Sachverständiger übernehmen wir die Erstellung von Schaden- und Bewertungsgutachten für Ihren Lkw, Bus oder Ihre Baumaschinen. Ob nach einem Unfall oder zur Wertermittlung – wir fertigen neutrale und unabhängige Gutachten schnell und zu fairen Konditionen.'
    },
    {
        title: 'Gutachten Motorräder / Roller / Quad (ATV)',
        content: 'Wenn Sie den Wert Ihres Motorrads, Rollers oder Quads professionell ermitteln lassen möchten – sei es nach einem Unfallschaden oder vor einem Verkauf – sind wir der richtige Ansprechpartner. Verlassen Sie sich nicht auf allgemeine Listenwerte, sondern auf unsere präzise Wertermittlung mit Marktbeobachtung.'
    },
    {
        title: 'Gutachten Fahrräder / E-Bikes / E-Scooter',
        content: 'Wenn Ihr Fahrrad, E-Bike, Pedelec oder E-Scooter durch einen Unfall beschädigt wurde und Sie Ersatz benötigen, stehen wir Ihnen mit unserer Expertise zur Seite. Ob nach einem Unfall, einem Bedarf an einem Unfallgutachten oder im Falle eines Diebstahls - wir erstellen für die Versicherung schnell und zuverlässig ein Gutachten.'
    },
    {
        title: 'Gutachten für Wohnmobile / Wohnanhänger / Caravan',
        content: 'Ein Unfall kann schnell passieren und Schäden an Ihrem Wohnmobil, Caravan oder Wohnanhänger verursachen. Um die Reparaturkosten genau zu bestimmen, erstellen wir für Sie ein unabhängiges Schadengutachten. Unsere detaillierte Bewertung hilft Ihnen bei der Versicherung und stellt sicher, dass Sie eine faire Kostenübernahme erhalten.'
    },
    {
        title: 'Kasko Gutachten',
        content: 'Grundsätzlich unterscheidet man zwischen Teilkasko-Schäden (durch äußere Einflüsse wie Hagel, Sturm, Diebstahl oder Wildunfälle) und Vollkasko-Schäden (zusätzlich selbstverschuldete Unfälle und Vandalismus). Da es sich um vertragliche Ansprüche handelt, gelten individuelle Versicherungsbedingungen. Wichtig: Die Beauftragung eines freien Sachverständigen für ein Kaskogutachten sollte nur in Absprache mit der Versicherung erfolgen, da ansonsten die Kostenübernahme nicht garantiert ist.'
    }
  ],
  valuationReports: [
    {
        title: 'Wertgutachtenerstellung',
        content: 'Ein Wertgutachten wird bei einer Veräußerung des Fahrzeuges, der Inzahlungnahme bei Fahrzeughändlern oder bei der Anschaffung eines Gebrauchtfahrzeuges notwendig. Der Händlerverkaufswert bzw. Händlereinkaufswert wird mittels anerkannter Bewertungssysteme und durch Überprüfung des Fahrzeug-Marktes ermittelt.'
    },
    {
        title: 'Gutachten Youngtimer und Oldtimer',
        content: 'Der Wert eines Oldtimers oder Youngtimers ist nicht nur für den Verkauf entscheidend, sondern auch für die Versicherung. Wertbestimmende Faktoren sind Originalität, Seltenheit, Erhaltungszustand, Historie und die Qualität von Restaurierungen. Als Partner von classic-analytics bieten wir eine fundierte Marktanalyse und eine präzise Einschätzung des Wertes Ihres Klassikers.'
    },
    {
        title: 'Wertermittlung bei Leasingrücknahmen',
        content: 'Beim Auslaufen eines Leasingvertrags stellen wir fest, welche Kosten oder Vorteile bei der Rückgabe oder Übernahme entstehen. Ein besonderer Fokus liegt hierbei auf dem allgemeinen Fahrzeugzustand, der Kilometerleistung, übermäßiger Abnutzung oder Schäden. Unsere Bewertung hilft Ihnen, unerwartete Kosten zu vermeiden.'
    }
  ],
  otherServices: [
    {
        title: 'Beweissicherungsgutachten',
        content: 'Bei rechtlichen Auseinandersetzungen ist eine lückenlose Dokumentation von Vorschäden oder unsachgemäß durchgeführten Reparaturen entscheidend. Unser Beweissicherungsgutachten hält minderwertige Reparaturen, verdeckte Mängel oder unzureichende Instandsetzungsarbeiten detailliert fest und dient als Beweismittel.'
    },
    {
        title: 'Reparaturkostenprognose / Kostenvoranschlag',
        content: 'Bei kleineren Schäden an Kraftfahrzeugen wird eine Reparaturkostenübersicht der Material- und Arbeitskosten mittels einer Kalkulation erstellt. Im Gegensatz zu einem Gutachten werden keine Wertminderungen, Wiederbeschaffungs- oder Restwerte ermittelt.'
    },
    {
        title: 'Gebrauchtwagencheck',
        content: 'Der Kauf eines Gebrauchtwagens ist Vertrauenssache. Mit unserem professionellen Gebrauchtwagencheck bieten wir eine umfassende technische und optische Überprüfung des Fahrzeugs. Wir prüfen Karosserie, Lack, Motor, Getriebe, Fahrwerk, Bremsen und Elektronik, bewerten den Kaufpreis und helfen Ihnen, eine fundierte Entscheidung zu treffen und unangenehme Überraschungen zu vermeiden.'
    }
  ]
};


const Services: React.FC = () => {
    const [openItem, setOpenItem] = useState<string | null>(null);

    const handleToggle = (id: string) => {
        setOpenItem(openItem === id ? null : id);
    };

  return (
    <AnimatedSection id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Unsere Leistungen</h2>
            <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">Wir bieten eine breite Palette an Gutachten und Bewertungen für alle Fahrzeugtypen. Unser Ziel ist es, Ihnen eine transparente und fundierte Grundlage für Ihre Entscheidungen zu liefern.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="md:col-span-1">
                <h3 className="text-2xl font-bold mb-6 text-[#0057b7]">Schadengutachten</h3>
                <div className="space-y-2">
                    {servicesData.damageReports.map((item, index) => (
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
                <h3 className="text-2xl font-bold mb-6 text-[#0057b7]">Fahrzeugbewertung</h3>
                <div className="space-y-2">
                    {servicesData.valuationReports.map((item, index) => (
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
                <h3 className="text-2xl font-bold mb-6 text-[#0057b7]">Weitere Services</h3>
                 <div className="space-y-2">
                    {servicesData.otherServices.map((item, index) => (
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
