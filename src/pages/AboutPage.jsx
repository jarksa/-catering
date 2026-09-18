import { Award, Factory, Cpu, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, STATS } from '../data/signageData';

export default function AboutPage({ onNavigate, onOpenQuote }) {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[96%] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07112B] border border-[#00F0FF]/30 text-xs font-semibold text-[#00F0FF] uppercase tracking-wider mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>Our Story & Craft</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight mb-4">
          PREMIUM SIGNAGE STUDIO <br />
          <span className="text-[#00F0FF] neon-glow-cyan">& LED MANUFACTURER</span>
        </h1>
        <p className="text-[#AAB3C5] text-base sm:text-lg">
          Based in Palapatti, Salem, Vtech Signs bridges the gap between artistic brand identity and precision optoelectronic signage engineering.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {STATS.map((s) => (
          <div key={s.label} className="glass-panel rounded-2xl p-6 text-center border border-white/10">
            <span className="font-display font-black text-3xl sm:text-4xl text-[#00F0FF] block mb-1">
              {s.value}
            </span>
            <span className="text-xs font-bold uppercase text-white block">{s.label}</span>
            <span className="text-[11px] text-[#AAB3C5] block mt-0.5">{s.subtext}</span>
          </div>
        ))}
      </div>

      {/* Narrative Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white">
            "Your Brand. Our Craft. Brilliantly Lit."
          </h2>
          <p className="text-sm sm:text-base text-[#AAB3C5] leading-relaxed">
            Founded with a passion for illuminated brand craft, Vtech Signs is not an ordinary electrical shop. We operate a specialized signage studio and workshop in Salem equipped for precision acrylic fabrication, custom silicone neon shaping, and digital LED matrix configuration.
          </p>
          <p className="text-sm sm:text-base text-[#AAB3C5] leading-relaxed">
            Whether developing a high-visibility bilingual English/Tamil storefront signboard, a vibrant custom neon art piece for a café or studio, or an ultra-bright modular P4 LED video wall, we ensure every project meets rigorous lighting consistency, thermal dissipation, and structural safety standards.
          </p>

          <div className="pt-2 space-y-3 text-xs sm:text-sm text-gray-200">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#00F0FF] shrink-0" />
              <span>In-house Salem fabrication ensuring direct quality control</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#00F0FF] shrink-0" />
              <span>High-CRI, commercial grade LED modules with long operational life</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#00F0FF] shrink-0" />
              <span>Dedicated on-site installation across Salem and surrounding Tamil Nadu districts</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 glass-panel-elevated rounded-3xl p-4 border border-[#00F0FF]/30 overflow-hidden shadow-2xl">
          <img
            src="/images/vtech/luca-tattoo-sign.jpg"
            alt="Vtech Signs Craftsmanship"
            className="w-full rounded-2xl object-cover filter contrast-105 brightness-105"
          />
          <div className="p-4 text-center text-xs text-[#AAB3C5]">
            Custom hybrid neon and illuminated dimensional signboard crafted by Vtech Signs.
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="glass-panel-elevated rounded-3xl p-8 sm:p-12 text-center border border-[#00F0FF]/25">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
          Ready to Discuss Your Signage Project?
        </h3>
        <p className="text-xs sm:text-sm text-[#AAB3C5] max-w-xl mx-auto mb-6">
          Reach out to our Salem workshop to consult on materials, dimensions, or visit us at Palapatti.
        </p>
        <button
          onClick={onOpenQuote}
          className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00F0FF] hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
        >
          Request a Consultation & Quote
        </button>
      </div>
    </div>
  );
}
