import { Sparkles, ArrowRight, Lightbulb, PenTool, CheckCircle, Wrench, Zap } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/signageData';

export default function HowItWorks({ onOpenQuote }) {
  const stepIcons = [Lightbulb, PenTool, CheckCircle, Wrench, Zap];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[96%] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07112B] border border-[#00F0FF]/30 text-xs font-semibold text-[#00F0FF] uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Execution Roadmap</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
          FROM IDEA <span className="text-[#00F0FF] neon-glow-cyan">TO INSTALLATION.</span>
        </h2>
        <p className="text-[#AAB3C5] text-base sm:text-lg">
          A seamless 5-stage workflow engineered to turn your branding concepts into durable, high-lumen illuminated reality without confusion.
        </p>
      </div>

      {/* Steps Timeline Grid with Glowing Path */}
      <div className="relative">
        {/* Continuous Horizontal Glowing Line for desktop */}
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-8 h-1 bg-gradient-to-r from-[#00F0FF] via-[#8B5CF6] to-[#FF3CAC] rounded-full opacity-40 shadow-[0_0_12px_#00F0FF]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div
                key={step.step}
                className="group glass-panel rounded-2xl p-6 border border-white/10 hover:border-[#00F0FF] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,240,255,0.2)] flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-black text-2xl text-[#00F0FF] group-hover:neon-glow-cyan transition-all">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#07112B] border border-[#00F0FF]/30 flex items-center justify-center text-[#00F0FF] group-hover:border-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-black transition-all duration-300 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF3CAC] block mb-1">
                    {step.highlight}
                  </span>

                  <h3 className="text-base font-display font-bold text-white mb-2 leading-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#AAB3C5] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-semibold text-[#00F0FF]">
                  <span>Phase {step.step}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline Bottom CTA */}
      <div className="mt-14 text-center">
        <button
          onClick={onOpenQuote}
          className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00F0FF] hover:bg-white shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all inline-flex items-center gap-2"
        >
          <span>Start With Step 01: Share Your Idea</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
