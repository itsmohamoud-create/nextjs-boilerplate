// app/components/Header.tsx
'use client';
import { useState, useEffect } from 'react';

export default function Header({ activeSection = 'home' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#programs', label: 'Programs' },
    { href: '#ai-courses', label: 'AI Courses' },
    { href: '#free-resources', label: 'Free Resources' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black py-3 text-center font-bold text-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-2 flex-wrap">
            <span>🚀 Founding Member Pricing Ends in</span>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-xl font-black">14</div>
                <div className="text-xs font-semibold">DAYS</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-black">23</div>
                <div className="text-xs font-semibold">HRS</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-black">59</div>
                <div className="text-xs font-semibold">MINS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-0 left-0 right-0 h-16 glass border-b border-white/20 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90' : 'bg-black/80'
      }`}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 text-xl font-black gradient-text-gold">
            MA TRANSFORM LAB
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-semibold text-sm transition-all duration-300 relative ${
                  activeSection === item.href.slice(1) 
                    ? 'gradient-text-gold' 
                    : 'text-white hover:gradient-text-gold'
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass border-b border-white/20">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`font-semibold py-2 transition-all duration-300 ${
                    activeSection === item.href.slice(1) 
                      ? 'gradient-text-gold' 
                      : 'text-white hover:gradient-text-gold'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
