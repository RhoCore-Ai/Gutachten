
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Good Motors GmbH. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
};

export default Footer;
