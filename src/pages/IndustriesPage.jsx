import { Building2, ArrowRight, ChevronRight, Check } from 'lucide-react';
import { INDUSTRIES } from '../data/signageData';

export default function IndustriesPage({ slug, onNavigate, onOpenQuote }) {
  const activeIndustry = slug ? INDUSTRIES.find((i) => i.slug === slug) : null;

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[96%] mx-auto">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-[#AAB3C5] mb-8">
        <button onClick={() => onNavigate('/')} className="hover:text-[#00F0FF]">Home</button>
        <ChevronRight className="w-3.5 h-3.5" />
        <button onClick={() => onNavigate('/industries')} className="hover:text-[#00F0FF]">Industries</button>
        {activeIndustry && (
          <>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-bold">{activeIndustry.name}</span>
          </>
        )}
      </div>

      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07112B] border border-[#00F0FF]/30 text-xs font-semibold text-[#00F0FF] uppercase tracking-wider mb-4">
          <Building2 className="w-3.5 h-3.5" />
          <span>Tailored Commercial Sectors</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight mb-4">
          SIGNAGE FOR <span className="text-[#00F0FF] neon-glow-cyan">YOUR INDUSTRY</span>
        </h1>
        <p className="text-[#AAB3C5] text-base sm:text-lg">
          Different commercial spaces have unique illumination distances, architectural aesthetics, and visibility requirements. Explore how we tailor signage for your sector.
        </p>
      </div>

      {activeIndustry ? (
        /* Single Industry Deep Dive */
        <div className="glass-panel-elevated rounded-3xl p-8 sm:p-12 border border-[#00F0FF]/30 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00F0FF] block mb-2">
            Industry Spotlight
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-4">
            Signage Solutions for {activeIndustry.name}
          </h2>
          <p className="text-base sm:text-lg text-[#AAB3C5] max-w-2xl mb-8 leading-relaxed">
            {activeIndustry.description}
          </p>

          <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
            Recommended Signage Systems
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {activeIndustry.signTypes.map((t) => (
              <div key={t} className="p-5 rounded-2xl bg-black/40 border border-white/10">
                <span className="text-[#00F0FF] font-bold block mb-1">★ Recommended</span>
                <h4 className="text-base font-bold text-white mb-2">{t}</h4>
                <p className="text-xs text-gray-400">
                  Custom engineered for high foot traffic visibility and brand prestige.
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00F0FF] hover:bg-white shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center gap-2"
            >
              <span>Get a Quote for {activeIndustry.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/industries')}
              className="px-6 py-4 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 transition-all"
            >
              View All Industries
            </button>
          </div>
        </div>
      ) : null}

      {/* 14 Industries Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {INDUSTRIES.map((ind) => (
          <div
            key={ind.slug}
            onClick={() => onNavigate(`/industries/${ind.slug}`)}
            className="group glass-panel rounded-2xl p-6 border border-white/10 hover:border-[#00F0FF] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(0,240,255,0.2)] cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#07112B] border border-[#00F0FF]/30 text-[#00F0FF] flex items-center justify-center mb-4 transition-all">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white group-hover:text-[#00F0FF] transition-colors mb-2">
                {ind.name}
              </h3>
              <p className="text-xs text-[#AAB3C5] leading-relaxed mb-4">
                {ind.description}
              </p>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-bold text-[#00F0FF]">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
