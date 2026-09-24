import React from 'react';
import { Sparkles, Diamond, Watch, Compass } from 'lucide-react';
import { BOUTIQUE_CONFIG } from '../data/storeData';

export const AboutSection: React.FC = () => {
  return (
    <section id="apropos" className="py-24 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase Placeholder */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl">
              <img
                src={BOUTIQUE_CONFIG.assets.heroImage}
                alt="Univers WALACE SHINE UP Bijouterie"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-sm">
                <p className="font-serif-luxury text-lg font-bold text-white uppercase tracking-wider mb-1">
                  {BOUTIQUE_CONFIG.brandName}
                </p>
                <p className="text-xs text-amber-300/90 tracking-widest uppercase">
                  {BOUTIQUE_CONFIG.tagline}
                </p>
              </div>
            </div>

            {/* Decorative offset border */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-amber-400/20 -z-10 rounded-sm" />
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-300 font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>L'Esprit de la Maison</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.06em] text-white uppercase mb-6 leading-tight">
              À Propos de <br />
              <span className="text-amber-200">{BOUTIQUE_CONFIG.brandName}</span>
            </h2>

            {/* Required Official Text */}
            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-10 border-l-2 border-amber-400/40 pl-6">
              {BOUTIQUE_CONFIG.aboutText}
            </p>

            {/* 3 Pillars / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-amber-300 mb-3">
                  <Diamond className="w-5 h-5" />
                </div>
                <h3 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider mb-1">
                  Éclat & ICE
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Des pièces serties qui captent intensément la lumière pour une présence remarquable.
                </p>
              </div>

              <div>
                <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-amber-300 mb-3">
                  <Watch className="w-5 h-5" />
                </div>
                <h3 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider mb-1">
                  Garde-Temps
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Des montres affirmées aux finitions givrées pour ponctuer votre style.
                </p>
              </div>

              <div>
                <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-amber-300 mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider mb-1">
                  Ancrage à Cotonou
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Une boutique physique accessible et une relation de confiance personnalisée via WhatsApp.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
