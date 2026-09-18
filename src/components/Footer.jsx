import { MessageSquare, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO, REAL_PROJECTS } from '../data/signageData';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function Footer({ onNavigate }) {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Services', path: '/services' },
    { label: 'Our Work', path: '/our-work' },
    { label: 'LED Displays', path: '/products/led-video-walls' },
    { label: 'Industries', path: '/industries' },
    { label: 'About', path: '/about' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  const productLinks = [
    { label: 'LED Sign Boards', path: '/products/led-sign-boards' },
    { label: 'Neon LED Signs', path: '/products/neon-signs' },
    { label: 'Acrylic Sign Boards', path: '/products/acrylic-sign-boards' },
    { label: 'Glow Sign Boards', path: '/products/glow-sign-boards' },
    { label: 'Digital Sign Boards', path: '/products/digital-sign-boards' },
    { label: 'LED Video Walls', path: '/products/led-video-walls' },
    { label: '3D Letter Signs', path: '/products/3d-letter-signs' },
    { label: 'Outdoor Signage', path: '/products/outdoor-signage' },
  ];

  return (
    <footer className="bg-[#02050f] border-t border-white/10 pt-16 pb-12 text-[#AAB3C5]">
      {/* Instagram Community Section */}
      <div className="max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8 mb-16 pb-16 border-b border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF3CAC] mb-1">
              <InstagramIcon className="w-4 h-4" />
              <span>SEE MORE OF OUR WORK</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Follow Vtech Signs on Instagram
            </h3>
            <p className="text-xs text-[#AAB3C5] mt-1">
              Watch recent shop fabrication videos, customer sign handovers, and glowing test runs.
            </p>
          </div>

          <a
            href={COMPANY_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#8B5CF6] via-[#FF3CAC] to-[#FF7B00] hover:opacity-90 shadow-[0_0_20px_rgba(255,60,172,0.3)] transition-all flex items-center gap-2 shrink-0"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>FOLLOW @vtechvinoth</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Real Work Instagram Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {REAL_PROJECTS.map((proj) => (
            <a
              key={proj.id}
              href={COMPANY_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-black/60"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                <span className="text-[11px] font-bold text-white flex items-center gap-1">
                  <InstagramIcon className="w-3.5 h-3.5 text-[#FF3CAC]" />
                  <span>View Reel</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Brand Col */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#07112B] border border-[#00F0FF]/40 text-[#00F0FF] font-black">
              V
            </div>
            <span className="font-display font-extrabold text-xl text-white tracking-wider">
              VTECH <span className="text-[#00F0FF]">SIGNS</span>
            </span>
          </div>

          <p className="text-xs text-[#AAB3C5] leading-relaxed max-w-sm">
            {COMPANY_INFO.supportingMessage} Precision manufactured in Palapatti, Salem, Tamil Nadu.
          </p>

          <div className="pt-2 text-xs space-y-1 text-gray-400">
            <p className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>Palapatti, Salem, Tamil Nadu – 636009</span>
            </p>
            <p className="text-[11px] text-gray-500 pl-5">
              Near 3 Roads / Meyyanur Main Road
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="space-y-2 text-xs">
            {quickLinks.slice(0, 6).map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.path);
                  }}
                  className="hover:text-[#00F0FF] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Signage Products</h4>
          <ul className="space-y-2 text-xs">
            {productLinks.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.path);
                  }}
                  className="hover:text-[#00F0FF] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Direct Contact</h4>
          <p className="text-xs text-[#AAB3C5]">
            Contact our Salem workshop team for rapid consultation and on-site measurements.
          </p>

          <div className="space-y-2 pt-1">
            <a
              href="https://wa.me/?text=Hello%20Vtech%20Signs,%20I%20am%20looking%20for%20a%20signage%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-xs font-semibold text-[#25D366] hover:bg-[#25D366]/20 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={COMPANY_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FF3CAC]/10 border border-[#FF3CAC]/30 text-xs font-semibold text-[#FF3CAC] hover:bg-[#FF3CAC]/20 transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram: @vtechvinoth</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright */}
      <div className="max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
        <p>© {new Date().getFullYear()} Vtech Signs. All rights reserved. Salem, Tamil Nadu.</p>
        <p className="flex items-center gap-1">
          <span>Crafted for Brilliance</span>
          <span className="text-[#00F0FF]">•</span>
          <span>Light Up Your Brand</span>
        </p>
      </div>
    </footer>
  );
}
