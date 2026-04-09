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
            <div className="h-28 bg-slate-800 w-full flex items-center justify-center relative overflow-hidden shrink-0">
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
              ) : (
                <Award className="text-slate-700 w-10 h-10 group-hover:scale-110 transition-transform duration-500" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
            </div>

            <div className="p-4 flex flex-col gap-2">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-base font-bold text-slate-100 line-clamp-2 leading-snug">
                  {cert.name}
                </h3>
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider text-sky-500 hover:text-sky-400 transition-colors flex items-center gap-1 shrink-0 mt-1"
                  >
                    View Cert <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 cursor-default shrink-0 mt-1">
                    Verified
                  </span>
                )}
              </div>

              <div className="flex justify-between items-center text-sm">
                <p className="text-sky-400 font-medium truncate">{cert.issuer}</p>
                <span className="text-slate-500 shrink-0">{cert.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;