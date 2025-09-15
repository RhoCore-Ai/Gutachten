import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <AnimatedSection id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img src="https://images.pexels.com/photos/8982439/pexels-photo-8982439.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Moderne Autowerkstatt mit Hebebühne" className="rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Präzision aus Erfahrung</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Mit jahrelanger Erfahrung in der Fahrzeugtechnik ist Good Motors GmbH Ihr verlässlicher Partner für präzise und fundierte Kfz-Gutachten. Wir verstehen die Komplexität moderner Fahrzeuge und setzen unser Fachwissen ein, um Ihnen Sicherheit und Klarheit zu verschaffen – egal ob im Schadenfall, beim Kauf oder Verkauf.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Unser Team besteht aus hochqualifizierten, unabhängigen Sachverständigen und Ingenieuren, die unparteiische und gerichtsverwertbare Gutachten erstellen. Wir dokumentieren technische Fakten detailliert zur Ursachenforschung, Schadensanalyse und Beweissicherung und unterstützen Sie bei der Klärung von Haftungsfragen.
            </p>
             <p className="text-lg text-gray-600 leading-relaxed">
              Unser Prozess ist transparent und gründlich. Von der detaillierten vor-Ort-Analyse über den Einsatz moderner Diagnosetechnik bis zur Erstellung eines umfassenden Berichts nach anerkannten Industriestandards – wir liefern die Fakten, die Sie für Ihre Entscheidungen benötigen.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;