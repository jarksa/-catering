import { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, SlidersHorizontal, Sun, Moon } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const stopDragging = () => setIsDragging(false);

  useEffect(() => {
    const onMouseUp = () => stopDragging();
    const onMouseMove = (e) => {
      if (isDragging) handleMove(e.clientX);
    };

    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isDragging, handleMove]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[96%] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07112B] border border-[#00F0FF]/30 text-xs font-semibold text-[#00F0FF] uppercase tracking-wider mb-4">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>Transformation Comparison</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
          FROM ORDINARY <span className="text-[#00F0FF] neon-glow-cyan">TO UNMISSABLE.</span>
        </h2>
        <p className="text-[#AAB3C5] text-base sm:text-lg">
          Drag the glowing slider horizontally to contrast standard unlit daytime signage with our high-lumen, precision-engineered night-time illuminated display.
        </p>
      </div>

      {/* Draggable Before / After Container */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        onTouchMove={handleTouchMove}
        className="relative max-w-[96%] mx-auto h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)] border border-[#00F0FF]/30 select-none cursor-ew-resize glass-panel-elevated"
      >
        {/* Right Layer: After / Night-Time Illuminated Signage */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02050f] via-[#050a1d] to-[#01040a] flex items-center justify-center p-6 text-center">
          {/* Night ambient bloom */}
          <div className="absolute w-96 h-96 rounded-full bg-[#00F0FF]/25 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-lg p-8 rounded-2xl bg-[#07112B]/90 border border-[#00F0FF]/40 shadow-[0_0_50px_rgba(0,240,255,0.3)]">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/40 inline-flex items-center gap-1.5 mb-4">
              <Moon className="w-3 h-3 text-[#00F0FF]" />
              <span>NIGHT: ILLUMINATED (VTECH)</span>
            </span>
            <h3 className="text-4xl sm:text-6xl font-display font-black text-[#00F0FF] tracking-wider neon-glow-cyan mb-2">
              YOUR BRAND
            </h3>
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-white/90 uppercase">
              HIGH-LUMEN 3D ACRYLIC & NEON
            </p>
            <p className="text-xs text-[#AAB3C5] mt-3">
              Visible from 200+ meters away in pitch-black surroundings with radiant optical diffusion.
            </p>
          </div>

          <span className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-xl text-xs font-bold bg-black/80 text-[#00F0FF] border border-[#00F0FF]/40 backdrop-blur-md">
            Illuminated (Night)
          </span>
        </div>

        {/* Left Layer: Before / Daytime Unlit Signage (Clipped dynamically) */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#cbd5e1] via-[#94a3b8] to-[#64748b] flex items-center justify-center p-6 text-center overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="relative z-10 max-w-lg p-8 rounded-2xl bg-[#475569]/90 border border-slate-400 shadow-lg">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/20 text-slate-900 border border-slate-500 inline-flex items-center gap-1.5 mb-4">
              <Sun className="w-3 h-3 text-amber-500" />
              <span>DAYTIME / UNLIT</span>
            </span>
            <h3 className="text-4xl sm:text-6xl font-display font-black text-slate-800 tracking-wider mb-2">
              YOUR BRAND
            </h3>
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-slate-700 uppercase">
              STANDARD MATTE VINYL BOARD
            </p>
            <p className="text-xs text-slate-800 mt-3">
              Standard non-illuminated sign that fades completely once daylight diminishes.
            </p>
          </div>

          <span className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-xl text-xs font-bold bg-white/90 text-slate-900 border border-slate-300 backdrop-blur-md">
            Unlit (Daytime)
          </span>
        </div>

        {/* The Glowing Draggable Divider Line & Knob */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#00F0FF] shadow-[0_0_15px_#00F0FF] z-30 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#00F0FF] text-black shadow-[0_0_20px_#00F0FF] flex items-center justify-center font-bold text-xs pointer-events-auto cursor-ew-resize border-2 border-white">
            <span className="text-[14px]">⇄</span>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-[#AAB3C5] mt-4">
        Tip: Click or drag the illuminated cyan circle to compare lighting impact.
      </p>
    </section>
  );
}
