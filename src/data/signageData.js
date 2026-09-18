// VTECH SIGNS - Core Data Layer

export const COMPANY_INFO = {
  name: "VTECH SIGNS",
  tagline: "LIGHT UP YOUR BRAND.",
  supportingMessage: "Custom LED Signs, Digital Displays & Creative Signage Solutions.",
  location: "Palapatti, Salem, Tamil Nadu – 636009",
  landmark: "Near 3 Roads / Meyyanur Main Road, Salem",
  experienceYears: "10+",
  instagram: "https://www.instagram.com/vtechvinoth/",
  instagramHandle: "@vtechvinoth",
  businessType: "LED Sign Board Manufacturer & Digital Display Solutions",
  city: "Salem, Tamil Nadu",
  workingHours: "Monday - Saturday: 9:30 AM - 8:30 PM",
  servicesSummary: "Custom Design • Precision Manufacturing • Professional Installation"
};

export const REAL_PROJECTS = [
  {
    id: "luca-tattoo",
    title: "LUCA Tattoo Custom Illuminated Signage",
    category: "LED Signs",
    image: "/images/vtech/luca-tattoo-sign.jpg",
    subtitle: "Dimensional Illuminated Signboard with Custom Cutout & Glow",
    description: "Multi-layered custom signage featuring vibrant cyan LED neon contour lettering, high-definition illuminated graphics, and warm accent backlighting crafted for LUCA Tattoo Studio.",
    specs: {
      type: "Custom Hybrid Neon & Backlit Acrylic",
      lighting: "High-Lumen Cyan Neon Flex & Warm White SMD",
      application: "Studio Brand Identity / Entrance Signage",
      location: "Salem, Tamil Nadu"
    },
    tags: ["LED Signs", "Custom", "Neon Flex", "Studio Signage"],
    isRealVtechWork: true,
    featured: true
  },
  {
    id: "kaben-electric",
    title: "Kaben Electric Bilingual Illuminated Signboard",
    category: "Acrylic",
    image: "/images/vtech/kaben-electric-sign.jpg",
    subtitle: "Precision Acrylic Face-Lit Letters in Tamil & English",
    description: "Corporate retail storefront fascia signage featuring crisp illuminated English typography ('Kaben electric') accompanied by Tamil script ('கேபன் எலக்ட்ரிக்') with warm-white balanced backlighting.",
    specs: {
      type: "3D Face-Lit Acrylic Channel Lettering",
      lighting: "Warm White Premium LED Modules",
      application: "Commercial Retail Storefront",
      location: "Salem, Tamil Nadu"
    },
    tags: ["Acrylic", "LED Signs", "Tamil Script", "Retail Storefront"],
    isRealVtechWork: true,
    featured: true
  },
  {
    id: "to-the-moon",
    title: "'To The Moon And Back' Multicolor Neon Sign",
    category: "Neon",
    image: "/images/vtech/to-the-moon-neon.jpg",
    subtitle: "Curved Spectral Neon Art with Dynamic Color Harmony",
    description: "Custom decorative neon installation featuring dual-color typography ('To The Moon' and 'And Back') intersecting an illuminated gradient circular moon ring.",
    specs: {
      type: "Flexible 12V Silicon Neon LED",
      lighting: "Multi-color Cyan, Magenta, Coral & Royal Blue",
      application: "Interior Decor / Café / Photo Backdrop",
      location: "Salem, Tamil Nadu"
    },
    tags: ["Neon", "Custom", "Interior Decor", "Neon Art"],
    isRealVtechWork: true,
    featured: true
  },
  {
    id: "kamadhenu-decorative",
    title: "Kamadhenu Sacred Art Illuminated Display",
    category: "Custom",
    image: "/images/vtech/kamadhenu-decorative-light.jpg",
    subtitle: "High-CRI Ultra-Slim Illuminated Backlit Art Frame",
    description: "Bespoke religious and cultural illuminated artwork box displaying sacred Kamadhenu iconography with traditional Tamil festival blessings ('பைரவியின் இனிய புத்தாண்டு மற்றும் பொங்கல் கொண்டாட்டம்').",
    specs: {
      type: "High-Definition Slim LED Lightbox",
      lighting: "Edge-Lit High CRI Natural Daylight LEDs",
      application: "Cultural / Devotional / Home & Temple Display",
      location: "Salem, Tamil Nadu"
    },
    tags: ["Custom", "LED Signs", "Backlit Art", "Cultural"],
    isRealVtechWork: true,
    featured: true
  },
  {
    id: "p4-led-video-wall",
    title: "Vtech Salem P4 LED Digital Video Wall",
    category: "Video Wall",
    image: "/images/vtech/p4-led-video-wall.jpg",
    subtitle: "Commercial Grade High-Refresh P4 LED Display System",
    description: "High-resolution P4 indoor LED video wall installation displaying ultra-vivid marine aquarium visuals, featuring seamless modular panel alignment and synchronous video playback.",
    specs: {
      type: "P4 SMD Indoor Modular LED Video Wall",
      lighting: "High-Refresh RGB LED Matrix",
      application: "Showroom / Commercial Space / Video Screen",
      location: "Salem, Tamil Nadu"
    },
    tags: ["Video Wall", "Digital Display", "P4 LED", "Commercial Screen"],
    isRealVtechWork: true,
    featured: true
  }
];

