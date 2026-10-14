import { motion } from 'framer-motion';
import { ArrowRight, Package, Eye, Target, ChevronLeft, ChevronRight, Plus, Minus, CheckCircle2, ShieldCheck, Building2, Globe, Award, ZoomIn, X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config';
import { useState } from 'react';
import { SEO } from '../components/SEO';

const productsGrid = [
  { 
    name: 'CYLINDER LINERS', 
    desc: 'High performance dry, wet and air-cooled cylinder liners centrifugally cast to OE & custom specifications.', 
    img: '/images/in_cylinder_liners.jpeg', 
    path: '/products/cylinder-liners' 
  },
  { 
    name: 'PISTONS', 
    desc: 'Durable eutectic silicon-aluminum alloy pistons with Ni-Resist ring groove carrier inserts.', 
    img: '/images/piston_hero.jpg', 
    path: '/products/pistons' 
  },
  { 
    name: 'AIR BRAKE COMPRESSOR KITS', 
    desc: 'Complete repair overhaul kits including cylinder block, pistons, and piston rings for heavy-duty trucks.', 
    img: '/images/air_compressor_kits.jpeg', 
    path: '/products/air-compressor-kits' 
  },
  { 
    name: 'CONNECTING RODS', 
    desc: 'Drop-forged micro-alloy steel connecting rods engineered for high fatigue strength and precise tolerances.', 
    img: '/images/connecting_rods.jpeg', 
    path: '/products/connecting-rods' 
  },
  { 
    name: 'AGRICULTURAL DIESEL ENGINES', 
    desc: 'Heavy-duty replacement engine spare parts and assemblies for agricultural tractors and water pumps.', 
    img: '/images/agricultural_engines.jpeg', 
    path: '/products/agricultural-diesel-engines' 
  },
  { 
    name: 'POWER GENSETS', 
    desc: 'Reliable stationary power generation components, agricultural pumpsets, and diesel generator assemblies.', 
    img: '/images/power_gensets_1.jpeg', 
    path: '/products/power-gensets' 
  },
  { 
    name: 'VALVE GUIDES', 
    desc: 'Pearlitic cast iron and sintered bronze alloy valve guides for optimal thermal conductivity & stem protection.', 
    img: '/images/valve_guides.jpeg', 
    path: '/products/valve-guides' 
  },
  { 
    name: 'PRECISION CASTINGS', 
    desc: 'Custom shell-moulded grey iron, SG iron, and aluminum gravity castings built to CAD drawings.', 
    img: '/images/our_castings.jpeg', 
    path: '/products/castings' 
  }
];

const faqs = [
  { q: "What is your Minimum Order Quantity (MOQ)?", a: "Our MOQ is 300 pieces per order per line item." },
  { q: "Are you a certified engine parts manufacturer?", a: "Yes, Singhal Industrial Corporation (KOMODO Engine Parts) is ISO 9001:2015 certified for manufacturing and quality control." },
  { q: "Do you offer customized branding and private label packaging?", a: "Yes, we offer tailored OEM packaging, custom laser marking, and customized box branding according to client specifications." },
  { q: "Which global markets do you export to?", a: "We export high-performance engine parts across international markets in Europe, Middle East, Africa, Latin America, and Asia." },
  { q: "Can you develop custom engine parts from technical CAD drawings?", a: "Yes, our engineering team manufactures custom pistons, cylinder liners, and castings based on technical drawings or physical samples." }
];

export function Home() {
  const [openFaq, setOpenFaq] = useState<number>(0);
  const [showCertModal, setShowCertModal] = useState<boolean>(false);

  return (
    <div className="w-full bg-white">
      <SEO 
        title="Auto & Agricultural Engine Spare Parts Manufacturer India"
        description="Singhal Industrial Corporation (KOMODO Engine Parts) - Premier ISO 9001:2015 manufacturer & exporter of Cylinder Liners, Pistons, Gaskets, Air Compressor Kits & Engine Components in Agra, India since 1966. Exporting to 45+ countries worldwide."
        canonicalPath="/"
      />

      {/* Hero Section - Full Width Edge-to-Edge */}
      <section className="w-full relative overflow-hidden min-h-[550px] md:min-h-[620px] flex items-center bg-[#EEF1F5] border-b border-zinc-100">
        {/* Full width background banner image */}
        <img 
          src="/images/banner.png" 
          alt="KOMODO Engine Parts Hero Banner" 
          className="absolute inset-0 w-full h-full object-cover object-right z-0"
        />
        
        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-16 md:py-24">
          <div className="max-w-xl lg:max-w-2xl bg-white/40 md:bg-transparent p-6 md:p-0 rounded-3xl backdrop-blur-sm md:backdrop-blur-none">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-block bg-[#E53935] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider shadow-sm">
                Best Auto Parts Manufacturers
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 leading-[1.12] mb-5 tracking-tight">
                {companyConfig.tagline}
              </h1>
              <div className="text-lg md:text-xl font-bold text-[#E53935] mb-4">
                Manufacturer of Cylinder Liners, Pistons & Engine Valves
              </div>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                We are one of the leading engine parts manufacturers & exporters, serving automotive OEMs and aftermarket customers around the world with decades of excellence in customer service.
              </p>
              <div>
                <Link 
                  to="/about" 
                  className="inline-flex items-center px-8 py-4 bg-[#E53935] text-white font-bold text-sm rounded-full hover:bg-red-700 transition-all shadow-md"
                >
                  More Details <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Combined Value Props & Performance Stats Section */}
      <section className="py-10 md:py-14 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Top Row: Quality, Vision, Mission */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Package, title: 'QUALITY', desc: 'Renowned for its quality and commitment to excellence' },
              { icon: Eye, title: 'VISION', desc: 'Our aim is to be a market leader in machined parts across industries' },
              { icon: Target, title: 'MISSION', desc: 'Delivering precision-engineered engine components with reliability, innovation, and partnership for long-term global success.' }
            ].map((prop, i) => (
              <div key={i} className="flex items-start space-x-4 p-5 rounded-2xl bg-[#F8FAFC] border border-zinc-200/70 hover:border-red-200 transition-colors">
                <div className="p-2.5 bg-red-50 text-[#D34747] rounded-xl shrink-0">
                  <prop.icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-zinc-900 text-base mb-1 tracking-wide">{prop.title}</h3>
                  <p className="text-zinc-600 text-xs leading-relaxed">{prop.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Performance Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Stat 1: 60+ Years */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-zinc-200/70 hover:border-red-200 transition-colors flex items-center space-x-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-2xl shrink-0">
                <Building2 className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-3xl font-black text-emerald-600 tracking-tight leading-none mb-1">
                  60+
                </div>
                <div className="text-zinc-800 text-xs font-extrabold uppercase tracking-wide">
                  Years Experience
                </div>
                <div className="text-zinc-500 text-[11px] font-medium">
                  Manufacturing Excellence
                </div>
              </div>
            </div>

            {/* Stat 2: 25+ Export Markets */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-zinc-200/70 hover:border-red-200 transition-colors flex items-center space-x-4">
              <div className="p-3 bg-blue-500/10 text-blue-600 rounded-2xl shrink-0">
                <Globe className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-3xl font-black text-blue-600 tracking-tight leading-none mb-1">
                  25+
                </div>
                <div className="text-zinc-800 text-xs font-extrabold uppercase tracking-wide">
                  Export Markets
                </div>
                <div className="text-zinc-500 text-[11px] font-medium">
                  Global Supply Network
                </div>
              </div>
            </div>

            {/* Stat 3: 3,000+ Monthly Capacity */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-zinc-200/70 hover:border-red-200 transition-colors flex items-center space-x-4">
              <div className="p-3 bg-orange-500/10 text-orange-600 rounded-2xl shrink-0">
                <Package className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-3xl font-black text-orange-600 tracking-tight leading-none mb-1">
                  3,000+
                </div>
                <div className="text-zinc-800 text-xs font-extrabold uppercase tracking-wide">
                  Liners / Month
                </div>
                <div className="text-zinc-500 text-[11px] font-medium">
                  High Volume Production
                </div>
              </div>
            </div>

            {/* Stat 4: OEM Quality */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-zinc-200/70 hover:border-red-200 transition-colors flex items-center space-x-4">
              <div className="p-3 bg-purple-500/10 text-purple-600 rounded-2xl shrink-0">
                <CheckCircle2 className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-2xl font-black text-purple-600 tracking-tight leading-none mb-1 uppercase">
                  OEM Quality
                </div>
                <div className="text-zinc-800 text-xs font-extrabold uppercase tracking-wide">
                  Engine Grade Standard
                </div>
                <div className="text-zinc-500 text-[11px] font-medium">
                  Mercedes • Volvo • Cummins
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SUITABLE FOR / OEM COMPATIBILITY Section - Non-Grid Organic Scatter Pattern */}
      <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-zinc-200/80 overflow-hidden relative">
        {/* Decorative background glows */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-4 tracking-tight uppercase">
                SUITABLE FOR
              </h2>
              <div className="w-20 h-1 bg-[#E53935] mx-auto mb-6 rounded-full" />
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                Precision-engineered engine spare parts, cylinder liners, pistons & components suitable for leading global commercial vehicle, tractor, agricultural & industrial engine brands.
              </p>
            </motion.div>
          </div>

          {/* Organic Non-Grid Floating Logo Scatter Cloud */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-14 gap-y-10 md:gap-y-14 max-w-6xl mx-auto px-2">
            {[
              { name: 'Volvo', img: '/images/suitable_for/logo-1.png', size: 'h-14 md:h-18', shiftY: '-translate-y-3', floatDelay: 0 },
              { name: 'Caterpillar (CAT)', img: '/images/suitable_for/logo-9.png', size: 'h-16 md:h-22', shiftY: 'translate-y-4', floatDelay: 0.3 },
              { name: 'Mercedes-Benz', img: '/images/suitable_for/logo-4.png', size: 'h-14 md:h-18', shiftY: '-translate-y-5', floatDelay: 0.6 },
              { name: 'Toyota', img: '/images/suitable_for/logo-2.png', size: 'h-16 md:h-20', shiftY: 'translate-y-2', floatDelay: 0.2 },
              { name: 'Perkins', img: '/images/suitable_for/logo-3.png', size: 'h-12 md:h-16', shiftY: '-translate-y-4', floatDelay: 0.5 },
              
              { name: 'Scania', img: '/images/suitable_for/logo-5.png', size: 'h-14 md:h-18', shiftY: 'translate-y-5', floatDelay: 0.1 },
              { name: 'Ashok Leyland', img: '/images/suitable_for/logo-6.png', size: 'h-16 md:h-20', shiftY: '-translate-y-2', floatDelay: 0.4 },
              { name: 'Iveco', img: '/images/suitable_for/logo-7.png', size: 'h-11 md:h-15', shiftY: 'translate-y-3', floatDelay: 0.7 },
              { name: 'Deutz', img: '/images/suitable_for/logo-10.png', size: 'h-14 md:h-18', shiftY: '-translate-y-6', floatDelay: 0.25 },
              { name: 'Mack Trucks', img: '/images/suitable_for/logo-8.png', size: 'h-16 md:h-20', shiftY: 'translate-y-4', floatDelay: 0.55 },

              { name: 'Atlas Copco', img: '/images/suitable_for/logo-11.png', size: 'h-10 md:h-14', shiftY: '-translate-y-3', floatDelay: 0.15 },
              { name: 'Lister Petter', img: '/images/suitable_for/logo-12.png', size: 'h-12 md:h-16', shiftY: 'translate-y-2', floatDelay: 0.35 },
              { name: 'Massey Ferguson', img: '/images/suitable_for/logo-14.png', size: 'h-14 md:h-18', shiftY: '-translate-y-4', floatDelay: 0.65 },
              { name: 'FIAT', img: '/images/suitable_for/logo-13.png', size: 'h-10 md:h-13', shiftY: 'translate-y-3', floatDelay: 0.4 },
              { name: 'Zetor', img: '/images/suitable_for/logo-15.png', size: 'h-12 md:h-16', shiftY: '-translate-y-2', floatDelay: 0.8 },
              { name: 'UTB (Universal)', img: '/images/suitable_for/logo-16.png', size: 'h-14 md:h-18', shiftY: 'translate-y-5', floatDelay: 0.2 },
              { name: 'Lombardini', img: '/images/suitable_for/logo-17.png', size: 'h-10 md:h-14', shiftY: '-translate-y-3', floatDelay: 0.5 }
            ].map((logo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.04 }}
                className={`relative group flex flex-col items-center justify-center p-2 ${logo.shiftY}`}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: logo.floatDelay
                  }}
                  whileHover={{ scale: 1.15, y: -8 }}
                  className="flex items-center justify-center cursor-pointer transition-transform duration-300"
                >
                  <img 
                    src={logo.img} 
                    alt={`Engine spare parts suitable for ${logo.name}`} 
                    className={`${logo.size} max-w-[180px] md:max-w-[220px] object-contain opacity-100 group-hover:scale-105 group-hover:drop-shadow-xl transition-all duration-300`}
                  />
                </motion.div>

                {/* Subtle Hover Tooltip */}
                <div className="absolute -bottom-7 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 transform translate-y-1 group-hover:translate-y-0">
                  <span className="bg-zinc-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer Note */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-[11px] text-zinc-400 leading-relaxed italic bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-zinc-200/80 shadow-sm">
              * Note: All manufacturer names, numbers, symbols and descriptions used herein are for reference purposes only. The parts supplied are high-quality aftermarket engine replacement parts manufactured by Singhal Industrial Corporation (KOMODO Engine Parts).
            </p>
          </div>

        </div>
      </section>

      {/* OUR PRODUCTS Section */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#D32F2F] text-xs font-extrabold uppercase tracking-widest block mb-2">
              Our Core Offerings
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-4 uppercase">
              OUR PRODUCTS
            </h2>
            <p className="text-zinc-600 text-sm">
              Explore our precision-engineered engine components. Each links to its dedicated specification page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsGrid.map((product, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-200/80 flex flex-col justify-between group">
                <div className="h-56 overflow-hidden relative bg-zinc-50 flex items-center justify-center p-4">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  <h3 className="absolute bottom-4 left-6 text-xl font-black text-white drop-shadow-md">{product.name}</h3>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-zinc-600 text-xs leading-relaxed mb-6">{product.desc}</p>
                  <Link 
                    to={product.path} 
                    className="inline-flex items-center text-[#D32F2F] font-bold text-xs uppercase tracking-wider group-hover:text-red-700 transition-colors"
                  >
                    View Product Page <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR BRANDS Section */}
      <section className="py-16 md:py-20 bg-zinc-50 border-t border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#D34747] text-xs font-extrabold uppercase tracking-widest block mb-2">
              Our Multi-Brand Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-3 uppercase">
              Six Brands. One Manufacturer.
            </h2>
            <p className="text-zinc-600 text-sm md:text-base">
              Manufactured and exported worldwide by <strong>Singhal Industrial Corporation</strong>, Agra, India.
            </p>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Brand 1: KOMODO */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-40 md:h-44 bg-white rounded-2xl border border-zinc-200 p-4 flex items-center justify-center relative mb-6 shadow-sm overflow-hidden">
                  <span className="absolute top-3 right-3 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm z-10">
                    Primary Brand
                  </span>
                  <img 
                    src="/images/komodo_logo.jpeg" 
                    alt="KOMODO Logo" 
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-xl font-extrabold text-zinc-900 mb-2">KOMODO</h3>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Premium export engine parts for trucks, buses, commercial vehicles, and heavy-duty diesel engines.
                </p>
              </div>
            </div>

            {/* Brand 2: KAT */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-40 md:h-44 bg-white rounded-2xl border border-zinc-200 p-4 flex items-center justify-center relative mb-6 shadow-sm overflow-hidden">
                  <img 
                    src="/images/kat.jpeg" 
                    alt="KAT Brand Logo" 
                    className="w-full h-full object-contain p-1 scale-125 md:scale-140 group-hover:scale-150 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-xl font-extrabold text-zinc-900 mb-2">KAT</h3>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Heavy-duty engine components engineered for commercial vehicles, tractors, and industrial applications.
                </p>
              </div>
            </div>

            {/* Brand 3: ENGLISH PETTER */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-40 md:h-44 bg-white rounded-2xl border border-zinc-200 p-4 flex items-center justify-center relative mb-6 shadow-sm overflow-hidden">
                  <img 
                    src="/images/englishpetter.jpeg" 
                    alt="ENGLISH PETTER Brand Logo" 
                    className="w-full h-full object-contain p-1 scale-150 md:scale-[1.75] group-hover:scale-[1.85] transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-xl font-extrabold text-zinc-900 mb-2">ENGLISH PETTER</h3>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Heavy Duty Diesel engines and pumpsets for agriculture for the export market.
                </p>
              </div>
            </div>

            {/* Brand 4: INDOLAND */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-40 md:h-44 bg-white rounded-2xl border border-zinc-200 p-4 flex items-center justify-center relative mb-6 shadow-sm overflow-hidden">
                  <img 
                    src="/images/indoland.jpeg" 
                    alt="INDOLAND Brand Logo" 
                    className="w-full h-full object-contain p-1 scale-125 md:scale-135 group-hover:scale-145 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-xl font-extrabold text-zinc-900 mb-2">INDOLAND</h3>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Premium quality Heavy Duty Diesel engines and pumpsets for agriculture and power generation for the export market.
                </p>
              </div>
            </div>

            {/* Brand 5: PROMAX */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-40 md:h-44 bg-white rounded-2xl border border-zinc-200 p-4 flex items-center justify-center relative mb-6 shadow-sm overflow-hidden">
                  <img 
                    src="/images/promax.jpeg" 
                    alt="PROMAX Brand Logo" 
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-xl font-extrabold text-zinc-900 mb-2">PROMAX</h3>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Value-focused aftermarket engine parts offering dependable performance and competitive pricing for volume buyers.
                </p>
              </div>
            </div>

            {/* Brand 6: GR */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-40 md:h-44 bg-white rounded-2xl border border-zinc-200 p-4 flex items-center justify-center relative mb-6 shadow-sm overflow-hidden">
                  <img 
                    src="/images/gr_logo.jpeg" 
                    alt="GR Brand Logo" 
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-xl font-extrabold text-zinc-900 mb-2">GR</h3>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  High quality agricultural engine spare parts for Petter type engines.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ISO 9001:2015 CERTIFICATION SHOWCASE Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-zinc-50 to-white border-t border-b border-zinc-200/80 relative overflow-hidden">
        {/* Subtle decorative background glows */}
        <div className="absolute top-1/2 left-10 w-80 h-80 bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Certification Details & Badges */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 text-[#D32F2F] text-xs font-extrabold px-3.5 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                  <Award className="w-4 h-4 mr-1" /> Quality Management System
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight mb-4">
                  ISO 9001:2015 <br className="hidden sm:inline" />
                  <span className="text-[#D32F2F]">Certified Manufacturer</span>
                </h2>
                <div className="w-20 h-1 bg-[#D32F2F] mb-6 rounded-full" />
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-6">
                  <strong>Singhal Industrial Corporation</strong> operates under an internationally audited Quality Management System accredited by <strong>IAF (International Accreditation Forum)</strong> and <strong>EIAC (Emirates International Accreditation Centre)</strong>.
                </p>
              </motion.div>

              {/* Scope Box */}
              <div className="bg-white p-6 rounded-2xl border border-zinc-200/90 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Certification Scope</span>
                  <span className="text-xs font-extrabold text-zinc-900 bg-zinc-100 px-2.5 py-1 rounded-md">Cert No. SIJ2Q0808V26</span>
                </div>
                <p className="text-xs md:text-sm text-zinc-700 font-medium leading-relaxed">
                  "Manufacturing and Supply of Precision-Machined Components for Automotive and Engineering Applications in accordance with Customer Drawings, Specifications, and Applicable Requirements."
                </p>
              </div>

              {/* Accreditation Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-white border border-zinc-200/80 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-zinc-900">Zero-Defect Standard</div>
                    <div className="text-[11px] text-zinc-500">100% CMM & Spectro tested</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 rounded-xl bg-white border border-zinc-200/80 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-zinc-900">IAF & EIAC Accredited</div>
                    <div className="text-[11px] text-zinc-500">Globally recognized standard</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 rounded-xl bg-white border border-zinc-200/80 shadow-sm">
                  <Globe className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-zinc-900">Export Certified</div>
                    <div className="text-[11px] text-zinc-500">Compliant for 45+ nations</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setShowCertModal(true)}
                  className="inline-flex items-center px-6 py-3.5 bg-[#D32F2F] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-red-700 transition-all shadow-md cursor-pointer group"
                >
                  <ZoomIn className="w-4 h-4 mr-2" />
                  View Original Certificate
                </button>
                <Link
                  to="/quality"
                  className="inline-flex items-center px-6 py-3.5 bg-zinc-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-zinc-800 transition-all shadow-sm"
                >
                  Quality Testing & Lab <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Certificate Card */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group w-full max-w-md cursor-pointer"
                onClick={() => setShowCertModal(true)}
              >
                {/* Glow behind frame */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600 to-amber-600 rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-500" />
                
                {/* Certificate Frame */}
                <div className="relative bg-white p-3 md:p-4 rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden">
                  <div className="relative overflow-hidden rounded-xl bg-zinc-100 flex items-center justify-center aspect-[1/1.414]">
                    <img
                      src="/images/isocertifcate.jpeg"
                      alt="Singhal Industrial Corporation ISO 9001:2015 Certificate of Registration"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                      <div className="bg-white/95 text-zinc-900 px-5 py-2.5 rounded-full font-bold text-xs shadow-2xl flex items-center mb-2 transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                        <ZoomIn className="w-4 h-4 mr-2 text-[#D32F2F]" /> Click to Enlarge Certificate
                      </div>
                      <span className="text-white text-xs font-semibold drop-shadow">
                        VRC / IAF / EIAC Registered
                      </span>
                    </div>
                  </div>

                  {/* Caption Bar under Certificate */}
                  <div className="mt-3 px-2 py-1 flex items-center justify-between text-zinc-600">
                    <span className="text-[11px] font-bold text-zinc-800 flex items-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 mr-1.5" /> ISO 9001:2015 Certified
                    </span>
                    <span className="text-[10px] text-zinc-400 font-semibold">Valid 2026 - 2029</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D32F2F] text-xs font-extrabold uppercase tracking-widest block mb-2">
            Trusted Worldwide
          </span>
          <h2 className="text-3xl font-extrabold text-zinc-900 mb-3">Client Testimonials</h2>
          <p className="text-zinc-500 text-xs mb-14">See what global auto parts distributors say about KOMODO Engine Parts</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200/80 text-left">
              <div className="text-amber-400 text-lg mb-4">★★★★★</div>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6 italic">
                "{companyConfig.name} is one of the few engine parts suppliers that actually listens. Communication is smooth, and they deliver high quality KOMODO pistons and cylinder liners on time."
              </p>
              <div>
                <div className="font-extrabold text-zinc-900 text-sm">Aftermarket Parts Manager</div>
                <div className="text-zinc-400 text-xs">Middle East Regional Distributor</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200/80 text-left">
              <div className="text-amber-400 text-lg mb-4">★★★★★</div>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6 italic">
                "We have worked with Singhal Industrial Corporation for years. Their consistency in dimensional tolerances and custom packaging is outstanding."
              </p>
              <div>
                <div className="font-extrabold text-zinc-900 text-sm">Purchase Director</div>
                <div className="text-zinc-400 text-xs">European Agricultural Spare Parts Importer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#D32F2F] text-xs font-extrabold uppercase tracking-widest block mb-2">
              Got Questions?
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900">Frequently Asked Questions</h2>
          </div>

          <div className="border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-zinc-200 last:border-0">
                <button 
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-zinc-800 hover:bg-zinc-50 transition-colors text-sm"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-[#D32F2F] shrink-0">
                    {openFaq === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-zinc-600 text-xs leading-relaxed bg-zinc-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO Certificate Lightbox Modal */}
      {showCertModal && (
        <div 
          onClick={() => setShowCertModal(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl flex flex-col max-h-[92vh]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900 text-white">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-red-500" />
                <span className="font-bold text-sm">Singhal Industrial Corporation — ISO 9001:2015 Certificate</span>
              </div>
              <div className="flex items-center space-x-3">
                <a 
                  href="/images/isocertifcate.jpeg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-400 hover:text-white flex items-center bg-zinc-800 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" /> Open Full Image
                </a>
                <button 
                  onClick={() => setShowCertModal(false)}
                  className="text-zinc-400 hover:text-white bg-zinc-800 p-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 bg-zinc-900/60 overflow-y-auto flex items-center justify-center">
              <img 
                src="/images/isocertifcate.jpeg" 
                alt="ISO 9001:2015 Certificate Enlarged" 
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl border border-zinc-800"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
