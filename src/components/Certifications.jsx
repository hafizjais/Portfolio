import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../portfolioData';
import Section from './Section';

const Certifications = () => {
  // Most recent first. Array.prototype.sort is stable, so same-year items keep their data-file order.
  const certifications = [...portfolioData.certifications].sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <Section id="certifications" title="Certifications">
      <ul className="divide-y divide-line border-y border-line">
        {certifications.map((cert) => (
          <li key={cert.name} className="grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 py-5 sm:grid-cols-[1fr_5rem_auto]">
            <div className="min-w-0">
              <p className="font-semibold leading-snug text-ink">{cert.name}</p>
              {cert.issuer && <p className="mt-0.5 text-[0.9375rem] text-muted">{cert.issuer}</p>}
            </div>
            <p className="hidden sm:block text-[0.9375rem] text-muted tabular">{cert.year}</p>
            {cert.link ? (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-1 rounded-lg px-2 -mx-2 text-[0.9375rem] font-semibold text-clay hover:text-clay-dark"
              >
                <span>
                  View<span className="hidden sm:inline"> certificate</span>
                  <span className="sr-only">: {cert.name} (opens in a new tab)</span>
                </span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ) : (
              <span></span>
            )}
            <p className="sm:hidden text-sm text-muted tabular">{cert.year}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Certifications;
