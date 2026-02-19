import React from 'react';
import { portfolioData } from '../portfolioData';
import { Award } from 'lucide-react';

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
        <span className="w-8 h-[2px] bg-sky-500"></span>
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-sky-500/30 transition-colors group"
          >
            {/* Image Placeholder Section */}
            <div className="h-40 bg-slate-800 w-full flex items-center justify-center relative overflow-hidden">
              {/* User can replace this with <img src="..." /> later */}
              <Award className="text-slate-700 w-12 h-12 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-100 mb-1 line-clamp-2 min-h-[3.5rem] leading-tight">
                {cert.name}
              </h3>
              <p className="text-sky-400 text-sm font-medium mb-4">{cert.issuer}</p>
              <div className="flex justify-between items-center text-xs text-slate-500 border-t border-slate-800 pt-4 mt-auto">
                <span>{cert.year}</span>
                <span className="uppercase tracking-wider">Verified</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;