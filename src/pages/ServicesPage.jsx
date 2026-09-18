import { Wrench, Palette, Cpu, Sparkles, Tv, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { SERVICES } from '../data/signageData';

export default function ServicesPage({ slug, onNavigate, onOpenQuote }) {
  const iconMap = {
    Palette: Palette,
    Cpu: Cpu,
    Sparkles: Sparkles,
    Tv: Tv,
    Wrench: Wrench
  };

  const activeService = slug ? SERVICES.find((s) => s.slug === slug) : null;

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[96%] mx-auto">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-[#AAB3C5] mb-8">
        <button onClick={() => onNavigate('/')} className="hover:text-[#00F0FF]">Home</button>
        <ChevronRight className="w-3.5 h-3.5" />
        <button onClick={() => onNavigate('/services')} className="hover:text-[#00F0FF]">Services</button>
        {activeService && (
          <>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-bold">{activeService.title}</span>
          </>
        )}
      </div>

      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07112B] border border-[#00F0FF]/30 text-xs font-semibold text-[#00F0FF] uppercase tracking-wider mb-4">
          <Wrench className="w-3.5 h-3.5" />
          <span>Complete Turnkey Capabilities</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight mb-4">
          FROM DESIGN <span className="text-[#00F0FF] neon-glow-cyan">TO INSTALLATION</span>
        </h1>
        <p className="text-[#AAB3C5] text-base sm:text-lg">
          We handle every phase of your visual branding: concept design, precision CNC cutting, LED illumination engineering, and on-site structural installation across Salem and Tamil Nadu.
        </p>
      </div>

      {/* Services Grid */}
      <div className="space-y-8">
        {SERVICES.map((service) => {
          const Icon = iconMap[service.icon] || Wrench;
          const isSelected = activeService?.slug === service.slug;

          return (
            <div
              key={service.slug}
              className={`glass-panel rounded-3xl p-6 sm:p-10 border transition-all ${
                isSelected
                  ? 'border-[#00F0FF] shadow-[0_0_35px_rgba(0,240,255,0.25)]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#07112B] border border-[#00F0FF]/40 text-[#00F0FF] flex items-center justify-center mb-4 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00F0FF] block mb-1">
                    {service.tagline}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-black text-white mb-3">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#AAB3C5] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button
                    onClick={onOpenQuote}
                    className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00F0FF] hover:bg-white shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all flex items-center gap-2"
                  >
                    <span>Enquire About {service.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-black/40 border border-white/5 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-200 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
