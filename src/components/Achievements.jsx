import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../portfolioData';
import Section from './Section';

// Photos that fail to load are dropped instead of showing a broken-image icon.
const Gallery = ({ images, title }) => {
  const [failed, setFailed] = useState([]);
  const visible = (images || []).filter((src) => src && !failed.includes(src)).slice(0, 3);
  if (visible.length === 0) return null;

  return (
    <div className="flex h-44 gap-1.5 overflow-hidden rounded-lg bg-mist">
      {visible.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${title}, photo ${i + 1}`}
          loading="lazy"
          decoding="async"
          onError={() => setFailed((f) => [...f, src])}
          className="h-full min-w-0 flex-1 object-cover"
        />
      ))}
    </div>
  );
};

const Achievements = () => {
  const { achievements } = portfolioData;

  return (
    <Section id="awards" title="Awards">
      <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item) => (
          <li key={item.title + item.award} className="flex flex-col">
            <Gallery images={item.images} title={item.title} />
            <h3 className="mt-5 text-lg font-semibold leading-snug text-ink">{item.title}</h3>
            <p className="mt-1 text-muted leading-snug">{item.award}</p>
            <div className="mt-3 flex items-center gap-4 text-[0.9375rem]">
              {item.year && <span className="text-muted tabular">{item.year}</span>}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-1 font-semibold text-clay hover:text-clay-dark"
                >
                  <span>
                    View certificate
                    <span className="sr-only">: {item.title} (opens in a new tab)</span>
                  </span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Achievements;
