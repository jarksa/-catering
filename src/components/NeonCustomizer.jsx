import { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw, Type, Palette, Maximize2 } from 'lucide-react';

export default function NeonCustomizer({ onSelectDesignForQuote }) {
  const [signText, setSignText] = useState('YOUR BRAND');
  const [selectedFont, setSelectedFont] = useState('font-neon-script');
  const [selectedColor, setSelectedColor] = useState('cyan');
  const [glowLevel, setGlowLevel] = useState('high'); // 'subtle' | 'high' | 'ultra'
  const [signSize, setSignSize] = useState('medium'); // 'small' | 'medium' | 'large'
  const [isBackingDark, setIsBackingDark] = useState(true);

  const neonColors = [
    { id: 'cyan', label: 'Cyan', hex: '#00F0FF', shadow: '0 0 10px #00F0FF, 0 0 25px #00F0FF, 0 0 50px rgba(0, 240, 255, 0.7)' },
    { id: 'blue', label: 'Electric Blue', hex: '#00C8FF', shadow: '0 0 10px #00C8FF, 0 0 25px #00C8FF, 0 0 50px rgba(0, 200, 255, 0.7)' },
    { id: 'pink', label: 'Neon Pink', hex: '#FF3CAC', shadow: '0 0 10px #FF3CAC, 0 0 25px #FF3CAC, 0 0 50px rgba(255, 60, 172, 0.7)' },
    { id: 'purple', label: 'Vivid Purple', hex: '#8B5CF6', shadow: '0 0 10px #8B5CF6, 0 0 25px #8B5CF6, 0 0 50px rgba(139, 92, 246, 0.7)' },
    { id: 'green', label: 'Neon Green', hex: '#25D366', shadow: '0 0 10px #25D366, 0 0 25px #25D366, 0 0 50px rgba(37, 211, 102, 0.7)' },
    { id: 'warm', label: 'Warm White', hex: '#FFE8B6', shadow: '0 0 10px #FFE8B6, 0 0 25px #FFDE59, 0 0 50px rgba(255, 222, 89, 0.7)' },
    { id: 'red', label: 'Laser Red', hex: '#FF3333', shadow: '0 0 10px #FF3333, 0 0 25px #FF3333, 0 0 50px rgba(255, 51, 51, 0.7)' },
    { id: 'orange', label: 'Sunset Orange', hex: '#FF7B00', shadow: '0 0 10px #FF7B00, 0 0 25px #FF7B00, 0 0 50px rgba(255, 123, 0, 0.7)' },
  ];

  const fonts = [
    { id: 'font-neon-script', name: 'Cursive Neon', class: 'font-neon-script' },
    { id: 'font-display', name: 'Modern Tech', class: 'font-display font-extrabold tracking-wider uppercase' },
    { id: 'font-serif', name: 'Elegant Serif', class: 'font-serif italic' },
    { id: 'font-mono', name: 'Retro Monospace', class: 'font-mono font-bold tracking-widest' },
  ];

  const activeColorObj = neonColors.find((c) => c.id === selectedColor) || neonColors[0];

  const getGlowShadow = () => {
    if (glowLevel === 'subtle') {
      return `0 0 6px ${activeColorObj.hex}, 0 0 14px ${activeColorObj.hex}`;
    }
    if (glowLevel === 'ultra') {
      return `0 0 12px ${activeColorObj.hex}, 0 0 35px ${activeColorObj.hex}, 0 0 70px ${activeColorObj.hex}, 0 0 100px ${activeColorObj.hex}`;
    }
    return activeColorObj.shadow;
  };

  const getTextSizeClass = () => {
    if (signSize === 'small') return 'text-3xl sm:text-5xl';
    if (signSize === 'large') return 'text-5xl sm:text-7xl md:text-8xl';
    return 'text-4xl sm:text-6xl md:text-7xl';
  };

  const handleQuoteClick = () => {
    onSelectDesignForQuote({
      customText: signText,
      font: fonts.find((f) => f.id === selectedFont)?.name || 'Custom Font',
      color: activeColorObj.label,
      size: signSize,
      glow: glowLevel,
      signType: 'Neon Sign'
    });
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[96%] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07112B] border border-[#FF3CAC]/30 text-xs font-semibold text-[#FF3CAC] uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Customizer</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
          DESIGN YOUR <span className="text-[#FF3CAC] neon-glow-pink">OWN SIGN</span>
        </h2>
        <p className="text-[#AAB3C5] text-base sm:text-lg">
          Personalize your neon signage in real-time. Choose your lettering, font styling, and vivid LED neon glow hues, then request a tailored fabrication quote.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-5 glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
          {/* Text Input */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB3C5] mb-2 flex items-center gap-2">
              <Type className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>Sign Text / Brand Name</span>
            </label>
            <input
              type="text"
              value={signText}
              maxLength={28}
              onChange={(e) => setSignText(e.target.value)}
              placeholder="e.g. TO THE MOON"
              className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 focus:border-[#00F0FF] focus:outline-none focus:ring-1 focus:ring-[#00F0FF] text-white text-base font-semibold tracking-wide"
            />
          </div>

          {/* Font Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB3C5] mb-2">
              Select Font Style
            </label>
            <div className="grid grid-cols-2 gap-2">
              {fonts.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFont(f.id)}
                  className={`p-3 rounded-xl text-left border text-xs transition-all ${
                    selectedFont === f.id
                      ? 'bg-[#00F0FF]/15 border-[#00F0FF] text-white shadow-[0_0_12px_rgba(0,240,255,0.25)]'
                      : 'bg-black/40 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  <span className="block font-bold">{f.name}</span>
                  <span className={`text-base mt-1 block truncate ${f.class}`}>
                    Preview
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Color Palette Swatches */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB3C5] mb-2 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Palette className="w-3.5 h-3.5 text-[#FF3CAC]" />
                <span>Neon Colour:</span>
              </span>
              <span className="text-white font-bold">{activeColorObj.label}</span>
            </label>
            <div className="grid grid-cols-4 gap-2.5">
              {neonColors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`flex flex-col items-center gap-1.5 p-2 rounded-xl border transition-all ${
                    selectedColor === color.id
                      ? 'border-white bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.3)] scale-105'
                      : 'border-white/10 bg-black/40 hover:border-white/30'
                  }`}
                >
                  <span
                    className="w-6 h-6 rounded-full border border-white/40 shadow-sm"
                    style={{
                      backgroundColor: color.hex,
                      boxShadow: `0 0 8px ${color.hex}`
                    }}
                  />
                  <span className="text-[10px] font-medium text-gray-300 truncate w-full text-center">
                    {color.label.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Glow & Size Toggles */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB3C5] mb-1.5">
                Glow Level
              </label>
              <div className="flex rounded-xl bg-black/60 p-1 border border-white/10">
                {['subtle', 'high', 'ultra'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setGlowLevel(lvl)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                      glowLevel === lvl
                        ? 'bg-[#00F0FF] text-black shadow-[0_0_8px_#00F0FF]'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB3C5] mb-1.5">
                Approx Size
              </label>
              <div className="flex rounded-xl bg-black/60 p-1 border border-white/10">
                {['small', 'medium', 'large'].map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSignSize(sz)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                      signSize === sz
                        ? 'bg-[#FF3CAC] text-white shadow-[0_0_8px_#FF3CAC]'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {sz.charAt(0)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Get This Design Quoted Button */}
          <button
            onClick={handleQuoteClick}
            className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#00F0FF] via-[#00C8FF] to-[#FF3CAC] hover:from-white hover:to-white shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>GET THIS DESIGN QUOTED</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Live Sign Wall Preview */}
        <div className="lg:col-span-7 glass-panel-elevated rounded-3xl p-4 sm:p-8 border border-white/15 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
          {/* Wall Background Styling */}
          <div
            className={`absolute inset-0 transition-colors duration-500 ${
              isBackingDark
                ? 'bg-gradient-to-b from-[#030712] via-[#070b1a] to-[#030611]'
                : 'bg-gradient-to-b from-[#1e293b] via-[#334155] to-[#1e293b]'
            }`}
          />

          {/* Brick/Texture overlay */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          {/* Wall Ambient Glow Bloom */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full blur-[100px] pointer-events-none transition-all duration-300"
            style={{
              backgroundColor: activeColorObj.hex,
              opacity: glowLevel === 'ultra' ? 0.45 : glowLevel === 'high' ? 0.3 : 0.15
            }}
          />

          {/* Preview Header controls */}
          <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: activeColorObj.hex }} />
              Live Acrylic Backing Preview
            </span>
            <button
              onClick={() => setIsBackingDark(!isBackingDark)}
              className="text-xs font-medium text-gray-400 hover:text-white px-2.5 py-1 rounded-lg bg-black/40 border border-white/10"
            >
              Toggle Wall: {isBackingDark ? 'Dark Onyx' : 'Slate Gray'}
            </button>
          </div>

          {/* Center Neon Render */}
          <div className="relative z-10 my-auto py-12 px-4 flex flex-col items-center justify-center text-center">
            {/* Clear Laser-Cut Acrylic Backplate Shape */}
            <div className="relative p-8 sm:p-14 rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-[3px] shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
              {/* Stand-off mounting pins */}
              <span className="absolute top-4 left-4 w-3 h-3 rounded-full bg-slate-400/80 shadow-md border border-white/40"></span>
              <span className="absolute top-4 right-4 w-3 h-3 rounded-full bg-slate-400/80 shadow-md border border-white/40"></span>
              <span className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-slate-400/80 shadow-md border border-white/40"></span>
              <span className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-slate-400/80 shadow-md border border-white/40"></span>

              <h3
                className={`select-none transition-all duration-200 ${selectedFont} ${getTextSizeClass()}`}
                style={{
                  color: '#FFFFFF',
                  textShadow: getGlowShadow(),
                  filter: `drop-shadow(0 0 10px ${activeColorObj.hex})`
                }}
              >
                {signText || 'YOUR BRAND'}
              </h3>
            </div>
          </div>

          {/* Preview Spec Bar */}
          <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#AAB3C5]">
            <span>Material: <strong>12V Flexible Silicone Neon</strong></span>
            <span>Backing: <strong>5mm High-Gloss Laser-Cut Acrylic</strong></span>
            <span>Wiring: <strong>Clear 2m Cable + Adapter</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
