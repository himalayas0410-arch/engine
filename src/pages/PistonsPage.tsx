import React, { useState } from 'react';
import { ArrowRight, Award, ZoomIn, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const pistonPhotos = [
  { url: '/images/products/pistons/img_1.jpeg', title: 'Heavy Duty Commercial Diesel Engine Piston' },
  { url: '/images/products/pistons/img_2.jpeg', title: 'Alfin Ring Insert Steel Strut Piston' },
  { url: '/images/products/pistons/img_3.jpeg', title: 'Tractor & Agricultural Engine Piston' },
  { url: '/images/products/pistons/img_4.jpeg', title: 'High-Compression Automotive Piston' },
  { url: '/images/products/pistons/img_5.jpeg', title: 'Precision Machined Piston with Pin & Rings' },
  { url: '/images/products/pistons/img_6.jpeg', title: 'Air Compressor & Generator Piston' },
  { url: '/images/products/pistons/img_7.jpeg', title: 'Coated Crown Heat-Resistant Piston' },
  { url: '/images/products/pistons/img_8.jpeg', title: 'OEM Specification Heavy Duty Piston Set' }
];

const pistonRingsPhotos = [
  { url: '/images/products/piston_rings/img_1.jpeg', title: 'Chrome Plated Top Compression Piston Ring' },
  { url: '/images/products/piston_rings/img_2.jpeg', title: 'Ductile Iron Scraper Ring Set' },
  { url: '/images/products/piston_rings/img_3.jpeg', title: 'Oil Control Ring with Coil Expander' },
  { url: '/images/products/piston_rings/img_4.jpeg', title: 'Heavy Duty Commercial Diesel Piston Ring Pack' },
  { url: '/images/products/piston_rings/img_5.jpeg', title: 'High-Pressure Nitrided Engine Piston Rings' },
  { url: '/images/products/piston_rings/img_6.jpeg', title: 'OEM Tractor & Genset Piston Ring Assembly' }
];

const pistonHighlights = [
  {
    title: "High-Strength Alloy Metallurgy",
    desc: "KOMODO Pistons are manufactured from high-strength alloys using advanced manufacturing processes to deliver reliable performance, durability, and dimensional stability under demanding engine conditions."
  },
  {
    title: "Thermal Conductivity & Structural Strength",
    desc: "Combines high thermal conductivity, lightweight construction, and structural strength for efficient engine operation and effective heat dissipation."
  },
  {
    title: "Wear Resistance & Heat Treatment",
    desc: "Enhanced wear resistance in ring grooves, piston skirt, and gudgeon pin bore. Controlled heat treatment and ageing achieve optimum strength and durability."
  }
];

export function PistonsPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Precision Engine Pistons",
    "image": "https://indiasparepart.com/images/piston_hero.jpg",
    "description": "Durable eutectic silicon-aluminum alloy pistons with Ni-Resist ring groove carrier inserts for automotive, truck & tractor engines.",
    "brand": {
      "@type": "Brand",
      "name": "KOMODO Engine Parts"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Singhal Industrial Corporation",
      "url": "https://indiasparepart.com"
    }
  };

  return (
    <div className="w-full bg-white">
      <SEO 
        title="Engine Pistons & Piston Assemblies Manufacturer India"
        description="High-performance eutectic silicon-aluminum alloy engine pistons with Ni-Resist inserts manufactured in Agra, India by Singhal Industrial Corporation (KOMODO)."
        canonicalPath="/products/pistons"
        image="https://indiasparepart.com/images/piston_hero.jpg"
        schema={productSchema}
      />

      {/* Hero Banner */}
      <section className="bg-zinc-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 via-zinc-900 to-zinc-950 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <Award className="w-4 h-4 mr-1" /> Singhal Industrial Corporation
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Singhal Precision Pistons
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8">
              Engineered from high-strength alloys for automotive, commercial vehicle, and agricultural engines worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/quote" className="px-6 py-3 bg-[#D32F2F] text-white font-bold text-sm uppercase tracking-wider rounded-md hover:bg-red-700 transition-colors shadow-lg">
                Request Product Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Copy Section */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-zinc-700 leading-relaxed text-sm md:text-base">
              <span className="text-[#D32F2F] text-xs font-extrabold uppercase tracking-widest block mb-2">
                Piston Manufacturing Excellence
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900 mb-6">
                Engineered for Dimensional Stability & Performance
              </h2>

              <p>
                <strong>KOMODO Pistons</strong> are manufactured from high-strength alloys using advanced manufacturing processes to deliver reliable performance, durability, and dimensional stability under demanding engine conditions.
              </p>

              <p>
                Our pistons combine high thermal conductivity, lightweight construction, and structural strength to ensure efficient engine operation and effective heat dissipation. Enhanced wear resistance in key stress areas—including ring grooves, piston skirt, and gudgeon pin bore—helps maintain peak performance over long operating periods.
              </p>

              <p>
                Controlled heat treatment and ageing processes ensure optimal mechanical properties, helping prevent distortion and thermal fatigue during high-load applications.
              </p>
            </div>

            <div 
              onClick={() => setSelectedPhoto('/images/products/pistons/img_1.jpeg')}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 cursor-pointer group"
            >
              <img 
                src="/images/products/pistons/img_1.jpeg" 
                alt="Singhal Precision Pistons" 
                className="w-full h-80 md:h-[420px] object-contain bg-zinc-50 p-6 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 text-zinc-900 px-4 py-2 rounded-full font-bold text-xs shadow-lg flex items-center">
                  <ZoomIn className="w-4 h-4 mr-2 text-[#D32F2F]" /> Click to Zoom
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                <div className="font-bold text-lg">KOMODO & KAT Precision Pistons</div>
                <div className="text-xs text-zinc-300">Commercial Vehicles, Tractors & Heavy Duty Engines</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Product Photo Gallery Grid */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-[#D32F2F] text-xs font-extrabold uppercase tracking-widest block mb-2">
                Factory Product Gallery
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900">
                Precision Engine Piston Range
              </h2>
            </div>
            <p className="text-zinc-500 text-xs mt-2 md:mt-0">
              Actual manufactured products from Singhal Industrial Corporation Agra factory
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {pistonPhotos.map((photo, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedPhoto(photo.url)}
                className="group relative rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-200 shadow-sm hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="h-56 overflow-hidden bg-white p-4 flex items-center justify-center">
                  <img 
                    src={photo.url} 
                    alt={photo.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" 
                  />
                </div>
                <div className="p-3 bg-zinc-900 text-white flex items-center justify-between">
                  <span className="font-bold text-xs truncate">{photo.title}</span>
                  <ZoomIn className="w-4 h-4 text-red-400 shrink-0 ml-2 opacity-70 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Piston Rings Factory Product Gallery Grid */}
      <section className="py-16 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-[#D32F2F] text-xs font-extrabold uppercase tracking-widest block mb-2">
                Factory Piston Rings Range
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900">
                Precision Compression & Oil Control Piston Rings
              </h2>
            </div>
            <p className="text-zinc-500 text-xs mt-2 md:mt-0">
              Chromium Plated, Nitrided & Phosphate Coated Piston Ring Assemblies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {pistonRingsPhotos.map((photo, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedPhoto(photo.url)}
                className="group relative rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-sm hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="h-60 overflow-hidden bg-zinc-50 p-4 flex items-center justify-center">
                  <img 
                    src={photo.url} 
                    alt={photo.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" 
                  />
                </div>
                <div className="p-3.5 bg-zinc-900 text-white flex items-center justify-between">
                  <span className="font-bold text-xs truncate">{photo.title}</span>
                  <ZoomIn className="w-4 h-4 text-red-400 shrink-0 ml-2 opacity-70 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-zinc-900 mb-4">
              Piston Technical Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pistonHighlights.map((ph, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#D32F2F] flex items-center justify-center font-bold text-base mb-5">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{ph.title}</h3>
                  <p className="text-zinc-600 text-xs leading-relaxed">{ph.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Quote */}
      <section className="py-16 bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Inquire About Precision Pistons</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8 text-sm">
            Contact Singhal Industrial Corporation for technical catalogs and volume pricing. MOQ: 300 pieces.
          </p>
          <Link to="/quote" className="inline-flex items-center px-8 py-3.5 bg-[#D32F2F] text-white font-bold text-sm uppercase tracking-wider rounded-md hover:bg-red-700 transition-colors">
            Request Quote <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl w-full bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 p-4">
            <button 
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white bg-zinc-800 p-2 rounded-full z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="h-[75vh] flex items-center justify-center bg-white rounded-xl p-4">
              <img 
                src={selectedPhoto} 
                alt="Product Enlarged" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
