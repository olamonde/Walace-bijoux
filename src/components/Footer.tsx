import React from 'react';
import { MessageCircle, Phone, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { BOUTIQUE_CONFIG, getWhatsAppGeneralUrl } from '../data/storeData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] text-zinc-300 border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-[0.2em] text-white uppercase">
                {BOUTIQUE_CONFIG.brandName}
              </span>
              <span className="text-xs uppercase tracking-[0.35em] text-amber-400 font-semibold -mt-0.5">
                {BOUTIQUE_CONFIG.brandSubtitle}
              </span>
            </div>

            <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-sm pt-2">
              Bijoux • Montres • Accessoires
            </p>
            <p className="text-xs text-zinc-500 font-light max-w-sm">
              Votre référence de joaillerie audacieuse, de pièces ICE scintillantes et de montres de caractère à Cotonou.
            </p>

            {/* Social Media Placeholders (Ready for confirmed handles) */}
            <div className="pt-4 flex items-center space-x-3">
              <a
                href={BOUTIQUE_CONFIG.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-amber-300 border border-white/10 flex items-center justify-center transition-colors"
                title={`Instagram : ${BOUTIQUE_CONFIG.socials.instagram.handle}`}
                aria-label="Page Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={BOUTIQUE_CONFIG.socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-amber-300 border border-white/10 flex items-center justify-center transition-colors"
                title={`Facebook : ${BOUTIQUE_CONFIG.socials.facebook.handle}`}
                aria-label="Page Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* TikTok Icon placeholder SVG */}
              <a
                href={BOUTIQUE_CONFIG.socials.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-amber-300 border border-white/10 flex items-center justify-center transition-colors"
                title={`TikTok : ${BOUTIQUE_CONFIG.socials.tiktok.handle}`}
                aria-label="Page TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.02 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-white font-semibold block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <button 
                  onClick={() => onNavigate('accueil')} 
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('collections')} 
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Collections
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('catalogue')} 
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Boutique & Pièces Sélectionnées
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('univers')} 
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  L'Univers WALACE
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('apropos')} 
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  À Propos de la Bijouterie
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('localisation')} 
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Localisation & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Boutique Info (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-white font-semibold block mb-4">
              Showroom & Contact
            </span>
            
            <div className="space-y-3 text-xs text-zinc-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-zinc-200 font-medium">{BOUTIQUE_CONFIG.contact.addressCode}</p>
                  <p>{BOUTIQUE_CONFIG.contact.addressCity}, {BOUTIQUE_CONFIG.contact.addressCountry}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${BOUTIQUE_CONFIG.contact.phoneRaw}`} className="hover:text-amber-300 transition-colors text-zinc-200 font-medium">
                  {BOUTIQUE_CONFIG.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={getWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors text-zinc-200 font-medium underline underline-offset-4"
                >
                  WhatsApp Officiel (+229 01 91 96 25 82)
                </a>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-amber-200 to-amber-400 hover:from-amber-300 hover:to-amber-500 rounded-sm transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-zinc-950 fill-zinc-950/20" />
                <span>Nous contacter sur WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} {BOUTIQUE_CONFIG.brandName} {BOUTIQUE_CONFIG.brandSubtitle}. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <span>Prototype officiel pour présentation</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
