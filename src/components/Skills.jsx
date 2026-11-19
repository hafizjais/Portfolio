import React from 'react';
import { portfolioData } from '../portfolioData';
import Section from './Section';

const groups = [
  { key: 'analysis', label: 'Analysis and reporting' },
  { key: 'data', label: 'Data integration' },
  { key: 'programming', label: 'Programming' },
  { key: 'tools', label: 'Tools and platforms' },
  { key: 'automationWeb', label: 'Automation and web' },
  { key: 'ml', label: 'Machine learning' },
  { key: 'specialized', label: 'Domain knowledge' },
];

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-line border-y border-line">
        {groups
          .filter(({ key }) => skills[key]?.length)
          .map(({ key, label }) => (
            <div key={key} className="grid gap-3 py-6 sm:grid-cols-[12rem_1fr] sm:gap-8">
              <dt className="font-semibold text-ink">{label}</dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {skills[key].map((skill) => (
                    <li key={skill} className="rounded-md border border-line bg-surface px-2.5 py-1 text-[0.9375rem] text-ink">
                      {skill}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}

        {skills.soft?.length > 0 && (
          <div className="grid gap-3 py-6 sm:grid-cols-[12rem_1fr] sm:gap-8">
            <dt className="font-semibold text-ink">Working style</dt>
            <dd className="max-w-prose leading-relaxed text-muted">{skills.soft.join(', ')}.</dd>
          </div>
        )}
      </dl>
    </Section>
  );
};

export default Skills;
