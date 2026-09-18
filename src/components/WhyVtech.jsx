import { ShieldCheck, Cpu, Factory, MapPin, Sparkles, Award, Zap, Layers } from 'lucide-react';
import { STATS } from '../data/signageData';

export default function WhyVtech({ onOpenQuote }) {
  const pillars = [
    {
      icon: Factory,
      title: 'In-House Salem Manufacturing',
      desc: 'Fabricated in our Palapatti, Salem facility with laser-cut acrylic, precision CNC frames, and thorough pre-dispatch lighting checks.'
    },
    {
      icon: Cpu,
      title: 'Commercial LED Technology',
      desc: 'We utilize high-lumen, energy-saving LED modules and certified power supplies designed for continuous commercial duty cycles.'
    },
    {
      icon: Sparkles,
      title: 'Custom Tailored Design',
      desc: 'No generic off-the-shelf templates. Every letter, curvature, and illumination temperature is custom crafted around your brand.'
    },
    {
      icon: Layers,
      title: 'Digital Display Expertise',
      desc: 'From single-line scrolling message tickers to seamless P4 LED video walls, we integrate dynamic digital screen solutions.'
    },
    {
      icon: MapPin,
      title: 'Direct Local Salem Support',
      desc: 'Based locally in Salem, Tamil Nadu, ensuring responsive on-site consultations, dependable installation, and direct technical support.'
    },
    {
      icon: ShieldCheck,
      title: 'Weatherproof Engineering',
      desc: 'Heavy-gauge aluminum/steel frames, UV-stable materials, and water-sealed wiring built to endure Tamil Nadu heat and monsoon rains.'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[96%] mx-auto">
      {/* Top Stats Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="glass-panel rounded-2xl p-6 text-center border border-white/10 hover:border-[#00F0FF]/40 transition-all hover:-translate-y-1"
          >
            <span className="font-display font-black text-3xl sm:text-5xl text-[#00F0FF] neon-glow-cyan block mb-1">
              {stat.value}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              {stat.label}
            </span>
            <span className="text-[11px] text-[#AAB3C5] block mt-0.5">
              {stat.subtext}
            </span>
          </div>
        ))}
      </div>

      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07112B] border border-[#00F0FF]/30 text-xs font-semibold text-[#00F0FF] uppercase tracking-wider mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>Craftsmanship & Trust</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
          WHY CHOOSE <span className="text-[#00F0FF] neon-glow-cyan">VTECH SIGNS?</span>
        </h2>
        <p className="text-[#AAB3C5] text-base sm:text-lg">
          We combine signage artisan craftsmanship with modern optoelectronic LED engineering to create signs that stand the test of time and weather.
        </p>
      </div>

      {/* 6 Core Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#00F0FF] transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,240,255,0.15)] flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07112B] border border-[#00F0FF]/30 text-[#00F0FF] flex items-center justify-center mb-5 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#AAB3C5] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
