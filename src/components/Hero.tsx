import React from 'react';
import { ArrowDown, MessageCircle, Sparkles } from 'lucide-react';
import { BOUTIQUE_CONFIG, getWhatsAppGeneralUrl } from '../data/storeData';

interface HeroProps {
  onExplore: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onContact }) => {
  return (
    <section id="accueil" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image Container with Measured Luxury Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={BOUTIQUE_CONFIG.assets.heroImage}
          alt="WALACE SHINE UP Bijouterie Haute Joaillerie & Montres"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Measured dark luxury gradient scrims to ensure high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/75 to-[#09090b]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,9,11,0.6)_100%)]" />
      </div>

      {/* Decorative subtle hairline border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
        
        {/* Quiet Kicker (Zero pill discipline: pure unboxed typographic text) */}
        <div className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.3em] text-amber-300/90 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Boutique de Prestige</span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span>Cotonou, Bénin</span>
        </div>

        {/* Main Display Title */}
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.08em] text-white uppercase leading-[1.08] mb-6 drop-shadow-md text-balance">
          {BOUTIQUE_CONFIG.heroHeadline}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl text-zinc-200 font-light tracking-wide max-w-3xl mx-auto mb-4 text-balance">
          {BOUTIQUE_CONFIG.heroSubheadline}
        </p>

        {/* Complementary Text */}
        <p className="text-sm sm:text-base text-zinc-400 tracking-wider font-normal max-w-xl mx-auto mb-10 text-balance">
          {BOUTIQUE_CONFIG.heroDescription}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-zinc-950 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 rounded-sm shadow-xl transition-all duration-300 active:scale-[0.98] cursor-pointer"
          >
            Découvrir la collection
          </button>

          <a
            href={getWhatsAppGeneralUrl("Renseignement général boutique")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-zinc-200 bg-white/5 hover:bg-white/10 hover:text-white border border-white/20 hover:border-amber-300/50 rounded-sm backdrop-blur-sm transition-all duration-300 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-amber-400" />
            <span>Nous contacter</span>
          </a>
        </div>

        {/* Discreet Trust Points at Base */}
        <div className="mt-16 pt-8 border-t border-white/10 max-w-3xl mx-auto grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-amber-300/80 font-medium">Sélection</p>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1 font-serif-luxury">Haute Brillance ICE</p>
          </div>
          <div className="border-x border-white/10">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-300/80 font-medium">Boutique</p>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1 font-serif-luxury">Cotonou (9FM8+6GG)</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-amber-300/80 font-medium">Conseil</p>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1 font-serif-luxury">WhatsApp Réactif</p>
          </div>
        </div>

      </div>

      {/* Down Scroll Indicator */}
      <button
        onClick={onExplore}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-amber-300 transition-colors p-2 cursor-pointer z-10"
        aria-label="Faire défiler vers le bas"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};
