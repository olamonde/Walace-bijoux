import React, { useState, useMemo } from 'react';
import { Search, Eye, MessageCircle, SlidersHorizontal, Sparkles } from 'lucide-react';
import { PRODUCTS, CATEGORIES, Product, getWhatsAppProductUrl } from '../data/storeData';

interface ProductCatalogProps {
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onCategoryChange,
  onSelectProduct,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter list of products by category and search keyword
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCat =
        selectedCategory === 'all' ||
        item.categoryId.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.categoryName.toLowerCase().includes(q) ||
        item.shortDescription.toLowerCase().includes(q) ||
        item.specs.metalOrMaterial.toLowerCase().includes(q) ||
        item.specs.style.toLowerCase().includes(q);

      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="catalogue" className="py-24 bg-[#0c0c10] border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-300 font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Catalogue Officiel</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.08em] text-white uppercase mb-4">
            Pièces Sélectionnées
          </h2>
          <div className="w-12 h-px bg-amber-400/40 mx-auto mb-4" />
          <p className="text-sm sm:text-base text-zinc-400 font-light tracking-wide">
            Chaque création témoigne d'une exigence de brillance et de précision. Tarifs et disponibilités sur demande immédiate via WhatsApp.
          </p>
        </div>

        {/* Filter Bar & Search Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          
          {/* Interactive Filter Tabs (Buttons with segmented style) */}
          <div className="w-full lg:w-auto flex items-center gap-1.5 p-1.5 bg-black/60 rounded-md border border-white/10 overflow-x-auto no-scrollbar">
            <button
              onClick={() => onCategoryChange('all')}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase whitespace-nowrap rounded-sm transition-all duration-200 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-amber-200 to-amber-400 text-zinc-950 shadow-md font-bold'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Tous
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase whitespace-nowrap rounded-sm transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-amber-200 to-amber-400 text-zinc-950 shadow-md font-bold'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full lg:w-72 relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une pièce..."
              className="w-full pl-10 pr-4 py-2.5 bg-black/50 border border-white/10 rounded-sm text-xs tracking-wider text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400/60 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-white"
              >
                Effacer
              </button>
            )}
          </div>
        </div>

        {/* Results Counter & State Indicator */}
        <div className="flex items-center justify-between text-xs text-zinc-400 mb-8 border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
            <span className="tracking-wider">
              {filteredProducts.length} pièce{filteredProducts.length > 1 ? 's' : ''} trouvée{filteredProducts.length > 1 ? 's' : ''}
            </span>
          </div>
          <span className="text-zinc-500 text-[11px] tracking-widest uppercase">
            Disponibilité à confirmer en boutique
          </span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-zinc-900/40 rounded-sm border border-white/5 p-8">
            <p className="text-zinc-300 font-serif-luxury text-lg mb-2">Aucune pièce ne correspond à votre recherche</p>
            <p className="text-xs text-zinc-500 mb-6">Essayez un autre mot-clé ou réinitialisez le filtre de catégorie.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('all');
              }}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-amber-300 border border-amber-300/30 hover:bg-amber-300/10 rounded-sm transition-colors cursor-pointer"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="card-luxury rounded-sm overflow-hidden flex flex-col justify-between group"
              >
                {/* Product Image Slot */}
                <div 
                  onClick={() => onSelectProduct(product)}
                  className="relative aspect-[4/3] bg-zinc-950 overflow-hidden cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111115] via-transparent to-transparent opacity-60" />
                  
                  {/* Subtle Quick View Overlay button on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white bg-black/80 backdrop-blur-md rounded-sm border border-white/20">
                      <Eye className="w-3.5 h-3.5 text-amber-300" />
                      Aperçu détaillé
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow">
                  
                  {/* Category unboxed metadata (anti-slop rule) */}
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-amber-400/90 font-medium mb-2">
                    <span>{product.categoryName}</span>
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                    <span className="text-zinc-400">Cotonou</span>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => onSelectProduct(product)}
                    className="font-serif-luxury text-lg font-bold text-white tracking-wide uppercase mb-2 group-hover:text-amber-200 transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4 line-clamp-2 flex-grow">
                    {product.shortDescription}
                  </p>

                  {/* Price display (strictly "Prix sur demande" as required) */}
                  <div className="pt-4 border-t border-white/5 flex items-baseline justify-between mb-5">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-zinc-500 block">Tarif</span>
                      <span className="text-sm font-semibold tracking-wider text-amber-300 font-serif-luxury">
                        {product.priceDisplay}
                      </span>
                    </div>
                    <span className="text-[11px] text-zinc-400 tracking-wide">
                      Devis WhatsApp
                    </span>
                  </div>

                  {/* Actions Dual CTA */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-[11px] font-medium tracking-wider uppercase text-zinc-200 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 rounded-sm transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Détails</span>
                    </button>

                    <a
                      href={getWhatsAppProductUrl(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-[11px] font-semibold tracking-wider uppercase text-zinc-950 bg-gradient-to-r from-amber-200 to-amber-400 hover:from-amber-300 hover:to-amber-500 rounded-sm transition-all duration-200 shadow-sm cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-zinc-950 fill-zinc-950/20" />
                      <span>Commander</span>
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
