import { Building2, Sparkles, ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '../data/signageData';

export default function IndustriesSection({ onNavigate }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[96%] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07112B] border border-[#00F0FF]/30 text-xs font-semibold text-[#00F0FF] uppercase tracking-wider mb-4">
          <Building2 className="w-3.5 h-3.5" />
          <span>Industry Solutions</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
          BUILT FOR BUSINESSES <br />
          <span className="text-[#00F0FF] neon-glow-cyan">THAT WANT TO BE SEEN.</span>
        </h2>
        <p className="text-[#AAB3C5] text-base sm:text-lg">
          Tailored illuminated signage strategies designed to attract footfall, instill customer trust, and make your business landmark in its neighborhood.
        </p>
      </div>

      {/* 14 Industry Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {INDUSTRIES.map((ind) => (
          <div
            key={ind.slug}
            onClick={() => onNavigate(`/industries/${ind.slug}`)}
            className="group glass-panel rounded-2xl p-6 border border-white/10 hover:border-[#00F0FF] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(0,240,255,0.2)] cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#07112B] border border-[#00F0FF]/30 text-[#00F0FF] group-hover:border-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-black flex items-center justify-center mb-4 transition-all shadow-sm">
                <Building2 className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-display font-bold text-white group-hover:text-[#00F0FF] transition-colors mb-2">
                {ind.name}
              </h3>

              <p className="text-xs text-[#AAB3C5] leading-relaxed mb-4">
                {ind.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {ind.signTypes.map((type) => (
                  <span
                    key={type}
                    className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/5 text-gray-300 border border-white/5"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-bold text-[#00F0FF]">
              <span>View Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
