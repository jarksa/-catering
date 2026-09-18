import { useState } from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/?text=Hello%20Vtech%20Signs,%20I%20am%20looking%20for%20a%20signage%20quotation%20and%20mockup."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group flex items-center gap-2.5 bg-[#25D366] text-black font-bold p-3.5 sm:p-4 rounded-full shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:shadow-[0_0_35px_rgba(37,211,102,0.9)] hover:scale-105 transition-all duration-300"
        aria-label="Chat with Vtech Signs on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-black text-black shrink-0" />

        {/* Desktop Expandable Text */}
        <span
          className={`hidden sm:inline-block overflow-hidden whitespace-nowrap text-xs uppercase tracking-wider font-extrabold transition-all duration-300 ${
            isHovered ? 'max-w-xs opacity-100 pr-1' : 'max-w-0 opacity-0'
          }`}
        >
          Chat with Vtech Signs
        </span>

        {/* Mobile Persistent Pill Label */}
        <span className="sm:hidden text-xs uppercase tracking-wider font-extrabold pr-1">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}
