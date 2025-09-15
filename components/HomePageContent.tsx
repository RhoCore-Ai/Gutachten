import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const HomePageContent: React.FC = () => {
  return (
    <div className="bg-white text-[#212529]">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePageContent;