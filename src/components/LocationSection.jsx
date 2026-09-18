import { MapPin, Navigation, Clock, Phone, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/signageData';

export default function LocationSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[96%] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07112B] border border-[#00F0FF]/30 text-xs font-semibold text-[#00F0FF] uppercase tracking-wider mb-4">
          <MapPin className="w-3.5 h-3.5" />
          <span>Local Salem Presence</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
          VISIT <span className="text-[#00F0FF] neon-glow-cyan">VTECH SIGNS</span>
        </h2>
        <p className="text-[#AAB3C5] text-base sm:text-lg">
          Visit our signage manufacturing facility in Salem to inspect material samples, examine live LED luminance, and discuss your custom branding with our technicians.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Address & Details Card */}
        <div className="lg:col-span-5 glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#00F0FF] block mb-1">
              Manufacturing & Workshop Address
            </span>
            <h3 className="text-xl font-display font-bold text-white mb-2">
              VTECH SIGNS
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {COMPANY_INFO.location}
            </p>
            <p className="text-xs text-[#AAB3C5] mt-2 italic">
              Landmark: {COMPANY_INFO.landmark}
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-4 text-xs text-gray-300">
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold">Working Hours</strong>
                <span>{COMPANY_INFO.workingHours}</span>
                <span className="text-gray-400 block mt-0.5">Sunday: By Appointment</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Navigation className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold">Service Coverage</strong>
                <span>Salem City, Omalur, Sankagiri, Attur, Namakkal, and surrounding Tamil Nadu districts.</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
            <a
              href="https://maps.google.com/?q=Palapatti,+Salem,+Tamil+Nadu+636009"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00F0FF] hover:bg-white shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://wa.me/?text=Hello%20Vtech%20Signs,%20I%20would%20like%20to%20visit%20your%20workshop%20in%20Palapatti,%20Salem."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl text-xs font-bold text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Plan a Visit</span>
            </a>
          </div>
        </div>

        {/* Right Simulated Interactive Map Frame */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-3 sm:p-4 border border-[#00F0FF]/25 shadow-2xl relative overflow-hidden">
          <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-[#0b1329] relative border border-white/10 flex items-center justify-center">
            {/* Styled Map Background Grid */}
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:20px_20px]" />

            {/* Stylized road network vector mock */}
            <svg className="absolute inset-0 w-full h-full stroke-[#00F0FF]/20 stroke-2" fill="none">
              <line x1="0" y1="50" x2="800" y2="450" />
              <line x1="200" y1="0" x2="600" y2="600" strokeWidth="4" className="stroke-[#00F0FF]/30" />
              <line x1="0" y1="300" x2="800" y2="280" strokeWidth="3" className="stroke-[#8B5CF6]/30" />
              <circle cx="480" cy="290" r="16" className="stroke-[#00F0FF] animate-ping" />
            </svg>

            {/* Pin Drop */}
            <div className="relative z-10 flex flex-col items-center animate-bounce">
              <div className="p-3 rounded-full bg-[#00F0FF] text-black shadow-[0_0_20px_#00F0FF]">
                <MapPin className="w-6 h-6 fill-black" />
              </div>
              <div className="mt-2 px-3 py-1 rounded-lg bg-black/90 text-white font-bold text-xs border border-[#00F0FF]/40 backdrop-blur-md whitespace-nowrap shadow-xl">
                Vtech Signs • Palapatti, Salem
              </div>
            </div>

            {/* Top Right Live Map Overlay */}
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[11px] text-gray-300">
              <span className="text-[#00F0FF] font-bold">Salem, Tamil Nadu</span> (636009)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
