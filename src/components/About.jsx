import React from 'react';
import { portfolioData } from '../portfolioData';
import Section from './Section';

const About = () => {
  const { about } = portfolioData;
  const paragraphs = about.bio.split(/\n\s*\n/);

  return (
    <Section id="about" title="About">
      <div className="space-y-5 max-w-prose text-lg leading-[1.7] text-ink">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <h3 className="mt-16 text-xl font-bold tracking-[-0.01em] text-ink">Education</h3>
      <ol className="mt-6 divide-y divide-line border-y border-line">
        {about.education.map((edu) => (
          <li key={edu.degree} className="grid gap-1 py-6 sm:grid-cols-[10.5rem_1fr] sm:gap-8">
            <p className="text-[0.9375rem] text-muted tabular">{edu.year.replace(' - ', ' – ')}</p>
            <div>
              <p className="font-semibold leading-snug text-ink">{edu.degree}</p>
              <p className="mt-1 text-muted">{edu.institution}</p>
              {edu.notes && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {edu.notes.map((note) => (
                    <li key={note} className="rounded-md bg-mist/70 px-2.5 py-1 text-sm text-ink">
                      {note}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default About;
