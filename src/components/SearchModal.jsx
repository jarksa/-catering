import { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Sparkles, Layers, Wrench, Building2, HelpCircle } from 'lucide-react';
import { PRODUCTS, SERVICES, INDUSTRIES, FAQS } from '../data/signageData';

export default function SearchModal({ isOpen, onClose, onNavigate }) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const query = searchTerm.toLowerCase().trim();

  const matchedProducts = PRODUCTS.filter(
    (p) => p.name.toLowerCase().includes(query) || p.shortDesc.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
  );

  const matchedServices = SERVICES.filter(
    (s) => s.title.toLowerCase().includes(query) || s.description.toLowerCase().includes(query)
  );

  const matchedIndustries = INDUSTRIES.filter(
    (i) => i.name.toLowerCase().includes(query) || i.description.toLowerCase().includes(query)
  );

  const matchedFAQs = FAQS.filter(
    (f) => f.question.toLowerCase().includes(query) || f.answer.toLowerCase().includes(query)
  );

  const handleSelect = (path) => {
    onClose();
    onNavigate(path);
  };

  return (
    <div
      className="fixed inset-0 z-[110] bg-black/85 backdrop-blur-md flex items-start justify-center pt-20 px-4 sm:px-6 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="glass-panel-elevated rounded-3xl p-6 border border-[#00F0FF]/30 shadow-[0_0_80px_rgba(0,0,0,0.95)] max-w-2xl w-full max-h-[80vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 pb-4 border-b border-white/10">
          <Search className="w-5 h-5 text-[#00F0FF] shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search LED signs, neon, acrylic, video walls, industries..."
            className="w-full bg-transparent text-white placeholder-gray-400 text-base focus:outline-none font-medium"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white bg-white/5 hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto pt-4 space-y-6 pr-1">
          {/* Products Group */}
          {matchedProducts.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#00F0FF] flex items-center gap-1.5 mb-2">
                <Layers className="w-3 h-3" />
                <span>Signage Products ({matchedProducts.length})</span>
              </span>
              <div className="space-y-1.5">
                {matchedProducts.map((p) => (
                  <button
                    key={p.slug}
                    onClick={() => handleSelect(`/products/${p.slug}`)}
                    className="w-full p-3 rounded-xl bg-black/40 hover:bg-[#00F0FF]/15 border border-white/5 hover:border-[#00F0FF]/30 flex items-center justify-between text-left group transition-all"
                  >
                    <div>
                      <span className="text-sm font-bold text-white group-hover:text-[#00F0FF] block">
                        {p.name}
                      </span>
                      <span className="text-xs text-gray-400 line-clamp-1">{p.shortDesc}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#00F0FF] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Services Group */}
          {matchedServices.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF3CAC] flex items-center gap-1.5 mb-2">
                <Wrench className="w-3 h-3" />
                <span>Services ({matchedServices.length})</span>
              </span>
              <div className="space-y-1.5">
                {matchedServices.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => handleSelect(`/services/${s.slug}`)}
                    className="w-full p-3 rounded-xl bg-black/40 hover:bg-[#FF3CAC]/15 border border-white/5 hover:border-[#FF3CAC]/30 flex items-center justify-between text-left group transition-all"
                  >
                    <div>
                      <span className="text-sm font-bold text-white group-hover:text-[#FF3CAC] block">
                        {s.title}
                      </span>
                      <span className="text-xs text-gray-400 line-clamp-1">{s.tagline}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#FF3CAC] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Industries Group */}
          {matchedIndustries.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#25D366] flex items-center gap-1.5 mb-2">
                <Building2 className="w-3 h-3" />
                <span>Industries ({matchedIndustries.length})</span>
              </span>
              <div className="space-y-1.5">
                {matchedIndustries.map((ind) => (
                  <button
                    key={ind.slug}
                    onClick={() => handleSelect(`/industries/${ind.slug}`)}
                    className="w-full p-3 rounded-xl bg-black/40 hover:bg-[#25D366]/15 border border-white/5 hover:border-[#25D366]/30 flex items-center justify-between text-left group transition-all"
                  >
                    <div>
                      <span className="text-sm font-bold text-white group-hover:text-[#25D366] block">
                        {ind.name}
                      </span>
                      <span className="text-xs text-gray-400 line-clamp-1">{ind.description}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* FAQs Group */}
          {matchedFAQs.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-2">
                <HelpCircle className="w-3 h-3" />
                <span>Help & Questions ({matchedFAQs.length})</span>
              </span>
              <div className="space-y-1.5">
                {matchedFAQs.slice(0, 3).map((f, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect('/faq')}
                    className="w-full p-3 rounded-xl bg-black/40 hover:bg-white/10 border border-white/5 flex items-center justify-between text-left group transition-all"
                  >
                    <span className="text-xs font-semibold text-gray-200">{f.question}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedProducts.length === 0 && matchedServices.length === 0 && matchedIndustries.length === 0 && matchedFAQs.length === 0 && (
            <div className="py-12 text-center text-gray-400 text-xs">
              No exact matches found for "{searchTerm}". Try searching for "neon", "video wall", "acrylic", "retail", or "installation".
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
