
"use client";

import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, id, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect observer after animation to improve performance
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Animate when 10% of the section is visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      // Cleanup observer on component unmount
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`${className} transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      aria-hidden={!isVisible}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
