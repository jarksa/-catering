import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, MessageSquare, Sparkles, CheckCircle2, ShieldCheck, Layers, ChevronRight } from 'lucide-react';
import { PRODUCTS, REAL_PROJECTS } from '../data/signageData';

export default function ProductDetailPage({ slug, onNavigate, onOpenQuote }) {
  // If slug is empty or "all", show the full catalog
  const isCatalogOverview = !slug || slug === 'all';

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  // Related work from real projects
  const relatedProjects = REAL_PROJECTS.filter(
    (proj) => proj.category === product.category || proj.tags.includes(product.category)
  );

  if (isCatalogOverview) {
    return (
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[96%] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07112B] border border-[#00F0FF]/30 text-xs font-semibold text-[#00F0FF] uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Complete Signage Catalog</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight mb-4">
            ALL SIGNAGE <span className="text-[#00F0FF] neon-glow-cyan">SOLUTIONS</span>
          </h1>
          <p className="text-[#AAB3C5] text-base sm:text-lg">
            Explore our complete portfolio of custom illuminated letters, neon fixtures, acrylic boards, and digital video displays engineered in Salem, Tamil Nadu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.slug}
              onClick={() => onNavigate(`/products/${prod.slug}`)}
              className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-[#00F0FF] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,240,255,0.2)] cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-95 group-hover:brightness-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#00F0FF] border border-[#00F0FF]/30">
                    {prod.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-[#00F0FF] transition-colors mb-2">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[#AAB3C5] leading-relaxed line-clamp-2 mb-4">
                    {prod.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#00F0FF]">
                  <span>Explore Specifications</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Individual Product Detail View
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[96%] mx-auto">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-[#AAB3C5] mb-8">
        <button
          onClick={() => onNavigate('/')}
          className="hover:text-[#00F0FF] transition-colors"
        >
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <button
          onClick={() => onNavigate('/products')}
          className="hover:text-[#00F0FF] transition-colors"
        >
          Products
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-white font-bold">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* Left Image Showcase */}
        <div className="lg:col-span-6 space-y-4">
          <div className="glass-panel-elevated rounded-3xl p-3 border border-[#00F0FF]/30 shadow-[0_0_40px_rgba(0,240,255,0.15)] overflow-hidden">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover filter contrast-105 brightness-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-black/80 text-[#00F0FF] border border-[#00F0FF]/40 backdrop-blur-md">
                  {product.category}
                </span>
              </div>
            </div>
          </div>

          {/* Highlights pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            {product.highlights?.map((h) => (
              <div
                key={h}
                className="p-3 rounded-xl bg-black/40 border border-white/5 text-center text-[#AAB3C5] font-medium"
              >
                <span className="text-[#00F0FF] block mb-1">✓</span>
                {h}
              </div>
            ))}
          </div>
        </div>

        {/* Right Product Overview & Technical Specs */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#00F0FF] block mb-2">
              Salem In-House Fabrication
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight mb-4">
              {product.name}
            </h1>
            <p className="text-base text-[#AAB3C5] leading-relaxed">
              {product.shortDesc}
            </p>
          </div>

          {/* Specs List */}
          <div className="space-y-4 p-6 rounded-2xl glass-panel border border-white/10 text-xs sm:text-sm">
            <div>
              <span className="text-gray-400 block font-semibold mb-1">Lighting Technology:</span>
              <span className="text-white font-medium">{product.lightingType}</span>
            </div>

            <div>
              <span className="text-gray-400 block font-semibold mb-1">Primary Materials & Construction:</span>
              <span className="text-white font-medium">{product.materials}</span>
            </div>

            <div>
              <span className="text-gray-400 block font-semibold mb-1">Environment Suitability:</span>
              <span className="text-[#25D366] font-medium">{product.suitability}</span>
            </div>

            <div>
              <span className="text-gray-400 block font-semibold mb-1">Customization Capabilities:</span>
              <span className="text-white font-medium">{product.customization}</span>
            </div>
          </div>

          {/* Suitable Applications */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">
              Common Commercial Applications
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app) => (
                <span
                  key={app}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#07112B] text-white border border-white/10"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onOpenQuote}
              className="flex-1 py-4 px-6 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#00F0FF] hover:bg-white shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <span>Request a Quote for {product.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/?text=Hello%20Vtech%20Signs,%20I%20am%20interested%20in%20a%20quotation%20for%20${encodeURIComponent(product.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-6 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Real Project Proof in this category */}
      {relatedProjects.length > 0 && (
        <div className="pt-12 border-t border-white/10">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-6">
            Real Vtech Work in {product.category}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProjects.map((proj) => (
              <div
                key={proj.id}
                className="glass-panel rounded-2xl overflow-hidden border border-white/10 p-3"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black mb-3">
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{proj.title}</h4>
                <p className="text-xs text-[#00F0FF]">{proj.specs.lighting}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
