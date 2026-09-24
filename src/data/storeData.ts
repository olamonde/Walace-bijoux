/**
 * WALACE SHINE UP BIJOUTERIE — Configuration & Données Modifiables
 * Ce fichier centralise toutes les informations de la boutique.
 * Vous pouvez facilement modifier les textes, numéros, réseaux sociaux,
 * catégories et ajouter les futures vraies photographies de vos produits ici.
 */

// Importation des visuels générés par défaut (remplaçables par vos fichiers réels)
import heroImg from '../assets/images/hero_walace_jewelry_1790239511954.jpg';
import catIceImg from '../assets/images/cat_ice_jewelry_1790239532660.jpg';
import catWatchImg from '../assets/images/cat_watches_luxury_1790239556073.jpg';
import boutiqueImg from '../assets/images/boutique_interior_1790239569052.jpg';

export interface BoutiqueConfig {
  brandName: string;
  brandSubtitle: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroDescription: string;
  aboutText: string;
  aboutHighlights: Array<{
    title: string;
    description: string;
  }>;
  contact: {
    phoneDisplay: string;
    phoneRaw: string;
    whatsAppNumber: string; // international format without + or spaces for wa.me
    addressCode: string;
    addressCity: string;
    addressCountry: string;
    googleMapsUrl: string;
    openingHours: string;
  };
  socials: {
    instagram: { handle: string; url: string };
    facebook: { handle: string; url: string };
    tiktok: { handle: string; url: string };
  };
  assets: {
    heroImage: string;
    boutiqueShowcase: string;
    logoPlaceholderText: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  image: string;
  featuredCount?: string;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  priceDisplay: string; // Pour le prototype : "Prix sur demande"
  availability: string;
  isFeatured?: boolean;
  isNewArrival?: boolean;
  image: string;
  gallery: string[];
  specs: {
    metalOrMaterial: string;
    finish: string;
    stonesOrDetail: string;
    style: string;
  };
}

export const BOUTIQUE_CONFIG: BoutiqueConfig = {
  brandName: "WALACE SHINE UP",
  brandSubtitle: "BIJOUTERIE",
  tagline: "L'art du bijou d'exception & du style affirmé",
  heroHeadline: "SHINE WITH CONFIDENCE",
  heroSubheadline: "Bijoux, montres & accessoires pour affirmer votre style.",
  heroDescription: "Découvrez l'univers WALACE SHINE UP à Cotonou.",
  aboutText:
    "WALACE SHINE UP est une boutique basée à Cotonou dédiée aux bijoux, montres et accessoires de style. Notre univers associe élégance, caractère et modernité afin de proposer des pièces qui permettent à chacun d'affirmer son style.",
  aboutHighlights: [
    {
      title: "Éclat & Finition ICE",
      description: "Une sélection minutieuse de pièces scintillantes taillées pour capturer la lumière avec prestance."
    },
    {
      title: "Horlogerie & Caractère",
      description: "Des montres aux designs affirmés pour rehausser votre présence au quotidien et lors des grands moments."
    },
    {
      title: "Conseil Privilégié à Cotonou",
      description: "Un accueil attentif et un service WhatsApp réactif pour répondre à toutes vos demandes de prix et réservations."
    }
  ],
  contact: {
    phoneDisplay: "+229 01 91 96 25 82",
    phoneRaw: "+2290191962582",
    whatsAppNumber: "2290191962582",
    addressCode: "9FM8+6GG",
    addressCity: "Cotonou",
    addressCountry: "Bénin",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=9FM8%2B6GG+Cotonou+Benin",
    openingHours: "Lundi au Samedi : 09h00 - 20h00"
  },
  socials: {
    instagram: {
      handle: "@walace_shine_up",
      url: "https://instagram.com" // Placeholder à remplacer par le vrai lien
    },
    facebook: {
      handle: "WALACE SHINE UP BIJOUTERIE",
      url: "https://facebook.com" // Placeholder à remplacer par le vrai lien
    },
    tiktok: {
      handle: "@walaceshineup",
      url: "https://tiktok.com" // Placeholder à remplacer par le vrai lien
    }
  },
  assets: {
    heroImage: heroImg,
    boutiqueShowcase: boutiqueImg,
    logoPlaceholderText: "WALACE SHINE UP"
  }
};

export const CATEGORIES: Category[] = [
  {
    id: "ice-bijoux",
    name: "ICE & BIJOUX",
    slug: "ice-bijoux",
    shortDescription: "Chaînes serties, pendentifs signatures, bagues & bracelets éclatants.",
    image: catIceImg,
    featuredCount: "Pièces exclusives"
  },
  {
    id: "montres",
    name: "MONTRES",
    slug: "montres",
    shortDescription: "Garde-temps d'exception, cadrans ciselés et montres serties haute brillance.",
    image: catWatchImg,
    featuredCount: "Horlogerie de prestige"
  },
  {
    id: "parfums",
    name: "PARFUMS",
    slug: "parfums",
    shortDescription: "Sillages intenses et fragrances captivantes aux notes boisées et ambrées.",
    image: heroImg,
    featuredCount: "Signature olfactive"
  },
  {
    id: "ceintures",
    name: "CEINTURES",
    slug: "ceintures",
    shortDescription: "Boucles imposantes de prestige et cuirs soigneusement confectionnés.",
    image: catIceImg,
    featuredCount: "Maintien & allure"
  },
  {
    id: "casquettes",
    name: "CASQUETTES",
    slug: "casquettes",
    shortDescription: "Headwear haut de gamme, broderies soignées et coupes modernes.",
    image: heroImg,
    featuredCount: "Street luxury"
  },
  {
    id: "accessoires",
    name: "ACCESSOIRES",
    slug: "accessoires",
    shortDescription: "Lunettes solaires statement, porte-cartes et finitions de style.",
    image: catWatchImg,
    featuredCount: "Détails essentiels"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-ice-chain-01",
    name: "ICE CHAIN CUBAN LINK",
    categoryId: "ice-bijoux",
    categoryName: "ICE & BIJOUX",
    shortDescription: "Chaîne Cuban Link sertie façon pavé avec fermoir sécurisé double clip.",
    fullDescription: "Une pièce maîtresse emblématique de l'univers WALACE SHINE UP. Conçue avec un maillage cubain dense et un sertissage minutieux qui reflète intensément la lumière à chaque mouvement.",
    priceDisplay: "Prix sur demande",
    availability: "Disponible en boutique (à confirmer)",
    isFeatured: true,
    isNewArrival: true,
    image: catIceImg,
    gallery: [catIceImg, heroImg],
    specs: {
      metalOrMaterial: "Alliage premium rhodié / Argenté",
      finish: "Polissage miroir haute intensité",
      stonesOrDetail: "Sertissage pavé micro-oxydes facettés",
      style: "Urban Luxury / Hip-Hop Prestige"
    }
  },
  {
    id: "prod-watch-01",
    name: "PREMIUM FROSTED TIMEPIECE",
    categoryId: "montres",
    categoryName: "MONTRES",
    shortDescription: "Montre de luxe avec lunette et bracelet entièrement incrustés de cristaux étincelants.",
    fullDescription: "L'expression ultime du luxe horloger contemporain. Boîtier structuré avec lunette sculptée, cadran texturé et finitions étincelantes pour affirmer un statut de premier plan.",
    priceDisplay: "Prix sur demande",
    availability: "Disponible en boutique (à confirmer)",
    isFeatured: true,
    isNewArrival: true,
    image: catWatchImg,
    gallery: [catWatchImg, heroImg],
    specs: {
      metalOrMaterial: "Acier inoxydable 316L / Finition argentée",
      finish: "Glacier Ice Iced-Out intégral",
      stonesOrDetail: "Cadran chronographe & index sertis",
      style: "High Roller / Horlogerie Statement"
    }
  },
  {
    id: "prod-ring-01",
    name: "STATEMENT RING SOLITAIRE ICE",
    categoryId: "ice-bijoux",
    categoryName: "ICE & BIJOUX",
    shortDescription: "Chevalière sculptée avec centre diamanté et motif latéral travaillé.",
    fullDescription: "Une bague de caractère apportant une présence royale immédiate à la main. Le contraste entre le volume métallique et les pierres brillantes illustre le savoir-faire WALACE SHINE UP.",
    priceDisplay: "Prix sur demande",
    availability: "Disponible en boutique (à confirmer)",
    isFeatured: true,
    image: catIceImg,
    gallery: [catIceImg],
    specs: {
      metalOrMaterial: "Alliage de bijouterie haute résistance",
      finish: "Argent poli & accents métalliques",
      stonesOrDetail: "Pavage central haute réfraction",
      style: "Royal & Masculin"
    }
  },
  {
    id: "prod-bracelet-01",
    name: "LUXURY BRACELET TENNIS CUBAN",
    categoryId: "ice-bijoux",
    categoryName: "ICE & BIJOUX",
    shortDescription: "Bracelet scintillant épousant le poignet avec un tombé fluide et éclatant.",
    fullDescription: "Pensé pour être porté seul ou associé à une montre de notre sélection, ce bracelet offre une brillance continue et un fermoir bijoutier discret et sécurisé.",
    priceDisplay: "Prix sur demande",
    availability: "Disponible en boutique (à confirmer)",
    isFeatured: true,
    image: heroImg,
    gallery: [heroImg, catIceImg],
    specs: {
      metalOrMaterial: "Finition argentée / Platine touch",
      finish: "Lignes ciselées ultra-brillantes",
      stonesOrDetail: "Pierres d'éclat alignées à la main",
      style: "Élégance nocturne & urbaine"
    }
  },
  {
    id: "prod-pendant-01",
    name: "SIGNATURE PENDANT MEDALLION",
    categoryId: "ice-bijoux",
    categoryName: "ICE & BIJOUX",
    shortDescription: "Pendentif médaillon ciselé avec bélière sertie pour chaîne imposante.",
    fullDescription: "Un pendentif signature pensé pour habiller nos chaînes phares. Relief sculptural et brillance intense qui incarnent l'esprit d'exclusivité WALACE SHINE UP.",
    priceDisplay: "Prix sur demande",
    availability: "Disponible en boutique (à confirmer)",
    isFeatured: false,
    image: catIceImg,
    gallery: [catIceImg, heroImg],
    specs: {
      metalOrMaterial: "Alliage métallique noble",
      finish: "Double galvanisation protectrice",
      stonesOrDetail: "Bélière et contour sertis",
      style: "Statement Exclusive"
    }
  },
  {
    id: "prod-watch-02",
    name: "ROYAL CHRONOGRAPH GOLD & NOIR",
    categoryId: "montres",
    categoryName: "MONTRES",
    shortDescription: "Chronographe au boîtier doré brossé et cadran noir profond.",
    fullDescription: "Le mariage noble de l'or champagne et de l'ébène sombre. Un modèle pour les amateurs d'élégance intemporelle et de présence discrète mais indéniable.",
    priceDisplay: "Prix sur demande",
    availability: "Disponible en boutique (à confirmer)",
    isFeatured: true,
    image: catWatchImg,
    gallery: [catWatchImg],
    specs: {
      metalOrMaterial: "Boîtier alliage lourd & verre saphir",
      finish: "Or champagne brossé & poli",
      stonesOrDetail: "Sous-cadrans multifonctions",
      style: "Exécutif & Prestige"
    }
  },
  {
    id: "prod-parfum-01",
    name: "PARFUM EXTRAIT NOIR ROYAL",
    categoryId: "parfums",
    categoryName: "PARFUMS",
    shortDescription: "Extrait de parfum au sillage puissant : oud précieux, ambre doré et cuir noble.",
    fullDescription: "Une signature olfactive exclusive sélectionnée par WALACE SHINE UP pour compléter une allure impeccable. Tenue prolongée et sillage envoûtant.",
    priceDisplay: "Prix sur demande",
    availability: "Disponible en boutique (à confirmer)",
    isFeatured: true,
    image: heroImg,
    gallery: [heroImg],
    specs: {
      metalOrMaterial: "Flacon en verre lourd fumé & capot doré",
      finish: "Gravure sérigraphiée dorée",
      stonesOrDetail: "Notes : Oud, Bois de cèdre, Cuir, Ambre",
      style: "Sillage de Prestige"
    }
  },
  {
    id: "prod-belt-01",
    name: "PREMIUM BELT BUCKLE STATEMENT",
    categoryId: "ceintures",
    categoryName: "CEINTURES",
    shortDescription: "Ceinture en cuir pleine fleur avec boucle métallique sculptée.",
    fullDescription: "Accessoire indispensable de la silhouette moderne. Cuir de haute qualité résistant et boucle métallique brossée qui capte le regard avec assurance.",
    priceDisplay: "Prix sur demande",
    availability: "Disponible en boutique (à confirmer)",
    isFeatured: false,
    image: catIceImg,
    gallery: [catIceImg],
    specs: {
      metalOrMaterial: "Cuir véritable & boucle alliage massif",
      finish: "Boucle argent chromé ou or mat",
      stonesOrDetail: "Finition bordures lissées main",
      style: "Luxe masculin moderne"
    }
  },
  {
    id: "prod-cap-01",
    name: "SIGNATURE LUXURY HEADWEAR",
    categoryId: "casquettes",
    categoryName: "CASQUETTES",
    shortDescription: "Casquette structurée aux finitions velours et écusson métallique chromé.",
    fullDescription: "Une touche streetwear haut de gamme conçue pour se marier parfaitement avec vos bijoux et chaînes WALACE SHINE UP. Tissus sélectionnés et coupe premium.",
    priceDisplay: "Prix sur demande",
    availability: "Disponible en boutique (à confirmer)",
    isFeatured: false,
    image: heroImg,
    gallery: [heroImg],
    specs: {
      metalOrMaterial: "Tissu lourd haute densité & visière structurée",
      finish: "Écusson métallique & fermeture gravée",
      stonesOrDetail: "Broderie ton sur ton haut relief",
      style: "Streetwear Prestige"
    }
  },
  {
    id: "prod-earrings-01",
    name: "ICE STUD BOUCLES D'OREILLES",
    categoryId: "ice-bijoux",
    categoryName: "ICE & BIJOUX",
    shortDescription: "Puces d'oreilles carrées étincelantes montées sur 4 griffes solides.",
    fullDescription: "L'éclat pur et percutant au niveau du visage. Conçues avec des tiges hypoallergéniques et des poussoirs de sécurité pour un confort quotidien.",
    priceDisplay: "Prix sur demande",
    availability: "Disponible en boutique (à confirmer)",
    isFeatured: false,
    image: catIceImg,
    gallery: [catIceImg],
    specs: {
      metalOrMaterial: "Argenté rhodié anti-ternissement",
      finish: "Sertissage 4 griffes sécurisées",
      stonesOrDetail: "Cristal taillé brillant haute clarté",
      style: "Indispensable Quotidien & Soirée"
    }
  },
  {
    id: "prod-acc-01",
    name: "LUNETTES LUXURY SHADES METALLIC",
    categoryId: "accessoires",
    categoryName: "ACCESSOIRES",
    shortDescription: "Monture sculptée aux branches ornées de détails métalliques géométriques.",
    fullDescription: "Verres teintés haute protection avec une monture contemporaine qui affirme votre charisme sous le soleil de Cotonou.",
    priceDisplay: "Prix sur demande",
    availability: "Disponible en boutique (à confirmer)",
    isFeatured: false,
    image: catWatchImg,
    gallery: [catWatchImg],
    specs: {
      metalOrMaterial: "Acétate & inserts métalliques dorés",
      finish: "Verres UV400 traités anti-reflet",
      stonesOrDetail: "Logo gravé sur branches",
      style: "Solaire Statement"
    }
  }
];

/**
 * Génère le lien WhatsApp officiel prérempli pour un produit spécifique
 */
export function getWhatsAppProductUrl(product: Product): string {
  const number = BOUTIQUE_CONFIG.contact.whatsAppNumber;
  const message = `Bonjour WALACE SHINE UP, je suis intéressé(e) par la pièce : *${product.name}* (${product.categoryName}). Pouvez-vous me communiquer le prix et les informations disponibles ?`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Génère le lien WhatsApp officiel prérempli pour une réservation en boutique
 */
export function getWhatsAppReservationUrl(product: Product): string {
  const number = BOUTIQUE_CONFIG.contact.whatsAppNumber;
  const message = `Bonjour WALACE SHINE UP, je souhaite réserver la pièce *${product.name}* pour un passage dans votre boutique à Cotonou.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Génère le lien WhatsApp général pour un renseignement
 */
export function getWhatsAppGeneralUrl(subject?: string): string {
  const number = BOUTIQUE_CONFIG.contact.whatsAppNumber;
  const message = subject
    ? `Bonjour WALACE SHINE UP, je vous contacte concernant : ${subject}.`
    : `Bonjour WALACE SHINE UP, je souhaite me renseigner sur vos collections disponibles dans votre boutique à Cotonou.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Photos et Vitrines de l'Univers Boutique (placeholders modulaires)
 */
export const BOUTIQUE_SHOWCASE_ITEMS = [
  {
    id: "showcase-1",
    title: "Vitrines & Joyaux ICE",
    subtitle: "Sélection sous éclairage haute précision",
    image: catIceImg
  },
  {
    id: "showcase-2",
    title: "Espace Garde-Temps",
    subtitle: "Montres d'exception et finitions givrées",
    image: catWatchImg
  },
  {
    id: "showcase-3",
    title: "Ambiance du Showroom",
    subtitle: "Un cadre feutré et moderne à Cotonou",
    image: boutiqueImg
  },
  {
    id: "showcase-4",
    title: "Parfums & Accessoires",
    subtitle: "Détails de caractère pour parfaire votre style",
    image: heroImg
  }
];