export const PRODUCTS = [
  {
    slug: "led-sign-boards",
    name: "LED Sign Boards",
    category: "LED Signs",
    shortDesc: "High-efficiency illuminated letters and edge-lit storefront boards engineered for maximum visibility.",
    image: "/images/vtech/kaben-electric-sign.jpg",
    applications: ["Storefronts", "Showrooms", "Commercial Offices", "Hospitals", "Hotels"],
    lightingType: "High-lumen waterproof SMD LED modules with uniform diffusion",
    materials: "Cast Acrylic, Aluminum Composite Panels (ACP), Galvanized Steel, 3M Translucent Vinyl",
    suitability: "Indoor & Heavy-Duty Outdoor (IP65/IP67 rated)",
    customization: "Custom sizes, font profiles, multi-language typography (Tamil, English, etc.), and color temperatures.",
    highlights: ["Energy efficient", "Day/Night clear contrast", "Weather resistant", "Long lifespan"]
  },
  {
    slug: "neon-signs",
    name: "Neon LED Signs",
    category: "Neon",
    shortDesc: "Vibrant, flexible silicon LED neon artworks for cafés, boutique stores, photo backdrops, and modern interiors.",
    image: "/images/vtech/to-the-moon-neon.jpg",
    applications: ["Cafés & Restaurants", "Event Stages", "Salons", "Modern Offices", "Home Decor"],
    lightingType: "Low-voltage 12V flexible neon LED tubing with smooth silicone diffusion",
    materials: "Optically clear acrylic backing plate (laser cut to shape), premium silicone flex neon",
    suitability: "Primarily Indoor & covered outdoor setups",
    customization: "Custom lettering, cursive fonts, logos, dual-tone palettes, and dimming controllers.",
    highlights: ["Safe 12V operation", "No fragile glass", "Vivid saturated glow", "Lightweight mounting"]
  },
  {
    slug: "acrylic-sign-boards",
    name: "Acrylic Sign Boards",
    category: "Acrylic",
    shortDesc: "Laser-cut 3D acrylic signs offering pristine optical clarity, front-glow, or subtle backlit halo effects.",
    image: "/images/vtech/luca-tattoo-sign.jpg",
    applications: ["Corporate Receptions", "Executive Cabins", "Retail Counters", "Clinic Branding"],
    lightingType: "Edge-lit or back-lit high-density micro LED strips",
    materials: "Premium cast virgin acrylic (3mm to 20mm), frosted or glossy finish, metallic accents",
    suitability: "Indoor and Outdoor sheltered environments",
    customization: "Laser cut to any contour, reverse engraving, multi-layer depth, brass/chrome studs.",
    highlights: ["Crystal clear finish", "Modern minimalist look", "Scratch resistant", "Precision laser edge"]
  },
  {
    slug: "glow-sign-boards",
    name: "Glow Sign Boards",
    category: "Glow Signs",
    shortDesc: "Durable illuminated box signs with translucent vinyl faces designed for 24/7 commercial roadside presence.",
    image: "/images/vtech/kaben-electric-sign.jpg",
    applications: ["Roadside Shops", "Retail Chains", "Pharmacies", "Distributors", "Service Centers"],
    lightingType: "Evenly spaced LED backlight arrays with zero hot-spots",
    materials: "Heavy-gauge GI framing, powder-coated aluminum extrusion, heavy GSM flex or polycarbonate sheet",
    suitability: "Heavy outdoor weather, monsoons, and direct sun",
    customization: "Single-sided, double-sided cantilever, custom rectangular and circular dimensions.",
    highlights: ["Cost effective", "High impact at night", "Sturdy structural framing", "Easy maintenance"]
  },
  {
    slug: "digital-sign-boards",
    name: "Digital Sign Boards",
    category: "Digital Display",
    shortDesc: "High-brightness electronic display boards for displaying real-time messages, schedules, and dynamic promotions.",
    image: "/images/vtech/p4-led-video-wall.jpg",
    applications: ["Bank counters", "Transport terminals", "Gold & Jewellery rate boards", "Retail offers"],
    lightingType: "Precision pitch LED matrix (P4, P5, P6, P10)",
    materials: "Die-cast aluminum or steel waterproof cabinet with anti-glare louvers",
    suitability: "Indoor and High-ambient Outdoor models",
    customization: "Wi-Fi, LAN, or USB content management, scheduled timing, multi-lingual text display.",
    highlights: ["Real-time updating", "Ultra bright in daylight", "Programmable content", "Long operating life"]
  },
  {
    slug: "led-video-walls",
    name: "LED Video Walls",
    category: "Video Wall",
    shortDesc: "Seamless large-format video display systems delivering ultra-high resolution for showrooms, events, and auditoriums.",
    image: "/images/vtech/p4-led-video-wall.jpg",
    applications: ["Automobile Showrooms", "Event Venues", "Conference Halls", "Retail Flagships", "Stage Backdrops"],
    lightingType: "High-refresh P2.5, P3, P4 SMD RGB LEDs with high grayscale reproduction",
    materials: "Precision CNC die-cast magnesium/aluminum slim cabinets",
    suitability: "Indoor and Semi-outdoor high-visibility zones",
    customization: "Custom aspect ratios (16:9, curved, ultra-wide ribbon displays), video processor integration.",
    highlights: ["Seamless zero-bezel", "High contrast ratio", "Vivid color reproduction", "Modular scalability"]
  },
  {
    slug: "3d-letter-signs",
    name: "3D Letter Signs",
    category: "LED Signs",
    shortDesc: "Architectural dimensional letters in metal, titanium, acrylic, and brass with front or halo illumination.",
    image: "/images/vtech/kaben-electric-sign.jpg",
    applications: ["Corporate Headquarters", "Jewellery Showrooms", "Architectural Facades", "Boutiques"],
    lightingType: "Front-lit, reverse halo-lit, or dual-lit LED modules",
    materials: "Stainless Steel (SS 304), Brass, Rose Gold Titanium, Liquid Acrylic, Cast Acrylic",
    suitability: "Outdoor building fascias & executive interior spaces",
    customization: "Custom typography, metallic electroplating, back-spacer standoff depths.",
    highlights: ["Luxurious architectural finish", "Rust-proof metals", "Sophisticated halo lighting", "Deep 3D dimension"]
  },
  {
    slug: "outdoor-signage",
    name: "Outdoor Signage",
    category: "LED Signs",
    shortDesc: "Weatherproof large-scale entrance pylons, building wraps, and directional totems engineered for high wind loads.",
    image: "/images/vtech/kaben-electric-sign.jpg",
    applications: ["Highway Entrances", "Petrol Pumps", "Industrial Parks", "Commercial Plazas", "Hospitals"],
    lightingType: "IP67 rated waterproof LED modules with industrial power supplies",
    materials: "Structural steel truss framing, ACP cladding, polycarbonate, weather-sealed joints",
    suitability: "Extreme weather, heavy rain, dust, and wind loads",
    customization: "Custom pylon heights, totem pillars, illuminated directory plaques.",
    highlights: ["Structural stability", "High nighttime visibility", "UV-resistant coatings", "Low maintenance"]
  },
  {
    slug: "indoor-signage",
    name: "Indoor Signage",
    category: "Acrylic",
    shortDesc: "Sleek wayfinding, floor directories, departmental markers, and ambient illuminated logos for interior spaces.",
    image: "/images/vtech/luca-tattoo-sign.jpg",
    applications: ["Office Complexes", "Hospitals", "Hotels", "Malls", "Educational Institutes"],
    lightingType: "Soft ambient diffused edge-lit & recessed micro-LEDs",
    materials: "Frosted acrylic, brushed aluminum, anodized trim, wood veneers",
    suitability: "Indoor climate-controlled environments",
    customization: "Tactile lettering, modular changeable inserts, braille compatibility, custom pictograms.",
    highlights: ["Clean corporate aesthetics", "Glare-free lighting", "Easy installation", "Architectural harmony"]
  },
  {
    slug: "scrolling-led-displays",
    name: "Scrolling LED Displays",
    category: "Digital Display",
    shortDesc: "Dynamic single and multi-color moving text displays for timely alerts, announcements, and promotional notices.",
    image: "/images/vtech/p4-led-video-wall.jpg",
    applications: ["Retail shopfronts", "Pharmacies", "Factories", "Educational Institutions", "Bus terminals"],
    lightingType: "P10 Red / Green / Amber / RGB high-intensity DIP/SMD LEDs",
    materials: "Extruded aluminum casing with weather gaskets and acrylic front",
    suitability: "Outdoor and Semi-outdoor high traffic visibility",
    customization: "Single-line or multi-line configurations, USB / Wi-Fi Android app controls.",
    highlights: ["Quick message changes", "High readability from distance", "Cost-effective", "Low power consumption"]
  },
  {
    slug: "led-display-boards",
    name: "LED Display Boards",
    category: "Digital Display",
    shortDesc: "Commercial visual indicator boards, queue management screens, and digital rate boards tailored for service businesses.",
    image: "/images/vtech/p4-led-video-wall.jpg",
    applications: ["Service Centers", "Financial Bureaus", "Gold Showrooms", "Factory Production Dashboards"],
    lightingType: "Segmented or matrix LED arrays with programmable controllers",
    materials: "Powder coated metal casing with matte acrylic cover",
    suitability: "Indoor and indoor-facing windows",
    customization: "Custom data input, serial / network communication, fixed or multi-line layout.",
    highlights: ["Accurate real-time digits", "Robust continuous operation", "Anti-reflective face", "Custom headers"]
  },
  {
    slug: "custom-display-solutions",
    name: "Custom Display Solutions",
    category: "Custom",
    shortDesc: "Bespoke artistic illuminated lightboxes, religious temple displays, and experiential decorative light installations.",
    image: "/images/vtech/kamadhenu-decorative-light.jpg",
    applications: ["Temples & Pooja Rooms", "Art Galleries", "Luxury Residences", "Exhibitions", "Themed Spaces"],
    lightingType: "Color-tunable CCT or dynamic RGB programmable accent lighting",
    materials: "Bespoke framing, printed fabric or high-density translite, wooden casing, metal lattice",
    suitability: "Indoor decorative & cultural displays",
    customization: "Complete custom dimensional fabrication based on customer artwork, photo or architectural drawing.",
    highlights: ["Artisan craftsmanship", "Vibrant colors", "Bespoke framing", "Unique one-of-a-kind creation"]
  }
];

