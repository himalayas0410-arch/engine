import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Award } from 'lucide-react';
import { companyConfig } from '../config';

const STATIC_PRODUCTS: Record<string, any> = {
  'cylinder-liners': {
    name: 'Cylinder Liners (Dry & Wet Type)',
    category: 'Engine Components',
    image: '/images/in_cylinder_liners.jpeg',
    description: 'High performance centrifugally cast dry, wet, and air-cooled cylinder liners with 95%+ pearlitic micro-structure.',
    richDescription: `
      <p class="mb-4">Singhal Industrial Corporation manufactures Cylinder Liners, Sleeves, and Air-Cooled Blocks to exact OE specifications or custom drawing requirements. Our expertise in alloy metallurgy and centrifugal casting delivers durable, high-performance liners built for severe thermal loads.</p>
      <p class="mb-4">Our Cylinder Liners are centrifugally cast from high-grade grey iron with finely dispersed Type-A flake graphite in a fully pearlitic matrix (>95% Pearlite). This produces uniform wall density, high wear resistance, Brinell hardness of 220-240 HB, and reliable dimensional stability.</p>
      <p class="mb-4">Air-cooled cylinder liners are shell-moulded with precision exterior cooling fins for agricultural pumps, tractors, and air compressor engines.</p>
    `,
    applications: ['Commercial Heavy Duty Diesel', 'Agricultural Tractors', 'Industrial Power Generators', 'Earthmoving Machinery'],
    materials: ['Grey Cast Iron (95%+ Pearlite)', 'Alloyed Centrifugal Cast Iron', 'Centrifugal Shell Moulded Alloy']
  },
  'pistons': {
    name: 'Precision Engine Pistons',
    category: 'Engine Components',
    image: '/images/piston_hero.jpg',
    description: 'Precision engineered eutectic aluminum pistons with Ni-Resist ring groove inserts and graphite skirt coating.',
    richDescription: `
      <p class="mb-4">KOMODO Pistons are gravity die-cast from eutectic silicon-aluminum alloy (LM13) and solution heat-treated to T6 condition for maximum tensile strength, low thermal expansion, and optimum hardness (85-110 HB).</p>
      <p class="mb-4">Our pistons feature metallurgically bonded austenitic cast iron (Ni-Resist) inserts in the top ring groove to prevent groove pounding in turbocharged diesel engines. Oil cooling gallery pistons incorporate internal oil circulation channels to reduce crown temperatures by 30-50°C.</p>
      <p class="mb-4">With 60+ years of export expertise, Singhal Industrial Corporation supplies pistons across 50-180mm bore sizes for light automotive, tractor, and heavy commercial diesel engines worldwide.</p>
    `,
    applications: ['Automotive Diesel Engines', 'Agricultural Tractors', 'Stationary Power Gensets', 'Light & Heavy Commercial Vehicles'],
    materials: ['Eutectic Silicon-Aluminum Alloy (LM13)', 'Ni-Resist Austenitic Cast Iron Inserts', 'Steel Expansion Control Struts']
  },
  'air-compressor-kits': {
    name: 'Air Brake Compressor Repair Kits',
    category: 'Braking Systems',
    image: '/images/air_compressor_kits.jpeg',
    description: 'Complete overhaul repair kits including cylinder block, pistons, and piston rings for heavy-duty truck air brake compressors.',
    richDescription: `
      <p class="mb-4">Heavy-duty air brake compressors produce the pressurized air essential for safe, responsive braking in trucks, buses and trailers. Singhal Industrial Corporation manufactures complete repair kits including cylinder block, pistons, and piston rings.</p>
      <p class="mb-4">A faulty or neglected compressor leads to low air pressure, brake lag and dangerous overheating. Singhal Industrial compressor repair kits deliver OEM-grade reliability and durability, keeping your fleet safe with regular maintenance and quality parts.</p>
    `,
    applications: ['Commercial Trucks & Trailers', 'Heavy Transit Buses', 'Industrial Compressors'],
    materials: ['Alloyed Cylinder Block', 'Precision Machined Pistons', 'Nitrided Piston Rings']
  },
  'piston-rings': {
    name: 'Precision Engine Piston Rings & Sets',
    category: 'Engine Components',
    image: '/images/products/piston_rings/img_1.jpeg',
    gallery: [
      '/images/products/piston_rings/img_1.jpeg',
      '/images/products/piston_rings/img_2.jpeg',
      '/images/products/piston_rings/img_3.jpeg',
      '/images/products/piston_rings/img_4.jpeg',
      '/images/products/piston_rings/img_5.jpeg',
      '/images/products/piston_rings/img_6.jpeg'
    ],
    description: 'Chromium plated, nitrided and phosphate coated high compression piston rings for heavy commercial, automotive & agricultural diesel engines.',
    richDescription: `
      <p class="mb-4">KOMODO Piston Rings are engineered from centrifugally cast ductile iron and micro-alloyed steel. Sliding faces undergo hard chromium plating, gas nitriding, and molybdenum spray coatings for minimal cylinder wall friction, zero scuffing, and exceptional wear resistance.</p>
      <p class="mb-4">Our compression rings, scraper rings, and oil control rings (with stainless steel coil expanders) deliver optimum gas sealing, low oil consumption, and long service life in high-power turbocharged engines.</p>
      <p class="mb-4">Manufactured to exact OEM standards for commercial trucks, tractors, industrial generators, and stationary diesel engines.</p>
    `,
    applications: ['Heavy Commercial Trucks', 'Agricultural Tractors', 'Stationary Power Gensets', 'Air Compressors & Marine Engines'],
    materials: ['Spheroidal Graphite Ductile Cast Iron', 'Hard Chrome Plated Steel', 'Gas Nitrided Alloy Steel', 'Stainless Steel Coil Expanders']
  },
  'valves': {
    name: 'Engine Valves & Valve Guides',
    category: 'Valve Train',
    image: 'https://images.unsplash.com/photo-1498887960847-2a5e46312788?auto=format&fit=crop&q=80&w=1200',
    description: 'Bi-metallic intake and exhaust valves with friction-welded stems and stellite faced seats.',
    richDescription: `
      <p class="mb-4">Singhal Industrial Corporation manufactures precision intake and exhaust valves from bi-metallic alloy steel for extreme operating temperatures and high wear resistance.</p>
      <p class="mb-4">Our valve stems undergo hard chrome plating and seat stellite facing for tight gas sealing and long service life in diesel engines.</p>
    `,
    applications: ['Automotive Engines', 'Heavy Diesel Vehicles', 'Agricultural Equipment'],
    materials: ['Bi-Metallic Alloy Steel', 'Stellite Hard Facing', 'Chrome Plated Stem']
  },
  'valve-guides': {
    name: 'Precision Valve Guides',
    category: 'Valve Train',
    image: '/images/valve_guides.jpeg',
    description: 'Pearlitic cast iron and bronze alloy valve guides for thermal conductivity and low valve stem wear.',
    richDescription: `
      <p class="mb-4">Singhal Industrial Corporation Valve Guides are centrifugally cast from high-phosphorus grey iron or sintered bronze for superior thermal dissipation and stem lubrication.</p>
    `,
    applications: ['Automotive & Tractor Engines', 'Industrial Power Gensets', 'Commercial Heavy Diesel Vehicles'],
    materials: ['Pearlitic Grey Cast Iron', 'Sintered Bronze Alloy']
  },
  'engine-bearings': {
    name: 'Engine Bearings & Bushings',
    category: 'Engine Components',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200',
    description: 'Tri-metal and bi-metal main bearings, connecting rod bearings, and thrust washers.',
    richDescription: `
      <p class="mb-4">High-load tri-metal bearings manufactured with steel backing, copper-lead matrix, and electroplated lead-indium overlay for severe crankpin loads.</p>
    `,
    applications: ['Heavy Commercial Engines', 'Stationary Gensets', 'Tractors'],
    materials: ['Tri-Metal Copper-Lead Overlay', 'Bi-Metal Aluminum-Tin']
  },
  'gaskets': {
    name: 'Cylinder Head Gaskets & Seals',
    category: 'Sealing Solutions',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=1200',
    description: 'Multi-layer steel (MLS) and graphite cylinder head gaskets engineered for thermal expansion.',
    richDescription: `
      <p class="mb-4">KOMODO MLS gaskets provide superior sealing under high combustion pressures and thermal distortion.</p>
    `,
    applications: ['Passenger & Commercial Engines', 'Agricultural Powerplants'],
    materials: ['Multi-Layer Steel (MLS)', 'High Density Graphite']
  },
  'crankshafts': {
    name: 'Forged & Cast Crankshafts',
    category: 'Engine Components',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
    description: 'Induction hardened forged steel and spheroidal graphite cast iron crankshafts.',
    richDescription: `
      <p class="mb-4">Precision dynamically balanced crankshafts manufactured by Singhal Industrial Corporation for high-torque heavy-duty engines.</p>
    `,
    applications: ['Agricultural Engines', 'Gensets', 'Heavy Trucks'],
    materials: ['Forged Alloy Steel', 'Ductile Iron (SG Iron)']
  },
  'connecting-rods': {
    name: 'Forged Steel Connecting Rods',
    category: 'Engine Components',
    image: '/images/connecting_rods.jpeg',
    description: 'Fracture-split forged steel connecting rods engineered for fatigue strength.',
    richDescription: `
      <p class="mb-4">KOMODO connecting rods are drop-forged from micro-alloyed steel and precision bored for exact center-to-center dimensions.</p>
    `,
    applications: ['Diesel Engines', 'Compressors', 'Tractor Powerplants'],
    materials: ['Drop Forged Micro-Alloy Steel']
  },
  'cylinder-heads': {
    name: 'Cylinder Heads & Blocks',
    category: 'Engine Components',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
    description: 'Alloy cast iron cylinder heads CNC machined for gas flow efficiency.',
    richDescription: `
      <p class="mb-4">High-density alloy iron cylinder head castings with pressure-tested coolant galleries and CNC valve seat machining.</p>
    `,
    applications: ['Commercial Vehicle Engines', 'Stationary Power Units'],
    materials: ['Alloyed Grey Iron']
  },
  'castings': {
    name: 'Precision Iron & Aluminum Castings',
    category: 'Foundry Products',
    image: '/images/our_castings.jpeg',
    description: 'Custom shell-moulded grey iron, SG iron, and aluminum gravity castings.',
    richDescription: `
      <p class="mb-4">Foundry solutions by Singhal Industrial Corporation producing custom agricultural and industrial component castings according to exact CAD drawings or physical samples.</p>
    `,
    applications: ['Custom OEM Machinery', 'Agricultural Implements', 'Industrial Pumps'],
    materials: ['Grey Iron', 'Ductile SG Iron', 'Aluminum Alloy']
  },
  'agricultural-diesel-engines': {
    name: 'Agricultural Diesel Engine Components',
    category: 'Agricultural Engines',
    image: '/images/agricultural_engines.jpeg',
    gallery: [
      '/images/agricultural_engines.jpeg',
      '/images/agricultural_engines_1.jpeg',
      '/images/agricultural_engines_2.jpeg'
    ],
    description: 'Heavy duty replacement spare parts for 1 to 4 cylinder agricultural tractors and pump engines.',
    richDescription: `
      <p class="mb-4">Singhal Industrial Corporation produces a complete range of heavy-duty replacement spare parts and engine assemblies for agricultural water pump engines, diesel generators, and agricultural tractors.</p>
      <p class="mb-4">Our agricultural diesel engine components are manufactured from premium pearlitic cast iron and eutectic aluminum alloys, designed for continuous high-torque field operation under severe dust, heat, and load conditions.</p>
    `,
    applications: ['Agricultural Water Pumps', 'Field Diesel Generators', 'Single & Multi-Cylinder Tractors', 'Stationary Power Units'],
    materials: ['Pearlitic Grey Cast Iron (>95% Pearlite)', 'LM13 Eutectic Aluminum Alloy', 'Case Hardened Forged Steel']
  },
  'power-gensets': {
    name: 'Power Gensets & Stationary Engines',
    category: 'Power Solutions',
    image: '/images/power_gensets_1.jpeg',
    gallery: [
      '/images/power_gensets_1.jpeg',
      '/images/power_gensets_2.jpeg'
    ],
    description: 'Heavy-duty stationary power generation components, agricultural pumpsets, and engine repair assemblies.',
    richDescription: `
      <p class="mb-4">Singhal Industrial Corporation supplies high-reliability stationary generator engine assemblies and spare parts for continuous prime power and agricultural water pump applications.</p>
      <p class="mb-4">Designed for maximum thermal endurance and steady power output under severe field conditions.</p>
    `,
    applications: ['Commercial Prime Power', 'Emergency Standby Gensets', 'Agricultural Water Pumpsets', 'Industrial Engines'],
    materials: ['Heavy Duty Engine Alloys', 'Pearlitic Cast Iron']
  }
};

