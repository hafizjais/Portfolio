import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { portfolioData } from '../portfolioData';

// The page's one orchestrated motion moment: a short staggered entrance on load.
const enter = (i) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
  const { hero } = portfolioData;

  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-paper">
      {/* Decorative background, hero only. Overlays keep text contrast at AA or better. */}
      <img
        src="/hero-mountain.jpg"
        alt=""
        aria-hidden="true"
        width="2000"
        height="1333"
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_30%] saturate-[1.1]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-paper/85 via-paper/65 to-paper/30 max-lg:bg-paper/70 max-lg:bg-none"
      ></div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-b from-transparent to-paper"
      ></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-14 md:pb-20">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <motion.p {...enter(0)} className="flex items-center gap-2.5 text-[0.9375rem] font-medium text-ink">
              <span className="h-2.5 w-2.5 rounded-full bg-signal" aria-hidden="true"></span>
              {hero.tagline3}
            </motion.p>

            <motion.h1
              {...enter(1)}
              id="hero-title"
              className="mt-6 text-[clamp(2.75rem,8vw,5.75rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-ink"
            >
              Mohamad Hafiz
              <br />
              Bin Mohd Jais
            </motion.h1>

            <motion.p {...enter(2)} className="mt-7 max-w-[52ch] text-lg md:text-xl leading-relaxed text-ink-soft">
              {hero.summary}
            </motion.p>

            <motion.div {...enter(3)} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="/Resume_Hafiz.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center rounded-lg bg-clay px-6 font-semibold text-white transition-colors hover:bg-clay-dark"
              >
                My Resume
              </a>
              <a
                href={`mailto:${hero.email}`}
                className="inline-flex min-h-12 items-center rounded-lg border border-ink/25 px-6 font-semibold text-ink transition-colors hover:border-ink hover:bg-surface"
              >
                Email me
              </a>
              <span className="ml-1 inline-flex items-center gap-1.5 text-[0.9375rem] text-ink-soft">
                <MapPin size={16} aria-hidden="true" />
                {hero.location}
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-first lg:order-last lg:col-span-4"
          >
            <img
              src="/Gambar Profile.JPG"
              alt={`Portrait of ${hero.name}`}
              width="1227"
              height="1280"
              fetchPriority="high"
              className="h-28 w-28 sm:h-36 sm:w-36 lg:h-auto lg:w-full lg:aspect-[4/5] rounded-xl lg:rounded-2xl object-cover object-[50%_20%] ring-1 ring-line"
            />
          </motion.div>
        </div>

        <dl className="mt-14 md:mt-20 grid gap-6 border-t border-line pt-8 sm:grid-cols-3 sm:gap-8">
          {hero.highlights.map((item) => (
            <div key={item.label}>
              <dt className="text-sm text-ink-soft">{item.label}</dt>
              <dd className="mt-1.5 font-semibold leading-snug text-ink">{item.value}</dd>
              <dd className={`mt-0.5 text-sm text-ink-soft ${item.link ? '' : 'tabular'}`}>
                {item.detail}
                {item.link && (
                  <>
                    {' '}
                    <a
                      href={item.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-ink underline decoration-ink/30 decoration-2 underline-offset-4 hover:decoration-clay"
                    >
                      {item.link.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
