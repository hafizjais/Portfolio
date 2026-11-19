import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../portfolioData';
import Section from './Section';

const groups = [
  { type: 'professional', label: 'Professional experience' },
  { type: 'freelance', label: 'Freelance and independent work' },
  { type: 'earlier', label: 'Earlier part-time work' },
];

const formatDate = (d = '') => d.replace(/\s-\s/, ' – ');

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <Section id="experience" title="Experience">
      <div className="space-y-14">
        {groups.map(({ type, label }) => {
          const items = experience.filter((exp) => exp.type === type);
          if (items.length === 0) return null;

          return (
            <div key={type}>
              <h3 className="text-xl font-bold tracking-[-0.01em] text-ink">{label}</h3>

              <ol className="mt-4 divide-y divide-line border-y border-line">
                {items.map((exp) => {
                  const current = /present/i.test(exp.date ?? '');
                  return (
                    <li key={exp.role + (exp.date ?? '')} className="grid gap-2 py-7 sm:grid-cols-[10.5rem_1fr] sm:gap-8">
                      <div className="text-[0.9375rem] text-muted tabular">
                        {exp.date && <p>{formatDate(exp.date)}</p>}
                        {current && (
                          <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-signal">
                            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true"></span>
                            Current
                          </p>
                        )}
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-lg font-semibold leading-snug text-ink">{exp.role}</h4>
                        {exp.company && (
                          <p className="mt-0.5 text-muted">
                            {exp.companyLink ? (
                              <a
                                href={exp.companyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 underline decoration-line decoration-2 underline-offset-4 hover:text-ink hover:decoration-clay"
                              >
                                {exp.company}
                                <ArrowUpRight size={15} aria-hidden="true" />
                                <span className="sr-only">(opens in a new tab)</span>
                              </a>
                            ) : (
                              exp.company
                            )}
                          </p>
                        )}

                        <ul className="mt-4 space-y-2 max-w-prose">
                          {exp.description.map((item, i) => (
                            <li key={i} className="relative pl-5 leading-relaxed text-ink/90">
                              <span className="absolute left-0 top-[0.7em] h-px w-2.5 bg-muted" aria-hidden="true"></span>
                              {item}
                            </li>
                          ))}
                        </ul>

                        {exp.links && (
                          <ul className="mt-5 flex flex-wrap gap-2.5">
                            {exp.links.map((link) => (
                              <li key={link.url}>
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-line bg-surface px-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
                                >
                                  {link.label}
                                  <ArrowUpRight size={15} aria-hidden="true" />
                                  <span className="sr-only">(opens in a new tab)</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Experience;
