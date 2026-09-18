import { useState, useEffect, useCallback } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { REAL_PROJECTS } from '../data/signageData';

export default function PortfolioGallery({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const categories = [
    'ALL',
    'NEON',
    'LED SIGNS',
    'ACRYLIC',
    'DIGITAL DISPLAY',
    'VIDEO WALL',
    'CUSTOM'
  ];

  // Map category matching
  const filteredProjects = REAL_PROJECTS.filter((proj) => {
    if (selectedCategory === 'ALL') return true;
    if (selectedCategory === 'NEON') return proj.category === 'Neon' || proj.tags.includes('Neon');
    if (selectedCategory === 'LED SIGNS') return proj.category === 'LED Signs' || proj.tags.includes('LED Signs');
    if (selectedCategory === 'ACRYLIC') return proj.category === 'Acrylic' || proj.tags.includes('Acrylic');
    if (selectedCategory === 'VIDEO WALL') return proj.category === 'Video Wall' || proj.tags.includes('Video Wall');
    if (selectedCategory === 'DIGITAL DISPLAY') return proj.category === 'Digital Display' || proj.category === 'Video Wall';
    if (selectedCategory === 'CUSTOM') return proj.category === 'Custom' || proj.tags.includes('Custom');
    return true;
  });

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev + 1) % filteredProjects.length);
  }, [activeLightboxIndex, filteredProjects.length]);

  const showPrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  }, [activeLightboxIndex, filteredProjects.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, showNext, showPrev]);

  const currentProject = activeLightboxIndex !== null ? filteredProjects[activeLightboxIndex] : null;

  return (
    <section id="our-work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-[96%] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07112B] border border-[#00F0FF]/30 text-xs font-semibold text-[#00F0FF] uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Real Project Proof</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
          BUILT. LIT. <span className="text-[#00F0FF] neon-glow-cyan">DELIVERED.</span>
        </h2>
        <p className="text-[#AAB3C5] text-base sm:text-lg">
          Explore some of our signage and display work fabricated and installed for studios, storefronts, and commercial spaces across Salem and Tamil Nadu.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-[#00F0FF] text-black shadow-[0_0_15px_#00F0FF] scale-105'
                : 'bg-black/50 text-gray-400 hover:text-white border border-white/10 hover:border-white/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Masonry / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => openLightbox(idx)}
            className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-[#00F0FF] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,240,255,0.25)] cursor-pointer"
          >
            {/* Image Container with high quality contrast */}
            <div className="relative aspect-[4/3] bg-black/90 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-110"
              />

              {/* Tag Badges */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-black/80 text-[#00F0FF] border border-[#00F0FF]/40 backdrop-blur-md">
                  {project.category}
                </span>
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-black/80 text-white border border-white/20 backdrop-blur-md">
                  Salem Verified
                </span>
              </div>

              {/* Hover Dark Overlay with Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#00F0FF] mb-1">
                  {project.specs.type}
                </span>
                <h3 className="text-lg font-display font-bold text-white mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-[#AAB3C5] line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-[#00F0FF]">
                  <span>View Project Details</span>
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Static Bottom Bar for Mobile/Easy Identification */}
            <div className="p-4 bg-[#07112B] border-t border-white/5 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white truncate max-w-[220px]">
                  {project.title}
                </h4>
                <p className="text-[11px] text-[#AAB3C5]">{project.specs.application}</p>
              </div>
              <span className="text-xs font-bold text-[#00F0FF] group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Project Lightbox Modal */}
      {activeLightboxIndex !== null && currentProject && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full glass-panel-elevated rounded-3xl border border-[#00F0FF]/30 shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col lg:flex-row max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              aria-label="Close Lightbox"
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 text-white hover:text-[#00F0FF] border border-white/20 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={showPrev}
              aria-label="Previous project"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/70 text-white hover:text-[#00F0FF] border border-white/20 transition-all hidden sm:flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={showNext}
              aria-label="Next project"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/70 text-white hover:text-[#00F0FF] border border-white/20 transition-all hidden sm:flex items-center justify-center lg:right-[43%]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Left Image View Area */}
            <div className="lg:w-3/5 bg-black flex items-center justify-center overflow-hidden relative min-h-[300px] lg:min-h-[500px]">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-contain max-h-[75vh]"
              />
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-mono text-[#00F0FF] border border-[#00F0FF]/30">
                {activeLightboxIndex + 1} / {filteredProjects.length}
              </div>
            </div>

            {/* Right Information Details Column */}
            <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#07112B]">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30">
                    {currentProject.category}
                  </span>
                  <span className="text-xs text-[#AAB3C5] font-medium">Real Vtech Work</span>
                </div>

                <h3 className="text-2xl font-display font-extrabold text-white mb-2">
                  {currentProject.title}
                </h3>
                <p className="text-xs text-[#00F0FF] font-medium mb-4">
                  {currentProject.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#AAB3C5] leading-relaxed mb-6">
                  {currentProject.description}
                </p>

                {/* Specs Box */}
                <div className="space-y-3 p-4 rounded-xl bg-black/40 border border-white/10 text-xs mb-6">
                  <div>
                    <span className="text-gray-400 block font-semibold">Signage Type:</span>
                    <span className="text-white font-medium">{currentProject.specs.type}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block font-semibold">Lighting Specification:</span>
                    <span className="text-white font-medium">{currentProject.specs.lighting}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block font-semibold">Application:</span>
                    <span className="text-white font-medium">{currentProject.specs.application}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block font-semibold">Location:</span>
                    <span className="text-[#00F0FF] font-medium">{currentProject.specs.location}</span>
                  </div>
                </div>
              </div>

              {/* Action Call */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-white font-bold mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span>Want Something Similar For Your Business?</span>
                </p>
                <button
                  onClick={() => {
                    closeLightbox();
                    onOpenQuote();
                  }}
                  className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00F0FF] hover:bg-white shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2"
                >
                  <span>Request a Quote For This Style</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
