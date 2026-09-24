import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES, Category } from '../data/storeData';

interface CollectionsSectionProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="collections" className="py-24 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-300 font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>L'Univers de la Maison</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.08em] text-white uppercase mb-4">
            Nos Collections
          </h2>
          <div className="w-12 h-px bg-amber-400/40 mx-auto mb-4" />
          <p className="text-sm sm:text-base text-zinc-400 font-light tracking-wide">
            Explorez nos univers exclusifs alliant brillance audacieuse, horlogerie imposante et accessoires raffinés.
          </p>
        </div>

        {/* Categories Grid: 6 Distinctive Luxury Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat: Category) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative h-96 overflow-hidden rounded-sm bg-zinc-900 border border-white/10 hover:border-amber-400/40 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-amber-950/20 flex flex-col justify-end"
            >
              {/* Background Category Image with Graceful Zoom on Hover */}
              <div className="absolute inset-0">
                <img
                  src={cat.image}
                  alt={cat.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                {/* Measured Vignette Gradient Scrim for WCAG AA readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 group-hover:via-black/50 transition-colors" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Top quiet metadata tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[11px] uppercase tracking-[0.2em] text-amber-200/90 font-medium">
                  {cat.featuredCount || "Collection"}
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end">
                <h3 className="font-serif-luxury text-2xl font-bold text-white tracking-[0.06em] uppercase mb-2 group-hover:text-amber-300 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6 line-clamp-2">
                  {cat.shortDescription}
                </p>

                {/* Explore Action Button */}
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-300 group-hover:text-amber-200 transition-colors">
                  <span>Explorer la collection</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Bottom Accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400/0 to-transparent group-hover:via-amber-400 transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
