// app/components/Hero.tsx
'use client';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-20 pb-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-blue-900"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="glass-card p-8 md:p-12 lg:p-16 mb-8">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center mb-4 gradient-text-gold">
            MA TRANSFORM LAB
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-2 gradient-text-yellow">
            From Struggle to Strength, Doubt to Direction
          </p>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center mb-4 gradient-text-orange italic">
            Transform Your Mind. Rebuild Your Body. Build Your Future.
          </p>
          
          {/* Description */}
          <p className="text-gray-300 text-center text-lg mb-8 max-w-3xl mx-auto">
            A strategic ecosystem for emotional mastery, health optimization, and business growth.
          </p>

          {/* Global Locations */}
          <div className="flex flex-col items-center gap-3 mb-8 max-w-md mx-auto">
            <div className="flex gap-3 flex-wrap justify-center">
              <div className="glass px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                Canada
              </div>
              <div className="glass px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                UK
              </div>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              <div className="glass px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                Europe
              </div>
              <div className="glass px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                East Africa
              </div>
            </div>
            <div className="glass px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
              Global Digital
            </div>
          </div>

          {/* Urgency Strips */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 flex-wrap">
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-orange-500 text-sm font-bold">
              <span>🚀</span>
              Founding Member Cohort Closing in <strong>[14 Days]</strong>
            </div>
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-yellow-500 text-sm font-bold">
              <span>💬</span>
              <strong>47 People</strong> Joined This Week
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="#contact"
            className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span>📅</span>
            Book Free Strategy Session (Limited Spots)
          </a>
          <a
            href="#builders-lab"
            className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span>🚀</span>
            Explore MA Builders Lab 🚀 $297 Founding Offer
          </a>
        </div>

        {/* WhatsApp Button */}
        <div className="flex justify-center mb-8">
          <a
            href="https://wa.me/252638666133"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span>💬</span>
            WhatsApp Immediate Response
          </a>
        </div>

        {/* Free Download Strip */}
        <div className="glass-card p-6 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <strong className="text-white text-lg">
              Download Free: 21-Day Mental Wellness Reset Guide (Valued at $97)
            </strong>
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105">
              Download Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
