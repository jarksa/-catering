import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, Eye } from 'lucide-react';
import { REAL_PROJECTS } from '../data/signageData';

export default function Hero({ onOpenQuote, onNavigate }) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isSignLit, setIsSignLit] = useState(true);
  const canvasRef = useRef(null);

  // Subtle floating light particles canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.5,
      color: Math.random() > 0.6 ? '#00F0FF' : Math.random() > 0.3 ? '#00C8FF' : '#FF3CAC',
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.5 - 0.2,
      opacity: Math.random() * 0.6 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const activeProject = REAL_PROJECTS[activeProjectIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050816]">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#FF3CAC]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Animated Subtle Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-[96%] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Top Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07112B] border border-[#00F0FF]/30 text-xs tracking-wider uppercase text-[#00F0FF] mb-6 shadow-[0_0_15px_rgba(0,240,255,0.15)] animate-in fade-in duration-700">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse"></span>
            <span className="font-semibold">LED SIGNAGE & DIGITAL DISPLAY SOLUTIONS</span>
          </div>

          {/* Main Headline with letter styling */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight leading-[1.08] mb-6 text-white">
            <span>LIGHT UP </span>
            <br />
            <span className="text-[#00F0FF] neon-glow-cyan inline-block transition-all">
              YOUR BRAND.
            </span>
          </h1>

          {/* Animated Neon Line */}
          <div className="w-48 h-1 bg-gradient-to-r from-[#00F0FF] via-[#00C8FF] to-transparent rounded-full shadow-[0_0_12px_#00F0FF] mb-6 animate-neon-pulse" />

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#AAB3C5] max-w-xl mb-8 leading-relaxed font-normal">
            Custom LED signs, illuminated letters, neon displays and digital signage designed to make your business stand out. Precision manufactured in Salem, Tamil Nadu.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#00F0FF] to-[#00C8FF] hover:from-white hover:to-white shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] transition-all duration-300 flex items-center justify-center gap-2.5 group"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('/our-work')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-semibold tracking-wide text-white bg-[#07112B]/80 hover:bg-[#07112B] border border-[#00F0FF]/30 hover:border-[#00F0FF] transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
            >
              <Eye className="w-4 h-4 text-[#00F0FF]" />
              <span>VIEW OUR WORK</span>
            </button>
          </div>

          {/* Trust Indicators Strip */}
          <div className="pt-6 border-t border-white/10 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-[#AAB3C5]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0" />
              <span>CUSTOM DESIGNS</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0" />
              <span>LED TECHNOLOGY</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0" />
              <span>MANUFACTURING</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0" />
              <span>INSTALLATION</span>
            </div>
          </div>
        </div>

        {/* Right Interactive Real Work Showcase */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-md lg:max-w-none rounded-2xl glass-panel-elevated p-3 sm:p-4 border border-[#00F0FF]/30 shadow-[0_0_40px_rgba(0,240,255,0.2)] group">
            {/* Top Showcase Header Bar */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF3CAC]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFDE59]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
                <span className="ml-2 font-display font-semibold text-gray-300">REAL VTECH WORK</span>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30 uppercase">
                {activeProject.category}
              </span>
            </div>

            {/* Real Project Image with Glow Effect */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/80 flex items-center justify-center border border-white/5">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isSignLit
                    ? 'filter brightness-110 contrast-105 group-hover:scale-105'
                    : 'filter brightness-60 contrast-90 grayscale-[40%]'
                }`}
              />

              {/* Ambient Glow Bloom behind illuminated sign */}
              {isSignLit && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80 pointer-events-none" />
              )}

              {/* Badges on image */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#00F0FF] border border-[#00F0FF]/40 shadow-lg">
                  Salem Built
                </span>
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-black/70 backdrop-blur-md text-white/90 border border-white/10">
                  {activeProject.specs.type}
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/15">
                <p className="text-xs font-bold text-white font-display line-clamp-1">
                  {activeProject.title}
                </p>
                <p className="text-[11px] text-[#00F0FF] line-clamp-1 mt-0.5">
                  {activeProject.specs.lighting}
                </p>
              </div>
            </div>

            {/* Showcase Selector Thumbnails */}
            <div className="mt-4 flex items-center justify-between gap-2">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {REAL_PROJECTS.map((proj, idx) => (
                  <button
                    key={proj.id}
                    onClick={() => setActiveProjectIndex(idx)}
                    className={`relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      activeProjectIndex === idx
                        ? 'border-[#00F0FF] shadow-[0_0_12px_#00F0FF] scale-105'
                        : 'border-white/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={proj.image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Live Illumination Toggle */}
              <button
                onClick={() => setIsSignLit(!isSignLit)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                  isSignLit
                    ? 'bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/40 shadow-[0_0_10px_rgba(0,240,255,0.3)]'
                    : 'bg-white/5 text-gray-400 border border-white/10'
                }`}
                title="Toggle Sign Glow"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isSignLit ? 'LIGHT: ON' : 'LIGHT: OFF'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
