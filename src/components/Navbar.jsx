import { useState, useEffect } from 'react';
import { Search, MessageSquare, Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/signageData';

export default function Navbar({ onNavigate, currentPath, onOpenSearch, onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Services', path: '/services' },
    { label: 'Our Work', path: '/our-work' },
    { label: 'LED Displays', path: '/products/led-video-walls' },
    { label: 'About', path: '/about' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#07112B] via-[#0b1b46] to-[#07112B] border-b border-[#00F0FF]/15 text-xs text-[#AAB3C5] py-1.5 px-4 text-center flex items-center justify-center gap-3">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse"></span>
        <span className="font-medium tracking-wide">
          Custom LED Signage <span className="text-[#00F0FF] mx-1">•</span> Digital Displays <span className="text-[#00F0FF] mx-1">•</span> Salem, Tamil Nadu
        </span>
        <span className="hidden md:inline text-xs text-[#00F0FF]/80 font-semibold border-l border-white/10 pl-3">
          10+ Years Crafting Light
        </span>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ease-in-out px-4 sm:px-6 lg:px-8 max-w-[96%] mx-auto rounded-b-2xl ${
          isScrolled
            ? 'glass-panel shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3 mt-1 border border-[#00F0FF]/20'
            : 'bg-transparent py-5 mt-0 border-b border-transparent'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="group flex items-center gap-2 text-decoration-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#07112B] to-[#111b3d] border border-[#00F0FF]/40 shadow-[0_0_15px_rgba(0,240,255,0.2)] group-hover:border-[#00F0FF] transition-all">
              <span className="font-display font-black text-xl text-[#00F0FF] group-hover:drop-shadow-[0_0_8px_#00F0FF] transition-all">
                V
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#25D366] ring-2 ring-[#050816] animate-pulse"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold tracking-wider text-lg text-white group-hover:text-[#00F0FF] transition-colors">
                VTECH <span className="text-[#00F0FF]">SIGNS</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#AAB3C5] uppercase -mt-1 font-medium">
                Salem • Signage Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`relative text-sm font-medium transition-all duration-200 py-1 ${
                    isActive
                      ? 'text-[#00F0FF] font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent shadow-[0_0_8px_#00F0FF]"></span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Search Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search Signage & Products"
              className="p-2.5 rounded-xl text-gray-300 hover:text-[#00F0FF] hover:bg-[#07112B] border border-white/5 hover:border-[#00F0FF]/30 transition-all duration-200"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Direct WhatsApp Action */}
            <a
              href="https://wa.me/?text=Hello%20Vtech%20Signs,%20I%20am%20looking%20for%20a%20signage%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Primary Get Quote Button */}
            <button
              onClick={onOpenQuote}
              className="relative group overflow-hidden px-5 py-2 rounded-xl text-xs font-bold tracking-wider uppercase text-black bg-[#00F0FF] hover:bg-white shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Get a Quote</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              className="p-2 text-gray-300 hover:text-[#00F0FF]"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-xl bg-[#07112B] text-[#00F0FF] border border-[#00F0FF]/30"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/10 glass-panel-elevated rounded-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium ${
                    currentPath === link.path
                      ? 'bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-black bg-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.4)]"
              >
                Get a Custom Quote
              </button>
              <a
                href="https://wa.me/?text=Hello%20Vtech%20Signs,%20I%20am%20looking%20for%20a%20signage%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-center text-xs font-semibold text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
