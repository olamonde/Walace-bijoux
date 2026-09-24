import React, { useState } from 'react';
import { MessageCircle, Menu, X, Phone, MapPin } from 'lucide-react';
import { BOUTIQUE_CONFIG, getWhatsAppGeneralUrl } from '../data/storeData';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#09090b]/95 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Brand Wordmark (Modular text / Ready for official logo image) */}
        <a 
          href="#accueil" 
          onClick={(e) => { e.preventDefault(); handleNavClick('accueil'); }}
          className="group flex flex-col justify-center"
        >
          <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-[0.18em] text-white group-hover:text-amber-300 transition-colors">
            {BOUTIQUE_CONFIG.brandName}
          </span>
          <span className="text-[10px] tracking-[0.35em] text-zinc-400 font-medium uppercase -mt-0.5">
            {BOUTIQUE_CONFIG.brandSubtitle} · {BOUTIQUE_CONFIG.contact.addressCity}
          </span>
        </a>

        {/* Zone 2: Navigation Links (Clean text, subtle hover, no pills) */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wider text-zinc-300">
          <button 
            onClick={() => handleNavClick('accueil')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Accueil
          </button>
          <button 
            onClick={() => handleNavClick('collections')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Collections
          </button>
          <button 
            onClick={() => handleNavClick('catalogue')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Boutique & Pièces
          </button>
          <button 
            onClick={() => handleNavClick('univers')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            L'Univers
          </button>
          <button 
            onClick={() => handleNavClick('apropos')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            À propos
          </button>
          <button 
            onClick={() => handleNavClick('localisation')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center space-x-3">
          <a
            href={getWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-zinc-950 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 rounded-sm shadow-sm transition-all duration-200 whitespace-nowrap active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 text-zinc-950 fill-zinc-950/20" />
            <span className="hidden sm:inline">Commander sur WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c10] border-b border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-4 text-base font-medium tracking-wide text-zinc-200">
            <button 
              onClick={() => handleNavClick('accueil')} 
              className="text-left py-1 hover:text-amber-300 transition-colors"
            >
              Accueil
            </button>
            <button 
              onClick={() => handleNavClick('collections')} 
              className="text-left py-1 hover:text-amber-300 transition-colors"
            >
              Collections
            </button>
            <button 
              onClick={() => handleNavClick('catalogue')} 
              className="text-left py-1 hover:text-amber-300 transition-colors"
            >
              Boutique & Pièces
            </button>
            <button 
              onClick={() => handleNavClick('univers')} 
              className="text-left py-1 hover:text-amber-300 transition-colors"
            >
              L'Univers WALACE
            </button>
            <button 
              onClick={() => handleNavClick('apropos')} 
              className="text-left py-1 hover:text-amber-300 transition-colors"
            >
              À propos
            </button>
            <button 
              onClick={() => handleNavClick('localisation')} 
              className="text-left py-1 hover:text-amber-300 transition-colors"
            >
              Localisation & Horaires
            </button>
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{BOUTIQUE_CONFIG.contact.addressCode} · {BOUTIQUE_CONFIG.contact.addressCity}, {BOUTIQUE_CONFIG.contact.addressCountry}</span>
            </div>
            <a href={`tel:${BOUTIQUE_CONFIG.contact.phoneRaw}`} className="flex items-center gap-2 text-zinc-300 hover:text-amber-300">
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{BOUTIQUE_CONFIG.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
