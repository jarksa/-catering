import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ArrowLeft, Check, Upload, Building2, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuoteWizard({ prefillData, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    signType: prefillData?.signType || 'LED Sign Board',
    installationLocation: 'Outdoor',
    lightingStyle: prefillData?.color ? `Custom Neon (${prefillData.color})` : 'Front-Lit Channel Letters',
    approximateSize: prefillData?.size ? `Custom (${prefillData.size})` : 'Medium (3 ft to 8 ft)',
    hasUploadedFile: false,
    uploadedFileName: '',
    name: '',
    businessName: prefillData?.customText || '',
    phone: '',
    whatsapp: '',
    email: '',
    city: 'Salem',
    projectDescription: prefillData?.customText
      ? `Custom design request: "${prefillData.customText}" in ${prefillData.font || 'Custom'} font, ${prefillData.color || 'Neon'} color.`
      : ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        signType: prefillData.signType || prev.signType,
        businessName: prefillData.customText || prev.businessName,
        projectDescription: prefillData.customText
          ? `Custom design request: "${prefillData.customText}" in ${prefillData.font || 'Custom'} font, ${prefillData.color || 'Neon'} color.`
          : prev.projectDescription
      }));
    }
  }, [prefillData]);

  const signTypesList = [
    'LED Sign Board',
    'Neon Sign',
    'Acrylic Sign',
    'Glow Sign',
    'Digital Display',
    'LED Video Wall',
    '3D Letters',
    'Other Custom Signage'
  ];

  const lightingStyles = [
    'Front-Lit Channel Letters',
    'Backlit / Halo-Lit Glow',
    'Flexible Silicone LED Neon',
    'Edge-Lit Clear Acrylic',
    'Modular LED Video Wall (P4/P3)',
    'Dual-Lit (Front & Backlit)',
    'Non-Illuminated Matte'
  ];

  const sizeOptions = [
    { label: 'Small Accent', desc: 'Up to 3 ft (Ideal for Receptions & Café walls)' },
    { label: 'Medium Storefront', desc: '3 ft to 8 ft (Standard Retail Entrance Fascias)' },
    { label: 'Large Commercial', desc: '8 ft to 20 ft (Building Facades & Large Showrooms)' },
    { label: 'Monument / Custom Size', desc: 'Pylons, Totems, Highway Displays or Custom Specs' }
  ];

  const handleFileUploadMock = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        hasUploadedFile: true,
        uploadedFileName: e.target.files[0].name
      });
    }
  };

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
    } else if (currentStep === 6) {
      // Validate mandatory fields
      if (!formData.name || !formData.phone) {
        alert('Please provide at least your Name and Phone Number so we can reach you with the quote.');
        return;
      }
      setIsSubmitted(true);
      setCurrentStep(7);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00F0FF', '#FF3CAC', '#00C8FF', '#25D366']
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="glass-panel-elevated rounded-3xl p-6 sm:p-10 border border-[#00F0FF]/30 shadow-[0_0_60px_rgba(0,0,0,0.9)] max-w-3xl mx-auto w-full">
      {/* Top Header & Progress */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#00F0FF] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Quote Wizard</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mt-1">
            LET'S LIGHT UP YOUR IDEA.
          </h3>
        </div>

        {!isSubmitted && (
          <div className="text-right">
            <span className="font-mono text-xs font-bold text-gray-400">Step</span>
            <div className="font-display font-black text-xl text-[#00F0FF]">
              0{currentStep} <span className="text-gray-500 text-sm">/ 06</span>
            </div>
          </div>
        )}
      </div>

      {/* Step 1: Signage Type */}
      {currentStep === 1 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <h4 className="text-base sm:text-lg font-display font-bold text-white">
            01. What type of signage are you looking for?
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {signTypesList.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData({ ...formData, signType: type })}
                className={`p-4 rounded-xl text-left border transition-all ${
                  formData.signType === type
                    ? 'bg-[#00F0FF]/15 border-[#00F0FF] text-white shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                    : 'bg-black/40 border-white/10 text-gray-300 hover:border-white/25 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">{type}</span>
                  {formData.signType === type && (
                    <span className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Indoor / Outdoor */}
      {currentStep === 2 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <h4 className="text-base sm:text-lg font-display font-bold text-white">
            02. Where will this signage be installed?
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                id: 'Outdoor',
                title: 'Outdoor Installation',
                desc: 'Building fascias, roadside storefronts, pylons, entrance gates. Requires heavy weatherproof IP65 rating.'
              },
              {
                id: 'Indoor',
                title: 'Indoor Space',
                desc: 'Reception walls, office cabins, café interiors, salons, decorative backdrops, or event stages.'
              }
            ].map((loc) => (
              <button
                key={loc.id}
                type="button"
                onClick={() => setFormData({ ...formData, installationLocation: loc.id })}
                className={`p-6 rounded-2xl text-left border transition-all ${
                  formData.installationLocation === loc.id
                    ? 'bg-[#00F0FF]/15 border-[#00F0FF] text-white shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                    : 'bg-black/40 border-white/10 text-gray-300 hover:border-white/25'
                }`}
              >
                <span className="font-bold text-base block text-white mb-2">{loc.title}</span>
                <span className="text-xs text-[#AAB3C5] leading-relaxed block">{loc.desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Lighting Style */}
      {currentStep === 3 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <h4 className="text-base sm:text-lg font-display font-bold text-white">
            03. What type of lighting / illumination do you prefer?
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {lightingStyles.map((style) => (
              <button
                key={style}
                type="button"
                onClick={() => setFormData({ ...formData, lightingStyle: style })}
                className={`p-4 rounded-xl text-left border text-xs sm:text-sm font-semibold transition-all ${
                  formData.lightingStyle === style
                    ? 'bg-[#00F0FF]/15 border-[#00F0FF] text-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                    : 'bg-black/40 border-white/10 text-gray-300 hover:border-white/25 hover:text-white'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Approximate Size */}
      {currentStep === 4 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <h4 className="text-base sm:text-lg font-display font-bold text-white">
            04. What is the approximate size of your sign?
          </h4>
          <div className="space-y-3">
            {sizeOptions.map((opt) => (
              <button
                key={opt.label}
                type="button"
                onClick={() => setFormData({ ...formData, approximateSize: opt.label })}
                className={`w-full p-4 rounded-xl text-left border transition-all ${
                  formData.approximateSize === opt.label
                    ? 'bg-[#00F0FF]/15 border-[#00F0FF] text-white shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                    : 'bg-black/40 border-white/10 text-gray-300 hover:border-white/25 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-sm block">{opt.label}</span>
                    <span className="text-xs text-[#AAB3C5]">{opt.desc}</span>
                  </div>
                  {formData.approximateSize === opt.label && (
                    <Check className="w-5 h-5 text-[#00F0FF]" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 5: Upload Logo / Reference */}
      {currentStep === 5 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <h4 className="text-base sm:text-lg font-display font-bold text-white">
            05. Upload your logo or reference image (Optional)
          </h4>
          <p className="text-xs text-[#AAB3C5]">
            Have an existing vector file, sketch, storefront photo or reference image? Upload it here for a faster, more accurate mockup and quotation.
          </p>

          <label className="border-2 border-dashed border-white/20 hover:border-[#00F0FF] rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all bg-black/40 hover:bg-black/60 group">
            <Upload className="w-10 h-10 text-[#00F0FF] mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold text-white mb-1">
              Click to browse or drop files here
            </span>
            <span className="text-xs text-gray-400">
              Supports AI, PDF, CDR, PNG, JPG (Max 25MB)
            </span>
            <input
              type="file"
              className="hidden"
              onChange={handleFileUploadMock}
              accept=".jpg,.jpeg,.png,.pdf,.ai,.cdr"
            />
          </label>

          {formData.hasUploadedFile && (
            <div className="p-3.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-between text-xs text-[#25D366]">
              <span className="font-bold">Attached: {formData.uploadedFileName}</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          )}
        </div>
      )}

      {/* Step 6: Contact Information */}
      {currentStep === 6 && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <h4 className="text-base sm:text-lg font-display font-bold text-white mb-2">
            06. Where should we send your quotation & concept mockup?
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Your Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Anand Kumar"
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-[#00F0FF] focus:outline-none text-white text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Business Name</label>
              <input
                type="text"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                placeholder="e.g. Salem Tech Hub"
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-[#00F0FF] focus:outline-none text-white text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. +91 98765 43210"
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-[#00F0FF] focus:outline-none text-white text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">WhatsApp Number</label>
              <input
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="Same as phone or custom"
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-[#00F0FF] focus:outline-none text-white text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="anand@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-[#00F0FF] focus:outline-none text-white text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">City / Location</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="Salem, Tamil Nadu"
                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-[#00F0FF] focus:outline-none text-white text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">Project Details / Notes</label>
            <textarea
              rows={3}
              value={formData.projectDescription}
              onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
              placeholder="Tell us about your wall space, desired colors, viewing distance, or custom ideas..."
              className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-[#00F0FF] focus:outline-none text-white text-sm"
            />
          </div>
        </div>
      )}

      {/* Step 7: Animated Success Confirmation */}
      {isSubmitted && (
        <div className="py-12 text-center space-y-6 animate-in zoom-in-95 duration-500">
          <div className="w-16 h-16 rounded-full bg-[#25D366]/20 border border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(37,211,102,0.4)]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h4 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            Thank you, {formData.name || 'Friend'}!
          </h4>
          <p className="text-sm text-[#00F0FF] font-semibold">
            Your enquiry has been received by Vtech Signs.
          </p>
          <p className="text-xs sm:text-sm text-[#AAB3C5] max-w-md mx-auto leading-relaxed">
            Our team in Palapatti, Salem is reviewing your specifications for <strong>{formData.signType}</strong>. We will reach out shortly with a custom concept mockup and tailored quotation.
          </p>

          <div className="p-4 rounded-xl bg-black/50 border border-white/10 max-w-md mx-auto text-left text-xs space-y-1.5 text-gray-300">
            <p><strong>Sign Type:</strong> {formData.signType}</p>
            <p><strong>Installation:</strong> {formData.installationLocation}</p>
            <p><strong>Lighting:</strong> {formData.lightingStyle}</p>
            <p><strong>Size:</strong> {formData.approximateSize}</p>
            <p><strong>Location:</strong> {formData.city}</p>
          </div>

          <div className="pt-4 flex items-center justify-center gap-4">
            <a
              href={`https://wa.me/?text=Hello%20Vtech%20Signs,%20I%20just%20submitted%20an%20enquiry%20for%20${encodeURIComponent(formData.signType)}%20for%20my%20business%20${encodeURIComponent(formData.businessName || formData.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl text-xs font-bold bg-[#25D366] text-black shadow-[0_0_15px_#25D366] transition-all"
            >
              Follow Up on WhatsApp Now
            </a>
            {onClose && (
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 transition-all"
              >
                Close Window
              </button>
            )}
          </div>
        </div>
      )}

      {/* Navigation Controls Bar */}
      {!isSubmitted && (
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
              currentStep === 1
                ? 'opacity-30 cursor-not-allowed text-gray-500'
                : 'text-gray-300 hover:text-white bg-white/5 hover:bg-white/10'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00F0FF] hover:bg-white shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center gap-2"
          >
            <span>{currentStep === 6 ? 'REQUEST A QUOTE →' : 'Continue'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
