import Hero from '../components/Hero';
import SignSimulator from '../components/SignSimulator';
import NeonCustomizer from '../components/NeonCustomizer';
import VideoWallSection from '../components/VideoWallSection';
import ProductsSection from '../components/ProductsSection';
import PortfolioGallery from '../components/PortfolioGallery';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import HowItWorks from '../components/HowItWorks';
import IndustriesSection from '../components/IndustriesSection';
import WhyVtech from '../components/WhyVtech';
import LocationSection from '../components/LocationSection';
import FAQSection from '../components/FAQSection';
import CallToAction from '../components/CallToAction';

export default function HomePage({ onOpenQuote, onNavigate, onSelectCustomDesign }) {
  return (
    <div className="space-y-6">
      {/* 1. Hero Section */}
      <Hero onOpenQuote={onOpenQuote} onNavigate={onNavigate} />

      {/* 2. What Can We Create? Products Grid */}
      <ProductsSection onNavigate={onNavigate} />

      {/* 3. Signature Interactive Sign Simulator */}
      <SignSimulator onOpenQuote={onOpenQuote} />

      {/* 4. Interactive Neon Sign Customizer */}
      <NeonCustomizer onSelectDesignForQuote={onSelectCustomDesign} />

      {/* 5. LED Video Wall & Digital Screen Section */}
      <VideoWallSection onOpenQuote={onOpenQuote} onNavigate={onNavigate} />

      {/* 6. Built. Lit. Delivered. Portfolio with Lightbox */}
      <PortfolioGallery onOpenQuote={onOpenQuote} />

      {/* 7. Draggable Before / After Transformation Slider */}
      <BeforeAfterSlider />

      {/* 8. How It Works 5-Step Timeline */}
      <HowItWorks onOpenQuote={onOpenQuote} />

      {/* 9. Built for Businesses / Industries */}
      <IndustriesSection onNavigate={onNavigate} />

      {/* 10. Why Choose Vtech Signs */}
      <WhyVtech onOpenQuote={onOpenQuote} />

      {/* 11. Visit Vtech Signs Location (Palapatti, Salem) */}
      <LocationSection />

      {/* 12. Interactive FAQ Accordion */}
      <FAQSection onOpenQuote={onOpenQuote} />

      {/* 13. Dramatic Final CTA */}
      <CallToAction onOpenQuote={onOpenQuote} />
    </div>
  );
}
