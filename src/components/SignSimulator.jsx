import { useState } from 'react';
import { Sun, Moon, Power, Sliders, Sparkles, Check } from 'lucide-react';

export default function SignSimulator({ onOpenQuote }) {
  const [ambientMode, setAmbientMode] = useState('NIGHT'); // 'DAY' | 'NIGHT'
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [intensity, setIntensity] = useState(85);
  const [activeSignText, setActiveSignText] = useState('VTECH SIGNS');
  const [signStyle, setSignStyle] = useState('CYAN_NEON'); // 'CYAN_NEON' | 'WARM_ACRYLIC' | 'MAGENTA_EDGE'

  const stylesConfig = {
    CYAN_NEON: {
      label: 'Cyan Neon Channel',
      color: '#00F0FF',
      glowColor: 'rgba(0, 240, 255, 0.8)',
      offColor: '#1d4850',
      backlitGlow: 'rgba(0, 240, 255, 0.35)',
      fontClass: 'font-display font-extrabold tracking-wider'
    },
    WARM_ACRYLIC: {
      label: 'Warm White Acrylic 3D',
      color: '#FFF8E7',
      glowColor: 'rgba(255, 230, 160, 0.8)',
      offColor: '#4a4435',
      backlitGlow: 'rgba(255, 210, 120, 0.35)',
      fontClass: 'font-display font-black tracking-normal'
    },
    MAGENTA_EDGE: {
      label: 'Magenta Boutique Glow',
      color: '#FF3CAC',
      glowColor: 'rgba(255, 60, 172, 0.85)',
      offColor: '#4d1e38',
      backlitGlow: 'rgba(255, 60, 172, 0.4)',
      fontClass: 'font-display font-bold tracking-widest uppercase'
    }
  };

  const currentStyle = stylesConfig[signStyle];

  // Dynamic calculations based on power, intensity, and ambient
  const calculatedBrightness = isPowerOn ? (intensity / 100) : 0.15;
  const glowSpread = isPowerOn ? (intensity * 0.4) : 0;
  const shadowBlur1 = isPowerOn ? (intensity * 0.15) : 0;
  const shadowBlur2 = isPowerOn ? (intensity * 0.35) : 0;
  const shadowBlur3 = isPowerOn ? (intensity * 0.6) : 0;

  const dynamicTextShadow = isPowerOn
    ? `0 0 ${shadowBlur1}px ${currentStyle.color}, 0 0 ${shadowBlur2}px ${currentStyle.glowColor}, 0 0 ${shadowBlur3}px ${currentStyle.backlitGlow}`
    : 'none';

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[96%] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07112B] border border-[#00F0FF]/30 text-xs font-semibold text-[#00F0FF] uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Signage Showcase</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
          SEE THE DIFFERENCE <span className="text-[#00F0FF] neon-glow-cyan">LIGHT MAKES</span>
        </h2>
        <p className="text-[#AAB3C5] text-base sm:text-lg">
          Simulate how your signage behaves from bright daytime to dark night. Toggle illumination power and drag intensity to witness the real-world visibility transformation.
        </p>
      </div>

      {/* Main Interactive Studio Frame */}
      <div className="glass-panel-elevated rounded-3xl p-4 sm:p-8 border border-[#00F0FF]/25 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        {/* Top Control Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pb-6 mb-6 border-b border-white/10">
          {/* Day / Night Control */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#AAB3C5]">Ambient:</span>
            <div className="inline-flex p-1 rounded-xl bg-black/60 border border-white/10">
              <button
                onClick={() => setAmbientMode('DAY')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  ambientMode === 'DAY'
                    ? 'bg-[#FFDE59] text-black shadow-[0_0_12px_#FFDE59]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>DAY</span>
              </button>
              <button
                onClick={() => setAmbientMode('NIGHT')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  ambientMode === 'NIGHT'
                    ? 'bg-[#00F0FF] text-black shadow-[0_0_12px_#00F0FF]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>NIGHT</span>
              </button>
            </div>
          </div>

          {/* Power Switch */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#AAB3C5]">Power:</span>
            <button
              onClick={() => setIsPowerOn(!isPowerOn)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                isPowerOn
                  ? 'bg-[#25D366] text-black shadow-[0_0_18px_#25D366]'
                  : 'bg-red-500/20 text-red-400 border border-red-500/40'
              }`}
            >
              <Power className="w-4 h-4" />
              <span>{isPowerOn ? 'SIGN ON' : 'SIGN OFF'}</span>
            </button>
          </div>

          {/* Light Intensity Slider */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="uppercase tracking-wider text-[#AAB3C5] flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-[#00F0FF]" />
                Light Intensity
              </span>
              <span className="text-[#00F0FF] font-mono">{intensity}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={intensity}
              onChange={(e) => {
                setIntensity(Number(e.target.value));
                if (Number(e.target.value) > 0 && !isPowerOn) setIsPowerOn(true);
              }}
              className="w-full h-2 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#00F0FF]"
            />
          </div>
        </div>

        {/* The Simulated Environment Canvas */}
        <div
          className={`relative rounded-2xl min-h-[380px] sm:min-h-[460px] flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden border transition-colors duration-700 ${
            ambientMode === 'DAY'
              ? 'bg-gradient-to-b from-[#8da0b8] via-[#cbd5e1] to-[#64748b] border-white/20'
              : 'bg-gradient-to-b from-[#020409] via-[#050914] to-[#020408] border-[#00F0FF]/20'
          }`}
        >
          {/* Architectural Wall Texture */}
          <div
            className={`absolute inset-0 opacity-25 pointer-events-none transition-opacity duration-700 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]`}
          />

          {/* Ambient Lighting Glow Cone / Backlight bloom */}
          {isPowerOn && (
            <div
              className="absolute w-[500px] h-[300px] rounded-full blur-[90px] pointer-events-none transition-all duration-300"
              style={{
                backgroundColor: currentStyle.backlitGlow,
                opacity: (intensity / 100) * (ambientMode === 'NIGHT' ? 0.9 : 0.35),
                transform: `scale(${1 + intensity / 150})`
              }}
            />
          )}

          {/* Signboard Backing Fascia Box */}
          <div
            className={`relative z-10 w-full max-w-2xl rounded-2xl p-8 sm:p-12 text-center transition-all duration-500 border ${
              ambientMode === 'DAY'
                ? 'bg-[#1e293b]/90 border-slate-600 shadow-2xl'
                : 'bg-[#070d1e]/95 border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.9)]'
            }`}
          >
            {/* Mounting Screws Details */}
            <span className="absolute top-3 left-3 w-2.5 h-2.5 rounded-full bg-slate-500 shadow-inner"></span>
            <span className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-slate-500 shadow-inner"></span>
            <span className="absolute bottom-3 left-3 w-2.5 h-2.5 rounded-full bg-slate-500 shadow-inner"></span>
            <span className="absolute bottom-3 right-3 w-2.5 h-2.5 rounded-full bg-slate-500 shadow-inner"></span>

            {/* Simulated Illuminated Letters */}
            <div className="py-6">
              <h3
                className={`text-4xl sm:text-6xl md:text-7xl select-none transition-all duration-200 ${currentStyle.fontClass}`}
                style={{
                  color: isPowerOn ? currentStyle.color : currentStyle.offColor,
                  textShadow: dynamicTextShadow,
                  opacity: isPowerOn ? (0.3 + calculatedBrightness * 0.7) : 0.4,
                  filter: isPowerOn ? `drop-shadow(0 0 ${glowSpread}px ${currentStyle.glowColor})` : 'none'
                }}
              >
                {activeSignText}
              </h3>
              <p
                className={`text-xs sm:text-sm tracking-widest mt-2 uppercase transition-all duration-200 font-semibold ${
                  isPowerOn ? 'text-white/80' : 'text-slate-500'
                }`}
              >
                SIGNAGE STUDIO • SALEM
              </p>
            </div>

            {/* Reflection on Bottom Surface */}
            <div
              className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#AAB3C5]"
            >
              <span>Style: <strong className="text-white">{currentStyle.label}</strong></span>
              <span>Status: <strong className={isPowerOn ? 'text-[#25D366]' : 'text-red-400'}>{isPowerOn ? `Illuminated (${intensity}%)` : 'Non-Illuminated (Off)'}</strong></span>
            </div>
          </div>

          {/* Quick Word Selectors */}
          <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-[#AAB3C5] font-semibold mr-1">Try Samples:</span>
            {['VTECH SIGNS', 'LUCA TATTOO', 'KABEN ELECTRIC', 'YOUR BRAND'].map((text) => (
              <button
                key={text}
                onClick={() => setActiveSignText(text)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeSignText === text
                    ? 'bg-[#00F0FF] text-black font-bold shadow-[0_0_10px_#00F0FF]'
                    : 'bg-black/50 text-gray-300 hover:bg-black/80 border border-white/10'
                }`}
              >
                {text}
              </button>
            ))}
          </div>
        </div>

        {/* Lighting Type Chooser & CTA */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#AAB3C5]">Lighting Type:</span>
            {Object.keys(stylesConfig).map((key) => (
              <button
                key={key}
                onClick={() => setSignStyle(key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  signStyle === key
                    ? 'bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF] shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                    : 'bg-black/40 text-gray-400 border border-white/10 hover:text-white'
                }`}
              >
                {stylesConfig[key].label}
              </button>
            ))}
          </div>

          <button
            onClick={onOpenQuote}
            className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00F0FF] hover:bg-white shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all flex items-center gap-2"
          >
            <span>Quote This Sign Style</span>
            <Check className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
