// app/page.tsx
'use client';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        {/* We'll add more sections here as we build them! */}
      </main>
    </>
  );
}