export const SERVICES = [
  {
    slug: "design",
    title: "Custom Signage Design",
    tagline: "Concepts that translate your brand identity into brilliant light",
    icon: "Palette",
    description: "Our team translates your logos, sketches, or ideas into realistic 2D/3D illuminated signage mockups, calculating letter heights, viewing angles, and lighting temperatures.",
    deliverables: ["Scale elevation drawings", "Day vs Night lighting simulation", "Material and color specifications", "Structural mounting blueprint"]
  },
  {
    slug: "manufacturing",
    title: "LED Sign Manufacturing",
    tagline: "In-house precision fabrication right here in Salem",
    icon: "Cpu",
    description: "Equipped with precision laser cutters, CNC routing tables, acrylic bending machines, and high-efficiency LED assembly stations to manufacture dependable signage with strict quality control.",
    deliverables: ["CNC & Laser cut channel letters", "Weatherproof IP-certified LED modules", "Solid aluminum / steel frame reinforcement", "Pre-delivery burn-in testing"]
  },
  {
    slug: "neon-creation",
    title: "Neon Sign Creation",
    tagline: "Hand-crafted flexible silicone LED neon art",
    icon: "Sparkles",
    description: "Artistic fabrication of vibrant custom neon signs for modern cafés, salons, retail backdrops, and events using energy-efficient 12V silicone neon technology.",
    deliverables: ["Precision laser acrylic backing", "Even color blending without hot spots", "Safe low-voltage power supply", "Pre-drilled mounting holes or hanging chains"]
  },
  {
    slug: "video-walls",
    title: "LED Video Walls & Displays",
    tagline: "Turn architectural spaces into dynamic visual experiences",
    icon: "Tv",
    description: "Assembly, configuration, and calibration of seamless modular LED video walls (P2.5, P3, P4) and programmable electronic information display boards.",
    deliverables: ["Seamless modular panel integration", "Video processor and controller setup", "Synchronous content management", "On-site testing and training"]
  },
  {
    slug: "installation",
    title: "Professional Installation",
    tagline: "Safe, structural, and clean site mounting",
    icon: "Wrench",
    description: "Experienced technicians handle secure structural mounting, weather-proof electrical wiring, scaffold setups, and final electrical safety inspections across Salem and surrounding districts.",
    deliverables: ["Heavy-duty anchor mounting", "Concealed wiring & surge-protected drivers", "Safety compliance", "Post-installation lighting check"]
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "SHARE YOUR IDEA",
    description: "Send your brand logo, rough text, reference photograph, or project requirements via our online quote wizard or WhatsApp.",
    highlight: "Initial Consultation"
  },
  {
    step: "02",
    title: "DESIGN & SPECIFY",
    description: "Our design team develops an illuminated signage concept tailored to your site dimensions, viewing distance, and budget.",
    highlight: "Visual Concept"
  },
  {
    step: "03",
    title: "APPROVE",
    description: "Review the detailed digital mockup, Day/Night lighting effects, material choices, and quotation details to confirm your project.",
    highlight: "Sign-Off"
  },
  {
    step: "04",
    title: "MANUFACTURE",
    description: "Your signage is precision laser-cut, assembled, wired with premium LED modules, and rigorously tested in our Salem facility.",
    highlight: "Quality Craftsmanship"
  },
  {
    step: "05",
    title: "INSTALL & ILLUMINATE",
    description: "Our installation team securely mounts the signage at your premises, connects safe power supplies, and illuminates your brand.",
    highlight: "Final Glow"
  }
];

