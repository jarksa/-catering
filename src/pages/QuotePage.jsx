import QuoteWizard from '../components/QuoteWizard';
import { Sparkles } from 'lucide-react';

export default function QuotePage({ prefillData, onNavigate }) {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[96%] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07112B] border border-[#00F0FF]/30 text-xs font-semibold text-[#00F0FF] uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bespoke Signage Quotation</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight mb-4">
          CONFIGURE <span className="text-[#00F0FF] neon-glow-cyan">YOUR SIGNAGE</span>
        </h1>
        <p className="text-[#AAB3C5] text-base sm:text-lg">
          Complete our 7-step interactive wizard to get an accurate quotation and custom 2D/3D illuminated preview tailored to your brand.
        </p>
      </div>

      <QuoteWizard prefillData={prefillData} />
    </div>
  );
}
