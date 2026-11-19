import React from 'react';

/**
 * Report-style section.
 * - layout="split": section title sits in a left margin column (sticky on desktop), content on the right.
 * - layout="stack": title above full-width content (pass `actions` for controls on the right).
 */
const Section = ({ id, title, intro, tone = 'paper', layout = 'split', actions, children }) => {
  const toneClass = tone === 'mist' ? 'bg-mist' : 'bg-paper';
  const titleId = `${id}-title`;

  const heading = (
    <>
      <h2 id={titleId} className="text-[1.75rem] md:text-[2rem] font-bold tracking-[-0.02em] leading-tight text-ink">
        {title}
      </h2>
      {intro && <p className="mt-3 text-base leading-relaxed text-muted max-w-prose">{intro}</p>}
    </>
  );

  return (
    <section id={id} aria-labelledby={titleId} className={`${toneClass} border-t border-line`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {layout === 'split' ? (
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <header className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">{heading}</div>
            </header>
            <div className="lg:col-span-9 min-w-0">{children}</div>
          </div>
        ) : (
          <>
            <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>{heading}</div>
              {actions}
            </header>
            {children}
          </>
        )}
      </div>
    </section>
  );
};

export default Section;
