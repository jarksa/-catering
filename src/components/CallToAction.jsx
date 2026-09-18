import { Sparkles, ArrowRight, MessageSquare } from 'lucide-react';

export default function CallToAction({ onOpenQuote }) {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-[96%] mx-auto relative overflow-hidden text-center">
      {/* Background Lighting Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full bg-[#00F0FF]/15 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto glass-panel-elevated rounded-3xl p-8 sm:p-16 border border-[#00F0FF]/30 shadow-[0_0_80px_rgba(0,240,255,0.25)]">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07112B] border border-[#00F0FF]/30 text-xs font-semibold text-[#00F0FF] uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Take The Next Step</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white tracking-tight leading-[1.1] mb-4">
          YOUR BRAND <br />
          <span className="text-[#00F0FF] neon-glow-cyan">DESERVES TO SHINE.</span>
        </h2>

        {/* Glowing Animated Line */}
        <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent mx-auto rounded-full shadow-[0_0_15px_#00F0FF] my-6 animate-neon-pulse" />

        <p className="text-base sm:text-xl text-[#AAB3C5] max-w-xl mx-auto mb-10 font-normal">
          Tell us what you want to create. Send your logo, sketch, or dimensions to our Salem team for a fast, custom quotation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-9 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#00F0FF] hover:bg-white shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>GET A QUOTE</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://wa.me/?text=Hello%20Vtech%20Signs,%20I%20want%20to%20get%20a%20quotation%20for%20a%20custom%20signage%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.2)]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WHATSAPP US</span>
          </a>
        </div>
      </div>
    </section>
  );
}
