import React from 'react';
import { Sparkles, Camera } from 'lucide-react';
import { BOUTIQUE_SHOWCASE_ITEMS, BOUTIQUE_CONFIG } from '../data/storeData';

export const BoutiqueShowcase: React.FC = () => {
  return (
    <section id="univers" className="py-24 bg-[#0c0c10] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-300 font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Immersion & Savoir-Être</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.08em] text-white uppercase mb-4">
            L'Univers WALACE SHINE UP
          </h2>
          <div className="w-12 h-px bg-amber-400/40 mx-auto mb-4" />
          <p className="text-sm sm:text-base text-zinc-400 font-light tracking-wide">
            Découvrez l'atmosphère et les vitrines de notre boutique à Cotonou. Une sélection continue de pièces conçues pour illuminer votre allure.
          </p>
        </div>

        {/* Modular Showcase Bento Grid for Boutique Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOUTIQUE_SHOWCASE_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={`group relative rounded-sm overflow-hidden bg-zinc-950 border border-white/10 hover:border-amber-400/30 transition-all duration-500 shadow-xl ${
                index === 2 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/5]'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

              {/* Tag indicator */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-amber-300/80 bg-black/60 px-2 py-1 rounded-sm border border-white/10">
                <Camera className="w-3 h-3 text-amber-400" />
                <span>Showroom</span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-white tracking-wide uppercase mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 font-light">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note informative pour le propriétaire / présentation */}
        <div className="mt-12 p-6 rounded-sm bg-zinc-900/40 border border-white/5 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-xs uppercase tracking-wider text-amber-300 font-medium mb-1">
              Photographies de la boutique
            </p>
            <p className="text-xs text-zinc-400 font-light">
              Ces emplacements sont calibrés pour intégrer directement vos futures photographies de vitrines et de comptoir sans toucher au design.
            </p>
          </div>
          <span className="shrink-0 text-[11px] uppercase tracking-widest text-zinc-500 border border-white/10 px-3 py-1.5 rounded-sm">
            {BOUTIQUE_CONFIG.contact.addressCity}
          </span>
        </div>

      </div>
    </section>
  );
};
