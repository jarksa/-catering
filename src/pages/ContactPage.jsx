import { MapPin, Phone, MessageSquare, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { COMPANY_INFO } from '../data/signageData';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    signType: 'LED Sign Board'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[96%] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07112B] border border-[#00F0FF]/30 text-xs font-semibold text-[#00F0FF] uppercase tracking-wider mb-4">
          <MapPin className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight mb-4">
          CONTACT <span className="text-[#00F0FF] neon-glow-cyan">VTECH SIGNS</span>
        </h1>
        <p className="text-[#AAB3C5] text-base sm:text-lg">
          Connect directly with our Salem team for project enquiries, site surveys, or workshop visits.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
            <h3 className="text-xl font-display font-bold text-white">
              Workshop & Studio Location
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Address</strong>
                  <span>{COMPANY_INFO.location}</span>
                  <span className="text-xs text-[#AAB3C5] block mt-0.5">
                    Landmark: {COMPANY_INFO.landmark}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Business Hours</strong>
                  <span>{COMPANY_INFO.workingHours}</span>
                  <span className="text-xs text-gray-400 block mt-0.5">Sunday: By Appointment</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <InstagramIcon className="w-5 h-5 text-[#FF3CAC] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Instagram</strong>
                  <a
                    href={COMPANY_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF3CAC] hover:underline"
                  >
                    @vtechvinoth (Follow for latest work videos)
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="https://wa.me/?text=Hello%20Vtech%20Signs,%20I%20would%20like%20to%20discuss%20a%20signage%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl text-xs font-bold text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href="https://maps.google.com/?q=Palapatti,+Salem,+Tamil+Nadu+636009"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00F0FF] hover:bg-white flex items-center justify-center gap-2 transition-all"
              >
                <span>Google Maps Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Message Form */}
        <div className="lg:col-span-7 glass-panel-elevated rounded-3xl p-6 sm:p-10 border border-[#00F0FF]/30">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
            Send a Quick Message
          </h3>
          <p className="text-xs text-[#AAB3C5] mb-6">
            Fill out your details and our team will get in touch with you shortly.
          </p>

          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-[#25D366]/20 text-[#25D366] border border-[#25D366] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Message Received!</h4>
              <p className="text-xs text-[#AAB3C5] max-w-sm mx-auto">
                Thank you for contacting Vtech Signs Salem. We will review your message and reply promptly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-xl text-xs font-bold text-[#00F0FF] border border-[#00F0FF]/30 hover:bg-[#00F0FF]/10"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 focus:border-[#00F0FF] focus:outline-none text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 focus:border-[#00F0FF] focus:outline-none text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Signage Requirement</label>
                <select
                  value={formData.signType}
                  onChange={(e) => setFormData({ ...formData, signType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 focus:border-[#00F0FF] focus:outline-none text-white text-sm"
                >
                  <option value="LED Sign Board">LED Sign Board</option>
                  <option value="Neon Sign">Custom Neon Sign</option>
                  <option value="Acrylic Sign">Acrylic Sign Board</option>
                  <option value="Glow Sign">Glow Sign Board</option>
                  <option value="Digital Display">Digital Display / LED Video Wall</option>
                  <option value="3D Letters">3D Dimensional Letters</option>
                  <option value="Other">Other Custom Work</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Message / Project Details</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about your brand, wall size, location in Salem or nearby, etc..."
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 focus:border-[#00F0FF] focus:outline-none text-white text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00F0FF] hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2"
              >
                <span>Send Message to Vtech Signs</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
