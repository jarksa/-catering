import { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQS } from '../data/signageData';

export default function FAQSection({ onOpenQuote }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-[96%] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07112B] border border-[#00F0FF]/30 text-xs font-semibold text-[#00F0FF] uppercase tracking-wider mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
          HAVE QUESTIONS? <br />
          <span className="text-[#00F0FF] neon-glow-cyan">WE HAVE ANSWERS.</span>
        </h2>
        <p className="text-[#AAB3C5] text-base sm:text-lg">
          Clear, factual answers regarding materials, LED specifications, custom design options, and installation timelines.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl transition-all duration-300 border ${
                isOpen
                  ? 'glass-panel-elevated border-[#00F0FF]/50 shadow-[0_0_25px_rgba(0,240,255,0.15)]'
                  : 'glass-panel border-white/10 hover:border-white/20'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 transition-colors"
              >
                <span className="font-display font-bold text-base sm:text-lg text-white">
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? 'bg-[#00F0FF] text-black rotate-180 shadow-[0_0_10px_#00F0FF]'
                      : 'bg-white/5 text-gray-400'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 border-t border-white/5 text-xs sm:text-sm text-[#AAB3C5] leading-relaxed animate-in fade-in duration-200">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* FAQ Bottom Support Note */}
      <div className="mt-12 p-6 rounded-2xl bg-[#07112B] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <p className="text-sm font-bold text-white">Have a specific project requirement not listed here?</p>
          <p className="text-xs text-[#AAB3C5]">We manufacture bespoke and architectural custom designs for any physical space.</p>
        </div>
        <button
          onClick={onOpenQuote}
          className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00F0FF] hover:bg-white transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] shrink-0"
        >
          Ask Our Team
        </button>
      </div>
    </section>
  );
}
