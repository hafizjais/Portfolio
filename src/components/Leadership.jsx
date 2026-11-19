import React from 'react';
import { portfolioData } from '../portfolioData';
import Section from './Section';

const Leadership = () => {
  const { leadership } = portfolioData;

  return (
    <Section
      id="leadership"
      title="Leadership"
      intro="Student roles at IIUM, mostly coordinating events, committees and peer programmes."
    >
      <ol className="divide-y divide-line border-y border-line">
        {leadership.map((item) => (
          <li key={item.organization} className="grid gap-2 py-7 sm:grid-cols-[10.5rem_1fr] sm:gap-8">
            <p className="text-[0.9375rem] text-muted tabular">{item.date.replace(/\s-\s/, ' – ')}</p>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold leading-snug text-ink">{item.organization}</h3>
              <p className="mt-0.5 text-muted">{item.role}</p>
              <ul className="mt-4 space-y-2 max-w-prose">
                {item.description.map((desc, i) => (
                  <li key={i} className="relative pl-5 leading-relaxed text-ink/90">
                    <span className="absolute left-0 top-[0.7em] h-px w-2.5 bg-muted" aria-hidden="true"></span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Leadership;
