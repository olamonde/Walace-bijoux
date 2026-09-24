import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, MapPin, Phone, HelpCircle } from 'lucide-react';
import { BOUTIQUE_CONFIG, getWhatsAppGeneralUrl } from '../data/storeData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Quick Inquiry Popover */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-3rem)] rounded-sm bg-[#111116] border border-white/15 shadow-2xl p-5 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-start justify-between pb-3 border-b border-white/10">
            <div>
              <p className="font-serif-luxury text-sm font-bold text-white tracking-wider uppercase">
                {BOUTIQUE_CONFIG.brandName}
              </p>
              <p className="text-[11px] text-amber-300">
                Service Client WhatsApp · Cotonou
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white p-1"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-zinc-300 font-light my-3 leading-relaxed">
            Bonjour ! Comment pouvons-nous vous renseigner aujourd'hui ?
          </p>

          <div className="space-y-2">
            <a
              href={getWhatsAppGeneralUrl("Demande de prix pour une pièce")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-200 hover:text-white transition-colors"
            >
              <span className="flex items-center gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Demander un prix / disponibilité</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>

            <a
              href={getWhatsAppGeneralUrl("Passage en boutique à Cotonou")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-200 hover:text-white transition-colors"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Venir à la boutique (9FM8+6GG)</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>

            <a
              href={`tel:${BOUTIQUE_CONFIG.contact.phoneRaw}`}
              className="w-full flex items-center justify-between p-2.5 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-200 hover:text-white transition-colors"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Appel direct (+229 01 91 96 25 82)</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-center">
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 rounded-sm"
            >
              <MessageCircle className="w-4 h-4 fill-zinc-950/20" />
              <span>Ouvrir la conversation</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-emerald-300/30"
        aria-label="Contacter WALACE SHINE UP sur WhatsApp"
      >
        {/* Subtle Ping Animation Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white/20" />

        {/* Small Active Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-black" />
      </button>

    </div>
  );
};
