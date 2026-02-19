import React from 'react';
import { portfolioData } from '../portfolioData';
import { Award, ExternalLink } from 'lucide-react';

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
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-sky-500/30 transition-colors group flex flex-col"
          >
            {/* Image / Placeholder Section */}
            <div className="h-40 bg-slate-800 w-full flex items-center justify-center relative overflow-hidden shrink-0">
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
              ) : (
                <Award className="text-slate-700 w-12 h-12 group-hover:scale-110 transition-transform duration-500" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
            </div>

            <div className="p-6 flex flex-col h-full">
              <h3 className="text-lg font-bold text-slate-100 mb-1 line-clamp-2 min-h-[3.5rem] leading-tight">
                {cert.name}
              </h3>
              <p className="text-sky-400 text-sm font-medium mb-4">{cert.issuer}</p>

              <div className="mt-auto pt-4 border-t border-slate-800 flex justify-between items-center">
                <span className="text-xs text-slate-500">{cert.year}</span>
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider text-sky-500 hover:text-sky-400 transition-colors flex items-center gap-1"
                  >
                    View Cert <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 cursor-default">
                    Verified
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;