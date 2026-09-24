import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, Check, ShieldCheck, MapPin, Share2 } from 'lucide-react';
import { Product, BOUTIQUE_CONFIG, getWhatsAppProductUrl, getWhatsAppReservationUrl } from '../data/storeData';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Reset active image on product change
  useEffect(() => {
    setActiveImageIndex(0);
    setCopiedLink(false);
  }, [product]);

  if (!product) return null;

  const currentImage = product.gallery[activeImageIndex] || product.image;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Container */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
        className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0e0e13] border border-white/15 rounded-sm shadow-2xl no-scrollbar flex flex-col md:flex-row"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-white bg-black/60 hover:bg-black/90 rounded-full border border-white/10 transition-colors cursor-pointer"
          aria-label="Fermer la fiche produit"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Gallery & Main Image (Sticky on desktop) */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-black/40 border-b md:border-b-0 md:border-r border-white/10">
          <div>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-zinc-950 border border-white/10 mb-4">
              <img
                src={currentImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-widest text-zinc-400 bg-black/70 px-2.5 py-1 rounded-sm border border-white/10">
                Vue {activeImageIndex + 1} / {product.gallery.length}
              </div>
            </div>

            {/* Gallery Thumbnail Selector */}
            {product.gallery.length > 1 && (
              <div className="flex gap-2">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-16 rounded-sm overflow-hidden border transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-amber-400 ring-1 ring-amber-400/50 scale-102'
                        : 'border-white/15 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} vue ${idx + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Boutique Trust Callout */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Visible au showroom à Cotonou</span>
            </div>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Lien copié' : 'Partager'}</span>
            </button>
          </div>
        </div>

        {/* Right: Contiguous Purchase & Inquiries Module */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Unboxed Metadata (Zero pill discipline) */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold mb-2">
              <span>{product.categoryName}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>WALACE SHINE UP</span>
            </div>

            {/* Product Title */}
            <h2 id="modal-product-title" className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-wide text-white uppercase mb-3">
              {product.name}
            </h2>

            {/* Price & Availability Banner */}
            <div className="p-4 bg-zinc-900/60 rounded-sm border border-white/10 mb-6">
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-xs uppercase tracking-wider text-zinc-400">Tarification</span>
                <span className="text-lg font-bold tracking-wider text-amber-300 font-serif-luxury">
                  {product.priceDisplay}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{product.availability}</span>
              </div>
            </div>

            {/* Full Editorial Description */}
            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-[0.16em] text-zinc-400 font-medium mb-2">
                Description de la pièce
              </h3>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            {/* Technical Specifications */}
            <div className="mb-8 border-t border-white/10 pt-4">
              <h3 className="text-xs uppercase tracking-[0.16em] text-zinc-400 font-medium mb-3">
                Caractéristiques & Finitions
              </h3>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
                <div>
                  <dt className="text-zinc-500 uppercase tracking-wider text-[10px]">Matière / Alliage</dt>
                  <dd className="text-zinc-200 font-medium">{product.specs.metalOrMaterial}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 uppercase tracking-wider text-[10px]">Finition</dt>
                  <dd className="text-zinc-200 font-medium">{product.specs.finish}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 uppercase tracking-wider text-[10px]">Sertissage / Détails</dt>
                  <dd className="text-zinc-200 font-medium">{product.specs.stonesOrDetail}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 uppercase tracking-wider text-[10px]">Style</dt>
                  <dd className="text-zinc-200 font-medium">{product.specs.style}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-6 border-t border-white/10">
            {/* Primary WhatsApp Order Button (Pre-filled message per requirement) */}
            <a
              href={getWhatsAppProductUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-zinc-950 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 rounded-sm shadow-xl transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-zinc-950 fill-zinc-950/20" />
              <span>Demander ce produit sur WhatsApp</span>
            </a>

            {/* Secondary Option: Direct Reservation */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={getWhatsAppReservationUrl(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-[11px] font-medium tracking-wider uppercase text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm transition-colors text-center"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                <span>Réserver</span>
              </a>

              <a
                href={`tel:${BOUTIQUE_CONFIG.contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-[11px] font-medium tracking-wider uppercase text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm transition-colors text-center"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>Appeler la boutique</span>
              </a>
            </div>

            <p className="text-[11px] text-center text-zinc-500 pt-1">
              Réponse rapide garantie par l'équipe WALACE SHINE UP à Cotonou.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
