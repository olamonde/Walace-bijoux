import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CollectionsSection } from './components/CollectionsSection';
import { ProductCatalog } from './components/ProductCatalog';
import { BoutiqueShowcase } from './components/BoutiqueShowcase';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Product } from './data/storeData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromHeroOrCollections = (categoryId: string) => {
    setSelectedCategory(categoryId);
    scrollToSection('catalogue');
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#FAFAFA] flex flex-col selection:bg-amber-400/30 selection:text-amber-100">
      
      {/* Top Bar */}
      <Header onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExplore={() => scrollToSection('catalogue')}
          onContact={() => scrollToSection('localisation')}
        />

        {/* Collections Section */}
        <CollectionsSection
          onSelectCategory={handleSelectCategoryFromHeroOrCollections}
        />

        {/* Selected Products Catalog */}
        <ProductCatalog
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onSelectProduct={setSelectedProduct}
        />

        {/* Immersive Boutique Showcase ("L'Univers WALACE SHINE UP") */}
        <BoutiqueShowcase />

        {/* About Section ("À Propos de WALACE SHINE UP") */}
        <AboutSection />

        {/* Location & Directions ("Retrouvez-Nous à Cotonou") */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

    </div>
  );
}
