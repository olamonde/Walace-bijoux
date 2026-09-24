import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, MessageCircle, Phone, Clock } from 'lucide-react';
import { BOUTIQUE_CONFIG, getWhatsAppGeneralUrl } from '../data/storeData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${BOUTIQUE_CONFIG.contact.addressCode}, ${BOUTIQUE_CONFIG.contact.addressCity}, ${BOUTIQUE_CONFIG.contact.addressCountry}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localisation" className="py-24 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-300 font-medium mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Showroom & Visite</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.08em] text-white uppercase mb-4">
            Retrouvez-Nous à Cotonou
          </h2>
          <div className="w-12 h-px bg-amber-400/40 mx-auto mb-4" />
          <p className="text-sm sm:text-base text-zinc-400 font-light tracking-wide">
            Venez essayer nos créations et découvrir nos pièces d'exception au cœur de Cotonou.
          </p>
        </div>

        {/* Location Grid: Details & Map Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Contact & Practical Details Card */}
          <div className="lg:col-span-5 card-luxury p-8 sm:p-10 rounded-sm flex flex-col justify-between">
            <div className="space-y-8">
              
              {/* Address Block */}
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-amber-400 font-semibold block mb-2">
                  Adresse & Repère
                </span>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-white tracking-wide">
                      {BOUTIQUE_CONFIG.contact.addressCode}
                    </h3>
                    <p className="text-sm text-zinc-300 font-light mt-1">
                      {BOUTIQUE_CONFIG.contact.addressCity}, {BOUTIQUE_CONFIG.contact.addressCountry}
                    </p>
                  </div>

                  <button
                    onClick={handleCopyAddress}
                    className="p-2.5 rounded-sm bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-amber-300 border border-white/10 transition-colors cursor-pointer"
                    title="Copier le code adresse"
                    aria-label="Copier le code adresse"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <p className="text-[11px] text-emerald-400 mt-2">Code copié dans le presse-papier !</p>
                )}
              </div>

              {/* Hours Block */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-medium">
                    Horaires d'ouverture
                  </span>
                </div>
                <p className="text-sm text-zinc-200 font-medium pl-7">
                  {BOUTIQUE_CONFIG.contact.openingHours}
                </p>
                <p className="text-xs text-zinc-500 font-light pl-7 mt-1">
                  Accueil sans interruption & rendez-vous privé
                </p>
              </div>

              {/* Phone / WhatsApp Block */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-medium">
                    Téléphone & WhatsApp
                  </span>
                </div>
                <a
                  href={`tel:${BOUTIQUE_CONFIG.contact.phoneRaw}`}
                  className="text-lg font-serif-luxury text-amber-300 hover:text-amber-200 transition-colors pl-7 block font-bold"
                >
                  {BOUTIQUE_CONFIG.contact.phoneDisplay}
                </a>
              </div>

            </div>

            {/* Direct Directions Actions */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <a
                href={BOUTIQUE_CONFIG.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-950 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 rounded-sm shadow-md transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-zinc-950" />
                <span>Ouvrir dans Google Maps</span>
              </a>

              <a
                href={getWhatsAppGeneralUrl("Itinéraire pour venir à la boutique")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-amber-400" />
                <span>Demander l'itinéraire sur WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right: Architectural Map Preview Graphic */}
          <div className="lg:col-span-7 relative min-h-[380px] rounded-sm overflow-hidden border border-white/10 bg-[#121217] flex flex-col justify-between p-6 sm:p-8">
            {/* Subtle Stylized Dark Cartography Background Grid */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, rgba(212,175,55,0.15) 0%, transparent 60%), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                backgroundSize: '100% 100%, 32px 32px, 32px 32px'
              }}
            />

            {/* Top Bar of the Map Card */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                <span className="text-xs uppercase tracking-[0.18em] text-zinc-300 font-medium">
                  Cotonou · Bénin
                </span>
              </div>
              <span className="text-[11px] text-zinc-500 font-mono">
                COORD: 9FM8+6GG
              </span>
            </div>

            {/* Center Focal Point: Luxury Boutique Pin */}
            <div className="relative z-10 my-auto text-center py-10">
              <div className="relative inline-flex items-center justify-center mb-4">
                <div className="absolute w-20 h-20 rounded-full bg-amber-400/10 animate-pulse" />
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 text-zinc-950 flex items-center justify-center shadow-2xl">
                  <MapPin className="w-7 h-7 fill-zinc-950" />
                </div>
              </div>

              <h4 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white tracking-widest uppercase">
                {BOUTIQUE_CONFIG.brandName}
              </h4>
              <p className="text-xs uppercase tracking-[0.25em] text-amber-300/90 font-medium mt-1">
                {BOUTIQUE_CONFIG.brandSubtitle}
              </p>
              <p className="text-xs text-zinc-400 mt-2">
                {BOUTIQUE_CONFIG.contact.addressCode} · Cotonou
              </p>
            </div>

            {/* Bottom Bar: Quick Notice */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-2">
              <span>L'adresse officielle complète sera mise à jour dès confirmation définitive.</span>
              <a
                href={BOUTIQUE_CONFIG.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-amber-200 underline underline-offset-4 tracking-wider uppercase text-[11px] font-semibold"
              >
                Voir sur le plan satellite
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
