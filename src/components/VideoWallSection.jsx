import { useState, useEffect } from 'react';
import { Tv, Sparkles, ArrowRight, Layers, RefreshCw, Volume2, Maximize } from 'lucide-react';

export default function VideoWallSection({ onOpenQuote, onNavigate }) {
  const [activeTab, setActiveTab] = useState('ADVERTISEMENT');
  const [isPhotoView, setIsPhotoView] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);

  const tickerMessages = [
    'YOUR BRAND IN HIGH-DEFINITION LIGHT',
    'EXCLUSIVE PROMOTIONS & OFFERS',
    'LIVE EVENT BROADCAST & KEYNOTES',
    'INTERACTIVE MENU & PRODUCT SHOWCASE',
    'SALEM P4 HIGH-REFRESH INDOOR DISPLAY'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerMessages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [tickerMessages.length]);

  const tabsContent = {
    ADVERTISEMENT: {
      headline: 'SUMMER MEGA SALE - UP TO 50% OFF',
      subtext: 'High-visibility digital commercial advertising that stops foot traffic.',
      badge: '4K Commercial Feed',
      themeGradient: 'from-[#00F0FF] via-[#00C8FF] to-[#8B5CF6]',
      accentColor: '#00F0FF',
      stats: '1920x1080 • 3840Hz Refresh'
    },
    EVENT: {
      headline: 'GRAND ANNUAL GALA & AWARDS 2026',
      subtext: 'Massive seamless backdrop visuals for corporate conferences and celebrations.',
      badge: 'Live Event Stream',
      themeGradient: 'from-[#8B5CF6] via-[#FF3CAC] to-[#FF7B00]',
      accentColor: '#FF3CAC',
      stats: 'Ultra Low Latency • HDR10'
    },
    RESTAURANT: {
      headline: "CHEF'S SIGNATURE SPECIALS & DESSERTS",
      subtext: 'Vibrant dynamic digital menu boards with appetizing real-time animations.',
      badge: 'Digital Menu Board',
      themeGradient: 'from-[#FF7B00] via-[#FFDE59] to-[#25D366]',
      accentColor: '#FFDE59',
      stats: 'High Daylight Contrast • Anti-Glare'
    },
    RETAIL: {
      headline: 'NEW AUTUMN FASHION ARRIVALS IN STORE',
      subtext: 'Flagship showroom video wall creating luxurious ambient brand immersion.',
      badge: 'Luxury Retail Display',
      themeGradient: 'from-[#FF3CAC] via-[#00F0FF] to-[#07112B]',
      accentColor: '#00F0FF',
      stats: 'Seamless Zero Bezel • 160° View'
    },
    INFORMATION: {
      headline: 'REAL-TIME ANNOUNCEMENTS & LIVE TIMINGS',
      subtext: 'Crisp multi-line information tickers for transport, campuses, and hospitals.',
      badge: 'Public Information System',
      themeGradient: 'from-[#25D366] via-[#00F0FF] to-[#0a1128]',
      accentColor: '#25D366',
      stats: '24/7 Duty Cycle • IP65 Front'
    }
  };

  const currentTab = tabsContent[activeTab];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[96%] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07112B] border border-[#00F0FF]/30 text-xs font-semibold text-[#00F0FF] uppercase tracking-wider mb-4">
          <Tv className="w-3.5 h-3.5" />
          <span>Next-Gen Visual Displays</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
          TURN YOUR WALL <span className="text-[#00F0FF] neon-glow-cyan">INTO A SCREEN.</span>
        </h2>
        <p className="text-[#AAB3C5] text-base sm:text-lg">
          From high-refresh indoor P4 LED video walls in Salem to outdoor digital billboards and programmable message tickers, transform any physical space into a living screen.
        </p>
      </div>

      {/* Main Video Wall Simulation Stage */}
      <div className="glass-panel-elevated rounded-3xl p-4 sm:p-8 border border-[#00F0FF]/25 shadow-[0_0_60px_rgba(0,0,0,0.9)]">
        {/* Interactive Application Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-3 pb-6 mb-6 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            {Object.keys(tabsContent).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => {
                  setActiveTab(tabKey);
                  setIsPhotoView(false);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeTab === tabKey && !isPhotoView
                    ? 'bg-[#00F0FF] text-black shadow-[0_0_15px_#00F0FF]'
                    : 'bg-black/50 text-gray-300 hover:text-white border border-white/10'
                }`}
              >
                {tabKey}
              </button>
            ))}
          </div>

          {/* Toggle between Simulated Content & Real Salem Photo */}
          <button
            onClick={() => setIsPhotoView(!isPhotoView)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-2 ${
              isPhotoView
                ? 'bg-[#FF3CAC] text-white border-[#FF3CAC] shadow-[0_0_15px_#FF3CAC]'
                : 'bg-[#07112B] text-[#00F0FF] border-[#00F0FF]/40'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isPhotoView ? 'SHOW SIMULATION' : 'VIEW REAL SALEM P4 INSTALLATION'}</span>
          </button>
        </div>

        {/* Video Wall Screen Cabinet Frame */}
        <div className="relative rounded-2xl bg-black border-4 border-[#1a233b] shadow-[0_0_40px_rgba(0,0,0,0.9)] overflow-hidden aspect-[16/9] max-h-[520px] flex items-center justify-center">
          {/* LED Pixel Grid Overlay texture for realistic LED pitch feel */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4px_4px] pointer-events-none z-20" />

          {/* Live Top Information Bar on Screen */}
          <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
            <span className="px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-black/80 text-[#00F0FF] border border-[#00F0FF]/40 backdrop-blur-md">
              {isPhotoView ? 'VTECH SALEM P4 VIDEO WALL' : currentTab.badge}
            </span>
            <span className="px-3 py-1 rounded-md text-[10px] font-mono font-semibold bg-black/80 text-white/80 border border-white/10 backdrop-blur-md">
              {currentTab.stats}
            </span>
          </div>

          {/* Content Mode 1: Real Vtech Salem P4 Video Wall Photo */}
          {isPhotoView ? (
            <div className="relative w-full h-full">
              <img
                src="/images/vtech/p4-led-video-wall.jpg"
                alt="Vtech Vinoth Salem P4 Video Wall"
                className="w-full h-full object-cover filter contrast-105 brightness-105"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 z-30">
                <p className="text-sm font-bold text-white font-display">
                  Actual Project: Vtech Vinoth Salem P4 Video Wall
                </p>
                <p className="text-xs text-[#00F0FF] mt-1">
                  High-resolution modular LED video wall running vibrant aquarium motion content in Salem, Tamil Nadu.
                </p>
              </div>
            </div>
          ) : (
            /* Content Mode 2: Simulated Animated Digital Screen */
            <div
              className={`w-full h-full flex flex-col items-center justify-center p-8 sm:p-16 text-center bg-gradient-to-br ${currentTab.themeGradient} transition-all duration-700 relative`}
            >
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

              <div className="relative z-10 max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest text-black bg-white mb-4 shadow-lg">
                  {activeTab} MODE
                </span>
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white tracking-tight leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] mb-4 animate-in fade-in zoom-in-95 duration-300">
                  {currentTab.headline}
                </h3>
                <p className="text-sm sm:text-base text-gray-200 max-w-lg mx-auto font-medium drop-shadow">
                  {currentTab.subtext}
                </p>

                <div className="mt-8 flex items-center justify-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
                  <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                    LIVE BROADCAST ENGINE
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Running Dynamic Ticker */}
          <div className="absolute bottom-0 left-0 right-0 z-30 bg-black/90 border-t border-white/10 px-4 py-2 flex items-center gap-3 text-xs">
            <span className="px-2 py-0.5 rounded bg-[#00F0FF] text-black font-bold uppercase text-[10px] shrink-0">
              TICKER
            </span>
            <div className="overflow-hidden whitespace-nowrap w-full">
              <span className="inline-block font-mono text-[#00F0FF] font-medium tracking-wider animate-in fade-in duration-500">
                {tickerMessages[tickerIndex]}
              </span>
            </div>
          </div>
        </div>

        {/* Feature Highlights Strip & Action Buttons */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
          <div className="p-4 rounded-xl bg-black/40 border border-white/5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00F0FF] mb-1">
              Seamless Alignment
            </h4>
            <p className="text-xs text-[#AAB3C5]">
              Modular die-cast aluminum cabinets with zero visible bezels across any wall width.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-black/40 border border-white/5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF3CAC] mb-1">
              High Refresh Rate
            </h4>
            <p className="text-xs text-[#AAB3C5]">
              Up to 3840Hz refresh rate ensuring flicker-free video capture on mobile cameras.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-black/40 border border-white/5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#25D366] mb-1">
              Easy Cloud / USB Control
            </h4>
            <p className="text-xs text-[#AAB3C5]">
              Update schedules, video clips, and live tickers effortlessly via Wi-Fi or local network.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-end gap-4">
          <button
            onClick={() => onNavigate('/products/led-video-walls')}
            className="px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-[#07112B] hover:bg-[#0c1c48] border border-[#00F0FF]/30 transition-all flex items-center gap-2"
          >
            <span>Explore LED Displays</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenQuote}
            className="px-7 py-3 rounded-xl text-xs font-bold tracking-wider uppercase text-black bg-[#00F0FF] hover:bg-white shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center gap-2"
          >
            <span>Request a Video Wall Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