export const INDUSTRIES = [
  {
    slug: "retail",
    name: "Retail Stores",
    description: "High-impact storefront fascias, 3D channel letters, and window neon signs that pull foot traffic from the street.",
    signTypes: ["LED Sign Boards", "3D Letter Signs", "Neon Art"]
  },
  {
    slug: "restaurants",
    name: "Restaurants & Cafés",
    description: "Warm glowing storefronts, photo-ready neon accent walls, and illuminated menu display boards that set the mood.",
    signTypes: ["Neon Signs", "Warm Backlit Letters", "Menu Boards"]
  },
  {
    slug: "salons",
    name: "Salons & Spas",
    description: "Glamorous neon statement pieces and sophisticated metallic front-lit signage reflecting beauty and luxury.",
    signTypes: ["Neon Art", "Rose Gold 3D Letters", "Acrylic Receptions"]
  },
  {
    slug: "hotels",
    name: "Hotels & Hospitality",
    description: "Monument entrance signs, illuminated roof-top letters, and subtle wayfinding directory signage for guests.",
    signTypes: ["Pylon Signs", "Architectural 3D Letters", "Directional Signage"]
  },
  {
    slug: "corporate",
    name: "Corporate Offices",
    description: "Polished reception logos, boardroom illuminated emblems, and modern acrylic directional signs.",
    signTypes: ["Halo-Lit Logos", "Frosted Acrylic", "Interior Wayfinding"]
  },
  {
    slug: "showrooms",
    name: "Showrooms",
    description: "Large format LED video walls and high-lumen storefront branding that command attention in busy commercial hubs.",
    signTypes: ["LED Video Walls", "ACP Fascia Signs", "P3/P4 Displays"]
  },
  {
    slug: "hospitals",
    name: "Hospitals & Clinics",
    description: "High-clarity emergency signs, 24/7 lit rooftop crosses, and easily readable department directory boards.",
    signTypes: ["24/7 Glow Signs", "Emergency Directional", "LED Text Displays"]
  },
  {
    slug: "schools",
    name: "Educational Institutions",
    description: "Campus entrance monumental signage, campus wayfinding, and programmable LED notice display boards.",
    signTypes: ["Outdoor Monument Signs", "Scrolling LED Boards", "Campus Maps"]
  },
  {
    slug: "jewellery",
    name: "Jewellery Stores",
    description: "High-end warm golden halo illumination, titanium letters, and ultra-crisp digital rate display boards.",
    signTypes: ["Titanium 3D Letters", "Digital Rate Boards", "Edge-Lit Acrylic"]
  },
  {
    slug: "cafes",
    name: "Cafés & Bakeries",
    description: "Playful neon coffee cups, aesthetic quote signs for Instagram selfies, and cozy ambient storefronts.",
    signTypes: ["Custom Neon Flex", "Wooden Backlit Boxes", "Window Signs"]
  },
  {
    slug: "gyms",
    name: "Gyms & Fitness Centers",
    description: "Energetic electric-blue and neon-green motivational signs that drive workout focus and energy.",
    signTypes: ["Vibrant Neon Quotes", "Backlit Silhouette Logos", "LED Strip Accents"]
  },
  {
    slug: "events",
    name: "Events & Stages",
    description: "Portable custom neon backdrops, temporary stage lettering, and high-impact modular LED video screens.",
    signTypes: ["LED Video Walls", "Hanging Neon Props", "Stage Backdrops"]
  },
  {
    slug: "temples",
    name: "Temples & Cultural Spaces",
    description: "Bespoke illuminated religious artwork, deity displays with high-CRI natural lighting, and festive signs.",
    signTypes: ["Sacred Art Lightboxes", "Bilingual Tamil Signs", "Architectural Lighting"]
  },
  {
    slug: "factories",
    name: "Factories & Industrial Units",
    description: "Rugged exterior road signs, safety notice displays, and production count LED scrolling boards.",
    signTypes: ["Industrial Glow Signs", "Safety Information Boards", "Pylon Signs"]
  }
];

