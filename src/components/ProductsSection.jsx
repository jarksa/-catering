import { ArrowRight, Layers, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/signageData';

export default function ProductsSection({ onNavigate }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[96%] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07112B] border border-[#00F0FF]/30 text-xs font-semibold text-[#00F0FF] uppercase tracking-wider mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>Products & Solutions</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
          WHAT CAN WE <span className="text-[#00F0FF] neon-glow-cyan">CREATE FOR YOU?</span>
        </h2>
        <p className="text-[#AAB3C5] text-base sm:text-lg">
          Custom signage and display solutions for businesses, events and spaces. Built with premium LED modules, precision CNC cutting, and commercial-grade craftsmanship.
        </p>
      </div>

      {/* 12 Interactive Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {PRODUCTS.map((prod) => (
          <div
            key={prod.slug}
            onClick={() => onNavigate(`/products/${prod.slug}`)}
            className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-[#00F0FF] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,240,255,0.2)] cursor-pointer flex flex-col justify-between"
          >
            {/* Image Header with Zoom Effect */}
            <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-95 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent opacity-90" />

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#00F0FF] border border-[#00F0FF]/30">
                  {prod.category}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-display font-bold text-white group-hover:text-[#00F0FF] transition-colors mb-2">
                  {prod.name}
                </h3>
                <p className="text-xs text-[#AAB3C5] leading-relaxed line-clamp-2 mb-4">
                  {prod.shortDesc}
                </p>
              </div>

              {/* Explore Footer Link */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#00F0FF]">
                <span className="group-hover:underline">Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </div>
            </div>

            {/* Neon Accent Line along bottom on hover */}
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#00F0FF] to-[#FF3CAC] transition-all duration-300 shadow-[0_0_8px_#00F0FF]" />
          </div>
        ))}
      </div>
    </section>
  );
}
