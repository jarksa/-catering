import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import QuoteWizard from './components/QuoteWizard';

// Page Views
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';
import FAQSection from './components/FAQSection';
import PortfolioGallery from './components/PortfolioGallery';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [prefillQuoteData, setPrefillQuoteData] = useState(null);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigation handler
  const handleNavigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open quote modal with optional prefill data (e.g. from neon customizer)
  const handleOpenQuote = (data = null) => {
    if (data) {
      setPrefillQuoteData(data);
    }
    // Also navigate to quote page or open overlay
    handleNavigate('/get-a-quote');
  };

  const handleSelectCustomDesign = (designData) => {
    setPrefillQuoteData(designData);
    handleNavigate('/get-a-quote');
  };

  // Parse path for sub-routes
  const renderCurrentView = () => {
    const path = currentPath.toLowerCase();

    // 1. Home
    if (path === '/' || path === '') {
      return (
        <HomePage
          onOpenQuote={() => handleOpenQuote()}
          onNavigate={handleNavigate}
          onSelectCustomDesign={handleSelectCustomDesign}
        />
      );
    }

    // 2. Products subroutes
    if (path.startsWith('/products')) {
      const parts = path.split('/').filter(Boolean);
      const slug = parts[1] || 'all';
      return (
        <ProductDetailPage
          slug={slug}
          onNavigate={handleNavigate}
          onOpenQuote={() => handleOpenQuote({ signType: slug })}
        />
      );
    }

    // 3. Services subroutes
    if (path.startsWith('/services')) {
      const parts = path.split('/').filter(Boolean);
      const slug = parts[1] || null;
      return (
        <ServicesPage
          slug={slug}
          onNavigate={handleNavigate}
          onOpenQuote={() => handleOpenQuote()}
        />
      );
    }

    // 4. Our Work / Portfolio
    if (path === '/our-work' || path.startsWith('/our-work')) {
      return (
        <div className="pt-24">
          <PortfolioGallery onOpenQuote={() => handleOpenQuote()} />
        </div>
      );
    }

    // 5. Industries subroutes
    if (path.startsWith('/industries')) {
      const parts = path.split('/').filter(Boolean);
      const slug = parts[1] || null;
      return (
        <IndustriesPage
          slug={slug}
          onNavigate={handleNavigate}
          onOpenQuote={() => handleOpenQuote()}
        />
      );
    }

    // 6. About
    if (path === '/about') {
      return (
        <AboutPage
          onNavigate={handleNavigate}
          onOpenQuote={() => handleOpenQuote()}
        />
      );
    }

    // 7. FAQ
    if (path === '/faq') {
      return (
        <div className="pt-24 pb-12">
          <FAQSection onOpenQuote={() => handleOpenQuote()} />
        </div>
      );
    }

    // 8. Contact
    if (path === '/contact') {
      return <ContactPage />;
    }

    // 9. Get a quote
    if (path === '/get-a-quote') {
      return (
        <QuotePage
          prefillData={prefillQuoteData}
          onNavigate={handleNavigate}
        />
      );
    }

    // Default fallback to HomePage
    return (
      <HomePage
        onOpenQuote={() => handleOpenQuote()}
        onNavigate={handleNavigate}
        onSelectCustomDesign={handleSelectCustomDesign}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050816] text-white selection:bg-[#00F0FF] selection:text-black">
      {/* Desktop Custom Glowing Cursor */}
      <CustomCursor />

      {/* Main Glass Navbar */}
      <Navbar
        onNavigate={handleNavigate}
        currentPath={currentPath}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Dynamic View Body */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Dark Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Bottom-Right WhatsApp Button */}
      <WhatsAppButton />

      {/* Site-Wide Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
