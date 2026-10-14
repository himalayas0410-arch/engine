import { useState } from 'react';
import { ShieldCheck, Ruler, Focus, Microscope, FileText, CheckSquare, ZoomIn, X, ExternalLink, Award } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Quality() {
  const [showCertModal, setShowCertModal] = useState(false);
  const qualitySteps = [
    { title: 'Incoming Material Inspection', desc: 'Spectrographic analysis of raw material to ensure chemical composition matches metallurgical standards.' },
    { title: 'Process Control', desc: 'Continuous monitoring of temperature, pressure, and time during casting, forging, and heat treatment.' },
    { title: 'Dimensional Inspection', desc: 'Precision measurement using CMMs (Coordinate Measuring Machines) and bore gauges to verify tolerances.' },
    { title: 'Surface Inspection', desc: 'Profilometer testing to ensure surface roughness meets exact engineering specifications for optimal oil retention.' },
    { title: 'Performance Testing', desc: 'Hardness testing, ultrasonic flaw detection, and simulated load testing.' },
    { title: 'Final Inspection & Packaging', desc: '100% visual inspection and secure, anti-corrosive export packaging.' },
  ];

  return (
    <div className="w-full pt-24 bg-white min-h-screen">
      <SEO 
        title="ISO 9001:2015 Quality Standards & Spectro Analysis"
        description="Learn about Singhal Industrial Corporation's ISO 9001:2015 quality assurance system: CMM dimensional inspection, spectro alloy analysis & surface profiling."
        canonicalPath="/quality"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-block bg-[#D34747] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Quality Assurance
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Quality Is Engineered Into Every Component.</h1>
          <p className="text-lg text-zinc-600">
            Our commitment to quality is non-negotiable. We employ a rigorous, multi-stage inspection process to ensure zero-defect delivery to our global OEM and aftermarket partners.
          </p>
        </div>

        {/* Certifications with ISO Certificate Feature */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8 border-b border-zinc-200 pb-4">Quality Certifications & Accredited Standards</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-50 border border-zinc-200 p-8 rounded-3xl mb-10 shadow-sm">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center space-x-2 bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <Award className="w-4 h-4 mr-1" /> Official Registration
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900">
                ISO 9001:2015 Certificate of Registration
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Singhal Industrial Corporation has been assessed and certified under the standard <strong>ISO 9001:2015</strong> for the <em>"Manufacturing and Supply of Precision-Machined Components for Automotive and Engineering Applications in accordance with Customer Drawings, Specifications, and Applicable Requirements."</em>
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-zinc-600 pt-2">
                <span className="bg-white border border-zinc-200 px-3 py-1.5 rounded-lg font-semibold text-zinc-800">
                  Certificate No: SIJ2Q0808V26
                </span>
                <span className="bg-white border border-zinc-200 px-3 py-1.5 rounded-lg font-semibold text-zinc-800">
                  Accredited by: IAF & EIAC (CB-QMS-103)
                </span>
                <span className="bg-white border border-zinc-200 px-3 py-1.5 rounded-lg font-semibold text-zinc-800">
                  Validity: 2026 – 2029
                </span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => setShowCertModal(true)}
                  className="inline-flex items-center px-6 py-3 bg-[#D34747] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-red-700 transition-colors shadow-md cursor-pointer"
                >
                  <ZoomIn className="w-4 h-4 mr-2" /> View Certificate Document
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div 
                onClick={() => setShowCertModal(true)}
                className="relative bg-white p-3 rounded-2xl shadow-xl border border-zinc-200 cursor-pointer group max-w-xs hover:border-red-400 transition-all duration-300"
              >
                <div className="relative aspect-[1/1.414] overflow-hidden rounded-xl bg-zinc-100 flex items-center justify-center">
                  <img
                    src="/images/isocertifcate.jpeg"
                    alt="ISO 9001:2015 Certificate"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-zinc-900 px-3 py-1.5 rounded-full font-bold text-xs shadow-lg flex items-center">
                      <ZoomIn className="w-3.5 h-3.5 mr-1.5 text-red-600" /> Click to Zoom
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['ISO 9001:2015', 'IATF 16949:2016 Compliant Standards', 'ISO 14001 Environmental Standard'].map((cert, index) => (
              <div key={index} className="bg-zinc-50 border border-zinc-200 p-6 rounded-xl flex items-start group hover:border-[#D34747] hover:shadow-sm transition-all">
                <ShieldCheck className="w-8 h-8 text-[#D34747] mr-4 shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-1">{cert}</h3>
                  <p className="text-sm text-zinc-500">Certified for Excellence</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Process */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8 border-b border-zinc-200 pb-4">The Quality Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualitySteps.map((step, index) => (
              <div key={index} className="bg-white border border-zinc-200 p-8 rounded-2xl relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute -top-4 -right-4 p-4 opacity-5 font-bold text-8xl text-[#D34747] select-none">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-3 relative z-10">{step.title}</h3>
                <p className="text-sm text-zinc-600 relative z-10 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment */}
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 mb-8 border-b border-zinc-200 pb-4">Inspection Equipment</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: Focus, name: 'Coordinate Measuring Machine (CMM)' },
              { icon: Ruler, name: 'Surface Roughness Tester' },
              { icon: Microscope, name: 'Metallurgical Microscope' },
              { icon: CheckSquare, name: 'Hardness Tester' },
              { icon: FileText, name: 'Profile Projector' },
              { icon: Ruler, name: 'Bore Gauges & Micrometers' },
            ].map((eq, index) => (
              <div key={index} className="flex items-center p-4 bg-zinc-50 border border-zinc-200 rounded-md">
                <eq.icon className="w-5 h-5 text-[#3FB6C6] mr-3 shrink-0" />
                <span className="text-sm text-zinc-700 font-semibold">{eq.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

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