export const FAQS = [
  {
    question: "What types of LED signs do you make?",
    answer: "We manufacture a comprehensive range of illuminated signage right here in Salem, including 3D face-lit and halo-lit channel letters, acrylic sign boards, silicone LED neon signs, commercial glow sign boards, outdoor building fascias, and digital LED display boards."
  },
  {
    question: "Can you create custom neon signs with our own text or logo?",
    answer: "Yes! We specialize in custom LED neon signs. You can send us your brand name, quote, or vector logo, choose from a wide spectrum of vibrant neon colors (cyan, electric blue, magenta, warm white, etc.), and we will craft a safe, energy-efficient 12V silicone neon sign mounted on laser-cut acrylic."
  },
  {
    question: "Do you make acrylic sign boards?",
    answer: "Yes. We fabricate precision laser-cut acrylic signs featuring front illumination, backlit halo glow, or edge-lighting. We work with premium cast virgin acrylic in various thicknesses (from 3mm to 20mm) and custom finishes."
  },
  {
    question: "Do you manufacture digital LED displays and scrolling message boards?",
    answer: "Yes, we assemble and configure programmable digital LED display boards, scrolling message tickers, and electronic rate/information boards with Wi-Fi, LAN, or USB content management."
  },
  {
    question: "Do you make LED video walls?",
    answer: "Yes, we install commercial indoor and outdoor modular LED video walls (such as P2.5, P3, and P4 pixel pitches) for showrooms, auditoriums, event stages, and commercial retail walls with high refresh rates and seamless panel alignment."
  },
  {
    question: "Can you create a custom design if I only have a rough idea or sketch?",
    answer: "Absolutely. You can provide a rough sketch, an existing logo, or simply describe your vision. Our in-house design team will prepare realistic digital mockups showing how your sign will look during the day and when illuminated at night."
  },
  {
    question: "Do you provide installation services?",
    answer: "Yes, we provide professional installation services across Salem and surrounding districts in Tamil Nadu. Our team handles secure structural mounting, weather-proof wiring, and electrical safety testing."
  },
  {
    question: "Can you make outdoor signs that withstand heavy rain and sunlight?",
    answer: "Yes. Our outdoor signage is built with weather-resistant materials including rust-proof aluminum composite panels (ACP), powder-coated steel frames, and IP65/IP67 certified waterproof LED modules designed for tropical sun and monsoon conditions."
  },
  {
    question: "What is the minimum order?",
    answer: "We cater to individual custom projects (such as a single custom neon sign for a café or room) as well as complete turnkey signage rollouts for large commercial buildings and retail chains."
  },
  {
    question: "How do I request a quote?",
    answer: "You can use our interactive 7-step Quote Wizard on this website, send your project details through the contact form, or message us directly via WhatsApp with your dimensions, location, and photos for a tailored quotation."
  },
  {
    question: "How long does a signage project take?",
    answer: "Project turnaround depends on the complexity, scale, and custom fabrication required. Smaller custom neon or acrylic signs typically take a few days, while larger outdoor channel letter installations or video walls require scheduled fabrication and on-site mounting. Contact us for an exact timeline based on your project."
  },
  {
    question: "Can I send my own design or logo file?",
    answer: "Yes, you can upload your vector files (AI, EPS, PDF, CDR) or high-resolution images (PNG, JPG) directly through our Quote Wizard, or send them over WhatsApp and email for evaluation."
  }
];

export const STATS = [
  { label: "YEARS IN BUSINESS", value: "10+", subtext: "Serving Salem & Beyond" },
  { label: "SIGNAGE SOLUTIONS", value: "100%", subtext: "Custom Tailored Craft" },
  { label: "MANUFACTURING", value: "IN-HOUSE", subtext: "Salem Facility" },
  { label: "LED TECHNOLOGY", value: "MODERN", subtext: "Energy-Efficient & High-CRI" }
];