export function ProductDetail() {
  const { slug } = useParams();
  const product = slug ? STATIC_PRODUCTS[slug] : null;
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="w-full pt-32 pb-24 min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-extrabold text-zinc-900 mb-4">Product Category Catalog</h1>
        <p className="text-zinc-600 mb-8 max-w-md">Contact Singhal Industrial Corporation for custom OEM manufacturing or catalog specifications.</p>
        <div className="flex space-x-4">
          <Link to="/products" className="px-6 py-3 bg-[#D34747] text-white font-bold text-xs uppercase tracking-wider rounded-md">
            Return to Products
          </Link>
          <Link to="/quote" className="px-6 py-3 bg-zinc-900 text-white font-bold text-xs uppercase tracking-wider rounded-md">
            Request Quote
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pt-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <Link to="/products" className="inline-flex items-center text-xs font-bold text-zinc-500 hover:text-[#D34747] transition-colors mb-8 uppercase tracking-wider">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image & Gallery */}
          <div className="space-y-4">
            <div className="relative h-[380px] lg:h-[480px] rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-200 p-6 flex items-center justify-center shadow-lg">
              <img 
                src={activeImage || product.image} 
                alt={product.name}
                className="w-full h-full object-contain rounded-2xl transition-all duration-300"
              />
            </div>

            {/* Thumbnail Gallery */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex items-center space-x-3 overflow-x-auto pb-2">
                {product.gallery.map((imgUrl: string, idx: number) => {
                  const isSelected = (activeImage || product.image) === imgUrl;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(imgUrl)}
                      className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 bg-white p-1 transition-all shrink-0 ${
                        isSelected ? 'border-[#D34747] ring-2 ring-red-100 shadow-md' : 'border-zinc-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-contain" />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <span className="inline-flex items-center space-x-2 bg-red-50 text-[#D32F2F] border border-red-200 text-[11px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 mr-1" /> {companyConfig.brandName}
              </span>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight mb-2">
                {product.name}
              </h1>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                Category: {product.category}
              </p>
            </div>

            <div 
              className="text-zinc-600 text-sm leading-relaxed border-t border-b border-zinc-100 py-6"
              dangerouslySetInnerHTML={{ __html: product.richDescription }}
            />

            {product.applications && (
              <div>
                <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">Suitable Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app: string, idx: number) => (
                    <span key={idx} className="bg-zinc-100 text-zinc-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-zinc-200">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.materials && (
              <div>
                <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">Metallurgy & Engineering</h3>
                <ul className="space-y-2">
                  {product.materials.map((mat: string, idx: number) => (
                    <li key={idx} className="flex items-center text-xs text-zinc-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#D32F2F] mr-2 shrink-0" />
                      {mat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-6 border-t border-zinc-100 flex flex-wrap gap-4">
              <Link to="/quote" className="px-8 py-3.5 bg-[#D32F2F] text-white font-bold text-xs uppercase tracking-wider rounded-md hover:bg-red-700 transition-colors shadow-md">
                Request Specifications Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
